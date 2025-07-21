import { SignUp } from "@clerk/clerk-react";
import "../CSS/Signup.css"; // adjust the path if your CSS folder is different

const Signup = () => {
  return (
    <div className="signup-container">
      <SignUp routing="path" path="/signup" />
    </div>
  );
};

export default Signup;
