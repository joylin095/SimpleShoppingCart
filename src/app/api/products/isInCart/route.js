const { pool } = require("../../../../components/database/db.js");

export async function GET(request) {
  const params = request.nextUrl.searchParams;
  const userId = params.get("userId");
  const productId = params.get("productId");
  try {
    const client = await pool.connect();
    const result = await client.query(
      `SELECT * FROM shoppingcart WHERE user_id = '${userId}' AND product_id = '${productId}'`
    );
    await client.release();
    if (result.rows.length > 0) {
      return Response.json({
        success: true,
        isInCart: true,
        message: "already in cart",
      });
    }
    return Response.json({
      success: true,
      isInCart: false,
      message: "not in cart",
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}
