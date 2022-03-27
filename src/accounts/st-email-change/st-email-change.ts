import environment from 'environment';
import { authenticationService } from './../../models/authentication-service';

// メールアドレス変更画面
export class StEmailChange {

  newEmail: string = ""; // 新しいメールアドレス（viewとバインド）
  errors:   string[] = []; // 入力エラー（viewにバインド）

  // コンポーネント生成時処理（Aureliaのライフサイクル）
  created() {
    // アクセス時にログアウト状態の場合はログイン画面に飛ばす
    authenticationService.syncLoginStatus().then(alive => {
      if (!alive) {
        location.href = environment.BASE_URL_FRONT + "/#/login";
      }
    });
  }

  // 「確認用メールの送信」ボタン押下時処理（viewとバインド）
  // todo: リファクタリング。通信部分はサービスに切り出すべき
  save() {
    // APIへのリクエストボディ
    const body = JSON.stringify( { email: this.newEmail } );
    // APIへのリクエストヘッダ
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    // APIへのリクエスト
    fetch(environment.BASE_URL + "/email_change", { method: 'POST', headers: headers, body: body, mode: 'cors', credentials: "include" })
    .then((response) => {
      if (response.ok) {
        // 成功時処理
        alert("確認用のメールを送信しました。メールボックスをご確認ください");
        location.reload();
      } else {
        // 失敗時処理
        response.json().then(json => {
          this.errors = (json.errors as { msg: string }[]).map(item => item.msg);
        });
      }
    });
  }
}
