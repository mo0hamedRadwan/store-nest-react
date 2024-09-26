import { FormInterface } from "@mongez/react-form";
import router, {
  navigateBack,
  navigateTo,
  refresh,
} from "@mongez/react-router";
import React from "react";
import { URLS } from "shared/utils";
import { resetPasswordAtom } from "../atoms";
import {
  forgetPassword,
  login,
  register,
  resetPassword,
  verifyCode,
  verifyForgetPassword,
} from "../services/auth.service";
import user from "../user";

const goBack = () => {
  setTimeout(() => {
    if (!Object.values(URLS.auth).includes(router.getPreviousRoute())) {
      navigateBack();
    } else {
      navigateTo(URLS.home);
    }
  }, 0);
};

const onSuccessLogin = () => {
  goBack();
};

/**
 * Login hook
 * It return the onSubmit callback
 */
export function useLogin() {
  const loginSubmit = ({ values, form }) => {
    login(values)
      .then(onSuccessLogin)
      .catch(() => {
        form.submitting(false);
      });
  };

  return loginSubmit;
}

/**
 * Create account/Register hook
 * It return the onSubmit callback
 */
export function useCreateAccount() {
  const createAccount = ({ values, form }) => {
    register(values)
      .then(() => {
        goBack();
        console.log("Success");
      })
      .catch(() => {
        form.submitting(false);
        console.log("Error");
      });
  };

  return createAccount;
}

/**
 * Verify register code hook
 * Use this hook to verify user account after registration
 */
export function useCreateAccountVerifyCode() {
  const verifyCodeSubmit = ({ values, form }) => {
    verifyCode(values)
      .then(() => {
        onSuccessLogin();
      })
      .catch(() => {
        form.submitting(false);
      });
  };

  return verifyCodeSubmit;
}

/**
 * Perform logout
 */
export function useLogout(hardReload = true) {
  return () => {
    user.logout();

    setTimeout(() => {
      if (hardReload) {
        window.location.reload();
      } else {
        refresh();
      }
    }, 0);
  };
}

/**
 * Send forget password request hook
 */
export function useForgetPassword() {
  const forgetPasswordSubmit = ({ values, form }) => {
    forgetPassword(values)
      .then(() => {
        resetPasswordAtom.update({
          ...resetPasswordAtom.value,
          // use only the email or phone number
          email: form.value("email"),
          phoneNumber: form.value("phoneNumber"),
        });

        setTimeout(() => {
          navigateTo(URLS.auth.verifyForgetPassword);
        }, 100);
      })
      .catch(() => {
        form.submitting(false);
      });
  };

  return forgetPasswordSubmit;
}

/**
 * Verify forget password code hook
 */
export function useVerifyForgetPasswordOTP() {
  const verifyForgetPasswordOTPSubmit = (
    e: React.FormEvent,
    form: FormInterface,
  ) => {
    verifyForgetPassword({
      email: resetPasswordAtom.get("email"),
      phoneNumber: resetPasswordAtom.get("phoneNumber"),
      code: resetPasswordAtom.get("tempOTP"),
    })
      .then(() => {
        resetPasswordAtom.change("code", resetPasswordAtom.get("tempOTP"));

        navigateTo(URLS.auth.resetPassword);
      })
      .catch(() => {
        form.submitting(false);
      });
  };

  return verifyForgetPasswordOTPSubmit;
}

/**
 * Reset password hook
 */
export function useResetPassword() {
  const resetPasswordSubmit = ({ values, form }) => {
    resetPassword(values)
      .then(() => {
        navigateTo(URLS.auth.login);
        resetPasswordAtom.reset();
      })
      .catch(() => {
        form.submitting(false);
      });
  };

  return resetPasswordSubmit;
}
