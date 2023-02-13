const coinbase = require('coinbase-commerce-node')
const sequelize = require("../../models/sequelize");
const transporter = require("../../mail/sendermail")

const btnController = async (req, res) => {    
// Coinbase setup
const Client = coinbase.Client;
Client.init("e73a7826-3196-4e78-8c35-184023336a02");
const Charge = coinbase.resources.Charge;

let chargeData = {
    name: req.body.name,
    description: req.body.decription,
    local_price: {
        amount: req.body.amount,
        currency: 'USD'
    },
    pricing_type: 'fixed_price'
}
Charge.create(chargeData, (err, response) => {
try {
    if (err) {
        res.status(400).send({message: err.message});
    }
    res.status(200).send(response);
    const url = response.hosted_url
      // define the email options
    const mailOptions = {
        from: 'kananecompagny@gmail.com',
        to: 'dieumerci.md09@gmail.com',
        subject: 'Complete the payment',
        text: `Please complete the payment by clicking on this link => ${url}`
    };

    // send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
        console.error(error);
        } else {
            console.log(`An email has been sent, please check your box mail`);
        res.status(201).json({message : `An email has been sent, please check your box mail`});
        }
    });
    
} catch (error) {
    res.status(500).json({message: `Server error: ${error}`})
    
}
});

}

module.exports = btnController;