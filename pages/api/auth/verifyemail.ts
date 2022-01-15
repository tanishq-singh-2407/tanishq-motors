import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDB from '../../../database/db';
import USERS from '../../../database/models/users';
import isEmail from 'validator/lib/isEmail';

type Data = {
    error: boolean;
    valid: boolean;
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    switch (req.method) {
        case "POST":
            const email: string = req.headers["email"] as string;

            if (email === undefined || !isEmail(email))
                return res.status(200).json({ error: false, valid: false });

            await connectToDB();
            await USERS.find({ email })
                .then(result => {
                    if (!result.length)
                        return res.status(200).json({ error: false, valid: false });

                    return res.status(200).json({ error: false, valid: true });
                })
                .catch(() => res.status(200).json({ error: false, valid: false }))
            break;

        default:
            res.status(200).json({ error: true, valid: false })
            break;
    }
}

export default handler;