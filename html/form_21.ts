import type { Invoice } from '../lib/invoice';

module.exports = (invoice: Invoice, item: number) => {
    return `
        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
        <HTML>

        <HEAD>
            <META http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <TITLE>pdf-html</TITLE>
            <META name="generator" content="BCL easyConverter SDK 5.0.252">
            <META name="author" content="tanis">
            <STYLE type="text/css">

                body {
                    margin: 0px;
                    padding: 0;
                }

                #page_1 {
                    position: relative;
                    overflow: hidden;
                    margin: 140px 0 0 140px;
                    padding: 0px;
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
                    padding-left: 224px;
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
                    text-align: left;
                    padding-right: 84px;
                    margin-top: 19px;
                    margin-bottom: 0px;
                }

                .p4 {
                    text-align: left;
                    padding-left: 48px;
                    margin-top: 17px;
                    margin-bottom: 0px;
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

            </STYLE>
        </HEAD>

        <BODY>
            <DIV id="page_1">
                <DIV id="p1dimg1">
                    <IMG src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnsAAACeCAIAAADFQFvYAAACgUlEQVR4nO3VQQ3AMBDAsG78Od8o7JVKrY0gv6wFAAAAZ3hmZncDAJzv3R0AAFdwXAAoOC4AFBwXAAqOCwAFxwWAguMCQMFxAaDguABQcFwAKDguABQcFwAKjgsABccFgILjAkDBcQGg4LgAUHBcACg4LgAUHBcACo4LAAXHBYCC4wJAwXEBoOC4AFBwXAAoOC4AFBwXAAqOCwAFxwWAguMCQMFxAaDguABQcFwAKDguABQcFwAKjgsABccFgILjAkDBcQGg4LgAUHBcACg4LgAUHBcACo4LAAXHBYCC4wJAwXEBoOC4AFBwXAAoOC4AFBwXAAqOCwAFxwWAguMCQMFxAaDguABQcFwAKDguABQcFwAKjgsABccFgILjAkDBcQGg4LgAUHBcACg4LgAUHBcACo4LAAXHBYCC4wJAwXEBoOC4AFBwXAAoOC4AFBwXAAqOCwAFxwWAguMCQMFxAaDguABQcFwAKDguABQcFwAKjgsABccFgILjAkDBcQGg4LgAUHBcACg4LgAUHBcACo4LAAXHBYCC4wJAwXEBoOC4AFBwXAAoOC4AFBwXAAqOCwAFxwWAguMCQMFxAaDguABQcFwAKDguABQcFwAKjgsABccFgILjAkDBcQGg4LgAUHBcACg4LgAUHBcACo4LAAXHBYCC4wJAwXEBoOC4AFBwXAAoOC4AFBwXAAqOCwAFxwWAguMCQMFxAaDguABQcFwAKDguABQcFwAKjgsABccFgILjAkDBcQGg4LgAUHBcACg4LgAUHBcACo4LAAXHBYCC4wJAwXEBoOC4AFBwXAAoOC4AFBwXAAqOCwAFxwWAguMCQMFxAaDguAAAAAAA/PcB64cEMYA3WYoAAAAASUVORK5CYII="
                        id="p1img1">
                </DIV>


                <P class="p0 ft0">FORM 21</P>
                <P class="p1 ft0">{See rules 47(a) and (d)</P>
                <P class="p2 ft0">SALE CERTIFICATE</P>
                <P class="p3 ft1">(To be issued by manufacture/ dealer or officer of Definance Department (In case of military a
                    auctioned vehicle) for presentation along with the application for registration of a motor vehicle.)</P>
                <P class="p4 ft0"><SPAN class="ft2">Certified that </SPAN>TANISHQ MOTORS THREE WHEELER E Ricksaw</P>
                <P class="p5 ft2">(Brand name of the vehicle)</P>
                <P class="p6 ft0">Has been delivered us to on -<SPAN
                        class="ft2"> ${invoice.date?.toDateString()} </SPAN></P>
                <P class="p7 ft0">Name of the buyer -<SPAN class="ft4">${invoice.nameOfBuyer}</SPAN></P>
                <P class="p8 ft4"><SPAN class="ft0">Address </SPAN><SPAN class="ft2">- </SPAN>${invoice.addressOfBuyer}</P>
                <P class="p9 ft2">The vehicle is held under agreement of Hire purchase/lease/hypothecation with - ${invoice.items[item].hirePurchase_or_Lease_or_hypothecationWith}</P>
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
                </TABLE>
                <TABLE cellpadding=0 cellspacing=0 class="t1">
                    <TR>
                        <TD class="tr4 td4">
                            <P class="p11 ft2">18. WAPORIZER Number</P>
                        </TD>
                        <TD class="tr4 td5">
                            <P class="p15 ft2">${invoice.items[item].waporizerNumber}</P>
                        </TD>
                    </TR>
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
        </BODY>

        </HTML>
    `;
}