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

  //
  submitSignup() {
    this.errors = [];

    const body = JSON.stringify( { email: this.email, username: this.username } );
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    fetch(environment.BASE_URL + "/signup", { method: 'POST', headers: headers, body: body, mode: 'cors' })
    .then((response) => {
      if (response.ok) {
        alert("確認用のメールを送信しました。メールボックスをご確認ください。\n※このウィンドウは閉じても問題ありません");
      } else {
        response.json().then(json => {
          this.errors = (json.errors as { msg: string }[]).map(item => item.msg);
        });
      }
    });
  }
}
