import type { NextApiRequest, NextApiResponse } from 'next';
import verifyToken from '../../../lib/verifyToken';
import type { verifyTokenReturn } from '../../../lib/verifyToken';
import type { Invoice } from '../../../lib/invoice';
import INVOICE from '../../../database/models/invoice';
import connectToDB from '../../../database/db';

interface error {
    operation: "unsupported" | "not-authenticated" | "duplicate-invoice";
    message: string;
}

type Data = {
    error: boolean;
    message?: Array<error>;
    data?: any;
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const errors: Array<error> = [];
    const token = req.headers["auth-token"];
    const verified: verifyTokenReturn = verifyToken(token as string);

    if (!verified.success)
        res.status(300).json({ error: true, message: [{ operation: "not-authenticated", message: "user not authenticated" }] })

    switch (req.method) {
        case "GET": // get invoice
            break;

        case "POST": // create new invoice
            const data: Invoice = req.body;
            data.user = verified.data?._id;

            await connectToDB();

            await INVOICE.create(data)
                .then(result => {
                    res.status(200).json({ error: false, data: result })
                })
                .catch(err_ => {
                    if (err_.code === 11000)
                        res.status(300).json({ error: true, message: [{ operation: "duplicate-invoice", message: "Purchase with this invoice number already exists" }] })
                })

            break;

        case "PUT": // update old invoice
            break;

        case "DELETE": // delete old invoice
            break;

        default:
            res.status(300).json({ error: true, message: [{ operation: "unsupported", message: `Method (${req.method as string}) is not supported.` }] });
    }
}

// const createInvoice = (data) => {

// }

export default handler;

// const dummyData: Invoice = {
//     "invoiceNo": 1,
//     "hypothecation": "SBI BANK",
//     "nameOfBuyer": "buyers name",
//     "addressOfBuyer": "address of buyer",
//     "mobileNoOfBuyer": 1234567890,
//     "description": "desc",
//     "items": [
//         {
//             "serialNumber": 1234,
//             "itemName": "riksha",
//             "quantity": 1,
//             "amount": 100000,
//             "hirePurchase_or_Lease_or_hypothecationWith": "Na",
//             "classOfVechile": "ELECTRIC VEICHLE",
//             "makersName": "makers name",
//             "chassisNo": "chassis no",
//             "EngineNumber": 123,
//             "hoursePower": "720 Watt",
//             "fuelUsed": "Batteries",
//             "numberOfBatteries": 4,
//             "yearOfManufacture": "Dec 2022",
//             "seatingCapacity": "4 + 1",
//             "unladenWeight": 685,
//             "maximAxleWeight": {
//                 "frontAxle": 1,
//                 "rearAxle": 2,
//                 "anyOtherAxle": 3,
//                 "tandemAxle": 4
//             },
//             "bodyColor": "black",
//             "grossVehicleWeight": 723,
//             "typeOfBody": "steel",
//             "bharatStage": "bharat stage",
//             "tradeCertificateNumber": "trade certificate number",
//             "tankNumber": "tank number",
//             "waporizerNumber": "waporizer number"
//         }
//     ]
// }