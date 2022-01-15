import type { NextApiRequest, NextApiResponse } from 'next';
import { sign } from 'jsonwebtoken';
import validator from 'validator';
import User from '../../../database/models/users';
import connectToDB from '../../../database/db';
import { genSalt, hash } from 'bcrypt';

interface errorMessage {
    operation: "email" | "name" | "password" | "userexists";
    message: "enter valid email address" | "name should be min 3 and max 10 letters long." | "password should be min 8 and max 20 letters long." | "user with this email id, already exists.";
}

type Data = {
    error: boolean;
    name?: string;
    email?: string;
    token?: string;
    message?: Array<errorMessage>;
}

const validate = async (email: string, password: string, name: string, errors: Array<errorMessage>, connectToDB: Function) => {
    if (!email || !validator.isEmail(email)) errors.push({ operation: "email", message: "enter valid email address" });
    if (!name || !(name.length >= 3 && name.length <= 10)) errors.push({ operation: "name", message: "name should be min 3 and max 10 letters long." });
    if (!password || !(password.length >= 8 && password.length <= 20)) errors.push({ operation: "password", message: "password should be min 8 and max 20 letters long." });

    if (errors.length >= 1) return true;
    else {
        await connectToDB();

        const checkUser = await User.findOne({ email });
        if (checkUser) {
            errors.push({ operation: "userexists", message: "user with this email id, already exists." });
            return true;
        } else return false;
    };
};
const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    if (req.method === "POST") {
        const { name, email, password } = req.body;
        const errors: Array<errorMessage> = [];

        // validate email, name, password, and also check user cred
        const _: boolean = await validate(email, password, name, errors, connectToDB);
        if (_) return res.status(300).json({ error: true, message: errors });

        const salt = await genSalt(5);
        const hashPassword = await hash(password, salt);

        await User.create({ name, email, password: hashPassword })
            .then(result => res.status(200).json({ error: false, name, email, token: sign({ name, email, _id: result._id }, process.env.JWT_SECRECT as string) }));
    }
}

export default handler;