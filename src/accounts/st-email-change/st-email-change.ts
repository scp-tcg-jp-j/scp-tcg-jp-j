import environment from 'environment';
import { authenticationService } from './../../models/authentication-service';
export class StEmailChange {
  newEmail: string = "";

  created() {
    authenticationService.syncLoginStatus().then(alive => {
      if (!alive) {
        location.href = environment.BASE_URL_FRONT + "/#/login";
      }
    });
  }

  save() {
    const body = JSON.stringify( { email: this.newEmail } );
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    fetch(environment.BASE_URL + "/email_change", { method: 'POST', headers: headers, body: body, mode: 'cors', credentials: "include" })
    .then((response) => {
      if (response.ok) {
        alert("確認用のメールを送信しました。メールボックスをご確認ください");
      } else {
        alert("メールアドレスの更新に失敗しました。必要に応じてもう一度操作してください");
      }
      location.reload();
    });
  }
}
