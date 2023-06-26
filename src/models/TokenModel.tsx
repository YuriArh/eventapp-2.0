import { makeAutoObservable } from "mobx";
import { createUser, loginUser } from "../api/authApi";

class TokenModel {
  user = {};
  constructor() {
    makeAutoObservable(this);
  }

  async createUser(user: any) {
    try {
      this.user = await createUser(user);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }

  async loginUser(user: any) {
    try {
      this.user = await loginUser(user);
    } catch (error) {
      console.error("Error login user:", error);
    }
  }
}

const tokenModel = new TokenModel();
export default tokenModel;
