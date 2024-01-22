import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const { pool } = require("../../../../components/database/db.js");

export async function POST(request) {
  const body = await request.json();
  const email = body.email;
  const password = body.password;
  try {
    const client = await pool.connect();
    const result = await client.query(
      `SELECT * FROM users WHERE email = '${email}'`
    );
    if (result.rows.length === 0) {
      await client.release();
      return Response.json({
        success: false,
        error: "Email Not exists",
      });
    }
    const users = result.rows;
    const hashedPassword = users[0].password;
    const userId = users[0].user_id;
    const userName = users[0].username;
    await client.release();
    if (bcrypt.compareSync(password, hashedPassword)) {
      const payload = {
        userId: userId,
        userName: userName,
        email: email,
      };
      const token = jwt.sign(
        { payload, exp: Math.floor(Date.now() / 1000) + 60 * 15 },
        "mytoken"
      );
      return Response.json({
        success: true,
        token,
      });
    }
    return Response.json({ success: false, error: "密碼錯誤" });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}
