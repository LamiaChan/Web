import {makeObservable, observable, action } from "mobx";
import autoStore from "./autoStore";

export class UserStore {
  data = {
    user: {
      name: '',
      bAuth: false,
      bContinueAsGuest: false
    }
  }

  constructor() {
    makeObservable(this, {
      data: observable,
      setUsername: action
    });
    autoStore(this, 'userStore')
  }
  setUsername(value) {
    this.data.user.name = value
  }
  setAuth(value) {
    this.data.user.bAuth = value
  }
  setAsGuest(value) {
    this.data.user.bContinueAsGuest = value
  }
}
