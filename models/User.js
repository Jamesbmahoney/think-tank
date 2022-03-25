const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  thoughts: {},
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  toJSON: {
    virtuals: true,    
  },
  // prevents virtuals from creating duplicate of _id as `id`
  id: false
});
