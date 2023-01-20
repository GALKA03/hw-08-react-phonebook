import { RegisterForm } from "./RegisterForm/RegisterForm";
import { LoginForm } from "./LoginForm/LoginForm";
import { UserAuthMenu } from "./UserAuthMenu/UserAuthMenu"

export const App = () => {
  


  
  return (
    <>
      {/* <Routes>

      </Routes> */}
       <UserAuthMenu/>
      <RegisterForm />
      <LoginForm/> 
    </>
  );
};
