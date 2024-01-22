const { pool } = require("../../../../components/database/db.js");

export async function POST(request) {
  const body = await request.json();
  const username = body.username;
  const email = body.email;
  const password = body.password;
  try {
    const client = await pool.connect();
    const findExistingEmail = await client.query(
      `SELECT * FROM users WHERE email = '${email}'`
    );
    const findExistingUserName = await client.query(
      `SELECT * FROM users WHERE username = '${username}'`
    );
    if (
      findExistingEmail.rows.length > 0 ||
      findExistingUserName.rows.length > 0
    ) {
      await client.release();
      return Response.json({
        success: false,
        error: "Email or userName already exists",
      });
    }
    const result = await client.query(
      `INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`
    );
    const users = result.rows;
    await client.release();
    return Response.json({
      success: true,
      users,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}
