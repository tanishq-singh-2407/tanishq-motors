import type { Invoice } from '../lib/invoice';

module.exports = (invoice: Invoice, item: number) => {
    return `
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>

            <style type="text/css">
                #sidebar {
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    width: 250px;
                    padding: 0;
                    margin: 0;
                    overflow: auto
                }

                #page-container {
                    position: absolute;
                    top: 0;
                    left: 0;
                    margin: 0;
                    padding: 0;
                    border: 0
                }

                @media screen {
                    #page-container {
                        bottom: 0;
                        right: 0;
                        overflow: auto
                    }
                }

                @media print {
                    @page {
                        margin: 0
                    }

                    html {
                        margin: 0
                    }

                    body {
                        margin: 0;
                        -webkit-print-color-adjust: exact
                    }

                    #page-container {
                        width: auto;
                        height: auto;
                        overflow: visible;
                        background-color: transparent
                    }
                }

                .pf {
                    position: relative;
                    background-color: white;
                    overflow: hidden;
                    margin: 0;
                    border: 0
                }

                @media print {
                    .pf {
                        margin: 0;
                        box-shadow: none;
                        page-break-after: always;
                        page-break-inside: avoid
                    }

                    @-moz-document url-prefix() {
                        .pf {
                            overflow: visible;
                            border: 1px solid #fff
                        }
                    }
                }

                .w0 {
                    width: 892.950000px;
                }

                .h0 {
                    height: 1200px
                }

                @media screen {
                    #page-container {
                        background-color: #9e9e9e;
                        background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjOWU5ZTllIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiM4ODgiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=");
                        -webkit-transition: left 500ms;
                        transition: left 500ms
                    }

                    .pf {
                        margin: 13px auto;
                        box-shadow: 1px 1px 3px 1px #333;
                        border-collapse: separate
                    }

                }

                #center {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

            </style>

            <STYLE type="text/css">
                #page_1 {
                    position: absolute;
                    overflow: hidden;
                    padding: 0px;
                    z-index: 10000000;
                    max-width: 600px;
                    display: flex;
                    flex-direction: column;
                    overflow: visible;
                }

                #page_1 #p1dimg1 {
                    position: absolute;
                    top: 188px;
                    left: 0px;
                    z-index: -1;
                    width: 635px;
                    height: 159px;
                }

                #page_1 #p1dimg1 #p1img1 {
                    width: 635px;
                    height: 159px;
                }

                .ft0 {
                    font: bold 19px 'Times New Roman';
                    line-height: 22px;
                }

                .ft1 {
                    font: 16px 'Times New Roman';
                    line-height: 19px;
                }

                .ft2 {
                    font: 19px 'Times New Roman';
                    line-height: 21px;
                }

                .ft3 {
                    font: 12px 'Times New Roman';
                    line-height: 15px;
                    position: relative;
                    bottom: 6px;
                }

                .ft4 {
                    font: 19px 'Calibri';
                    line-height: 23px;
                }

                .ft5 {
                    font: 1px 'Times New Roman';
                    line-height: 1px;
                }

                .ft6 {
                    font: 19px 'Times New Roman';
                    line-height: 20px;
                }

                .p0 {
                    text-align: left;
                    padding-left: 277px;
                    margin-top: 0px;
                    margin-bottom: 0px;
                }

                .p1 {
                    text-align: left;
                    padding-left: 124px;
                    margin-top: 0px;
                    margin-bottom: 0px;
                }

                .p2 {
                    text-align: left;
                    padding-left: 226px;
                    margin-top: 1px;
                    margin-bottom: 0px;
                }

                .p3 {
                    text-align: center;
                    margin-top: 19px;
                    margin-bottom: 0px;
                    margin-left: 20px;
                }

                .p4 {
                    text-align: left;
                    margin-top: 17px;
                    margin-bottom: 0px;
                    margin-left: 20px;
                }

                .p5 {
                    text-align: left;
                    padding-left: 212px;
                    margin-top: 3px;
                    margin-bottom: 0px;
                }

                .p6 {
                    text-align: left;
                    margin-top: 20px;
                    margin-bottom: 0px;
                }

                .p7 {
                    text-align: left;
                    margin-top: 1px;
                    margin-bottom: 0px;
                }

                .p8 {
                    text-align: left;
                    padding-right: 84px;
                    margin-top: 2px;
                    margin-bottom: 0px;
                }

                .p9 {
                    text-align: left;
                    margin-top: 21px;
                    margin-bottom: 0px;
                }

                .p10 {
                    text-align: left;
                    margin-top: 24px;
                    margin-bottom: 0px;
                }

                .p11 {
                    text-align: left;
                    margin-top: 0px;
                    margin-bottom: 0px;
                    white-space: nowrap;
                }

                .p12 {
                    text-align: left;
                    padding-left: 3px;
                    margin-top: 0px;
                    margin-bottom: 0px;
                    white-space: nowrap;
                }

                .p13 {
                    text-align: left;
                    padding-left: 24px;
                    margin-top: 0px;
                    margin-bottom: 0px;
                    white-space: nowrap;
                }

                .p14 {
                    text-align: left;
                    padding-left: 23px;
                    margin-top: 0px;
                    margin-bottom: 0px;
                    white-space: nowrap;
                }

                .p15 {
                    text-align: right;
                    padding-right: 278px;
                    margin-top: 0px;
                    margin-bottom: 0px;
                    white-space: nowrap;
                }

                .p16 {
                    text-align: right;
                    margin-top: 0px;
                    margin-bottom: 0px;
                    white-space: nowrap;
                }

                .td0 {
                    padding: 0px;
                    margin: 0px;
                    width: 25px;
                    vertical-align: bottom;
                }

                .td1 {
                    padding: 0px;
                    margin: 0px;
                    width: 287px;
                    vertical-align: bottom;
                }

                .td2 {
                    padding: 0px;
                    margin: 0px;
                    width: 316px;
                    vertical-align: bottom;
                }

                .td3 {
                    padding: 0px;
                    margin: 0px;
                    width: 603px;
                    vertical-align: bottom;
                }

                .td4 {
                    padding: 0px;
                    margin: 0px;
                    width: 336px;
                    vertical-align: bottom;
                }

                .td5 {
                    padding: 0px;
                    margin: 0px;
                    width: 299px;
                    vertical-align: bottom;
                }

                .tr0 {
                    height: 28px;
                }

                .tr1 {
                    height: 21px;
                }

                .tr2 {
                    height: 22px;
                }

                .tr3 {
                    height: 20px;
                }

                .tr4 {
                    height: 24px;
                }

                .tr5 {
                    height: 63px;
                }

                .tr6 {
                    height: 25px;
                }

                .t0 {
                    width: 628px;
                    margin-top: 17px;
                    font: 19px 'Times New Roman';
                }

                .t1 {
                    width: 635px;
                    font: 19px 'Times New Roman';
                }

                .border {
                    border-bottom: 2px solid black;
                    padding-bottom: 5px;
                }

            </STYLE>
        </head>

        <body>
            <div id="page-container">
                <div class="pf w0 h0" id="center">
                    <DIV id="page_1">
                        <P class="p0 ft0">FORM 21</P>
                        <P class="p1 ft0">See rules 47(a) and (d) Sale Certificate</P>
                        <P class="p2 ft0"></P>
                        <P class="p3 ft1">(To be issued by manufacture/ dealer or officer of Definance Department (In case of military a auctioned vehicle) for presentation along with the application for registration of a motor vehicle.)</P>
                        <P class="p4 ft0"><SPAN class="ft2">Certified that </SPAN>TANISHQ MOTORS THREE WHEELER E Ricksaw</P>
                        <P class="p5 ft2 border">(Brand name of the vehicle)</P>
                        <P class="p6 ft0">Has been delivered us to on -<SPAN class="ft2"> ${invoice.date?.toDateString()}
                            </SPAN></P>
                        <P class="p7 ft0">Name of the buyer -<SPAN class="ft4">${invoice.buyersName}</SPAN></P>
                        <P class="p8 ft4"><SPAN class="ft0">Address </SPAN><SPAN class="ft2">- </SPAN>${invoice.postalCode},
                            ${invoice.streetAddress}, ${invoice.city}, (${invoice.state})</P>
                        <P class="p9 ft2 border">The vehicle is held under agreement of Hire purchase/lease/hypothecation with -
                            ${invoice.hirePurchase_Lease_Hypothecation}</P>
                        <P class="p10 ft2">The details of the vehicles are given below</P>
                        <TABLE cellpadding=0 cellspacing=0 class="t0">
                            <TR>
                                <TD class="tr0 td0">
                                    <P class="p11 ft2">1.</P>
                                </TD>
                                <TD class="tr0 td1">
                                    <P class="p12 ft2">Class of Vehicle</P>
                                </TD>
                                <TD class="tr0 td2">
                                    <P class="p13 ft2">${invoice.items[item].classOfVechile}</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD class="tr1 td0">
                                    <P class="p11 ft2">2.</P>
                                </TD>
                                <TD class="tr1 td1">
                                    <P class="p12 ft2">Maker’s Name</P>
                                </TD>
                                <TD class="tr1 td2">
                                    <P class="p13 ft2">${invoice.items[item].makersName}</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD class="tr1 td0">
                                    <P class="p11 ft2">3.</P>
                                </TD>
                                <TD class="tr1 td1">
                                    <P class="p12 ft2">Chassis No</P>
                                </TD>
                                <TD class="tr1 td2">
                                    <P class="p13 ft2">${invoice.items[item].chassisNo}</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD class="tr2 td0">
                                    <P class="p11 ft2">4.</P>
                                </TD>
                                <TD class="tr2 td1">
                                    <P class="p12 ft2">(Engine No or Motor no)</P>
                                </TD>
                                <TD class="tr2 td2">
                                    <P class="p13 ft2">${invoice.items[item].EngineNumber}</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD class="tr1 td0">
                                    <P class="p11 ft2">5.</P>
                                </TD>
                                <TD class="tr1 td1">
                                    <P class="p12 ft2">Horse Power or cubic capacity</P>
                                </TD>
                                <TD class="tr1 td2">
                                    <P class="p13 ft2">${invoice.items[item].hoursePower}</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD class="tr2 td0">
                                    <P class="p11 ft2">6.</P>
                                </TD>
                                <TD class="tr2 td1">
                                    <P class="p12 ft2">Fuel Used</P>
                                </TD>
                                <TD class="tr2 td2">
                                    <P class="p13 ft2">${invoice.items[item].fuelUsed}</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD class="tr1 td0">
                                    <P class="p11 ft2">7.</P>
                                </TD>
                                <TD class="tr1 td1">
                                    <P class="p12 ft2">Number of batteries</P>
                                </TD>
                                <TD class="tr1 td2">
                                    <P class="p13 ft2">${invoice.items[item].numberOfBatteries}</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD class="tr2 td0">
                                    <P class="p11 ft2">8.</P>
                                </TD>
                                <TD class="tr2 td1">
                                    <P class="p12 ft2">Month & Year of Manufacture</P>
                                </TD>
                                <TD class="tr2 td2">
                                    <P class="p13 ft2">${invoice.items[item].yearOfManufacture}</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD class="tr1 td0">
                                    <P class="p11 ft2">9.</P>
                                </TD>
                                <TD class="tr1 td1">
                                    <P class="p12 ft2">Seating capacity (Including driver)</P>
                                </TD>
                                <TD class="tr1 td2">
                                    <P class="p13 ft2">${invoice.items[item].seatingCapacity}</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD class="tr2 td0">
                                    <P class="p11 ft2">10.</P>
                                </TD>
                                <TD class="tr2 td1">
                                    <P class="p12 ft2">Unladen Weight</P>
                                </TD>
                                <TD class="tr2 td2">
                                    <P class="p13 ft2">${invoice.items[item].unladenWeight}</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD class="tr1 td0">
                                    <P class="p11 ft2">11.</P>
                                </TD>
                                <TD colspan=2 class="tr1 td3">
                                    <P class="p12 ft2">Maxim axle weight & Number description of type</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD class="tr2 td0">
                                    <P class="p11 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr2 td1">
                                    <P class="p14 ft2">(In case of transport vehicles)</P>
                                </TD>
                                <TD class="tr2 td2">
                                    <P class="p11 ft5">&nbsp;</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD class="tr1 td0">
                                    <P class="p11 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr1 td1">
                                    <P class="p14 ft2">(a) Front Axle</P>
                                </TD>
                                <TD class="tr1 td2">
                                    <P class="p13 ft2">${invoice.items[item].maximAxleWeight.frontAxle}</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD class="tr2 td0">
                                    <P class="p11 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr2 td1">
                                    <P class="p14 ft2">(b) Rear Axle</P>
                                </TD>
                                <TD class="tr2 td2">
                                    <P class="p13 ft2">${invoice.items[item].maximAxleWeight.rearAxle}</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD class="tr1 td0">
                                    <P class="p11 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr1 td1">
                                    <P class="p14 ft2">(c) Any other Axle</P>
                                </TD>
                                <TD class="tr1 td2">
                                    <P class="p13 ft2">${invoice.items[item].maximAxleWeight.anyOtherAxle}</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD class="tr2 td0">
                                    <P class="p11 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr2 td1">
                                    <P class="p14 ft2">(d) Tandem Axle</P>
                                </TD>
                                <TD class="tr2 td2">
                                    <P class="p13 ft2">${invoice.items[item].maximAxleWeight.tandemAxle}</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD class="tr1 td0">
                                    <P class="p11 ft2">12.</P>
                                </TD>
                                <TD class="tr1 td1">
                                    <P class="p12 ft2">Colour or colours of body</P>
                                </TD>
                                <TD class="tr1 td2">
                                    <P class="p13 ft2">${invoice.items[item].bodyColor}</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD class="tr1 td0">
                                    <P class="p11 ft2">13.</P>
                                </TD>
                                <TD class="tr1 td1">
                                    <P class="p12 ft2">Gross vehicle weight</P>
                                </TD>
                                <TD class="tr1 td2">
                                    <P class="p13 ft2">${invoice.items[item].grossVehicleWeight}</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD class="tr2 td0">
                                    <P class="p11 ft2">14.</P>
                                </TD>
                                <TD class="tr2 td1">
                                    <P class="p12 ft2">Type of body</P>
                                </TD>
                                <TD class="tr2 td2">
                                    <P class="p13 ft2">${invoice.items[item].typeOfBody}</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD class="tr1 td0">
                                    <P class="p11 ft2">15.</P>
                                </TD>
                                <TD class="tr1 td1">
                                    <P class="p12 ft2">Bharat stage</P>
                                </TD>
                                <TD class="tr1 td2">
                                    <P class="p13 ft2">${invoice.items[item].bharatStage}</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD class="tr2 td0">
                                    <P class="p11 ft2">16.</P>
                                </TD>
                                <TD class="tr2 td1">
                                    <P class="p12 ft2">Trade certificate Number</P>
                                </TD>
                                <TD class="tr2 td2">
                                    <P class="p13 ft2">${invoice.items[item].tradeCertificateNumber}</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD class="tr3 td0">
                                    <P class="p11 ft6">17.</P>
                                </TD>
                                <TD class="tr3 td1">
                                    <P class="p12 ft6">Tank No</P>
                                </TD>
                                <TD class="tr3 td2">
                                    <P class="p13 ft6">${invoice.items[item].tankNumber}</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD class="tr3 td0">
                                    <P class="p11 ft6">18.</P>
                                </TD>
                                <TD class="tr3 td1">
                                    <P class="p12 ft6">WAPORIZER Numbe</P>
                                </TD>
                                <TD class="tr3 td2">
                                    <P class="p13 ft6">${invoice.items[item].waporizerNumber}</P>
                                </TD>
                            </TR>
                        </TABLE>
                        <TABLE cellpadding=0 cellspacing=0 class="t1">
                            <TR>
                                <TD class="tr5 td4">
                                    <P class="p11 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td5">
                                    <P class="p16 ft2">Authorised Signatory</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD class="tr6 td4">
                                    <P class="p11 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr6 td5">
                                    <P class="p16 ft2">TANISHQ MOTORS</P>
                                </TD>
                            </TR>
                        </TABLE>
                    </DIV>
                </div>
            </div>
        </body>

        </html>
    `;
}