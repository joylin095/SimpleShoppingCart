const { pool } = require("../../../../components/database/db.js");

export async function GET(request) {
  const params = await request.nextUrl.searchParams;
  const category = params.get("category");
  try {
    const client = await pool.connect();
    const result = await client.query(
      `SELECT * FROM products p WHERE p.category = '${category}'`
    );
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
