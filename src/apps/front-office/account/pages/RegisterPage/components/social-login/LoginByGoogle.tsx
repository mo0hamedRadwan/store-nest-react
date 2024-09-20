import { trans } from "@mongez/localization";
import { navigateBack } from "@mongez/react-router";
import { CredentialResponse, useGoogleLogin } from "@react-oauth/google";
import google from "assets/images/logo-register/logo-google.svg";
export default function LoginByGoogle() {
  const handleGoogleLoginSuccess = (credentialResponse: CredentialResponse) => {
    // Send this token to your backend for validation
    const token = credentialResponse.credential;
    //  API call to authenticate the token with your backend
    fetch("https://store.mentoor.io/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        console.log("Success");
        navigateBack();
      })
      .catch(error => {
        console.error("Error during Google login:", error);
      });
  };
  const login = useGoogleLogin({
    onSuccess: () => handleGoogleLoginSuccess,
    onError: () => console.log("Login Failed"),
  });
  return (
    <div
      onClick={() => login()}
      className="social mb-5 bg-[#fff] text-[#7E7E7E] border border-solid border-[#F2F3F4]">
      <img src={google} alt="notFound" className="me-4" />
      <h2>{trans("google")}</h2>
    </div>
  );
}
