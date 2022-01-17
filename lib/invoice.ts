export interface MaximAxleWeight {
    frontAxle: Number;
    rearAxle: Number;
    anyOtherAxle: Number;
    tandemAxle: Number;
}

export interface Items {
    serialNumber: Number;
    itemName: String;
    quantity: Number;
    amount: Number;
    EngineNumber: Number;
    numberOfBatteries?: Number;
    unladenWeight: Number;
    maximAxleWeight: MaximAxleWeight;
    grossVehicleWeight: Number;
    controllerNumber: Number;
    classOfVechile?: String;
    makersName?: String;
    chassisNo: String;
    hoursePower: String;
    fuelUsed?: String;
    yearOfManufacture: String;
    seatingCapacity: String;
    bodyColor: String;
    typeOfBody?: String;
    bharatStage?: String;
    tradeCertificateNumber?: String;
    tankNumber?: String;
    waporizerNumber?: String;
}

export interface UpdateInvoice {
    phoneNumber?: number;
    streetAddress: string;
    city: string;
    state: string;
    postalCode?: number;
    deliveryDate: Date;
}

export type Invoice = {
    _id?: string;
    user?: string;
    buyersName: string;
    invoiceNumber?: number;
    fatherName: string;
    motherName: string;
    phoneNumber?: number;
    aadharNumber?: number;
    date: Date;
    deliveryDate: Date;
    hypothecation: string;
    hirePurchase_Lease_Hypothecation: string;
    streetAddress: string;
    city: string;
    state: string;
    postalCode?: number;
    description: String;
    items: Array<Items>;
};