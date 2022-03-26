import environment from 'environment';
import { authenticationService } from './../../models/authentication-service';

// パスワードリセット画面
export class StPasswordReset {

  email: string = ""; // メールアドレス（viewとバインド）

  // コンポーネント生成時処理（Aureliaのライフサイクル）
  created() {
    // アクセス時にログアウト状態の場合はログイン画面に飛ばす
    authenticationService.syncLoginStatus().then(alive => {
      if (alive) {
        location.href = environment.BASE_URL_FRONT + "/#/login";
      }
    });
  }

  // 「確認用メールの送信」ボタン押下時処理（viewとバインド）
  // todo: リファクタリング。通信部分はサービスに切り出すべき
  submitPasswordReset() {
    // APIへのリクエストボディ
    const body = JSON.stringify( { email: this.email } );
    // APIへのリクエストヘッダ
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    // APIへのリクエスト
    fetch(environment.BASE_URL + "/password_reset", { method: 'POST', headers: headers, body: body, mode: 'cors' })
    .then((response) => {
      if (response.ok) {
        // 成功時処理
        alert("確認用のメールを送信しました。メールボックスをご確認ください。");
      } else {
        // 失敗時処理
        alert("送信に失敗しました。必要に応じてもう一度操作してください");
      }
    });
  }

}
