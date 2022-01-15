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
    hirePurchase_or_Lease_or_hypothecationWith?: String;
    classOfVechile?: String;
    makersName?: String;
    chassisNo: String;
    EngineNumber: Number;
    hoursePower: String;
    fuelUsed?: String;
    numberOfBatteries?: Number;
    yearOfManufacture: String;
    seatingCapacity: String;
    unladenWeight: Number;
    maximAxleWeight: MaximAxleWeight;
    bodyColor: String;
    grossVehicleWeight: Number;
    typeOfBody?: String;
    bharatStage?: String;
    tradeCertificateNumber?: String;
    tankNumber?: String;
    waporizerNumber?: String;
}

export interface UpdateInvoice {
    hypothecation?: String;
    addressOfBuyer?: String;
    mobileNoOfBuyer?: Number;
    deleveredOn?: Date;
}

export type Invoice = {
    user?: string;
    invoiceNo: Number;
    hypothecation: String;
    date?: Date;
    nameOfBuyer: String;
    addressOfBuyer: String;
    mobileNoOfBuyer: Number;
    description: String;
    items: Array<Items>;
    deleveredOn?: Date;
};