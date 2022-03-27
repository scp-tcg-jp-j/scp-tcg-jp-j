import { authenticationService } from './../../models/authentication-service';
import environment from "environment";
import { User } from "models/user";
import {computedFrom} from 'aurelia-framework';

// ユーザー管理画面
export class StUserManager {
  
  public users: User[]  = [];                    // 全ユーザーのデータ（viewとバインド）
  currentPage: number   = 0;                     // 現在何ページ目を見ているか（viewとバインド）
  authenticationService = authenticationService; // 認証サービス

  // todo: 選択肢は別クラスに置く
  roleOptions = [
    { key: 'user', text: 'ユーザー' },
    { key: 'administrator', text: '管理者' }
  ];

  // コンポーネント生成時処理（Aureliaのライフサイクル）
  created() {
    // APIへのリクエストヘッダ
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    // APIへのリクエスト
    // todo: リファクタリング。通信部分はサービスに切り出すべき
    fetch(environment.BASE_URL + "/admin/users", { method: 'POST', headers: headers, mode: 'cors', credentials: "include" })
    .then(response => response.json())
    .then(json => { 
      // 成功時処理
      this.users = json.users;
    })
    .catch(reason => console.error(JSON.stringify(reason))); // 失敗時処理
  }

  // 現在表示中のユーザーのIDリスト（viewとバインド）
  @computedFrom("currentPage", "users")
  get currentPageItemsId() {
    return this.users.slice(this.currentPage * 10, this.currentPage * 10 + 10).map(item => item._id);
  }

  // 現在表示中のユーザーリストは最初のページか（viewとバインド）
  @computedFrom("currentPage", "users")
  get isFirstPage() {
    return this.currentPage == 0;
  }

  // 現在表示中のユーザーリストは最後のページか（viewとバインド）
  @computedFrom("currentPage", "users")
  get isLastPage() {
    return (this.currentPage + 1) * 10 > this.users.length;
  }

  // ユーザーリストの最後のページ番号（viewとバインド）
  @computedFrom("users")
  get lastPage() {
    return Math.floor(this.users.length / 10);
  }

  // ユーザーリストの最初のページに飛ぶ（viewとバインド）
  goFirst() {
    this.currentPage = 0;
  }

  // ユーザーリストの1つ前のページに飛ぶ（viewとバインド）
  goBack() {
    this.currentPage--;
  }

  // ユーザーリストの1つ次のページに飛ぶ（viewとバインド）
  goNext() {
    this.currentPage++;
  }

  // ユーザーリストの最後のページに飛ぶ（viewとバインド）
  goLast() {
    this.currentPage = this.lastPage;
  }

  // ロール編集を一時的に保持
  roleChanges: { role: string, targetId: string }[] = [];

  // ロール編集（viewとバインド）
  roleEdit(newValue: string, targetId: string) {
    if (this.roleChanges.some(roleChange => roleChange.targetId == targetId)) {
      this.roleChanges = this.roleChanges.filter(roleChange => roleChange.targetId != targetId);
    } else {
      this.roleChanges.push({ role: newValue, targetId: targetId });
    }
  }

  // BAN編集を一時的に保持
  banChanges: { banned: boolean, targetId: string }[] = [];

  // BAN編集（viewとバインド）
  banEdit(newValue: boolean, targetId: string) {  
    (this.users.find(user => user._id == targetId) as any).banned = newValue;
    if (this.banChanges.some(banChange => banChange.targetId == targetId)) {
      this.banChanges = this.banChanges.filter(banChange => banChange.targetId != targetId);
    } else {
      this.banChanges.push({ banned: newValue, targetId: targetId });
    }
  }

  // 保存（viewとバインド）
  save() {
    let message = "以下のユーザーへの変更を保存しますか？\n";

    this.roleChanges.forEach(roleChange => {
      const username = this.users.find(user => user._id == roleChange.targetId)!!.username;
      // todo: 権限が増えたらちゃんとやる
      message += "・" + username + "  ";
      if (roleChange.role == "user") {
        message += "権限変更(管理者 -> ユーザー)";
      } else {
        message += "権限変更(ユーザー -> 管理者)";
      }
      message += "\n";
    });

    this.banChanges.forEach(banChange => {
      const username = this.users.find(user => user._id == banChange.targetId)!!.username;
      message += "・" + username + "  ";
      if (banChange.banned) {
        message += "BAN";
      } else {
        message += "BAN解除";
      }
      message += "\n";
    });

    const doChange = confirm(message);
    if (doChange) {
      const body = JSON.stringify( { changes: ([] as any[]).concat(this.roleChanges).concat(this.banChanges) } );
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };  
      // todo: リファクタリング。通信部分はサービスに切り出すべき
      fetch(environment.BASE_URL + "/admin/edit_users", { method: 'POST', headers: headers, body: body, mode: 'cors', credentials: "include" })
      .then((response) => {
        if (response.ok) {
          alert("ユーザーの更新に成功しました");
        } else {
          alert("ユーザーの更新に一部失敗しました。必要に応じてもう一度操作してください");
        }
        location.reload();
      });
    }
  }

}
