import environment from 'environment';
import { authenticationService } from './../../models/authentication-service';
export class StPasswordChange {
  currentPassword: string = "";
  newPassword: string = "";

  created() {
    authenticationService.nowLogin().then(alive => {
      if (!alive) {
        location.href = environment.BASE_URL_FRONT + "/#/login";
      }
    });
  }

  save() {
    const body = JSON.stringify( { currentPassword: this.currentPassword, newPassword: this.newPassword } );
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    fetch(environment.BASE_URL + "/password-change", { method: 'POST', headers: headers, body: body, mode: 'cors', credentials: "include" })
    .then((response) => {
      if (response.ok) {
        alert("パスワードの更新に成功しました");
      } else {
        alert("パスワードの更新に失敗しました。必要に応じてもう一度操作してください");
      }
      location.reload();
    });
  }
}
