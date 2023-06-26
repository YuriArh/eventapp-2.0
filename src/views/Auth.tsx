import { observer } from "mobx-react";
import authViewModel from "../viewmodels/AuthViewModel";
import LoginPage from "../pages/Auth/components/LoginPage";
import RegisterPage from "../pages/Auth/components/RegisterPage";

const Auth = observer(() => {
  const {
    toggleLoginForm,
    toggleRegisterForm,
    getAuthMode,
    createUser,
    changeEmail,
    changeName,
    changePassword,
    changeUsername,
    loginUser,
  } = authViewModel;
  return (
    <div>
      <div>
        {getAuthMode === "login" && (
          <LoginPage
            toggleLoginForm={toggleLoginForm}
            changeEmail={changeEmail}
            changePassword={changePassword}
            loginUser={loginUser}
          />
        )}
        {getAuthMode === "register" && (
          <RegisterPage
            toggleRegisterForm={toggleRegisterForm}
            changeEmail={changeEmail}
            changePassword={changePassword}
            createUser={createUser}
            changeName={changeName}
            changeUsername={changeUsername}
          />
        )}
      </div>
    </div>
  );
});

export default Auth;
