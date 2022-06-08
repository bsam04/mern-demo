const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    //Create the text field
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  //Set timestamps to true to create and "updated at" and "created at" field automatically
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", goalSchema);
