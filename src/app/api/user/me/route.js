import { getCookie } from "cookies-next";
import jwt from "jsonwebtoken";
const { pool } = require("../../../../components/database/db.js");

export async function GET(request) {
  const token = await getCookie("token", {
    req: request,
  });
  if (!token) {
    return Response.json({
      success: false,
      error: "請從新登入",
    });
  }
  try {
    const decoded = await jwt.verify(token, "mytoken");
    const userId = decoded.payload.userId;
    const client = await pool.connect();
    const result = await client.query(
      `SELECT * FROM users WHERE user_id = '${userId}'`
    );
    const users = result.rows;
    await client.release();
    if (users.length === 0) {
      return Response.json({
        success: false,
        error: "user not found",
      });
    }
    const userName = users[0].username;
    const email = users[0].email;
    return Response.json({
      success: true,
      userId: userId,
      userName: userName,
      email: email,
    });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}
