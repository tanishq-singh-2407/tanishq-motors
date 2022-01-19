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
                    display: flex;
                    position: relative;
                }

                #page_1 {
                    position: absolute;
                    overflow: hidden;
                    margin: auto;
                    padding: 0px;
                }

                #page_1 #p1dimg1 {
                    position: absolute;
                    top: 0px;
                    left: 7px;
                    z-index: -1;
                    width: 637px;
                    height: 187px;
                }

                #page_1 #p1dimg1 #p1img1 {
                    width: 637px;
                    height: 187px;
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
                    padding-right: 84px;
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

            </STYLE>
        </HEAD>

        <BODY>
            <DIV id="page_1">
                <DIV id="p1dimg1">
                    <IMG src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAn4AAAC7CAIAAAB0CAQZAAAgAElEQVR4nO3deXRUZZo/8Pdude+tNUslEDYJiAICDuKCtNjagOKo7YqIgqM9Ku3Silsrp3E7jNuItns79nhawFZU1HbQccN9Q0QaENmirAlJKkvt99atu/3+eDr3VxOSEASKYH8/f3igUnXrVjyHbz3v8ryc67oMAABg3zFNU5IkypdkMmlZVjQatSyL53nbtulxn8+Xz+d9Pt++elPLskRRZIzZti0Iwr66bDumadq2LctyLpdTVdVxHJ7nGWObNm364YcfTj/99HfeeefUU0999NFH77zzTkEQWltbhw0bNn369EgkEolESktLjznmGHE/3RwAAPzTEkXRtm3HcVKpVHl5uaZpjDHXdU3TlGU5nU4ripLNZgOBwN6/l+u6HMcxxrLZrKqqPp9v/5WUtm1LkiRJUi6XSyQSPp/PNE1FURhjL7300v333++67qeffspxnCzLjuOcddZZF1544SmnnOL3++nbAN0tv5/uDwAA/pkJgiBJUiwWq6iouO666yzLkiRJlmXG2G9/+9vBgwf36dMnl8vt/RuZpsna6mxJkrxH9h/66mDbdktLC8dxL7744sUXX/zII49ks9lTTz11ypQpjLFcLrdhw4bvv/9+2rRpr776aiwW69u37+DBg9PptGmazAUAgJ4kl8sV/tWyLNd1bdvO5XL5fN513WQy6TiO67qGYWialkwmvWfm8/lsNuu6rmmarus6jqNpWrvra5qWTqdTqZTjOPRedLV0Ou29XS6X03U9Ho/Tu6TTaXpr27ZpxHXHjh3xeNxxHHq+947031wu19LS0tLSwhh74403NE2jceZCPM8vXLgwk8m0+6SWZdGT6VJ0D7qut3u595zx48eHw2HGGOUuY+yQQw755ptv6KPR3ba2tu7h/4ROJZPJjRs3CoLgum4oFKIal/KYMVZWVmYYhm3bdCeGYWQymXfffbekpOTdd9/N5/PJZNIwDM7FXC8AQA/T0NCgqurTTz89YsSISZMm3Xnnndlstr6+XlEUWZZDoVA+n3cch/7RTyQSJSUlHMcJgkCPu66rKIphGI7jRKNR27YffPBB7+L5fH7evHk1NTV+v98wjMrKylgs5vf7A4FAIpFIpVKMsVAo5Pf7HceZO3duKBSiFxqGIcvyvffeu3r16iFDhtTW1gaDQcMweJ5vamrq06cPBYrruvl8PhgMCoKwYsUKQRBGjx59++23NzU1rV69WhTFs88+e86cOY8++mhJScmpp55q23ZpaanjOLqu+/3+bDYbiUQymYyqqo2Njb169Wpubl6wYEHh78d1XY7jDMOorq5uamry+/30vUQURZ7naQp52rRpzz33XCqVCgQCHMfRjOzeW7t27ZFHHvnuu+8uXLjw8MMPTyQSzzzzTCKRGDRo0Pbt2y3LyuVyffv2TaVSuq5nMplcLjdo0KB77733mmuuWbRo0YwZM/7xAQAAoOdoampyXZfn+W3btomieNddd7muO2zYMMZYNptljFVUVFiWZRgGPV/XdQpg13UzmQwVi5ZlrV27trS0dN68ee1KRioHvZf7/X7GWCaTMQyjoaHBdd1sNltWVta3b1/XdanYpSenUinvIqZpbty4kTG2dOnSfD4/duzYk046yW0rnTds2BCLxdauXasoymOPPWZZlt/vnzRpUiaTGTdu3Lx587Zv384Y8/l8tPaqvLzcu7hpmlTp1tfXRyIRt60apjshlmXV1tb6/X5aV+UtqqI/FD74ww8/0EvoxvYeY2zEiBEvvfRSKBRyXXfNmjWWZU2dOvWtt97K5/OPPPKIKIrBYNB13cbGxltvvZUxJstybW3tVVdddcUVV2zbtq2hoQHRCwDQg3gDsH/4wx9M0xRF8cEHH6RKlOd5ypuZM2fSMDI9+Re/+AWNf7quW1NT8/DDDz/00EPPPvvs8ccf31l9ZVnWfffdxxirqqqitU5nnnkmx3EzZ87UdX3jxo0cxz3wwAPeCHDha+PxeHNzs6Zpo0ePFgQhm83m83nG2Mcff6xp2rJly0RRPOqoo44++uhRo0aJohiPx2lO94cffmhoaAiFQmvXrnVdlzF22WWX0aC0rutvvfWW67q2bWcymaVLlz733HM333yzoiiu6+q63m4Qnir7gQMHchxHpT+tdeJ5XpIkr8AVRVGSpBtuuCGTyew64v0TzJo1q6SkhMaT//u//9v7XpLJZPL5/Pfffx+LxWjA/9prr2WMSZL0zjvv0IcVRdG7DqIXAKDHGTp0aHV19ffffy+K4vLly//4xz8yxp577rlRo0ZRmiaTyWOOOaZ37940i5nP59etW8cY+9WvfkVVL009chzndjRRKggC/ch13d69e7/55pua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"
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
                            <P class="p5 ft8">${invoice.postalCode}, ${invoice.streetAddress}, ${invoice.city}, (${invoice.state})</P>
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
                            <P class="p5 ft8">Rupees in words : ${toWords.convert(((2.5 / 100 * totalAmount * 2) + totalAmount))}</P>
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
                <P class="p12 ft17">I/We hearby affirm that any/our registration certificate under the XXXXX Value Added tax Act
                    2002 is in fource the date on which the sale of goods. On specified in this tax invoice is made by me/us and
                    the transaction of sale covered shall be accounted for in the turnover of Sales while filling with returns
                    and due</P>
                <P class="p13 ft17">tax. Received branch new vehicle along with standard accessories as per company norms<SPAN
                        class="ft14">.</SPAN></P>
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
        </BODY>

        </HTML>
    `
}