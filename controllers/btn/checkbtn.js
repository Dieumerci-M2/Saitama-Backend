const coinbase = require('coinbase-commerce-node')

const checkbtn = (req, res) => {
    const Charge = coinbase.resources.Charge;
    let id = req.body.id
    Charge.retrieve(id, (err, charge) => {
      if(charge['timeline'][0]['status'] == 'NEW') {
        try {
          if (charge['timeline'][1]['status'] == 'PEDNING' &&     charge['timeline'].length == 2) {
            return res.status(200).send({message: 'Payment pending, awaiting confirmations.'});
          } else if (charge['timeline'][1]['status'] == 'EXPIRED') {
            return res.status(400).send({message: 'Payment expired'});
          } else if(charge['timeline'][2]['status'] == 'COMPLETED') {
            return res.status(200).send({message: 'Payment completed.'});
          }
        } catch(err) {
          return res.status(200).send({message: 'No payment detected'});  
        }
      } else {
        return res.status(400).send({message: 'Charge not found.'});
      }
    });
}

module.exports = checkbtn