import { trans } from "@mongez/localization";
import { navigateTo } from "@mongez/react-router";
import logo from "assets/images/logo-register/logo-facebook.svg";
import FacebookLogin, {
  ReactFacebookFailureResponse,
  ReactFacebookLoginInfo,
} from "react-facebook-login";
import { URLS } from "shared/utils";

const LoginByFacebook = () => {
  const responseFacebook = (
    response: ReactFacebookLoginInfo | ReactFacebookFailureResponse,
  ) => {
    const accessToken = response.accessToken;
    //  API call to authenticate the token with your backend
    fetch("https://store.mentoor.io/facebook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(() => {
        console.log("Success");
        navigateTo(URLS.home);
      })
      .catch(error => {
        console.error("Error during Google login:", error);
      });
  };

  return (
    <div>
      <FacebookLogin
        appId="1254626789041191" // Facebook App ID
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        textButton={trans("facebook")}
        cssClass="social bg-[#1877F2] text-white mb-5"
        icon={<img src={logo} alt="notFound" />}
      />
    </div>
  );
};

export default LoginByFacebook;
