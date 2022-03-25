import environment from 'environment';
import { authenticationService } from './../../models/authentication-service';
export class StUsernameChange {
  newUsername: string = "";

  created() {
    authenticationService.syncLoginStatus().then(alive => {
      if (!alive) {
        location.href = environment.BASE_URL_FRONT + "/#/login"
      }
    });
  }

  save() {
    const body = JSON.stringify( { username: this.newUsername } );
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    fetch(environment.BASE_URL + "/username-change", { method: 'POST', headers: headers, body: body, mode: 'cors', credentials: "include" })
    .then((response) => {
      if (response.ok) {
        alert("ユーザー名の更新に成功しました");
      } else {
        alert("ユーザー名の更新に失敗しました。必要に応じてもう一度操作してください");
      }
      location.reload();
    });
  }
}
