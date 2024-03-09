import { Response, Request } from "express";
import { pool } from "../db";

export const login = (
  request: Request<{ phoneNumber: string }>,
  response: Response,
) => {
  const requestBody = request.body;

  const query = `SELECT * FROM user_info WHERE phoneNumber = $1`;
  pool.query(query, [requestBody.phoneNumber], (err, results) => {
    if (err) {
      throw err;
    }
    const valid = results.rows.length > 0;
    const responseMessage = valid ? "Valid user" : "Invalid credentials";

    response.status(200).json({
      success: valid,
      response: results,
    });
  });
};
