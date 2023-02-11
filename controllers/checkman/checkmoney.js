const sequelize = require('../../models/sequelize')
var request = require("request");
const addControllers = async (req, res) => {
	try {
		const formation = await sequelize.formation.create(req.body)
			.then(async (response) => {
			return response.toJSON()
			}).catch((err) => {
				res.status(404).json({
				message : err
			})
			})
		if (formation) {
			res.status(200).json({
				data: formation,
				message : "Votre formation a été ajouté avec succes"
			})
		}
	} catch (error) {
		res.status(500).json({
			message : "error  intern server"
		})
	}
}




var options = { method: 'POST',
  url: 'https://api.trongrid.io/wallet/createtransaction',
  headers: {  
     'TRON-PRO-API-KEY': 'dc7aaeae-b644-402d-9bc7-102cf809e014',
     'Content-Type': 'application/json' 
},
  body: { 
      to_address: '41e9d79cc47518930bc322d9bf7cddd260a0260a8d',
     owner_address: '41D1E7A6BC354106CB410E65FF8B181C600FF14292',
     amount: 1000 
},
  json: true 
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

module.exports = addControllers