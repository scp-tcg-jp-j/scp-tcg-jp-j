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
    this.nowLogin()
  }

  checked = false;
  // セッションの生死に関わらずログインしたことがあるか
  @computedFrom("user")
  public get hasLogin() {
    return this.user != null
  }

  // セッションが生きているか
  public nowLogin() {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    return fetch(environment.BASE_URL + "/session", { method: 'POST', headers: headers, body: "", mode: 'cors', credentials: 'include' })
    .then(response => response.json()).then(json => {
      this.checked = true;
      if (json.alive) {
        this.user = json.account;
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
      this.user = null
      location.href = environment.BASE_URL_FRONT + "/search_cards"
    });
  }
}

export const authenticationService = new AuthenticationService()
