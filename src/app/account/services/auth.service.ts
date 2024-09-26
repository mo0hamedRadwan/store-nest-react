import { GuestData, RegisterData, UserData } from "app/account/utils/types";
import endpoint from "shared/endpoint";

/**
 * Get Guest token
 */
export async function getGuestToken(): Promise<GuestData> {
  const response = await endpoint.post("/login/guests");

  return response.data.user;
}

/**
 * Perform login
 */
export async function login(data: any): Promise<UserData> {
  const response = await endpoint.post("/login", data);

  return response.data.user;
}

/**
 * Create new account
 */
export async function register(data: RegisterData): Promise<void> {
  await endpoint.post("/register", data);
}

/**
 * Get current user data
 */
export async function getMe(): Promise<UserData> {
  const response = await endpoint.get("/me");

  return response.data.user;
}

/**
 * Edit user profile
 */
export function editProfile(data: any) {
  return endpoint.post("/me", data);
}

/**
 * Change password
 */
export function changePassword(data: any) {
  return endpoint.post("/change-password", data);
}

/**
 * Forget password request
 */
export function forgetPassword(data: any) {
  return endpoint.post("/forget-password", data);
}

/**
 * Verify forget password code
 */
export function verifyForgetPassword(data: any) {
  return endpoint.post("/verify-code", data);
}

/**
 * Reset password
 */
export function resetPassword(data: any) {
  return endpoint.post("/reset-password", data);
}

/**
 * Register verification code
 */
export function verifyCode(data: any) {
  return endpoint.post("/register/verify-code", data);
}

/**
 * Login using google
 */
export function loginByGoogle(token: string) {
  return endpoint.post("/login/google", { token });
}

/**
 * Login using facebook
 */
export function loginByFacebook(token: string) {
  return endpoint.post("/login/facebook", { token });
}
