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
    hirePurchase_or_Lease_or_hypothecationWith: {
        type: String,
        default: "Na"
    },
    classOfVechile: {
        type: String,
        default: 'ELECTRIC VEHICLE'
    },
    makersName: {
        type: String,
        default: 'M/S CHAMPION POLY PLAST'
    },
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
    invoiceNo: {
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
    nameOfBuyer: String,
    addressOfBuyer: String,
    mobileNoOfBuyer: Number,
    description: String,
    items: [ItemsSchema],
    deleveredOn: {
        type: Date,
        default: Date.now
    }
});

const ITEMS = models.Items || model('Items', ItemsSchema);
const INVOICE = models.Invoice || model('Invoice', InvoiceSchema);

export default INVOICE;
export {
    ITEMS, INVOICE
}