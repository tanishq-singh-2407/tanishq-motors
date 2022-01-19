const chromium = require('chrome-aws-lambda');

exports.handler = async (event, context, callback) => {
    let result = null;
    let browser = null;

    try {
        browser = await chromium.puppeteer.launch({
            args: chromium.args,
            executablePath: await chromium.executablePath,
            headless: true,
            ignoreHTTPSErrors: true,
        });

        let page = await browser.newPage();
        let html = event.body.html;

        await page.setContent(html, {
            waitUntil: 'domcontentloaded'
        })

        // create a pdf buffer
        const pdfBuffer = await page.pdf({
            format: 'A4'
        })

        result = pdfBuffer.toString('base64');

    } catch (error) {
        return callback(error);
    } finally {
        if (browser !== null) {
            await browser.close();
        }
    }

    return callback(null, result);
};