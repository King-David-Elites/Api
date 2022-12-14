const WaitList = require("../models/waitList.model");


const inputDetails = async (req, res)=>{
    const details = req.body;
    await new WaitList(details).save()
    .then(resp => res.json({message: "Successful"}))
    .catch(err => res.json({message: "An Error Occured"}))
}

const getAllDetails = async (req, res)=>{
    await WaitList.find()
    .then(resp => res.json(resp))
    .catch(err => res.json(err))
}

module.exports = {inputDetails, getAllDetails}