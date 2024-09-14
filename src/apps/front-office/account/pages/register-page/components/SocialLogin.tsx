import apple from "assets/images/logo-register/logo-apple.svg";
import facebook from "assets/images/logo-register/logo-facebook.svg";
import google from "assets/images/logo-register/logo-google.svg";

import "./../input.css";
//
// import {
//   CredentialResponse,
//   GoogleLogin,
//   GoogleOAuthProvider,
// } from "@react-oauth/google";

export default function SocialLogin() {
  // const handleGoogleLoginSuccess = (credentialResponse: CredentialResponse) => {
  //   // Send this token to your backend for validation
  //   const token = credentialResponse.credential;
  //   //  API call to authenticate the token with your backend
  //   fetch("https://store.mentoor.io/google", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ token }),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log("Backend Response:", data);
  //     })
  //     .catch(error => {
  //       console.error("Error during Google login:", error);
  //     });
  // };

  //
  return (
    <div className="hidden lg:block col-span-2 mt-28	ms-5 p-12 w-fit	h-fit rounded-2xl	border border-solid border-[#ececec]">
      <div className="social bg-[#1877F2] text-white mb-5">
        <img src={facebook} alt="notFound" className="me-4" />
        <h2>Continue with Facebook</h2>
      </div>
      <div className="social mb-5 bg-[#fff] text-[#7E7E7E] border border-solid border-[#F2F3F4]">
        <img src={google} alt="notFound" className="me-4" />
        <h2>Continue with Google</h2>
      </div>
      {/* <GoogleOAuthProvider clientId="880055477948-6v14252666s19teh9fmmkk3paq2g24jn.apps.googleusercontent.com">
        <div>
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={() => console.log("Login Failed")}
            text="continue_with"
            size="large" 
          />
        </div>
      </GoogleOAuthProvider> */}
      <div className="social bg-[#000000] text-white">
        <img src={apple} alt="notFound" className="me-4" />
        <h2>Continue with Apple</h2>
      </div>
    </div>
  );
}
