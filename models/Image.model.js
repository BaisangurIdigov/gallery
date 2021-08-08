const { Schema, model } = require("mongoose");

const imageSchema = new Schema(
  {
    img: {
      type: String,
    },
  },
  { timestamps: true }
);
const Image = model("Image", imageSchema);
module.exports = Image;
