import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
 
// アカウント系の画面のサイドバー
@inject(Router)
export class StAccountSideBar {

  // コンストラクタ経由でDIする
  constructor(private router: Router) {}

  // 「アカウント情報」ボタン押下時処理（viewとバインド）
  goAccountInfo() {
    this.router.navigateToRoute('account-info');
  }

  // 「メールアドレス変更」ボタン押下時処理（viewとバインド）
  goEmailChange() {
    this.router.navigateToRoute('email-change');
  }

  // 「ユーザー名変更」ボタン押下時処理（viewとバインド）
  goUsernameChange() {
    this.router.navigateToRoute('username-change');
  }

  // 「パスワード変更」ボタン押下時処理（viewとバインド）
  goPasswordChange() {
    this.router.navigateToRoute('password-change');
  }

  // 「アカウント削除」ボタン押下時処理（viewとバインド）
  goAccountDelete() {
    this.router.navigateToRoute('account-delete');
  }

}
