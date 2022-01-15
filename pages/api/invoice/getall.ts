import type { NextApiRequest, NextApiResponse } from 'next';
import verifyToken from '../../../lib/verifyToken';
import type { verifyTokenReturn } from '../../../lib/verifyToken';
import INVOICE from '../../../database/models/invoice';
import connectToDB from '../../../database/db';

interface error {
    operation: "unsupported" | "not-authenticated" | "duplicate-invoice" | "unknown-error";
    message: string;
}

type Data = {
    error: boolean;
    message?: Array<error>;
    data?: any;
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const token: string = req.headers["auth-token"] as string;
    const verified: verifyTokenReturn = verifyToken(token);

    if (!verified.success)
        return res.status(300).json({ error: true, message: [{ operation: "not-authenticated", message: "user not authenticated" }] })

    switch (req.method) {
        case "POST": // get all invoice
            await connectToDB();

            await INVOICE.find({ user: verified.data?._id })
                .sort({ _id: -1 })
                .then(result => res.status(200).json({ error: false, data: result }))
                .catch(err_ => res.status(300).json({ error: true, message: [{ operation: "unknown-error", message: err_.code.toString() }] }));

            break;

        default:
            res.status(300).json({ error: true, message: [{ operation: "unsupported", message: `Method (${req.method as string}) is not supported.` }] });
    }
}

export default handler;