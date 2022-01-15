import { verify } from "jsonwebtoken";

interface data {
    _id: string;
    name: string;
    email: string;
}

export type verifyTokenReturn = {
    success: boolean;
    data?: data
}

const verifyToken = (token: string): verifyTokenReturn => {
    try {
        const user = verify(token, process.env.NEXT_PUBLIC_JWT_SECRECT as string);

        return {
            success: true,
            data: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        }
    } catch {
        return {
            success: false
        }
    }
}

export default verifyToken;