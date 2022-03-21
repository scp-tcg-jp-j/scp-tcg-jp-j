import environment from 'environment';
import { authenticationService } from './../../models/authentication-service';
export class StEmailChangeNew {

  created() {
    authenticationService.nowLogin().then(alive => {
      if (!alive) {
        location.href = environment.BASE_URL_FRONT + "/#/login";
      }
    });
  }

  activate(params: any) {
    const body = JSON.stringify( { token: params.token } )
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    fetch(environment.BASE_URL + "/email_change_new", { method: 'POST', headers: headers, body: body, mode: 'cors', credentials: "include" })
    .then((response) => {
      if (response.ok) {
        alert("メールアドレスを変更しました");
        location.href = environment.BASE_URL_FRONT + "/#/email-change"
      } else {
        alert("変更に失敗しました。必要に応じてもう一度操作してください");
      }
    });
  }
}
