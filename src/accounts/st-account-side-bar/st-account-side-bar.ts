import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
 
@inject(Router)
export class StAccountSideBar {
  constructor(private router: Router) {}

  goAccountInfo() {
    this.router.navigateToRoute('account-info')    
  }
  goEmailChange() {
    this.router.navigateToRoute('email-change')    
  }
  goUsernameChange() {
    this.router.navigateToRoute('username-change')    
  }
  goPasswordChange() {
    this.router.navigateToRoute('password-change')    
  }
  goAccountDelete() {
    this.router.navigateToRoute('account-delete')    
  }
}
