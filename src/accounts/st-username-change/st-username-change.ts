import environment from 'environment';
import { authenticationService } from './../../models/authentication-service';

// ユーザー名変更画面
export class StUsernameChange {

  newUsername: string = ""; // 新しいユーザー名（viewとバインド）

  // コンポーネント生成時処理（Aureliaのライフサイクル）
  created() {
    // アクセス時にログアウト状態の場合はログイン画面に飛ばす
    authenticationService.syncLoginStatus().then(alive => {
      if (!alive) {
        location.href = environment.BASE_URL_FRONT + "/#/login";
      }
    });
  }

  // 「保存」ボタン押下時処理（viewとバインド）
  // todo: リファクタリング。通信部分はサービスに切り出すべき
  save() {
    // APIへのリクエストボディ
    const body = JSON.stringify( { username: this.newUsername } );
    // APIへのリクエストヘッダ
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    // APIへのリクエスト
    fetch(environment.BASE_URL + "/username-change", { method: 'POST', headers: headers, body: body, mode: 'cors', credentials: "include" })
    .then((response) => {
      if (response.ok) {
        alert("ユーザー名の更新に成功しました");
      } else {
        alert("ユーザー名の更新に失敗しました。必要に応じてもう一度操作してください");
      }
      location.reload();
    });
  }
}
