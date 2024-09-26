import endpoint from "shared/endpoint";

export function getMyProfile() {
  return endpoint.get("/me");
}

export function updateProfile(data: any) {
  return endpoint.put("/me", data);
}
