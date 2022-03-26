import environment from 'environment';
import { authenticationService } from './../../models/authentication-service';

// アカウント情報画面
export class StAccountInfo {

  username: string = ""; // ユーザー名（viewとバインド）
  email:    string = ""; // メールアドレス（viewとバインド）

  // コンポーネント生成時処理（Aureliaのライフサイクル）
  created() {
    // アクセス時にログアウト状態の場合はログイン画面に飛ばす
    authenticationService.syncLoginStatus().then(alive => {
      if (alive) {
        // 成功時処理
        // ユーザー名とメールアドレスを表示する
        this.username = authenticationService.user?.username!!;
        this.email = authenticationService.user?.email!!;
      } else {
        // 失敗時処理
        location.href = environment.BASE_URL_FRONT + "/#/login";
      }
    });
  }

}
