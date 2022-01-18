import { model, models, Schema } from "mongoose";

const maximAxleWeight = new Schema({
    frontAxle: Number,
    rearAxle: Number,
    anyOtherAxle: Number,
    tandemAxle: Number,
})

const ItemsSchema = new Schema({
    serialNumber: Number,
    itemName: String,
    quantity: Number,
    amount: Number,
    classOfVechile: {
        type: String,
        default: 'ELECTRIC VEHICLE'
    },
    makersName: {
        type: String,
        default: 'M/S CHAMPION POLY PLAST'
    },
    controllerNumber: Number,
    chassisNo: String,
    EngineNumber: Number,
    hoursePower: String,
    fuelUsed: {
        type: String,
        default: 'Batteries'
    },
    numberOfBatteries: {
        type: Number,
        default: 4
    },
    yearOfManufacture: String,
    seatingCapacity: String,
    unladenWeight: Number,
    maximAxleWeight: maximAxleWeight,
    bodyColor: String,
    grossVehicleWeight: Number,
    typeOfBody: {
        type: String,
        default: "BLUE"
    },
    bharatStage: {
        type: String,
        default: "IV/VI/Bharat (Terms) Stage III/IIIA etc."
    },
    tradeCertificateNumber: {
        type: String,
        default: "MP20B/TC/JBP-386/2021"
    },
    tankNumber: {
        type: String,
        default: "Na"
    },
    waporizerNumber: {
        type: String,
        default: "Na"
    }
});

const InvoiceSchema: Schema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    invoiceNumber: {
        type: Number,
        unique: true,
        required: true
    },
    hypothecation: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    buyersName: String,
    streetAddress: String,
    city: String,
    state: String,
    postalCode: Number,
    phoneNumber: Number,
    description: String,
    items: [ItemsSchema],
    deliveryDate: {
        type: Date,
        default: Date.now
    },
    controllerNumber: Number,
    fatherName: String,
    motherName: String,
    aadharNumber: Number,
    hirePurchase_Lease_Hypothecation: String
});

const ITEMS = models.Items || model('Items', ItemsSchema);
const INVOICE = models.Invoice || model('Invoice', InvoiceSchema);

export default INVOICE;
export {
    ITEMS, INVOICE
}