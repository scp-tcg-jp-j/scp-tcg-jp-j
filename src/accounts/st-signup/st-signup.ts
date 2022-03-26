import environment from 'environment';
import { authenticationService } from './../../models/authentication-service';

// アカウント作成画面
export class StSignup {

  email:    string = "";   // メールアドレス（viewにバインド）
  username: string = "";   // ユーザー名（viewにバインド）
  errors:   string[] = []; // 入力エラー（viewにバインド）

  // コンポーネント生成時処理（Aureliaのライフサイクル）
  created() {
    // アクセス時に既にログインしている場合は検索画面に飛ばす
    authenticationService.syncLoginStatus().then(alive => {
      if (alive) {
        location.href = environment.BASE_URL_FRONT + "/#/search_cards";
      }
    });
  }

  // 「確認用メールの送信」ボタン押下時処理（viewとバインド）
  submitSignup() {
    // エラー表示のリセット
    this.errors = [];
    // APIのリクエストボディ
    const body = JSON.stringify( { email: this.email, username: this.username } );
    // APIのリクエストヘッダ
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    // APIへのリクエスト
    fetch(environment.BASE_URL + "/signup", { method: 'POST', headers: headers, body: body, mode: 'cors' })
    .then((response) => {
      if (response.ok) {
        // 成功時処理
        alert("確認用のメールを送信しました。メールボックスをご確認ください。\n※このウィンドウは閉じても問題ありません");
      } else {
        // 失敗時処理
        response.json().then(json => {
          this.errors = (json.errors as { msg: string }[]).map(item => item.msg);
        });
      }
    });
  }

}
