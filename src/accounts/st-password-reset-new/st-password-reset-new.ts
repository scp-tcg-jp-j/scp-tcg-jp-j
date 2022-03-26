import environment from 'environment';
import { authenticationService } from './../../models/authentication-service';

// パスワード
export class StPasswordResetNew {

  password: string = ""; // パスワード（viewとバインド）
  token:    string = ""; // サーバー用のワンタイムトークン

  // コンポーネント生成時処理（Aureliaのライフサイクル）
  created() {
    // アクセス時にログアウト状態の場合はログイン画面に飛ばす
    authenticationService.syncLoginStatus().then(alive => {
      if (alive) {
        location.href = environment.BASE_URL_FRONT + "/#/login";
      }
    });
  }

  // コンポーネント活性化時処理（Aureliaのライフサイクル）
  activate(params: any) {
    // リクエストパラメータからトークンを取得
    this.token = params.token;
  }

  // 「パスワード再登録」ボタン押下時処理（viewとバインド）
  // todo: リファクタリング。通信部分はサービスに切り出すべき
  submitPasswordReset() {
    // APIへのリクエストボディ
    const body = JSON.stringify( { password: this.password, token: this.token } );
    // APIへのリクエストヘッダ
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    // APIへのリクエスト
    fetch(environment.BASE_URL + "/password_reset_new", { method: 'POST', headers: headers, body: body, mode: 'cors' })
    .then((response) => {
      if (response.ok) {
        // 成功時処理
        alert("パスワードをリセットしました。新しいパスワードでログインしてください。");
        location.href = environment.BASE_URL_FRONT + "/#/login";
      } else {
        // 失敗時処理
        alert("リセットに失敗しました。必要に応じてもう一度操作してください");
      }
    });
  }

}
