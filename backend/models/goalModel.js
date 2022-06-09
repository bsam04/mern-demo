const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    //Allow for a user to be associated with a goal
    user: {
      //The type should be an ObjectId, or the _id field in the database for an object
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      //Add a reference to say which model the ObjectId pertains to
      ref: "User",
    },
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
