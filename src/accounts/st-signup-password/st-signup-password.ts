import environment from 'environment';
import { authenticationService } from './../../models/authentication-service';

// サインアップ時のパスワード登録
export class StSignupPassword {

  password: string = "";   // パスワード（viewとバインド）
  token:    string = "";   // サーバー用のワンタイムトークン
  errors:   string[] = []; // 入力エラー（viewとバインド）

  // コンポーネント生成時処理（Aureliaのライフサイクル）
  created() {
    // アクセス時にログアウト状態の場合はログイン画面に飛ばす
    authenticationService.syncLoginStatus().then(alive => {
      if (!alive) {
        location.href = environment.BASE_URL_FRONT + "/#/login";
      }
    })
  }

  // コンポーネント活性化時処理（Aureliaのライフサイクル）
  activate(params: any) {
    // リクエストパラメータからトークンを取得
    this.token = params.token;
  }

  // 「パスワード登録」ボタン押下時処理（viewとバインド）
  // todo: リファクタリング。通信部分はサービスに切り出すべき
  submitSignup() {
    // APIへのリクエストボディ
    const body = JSON.stringify( { password: this.password, token: this.token } );
    // APIへのリクエストヘッダ
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    // APIへのリクエスト
    fetch(environment.BASE_URL + "/signup_password", { method: 'POST', headers: headers, body: body, mode: 'cors', credentials: 'include' })
    .then((response) => {
      if (response.ok) {
        // 成功時処理
        alert("アカウントを作成しました。");
        location.href = environment.BASE_URL_FRONT;
      } else {
        // 失敗時処理
        response.json().then(json => {
          this.errors = (json.errors as { msg: string }[]).map(item => item.msg);
        });
      }
    });
  }

}
