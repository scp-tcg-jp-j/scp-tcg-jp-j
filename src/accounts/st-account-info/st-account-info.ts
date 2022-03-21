import environment from 'environment';
import { authenticationService } from './../../models/authentication-service';
export class StAccountInfo {
  username: string = "";
  email: string = "";

  created() {
    authenticationService.nowLogin().then(alive => {
      if (alive) {
        this.username = authenticationService.user?.username!!;
        this.email = authenticationService.user?.email!!;
      } else {
        location.href = environment.BASE_URL_FRONT + "/#/login";
      }
    });
  }
}
