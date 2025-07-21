import { SignIn } from "@clerk/clerk-react";
import "../CSS/Login.css"; // adjust path if needed

const Login = () => {
  return (
    <div className="login-container">
      <SignIn routing="path" path="/login" />
    </div>
  );
};

export default Login;
