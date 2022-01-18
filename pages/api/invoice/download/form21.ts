import type { NextApiRequest, NextApiResponse } from 'next';
import verifyToken from '../../../../lib/verifyToken';
import type { verifyTokenReturn } from '../../../../lib/verifyToken';
import INVOICE from '../../../../database/models/invoice';
import connectToDB from '../../../../database/db';

const form_21 = require('../../../../html/form_21');


interface error {
    operation: "unsupported" | "not-authenticated" | "_id" | "unknown-error";
    message: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
    const { query, headers } = req;
    const token: string = headers["auth-token"] as string || "";

    const verified: verifyTokenReturn = verifyToken(token);

    if (!verified.success)
        return res.status(200).json({ error: true, message: [{ operation: "not-authenticated", message: "user not authenticated" }] })


    if (query._id === undefined)
        return res.status(200).json({ error: true, message: [{ operation: "_id", message: "_id not defined" }] })



    if (query._id === undefined)
        return res.status(200).json({ error: true, message: [{ operation: "_id", message: "_id not defined" }] })

    switch (req.method) {
        case "GET":
            await connectToDB();

            await INVOICE.findById(query._id)
                .then(result => {
                    if (result === null)
                        return res.status(200).json({ error: true, message: [{ operation: "_id", message: "_id not valid" }] })

                    const html = form_21(result, parseInt(query.item as string));
                    res.status(200).json({ error: false, html })
                })
                .catch(err_ => res.status(200).json({ error: true, message: [{ operation: "unknown-error", message: err_.code }] }));

            break;

        default:
            res.status(200).json({ error: true, message: [{ operation: "unsupported", message: `Method (${req.method as string}) is not supported.` }] });
    }
}

export default handler;