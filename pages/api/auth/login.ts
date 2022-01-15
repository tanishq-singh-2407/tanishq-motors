import type { NextApiRequest, NextApiResponse } from 'next';
import { sign } from 'jsonwebtoken';
import validator from 'validator';
import User from '../../../database/models/users';
import connectToDB from '../../../database/db';
import { compare } from 'bcrypt';

interface validateType { status: boolean; token?: string };

interface errorMessage {
    operation: "email" | "password" | "userDoesNotExists" | "invalid";
    message: "enter valid email address" | "password should be min 8 and max 20 letters long." | "user with this email id, does not already exists." | "invalid credentials";
}

type Data = {
    error: boolean;
    token?: string;
    message?: Array<errorMessage>;
}

const validate = async (email: string, password: string, errors: Array<errorMessage>, connectToDB: Function): Promise<validateType> => {
    if (!email || !validator.isEmail(email)) errors.push({ operation: "email", message: "enter valid email address" });
    if (!password || !(password.length >= 8 && password.length <= 20)) errors.push({ operation: "password", message: "password should be min 8 and max 20 letters long." });

    if (errors.length >= 1) return { status: true };
    else {
        await connectToDB();

        const checkUser = await User.findOne({ email });
        if (!checkUser) {
            errors.push({ operation: "userDoesNotExists", message: "user with this email id, does not already exists." });
            return { status: true };
        } else if (await compare(password, checkUser.password)) {
            return { status: false, token: sign({ name: checkUser.name, email, _id: checkUser._id }, process.env.JWT_SECRECT as string) };
        } else {
            errors.push({ operation: "invalid", message: "invalid credentials" });
            return { status: true };
        }
    };
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    if (req.method === "POST") {
        const { email, password } = req.body;
        const errors: Array<errorMessage> = [];

        const _: validateType = await validate(email, password, errors, connectToDB);
        if (_.status) return res.status(200).json({ error: true, message: errors });

        res.status(200).json({ error: false, token: _.token });
    }
}

export default handler;