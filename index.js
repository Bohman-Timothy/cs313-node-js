const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/postage', calculateRate)
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));

function calculateRate(req, res) {
    console.log("Calculating postage");
    var weight = Number(req.query.weight);
    var mailType = req.query.mailType;
    console.log("Weight: " + weight + ", Mail Type: " + mailType);
    var postage = "undefined";
    switch (mailType) {
        case "Letters (Stamped)":
            if (weight <= 1)
                postage = 0.50;
            else if (weight <= 2)
                postage = 0.71;
            else if (weight <= 3)
                postage = 0.92;
            else if (weight <= 3.5)
                postage = 1.13;
            else
                postage = "undefined";
            break;
        case "Letters (Metered)":
            if (weight <= 1)
                postage = 0.47;
            else if (weight <= 2)
                postage = 0.68;
            else if (weight <= 3)
                postage = 0.89;
            else if (weight <= 3.5)
                postage = 1.10;
            break;
        case "Large Envelopes (Flats)":
            if (weight <= 1)
                postage = 1.00;
            else if (weight <= 2)
                postage = 1.21;
            else if (weight <= 3)
                postage = 1.42;
            else if (weight <= 4)
                postage = 1.63;
            else if (weight <= 5)
                postage = 1.84;
            else if (weight <= 6)
                postage = 2.05;
            else if (weight <= 7)
                postage = 2.26;
            else if (weight <= 8)
                postage = 2.47;
            else if (weight <= 9)
                postage = 2.68;
            else if (weight <= 10)
                postage = 2.89;
            else if (weight <= 11)
                postage = 3.10;
            else if (weight <= 12)
                postage = 3.31;
            else if (weight <= 13)
                postage = 3.52;
            else
                postage = "undefined";
            break;
        case "First-Class Package Service—Retail":
            if (weight <= 1)
                postage = 3.50;
            else if (weight <= 2)
                postage = 3.50;
            else if (weight <= 3)
                postage = 3.50;
            else if (weight <= 4)
                postage = 3.50;
            else if (weight <= 5)
                postage = 3.75;
            else if (weight <= 6)
                postage = 3.75;
            else if (weight <= 7)
                postage = 3.75;
            else if (weight <= 8)
                postage = 3.75;
            else if (weight <= 9)
                postage = 4.10;
            else if (weight <= 10)
                postage = 4.45;
            else if (weight <= 11)
                postage = 4.80;
            else if (weight <= 12)
                postage = 5.15;
            else if (weight <= 13)
                postage = 5.50;
            else
                postage = "undefined";
            break;
        default:
            console.log("No mail type was selected");
    }
    console.log("Postage: $" + postage);
    res.render('pages/postage', {
        weight: weight,
        mailType: mailType,
        postage: postage
    });
}

/* References
*
* Stack Overflow - Allow 2 decimal places in <input type="number">
* https://stackoverflow.com/questions/34057595/allow-2-decimal-places-in-input-type-number/34057860
*
* Stack Overflow -  Format number to always show 2 decimal places
* https://stackoverflow.com/questions/6134039/format-number-to-always-show-2-decimal-places
*
* Stack Overflow - How can I use if statement in ejs?
* https://stackoverflow.com/questions/41202233/how-can-i-use-if-statement-in-ejs/41202290 */