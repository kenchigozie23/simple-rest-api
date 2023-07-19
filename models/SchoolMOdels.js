const mongoose = require("mongoose");




const SchoolMOdelsSchema = mongoose.Schema(
  {
    name: {
        type: String,
        required: [true, "Please enter a school name..."]
    },
    fee:{
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: false
    },
  },
  {
    timestamps: true,
  }
);

const School = mongoose.model('SchoolMOdels', SchoolMOdelsSchema);

module.exports = School;
