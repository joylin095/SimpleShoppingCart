import { deleteCookie } from "cookies-next";

export function useLogout() {
  const logout = async () => {
    deleteCookie("token");
  };
  return { logout };
}
