const Pet = require('../models/pet.model');

module.exports = {

        findAllPets: (req, res) => {
            Pet.find().sort({type: 1})
                .then((allPets) => {
                    console.log(allPets);
                    res.json(allPets);
                })
                .catch((err) => {
                    console.log("findAllPets has failed");
                    console.log(err);
                    res.json({ message: "Something went wrong in findAllPets", error: err })
                })
        },

        createNewPet: (req, res) => {
            console.log(req.body);
            Pet.create(req.body)
                .then((newPet) => {
                    console.log(newPet);
                    res.json(newPet);
                })
                .catch((err) => {
                    console.log("createNewPet failed");
                    console.log(err);
                    res.status(400).json({ message: "Something's wrong in createNewPet", error: err })
                })
        },

        findOnePet: (req, res) => {
            Pet.findOne({_id: req.params.id})
                .then((onePet) => {
                    console.log(onePet);
                    res.json(onePet);
                }) 
                .catch((err) => {
                    console.log("findOnePet failed");
                    console.log(err);
                    res.json({ message: "Something's wrong in findOnePet", error: err })
                })
        },

        deleteOnePet: (req, res) => {
            Pet.deleteOne({_id: req.params.id})
                .then((deletedPet) => {
                    console.log(deletedPet);
                    res.json(deletedPet);
                })
                .catch((err) => {
                    console.log("deleteOnePet has failed");
                    console.log(err);
                    res.json({ message: "Something went wrong in deleteOnePet", error: err })
                })
        },

        updateOnePet: (req, res) => {
            Pet.findOneAndUpdate({_id: req.params.id}, 
                req.body,
                {new: true, runValidators: true} // 
                )
                .then((updatedPet) => {
                    console.log(updatedPet);
                    res.json(updatedPet)
                })
                .catch((err) => {
                    console.log("updateOnePet failed");
                    console.log(err);
                    res.status(400).json({ message: "Something's wrong in updateOnePet", error: err })
                })

        }
    

}