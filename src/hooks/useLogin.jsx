import { setCookie } from "cookies-next";

export async function useLogin(data) {
  const url = "http://localhost:3000/api/user/login";
  const response = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err))
    .then((response) => {
      if (!response.success) {
        alert(response.error);
      } else {
        setCookie("token", response.token);
        window.location.href = "/";
      }
    });
}
