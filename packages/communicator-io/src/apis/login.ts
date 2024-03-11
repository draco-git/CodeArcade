import { Response, Request } from "express";
import { pool } from "../db";

export const login = (
  request: Request<object, object, { phoneNumber: string; password: string }>,
  response: Response
) => {
  const requestBody = request.body;

  const query = `SELECT * FROM user_info WHERE phoneNumber = $1 and password = $2`;
  pool.query(
    query,
    [requestBody.phoneNumber, requestBody.password],
    (err, results) => {
      if (err) {
        throw err;
      }
      const valid = results.rows.length > 0;
      const responseMessage = valid ? "Valid user" : "Invalid credentials";

      response.status(200).json({
        success: valid,
        response: results,
      });
    }
  );
};
