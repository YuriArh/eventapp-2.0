import authModel from "../models/AuthModel";
import tokenModel from "../models/TokenModel";

class AuthViewModel {
  get getAuthMode() {
    return authModel.authMode;
  }

  toggleLoginForm() {
    authModel.authMode = "register";
  }

  toggleRegisterForm() {
    authModel.authMode = "login";
  }

  async createUser() {
    await tokenModel.createUser({
      name: authModel.name,
      password: authModel.password,
      email: authModel.email,
      username: authModel.userName,
    });
  }

  async loginUser() {
    await tokenModel.loginUser({
      password: authModel.password,
      identifier: authModel.email,
    });
  }

  changeName(name: string) {
    authModel.name = name;
  }

  changeEmail(email: string) {
    authModel.email = email;
  }

  changePassword(password: string) {
    authModel.password = password;
  }

  changeUsername(username: string) {
    authModel.userName = username;
  }
}

const authViewModel = new AuthViewModel();
export default authViewModel;
