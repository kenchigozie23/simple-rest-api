const School = require("../models/SchoolMOdels");
const asyncHandler = require('express-async-handler')


const getSchool = asyncHandler (async(req,res) => {
    
    try {
        const school =  await School.find({});
        res.status(200).json(school)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

const getSchoolId = asyncHandler( async(req,res) => {
    try {
        const {id} = req.params;
        const school = await School.findById(id);
        res.status(200).json(school);
    } catch (error) {
        res.status(500)
        // res.status(400).json({message: error.message});
        throw new Error(error.message)
    }

})

const postSchool = asyncHandler( async(req,res) => {
    try {
      
        const school = await School.create(req.body);
        res.status(200).json(school);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

const putSchool = asyncHandler (async(req,res) => {
    try {
        const { id } = req.params;
        const school = await School.findByIdAndUpdate(id, req.body);
        if(!school){
            return res.status(404).json({message:` Cannot find user with ${id}`})
        }
        const updatedSchool = await School.findById(id)
        res.status(200).json(updatedSchool);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})

const deleteSchool = asyncHandler (async(req, res) => {
    try {
        const {id} = req.params;
        const school = await School.findByIdAndDelete(id);
        res.status(200).json(school);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})

module.exports = {
    getSchool,
    deleteSchool,
    putSchool,
    postSchool,
    getSchoolId
}