import { authenticationService } from './../../models/authentication-service';
import environment from "environment";
import { User } from "models/user";
import {computedFrom} from 'aurelia-framework';
import {IDropdownOption} from '@fluentui/react/lib/Dropdown'

export class StUserManager {
  
  public users: User[] = []
  currentPage: number = 0
  authenticationService = authenticationService

  // todo: 選択肢は別クラスに置く
  roleOptions = [
    { key: 'user', text: 'ユーザー' },
    { key: 'administrator', text: '管理者' }
  ]

  // 現在見ているページのユーザーn件

  created() {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    fetch(environment.BASE_URL + "/admin/users", { method: 'POST', headers: headers, mode: 'cors', credentials: "include" })
    .then(response => response.json())
    .then(json => { 
      this.users = json.users;
    })
    .catch(reason => console.error(JSON.stringify(reason)));
  }

  @computedFrom("currentPage", "users")
  get currentPageItemsId() {
    return this.users.slice(this.currentPage * 10, this.currentPage * 10 + 10).map(item => item._id)
  }

  @computedFrom("currentPage", "users")
  get isFirstPage() {
    return this.currentPage == 0
  }
  @computedFrom("currentPage", "users")
  get isLastPage() {
    return (this.currentPage + 1) * 10 > this.users.length
  }
  @computedFrom("users")
  get lastPage() {
    return Math.floor(this.users.length / 10)
  }
  goFirst() {
    this.currentPage = 0
  }
  goBack() {
    this.currentPage--
  }
  goNext() {
    this.currentPage++
  }
  goLast() {
    this.currentPage = this.lastPage
  }

  /* du-dropdownが動かないので保留
  roleEdit(event: any, option?: IDropdownOption, index?: number) {
    this.users[1].role="administrator"
  }*/
  roleChanges: { role: string, targetId: string }[] = []
  roleEdit(newValue: string, targetId: string) {

    if (this.roleChanges.some(roleChange => roleChange.targetId == targetId)) {
      this.roleChanges = this.roleChanges.filter(roleChange => roleChange.targetId != targetId)
    } else {
      this.roleChanges.push({ role: newValue, targetId: targetId })
    }
  }

  banChanges: { banned: boolean, targetId: string }[] = []
  banEdit(newValue: boolean, targetId: string) {
  
    (this.users.find(user => user._id == targetId) as any).banned = newValue
    if (this.banChanges.some(banChange => banChange.targetId == targetId)) {
      this.banChanges = this.banChanges.filter(banChange => banChange.targetId != targetId)
    } else {
      this.banChanges.push({ banned: newValue, targetId: targetId })
    }
  }

  save() {
    let message = "以下のユーザーへの変更を保存しますか？\n";
    this.roleChanges.forEach(roleChange => {
      const username = this.users.find(user => user._id == roleChange.targetId)!!.username
      // todo: 権限が増えたらちゃんとやる
      message += "・" + username + "  ";
      if (roleChange.role == "user") {
        message += "権限変更(管理者 -> ユーザー)"
      } else {
        message += "権限変更(ユーザー -> 管理者)"
      }
      message += "\n"
    })

    this.banChanges.forEach(banChange => {
      const username = this.users.find(user => user._id == banChange.targetId)!!.username
      message += "・" + username + "  ";
      if (banChange.banned) {
        message += "BAN"
      } else {
        message += "BAN解除"
      }
      message += "\n"
    })


    const doChange = confirm(message)
    if (doChange) {
      const body = JSON.stringify( { changes: ([] as any[]).concat(this.roleChanges).concat(this.banChanges) } )
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
  
      fetch(environment.BASE_URL + "/admin/edit_users", { method: 'POST', headers: headers, body: body, mode: 'cors', credentials: "include" })
      .then((response) => {
        if (response.ok) {
          alert("ユーザーの更新に成功しました");
        } else {
          alert("ユーザーの更新に一部失敗しました。必要に応じてもう一度操作してください");
        }
        location.reload()
      });
    }
  }
}
