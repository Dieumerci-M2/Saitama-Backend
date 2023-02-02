const sequelize = require('../../models/sequelize')

const searchItems = async (req, res) => {
	let blogitem,message,livre,formations,letter
	try {
		const searchItem = req.query.search
	if (searchItem) {
		blogitem = await sequelize.blog.findOne({
			where: {
				search : req.query.search
			}
		}).then(async (response) => {
			return await response.toJSON()
		}).catch(err => {
			res.status(403).JSON(
				{
					message : "not found" + err
				}
			)
		})
		res.status(200).JSON({
			data : blogitem
		})
	}
	if (!blogitem) {
		message = await sequelize.message.findOne({
			where: {
				search : req.query.search
			}
		}).then(response => {
			return response.toJSON()
		})
		res.status(200).JSON({
			data : message
		})
	}
	if (!message) {
		livre = await sequelize.livre.findOne({
			where: {
				search : req.query.search
			}
		}).then(response => {
			return response.toJSON()
		})
		res.status(200).JSON({
			data : livre
		})
	}
		if (!livre && !blogitem) {
		formations = await sequelize.formation.findOne({
			where: {
				search : req.query.search
			}
		}).then(response => {
			return response.toJSON()
		})
		res.status(200).JSON({
			data : formations
		})
		}
	if (!formations && !livre && !message) {
		letter = await sequelize.formation.findOne({
			where: {
				search : req.query.search
			}
		}).then(response => {
			return response.toJSON()
		})
		res.status(200).JSON({
			data : formations
		})
	}
	} catch (error) {
		res.status(500).JSON({
			message : "error serever intern " + error
		})
	}
}
exports.module = searchItems