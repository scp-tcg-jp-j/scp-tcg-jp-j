import { authenticationService } from './models/authentication-service';
import {PLATFORM} from 'aurelia-pal';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  public router: Router | null = null;
  public authenticationService = authenticationService
  public logout = authenticationService.logout
  public saveUrlBeforeLogin = authenticationService.saveUrlBeforeLogin

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'STJJ.AIC';
    config.map([
      {
        route: [''],
        name: 'search',
        moduleId: PLATFORM.moduleName('./st-search/st-search'),
        nav: true,
        title: 'カード検索'
      },
      {
        route: ['credits'],
        name: 'credits',
        moduleId: PLATFORM.moduleName('./st-credits/st-credits'),
        nav: true,
        title: 'クレジット'
      },
      {
        route: ['login'],
        name: 'login',
        moduleId: PLATFORM.moduleName('./st-login/st-login'),
        nav: true,
        title: 'ログイン'
      },
      {
        route: ['account-info'],
        name: 'account-info',
        moduleId: PLATFORM.moduleName('./accounts/st-account-info/st-account-info'),
        nav: true,
        title: 'アカウント情報'
      },
      {
        route: ['email-change'],
        name: 'email-change',
        moduleId: PLATFORM.moduleName('./accounts/st-email-change/st-email-change'),
        nav: true,
        title: 'メールアドレス変更'
      },
      {
        route: ['email-change-new'],
        name: 'email-change-new',
        moduleId: PLATFORM.moduleName('./accounts/st-email-change-new/st-email-change-new'),
        nav: true,
        title: 'メールアドレス変更'
      },
      {
        route: ['username-change'],
        name: 'username-change',
        moduleId: PLATFORM.moduleName('./accounts/st-username-change/st-username-change'),
        nav: true,
        title: 'ユーザー名変更'
      },
      {
        route: ['password-change'],
        name: 'password-change',
        moduleId: PLATFORM.moduleName('./accounts/st-password-change/st-password-change'),
        nav: true,
        title: 'パスワード変更'
      },
      {
        route: ['account-delete'],
        name: 'account-delete',
        moduleId: PLATFORM.moduleName('./accounts/st-account-delete/st-account-delete'),
        nav: true,
        title: 'アカウント削除'
      },
      {
        route: ['password-reset'],
        name: 'password-reset',
        moduleId: PLATFORM.moduleName('./accounts/st-password-reset/st-password-reset'),
        nav: true,
        title: 'パスワード再登録'
      },
      {
        route: ['password-reset-new'],
        name: 'password-reset-new',
        moduleId: PLATFORM.moduleName('./accounts/st-password-reset-new/st-password-reset-new'),
        nav: true,
        title: 'パスワード再登録'
      },
      // 以下はサインアップフロー
      {
        route: ['signup'],
        name: 'signup',
        moduleId: PLATFORM.moduleName('./accounts/st-signup/st-signup'),
        nav: true,
        title: 'アカウント作成'
      },
      {
        route: ['signup-password'],
        name: 'signup-password',
        moduleId: PLATFORM.moduleName('./accounts/st-signup-password/st-signup-password'),
        nav: true,
        title: 'アカウント作成-パスワード登録'
      },
      // 以下は管理者用画面
      {
        route: ['user-manager'],
        name: 'user-manager',
        moduleId: PLATFORM.moduleName('./admin/st-user-manager/st-user-manager'),
        nav: true,
        title: 'ユーザー管理'
      },
    ]);

    this.router = router;
  }

}
