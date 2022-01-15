import type { NextApiRequest, NextApiResponse } from 'next';
import { verify } from 'jsonwebtoken';

type Data = {
    error: boolean;
    valid: boolean;
    user?: {
        _id: string;
        name: string;
        email: string;
    }
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    if (req.method === "GET") {
        const token: string = req.headers["auth-token"] as string;

        try {
            const vereifiedUser = verify(token, process.env.JWT_SECRECT as string);

            res.status(200).json({
                error: false,
                valid: true,
                user: {
                    _id: vereifiedUser._id,
                    name: vereifiedUser.name,
                    email: vereifiedUser.email
                }
            })

        } catch (error) {
            res.status(300).json({ error: false, valid: false });
        }
    }
}

export default handler;