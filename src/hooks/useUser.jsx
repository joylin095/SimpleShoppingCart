import { useState, useEffect } from "react";
export function useUser() {
  const [user, setUser] = useState({
    isLogin: false,
    userId: null,
    userName: null,
    userEmail: null,
  });
  const url = "http://localhost:3000/api/user/me";
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (!data.success) {
          setUser({
            isLogin: false,
            userId: null,
            userName: null,
            userEmail: null,
          });
        } else {
          setUser({
            isLogin: true,
            userId: data.userId,
            userName: data.userName,
            userEmail: data.email,
          });
        }
      } catch (error) {
        setUser({
          isLogin: false,
          userId: null,
          userName: null,
          userEmail: null,
        });
      }
    }
    fetchData();
  }, []);
  return { user };
}
