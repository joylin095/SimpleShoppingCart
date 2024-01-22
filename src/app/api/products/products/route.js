// pages/api/products.js
const { pool } = require("../../../../components/database/db.js"); // 路径根据实际情况调整

export async function GET() {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM products");
    const products = result.rows;
    await client.release();
    return Response.json({
      success: true,
      products,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}
