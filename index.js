const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/postage', calculatePostage)
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));

function calculatePostage(req, res) {
    console.log("Calculating postage");
    var weight = Number(req.query.weight);
    var mailType = req.query.mailType;
    console.log("Weight: " + weight + ", Mail Type: " + mailType);
    var postage = 0;
    switch (mailType) {
        case "Letters (Stamped)":
            break;
        case "Letters (Metered)":
            break;
        case "Large Envelopes (Flats)":
            break;
        case "First-Class Package Service—Retail":
            break;
        default:
            console.log("No mail type was selected");
    }
    res.render('pages/postage', {
        weight: weight,
        mailType: mailType,
        postage: postage
    });
}
