import { Response } from "express";

export default function (res: Response, message?: string) {
  res.status(404).send(message ? message : "Sever Network Error");
}
