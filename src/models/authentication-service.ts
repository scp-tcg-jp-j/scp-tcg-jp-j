import environment from "environment";
import { User } from "./user";
import {computedFrom} from 'aurelia-framework';
export let afterLogin: string = ""

export class AuthenticationService {
  public user: User | null = null
  public login(usernameOrEmail: string, password: string) {
    const body = JSON.stringify( { usernameOrEmail: usernameOrEmail, password: password } )
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    return fetch(environment.BASE_URL + "/login", { method: 'POST', headers: headers, body: body, mode: 'cors', credentials: 'include' })
    .then(response => response.json())
    .then((json) => {
      if (json.result == "ok") {
        this.user = json.account;
        return true;
      } else {
        this.user = null;
        return false;
      }
    });
  }

  constructor() {
    // セッションの死活を取得し、生きているならユーザー情報を持っておく。
    this.nowLogin(true);

    // 別タブでログインした場合は認証情報を取る。
    window.addEventListener('storage', (event: any) =>{
      if (event.key == 'stjjaic-event-login') { 
        this.nowLogin();
      }
    });

    // 別タブでログアウトした場合は検索画面に飛ばす。
    window.addEventListener('storage', function(event){
      if (event.key == 'stjjaic-event-logout') { 
        location.href = environment.BASE_URL_FRONT + "/search_cards";
      }
    });
  }

  checked = false;
  // セッションの生死に関わらずログインしたことがあるか
  @computedFrom("user")
  public get hasLogin() {
    return this.user != null
  }

  // セッションが生きているか
  public nowLogin(shouldEmit?: boolean) {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    return fetch(environment.BASE_URL + "/session", { method: 'POST', headers: headers, body: "", mode: 'cors', credentials: 'include' })
    .then(response => response.json()).then(json => {
      this.checked = true;
      if (json.alive) {
        this.user = json.account;
          // 必要ならlocalStorage経由で別タブにもログインを通知する（このタブが最初のログインの場合のみ通知が必要）
        if (shouldEmit) {
          localStorage.setItem('stjjaic-event-login', 'login' + Math.random());
        }
        return true;
      } else {
        this.user = null;
        return false;
      }
    })
  }

  public logout() {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    return fetch(environment.BASE_URL + "/logout", { method: 'POST', headers: headers, mode: 'cors', credentials: 'include' })
    .then(response => {
      // todo: 異常系を考える

      // 認証情報をフロントから消す
      this.user = null;
      // localStorage経由で別タブにもログアウトを通知する
      localStorage.setItem('stjjaic-event-logout', 'logout' + Math.random());
      // 検索画面に飛ばす
      location.href = environment.BASE_URL_FRONT + "/search_cards"
    });
  }
}

export const authenticationService = new AuthenticationService()
