const personModel = require('../models/person.models');

const personController = {};

personController.create = async( req, res, next ) => {
    try {
        const { familyId, dui, fullName, educationalLevel, literacy } = req.body;
        const person = new personModel({
            familyId: familyId,
            dui: dui,
            fullName: fullName,
            educationalLevel: educationalLevel,
            literacy: literacy
        });
        const savedPerson = await person.save();
        if(!savedPerson){
            return res.status(409).json({ error: 'An error ocurred' });
        }else{
            return res.status(201).json(savedPerson);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}

module.exports = personController;