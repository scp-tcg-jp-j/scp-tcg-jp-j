import environment from 'environment';
import { authenticationService } from './../../models/authentication-service';

// アカウント削除確認画面
export class StAccountDelete {

  password: string = ""; // パスワード（viewとバインド）

  // コンポーネント生成時処理（Aureliaのライフサイクル）
  created() {
    // アクセス時にログアウト状態の場合はログイン画面に飛ばす
    authenticationService.syncLoginStatus().then(alive => {
      if (!alive) {
        location.href = environment.BASE_URL_FRONT + "/#/login";
      }
    });
  }

  // 「アカウント削除」ボタン押下時処理（viewとバインド）
  // todo: リファクタリング。通信部分はサービスに切り出すべき
  submitAccountDelete() {
    // APIへのリクエストボディ
    const body = JSON.stringify( { password: this.password } );
    // APIへのリクエストヘッダ
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    // APIへのリクエスト
    fetch(environment.BASE_URL + "/account_delete", { method: 'POST', headers: headers, body: body, mode: 'cors', credentials: 'include' })
    .then((response) => {
      if (response.ok) {
        // 成功時処理
        alert("アカウントを削除しました。ご愛顧いただきありがとうございました。");
        location.href = environment.BASE_URL_FRONT;
      } else {
        // 失敗時処理
        alert("アカウント削除に失敗しました。必要に応じてもう一度操作してください");
      }
    });
  }

}
