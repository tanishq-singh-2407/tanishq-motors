import type { Invoice } from '../lib/invoice';
import { ToWords } from 'to-words';

module.exports = (invoice: Invoice) => {
    const toWords = new ToWords({
        localeCode: 'en-IN',
        converterOptions: {
            currency: true,
            ignoreDecimal: false,
            ignoreZeroCurrency: false,
            doNotAddOnly: false,
        }
    })

    const createItem = (): { totalQuantity: number; totalAmount: number; data: string; data2: string; } => {
        var data: string = "";
        var totalAmount: number = 0;
        var totalQuantity: number = 0;
        var data2: string = "";

        invoice.items.map(({ serialNumber, itemName, quantity, amount, chassisNo, EngineNumber, bodyColor }) => {
            data += `
                <TR>
                        <TD colspan=3 class="tr6 td37">
                            <P class="p5 ft4">${serialNumber || ""}. ${itemName || ""}</P>
                        </TD>
                        <TD class="tr6 td1">
                            <P class="p6 ft5">&nbsp;</P>
                        </TD>
                        <TD class="tr6 td38">
                            <P class="p6 ft5">&nbsp;</P>
                        </TD>
                        <TD colspan=3 class="tr6 td41">
                            <P class="p6 ft5">&ensp;</P>
                        </TD>
                        <TD class="tr6 td3">
                            <P class="p8 ft12">${quantity || ""}</P>
                        </TD>
                        <TD class="tr6 td39">
                            <P class="p6 ft5">&nbsp;</P>
                        </TD>
                        <TD colspan=2 class="tr6 td40">
                            <P class="p8 ft12">${amount || ""}</P>
                        </TD>
                    </TR>
            `;

            data2 += `
                <TR>
                        <TD class="tr11 td52">
                            <P class="p5 ft16">${serialNumber || ""}</P>
                        </TD>
                        <TD class="tr11 td46">
                            <P class="p6 ft15">&nbsp;</P>
                        </TD>
                        <TD class="tr11 td53">
                            <P class="p6 ft16">${chassisNo || ""}</P>
                        </TD>
                        <TD colspan=2 class="tr11 td17">
                            <P class="p8 ft16">${EngineNumber || ""}</P>
                        </TD>
                        <TD class="tr11 td54">
                            <P class="p6 ft15">&nbsp;</P>
                        </TD>
                        <TD colspan=2 class="tr11 td51">
                            <P class="p8 ft16">${bodyColor || ""}</P>
                        </TD>
                        <TD class="tr11 td33">
                            <P class="p6 ft15">&nbsp;</P>
                        </TD>
                        <TD colspan=2 class="tr11 td56">
                            <P class="p6 ft15">&nbsp;</P>
                        </TD>
                        <TD class="tr11 td35">
                            <P class="p8 ft16">${invoice.items[Number(serialNumber) - 1].controllerNumber || ""}</P>
                        </TD>
                    </TR>
            `

            totalAmount += Number(amount);
            totalQuantity += Number(quantity);
        });

        return {
            data, totalAmount, totalQuantity, data2
        };
    }

    const { data, totalAmount, totalQuantity, data2 } = createItem();

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
                    width: 892px;
                }

                .h0 {
                    height: 1200px;
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

            </style>

            <STYLE type="text/css">
                #page_1 {
                    position: absolute;
                    overflow: hidden;
                    padding: 0px;
                    z-index: 10000000;
                }

                #page_1 #p1dimg1 {
                    position: absolute;
                    top: 0px;
                    right: 0;
                    z-index: -1;
                    height: 187px;
                }

                #page_1 #p1dimg1 #p1img1 {
                    height: 120px;
                }

                .dclr {
                    clear: both;
                    float: none;
                    height: 1px;
                    margin: 0px;
                    padding: 0px;
                    overflow: hidden;
                }

                .ft0 {
                    font: bold 29px 'Arial Black';
                    line-height: 41px;
                }

                .ft1 {
                    font: bold 19px 'Calibri';
                    color: #ffffff;
                    line-height: 23px;
                }

                .ft2 {
                    font: bold 16px 'Calibri';
                    line-height: 19px;
                }

                .ft3 {
                    font: bold 24px 'Calibri';
                    color: #ffffff;
                    line-height: 29px;
                }

                .ft4 {
                    font: 19px 'Calibri';
                    line-height: 23px;
                }

                .wordwrap {
                    white-space: pre-wrap;
                    /* Webkit */
                    white-space: -moz-pre-wrap;
                    /* Firefox */
                    white-space: -pre-wrap;
                    /* Opera <7 */
                    white-space: -o-pre-wrap;
                    /* Opera 7 */
                    word-wrap: break-word;
                    /* IE */
                }

                .ft5 {
                    font: 1px 'Calibri';
                    line-height: 1px;
                }

                .ft6 {
                    font: bold 19px 'Calibri';
                    line-height: 23px;
                }

                .ft7 {
                    font: 1px 'Calibri';
                    line-height: 22px;
                }

                .ft8 {
                    font: 19px 'Calibri';
                    line-height: 22px;
                }

                .ft9 {
                    font: 18px 'Calibri';
                    line-height: 22px;
                }

                .ft10 {
                    font: 1px 'Calibri';
                    line-height: 21px;
                }

                .ft11 {
                    font: 18px 'Calibri';
                    line-height: 22px;
                }

                .ft12 {
                    font: 19px 'Calibri';
                    line-height: 23px;
                }

                .ft13 {
                    font: 1px 'Calibri';
                    line-height: 16px;
                }

                .ft14 {
                    font: 16px 'Arial';
                    line-height: 18px;
                }

                .ft15 {
                    font: 1px 'Calibri';
                    line-height: 19px;
                }

                .ft16 {
                    font: 16px 'Calibri';
                    line-height: 19px;
                }

                .ft17 {
                    font: 13px 'Arial';
                    line-height: 16px;
                }

                .p0 {
                    text-align: left;
                    padding-left: 16px;
                    margin-top: 17px;
                    margin-bottom: 0px;
                }

                .p1 {
                    text-align: left;
                    padding-left: 27px;
                    margin-top: 28px;
                    margin-bottom: 0px;
                    background-color: #000000;
                    width: fit-content;
                    padding-right: 10px;
                }

                .p2 {
                    text-align: left;
                    padding-left: 42px;
                    margin-top: 4px;
                    margin-bottom: 0px;
                }

                .p3 {
                    text-align: left;
                    padding-left: 51px;
                    margin-top: 2px;
                    margin-bottom: 0px;
                }

                .p4 {
                    text-align: left;
                    padding-left: 37px;
                    margin-top: 4px;
                    margin-bottom: 0px;
                    background-color: #000000;
                    width: fit-content;
                    padding-right: 35px;
                }

                .p5 {
                    text-align: left;
                    padding-left: 8px;
                    margin-top: 0px;
                    margin-bottom: 0px;
                    word-wrap: break-word;
                }

                .p6 {
                    text-align: left;
                    margin-top: 0px;
                    margin-bottom: 0px;
                    white-space: nowrap;
                }

                .p7 {
                    text-align: right;
                    padding-right: 64px;
                    margin-top: 0px;
                    margin-bottom: 0px;
                    white-space: nowrap;
                }

                .p8 {
                    text-align: left;
                    padding-left: 6px;
                    margin-top: 0px;
                    margin-bottom: 0px;
                    white-space: nowrap;
                }

                .p9 {
                    text-align: left;
                    padding-left: 4px;
                    margin-top: 0px;
                    margin-bottom: 0px;
                    white-space: nowrap;
                }

                .p10 {
                    text-align: right;
                    padding-right: 7px;
                    margin-top: 0px;
                    margin-bottom: 0px;
                    white-space: nowrap;
                }

                .p11 {
                    text-align: right;
                    padding-right: 11px;
                    margin-top: 0px;
                    margin-bottom: 0px;
                    white-space: nowrap;
                }

                .p12 {
                    text-align: justify;
                    /* padding-left: 8px; */
                    /* padding-right: 84px; */
                    margin-top: 28px;
                    margin-bottom: 0px;
                    width: 625px;
                }

                .p13 {
                    text-align: left;
                    /* padding-left: 8px; */
                    margin-top: 1px;
                    margin-bottom: 0px;
                    width: 625px;
                }

                .td0 {
                    padding: 0px;
                    margin: 0px;
                    width: 231px;
                    vertical-align: bottom;
                }

                .td1 {
                    padding: 0px;
                    margin: 0px;
                    width: 47px;
                    vertical-align: bottom;
                }

                .td2 {
                    padding: 0px;
                    margin: 0px;
                    width: 141px;
                    vertical-align: bottom;
                }

                .td3 {
                    padding: 0px;
                    margin: 0px;
                    width: 53px;
                    vertical-align: bottom;
                }

                .td4 {
                    padding: 0px;
                    margin: 0px;
                    width: 153px;
                    vertical-align: bottom;
                }

                .td5 {
                    border-top: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 52px;
                    vertical-align: bottom;
                }

                .td6 {
                    border-top: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 12px;
                    vertical-align: bottom;
                }

                .td7 {
                    border-top: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 13px;
                    vertical-align: bottom;
                }

                .td8 {
                    padding: 0px;
                    margin: 0px;
                    width: 64px;
                    vertical-align: bottom;
                }

                .td9 {
                    padding: 0px;
                    margin: 0px;
                    width: 330px;
                    vertical-align: bottom;
                    max-width: 330px;
                    white-space: nowrap;
                }

                .td10 {
                    padding: 0px;
                    margin: 0px;
                    width: 12px;
                    vertical-align: bottom;
                }

                .td11 {
                    padding: 0px;
                    margin: 0px;
                    width: 13px;
                    vertical-align: bottom;
                }

                .td12 {
                    padding: 0px;
                    margin: 0px;
                    width: 22px;
                    vertical-align: bottom;
                }

                .td13 {
                    padding: 0px;
                    margin: 0px;
                    width: 2px;
                    vertical-align: bottom;
                }

                .td14 {
                    padding: 0px;
                    margin: 0px;
                    width: 129px;
                    vertical-align: bottom;
                }

                .td15 {
                    border-bottom: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 55px;
                    vertical-align: bottom;
                }

                .td16 {
                    border-bottom: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 176px;
                    vertical-align: bottom;
                }

                .td17 {
                    border-bottom: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 99px;
                    vertical-align: bottom;
                }

                .td18 {
                    border-bottom: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 12px;
                    vertical-align: bottom;
                }

                .td19 {
                    border-bottom: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 13px;
                    vertical-align: bottom;
                }

                .td20 {
                    border-bottom: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 64px;
                    vertical-align: bottom;
                }

                .td21 {
                    border-bottom: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 75px;
                    vertical-align: bottom;
                }

                .td22 {
                    border-bottom: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 2px;
                    vertical-align: bottom;
                }

                .td23 {
                    border-bottom: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 129px;
                    vertical-align: bottom;
                }

                .td24 {
                    border-left: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 329px;
                    vertical-align: bottom;
                }

                .td25 {
                    border-right: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 63px;
                    vertical-align: bottom;
                }

                .td26 {
                    border-right: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 205px;
                    vertical-align: bottom;
                }

                .td27 {
                    border-left: #000000 1px solid;
                    border-right: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 417px;
                    vertical-align: bottom;
                    max-width: 417px;
                }

                .td28 {
                    border-right: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 128px;
                    vertical-align: bottom;
                }

                .td29 {
                    border-left: #000000 1px solid;
                    border-bottom: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 230px;
                    vertical-align: bottom;
                }

                .td30 {
                    border-bottom: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 47px;
                    vertical-align: bottom;
                }

                .td31 {
                    border-bottom: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 52px;
                    vertical-align: bottom;
                }

                .td32 {
                    border-right: #000000 1px solid;
                    border-bottom: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 63px;
                    vertical-align: bottom;
                }

                .td33 {
                    border-bottom: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 53px;
                    vertical-align: bottom;
                }

                .td34 {
                    border-bottom: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 22px;
                    vertical-align: bottom;
                }

                .td35 {
                    border-right: #000000 1px solid;
                    border-bottom: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 128px;
                    vertical-align: bottom;
                }

                .td36 {
                    border-right: #000000 1px solid;
                    border-bottom: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 21px;
                    vertical-align: bottom;
                }

                .td37 {
                    border-left: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 230px;
                    vertical-align: bottom;
                }

                .td38 {
                    padding: 0px;
                    margin: 0px;
                    width: 52px;
                    vertical-align: bottom;
                }

                .td39 {
                    border-right: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 21px;
                    vertical-align: bottom;
                }

                .td40 {
                    border-right: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 130px;
                    vertical-align: bottom;
                }

                .td41 {
                    border-right: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 88px;
                    vertical-align: bottom;
                }

                .td42 {
                    border-left: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 54px;
                    vertical-align: bottom;
                }

                .td43 {
                    padding: 0px;
                    margin: 0px;
                    width: 6px;
                    vertical-align: bottom;
                }

                .td44 {
                    padding: 0px;
                    margin: 0px;
                    width: 170px;
                    vertical-align: bottom;
                }

                .td45 {
                    border-left: #000000 1px solid;
                    border-bottom: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 54px;
                    vertical-align: bottom;
                }

                .td46 {
                    border-bottom: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 6px;
                    vertical-align: bottom;
                }

                .td47 {
                    border-bottom: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 170px;
                    vertical-align: bottom;
                }

                .td48 {
                    border-left: #000000 1px solid;
                    border-bottom: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 60px;
                    vertical-align: bottom;
                }

                .td49 {
                    border-right: #000000 1px solid;
                    border-bottom: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 130px;
                    vertical-align: bottom;
                }

                .td50 {
                    border-left: #000000 1px solid;
                    border-right: #000000 1px solid;
                    border-bottom: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 623px;
                    vertical-align: bottom;
                }

                .td51 {
                    border-bottom: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 77px;
                    vertical-align: bottom;
                }

                .td52 {
                    border-left: #000000 1px solid;
                    border-right: #000000 1px solid;
                    border-bottom: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 53px;
                    vertical-align: bottom;
                }

                .td53 {
                    border-right: #000000 1px solid;
                    border-bottom: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 169px;
                    vertical-align: bottom;
                }

                .td54 {
                    border-right: #000000 1px solid;
                    border-bottom: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 11px;
                    vertical-align: bottom;
                }

                .td55 {
                    border-right: #000000 1px solid;
                    border-bottom: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 1px;
                    vertical-align: bottom;
                }

                .td56 {
                    border-right: #000000 1px solid;
                    border-bottom: #000000 1px solid;
                    padding: 0px;
                    margin: 0px;
                    width: 23px;
                    vertical-align: bottom;
                }

                .td57 {
                    padding: 0px;
                    margin: 0px;
                    width: 240px;
                    vertical-align: bottom;
                }

                .td58 {
                    padding: 0px;
                    margin: 0px;
                    width: 144px;
                    vertical-align: bottom;
                }

                .td59 {
                    padding: 0px;
                    margin: 0px;
                    width: 146px;
                    vertical-align: bottom;
                }

                .tr0 {
                    height: 51px;
                }

                .tr1 {
                    height: 26px;
                }

                .tr2 {
                    height: 25px;
                }

                .tr3 {
                    height: 24px;
                }

                .tr4 {
                    height: 22px;
                }

                .tr5 {
                    height: 23px;
                }

                .tr6 {
                    height: 46px;
                }

                .tr7 {
                    height: 67px;
                }

                .tr8 {
                    height: 21px;
                }

                .tr9 {
                    height: 45px;
                }

                .tr10 {
                    height: 16px;
                }

                .tr11 {
                    height: 19px;
                }

                .t0 {
                    width: 625px;
                    margin-top: 18px;
                    font: 19px 'Calibri';
                }

                .t1 {
                    width: 625px;
                    /* margin-left: 8px; */
                    margin-top: 37px;
                    font: 16px 'Arial';
                }

                #center {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

            </STYLE>
        </head>

        <BODY>
            <div id="page-container">
                <div class="pf w0 h0" id="center">
                    <DIV id="page_1">
                        <DIV id="p1dimg1">
                            <IMG src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAADhCAYAAADCg66ZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEPoAABD6AcvHGlIAAJtjSURBVHhe7d0JuDZFdSfwN8lkJjPJuEWNa0w0Ju4YcRcXXCIKbogssiiiiLgEFQRBMYgguIu7Mi4YRFlUgvuuKLhEFASNmihGDZNxG03UzNpTv4P/a/POXd/v3o9771f/56mnu6trOXXq1KlTp6u7f2NomHR0dHR0bDr85q+OHR0dHR2bDF3Bd3R0dGxSdAXf0dHRsUnRFXxHR0fHJkVX8B0dHR2bFF3Bd3R0dGxSdAXf0dHRsUnRFXxHR0fHJkVX8B0dHR2bFF3Bd3R0dGxSdAXf0dHRsUnRFXxHR0fHJkVX8B0dHR2bFF3Bd3R0dGxSdAXf0dHRsUnRFXxHR0fHJkVX8B0dHR2bFP2PTh0bCsT1//7f/zv5P//n/0x+4zd+Y/Jbv/VbFQe/+Zu/Wef/43/8j8m/+3f/ruJcS5e08kk3xv/8n/+zjv/hP/yHOsqToKz/9J/+U+XfSMAjIefox5O0Kwhvgo3WzlkQHpAFR3Ixbjd+/a//9b+KX2SFDMB//I//sdL/7//9vyv8+3//7yutOGl/+tOfTn72s59NLrnkksn5559faW5xi1tMdthhh8m1rnWtyb/+679W+h/+8IcVlH2Vq1yl5Ov3fu/3ih7XaHFOHkOn8n/7t3+7zpXxn//zfy6alkJX8B0bChF4RwPTICHwYGBkwBmUrsfBIJFXPqDYU4Y8GQpJ69ogzUDfKEg7HPFDe6bbOG5P0oG2bnZoKwVOgTonB3ig7eSBIqa8IwfgnCxAZO7f/u3fSqlf9apXnVx44YWTd73rXZMPf/jDpXwPOOCAyQMe8IBS3Jdeeunk61//+uQjH/nI5HOf+9zkG9/4xlw/KEOaq1/96pPrXOc6kz//8z+vycD17//+79c9E4tJQPy1r33tuu4KvmNTgrhS0lFa4BrE/fKXv6zBYDAauL/zO79T6Qzo5DN4U46jIM14MLsnzj3XmRQ2ArQ9SggPnLP+xIvTTm1KAO2EjdTOWRG+kINcQ/rbNV7lfgwBwC+yFAv/H/7hHyZnnXXW5K//+q8nP/nJTyYPfOADJ09+8pMnN73pTUupn3feeZMzzzxz8rd/+7dVrjrApHDNa16zjhQ7mXUUxP3pn/5p3afIxamLTOpHZaTflkJX8B0bCsRViIAbNOMBSsGzilhhv/jFL2qgsniue93rlrIHeaWRnhUn3WWXXVaDVnr3rQD+6I/+qCwp9UX5bwTgB2WQSWqsDNwL/3JPiBrYSO2cFdoaPoQHeKXvA0qdMgWKnmwA/iTfpz71qcmJJ544+dCHPjS52tWuNtlzzz0nT3ziE8vNcvrpp0/+5m/+ptw1kckb3vCGk1vd6laTG9/4xpM//uM/nlz/+tevctCS481udrPJjW50o7LcybBJwgrgd3/3dye3vOUtK0/oWg66gu/YUCCuwlgpgWsDhEV18sknT773ve+V9UNBG1A777zz5BrXuEYpdGkN4Azsb37zm5NPf/rTk+9///uT7373u5N//ud/rnt77733ZPfddy/rbaMp+Cgk7Ug7tcM5vlEoYz66D3kOsZmhvUIUq3Py4EiZ4xPXCyUrHvT/z3/+88k//dM/lWX9+c9/fvL85z9/ctFFF1U5e+211+SZz3xm5Xvta19bSl9ayphi3mmnncr9QrHjtXxf/vKXJ//4j/9Y5W6//faT293udjUB6IMvfelLVca3vvWtyZ/8yZ9M/uIv/mJy+9vffvIHf/AHRVN30XRsSmRgUkwwVmAsHr7Pj3/84zWonvKUp5QVbvnLemLJG9CgjODHP/7x5Ac/+EE9IDOwXvKSl0y+853v1HL7lFNOqYG+kVwXVh/oFViO/+2//bdqnwd7rlmDFMX1rne9mgDxBP+EbUXBs9ZjjWdyA8qTkqfAWdL4RAGzpM8555yKY62TEW4X/Lr3ve89OfbYY6vM4447rix7ssjaJo/3u9/9SrGbdP/Lf/kvk4997GOTv//7vy+XDqX9qEc9anK3u92t5IyB8YIXvKDkkMFxn/vcZ/KsZz2rLHsrA1DPsvuJgu/o2ChoinloAj60QVnBNbQBNbRBMzQlPjTFNbQBODRFV2naoJ1L2wZZnSvjF7/4xdCWz3XeFF+lb4NuaNb+0CaFoU0KQ1P+c3VsFGhfm6yGj3zkI8N+++03/Omf/unQFMzwh3/4h8Ub7XLdlMvQlMvwxje+cWgT2oZr56zQTjwCskEGXOvrT37yk8NDHvKQ4Q1veEPFt0mxzu9whzsMT3rSk4Z3vetdQ1O6Q1O2Q1Oyw21ve9uhWeHDF7/4xaEp+pKbNrHW+Tvf+c7hsssuK7lqlvjQrPjhWte6Vt2/znWuMzQDZLjggguGNgGX/H72s58d2mpzaNb58Du/8ztDs9qHZuXPyWjodr5cbBgFr3EaprEZjI46KI3/7//9v9e5geu+Yxgin4DhBrn7jvI5/5d/+Zc6RhnkqA7lOOZc/Di/weRcPRGYcacI7qtD3gRx0rvvmLIXgjrRoFwC4disiyuU15aIVbcypU15jvLnXmiUJ/ldp51ph3Nlpm7Hcb3SpZ3OU5502pO0+sZ9PHBMncmrbGlCl3hHaX70ox9VudIJ4ZvyDUrn8l5yySVDs0ZLoX3mM5+ZSxOaHJUbupSfNLmWplntwzWucY0ajO9+97vn7jmGbkEcesTnnmtH18p2xIvkESeNo4A3+Jv41ON8MaQsadMuefCxWX+l2K961auWImornAq//du/XfxxzrZzTtlQVLe4xS2Gxz72sUOzSouXkYHQHR6qx5H8Cep0RPdGAZrHsqAPKOmDDz54aBb78LCHPawUO6X86Ec/upTxIx/5yOHDH/7w8IhHPGJoFnzxrFndZVSQtdvc5jbFX/x+wAMeUBOFfhfcJ5Puk6u2qhxe9apXzfFN+MQnPjHc4AY3qP6g4E0oX/jCFyp/5ATNkaXlYsO4aFoDa1ltGdMaOvdArDW2jgJojgdq0luStg6sh2uWXdJatjaGVjpLd+VY7iS/+yAtNIbW0t5RnHMuAcva1kG1zBPXOqHKkF+QJmXyw6lPXalfHpDfNZ+apR865Z0PysADdTelN2kDsfKrWz73c60MabVNvGvx7qNLevfBPXxCgzYK6gBp+K4t68ML5YQXynKuXME53qNPGfKgIeXKkzakfPS5dt9REJd2uR73j3MhbUu7uVoe/vCH17UlNJ+n+ixtlaGd/Ov6Hc/BPeU0hVZpxH/1q18tnyq3hiU232raqS8d0Y2W9K0Q+sWDONd4kGvlaBNZIJfyoF0aaZuVPddu8QshfSmfdjknj+95z3smL3rRiyYXX3xx1acOfYsmZcqHdnnCS+lA/2vPgx70oHr2wH1AJsM7eaUN35WT9ixG63oDuvHfEf+/9rWvTV74whdOPvjBD9bul9NOO61k+LDDDpuce+655SY56qijagvkSSedVHnuec97To4++uh6APqXf/mXk//6X/9rydI97nGPSkv2lNGU++SII44omXL/z/7szyZHHnnk5P73v3/Vj7e2TbbJtdxC+uAmN7lJye+d7nSnKkPZ9B6Xmr40FvXTcrBhFDxBgigjA9JDDE+pMcjWIg/LKHc+L2izZHWktPIQUIObQAIm8bs6EnaCCxl0mI89UczidYq40GMACcpGm7TOo8iUI69zcHQfPdKgRaBI2nKv2iH9fEj94AFPm+ErbzrbPUGctGg06LVj7Gsd00JBGMT8gfIRKOnG5TbLZnLHO96x6EafNmpXjqCunLfl6uRNb3pT+RCVM35YJZ224xWoS5/gKeVq0pJHMLGoA/AkoiqPtMrKhK8PPOD6u7/7u9oRQzmRBQ+ndtlll6rTA9hvf/vbNfnYU+wBl7o92BLsO27L8UmzvibNoipeeKDm4Rd6QqMjWcEfbY5ydu7oPj4L8omLfKBTG5WjDNfSkNGb3/zmpQy0FV2LIbwA59reVhuTV7ziFaWw8Eb5+ljZ4R+aAC3iHBPnftJ5ZrHHHntMdt111/Ifk1XlSa88R3GhQxvFbQTgCZlBO17ZCWMro76m6MkCvzflTFFTyPr4ec97XuXzwL5Z+ZMLLrhg8ld/9Vc1djzIp9yf9KQnTZolXkqZr/3FL35x+dspd756ZW233XbVP0LqN3kYq16MetnLXja5+93vXjLr4b+w22671dZJ8kLulsvrDaPgDRDChykaSLlhjMY/+MEPLovLA7G3ve1tk7Zcmhx66KE1mA0kLxd48KFjdWJbdtVg9OLBZz/72Tr3FNvEoA51qUN6Qv0v//IvdSTEZln5pLnXve5V+TKIlROlCFgrKEfQOZ6Kv/nNb677FNCOO+5YA6gt/eoojbLmg4GoY9VtG5YHgehVrzj58Afsy2WtEhoKygPDpIuyco0uMGg9RCJw4ijI+973vmVRPOQhD6kn+cmDp9qpLvSoN8EA8IDoAx/4wFxbKB9QroFy9tlnV9+415a+JdTuGQjuSW8iYUV6sQPNlEkUpnqdK1/96FHu6173uuorExaljmZvESrDAMYz9ykufc3KJUP69nGPe1w97KLc0Y4XeKL9++23X9VrTzN5iSw85jGPqYGrD4L0ufvhlfTaJ96qkpyKpwjsrvAgTxmuKdQMYmUsBOWFn3jx3ve+txSDnRmgLn2BP+hIXwmRI2kc1Z14dYpXtkmG7OiHhz70oWUkZOJxXx59AxkDGwFpn75gkeMbPP7xj5/ss88+Ncm/9a1vrfFIPih8LzExHLy8RJ5Y+4I2k1/9aMxQymTkfe97X024ZPnWt7519St5YUToC6tDskYWyJW+ogtMECYCcmqbpRWZa1sww3vyREaWhdbYDYEmyOWD4u9unTM0BVY+0sawoTGi/FgHHnjg0ASt/GBtZq30fL7NKhqapVf+rbaEHxpzK7RBXv5I99oyvHxiTWDnfI+OzYqrut1rK4bhyU9+cpWDdS996UvroRyfZfI1pVBHdbeOrHLQ69g6e3j9619fvs+msOph3te//vVK2wSj6pBuIUiHFm2STl3aLa84vmr88dCmTT71oAatTUgrn7QCehPEo1e+JmDFv7YELJ65J+CBoE40OHfUrvDIUXvFp83oC73O1dcm5Hq4Fx40i7vSa8Nb3vKW8hu7d5e73KUeQCkH3+RXD587XzsfZ7OQhrZ6K9qbUi5Z0F7+Tv5LtKjz+OOPL9+qcvfff//iD7raxD+0SbZ8o/yu8T+//OUvLz8oufAQTZ1t4ivZUUZTmOUjTf+ja9zv45A+kgZ/0M0Pqwx1tlVn3ZcWn5xrs+vFkPL1OT55INcGfoXQqC+1zZG8Jj5Hsi9ecC7In3jp5L3JTW4y7LvvvkMzkoo/+gv/0mbt2kiIbLZJcbjRjW5U7SRvHkofe+yxJYP637MY7WyG0nDRRRcVr7WVzMrbFHyNX/f52duqdWiTxNAmhPKzG9+HHXbY0JR99as66RDPdZpBUWnIK9+7fOQPP88///zhGc94xtBWdOX796CVnEVHkPflYsM4zhpjy4ozczUBq7e7WJitA8oCasyr7z+0NpWVHlcCN4Gluftg6aMc7h2WZhP0mlVZe02Ya2YXB8pSl3gWFReQ2bkNgMrDX2pWbQNzzpphNSu7DegqS5x7/GbiWFqpx7JOO1KndMJCaMJQ9DiiTV1WJmiyJFSGpTVLy7VypVMHv6y94ZaT6OYDZJ253wS83Bb25qKXr4/Vojx8w3tWQ2hzDvgrjfzKkQ5t0rFknKffklYf2QoGVlpoU6eVBv46ymdpjMfuKZ91z7LmE1WX7WpcOOhDD9dMG0RVNx6wvkAcGdBHwNIiG9rLgmJh4amyBP2Jp/LpM3Toe6slrkC0SMfix3evqN/5zneuevEb7dIoEw/0kW2KkT8rzjZAS475e8mufPiUMkAZiyF9oR7WYmQZ3fgjKCvlaUPqCVJH0ihTPmn1l2sB//il9Q8r14oOb5RFllPXUjSvJ+h31rG2WfFxu2gzS51OYclzw2gTeSGL7muzcWv7rXa7b1XuHjknL7Y8GoNkmxxyIxp7+ols8cfLo96sjugl6awy7aP/yle+Ult9vRXLNaNvuRSt+tWzbDQiNwQaA2sGdGxCXVYV68eTbjMay9AWoyaQdTQLSsuy23777WumbAwtq401ZQaWtnXQ0JbxtUXJDCm0Tqy8zh2bshzOOOOMsvhZxVYIhxxySG0tawqoymuKZ9h7773L4lOfmffoo48eXvziFw8vfOELy9p71rOeVTSwqmxZa8vDqouV4GiW17bF4L461c2iVI72qktbm9DWNq8mBGV9aZ/VDOurCc9w17vedWjCV1aGlQ/aww9p5bM7gDUhXvsFlgP+q98Rvc5zP3Slj5wnrWu7DU444YTiD7pYzujRdveb0Bd/myAXj6101O++PtNHVmzotgOBVaPvL7744qEpn7IyWZ+s7mOOOab6Tt14euqppw5t4BXfd9ttt9qxcNBBB5X1Ri7ueMc7VvulZfm3gVXlNGVfVply3vzmN1f56MMfVjPLzK6KWN5pr7a0Zf/wwAc+cGiTaNVpVfDc5z63Vi+GHQsRnVmd4Gd4mnIWA/5KT+5tfdQ2fac9aCTbjmhWn+vIu6O4xE+fJ02COOXqN1bn4YcfPjSjaa6fhabgf0XZ+gf+fv7zny8ZxJ973vOew8c//vHaRaPf73GPe9SKTTp9SwbpGxa7fnz2s59dPCDPVpEse+NDX0pPH8nDWifjPAvkzyqyGZ9DM66Go446qsr79re/XX2tH/fcc8+y5sl/MxqKJvfwlwyryzW+LxcbRsGH2WG4DrCE4kqw7LYcIuCE0RJ4r732qm1f9p4aqIST4rW8V1aboatz5WmzaHWQsg1C25y4OHQ0hXjrW9+6tkpRLrafUaK2W4bZllzXvva1SwFRuG0Grs7lCrDdyrLW9Uc/+tEadAaQgZ4ORI8BQik5XwwRIMt7bSI0FAX6KRl07bHHHtU2g9NE06yUUgbSEEo0yCsdJemedHjhnnN1SB+gK3TmKGh/FJNzEw/e3+lOd6qBg4/a2lZIpYgshe0jtkTlOrIkNgGaMLWFIrnZzW42nHPOOcWPSy+9tPKizeAwKWpnlIu6DVZ7u/U9N4287qOJrGjjySefPGy33XY1eKQhEyZqClo/ZGKnyJvVVfxz3/Y5bXra0542p+goAgNTHucmHP2ob84777ySG3lNIK9+9aurDQZ/W7kUrWRK31CW3FLag5faE7odF4O05IoLQF+SqShnx4Qo6NUI6tF+LgzGDCMAz9IP5MUxMpJJ78oCWvTLmCZHdHpPwqTI2CGH6TcT71lnnTXHX+6YQw89tBQ0Q4qBJpAfrkzj3iT+ute9bq4uCp+7hy556lOfWuNTfRQ0g4ROICsxDLm/yJzyjD/6Bz3KI2OMDJMEfpOLthr4VQuXxoZS8AJ/F4ZRpmY7Ch4zWF2EjyKghNvSuRRqW/5UPAHlZzcTE7y2PK54SuNFL3rRnEDytbG4oiCVy4LUIRGQKBfM94IDxSStjmdJEwydE8GnZAjVc57znKJDWhMPxavMpE35i0F5XkxRF2Ew+eCJeGUQAhamQWhAnnnmmXNtQwdhMQFSBHzu8S1qp/II/HHHHVd5MjAWQ3ihbOd8hSZASlQd+EgZmODwQDqroSOPPLL6gzWkD1k10qNhl112GdoSteo2QAi+e6x4/WdgOCpL3Qao9lLe+hX/KWXls4QoUgMSTfqbxc5aUs8Tn/jE4eyzzy5fPhq9fKI+smEy0jeMCbxCG/kyCeCNoJ62vC6rnfXvBRdpyATlTbFrd/hEjqzmlI83T3/60+esOO2VRrlLQf/oO/0/VsBozPVaBLyJIjJRMW4YA/qdjDnXVuc5LiVDawF14hF+osM1eXEkO4wb7WGEsJ5f85rXlAInM9pCiVqhMerIFfkSTACZNFn7jmST8WKyN5a0mW5Qf45klhyQB357EwJZYQjIL5BNE7YJQBmMNQYQmTbmxSlfecvFhnGatY4qH7Yn1558t86qXQ9tgJQfsw2W8mm1wVW+M0+2G/PK5wzue8rtPp88H1hrfz0R9xpwG1TlP22dXE/Xld8GTPnebGvilxQnXROSOd9tY3z5jZWLDrs31AvKb8JVR/Xz+aqjCUn511qHVrqgCc6cb3U+KKcJTPlx0eKafw6NgC67YDyhl86uDFsv0axcedDq2ASqfO1oxYumqCqd7YN3uMMdqm3KE7cUlB2+NEVa/kn1AD8kGrUVD6W1E8H2smbhTNqkV9sw9UPa79kA2vGOj1Q/NKUy56+Wpg22qlP/8o2HH7ZzqkcgM14xF4/fds/or/e///31vRr7mPWLTxrY+20bHB9/U7bFH7ukHKXhU1W39pCzNtiqzjb461mCLXHo4AtXr51dTQGWXOCJcvS9suUDPAblu6d80C40LwZ5+WltE5YXwr+1Ap6i3zhUv91pz3jGM4qn4tCsn/R9mwCqPeN2bU2gRcAP9ecamgFQ/czn7fkJeRdHTtvqtcan51Ges3juoA3alJBylKtfHZtxUHJl54y2y4MnyjW27L7z/M0eebJB5mzFJQvGoR00dr751AGZ8kyJfL785S+v7ZfN2JiTxcjNcrBhFDymGfAY1ayEUmqUuIFuPypmNuuoBpsHFphuW5PteEDpGJw6HGPT6VHgzilFAgxREDpK3Ziao7wetKnTtrQMWgrIgzP51COvcnQMRWXwq4cS1WEZjNI4dy/CMx/US9kpV5kEoVkjJXQUjrbawkmgCAJaKFb5pKeAbP9Dn+9kECoK3oNPvFWuhzh4KA+Exvkwplc6efDIQ0V8QitlpY8ilJkwpJXXNXo8rAT0euBNMcpjUpYWr5v1MvfA1KSk332qta3Uin7pbSkDddqa5mUVD5gNPINFeW2VU+9IHH744aWcTBKUsEHl4TReaYcH0XhCoZuUyBBa1WtrGyXhoZg4D9ZMJmQI701Qkbe00znabfFVPhnyUovytZEMRd4WkwPIWABygGZ0hM9rAXWGNwJayZq99x4M5sE+XmqLNkeutjYim2P5zbmXk9DqQT1dIZ68edBqXOhHRgelLd6k5eGpLbfS0zsMEm3UVvkFcq9PyKo6yKZ98IxQX5lkYNjKy8A0idA7HrJ6p8V7I16eIovGqImgrXRrjHqRyiSAn/pavcvFhlHwOougUMgRYjsUDLJ3vOMdNVMakBhjcFN4dl7oSOkxU6dQOl4qAOeUiQGGeeksdRBk58qlQKOsMvAMJkLOWkaX9JQlgSDkCel8StREIK10sawDaZca1CCNp+5oVBaLnQJ7y1veUkLCqlKf9rNm0aUe6aRBh4nIvnuWAXpZnwaiiYbCoWSVoXxhIaAlAS/kx2sDx6CQN1ZMFALlBylbu+2qMSBc2wEjiHdtN4PBwdIygdmXzPq224GiNjEQePTqPwpcXdrt3PsQVlVWXD70ZMVgrzE58UKW3UIGEOVvV5Z+lpeCNpBBuawuKw5HBoaJ3YStPQaw3RLajA758TP9iz/aYzLGa7tv5DN4tSt8cJRfWA70pbLVpc3BcvOvFPpXXQGawQ4RvPX2JYWv/drnPrrQeGVhzAt0ockYce6tUta7fjIWrOL0P/kyrt3zhukxxxxTivqVr3xlHX1YjHVvHJF37VOPc3pBHYwRqwArLBOG+8qjo7yzQ+a8VHXCCSfUWCRjPpJnsnz2s59du21SPx2FXvyHcV8vhd9qS+W/+tX5ugbmaSCrx5EAUWJmQ+c6BzO8eITJLCXWlYEofRQaZe1rbTqAJY3Z8igfEzGPUtIxFJPOMwgNeB0nDSFXvomEQLPICAmla1luwjCYpSMwyn79619fCgFY7/vuu2+VZVCrQ3BNEBYaoO5LhweE0yShDZQ0pSofoVK3dJQY5claxQtKntL3ohfrVpvc96IHy0F79t9//yp3OfQkPmkd8R4f8MR2MHEUHx6a2NyPIsND+byEZAukfqL0uNhYOPhG8L2yrY+sLLw0YqLWfm0xieMrpWsSf9rTnlY0RbGoCyyfDU4rHBOtN1zxQXtZbiY1Vj73F9pspzQxyK8sPKbwWeomDgFdBqG80ulrcmM7G6CTElCfpb4+IAfkljyyEjOJyJ8BrN1owJuFYFLztqWyI7ugzcJaQB36hVyjD836U7yVi8mWYmTtGpPpA2MjbdvaQCca0Ogc37jiyIsx4DME7hlH2qOfyCMjimHh0xdkl9Ghn7NK5/JjsRtv+B8wGLLaIyOsfuPdi3XiyRojgZwbs8adCd82VC9AkkG0Sc8QoU/wDo3qwVN0ul4ONsybrBF6Ak0xxA2goRQqpUfYnOtEyswAoGjEmSm9zWlpbS8vPzslYcnEB69swA4Mtjwyk1u2U3j2/uo0g9OqgNVigBJkAiHIF9862giJGdvEoMPQRMkdcsghJTzidRaoP9ehZT4YSIGB41qnG3iEg4Vq8tImy2bCwfI1KPHBEpQClkegWClFeeyPZxlrJ6AHpJsP7ieNfsjA1w/qxFvl6TMCLahbOnx1ZMkcccQRZbEo46CDDirBRnd44ogG6SlR5Yt3zQVjSYsXnsnwYUofHuovea0QWODyUu6WwwYrvsnLyrJU5u7RB859D145GcCOlsjaI965vNKTG3VRECYRhoV69be0ZBbw38REprhw0i5H+bUvbU8b5gMZtGrI8NWutR7KaAy9+D9WMrlGOyWmHygw8onH4rcm8CKy6VzAT0Yb+dYPb3/722uCRRveS8/gYSBpp8ne2876m1I3KUuvLH3urWtGAn7Ir6+t5own+aXRL+4r1xgjh1aTzrkZGQNcydFnyvbmtHJNFpEtR/SP+bwcbBgFD0gVNDTHwHkGG2A4a8JRnMGcB0BcO5hJObNidUbKSrmseIOIhahTCCorjvLOSwweyBrk7umwuArA0aTDKoYoWXWxFhIfSJ+uSBnzQQe7n6POTj6Co83usXzVQ2Gk7JQ7rsekFOEiNIRfmcmTdPMh94PUEdoMFO0WwnODXdvx3bn6wjv58UwY15lyA+WDeH2kT93XL/pnOq1rabXTtYGoLyEDSP3u4weY7NAH5Eq/STfmd8pNfYkncxS6MrXZfUFfkEF9k/LGZYRWdSwFPLWq0efaQLbkhdCxGNShvigK+UFZ4qfLGJcdnkk3H7STlcq1oX+lFafOjIFMSPixFtBneI9G9apffQwOvnAGl4eaZCG80F/6zYpXOmMp/KUrtOmZz3xmKXtl+SGHTwjob+1g5b/0pS+t50D6hwuRS44rTRo0aTd9kT7LKhatvkXECGG1k2M0oRvwfywj6Y+lsKEU/CxYqnmLMQozdYqO0AFAOA0Kx4XybkmdmwV4QJgJL2TAuca/nIeP0uM3iE++aWwpb+fLP123MlyLNxBhvfUZ5eN5SSY3dOPpUvwBRon2yUO2nesT8RSOcwotBg1LnEFjAjUJMng8gGQNs24zRkAeyky/cm3wW6MTKCu04ilancun3tUGPlCkjtoShWolbnVl5ffUpz612i4eLWji1qT4GR3hqzbhsxUoBWwF5p5VOLeKc22wohfnGzIe3luxh7/oiDyF9/hsVc31yGXLhaMu48YRX6VlEEg/C7qCb52zEHROBnjKkT55Fsq7JXVuJuBDAoR3rqd5II4wA2FeSKBT1kJYjLcpXxljZZj6pusc17UQPVcWrDC5GCl6bRlbxYshSlaQLwrEufxcF9x7nkFwZXEDZRI2HpxHWXIv8B/bOcJatcMpKzXKS3lcGjYBcIlRtOiOgnefglsL3qJPHdpLOaOHy4XbzfZIrjg7xtQdPnBX2vZp8qJc5TVZSYNOnw2gwF1zC5ok4nrja/eMh9uFcueSQcN4Va9ecVawrHUTBT+97ZmBCTQTq3z6U32z8mjTK/gtAdYIERYMx2hC7piO6/j/Ed7FcgcDW1iIb+LXkqfxnUdJoc/AFlJ3zsER7dJRTusJFI+H0RRVeC1EeTqfD+RWGv2iTQJLl9Lx/gH3hd1EXGiUE0gjPSWpbONBGa7VI46rjCvCXm8WMguYoqTUKDK+aVsMY+HLa3LiOnW+2kAXmsMTE4/nPWikqFnvYFLCE+5MX5HkYtEWyt1khDYPyz1wf8ITnlCTod0unulZycjrYbvPAONb+KFuz+lMAHggTplWQXgtX4J6pEWbLdyeo+U5mftWB5HJlaIr+EWgk9IJAXZFCYzjO66IaT7lOhAvLuInTeIchdUGxTRdTwaj+PRn6HVPGgpCWE9g/VIylAHa0Dq2tBeD9klLeWk7pcu/bEupTQL6SXkgjfSUvXrCmyD9lDqV5zvqLFzvC9hJ5Z7dR8rnXw6f0eAepbnaQIc2oFkdHqjilV1YXDBo4B/3oJTvnGXumdGrX/3qufchKGaWNgVukjJJcL9om7Se0Zi0TBwUtwlNvHSe5YSHyqGwTWYmTmnRRPlL68G8Fzht27V10sNcfYDP6N+SCbAr+EWQAS6M2YT5BCSC2vH/A7+i0J2Hf1EIBHecJrx0LY37awF9mn6lYNCQa3Cd/h7TthZW5pYAzax3L8pQJmhGJ5pD93xIO7U9PLb7iO+ZpRqln/5ST3jCAlWH89TjOn1HaTmXh1uEoqQMPbDksqDc1UNhmlSkG+dfTSgbPWj3roxdUdxFlLEJxXbVd77zneVm8ozB3nMPR1nTFLWdLRQxOq1ITFa243roSrHbBWWLLL85i9y7NVYAdt3Y+og3+GtiRAMXD/6aTCh6bfYMw8NY9bm2yrGLDO0mBUgf6a9Z0BX8IsBoyKDIMZi+7vg1iFVEK0f8co6vUa6C+AzyKKe1UPDqUn6OtsraHinwfRqMlJgdNPZy83HnAeB662tK2LLeexx5o1W78BV/w8f5oI3u47n3R1i2LPe0f9wv4ZcQBZ/rpBHQ455AsWaiwFeWKWXKx20HCl81dxBXjd0n6fvVBLrR4b0E23Upcf53k6EXldCCV9wqPknhHRkPg8kdetDuPh5TwtqhvZQ+BU8uTBTSUd7aQrnz81P2rHIuQWXgRRR9eCpePY5WFV6c4gZStnToyBiQbtbx0BX8IphmzXob5BsN4afjNC9znTSz8lr+lB8l59wApKAMKFtf/fnLy098xaw296Xnb2a1UTwGPD+3LXUePk4rIoObqyQ+0kxc4pQnfq1898pXn10q3vdAWxTrYgoendLiEYuWsuVm0Bb8EaRJP0DaJp/zaYx5Ps7riA5HitK2Qi/VebjpwatJRZlZHakDlBEFO83zMaSJsnTE97h7XKvTCoIC9sCY0uV7N6GzwCnVvJjIYlYOvpoEWPCeTdiy6zMBZCJto2xZ397dMLmawNBi2yqLXh51UPa+F+Sc6yb80F6uGkYE3nNfcQWpXwj94acwK7qC79g0IMqUnAFowFEOjhQHRevaDgev1FuauwcZuFnSR8m5H0Xv4aM3H1mCSSuNch0pA0rAwMwg5qZYKyWvDsrIVjwuFkoEoiQXAlrxB31eMLO1j9UYxTKrpbgY0ImX+OZtVw8yKUifGKFc0w9ooKSlwzc8xf+FaBr3gzSuBeXhPYVun7sVGX+7B6EUtxeRvOyov9TDfcQHLrDC5cVfIDPS2U1kOyM3jkkBpHHfN57wUl+wxtVjiyjaGA+gLVYB6jOZCNrmOvImrDoaQzo6NgXagKtPwrbBVJ/fbQNs7vz73/9+/eSjWeJznyVuSoFxU59/bYOsgnNxiU9oSrq+ce9HHk1xVJlNmdanZ1OXIM6xDew6rhWaEqt6f/KTn9R3x5uimGvPcoJPIX/pS18qnv30pz8tuoW1wpg/TYHWbxT9K0C/jNvinjRoasr+V7nnh3Tolz/04zsZUJ6+aRNJfZ76pje96dAUdP0cRh3//M//XD/caBN3fbJ3zJv0OX46iiMzZEBa33/34w8/PUFzm8DqvwH+MeG+Tw7/4Ac/KHrQgT5p0CqIxwvxCeLXAhvmWzQdHUuhDcY6xvJrg2bOMvJQzUsp2Wcsrg2suTxt0NUxlmwbG2WdsXTFuW9nhQebHh56sGZnhOV4Xg6SRpnSywuOqWM1oS51slxZ4GiyKkH3UmAx+m6T77CgVcArZa0FrWgS1IE/VjT2jXvgaEeLozZoD34JaElfLEQTv7Z7ysWP8Fycc3X6bIRvT3Hd+JAXy5qV7i1bn1Owy0d6+dNv6JNXHDrQ5bop5aqLHLD2le1BK/cdmQLbRJWjHjLiPGWHDwKoK21zzPlqoiv4jk0DA8cAzMDJuQ/SGdz2LVMKlMx4oI0Hl8EoH4wHZcoD5fjGkd0S9k8b4Jbi0kfRqxfGZa8mUj5wQ0B2eSwFD48POOCA+tQGetFtkoqSWm3gH55QkFF44nzGQP3cSxS8kEnGUfqxEpxGeNus5Cu41eTRH7ZrekbhwSifv6MJhcrzTSpuEn3HheN5BL+877/wh/uCI3ecNOglN6nTNV7Zx8/Pjo9eVkIvX7sHyfzq3E+QNjumLTniw1hmVxvdB9+xaUCUo0QcXVMgPsLmQSQrF8QZTNJQJDAeBhnEBp377hmEjsoWDHiD3JY/e6hZpBQIZROlKb0yhNVGaIpy8+DYA0xfJczblQvBzhs7Zyim0GliMFGEH6sNdOJpFHcehorju/ZAlJLN26Xokoc1vRBN6Bb0hXTSK5tf29ZID5D1ie2H9pt7sO5Br4ebfOpR7JQ8ZcziljflmsDtoLETxxu7yvRiVHhGTvS18uwSIg+se7Tk65QmHP3j2YK0Y0Sh60dp10JOugXfsekQawkMHg/2uFbsjjAwE+886eTJPQNPkCbX7gnSGbRg0FIAlvzi7XOmUCB5DdoM5LWAetDDVURBmcQoy7RlGpSMl5rsKkGbdOgLH9ZCwWeyjWKkAKPM1Id2LjXWL2XoPArR/YX4p1z3BOXhhSOF7Pv+yjH5egjKpWJS2X///euvTXZH2RppT7r8JgkPV9Wn3qwoTDh2xwjOKXCWu3ZEDuRj/fvEg4ki9KNFm9EZt8+4LdPn4+vVwqZQ8AZXOikdjcFrxbTlQKdmuYiGDEQQB+iVjlCF3ghBhFXb3BOfayFluCetMpSvPNdpO2vOoMlgUKd0zlOee87FgfzixrQ4pj183AZB7qEhZbhmSRFs59KqQ3r5007HcZ3SpHxx6JQ/9WmDa+nAOYTO5FevvNKDdLZCWq5T8NIDfrmnLrQlXlniHYPEjTG+r9x8h9+Om1hvaJJu3E4Qpz70SjcLlKGdURzqyOvttubZpQKuQf3OuR18xprvOPFoQA8+rBXQp35HIXGpn1JkAeNZ4iJjiyH9QJ7InR07dunoL5+dFk8Be95guysXjAmAJe8HOH5Ucvrpp9cqz954L2W95z3vqUmbDOVbPCZubhhK3ySqz/UfevUBt5cJI+2TR9AObUi883EQlzRrgU2h4DP4MAvDwzDxBNc5QdhaQceDDkYPBQUZQJQuuiwHpYHQrQ1AMA1gtEfQx0omW8/cSx5pnKOBsAMhFZf847KkQwcaxKlTuc6lU750jhHm1CdIL04dytBOx9ShfOeOBpk4g0GZ2gqhJemV6Zg+VD5+qU/ZoWc8KNzLNfpTZ9qmTstrAzN8BvecK1MZjvNBWYvBfYFS4G6gCCh59IQvoG1ol9Y9dSbvSoP86NVWR22NT5lrgctGvZSmetHBgvURK19U5J5RBn64l0l5vrq2NAQ5H99Du6Af0i/i0YK+cdrpYHzII2346uGpbY8+i8D9YlXDJ44nPgPsgSslbg+75yiez9g6KXhIzTr3TMCE7YUl8bY+4i1ee26QPzWh28SkH32cjbsOzelbR8j5QmEtsSkUPCbFyougisNYgRDkfGuECCsBcB0F6MEP+ggFgRQXJelc2sC1MtKODISUD47SAeGOwIiXLkH5QAmoN3W6R2jRZLBQBq6VoS5lZzBpg3sgbfIqLw/25BOnfmmUq19ca7Oj9PK6r1xxlDKaovwF5YhzRFfoxkMTo3zShT/KUJeBGF4K6rBslt6ATplpg/vSu54VaMBbZXDZ+CWcpT/FEh7lqC3qRKujNofWlQTQfu1KfwE/uh0c9oBTXkCxo0+f28u922671ed/lYMGx1np2NKQ/nPUD+gQtGs67XTAU7uitM1XHH1HhpL2SV+WupWbh6C+4e4hK54wNMiAv3+x6rleuFYie+7rJ3IUd4yy7PTBPxOGuih4NDM+uJj4+blwxK0nbIqHrJqgY/LgxrUBTxFcGQwnIEBICV+UsKN7EdCwfnzuPkWRp/eEMYNAgAxqeQTp0k71uU8hUyLyuJ/Bozx53I9SS3nqdoyCBWndV4YgX+iI0lAuUOjSuu+e+NQfugR9oxy0uJYOLSlfvPrRLG6s1FN3kLqkTV3oR7e24IF7AuvtpJNOKldKyhKUHZfGLFCWMtSNdmUa7N6a9Ms3SlebKX330Ys2eWaFOqLU1e88fatsVqz6rVzUw7WgXu4ZL+JwOeBJ+kIZ6Ffu1gR6I2NpBzrG0J6FwLigvH2J0TOQo48+uvjsxSbuF6sqY4lLKr989PyBvKmXnKU+Lhr2Lp89nilbXn57D2zRh4dcOh7ae9YBeOoFOrzD5/WETaHgMV0gHDrHrJ4OjPBsTWSgER7CmcHomrJiDRAc6dDJChCkRStFO1aAUXRgEmNFuA/azR9oggvEpc3KivJBRwY7papc9dsZID0aBXQIGWxR9qGPckC/8ihQAwENrqWXT/kUfngQ+lnysagpPvkEfEl/jfsMfZQQKynKiPtDO5xrn/5WvnaD/GhwDO/sdHDuf5ynnnpq5UObMqUDeWYBXqBTPehWtvZTND4x6xds2qoeCtf9yEj6caUIzeFr+IXX7rlmwbNqbfnDL/TwFXPjuK+/0IEvzuVzvDKQ9oT+nC8G6T75yU/Wlkf96K1cLiguFP51cuUrkFwntj4aO/KQE/xIH6T9yvB2Lf+88SReHvm9+RpZtqPGdksK3qTiWzcmDX2+FM1bG5tGwVMmPuX51re+tTpcB0XoMwi2FsYsNbCjyP0T1tKQ/5PCApajly18sY4LgVASEgJI4ByVpy0+0MQS4VtULqHUTj5DbgHfxIii1GbCSQErgxLiG7Z8J+weyFEuto9xK9hD7TvXaI1yVo5zZaGJklS/JS363ePbJOiEnhUVvivHgFAGxUmxUy4GiyNlo37WtEnZg0Ff7DPRgbbLZzJyriz14wH6TRLaJz2/N2XGApMWpKdIBROiB24GqXawvvxzF29gS+VDP2TCFlzjARrwyBcC7ebgnuEj9sKVfkJLJqWVAl/VI4THjspMvXiBx4lHG2hv8mdScz/ptjbUOU0HpG0LIfIF8mmXcpIvbYn8gn5xT15p4/4TKHQ8Ei9Io3/wUpnSiDOWQ6exyA2UNMpYV2hEbni0ThguueSSoSnPoXVAvVbcOqBeRxc0c2sHNDRhGpoA1fG2t73t0AShXl1uwlM0N2GqV6ubkhuagh7ufve71+vQ8reBWbQ35Vzn9773vYdmWdSr101g63Vs+ZXVlOrQlOvQlopVl/TqbwqwylJOU6rD+9///nqFWp3JpxyhTS7DTjvtVHxDs+BcOfLf6la3Gpp1U/Vrw49+9KPKL7RJabjwwguHnXfeuV7VRnP4jhZh++23H04++eShWdv1+QDt/+EPf1hHZcp/wAEHVF5tkF/Qhqbkh+te97rVfvVqNxqEpsSKBp8P8Np52i5vm1TqqLw//MM/HJ7//OdX/d/5zneGvffe+wp1kZv03SxBvXiWflce2sW3Fc9w6KGH1mvt6j7iiCOGNsFWvfOVtZxATiLjY5l3T53iQkf607n06deknz5u7YCW+c6XQ0+bvKtt6UdHAX8iC4mTTh79rmz35dFP4WHGm2tpHZUV3inH/ZTXDJ3hrLPOKjkW1huunPXYPDBjji0p12bMRmNdO2aGFs/CZKE0pta1WdRDEdetIyp968TKu1ZonVxH9eQ8SP1mezRbOjYhKYsqbUg61h+3AytAAPeVqc3SiOcaYbXK34RxzlJpglbls1TlUa97eKROUK/lZNIAPoE0ykaD8tQtTjp1CdLKzxIHcepFVxsU5XYar1YC/aFMaVj98qNPQBO4p37WurrTz46sbOW5pxx1hJ5xG7XLqkT90slLPpQnvYdv3mb1Qoq0vv/txwqBNKDNoWs+qCs8ddQO0M60O32GNvW751vh/Lt4YDWxzz77VJvSF0H4vhRSh/LTRteQMTCOCy2JS4AcIX2T8+XQAtIln34Z8zDxS0G+8H/M27GckjlpxDlqV8ZY2oQ3eCBMx0NkJLwby4mjfEnrmPITkha9VtxeoFLeesS62UWTTsC0MEsHY7AOAR3qWodIh9FAyXiRhYtBHvnTAUmz2lA2gVOP+lIvRNjRKp00XBG+P452igjN2uVJvwdC3kK0VzttlY+gKVMgSB6cAfeGdhE8CtBnb1/zmtfU7764LJTtvvoNFmVKR8k1a7cUiwEinouFz5Fry8sgBgzalZ1BpCzlql/+vMyhfNvI5DvllFPq2xzao073kl/71ePHBuiQNy4N7dLu1772tfV3HdfJg460BV3qch/97pvs7HLgnjLI/LWH6yNIfwTySGsis2eZbxq4tkwy6TPQBunVhU406RNwVLb76EMHfolThnYL4YF+1AauOPRz1Vna4wn3lHIEfFFXZGYxLHU//SYdOlLmNE+mgf4x/5Ne3FJ5w5/wQR78ER++zof0cfgqbWgNP13rI/yRXrw8QuhyHJ8HiQ8N86UJ1APTaRxzrm4TTRS/Zxq+6CleWE9YNz54ZIS5EGbpUMrFfdZP0kX5GVwGNf+vDyjxB8uXe4TMoFoLpDPVNd2xhDWDSpCG0mA9xjpJoPTRmDZJB9ourXKcE3SCJaQMAi4/xSl/6hWv7dK5jxfi4nsnnFFq6rT6iVJHr8GQusXLI50+kIaCxndlKkMfOUbopc2AQgeaxUlDaYKjdoun7JQ1pl856kpZ6KEElaUcNFD8ylCvOHxYCMpFi1XAm970ptomR+naWWNnBB5HiahbOu0Kv6Ks1JE+SH3Su0arfgDnIJ92SOvb4vvvv389BzDhWUl4sJe2S+dcf5lMZ4EytFM70IlH4elSwENp8ds5pB1LQb3ypP3geqn8qQfN6hbQjV48cJ372oQ3sFhfryXIrTaSC7TbreRPUeLRuJ6wrvbBRxgE5wJBw8yTTz65rB4DPAqEEGTgewGBlWx/aoSEMAgpazWD8tGRa0BHlJpzAo92SoMwGGiULZoMevRSbMkjTpkZXEL4oTyQn9Arw7n8KU8a5/K7JmyxyEE57qlXOsFDXkEaChO90hlE4gwyx7RHW0wG6jXAKHnKTz73la8NgjaHbnUpS7w86nBUt3Kkcw9f3RufC9qiTc7lwQM0OGqjsgV50DtfCH1WIO973/vq6PveHt5S5HYTKc9AVY5zedDuiAb58YbsWQnsu+++9fD2wAMPLJePN0XRIZ0AytJX2qhMLyFpix0eHhhb2X3nO9+p8vERreH7LGHMP0d0hIfaIW4hJL+j9Om/yOa4nnFI/wn6XUj97i8G6aQP31yTKddBysd7/eEcfTBNy1oGtGX16tw++hNPPLEMN3H4u56wriz4CNb0uY4+88wza5eMfysaRBkIGXQ6XLozzjijPtlJaYytl9UG68vuFeWrGwghuiJ46ILQoS2xTMB9O0q83o5GgivvuP3KA9cmL1sCxSvDkUC5l7ogAzN1UsqxcClxrgmWPLr57ikfaaWTXloDLvyVDj/VaYAp23naKh36BddoojC1J1aN86RRvqMyKY6//du/rT61d1w6ZYtHA6gHXQKkzWhOW6VJ/QshSiTKg3KlnO0uotz98Jglb9unfgqdaIqCwzc7eXzPxNuL+Bneogst+Mld5nsodnShTV5lOkeH9rLi/QGIa4tsmzjVA8pD4yzAm/Cc21I54VFkdSGkL+UPv01kXvZRxkKQR/l4YFx4GUhdyoPF6pUHxjKsvHve857FM3nxxYRucvf5AHWhcZxna4D8M0wYB5S7Sd2zKbzSr+heV2iErQu0TqzdIeDYOrCO4sHuCbs09tprr+GLX/zi3O6PJsT1wfymUGpHRRv0FZrymDtX1moHOzKuc53rXOGpfxO4um4DoZ7SO3cU3BPv2IS2ntyLb0v0ohv9aZP2hH7X6rvsssuGXXfdda6OlC+Ia4NkLriHntQtTpqmjOpHD3aj4NvPfvaz+rGCusb8Ck/x37n63XeOVjQ1Ia/z3Je+DcDaEeQ68cprVmulT/na2gZqlf/d7363fpRwzDHHDE0xzJUvf47SKd89dDgXUo8yEy9uoaA8IbxGl/xp/7e//e3hsMMOG653vevVzgl9hI/hsfijjz56uPTSS6subcA/Mqp89Anu2a3UVgm1e0pZbfKso753bMqgfiDSjJHqB/Qoy9E12qbpX25Ag2ObOGuXCdrVL0RWFwqRlchqm6CHRz/60dXm9Ol8If2mn4888shqo7Lwbr56xkFdjuGzIz61ybbKjSyQ26c//elztIibj5a1DOokb/o4Ose5/nJcb1hn082v0RTTXGgDvCxBfi4PyfgtPZhr9Fda91mfjeE128vjntAEpmbV1Q6WaepRnzqcj5F07qEj52htglJWnuvkVZ50zpO2DZA6T9nqAnGQcnMeesQln9AEr8pzDL3oaIOwLFD14N84v6M0oUNa58K4PSCfNilLcA3yy8vqkZ8FyMpxLnBXsIj9DNkDVvvD7cmXP+0C10LyAvpCI7jXBt9c2+cLaEGDoA3KShud+3zsIYccUm4XVmtT+nP1yePhqP948qOjh3VJLpWVctSDLruCWKCsfXFow6OmmIoOebz74EckXqGHlKUu9Y5pX0lQP3iGoE71hV/uLwbtQkPagm4W6zhuvqAO9/WDtPLhifKWQuiS1rky8InbI+Ub21bmVvIe6kube1szqFdbAZ34C+HbesO6UfDpsOlzcE14vCTk1W/LXq+de7kGU9uMWumkcS29AWKgwLiDVisQ3nRu6nQkoO45j0IFaQk9uCeAfAKgP4NfHYmHXCtbuYFzcaFHfSnfeep3xKcoe8IZQc1RHeJTl6OQe+KklUbItfIE1wKIx3/xkHsJ8oM0fOA77rhjPfgUPChHrzrDSyH8k18+ZehnR/WE3oVCIL384tDpqHygVLyU9OQnP7l+jJy67ZTwUJZyl37MV0CTsgTn8pg0vdhl0ossph8c9Rf3jOdL3DPyaK/8af8swcSDH5EVgcKMvC4GNIRG6QVlpb/nq08Y97+6xmUthXEfQ871d+KAoaAfwuPl9Plqh8i0czTgtfMYSOsN60bBjxFBCcMwkBAYfL6EZ8+1XTPHH398vaosnQeHrGCdz+JIh+iMtUAET90R4sS5TtxYwHNfWyDX6IQMkjFc5/5Y2J2Pr8dQ5/S9TArJF/6kPke8Cw05H0N8grwZaBDBH5cRunOetNJABgdr1zfK+aVtd2TVZjeUstBLaagjtAfSpFyDbDGEBsG5gJa0w6pKHEv6MY95TH3WgHIWR7GTu0yi4qRHj7zoTL/nWhof9Ur56RdHcLRK4H/3iVr+ZciEtVpQZ46peyFEToJpfi+GtHs8kaTuxSBfaHPU16FT3bHm7ZJj2Hn2YQxlHF0ZQDN5TN+iczX7bLWwvJ5bB8BAS/pb3vKW9Ucag8sDpBNOOKEe0kW5EwYzPaYndKw/GJwGRPpHv/pokwdpLFofirK7xECXxmBajgU6K8iXwHI1UZh00OP9Aq4b1mSUHznjMrB6IJPaIi8kDbqjqNAeZZR0aZdgf7+tmj4XQcEJa9nWjQT8wW/81w8+tWFjAKxHhbresGEUPIH35Nqguv/97z+5y13uUoOGBc8n73skGRgRiCzpO9YfKDqDl6JzzlLms7YzgZK39cwX/Fi1+lRaA5rFuxZAB8vZqkJdlDNLfuedd67dMCxxXyYkW+SOQUFxk8exMnZffopeOrue3I+Cd4+cgnaHD154skMs7puOy4Ef+t2kq0/wFT/Dw47FsWEUvIGUQWKbHyVvABpkHrh62cAbiRQFoSAABkoXhPUJ/SLYkmgAU662i+ahpHs+A+snDRS+vjTA9e9aIEpd3epCE2VipXjf+953cthhhxWNrG33BPfIZSx0NIt3VI709ryz9hOnHnCeukwKzr2N7euP6JC343IrPRMePuOfSRjP8LRjcWwYBW8wGUSCDvbAy8M5VrpO9y0alry94gRBMEgyKXSsL8QK05eOlFp2ntjnrP8M4uOOO6588ixhrre1GtTkiJIFR3UzFNRJ0VtZoM05WtFP+YBjrPhY7uI8C7JDhuwGY/pTH/mNkve9HK6ajsuRfsBTfMJn/I/S71gcG0bBG4A6VSc78tl6C9FWMANDvF9seQiTv+d3IVi/yMC19Kb0EuyU8kniuNf0rZetvc5Pya9Vn5KfKBFHgRvGkZWODg+BPWylZNAxDmiXxrk8FD23oTdUxUVuhaSTBhzFmRR8y4drysqm4/IJEf8d8TW7VVx3LI0No+A9RTdzs6goB4OBFe8PLQYLiLNHlpL3nXMCYeAYkAYRhSJInz3zHVcOstwGfWS15cjXbfL2vAWiBP1I2RZKPnj9lqCPHQ34BP0tXSy/cVpBmcmTa/WHhvjhnWcXTVYU0kQGk05ZZC9IfbbxeuMZopDGdCadc7KdeP8F8N9QtGW1ILi2GpBnWwHe43WAz/pAf7jXsTg2DIcMJB2bgaHTvWLO4mNp8ccDy4cl78GYB3QswQwSkNfgl9+A6bjyMN7tlIEsTp/aMQHiBJ8SsLvGpwQouSg9eblC0pdxtVAEUQAUeBRj6hMXpRmoRz73nSet85QJoTVxSaNMR8FzA1t57QQis2OMr+UNDfK7J+9pp502909V8RDZny5vswOPWPFCroWOpbGhpkADJ0JucFHqtk1ZNhvArHyDxTLXL7W8GUm5x/oSCIkBY6kXBdCxvuDfmfacR7Glv7k7+Kh9KIwcZKCzpKUBfRxlPlbgZIBFr8woSWkpaNdjRb9ShI5MKs69wGT77mLloiHK2jHyaMLy2zmfgQ5yj9yG/o6OpbBhNFwGZATbIDJo+WvtizVwWewe1BlUPiHrv4x5rVleA1x+fnvnXcGvT3DT+PCYPtOXgtWblRq/tt01HqqbvOOrlzYWPejnLOUhk3qW9u4nrWPOZ4G86FAmWlneZ511VlnvqX8hRAYpbUF6wYt7Xs33Df+sXJWtLseOjuVgQ2k4gyGBwIOlPD886108F40BYsD5QYW9xVw2rHpKIL7OPNzrWH9gCfs0NCVPuek3VrlJm3LzDRdvmbJy467Rl/Lp37z0Jp6SpSzJRFx1lGQe3CVvFO0sUJ66uf68+OR7KSYglrjyF0Lyoc05SC+YkOy7Z6A4dz80ytPRsRxsKAXPwsmgAAPTQN1hhx3Kd+vDVRnkYMD5mbO3Iu1fphwy8OXtltD6hD72KV8rLRN1+puCc67vPMC0Z9w3XEwC+px8uE8h6mP9ax/6qaeeWnvMTQbuSxcZkFd9zmeFvMqlqP2di//cCpGsLQb50Bq6hShxNJmYzj333NowAO6LV65jR8dS2FAKPoMSxgOSz5abhpXOMgeDOwPX266+E+9+JgkwYDrWJ3zoi29dH6XPTOaOlCKF/u53v7t+Nei3fRS1dBSkPneU36TvYecznvGM+q1gttBmEoAtlQP1stbV4xmBb6ErO/QshMghWU1acQlo9F4HIyXQtoSOjqUws4KfFjLnhHQtBW88EDMIwIsxFLz6LZEhA8uR24Y/njXEsgoWG3zbGqKQBMpzun+3JtTrv7N5xyFyhUYhfa8vPUjnq2adi5PWuXzycOGZLPyEgruOovfjbXnJE+UqnXw5H2N8L9exunPt3HeR7NxiTCT9ON18GMuwdNJP0+Oja1xSJhDx2u/Y0bEczKThCOI4zDcwVhsGrCWw43Tgc/X97rEvM4MEfdJw0XDVGDBRYBRBx6+34cW1hYf4k7C1oU7K3R70KDqIsgxNjl5+8sPuCy64oNpBEcYQcGTZ+2tWVnh24Bx11FGTo48++gpfcBxDuepMfSCOu8jEEJq4AMV7Cet1r3td/bw8Sluacf75MJ0m7RqDweLBsmcJKbejY7mY2YQ1eISxMohwb21Q4Kw0Cj5+z/FgQZPlvZ+FsPgMToNV+o7LFQ2+4QslOfYdz6d0tgbQYBusvg0iW+LQHHm78MILJ6985StrpaYN+jqKGHzfxnfE05ZLL7203DW+L/O0pz2tdryY+ClscqGM1KUME1/4Ij737c1/7nOfW2/afupTn5pbFawW1KFenztAH/rR0JV8x3Ixk4InaAZZQoQ6y/ytDQPOfxFhrJDQRolnWev6DW94Q33rY1qRbcvIREcx6j9hzMcrA5QbBR/Zcj0OMTDQiv787cduKoqW/x30s4/T2VdvpSevOIrcW6aezTz96U+vH3xYCdi54j5kpZedPPK4ly24/vzkDVt/oVInOqRPPnVtCdJW5XsHgJyT4Y6O5WImaTGoCBthj1IneLFwrgzkrcgoJjQBugRLdzRb8j7zmc+swWhQdlyuSLgq0odx1YSHVwb0IyWNpig6cWhy1H/kz0N19Aq2TrLm3RNMAPKZKO52t7uVjEg/zkN+WcdcN0ceeeTk7ne/++RmN7vZZPfdd69vtHuI6yckb3/72+sbMQceeODkjne84+QJT3hCTQbcfJkAMiYA3ZmcZoW2KsPKBI2R1y0tt2PbwUwKnoBFcRJCgr0aFsusQI/BGiUQy9y5AYy+pDEYuWoM3D5QLkf45KWa8Eqc8ysD6UdHYZoeR8pOnGP60bZCSlg/s7ZTBnn4i7/4i8mNb3zjipcnsiuNycA1ONqW6EHs4YcfXn92Yqk7ekjL3+55jjKVQ6ErU8iEiB71RtmvBuwU4kJSLhodOzqWwkwK3gtE2bVgcAQGy5UBAytbIKOgggw6it3AMCjRzTrz8KrjcjcG6/YDH/hA+ZUpryurLwNKOgo9EzZEweljwT2uJedk0YNOD0+l0/eOgm/NC3HTRKHL71xd+ECJkhHIKgDci4EwnlikUV4QWlP3rJBX2coRPGTNmLuy+6Zj42AmBc+a8HYoITcwDJAo0oAQjuMiqLPC4FJmrCLHnIv34IwVBVEMY8jPSjVABD5NL6TIK30GeI7b2iCiJPHIA0eWsPZHmeg3xwQQF/6vNiIn+pMSdR2FDOIE9aOR2819CpA7Q7/aXRPIr3277rrr5BrXuEady0eBjvtbXODavbTXPddkPmnxSxhDmuSTZlzmLAjvya72KTtjoaNjKcyk4D2wsu/XiyYRaIEwj5eqhHJ8vSUg0ARbWaysCLnBaUntjUX1QerL4MpAowTkcV8+H4TilhAnaIN7uRa2BbA68dT39T/xiU/UdtIoTXxK/+pLPHH0TGOtoK/QZFUW5Zt40M9RrJEvyg/QacskA0T60K4Mbzz7AmnkIHAt7XR/KzeylCMob3w9zjc+l2a6zOVCvtTh3MPj/nmNjpViJgXvg14Gixc7WHwGGRh0BoqjAWeQsrQIpWAgzQrWFigPLJUNfsELTPyiQQbsdH1REIBmribf+pBOubmPboN4WwFljb/2it/rXvcqBW87qXg8CS8pHHzBKzxaS2Wjfyh4ckSxqRcN0306DXSx3rmbsndcHkdvte6zzz4lM9KBNm2JIl5LoCl89p5HPqo37Rbq6FgIM2lcAmYngbcEn/Oc59QOAxZgBgsFEF+lkAHm3qyQX73Ks8Qm6OJYmqw1gznpoqyjDNQrvaN4QTkUiG+UKMO9KBD3tyXoK7zlvvAwkjJ5yUteUtsG/RglE3aeY+AVpZvJdrXBQreyii88BoR+Wc7Eq6+9/XneeefN9Wksfv9X9Z0bZZIBWM+TOZ77+YlPYpN7benoWC5mkhYDwidd99hjjxooxxxzTO0H9uGnCGDcJZQAhSBPFP4sAbJCoGwoZUrJN7Mp6SiDxZBylIFONPluCH88pSBOGvFRXmMaFgrjdCvBuIzlhi3FfGXio/ba3+2zDw972MNq26TvqrzsZS+rfqVc9Gny4HcmytUOlJrvr/jxhfP0u3tLIf1oj7vPBqB5LH8+gfCoRz2qzsVr13qFNhtftm36YiprPiuP8Gq5YUswX3lLhZVgOn2ux+X1cMWwXMxswRM032K///3vXz5wFt+hhx5aH1zyoCsPsgw4cJ7jLMFgjHBTRvY2ewbg2+CsPWkMbEeDGRzFSS8exkwSZznvF2nKdx3mJb3jUmGcbiUYl7HcsKVYqExK1A4Tu2lY8VxwVkXccH58/dWvfnUuvf6nePXtuJzVCsr94he/WP2aPtUv6delID0jwIfFPHzXtsis8kxgfti+kjK3NrQBzei9y13uUqsO0K7I7krClmC+8pYKK8F0+lyPy+vhimG5mEnBEzDBkv4hD3lIvSloUFK4T3nKU+pt0W984xul6Flh00p+VhB29bI0zz777Nrz7GUT5VLQgfqkS1wGRJTFGOjzXfFxGdPlbXZoK+Wn3RQe1xslyNplQfo71iGHHFL/CaX0s5Mkq5zVBtlhwasHPekzCm8pSJt+tuWTfMgXeXDULi8s+dYNWZF+vQGdwu1vf/vJTjvtVN/mcR1edHQsBzNJdvyZrHQC+IAHPKAEz0DyeVM/vX7qU59aD2ApUEoieQxYgroQ3MtADFwrn/XCkvTzZb5/v0QbC7w8yZdzQf5xmeN7nh1YzqMx9eTetgJtjSXLpWF1xILffvvtK44S5M9+9rOfXZMqt5b+lAfP3B/zF8Y8dEwfCJGBTBTilOeoj+3QIkeu42KB5SjilAf61XdcUk7qNZntvPPO9Y0a/W2iGq/yHNU1ri9xQdKC+NwflwPjPPMhdU9DGTYz7LbbbjXGXAvdD9+xEswkKbHIDRjfgPHgyvazDCAP5jz49Cag8KpXvaoGLV+u+wnKEXJtIDoGyjPg+YO9wOKhn/K4ZSy947KRDlLOGOPr6fu5tiLgqjFwlImODNptAfrA5IyPXDTa76Wghz/84ZMb3ehGxSP88P4DV5w+sMuGCyR9PuYrjOOVl2tIvDiKXUCDo0nbSsEOp2l5MAkvBX2WuqwguQ/l81A45bnvQfIBBxxQDzBd63c8cEzfjwMlnPvTD5in0yZIM5ajKHPXkbWkUTa3V2CSffCDH1wTkZUGuqUb87GjYynMpOAzWICA8hHy2xLEfOSJEFKc3io8/vjj6zsfPuh0xBFHlAvHfmvWFSuL4hec28/OJ84F4wuBvt/tux/PetazJscee2xtfzOBGCQUwpYKu3YozySiTOVlEG4roGi0Ow8co/B23HHHyX3uc59SglmFuef9AX55X2P0+r6/K9lSqYwE/IuMRKGB/FktJZ17ru188dldSn5WKBOUJ9gpRdGnHsHKQVt9d4YCFRdZkg6N8jq6jjzEsAnt4F4gfdIoU5pc46cyUoejNPLL51q5gN+2qx500EHlLpNXyP2OjmWjCdaK0QRtaIN0aMveCk2Ih8985jPDHe5wh6EJ7PC7v/u7FZpFYhQMTZDrvFkpw1WucpXhBje4wXDzm9982H777Yc73/nOww477DDc8573rHNxt771rYe2Iqh0zZIZmnBXuW1iqaA818pzro4tCbe5zW2GD37wg9WuNtjqKCyGZskO17zmNYc2WKsMdOR8uUEbjjnmmOLhuE40iHPEW/HNEh0e+tCHzlvOSsLtbne7oa2mqh5Qtnp+8YtfVJ+qrym7OqIBX/AnbWsTePWtc/1y9atffbjFLW4x7LrrrsWTCy64YGgKtcpTrqDcthKbK9fxX//1X4emaKv+H/7wh8PJJ588NKU2XPWqV70CvbOE9IWwyy67DBdffPEcf9EVWr73ve8N73vf+4r+cT7HtDHxZO1Wt7rVsNdeew1/8id/MrSVTvVf6hGS3rl7OccnIfen0zmS68jzIx/5yOErX/lK0YlPjuFl5GExpK1f+9rXatwpc7rulQT0fP/731+03tQJT3nKU+YtZ6Ew5t34+m/+5m9KBjtmx8zOvCY0FZrQlZViV4IlJevDNdeKI2u/dVj5QF2zlj388ocdDzdZ635Q7GUllpvdEx6wse6lsx1SPnWx/MbWn3jnWwploheUC2jeVqCt+MtKBEd8xV++eA/5rM6kE++5hfRcCvrTc5E2GGu7LBlgfdpC6/qNb3xj+e/1pVWSzyB4KU2wurPz6n73u189U9H3VgKhY1agLf2HVn3rmpXeFGrRLY0Xn/i3uaK0L/VqY+QhfPE84oUvfGG5B32a2GpSfi4tZXOxCECGBPWoL7IKSSveeeSNDBorvnTKDXbTm9606pVGWnCOHmMp+To6FsNMCp5wRTgJH4EljG2mr+1cBJCrJgLvXtISeogCGZdFeMfCH+FOOfJaWruOYs8gmBXyRiGgARxXEsZ5VoJxGcsNW4r5yjRJR4m41i/hPX5zkbUVVvE6ish9yjOKyz3n3Gy+t+/9BO6bJz3pSbWVtlnJ5c/n27/lLW85adbw5OCDD6599tKbAJSn3JQ5K7SHfGiLo2tB2eiMUUKePMj0jRruKHHaq93ykbPQ40uUJiLPnLSD++Scc84peZc+Bozyk9+EkvohciZtaERDPmfse/bcXikH8Do0Sx+M+285YUswX3lLhZVgOn2ux+X1cMWwXMxswRM2wipEiL1t58GVbWgsIPGEmcATboJL6EOgozQh2r2x8Kdc+cRTLvynzg0+1lPKmRWZVPLsIO3J+XLCOO1KMC5juWFLsVCZeIjXrvHbtX5zft3rXre+j57fIoqT1jkFBPpFGPe1ftKnCe6z0K3K5Pdge5rXEOW2JUhZ+jVGBdrEq9Mx8sZa9vJTNgpIB9rmmtK3TZFMy4M+ZdiFw5pn2JjApEvZqT91Ar7kvncO/IXMG+GeZ1DuvgVE2ZtE8Clpx/LtXP2pY7lhSzBfeUuFlWA6fa7H5fVwxbBczKTgU0kE1iAwiAgfa8iy3j2DAgwK90JYlGqux+UljJHrpHE0MDMIZkXqRUuUAIwH1LaAKGW8dEzfpM9cU2IscXGUd+5H4SmDHOiXKGhpwD38jeIUn7oCZckvKH9WpE5HgYLPJKRs9ag39KiLsuVWetCDHlSuGrS5py1pl5euTEzymagiL94Fef3rX19K2iRhwwHFHZdP6kOHCZLFb7XgmzjcPP5L8PjHP75cmyC9+uUPv8B5+kgayHlC4rTJdXiQ8zG/O7YNzKzgM4gNfpZLhNhgsVvGK+/5SxChc4zAJYjL4Mt1hDUCnWtwHAs4uJ4VKY/VZKA6D625v60Av/WjftC3Udqu8YEif+ITn1guliD8GfctyEsWxnwcp1FueD1G+mNLEHrVpx6Kk6EhnlIWT2bBUd8DV83ee+9dCjrtpsiloei94OXXecqOzEZWTAAPfOADJyeeeGJtCbZrjC/d/169+OeXgLaW2gnGjy+N43777Ve7ZDKGwvOMp9DhXHCeNGhCixBanFPu6MlEK1/yqMexY9vBqk/phMzSlYVC0AglOLpHwAhdBJTwOWbwRdBBWvEpYy2gbl/pM9AySNCxpYpmswAvKA384IagsPTLWFHon3H/8qXrQ/1PqQjKEEC6tQJ6Ab1kh7uQ8oal6vW9F88b/KAb/WQRzdrmvQvPCkC7whdI+00kni084hGPKF86q17wY+6jjjqq3p61CvLmd9yLs0LdaWvoAHQn3gSF1qw2pBv3W8fmx6oreAJkID360Y8u/yKhInRRAIQv1wYhZUABuOdaekLp3FFYS4XAgrOkNuDQFjodO36tvFjk+okvnisDj2IRmqyliWKxGuI+o1jGfajfwfVaIcoOPXa58K9T1EvJUeTOvn+TWPzv2iSf1ajdXXYNSStOuSBNZDfXCfgj5Bxd0uLZlvBB3WhQjvJCg6AO8BE+PKfoEyd9x7aDVVfwBIngsYJsgeNLjAInbJb6BI4gUhriPcSLn57gChkIBoHjWoEyyqvg40GYsK1Dn+AJ5YUf+pD7wYNAfZb+cXRfeorVrpson9wX8DiKcS2AhvQjd9Jtb3vbul6qL7UL7Sal/fffv3bMyINm9xxZ8L5t4xrcxxd1iZtW4DYFuE6cMsLPTI6zImVqW8aXOgX3KHcvCqZedC6HDx2bCzMpeMK0UDDoszfYrgA/LCZgAoGO8h6H29zmNqUQCGoGRoRX+vg81wImF35XUKcAsdKWE2B8vlyMy1hu2FLMV+ZiQR9YZYGHjFY8Pl9r+6P+xC/9I50gD2vXG8ssfS4SaShAfa1/pXG+FqCg1Yc27hJKXn1B2jUdAI3o0w7KkUvKvcgC5e4TxHF9kFN5pE97pHNOlvEFHe47JoRX0qX+lQZIOx3RY6xov7e9PQfwzED82EUzC+arf6mwEkynz/W4vB6uGJaLmRQ8wVwshAAC97jHPa6sKMg2xwz4vIDiQZgB5WUXyp7VL05+A86ksRZQh69hxv8uxCrNYJhu23xhnG4lGJex3LClmK/MxQJQEBRSFLmVl101fM1RqNI66nsfmPOdGh+F88DdhKC/KT3ps1pbC8RSpZzt6GJs6E+Ybts4yCMvOsEqxPd2rESjIE10PqHhhSyKVT7QFnWQVWXgQ+IXa+c0DSsNoHzjSt3o84ey5z3veZPPfe5z9exBu9zTBmlD20owX91LhZVgOn2ux+X1cMWwXKyJDz4CRyHwb3tT0BaxKAoEOmYAfOYznyllbtcBpeBLlHbhSD/ejTEfltvY1BtQNn/2Z39Wb14COmJdQQZ1aJwOQc4dF6Nzo4JCiAsgygEfKT6rMz5ufT3mrXNvfPJX82efdNJJZc1nxwo+z4eUMS5rDPGLpRFH0Xpo7hszd7rTnep6OX0z7lN9T1GbJHxBkwzLjw/evvaCk1012pHyweQgryNalOFeaMU/YVzXQpAmaR0zcbjOhAXi1CnOOPIlV2+Ei0Nj6JNuegx0bH6sukYiSGMBNyh8TtgAp8TdEyKkEUQveshjSU3BUxB8ofYNx+UzVsAgTpgvLufqcl9etDiK91KWCYV1KQ4d0jlO1zMf5hukyofUvxkQXmibyVbbwkuuLX3EHw/hLxnwSQIvAelzrjpbCD2T8eDdVlpQFn7Lp470kxAeOo6DNOnT+e6pj7yhK7SkX5ZCZFJ6q0v1kFvbQ01oWd35DLbPLOSFLbIgmOgEcFQ3usAxbQvtiyGKXBmO6kaTD/gxoIwt9Dmy3H299YQTTqhPf0gvThnuQ+iZT247Ni9+668afnW+aiCABhohtpuCn5ty8I1vypygCRF4bhuC6GUTypwC4DZhgfnGjT/K8+sScmXLY3Wg/AhwYPAIMB5EBoNr9crr1XDfWPG7Pi+xrDTwxfr6ofpTj3oNruVCes8efNVwTHMURsp1NGApFa6PLYG+sFXvj/7oj34VczlS10pAOXNl4KGfdGiDvoki4aqxK4XlbgshVx0XnHy+8qjfQd2CfJD2Q/ji2rl+BHzPZCwvpYz3u+yyS1ndPi0A8oh3TD3zIXVKJ2RVgnbKXRlf+9rXSv6sTLTZCpBBQvGSKfIZ2UYfWkPfLEg56HGOhrTbufLRwjiySuKWGfNwtWD7qK/F4sVSbXHfMwC0LBfTZeZ6r732qhWi9nfMhlVX8AYGwcuAMfAIJX+g+AsvvLAsH4LI105Q5TFwLK3vete7Vjk62aRAEbH6KAcDCqIcIsyxANUnX+oOIjCOyQM+csbK5LdcaTBZsVJTtvqi3JYLNG9kBY9Gg14/Un7f+973qh2RAX1klxJLPwqJu8OHu+xc0t++146P+IYGPJxWiulLcYKycp+ykxcdj33sY2uVYFWm7sie+86Tfz6E5yANWuVVl7J9xoDc+rCa8nwszd54ys+DZO1GS/pxXN9CdS6G5EMTfiQOXYI4xpJnV/6TYIJFl/SOq4mu4DcuVl3Bp3MiZBFGwk+5eLJPGRgAFAGrx/1Y/T5z4FqnCgaqvH7yTcGz8ilEliOr3re+DcQMUOWqU160KEtQtoduVgT/8A//UPn8mSjfol9pSL3KBu1VZ5TEciD9Rlbw2iyfMik/u0xileNNLFqrJQ+08Uo7rNLkMXF7bd/Hu6TVn+RAnshP+g/CY/KQOPnIjAf0Hvx6dkOu3JdWHunDz8Xamf5De2SIgleWVSUlz7jQB8q1kmPJm1C0R17tz+pVUMZidS6EyIC61eUooEd7PAvwrwQ/wvFNH3xAc/KtJrqC37hYExcNYSOEOsaAtXwlmCxyitkuBF8dJLiE0oBybrnJwvMz7wxQkIbiphisBG54wxvWoLYDhpvFm4EmAHmUoU4DkuLw5ULfCPGa+J577lnpfb6WxZO6MyhWGkCdgH4h8cuB9m10BS/oa/3mZy0mT/zXX+SA4tc3rHYyIF56geWPHpOuV/2j7JUZRa9/5As/wh8P7e1V16926nD96HN5QD3S6WNxzvF4oXaqA9KfIL38iaPgrCRZzj53ze3ks9Y+da2NlFFk3SQj/2J1Lgb0Rja1RZnKIt9ve9vb6vMHXrzyl620DZ3oTVtWC13Bb2A04Vgx2oBZMDQLZu7nBEIT0qEJ5fDzn/+8fvzgfltSDte//vXrpwpN6ddPDxz97GHnnXee+9mB/ONyleGYMn/yk5/UdRtM9SOHn/3sZxXflMrcjxLU6WcZzTqs8sRJd6c73al+sNCEaaaAdejOdRtYFbeS0AR3aPNr/Xwi/NJW7RPnqG3i26phaBPavOWsJDRlOnzsYx+b4+u43pUG9OEvGgU/fVE+fjQFPjSlV+dNcQ9f/epX534o0hRk9YE+E/SJeHToT3HS+FHHRz/60eGss84aTj311OEd73jH8JGPfKR+1KGf0/doSdmCeAEP3SMLrse0TwdpU0bilJ14AV3qveyyy4bHPOYxJb9N6RVfr33taw9HHHFE/WRDOnnHZa00yKtu5aBf/59++unFy7ZCmJM3MiyQJdf4nvPVCn5ygueLyclYjtqEO285Kw1nn332XB/2cMWwXMyk4JcDQk4hQwZdhJ6yPfjgg+svNjqyWfV1pAwo/je84Q01oAhMBp3jfA1daCCJk9+ApExcJ52jgegPVAZKlLQQOiJk4yA+St2189zLgBuXs1SQfz380Sn1rhTyoVM/U9KuTd7Nuq66KBoTN+Xnb09kIkogx5xHkTq6HkMdyncPP6YVe5SA8qVzP/lyL3xcDPKRl5Q9hvzKEqRrK9Dqj/yBiixTtP5+ddJJJw2XXHLJ8KMf/WiurIRgHDfmRYJ65G8rheG0006rP2Zd7WpXu0JfTgfKfSyTqxUe2f/otGGxJi4asKwUwBLL0rF1XC2X+Sgt6S+44IJy1bQBU/ek4duWxrKQO6cJbC1VLemlmQ7KFuaLd0SDvNDaO3ePu8guHS4PPnV1ql+aIGUF8oUO6cdpXa8UytssLhr0tsFY7hZ9qm/TBjup3PMROg9W00YYt1Vfh6/OA7zRN+Jy7pg8gnN97Z6QfLmX9ItBPm2ZToue9K94beGuuPOd7zz3UhcZdY8s+cH85z//+fLXa7u+Q0fGQ9oY/uXcOJCfq8sOrXe/+92Tl7/85fUPY+4Y9S6GNlFUWauN7qLZuFgzBT8fCJ/Oc7R3mt+SP9wgMbjEO/Ir2hrJ32lgiFvOAF0KqV8w2NThwa0dEXkm4J4jpM4E+Q1kNIHrLYHyN7KCl0fAL/TjDbrtkPHSjV01+k4afmsPWrfbbruaXJMfxu2VPvxdT6A8BXKDVmCAeF5EMXvgSo7Rjh/kyY/lKXt70+2+4a/nu/ecwmYDijy/rqQQ7WW35fGv//qvJ29/+9urvz3EVS/+RoGbhJxvLXQFv4HRBGarwXJLsKS3nLa8Pu6442p524S2lmaOQlMS5UqIr7UNml+VMhvagJir33I75aHj3HPPHfbbb79abjdhusIy1zW6muIp32euc39Lgno2sosGbVwJ6NRHaP7xj39c/duUVf04Hd/Ui2d+qP6hD31orr3ypX5lTffNegE6yWpkNrQmTt8cf/zxw41vfOPqU22Oy8Z15IVcc1/98R//8dAU13Czm92seMQteZWrXKXSp5/k496KvLkWci/ptkboLpqNi606NZqJ26AoC4cl9Mtf/rI+K+xzAW3QlPXWOrTObbl75zvfWbswWof/qoSVo7VxzjJvA6Pi2oCt0JRTBTs8fCHRt8Cz3Y2VhEa7ItCdPM47Lkf6Bb8E/Mlbx1YlPlNgpwxe4r13B/ycOy4xfY3/zvF1vfI2MqQdaXNo1S6WrW+9Wwz7wBn51bbIjDzyKsPq1P55wTZdVrwVZDNk5lwwqUM54W3g3vi6o2MxbHUFT+ANCi4HytO2R1vdLOszGATLXgreS0UEfVZkcAqgbkEdjgYecFnYbmc/tUEqn3rRQdFLmwGXAbitQ3+alNOneONavzr33oG/JIV3eOljXdxyFDu+KsM9IX0v73oCGjNJaR8a0U8hu9YO4WEPe1j9aNwWXmmST3ukdcQbebRXXOQy5Yzb71lVJpXpyaKjYznYqgreoCC0hJqARxl4gcRLG/m0LEGXjqXHH8mfuaWDXrkpwyDJAEQDxWOweeuSQnrd615X3zOx314+Ayt+Y5C349eTpyOe6Dd9nEkRz3xN1Jus+hO/+eVPO+208lnLR2mKT9845ny9AD1Wnl7EYpi41p5MZOLswRfnmYrvKJEfsoUvmfzIkXLIGv5Y7cgD4jIJyIcnHtBKnzhpneNvR8dysFUVPKGOAs9SHgitb5b4yBiLnlBTFNJ6UOWnxrmOQpkOC8FAUY808sI4nzi0cCWgy6C1O8JDLr9d86CXojL4IOV1XD7R4Qse4guXWxQ7JYSn3iy1QvNlRkrKPW4alrzPFKSc9NF6hLah20Ni8hFlLN6Ri2Ysl3YSkVnfxGe0gPbFegfybGKIy9J9E4FgImAAhR/uuZbWOR53dCwHW1XBE04DxRKTsEdZOjd4dtttt8kee+xRu1uyHCbkr3nNaybnn39+DYooegqEwBsMSykGZalTeeOBpH5WkZB4cYBOXxF84xvfWH+994alOFA/JO04b+K2Feg7fNFuCj0KzKQJ+GI7KveX5xt4J41vlmeHSNJRlvoSP9cr0KnNcZ04d6R0xbHkHe0Q4+479thjy6rHD7Kb9o3lJTzLJDGOg7F8S4NPHR3LwbrSRr4gaUl/j3vcowScoBNoA8NDUMt6cawZIcphrWBJzn3EEnvZy15W7htfDzQhhLYALRmgHZeDIovy9xkCn4ygACk31v7RRx9dHxrT11F8eLjW/bo14efz/PIewnr3g9xGwTtqd6x1cXghXujo2FKsGwWfge377wcddFDtbImQs1i8OOOTqHkRikVkQDhfq8EQS4llyoV0zDHHVNhvv/1q/3ysrHH9UVTbOvCAYgfWre/vmyB9c8Y1Pn3kIx+ZnHLKKdXv4bU8+nWzQDu5bI488sjJcccdV+8gsPrHBoH2svpjvIx519GxJVhXUkTYwRcjuUU85KRcDQCC/653vat21kiXYDCslUJlfarbYFOHD1w99KEPLZ/yfe9736JtjNCRdmzLwINYppQZHmaFZvI2OeItX7WPdY0V+2ZSbtqk/dyOPo733Oc+t1aEdmqNV6kJ4ZfQ0bGlWDcjiaDHjyn4k87+++9fSjSK00M5r217S9JgkEdYK4XKFYMmLiIDTj0sTW/h2lbJ3TCeXKKgOn4N/YRH4RNrNpM3fnqj02/mfPIWpJNns8CDVG2yI4asar/nES9+8Yvr66b4QM5MhuFVlHxHx5Zi3Sh4Qi1EabN4/Lmf75aSt6w1AHxL/hWveEW97p2lvrAWUL6Huep2DqyuTEQZhFHsUWIdlwM/TI54lgkZbCH07XZ/XcJD/xB91ateVb+ji5LbLCA7NgMwBpyTVZ8Ztlf+JS95SW3JtX/e6nAsx5tpkuu48rDuXDQevhn0LBp+dkt4L0FRFAYJhev7Hix5Fv3Y6lkozAp1ctM4GqQUFcWuTnFxQUTBZ1BGkW3r0C/4l/50rQ/1q9/qccXZbeI7NfbG+/aKFVKs2el+3IhWrXZob9wxkVUQz9VHyXM9suw9q8Azk8FqYDNNlh0rx7rSRBRlBDuWPAF9y1veUlvtLHfBctcLUG9961srziCiGCjdKGMTgfMo3VmQ3TJoym4Q9KAzA8dRXe6lri2pc7MgfMIXyg3/rHzER9m99KUvrckbf7///e/XdlhfYQR9mJC+9YB9oyl5bY28CHjgmmxpNz6Y9PyqEj/8oclvBz2n8A6BPfbKGJcjr+NCSF3hO6gnoWPbwbrvbYPAy098lv7OFCE32Fl9vlxnOyOriHXtvu/XUAqUf6yljvUFilp/2SvuC5MUH1eN/4tyv1FO+hCcW9lRdhT9ZgFDQCCjVi144vd/Rx111OQd73hHvRHLqufS8scqP/9m9ePBWK6nlb173JpWAyZIfJbGES87th1s1c8FL4ZYHUEEmMVBKL0RaB+xn3b7LKv7PmHATWNrpReRKHfxeWhlMBg0ayHUn/3sZ2v3B8UD04NsOdC2jfy54C1B2qRPPWj0vXN9mU8M61O+6ihAyskxK7zNgKz0yC3kGm9Y3pQ9+eDG8f9a1wJDh7zrQ0qc4ndt665P+/Lv+7yvB7pWRCZP48HEMMsKqH8ueAOjDZp1gSbcV/h8bLPe5v7W04Szrn06+E1vetPQBn99RrUp8vplWrNw6vdu0jalMfcZW0GZawF/KLrmNa8592lT9OR8uaEN7A39ueAtgTrz9yR/3Hrb29423OIWtyg+3uQmNxle/epX12/7/u1Xf1mSnjy0CfVXJWwO6GPt8ollbcMPQVzkwjHjQJof/OAH9aeniy66aPjCF74wnHfeeUNTqMOXv/zl+lOZ+/jmfpsoapzoe7ydloflhP654I2LdTU1NgG5glVj5jabJ7DI7SW2u4bV1wZH+b8/+tGP1qvvLHv55XMvW9M61h/0G6tcHzmyEH062krNp3S9OcwK1I9WZE1W65wcbBZoD8tam/BAcC6uKba5No+vWeNWNnYg+b6PbyV5jsFat7feD+i5NJVltSO/fMZBVgod2w7WnfaLkifohDJKnpADJb/77rtPDj744NqBIa0lvQ9YeYmEQFMe4gTXHesP+saErD8pHsqIgn/sYx9b7gnfqeE95I+noKLsKK7NArIdOcWDKGNKXDujmJ1nkmuWfPnVpc04kVdwXxxIF6RcoWPbwrpS8IQ5QhqBjFCO/Yg+THbAAQeUkveJXwIv2Dr5whe+sMpRht0JKTPlTJfbceVAv/g/ayxYSo7l6Zst9siL+9KXvlRfGPWTjCgy/Tzuw+mw0YDmKGU8iOymvSx3Bos41yZCk6LxkPRC0ot3ja/Kdh4Fn3o6th2sGwVPQAkja4WQRmAF5wTWvXwewAMfSp5C8G9Mwm4wUPAnnHBC/SEnQm1XTbZTZjIwUXSBv/KQvmWtO7JQ9aGHrj4s94hHPKLiPvaxj00OP/zw2jUVpabfYsEK+t39rPI2CqZlPGMg7QxfotDHijznQsoaX8sT/kgLztcK07QE4/OOrY8N46Am4BnUYDCz5P1mzycNvPlKkN33pqstlBn02QtMsSsnZYyXsR3rB56vPO1pT6vdPiZ1LwGZtP3ajsJg0Y4nbHLBLy2uo6Pj19gwCt5gZqlRyhS5gW+wW+b7bvu+++5bg9wSlvXOkj/11FPrc7SUPMUO8lP4ecjXsf5g5WVrnn71Nyj9521P/UnJu8+KFR8LkWxkIu/o6LgcG0bBG8xZtrLYnINze7t9Yvgv//Iv5wa93/15M9AXKH/0ox+VUkgeyoCrJ5Z8x/qC/tOP9nNz13ir02rM92rOOuus+mZNXBQm7Cj5TOIdHR2XY8Mo+PgRKWkDmsIWWOGUvk/R+ou/pb200vnGCXfNu9/97rLq5ePTBEv7lNmxvmACNvlS8ne7291qC6yXeDxLYcmfccYZtQLTn6z2pO/o6LgiNoyGo8QNahZ7LDaDmgVngEfx2yPve+2u3bPdzlf7Tj/99NpzzWUTaz5voXasL7DETdyOJmR/+Dr++OPrYfo3v/nN+vGLbxGZpNP3+la/dnR0/BobRsFT3gYyq9ugpryjAMRR/rZF2l3joas/6PDHmwR8yMrfdHzMKjBRdJ/t+oTJnLKmwPW7vrrf/e5X3433nEV/cr/5CJ1+Jw/iu4Lv6Lgi1s23aJaDWOmOlIBzgYJ3jH+e4veGn0FvL7WlPReN73JI562/KH9BnB0Y8qYM1r1y3JsP/s3qZxV///d/X/58igYdJhmTD0zndT2Ok36+b9FA2pRr5do19K1vfaueL7BwuTDQqy3Ol4P18i2axUBRa7+2gf7WXrT7DsunP/3pyXe/+936N4C2c8/pa4o+/ZaVnXKUJ4z5ud6BXrJJFiMb5DjQPt8lyrOkpBGf9tqAIL+PuKU8wAOGkaP48HkhLOdbNMrBe3T4j/E3vvGN6iN16j/1OZJTfakc98SjcYzU0b9Fs+XYMApepy8UMrCjCAgMYSSY/r5ECXtIxyKk5ClzSp7SlH8s5ATQ1ykpiQjifHDv3ve+d6W96KKLKk69aCG0ygTlChlcYxDc+RT8QsGHpXxClpLnehKnHjRr+3x1TGMjKPhppP36BA/0qY+T+TCZzxl4QcoPM8TrF/0rSI/3lJ6+waP13M75oE/1r6OgfeRY+/3E3MSmL8mPdI7aaTxouwfV8vhIX+REALywilVuZHY+GVqOgpdPuSmDW81byFHygG60GCPi9I/zaaSOruC3HBvKgl8IBCIKmjA4jzD7+p7vm/zjP/5j7aYx2ClkXy70LQ9vwia/I0VA2A0Q1uFiwkVYfcdbXVYKGVSEN4IeRe+YehKn7IUs+Pkgb75BQsFHycO0FRRMl7cRFDxaQg9ehXd4pG/wgDL/+te/Xu4av3DUfl+gpIT0i8kb0p/p3/XUzsWgzeQn9I4VovbYBuyn5eedd94cT8jrdBu1/3a3u11Z+pdccsncuyF46Z7zbBuWTz3TWI6CVx7alKMu/PcFTAaQlW7eUVBnytDG+Vafud8V/JZjUyh4SpsQCISGYickBE4cd4rPqdpD7d+f3DWWt5SDl2ooPekJXwSVkEYpzAdpDQaDw89InHsA6GEfgZVvrOxdhz4BXK9EwSvLfTTbOsiSz7fTx+WOIf24zI3iooHQHh4mTnt9h4gSoeQpkS984QulvPSze1FeYwWyWH+uN2ivdmsrkA/n5Et77SzyuWyyzzqXlpLnxtPOwH18Mvl5SE3mY+iYGNTDMPHmKwt7PqzERaOcyD/jyQfQlOsDcjGA3JPehAX6aozU0RX8lmNTKHjCQnDGgkBJi2PNuU/4CQslbGC4FwuQwqQU5BfkMWAijAtB2ggql48Bc/HFF8/t6Mh9ZSgLlBu4vxIFPy7P4FEnpWaAw0J5x/EbRcHjE5oSAuf4gNfcVd5gxnN8+OpXv1qKxPfRM2krC5QnX/i8EYB+dKcNQDZPOeWU2vpLcZI9R22nWPm/uW1MBlmFBuTfapZry3McoFyVEbkc1xUsR8FnvDmiMQaQCccq2oSib1jyqSPpp5E6uoLfcmwKBQ8ESCA0UYRAgJxTCPy0LF/XLD4DgoI3OChMk4CBIb98BH8hgY4ST3rHWEl8/lYJEV73pJ22VORbiYKX3310S+8hWgYAF5GjeoSFsFEUvBCljLYE1/qZUrPKiguOqwK4rfinrazwRr9nok7+jYDQq8/xwjl+cC0effTRJbfkiow54gkXjDTkUHptTxqy7Fq/e44hP/94VjfS5Xway1HwoE/wGs3KC99Z9foC9A8lj07p9GHGSZA6uoLfcmwaHzwhIFRAcKKcxRsghJdlQcH5/Rnrxi4MA4NF/+Uvf7nus4BYPcqSP8I2DcIrr/sZHAaAF3JMFlxAlLx499EEY2sJbStR8O5lEtMmA4ov2sQEF1xwQcUvho2g4CEKHl1C2uUcT13jWRS576C/973vLeXhBTcTHl65J420UTgbAdqXNqM9fLD/39vZdtTgjzTaBe6b3PCHIUN58omTOfLuSMa5saxy+MbJvvjIVWRzjOU+ZJVf+ehVb5Q8OeUmsrMNbWjUTxS/dGlnkDq6gt9ybCoFn4GQgZwQwYtSyLKR8NhVY7B4/f38888v/6SHmJb+rHTCP7ZMCGjqUqZ4yITASuJ3tFpgUSlPPukMAvmiuMTZbXDnO9+54tEXmudD8qR+tKmXJe9BmnseICcerWhM/QJXlN0/vtqYMsfHrQlKB53azYoTwh9Ab+iSRjsc5RG0TVpHSsuOEa4LSiN+eQ/XPYMxESoblCNf6lWHQMmhSby6HQVYC/6gIbIgjOsL9GHkj2I88cQTr/CN/KQR0E9mbYu0kjTpRY65bUAebcYvhg73Vn6TKD5ykrKdmyzIqbIW4oN4/E1byKC84owJPDfR+raQe+o15tJuSHr3BT/3YTCJ75gNm8ZFE0TAck54HAlOzgVb61ixhJxvkCLmx2X5ET5WMSuHoMknPyGFDMqxQI+DdCYQypTPn9IwSCkiA9EKIeVRSjvuuGMJcQaYMhbCdF2CsjKxsNooAm/shj5lqhfdLHg/cdY+98Qn3daGevE2vAkoqtAN+Id2aaR3nj5x7oinlBqFYDVGybMS8cInhykX/ZHVGV6DOpQBysHH9IH+SZBnLaAeYdwu0C/kES3q9k18b/Bqi7YtBum5rBgqJjYrSm3QZsfwncJ+0IMeVDIqhJdjSGei2HnnncuCXwhpx/g8IX2ln/HXZIGmL37xi7XKVa406Yucdwt+y7HpFPw0CMs0xBE8S0QP6rhlWDGUvIFF2Lk73PcSDeVA8CKA8kYJzAflU1J8oQaHlz4oXAOTsEa5OL/Pfe5TLpoMLmGhcheDPJbBXgRSBiuP5RYFlTIpeMvtsYvGvVnq3BLgM+CFtqOVy4xSM0lRBBC+m2jxj7LXH+jVTkgfU94sUz7mlAV47+UoDxYpE0pPWmWo31E9ynEUgKJMP6eu1YRyhSDtEKdeMEk5P/PMMycnn3xyuZ9ch8b5EPnzbIkBYWIb80he7SEvDB0yyKWIP2kzSOOcTHHr6ZcxvctFJhb1Oep7K06rSCtO/aOeTFwxhPbee+9afa0F77cVbHoFnwFLwAkRASVkEXLXBgD/IAuDX5JA2lLJZSMfpZjtZ4I4+RYSPINLGoOJIqXkPVziLlC2QYQGabhLDELnoWeWQWRAqJfy22677WowcRFxVagv5UbB2zkEqXNrA6/Viw+UuQnJf1j9etGKimWHf9qBN/iuHeIC+dHvvgD4YCWDB/iN7/paPCVG6ekDFiTlBu5TKspTh6BceZTrei0R2gEN2oomwBty6KN5dn2hC/2LQRmCvqe0PefBx0ya7qkzcmrSI4NkHs/U7V62PPLB3/e+913UB78Y0Jwxh8/6Hk9Z51bJ6Sdlo1GdeLDHHnt0Bb+F2PQKHghxBhEhIjBChJXw2YnBXWMg2KnAmmctctlQ+nyYlKK0hJ9FuZDgZRIg0ATZKoDLRrkEObTIzydpcClP2fLOOohA2Qam+igwCo0lq2z3WE077bRTHV2P+bA1gR71UlYGNYXOf/6BD3ygFJo3VE1QrDtKgfsFb0C+8BfEKw+vpdUmCtzkSmnZLQIUi2s+akoFz1nz+AXKpFxAGcoE9a0Fj9Q3hjrUm3j1W/29+MUvnnzyk5+s9ro3nW8+4Ilg4tQ+hgReiwvf1EXG8UwwKVpJkfn0jbr44O91r3vNrOC1I2MBfzPRuGb8eIbk/RRuKHWiC53+6uW+647ZsOkV/HhwElbC5ijOcSx4BJgPl9uGMqYY/RjaTgN7zV1T8pSNPAsJOyFVD8E0GRBWbgMKx4MlLyipj7Xtc7je+FOePNLOOoggdSrb0poCM2CzNc1qhQXPlZH0s9S3pUBLJkm8YG3yL8cXjE8sVorew1IKIJ8kkD4TIqBfnLKiIJRhYqUgTB4m1liOeKEeD9j1Rdw2lFzkQhnpC/yUby2gLlBP6tYWdVpx+BLqe97znlLEkQ8hbV8IlKj2Ssv9yHhJn+ONelIWfkhvIqDktdVzKEATOeLGmVXBZ5yFZtepX3n6yTMhWzdNvOL146677lruU9cds2HTK3iCQrgIiUEL4/MIHxBsQk6ouGwoBhaUgcL3yS/PGsyLUUsJnvvKVBdB9lBLuaxSlpWBbOnrcwfSopXimmUQAaWgLRSVQcudYcLyLOBTn/pUtYNlq06TjXoStjaikMMb1ts555xTq6UoAG1BM+XswSlFTwlQ2iaw5E1f5hrSN1Zm3jTGD+8nsFCVq1/0Lx+wFQOFj2/6lQxIn7KjjNYS6hLQph/x4TnPeU6taPimw5NxWAhoxd+k005lPPCBD6w2apM0uU/mInsmUQ9n0WKCwS8yxIJfbBfNYkg96s3EHBq01+RiRWlcGV/arn/23HPP6uu15v1mxqZX8BGkDFYhgyn3BQIlnUAIKQauE8tHT/vzwJJVSSHwyfMPGjCsK2VABDnnynNtADlXLovIgKNcLH/5SKOQQ+tKIY+8aUeO2kKZs8w++9nPlmLkokGH++hwDM1bC+ETZYaHFPfpp59eLhT3AgoA0CkNqzvbAFmkua+9yqLYtFkZUR4mtTvc4Q4VZ1dN+kt6/WLyFk+ZejiLN3zD6ALl4JFj6og8kQnBvdDiXup3nmtHcC6Pup0r20SWNFxVflxjJwy5UI57wfh8PrgvcDeiV5nazJee3VPgqG68S8jE6y1p9HHxMXh8rnlWCz71RM5yDujUdjC53P72t68J3YS7++67V93ydMyGbcZFE8Gc73w6AKGicCkGFjbrj/KJNe9H0Cx6Fp9AkRgc7iuD4BowGWwZSO7x57OqKVuKhMJ3bjBSTqFhpZimP9fO0cgyo1g83IrrQhtD19YEnqBLiCLxtyY8WAjySOsh7Ic+9KFyPWgLtw0lqB34zJWmXdpEsQGr3ESK7xRnLHnpKXJpKVOuOC8T+TWgvFw30uhb5esfR0BP+OsoRNnnnuucJ0+O8pEX7ijXVjHPfvazK5CxxXixGLQHDXgV+kyQJsU874Hcy3lo1F5pKFtygz6uxC1R8OPyx9dC5M8Ywm/vhZBNR1Z9aOxYObaJh6yzwuAj6PznlIMBw0cYq5elce6559ZgomQoFcF1hNI5EGDnUQBWBpQsBZXdHOqST9rVBOWhTu1g9dpJY8tbaFyLOpdC6o5FzHrma4alaHGf8uW2YXFrl4lSOfibl3q0Oco7baQwPHCUj0LFm+RznrSevXz84x8vt1HeEKboki596TzunCiqMT9zDdKCOIF8cdd5DvDWt751cthhh00+/OEPV7qEWZC6x/nRig5yTNE7H98f5xHcNynyj1upWtVQwEm32ggtxpUVl00ClL2+DP86Vo6u4BeBAUupEz6DwsNQCpIl76EfeDj4iU98ouIsiSlOgeIimAlRBs4pB5Ceq0ccJZO0qz2IMmgpOxZZ6NM+9RpU6t3aULdA0fqhNsscnxYD3sSCBpMsV5dJknWOt+Gnc2mjPJRtAjYZ88uzEvl808fS4pHrlEPR80Xbvknhe2BtkvcQnnKO0hfSb/LmPP2pfOXm+YvJyXMRf6XydyorEnVlkkf/rEj9ylGvc8rZtdUiPoWm3B9fAzrICH6ZQOUlJ9KtNtCr3vDdkQGE5vCjYzb8RmPsr6fxjiuApU7IoxAJNyVgiX/qqaeWxWmgs3QMdAPhoQ99aL0UYvsj6yMDgqBitTINmij8KIYoWwpmLQRaXUIGv7oco9xD59YEy1e7WckHHnjgFSzkxYDWDHxptcVq6HGPe9zkgAMOKMWgXOm0N/yUTnp59QNl++Y3v7mUrMkF5EGD/NJF6US5OVeO+yZLKwIrIgYAK1efhzbp5ZNeWwX70il4gZGQ9grKdK1O+ZzPCnUHkT0uFv8sPuqoo+bi0jaIbIhP/rQ/E8RqQ13aaXyhKfTEABE3bkvHytAV/CKwhCZ8jpR4BJwQstht6+Ov9cMJAkk5E0gPNe1YoOztmonbhuAaMCknA8kx51FMqwlla4eg/AxkdGRgZZBvTVB8rPenP/3pk9NOO63oQUcU8XxAd2iVXlr81T/y+FaL7XUmZbx2Txppwwc8APH89e9///snb3jDG8o6F5f6PRcBk4H88oZv7odGcQm5RqN6pEUHPjt3T770AbiWVr3qyPMY57NAPaAO5+Qy/bz//vvXz0LUof7IJag/SlYI0CdNyl1NKFu9GWNcb2jVb5HL8Klj5egumiWQgZHBStgEW8ZYjXYbGCyW8YRTGi9JeWho9w0FwtKTfjywpcsgjtW+lsIcutWDDucGlmttW6t6FwKlp16uCXu9DXC04A/6FkPagP4A71nIHobzx3OlsTrD87RTnrTXPROBnRr60TV/eJ6xuI5Sdy4oB6IAoxzdExf61aN/YySM87kP4bk4aciZdM5T3yyQj0w6Kkv56HS0k8aedjKXdoU2NOda2tCnDZHNxK0W1KN8fYVWiGJ3Dy2rXee2hK7gFwHBogyigCPgOTeAPQiyy8bLUax6OzsMFErCC1L2bvO18vey7PncwUAixIQZMqAE58oex0X4na8UKSMD2TEhA3e1oX14gH/aEoUepew+FwmXCj84681AXw4taUv4E94okx/bdkqTqgd10kShJ58wPte/3Gu2rJqITc7cRfoG7cqNHGSCSP05LgVpBGUlJC4YxznfUoQvgWtt5EKMgg/G/BnzRtBecqLtyojyzYQA+g58mRXf3GfocEXhp37xzEl5JuPUIR3ZoODT/yYn95TtmM9t2Fnk7WZlcqnpo0xkaAL9BZG3hSBPgjalLvkyoYlHT9I4D9AtTh6QZnx/IUgH8qsnq8PQv9roCn4RRAgdpwNrkVBaSuo0+8xZRq4pLIIewaBwPIjlypHPdkXCl7LUocMd5ZFXhxsoBI4gg2vptwSpcxzWCuNBAtouziDkf37MYx5Te/PxjLCH13gxK9Inj370o0vJKy+8hoX6E50mGVsD7TQxWVMkeJ5+TFtynf5aLaxWWWmPdgvpB0rd1kNvMmtX5C55YD7+jOOcKyurHOUrwz3n5FU/v+Y1r5kceuih9fcpyt2zCc8q8owiSJsznlKGMeBcXmPn4IMPrgfx5Eb/Mpxe/vKX17MwD9ntRvOMAX0mEH2JpvmgTjKI/rQpfSo+PEsaE5kgHTrTVsfIAYQP80H5ypDGuTzpg5SdclYVrbKOGdE6ay60jh6a0A/N2hg+/OEPD7vsssvw+7//+0MT2qEJw9A6fu54/etff3jBC14wfPnLXx6awFa+JkxzZSivCfnQLNyhCXrFNwVYaTYK0oY2IIr2n/70p3X+85//fPjmN785PPnJTx6aRTe0QWmED024h6aAhib0FcTNF/BPWsc2+Obi8FZ8s+iGQw45pOoJT4X000JwT/pmJRa9wvOe97zhhje8YdWjfH2pDnU6F8a0rbeAn2h3RPc1rnGN4bnPfW61LfzQR03BLMqboBkalVYIb+V3Tu7JbrPai2/qbRPs8PrXv35oCrf6I/0QWc515ER+8i7I0xT7cLe73W1ok8LwyEc+ssaLPBkvbQIe2gpw+L3f+73hJje5yfDRj350aCvlSpM2LRakQ4u6HNEhLvHokE58+OSe9ELSokUY83WhIH34J4hzFL8W6Bb8jGgdU8emXGpGFtogqlnZct+LIdw3lpeWqklj5m8COmnCWH/F56OPRcPqYGVJBywaFoRrR0F9GwloxyvtbgOgtgfaxXHGGWfUkt39NnjqfhP8ufaFv9PAYyGQH8/kk8eXJD1otc0OX9vAqSCdNAvxTxr59QFYNdkvbzeUnVKuWZWB9OhwXK8I7wEvrGh8oRGPxjwMlpItfaTMtF1wDeG1ODuimtKqZxttQql7ZBfUETkOffK5Dq3q8S0c7wWw1H2z/pWvfGXtyScroAzuNN/Y8Xazzxuw9P0khCWf/nacL6Qu9KLPcUyHYKXgqC2OuSc/uEYPWtDsejEon4xLC84h/Fgq/yzoCn5G6CzQKREYgqDTnNs2ZweNh3eEhyIXCEQUkuWmzx54WYpP0X1lEThpgtQBytoowCO8IMDa6hX84447rj414J42UZruO9fO8G8p4IP0KR/vDXj/K/XdFNcGkvvSjfMsBPelRwv+O+dW4Hqzzx6tFD3a1Zl+jCysF2hH2hIeOHI/eeaRF+umIc9iyAScfoX0nbziGS9vfOMby7DxsPvxj3983Sf38kqftOA8Sk+ZZF96Lh67mxgFL3rRi2qyEC8fvjuXng/eS2v5GKBv2njOoNzF+lr+6TBuS87Rhib0qVs73E8bBPcAPQvVqSxppUldQq6XondWdAU/I3RKQqCzdLbOAoJhb7TPHdi9IK2XZHR0FBAQTB81s+2SoBJYioTw2uWRdGslBGsF7eSz9N5AW6rXnnPtTBvwKwPFEb8ySMZ8nYZ7Bod00gtWAw9+8IPL7wvuQ3iWY+qeRvoy9eN58jn3jEUfsupMVhSY9O5TAusJ6EKztlCG6PN2qB9o8L9rV9oppO25XgjK0VcxPn75y1//cjE8wHfbTX2zifwycuxoiuJOHQIaovgFZaSf3vGOd9QDVQqeUaCsyId0SY8WGxusDMmal7g8Q8mYmQ9jeuVXBzrCMzQI4m3jtRlAn0NWeCnDNZ6EFvELQR3aIb2gPZH9tHu10ffBzwiCIICO0UERGkhnJQ3Bt4zkmuGesKyk5EE+wuWow52zHO0CsQT1YMxbtFw/iwnuegJh9g3zs88+ux4u+3iUAUiowyeih0/icg34sphYht+AX0D5emHJbiaDyH28VzZa8H8x3kXRqFeZBqtrg1w58ivTTg4rED++9nkF7pv08XqCh5lxKXH1WdW8+tWvrhezYNwm7R1fLwRuE7JrclM+ax1/8Sx9isc+3OYPWowT74I8//nPL0WYPk2fqUucYxSsrcUsdw/fjRc0cZMxlNIvviPkCNpmizLDQXuNGW/roidjcBrq1F5pyIo+Ngn5LaGPsanHOPUiI7q4hkwi2m01p03ykQHGmLKki8zMB2008fhdoTZJjyfqdq3tC+XdEnQFvwWYZl2uoyhynmuCQHnZneGbI29605tq0ETQdbRjBotrg4Q/mT+fFUnZE3iC6L7y5M9Ay+BxL/WKW87EIK0QyI9mcc7VM25L4tUVsHi0zce6DHQ7iCj2IG2FHNPulKdsx5yP07jWVvfCJwPFh8r8IEKa8YQxLk/dCyFpQkfSpn51oSH89VzFiovbyUCH8EHalCG/+NCfe0H4MY5bCikvBgKE9hzHCp6b0AfMdtlll7oXWqQdtznXC8FkZrKOFUpJKYtiQwsZ8xVMypCB8pSnPKXq9lmIKDD1hKfhcfrRfUrdmLBjhhGkbO9JWIFYMVhBWQXju8nA2KCYuZ+MlZSNPuUrWxnqRQOFapVHTiluLitjCb3ea5HehGTyZjQ84QlPKFeT7xGhw5vIhx9++OSRj3xkxbHslYfXjLAnPvGJJX9ve9vbaqJSHhcTOt03UUU+8S70LsX7mdEa3rEV0Tq0nsjbrfG5z31uaAIxNOU9t9NBlzQBmNshktA6v3ZtXO1qVxtucIMbDM0aGJ75zGcO733ve4fvfve7V3iC34Rq7im9c8EuhuxUSHwbBHN5nKPLPWUlSOe+eHmlkTbXyvynf/qnoQ244cADDxxudatbDVe/+tX/P/pXGvBioTLcww88k+bEE08cmvIpWtYC2jvmr3bji2ObwIa2Shl23HHHOdpCd+hzjt7QP1+Qrymgud1AiZdvvryJG6dNaBNelaP+a13rWsM73/nO2pGFZv02K/AhO7vsImkWbV03hVvh3HPPHW5605sWDc0IqZ1TTQGW7IV384Wx7OnDptiHZulW225729vO7dD5yU9+UufKbcp92H333autzfquPkALuhyld65ustEUc8np17/+9aFNEtUvduhceumltfNHGvnIsF05TRkPl112We3KQZd+tmMHTWi76KKLquxzzjmneH3Vq151aJNo1Ws82vXTJsLahWW3T+ghR9o7RviwFugW/FZGG2Tlc/dAsHV0zeD28XqoxKXh5SiWURvAZXE410VmfZaIPE3gKg5Yr6waD3UtTVkdrCauCg/T5JFXWU04q9wm3FewGMbngCblC6wmdbrviB77/C2JBRYdXymLNuXLn3JmRcpSZyAO0KVd2mEvvU8deLjWBlFZcasN9YUnaGqDtPjAkkWDeHVzS3jAyL2QXTdj+uXVD0AO5BvDfUg94/vqSd7cE5SDNvf0s3vkwzWevP3tb68HlGREPHlJPSuFl/WE008/vVw19qirh4XrqK34gCbvIdjRQgaXqk870CY/On3+w8NylnozYqp/8VpQtqD/WcjPetazSv78xBv/9Q058UazZz6+c8S1AnYRsaC5X+Q3Rnx4zjsPfi6i/Ne+9rVlpSvbz/DxHV3i/DOYm4tbiIVvNW0FcMopp5SLx758nyhBhx1ALHyrJp/BMD6VE7l2TB8KiV9tdAW/lYHdhNDgt4wGnSvOtkkPl2wNs1Q1cHX6WFFKSzjBYIqwOBL8CI7BbhKx9CTYlqMGDwVo0LnnwaQ4QR0GmTIpdcG1AW0566uNaLJMF6cudapLIPTq1A6CbGBQgrMiwq7scRvRqWyD0U8ojjnmmHpDWHzelFwLaAt+4H0ULR6IRw++4YE4Pnr/C/C7wbxxKa+2ABrR6zr9lXvKEgAfhSA8AfncC2+SDn387Hy9tqNSLHFdpN7Iz0pBJnznhwuOr5vy5R4xaeCD9pMN9WlP2qg+dc8H99MOPIJjjz12ctJJJ1WZXDHevFWWNJEBfDaRHnLIIeUSEkcJoxHfTRDeoPUClIfvnkHwlz/vec8rhW4rpfjddtutnm3hGVniNjVeTALGjMlBWspamYwwf7jyeWefUTaxmIgYVV66oujdk1Y9/qdr26g+zQQMjul3AX9yb1XRCu/YimiCOOf6aAI9t2wTXDdlOjQLZnj4wx9ey7s2OGo52Tq/lofOdZsgrimbStOEp+4LuS+4dk/aBHHj63FQvjLlEZyLG5crnXguI8fkRUdTvHV0PaZjJSHl5XrcLvFekGqW0vDxj3+8lr5NQdRLOI5rBWUn6DP16kMh/Zd4aZqiG/7u7/5uaCuz4fGPf/ywww471AtubTIt+tOv4bdj2p3+GfMjaRO4JnJPP7nmHuG2aBZjuSTQQd7QhD7uD/TOCm4KLkK0c2G8733vK1fJV77ylaFZ0eX+SD84kmculQsvvLDSzBfk4x5Bp3zcG3vssUe1y8tLzRKveG1QXlP6dS686lWvKp7iA5cl/quLewg/mgVeLhSuF+3nFlUm/m233XbDt771rbmy8KZNiPVSFRcjt0r61PlTn/rUenFR/7XVSbl22kReafEfzejjtjnyyCNrbBgLH/vYx6qcab5rb9qcfloL9G2SVwIa38tqaYJW1iBLxXUT6rKCWAaWhyzTNthr10ATtErTBOFXpVxuxSlrHOcalCWAfNLmGqQbX893T1C26+RP+Ykf30v6hFmhnDFSj3jWoofMHuY5tsFVlh+LPjSsNtQ9bpNrGPNfcC4ufenBoId/+tJynguNVcgilF6/t4Ff6dO+6RDejusnN01p1MqLxWgbLtfAfvvtV/vOvWQHZGtMozzKwrNZIJ9yfE9J2VZ1XHN2sXBpfPCDH6w4GwKsErWNG4+rxAPR+YL7XrzCE7Dd0SqWq5LlzsrW5+rVz21yqXbIy9puk0Tlt1rhKuLe4Zbietlnn31qxwu68VjZaGkKfWKv/P777z/Hd7Tip91e6m4Kv9phyycXy5lnnlmrE6vuRz3qUdWf6rGasWJRljJtoPBlVO2yRXTfffedW6nrN/WNkX7O+Wqju2i2MiKoOptQ6VTnGbyuDfzEWXZ6EcrgsTzkIiGsYxjEsFhX5t5iQpQ0USoCGoTUAdIJ4zTuR4DTlhxnRehIew10g4jf1c4M1+o0+Rmc+Oa42tCmKOIoR3Whj6IL39AK+lfb0eb+GFxzXArcXRSJ/qUULfMpSy4BLh0KRp3KEEz8lCaXGz8y/zoDgDHAl+yaIkFTFLl8gBYh5c3KI+Vqt2cwjA7XytN+is67Dp4vUXY+SQzS8oeHR9OgsO0O4zJEI3+2/rUdlc9bWcrAdztR1MuVaZcWFw0Xif8A+JG89vGle6OVy+T4448vIwDvlI0mcaAO7p0x1OHFQ7uj9A2e6hPlmUjAhMGFZMeNXVt88SaCtpoptxU+POMZz6iJ4qCDDqodNlw++kWYRmRmrdAV/FYGdlMUOjtHg8S5ezo8ghAlQYHx5xEyD438XYhfnPIYTxLyC/KB++INSnHSrXZ3L1TmUnWhDU2hFbQ7bU5bKCMK0z1Wqq13LNQozvAu/JxWqKuF0JN2hZ/qdQ2uBRinSUgZ4Bq9+pZCj1JnXQr6LO0StAsvWLomNla0c8prXCYkn+vQkLrxayFIGx6mTHAe/jpmcnOkoJVP2fogGBn1bIQCdo9CNjEtBGVn4hC81PSKV7yiFL7tpyZy2xP5xNMm5bHWfbTPeyJ5iMz44VO3vdLKyXbHsayQH8pbfmVb+aRMx7QZzT/+8Y9rMmaRWx14kKsun17QPvc9RPZiIjr4/cFD9iOOOKL60rkfh+Mb+ubjvbrXFK1RHRsE/IR8qx/60IeGZtmUP1QXCk1Q5s7HceP4JsRX8KU3gSs/4Xx51zqkzra8rdAG4Vx87jWLas6fv9dee5U/timBX3GjY7XRFFH5o5uin/MPu+Zvbpbp8KlPfWpoq8jyM3vG4H7Svfa1r53zh3uG1Cblim/Ku84XQ9JdfPHFQ1Oa5b/mU+ejbwZM+cB9vI+M2Pa5zz77DF/72teKNvJg+6R0tk8+4QlPqHRt8qsP2tm+acx4LtEs6aLv1re+dfnW1attTSEPd73rXSs87GEPG0499dSq8+STTx7aCqFkkM/+9NNPn/sAmW2ZyiO7tjory7bKZr1X/bZutpVGxaNNnisDXcFvIBASg4uQCc1qGprVNLSlej38MTAo7bHCptDdo8jHyn2c5soIzUKrB2FjhT4OaDZQpDnhhBPqoZ0BfGUNlG0BeEsZMSQoQOfk7cwzzxya9Vpfo/Sg8dhjj600Hl5Syq494KVUPaik/MmnB6wUnLAQ1JlAad785jcvhXr44YfPvdug388///ySCZP+n//5nw9nnHFGKW730JExYVJ4xCMeUQ8/0euharPmh+td73o1PoT99tuvyjWpaKeyH/SgB5WsKZ/Sprz/4A/+YLjxjW887LnnnsOnP/3puYlNnd5BiXHiPQO8Mh494CW39sF/4xvfKJpMcOq5MtAfsm4gcFU04amlrwc+lqkPeMAD6vVpS9r45y11W99WHkdxjm0Q1VLUUtGxKdYrLE23JrIsR4v2jOngdmgDp5bnHqTZmseVkYdV6O5YfZAPfNYXXArkRv94MOwbL17dbwqr3BV81P7GZUugbb180nzm2U+efk0fL9Rn+lydnkXYWmpbpPqbJV3vdGTrqyPXia2O3h7lovQg1Y/Q+cj54rmsbAvdaaed6quZvgbqS5S2cnqjWh7jhs9e2eQM+NqVrR1cZcaVB6W+3cNPz7XDJeYePz136Qte8II6wpFHHlntQId3BLSV7O6www713CCyjQ9bG13BbyAQnGYpVOCHpewJjoc8lDxhtquCcozwmhQM1Ayw+YQsinVrgtCjSd0US2g0kPlU7QbxMMsDRG0QnzTydqw+8DbKWKB48Z6sUZweOFKClKQHnx6OmnwpdcrUw2P5KUNHefUtOV2szzxYtkvF+wPyUrBkmM+bHFOq4MGpczKjbOlNDPb85xPIGRuMAZ8gYPh4cGpPvHiTFR88/7sJKO20F96DXQ9Hlaleu2C01aTiAbK2q9sDVfEenhp7kUnPx7Q1u4iMRQ/FyW3q2troD1k3EAgKxEKPknQ0kDKY2vKzHg552EQo7dCwlY0F4wGeNJkcBINlawPdQmgwoOxC8EEmFpjvdhjs0mivtsUiZF12rD70AxnD68iUa7LiaOcPy9VDfv1g+6evU5I3O4HI1v777199B5S8MhyjpKehTvmtPsmh/laXFR7LmoKWX33ipf/pT386J+vkhuJWhrTuJ700aFI2JU5uxJk8WNahS5z0HhBrm7HjLV3bWqU1bkxwLHkTgfTKy9hThqMywLm2UPTyi2egSL+10RX8BgIBHwuJc4HACeNzQiawjiynKXqDkKL3KVdCbLmdwbu1xcDgUidLi2V217vetXY8ODf40IR+SHu0L+3qWH3gOQvYRIrnlFQUJt675qZgqbJ0KWHyY7+/yZlVzKql8ChhLhP5lLGQglePciIPjuhQFzrEOVKowP0ToBXkUcb4HigbMnFIb0JwjLJ3Ln8mEHFWKnEhqpty1sZMBmgSQHnSTcuk++p0L/xT1tZGV/AbCOmqHAlNBhDBy3UEO0JHcMXzMxJeS2l7kyl7St9Sl1/TIJJ2XP5YPAzmDKrxPefqymQhGAwGlnjpxuW4Z/nM0mMBWl5bOrN2DAZIPlB+2iDesWP1QW4EfRDe43fioxj1BVnSv85N0olP/7gXxaYssjEflCtf6pQ/8cG0LIz7P3Ixjh+nBXSnbCGKWx3iky70S+++o+vcB2nk0Z7QpZycSxvanade+RbiwVqiK/htALp4rJgjxFH4rC2KnlVP8bPO+FiztI1Qy0d4lUFJix8PxAi04L6BBAYvn6QHdR4+8d16SYdSZ/GFJscMqitjMHR0bDZ0Bb8NQBfHyqCUKd4oaccoVvGWpvyZAveOnQKUv10Izil+D6NMDvyboFxKnCUnsMT5Hz0s5Uf1tiXfZSw9y1rp5VOGIN4SOxOGex0dHVuGruA7Ojo6Nim6mdTR0dGxSdEVfEdHR8cmRVfwHR0dHZsUXcF3dHR0bFJ0Bd/R0dGxSdEVfEdHR8cmRVfwHR0dHZsUXcF3dHR0bFJ0Bd/R0dGxSdEVfEdHR8cmRVfwHR0dHZsUXcF3dHR0bFJ0Bd/R0dGxSdEVfEdHR8cmRVfwHR0dHZsUXcF3dHR0bFJ0Bd/R0dGxSdEVfEdHR8cmRVfwHR0dHZsUXcF3dHR0bFJ0Bd/R0dGxSdEVfEdHR8cmRVfwHR0dHZsUXcF3dHR0bFJ0Bd/R0dGxSdEVfEdHR8cmRVfwHR0dHZsUXcF3dHR0bFJ0Bd/R0dGxSdEVfEdHR8cmRVfwHR0dHZsUXcF3dHR0bFJ0Bd/R0dGxSdEVfEdHR8emxGTy/wCpXFNaNUYG3QAAAABJRU5ErkJggg=="
                                id="p1img1">
                        </DIV>

                        <DIV class="dclr"></DIV>
                        <P class="p0 ft0">TANISHQ MOTORS</P>
                        <P class="p1 ft1">Authorised dealer for Saarthi E Auto</P>
                        <P class="p2 ft2">Krishi Upaj Mandi, Damoh Naka Road</P>
                        <P class="p3 ft2">Jabalpur (M. P.) Mob : 7999174431</P>
                        <P class="p4 ft3">GSTN : 23AWJPS3378L1ZX</P>
                        <TABLE cellpadding=0 cellspacing=0 class="t0">
                            <TR>
                                <TD colspan=3 rowspan=2 class="tr0 td0">
                                    <P class="p5 ft4">Invoice No - ${invoice.invoiceNumber || ""}</P>
                                </TD>
                                <TD class="tr1 td1">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD colspan=4 class="tr1 td2">
                                    <P class="p7 ft6">INVOICE</P>
                                </TD>
                                <TD class="tr1 td3">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD colspan=3 rowspan=2 class="tr0 td4">
                                    <P class="p6 ft4">Date - ${invoice.date?.toDateString() || ""}</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD class="tr2 td1">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr3 td5">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr3 td6">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr3 td7">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr2 td8">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr2 td3">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD colspan=5 class="tr3 td9">
                                    <P class="p5 ft4">Hypothecation : ${invoice.hypothecation || ""}</P>
                                </TD>
                                <TD class="tr3 td10">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr3 td11">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr3 td8">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr3 td3">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr3 td12">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr3 td13">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr3 td14">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD class="tr4 td15">
                                    <P class="p6 ft7">&nbsp;</P>
                                </TD>
                                <TD colspan=2 class="tr4 td16">
                                    <P class="p6 ft7">&nbsp;</P>
                                </TD>
                                <TD colspan=2 class="tr4 td17">
                                    <P class="p6 ft7">&nbsp;</P>
                                </TD>
                                <TD class="tr4 td18">
                                    <P class="p6 ft7">&nbsp;</P>
                                </TD>
                                <TD class="tr4 td19">
                                    <P class="p6 ft7">&nbsp;</P>
                                </TD>
                                <TD class="tr4 td20">
                                    <P class="p6 ft7">&nbsp;</P>
                                </TD>
                                <TD colspan=2 class="tr4 td21">
                                    <P class="p6 ft7">&nbsp;</P>
                                </TD>
                                <TD class="tr4 td22">
                                    <P class="p6 ft7">&nbsp;</P>
                                </TD>
                                <TD class="tr4 td23">
                                    <P class="p6 ft7">&nbsp;</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD colspan=5 class="tr5 td24">
                                    <P class="p5 ft4">${invoice.buyersName || ""},</P>
                                </TD>
                                <TD class="tr5 td10">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td11">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td25">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD colspan=4 class="tr5 td26">
                                    <P class="p8 ft4">GST - XXXXXX</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD colspan=8 class="tr4 td27">
                                    <P class="p5 ft8">${invoice.postalCode}, ${invoice.streetAddress}, ${invoice.city},
                                        (${invoice.state})</P>
                                </TD>
                                <TD class="tr4 td3">
                                    <P class="p6 ft7">&nbsp;</P>
                                </TD>
                                <TD class="tr4 td12">
                                    <P class="p6 ft7">&nbsp;</P>
                                </TD>
                                <TD class="tr4 td13">
                                    <P class="p6 ft7">&nbsp;</P>
                                </TD>
                                <TD class="tr4 td28">
                                    <P class="p6 ft7">&nbsp;</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD colspan=3 class="tr5 td29">
                                    <P class="p5 ft4">Mob - ${invoice.phoneNumber || ""}</P>
                                </TD>
                                <TD class="tr5 td30">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td31">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td18">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td19">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td32">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td33">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td34">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td22">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td35">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD colspan=3 class="tr5 td29">
                                    <P class="p5 ft4">DESCRIPTION</P>
                                </TD>
                                <TD class="tr5 td30">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td31">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td18">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td19">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td32">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td33">
                                    <P class="p8 ft4">QTY</P>
                                </TD>
                                <TD class="tr5 td36">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td22">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td35">
                                    <P class="p9 ft4">AMOUNT RS.</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD colspan=3 class="tr4 td37">
                                    <P class="p5 ft8">Price Ex Showroom</P>
                                </TD>
                                <TD class="tr4 td1">
                                    <P class="p6 ft7">&nbsp;</P>
                                </TD>
                                <TD class="tr4 td38">
                                    <P class="p6 ft7">&nbsp;</P>
                                </TD>
                                <TD class="tr4 td10">
                                    <P class="p6 ft7">&nbsp;</P>
                                </TD>
                                <TD class="tr4 td11">
                                    <P class="p6 ft7">&nbsp;</P>
                                </TD>
                                <TD class="tr4 td25">
                                    <P class="p6 ft7">&nbsp;</P>
                                </TD>
                                <TD class="tr4 td3">
                                    <P class="p8 ft8">&nbsp;</P>
                                </TD>
                                <TD class="tr4 td39">
                                    <P class="p6 ft7">&nbsp;</P>
                                </TD>
                                <TD colspan=2 class="tr4 td40">
                                    <P class="p8 ft8">&nbsp;</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD colspan=8 class="tr5 td27">
                                    <P class="p5 ft4">
                                        ${invoice.description || ""}
                                    </P>
                                </TD>
                                <TD class="tr5 td3">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td39">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td13">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td28">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                            </TR>
                            ${data}
                            <TR>
                                <TD class="tr5 td42">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td43">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td44">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td1">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td38">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td10">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td11">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td25">
                                    <P class="p11 ft4">&ensp;</P>
                                </TD>
                                <TD class="tr5 td3">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td39">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td13">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td28">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD class="tr3 td42">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr3 td43">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr3 td44">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr3 td1">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr3 td38">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD colspan=3 class="tr3 td41">
                                    <P class="p10 ft11">CGST 2.5%</P>
                                </TD>
                                <TD class="tr3 td3">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr3 td39">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD colspan=2 class="tr3 td40">
                                    <P class="p8 ft12">${(2.5 / 100 * totalAmount) || ""}</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD class="tr3 td42">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr3 td43">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr3 td44">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr3 td1">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr3 td38">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD colspan=3 class="tr3 td41">
                                    <P class="p10 ft11">SGST 2.5%</P>
                                </TD>
                                <TD class="tr3 td3">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr3 td39">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD colspan=2 class="tr3 td40">
                                    <P class="p8 ft12">${(2.5 / 100 * totalAmount) || ""}</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD class="tr5 td42">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td43">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td44">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td1">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td38">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td10">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td11">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td25">
                                    <P class="p11 ft4">Total</P>
                                </TD>
                                <TD class="tr5 td3">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td39">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td13">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td28">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD class="tr9 td45">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr9 td46">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr9 td47">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr9 td30">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr9 td31">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr9 td18">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr9 td19">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr9 td32">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr9 td33">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr9 td36">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr9 td22">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr9 td35">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD colspan=2 class="tr5 td48">
                                    <P class="p5 ft4">TOTAL</P>
                                </TD>
                                <TD class="tr5 td47">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td30">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td31">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td18">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td19">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td32">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD class="tr5 td33">
                                    <P class="p8 ft4">${totalQuantity || ""}</P>
                                </TD>
                                <TD class="tr5 td36">
                                    <P class="p6 ft5">&nbsp;</P>
                                </TD>
                                <TD colspan=2 class="tr5 td49">
                                    <P class="p8 ft4">${((2.5 / 100 * totalAmount * 2) + totalAmount) || ""}/-</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD colspan=12 class="tr4 td50">
                                    <P class="p5 ft8">Rupees in words : ${toWords.convert(((2.5 / 100 * totalAmount * 2) +
        totalAmount))}</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD class="tr10 td15">
                                    <P class="p6 ft13">&nbsp;</P>
                                </TD>
                                <TD class="tr10 td46">
                                    <P class="p6 ft13">&nbsp;</P>
                                </TD>
                                <TD class="tr10 td47">
                                    <P class="p6 ft13">&nbsp;</P>
                                </TD>
                                <TD colspan=2 class="tr10 td17">
                                    <P class="p6 ft13">&nbsp;</P>
                                </TD>
                                <TD class="tr10 td18">
                                    <P class="p6 ft13">&nbsp;</P>
                                </TD>
                                <TD colspan=2 class="tr10 td51">
                                    <P class="p6 ft13">&nbsp;</P>
                                </TD>
                                <TD class="tr10 td33">
                                    <P class="p6 ft13">&nbsp;</P>
                                </TD>
                                <TD class="tr10 td34">
                                    <P class="p6 ft13">&nbsp;</P>
                                </TD>
                                <TD class="tr10 td22">
                                    <P class="p6 ft13">&nbsp;</P>
                                </TD>
                                <TD class="tr10 td23">
                                    <P class="p6 ft13">&nbsp;</P>
                                </TD>
                            </TR>
                            <TR>
                                <TD class="tr11 td52">
                                    <P class="p5 ft14">Sl.No</P>
                                </TD>
                                <TD class="tr11 td46">
                                    <P class="p6 ft15">&nbsp;</P>
                                </TD>
                                <TD class="tr11 td53">
                                    <P class="p6 ft14">CHASSIS NO.</P>
                                </TD>
                                <TD colspan=2 class="tr11 td17">
                                    <P class="p8 ft16">ENGINE NO</P>
                                </TD>
                                <TD class="tr11 td54">
                                    <P class="p6 ft15">&nbsp;</P>
                                </TD>
                                <TD colspan=2 class="tr11 td51">
                                    <P class="p8 ft16">COLOUR</P>
                                </TD>
                                <TD class="tr11 td33">
                                    <P class="p6 ft15">&nbsp;</P>
                                </TD>
                                <TD class="tr11 td34">
                                    <P class="p6 ft15">&nbsp;</P>
                                </TD>
                                <TD class="tr11 td55">
                                    <P class="p6 ft15">&nbsp;</P>
                                </TD>
                                <TD class="tr11 td35">
                                    <P class="p8 ft16">CONTROLLER NO</P>
                                </TD>
                            </TR>

                            ${data2}
                        </TABLE>
                        <P class="p12 ft17">I/We hearby affirm that any/our registration certificate under the XXXXX Value Added
                            tax Act
                            2002 is in fource the date on which the sale of goods. On specified in this tax invoice is made by
                            me/us and
                            the transaction of sale covered shall be accounted for in the turnover of Sales while filling with
                            returns
                            and due</P>
                        <P class="p13 ft17">tax. Received branch new vehicle along with standard accessories as per company
                            norms<SPAN class="ft14">.</SPAN></P>
                        <TABLE cellpadding=0 cellspacing=0 class="t1">
                            <TR>
                                <TD class="tr4 td57">
                                    <P class="p6 ft14">Customer Signature</P>
                                </TD>
                                <TD class="tr4 td58">
                                    <P class="p6 ft14">Delivered at</P>
                                </TD>
                                <TD class="tr4 td59">
                                    <P class="p6 ft14">Proprietor / Manager</P>
                                </TD>
                            </TR>
                        </TABLE>
                    </DIV>
                </DIV>
            </DIV>
        </BODY>

        </HTML>
    `
}