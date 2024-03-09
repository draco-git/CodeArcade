import { Request, Response } from "express";
import { pool } from "../db";

export interface SignupRequestBody {
  userName: string;
  phoneNumber: string;
  password: string;
}
export const signup = (req: Request<SignupRequestBody>, res: Response) => {
  const body = req.body;
  const query =
    "INSERT INTO user_info (userName, phoneNumber, password) VALUES($1, $2, $3)";
  pool.query(
    query,
    [body.userName, body.phoneNumber, body.password],
    (err, results) => {
      if (err) {
        throw err;
      }
      const success = results.rowCount;
      res.status(200).json({
        response: success,
      });
    },
  );
};
