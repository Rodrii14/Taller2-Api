const familyModel = require('../models/family.models');

const familyControllers = {};

familyControllers.create = async( req, res, next ) => {
    try {
        const { id, canton, housingType, riskLevel, latitude, longitude } = req.body;
        const family = new familyModel({
            id: id,
            canton: canton,
            housingType: housingType,
            riskLevel: riskLevel,
            latitude: latitude,
            longitude: longitude
        });
        const savedFamily = await family.save();
        if(!savedFamily){
            return res.status(409).json({ error: 'An error ocurred' });
        }else{
            return res.status(201).json(savedFamily);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}

module.exports = familyControllers;