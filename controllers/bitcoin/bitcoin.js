const CoinqvestClient = require("coinqvest-merchant-sdk");
const sequelize = require("../../models/sequelize");
const sendermail = require("../../mail/sendermail")

const client = new CoinqvestClient(
    "zy5m-S39V-M2z8-hEu*-xvD8-8wCr",
    "621927e5ec7d"
   );

const bitcoinController = async (req, res) => {    
    const customer = await client.post('/customer', {
        customer: {
            email: sequelize.user.email,
        }
    })
    console.log(customer.status);
    console.log(customer.data);

    if (customer.status !== 200) {
        console.log('Could not create customer. Inspect above log entry.');
        return;
    }
    let customerId = customer.data['customerId'];

    const checkout = await client.post('/checkout/hosted', {
        charge:{
            customerId: customerId, // associates this charge with a customer
            billingCurrency: 'USD', // specifies the billing currency
            lineItems: [{ // a list of line items included in this charge
                description: sequelize.formation.description,
                netAmount: sequelize.formation.prix,
                quantity: 1
            }],
        },
        settlementAsset: 'USDC:GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN' // specifies in which asset you want to settle
    });
    if (checkout.status !== 200) {
        // something went wrong, let's abort and debug by looking at our log file
        console.log('Could not create checkout.');
        return;
        
    } else {
        console.log(checkout.status);
        console.log(checkout.data);
        const link = `http://localhost:8080/api/v1/${customerId}/${sequelize.formation.titre}`
        sendermail(
            sequelize.user.email,
            "Having access to what you've payed"
            `Click on the link below and get access to your study ${link}`,
        )

        
    }


    // the checkout was created
    // response.data now contains an object as specified in the success response here: https://www.coinqvest.com/en/api-docs#post-checkout
    let checkoutId = response.data['id']; // store this persistently in your database
    let url = response.data['url']; // redirect your customer to this URL to complete the payment

    console.log(checkoutId, url);
}

module.exports = bitcoinController;