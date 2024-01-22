import bcrypt from "bcryptjs";
export async function useSignUp(data) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(data.password, saltRounds);
  data.password = hashedPassword;
  console.log(data);
  const url = "http://localhost:3000/api/user/signUp";
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
        window.location.href = "/login";
      }
    });
}
