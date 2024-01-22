const { pool } = require("../../../../components/database/db.js");

export async function POST(request) {
  const body = await request.json();
  const productId = body.productId;
  const userId = body.userId;
  try {
    const client = await pool.connect();
    const result = await client.query(
      `Insert INTO shoppingcart (user_id, product_id, quantity) VALUES (${userId}, ${productId}, 1)`
    );
    await client.release();
    return Response.json({
      success: true,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}
