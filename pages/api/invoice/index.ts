import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    error: boolean;
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    res.status(200).json({
        error: false
    })
}

export default handler;