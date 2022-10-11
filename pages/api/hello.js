// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

export default function handler(req, res) {
  fs.readFile("postData/var-let-const.json", "utf-8", (err, data)=> {
    console.log(req.query, "slug");
    res.status(200).json(JSON.parse(data))
  })
}
