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
    var postage = 0;
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
            /*else
                postage = "undefined";*/
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
            /*else
                postage = "undefined";*/
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
            /*else
                postage = "undefined";*/
            break;
        case "Media Mail—Retail: Large Envelopes & Parcels":
            if (weight <= 1)
                postage = 2.66;
            else if (weight <= 2)
                postage = 3.17;
            else if (weight <= 3)
                postage = 3.68;
            else if (weight <= 4)
                postage = 4.19;
            else if (weight <= 5)
                postage = 4.70;
            else if (weight <= 6)
                postage = 5.21;
            else if (weight <= 7)
                postage = 5.72;
            else if (weight <= 8)
                postage = 6.23;
            else if (weight <= 9)
                postage = 6.74;
            else if (weight <= 10)
                postage = 7.25;
            else if (weight <= 11)
                postage = 7.76;
            else if (weight <= 12)
                postage = 8.27;
            else if (weight <= 13)
                postage = 8.78;
            else if (weight <= 14)
                postage = 9.29;
            else if (weight <= 15)
                postage = 9.80;
            else if (weight <= 16)
                postage = 10.31;
            else if (weight <= 17)
                postage = 10.82;
            else if (weight <= 18)
                postage = 11.33;
            else if (weight <= 19)
                postage = 11.84;
            else if (weight <= 20)
                postage = 12.35;
            else if (weight <= 21)
                postage = 12.86;
            else if (weight <= 22)
                postage = 13.37;
            else if (weight <= 23)
                postage = 13.88;
            else if (weight <= 24)
                postage = 14.39;
            else if (weight <= 25)
                postage = 14.90;
            else if (weight <= 26)
                postage = 15.41;
            else if (weight <= 27)
                postage = 15.92;
            else if (weight <= 28)
                postage = 16.43;
            else if (weight <= 29)
                postage = 16.94;
            else if (weight <= 30)
                postage = 17.45;
            else if (weight <= 31)
                postage = 17.96;
            else if (weight <= 32)
                postage = 18.47;
            else if (weight <= 33)
                postage = 18.98;
            else if (weight <= 34)
                postage = 19.49;
            else if (weight <= 35)
                postage = 20.00;
            else if (weight <= 36)
                postage = 20.51;
            else if (weight <= 37)
                postage = 21.02;
            else if (weight <= 38)
                postage = 21.53;
            else if (weight <= 39)
                postage = 22.04;
            else if (weight <= 40)
                postage = 22.55;
            else if (weight <= 41)
                postage = 23.06;
            else if (weight <= 42)
                postage = 23.57;
            else if (weight <= 43)
                postage = 24.08;
            else if (weight <= 44)
                postage = 24.59;
            else if (weight <= 45)
                postage = 25.10;
            else if (weight <= 46)
                postage = 25.61;
            else if (weight <= 47)
                postage = 26.12;
            else if (weight <= 48)
                postage = 26.63;
            else if (weight <= 49)
                postage = 27.14;
            else if (weight <= 50)
                postage = 27.65;
            else if (weight <= 51)
                postage = 28.16;
            else if (weight <= 52)
                postage = 28.67;
            else if (weight <= 53)
                postage = 29.18;
            else if (weight <= 54)
                postage = 29.69;
            else if (weight <= 55)
                postage = 30.20;
            else if (weight <= 56)
                postage = 30.71;
            else if (weight <= 57)
                postage = 31.22;
            else if (weight <= 58)
                postage = 31.73;
            else if (weight <= 59)
                postage = 32.24;
            else if (weight <= 60)
                postage = 32.75;
            else if (weight <= 61)
                postage = 33.26;
            else if (weight <= 62)
                postage = 33.77;
            else if (weight <= 63)
                postage = 34.28;
            else if (weight <= 64)
                postage = 34.79;
            else if (weight <= 65)
                postage = 35.30;
            else if (weight <= 66)
                postage = 35.81;
            else if (weight <= 67)
                postage = 36.32;
            else if (weight <= 68)
                postage = 36.83;
            else if (weight <= 69)
                postage = 37.34;
            else if (weight <= 70)
                postage = 37.85;
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
* https://stackoverflow.com/questions/41202233/how-can-i-use-if-statement-in-ejs/41202290
*
* Stack Overflow - Can I use conditional statements with EJS templates (in JMVC)?
* https://stackoverflow.com/questions/8216918/can-i-use-conditional-statements-with-ejs-templates-in-jmvc
* */