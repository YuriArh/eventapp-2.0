import { makeAutoObservable } from "mobx";

class AuthModel {
  authMode = "login";
  name = "";
  password = "";
  email = "";
  userName = "";
  constructor() {
    makeAutoObservable(this);
  }
}

const authModel = new AuthModel();
export default authModel;
