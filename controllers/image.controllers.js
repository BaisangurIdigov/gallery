const Image = require("../models/Image.model");

module.exports.imageControllers = {
  getImage: async (req, res) => {
    const image = await Image.find();
    res.json(image);
  },
  postImage: async (req, res) => {
    const { img } = req.body;
    try {
      const image = await Image.create({
        img,
      });
      return res.json(image);
    } catch (e) {
      return res.status(401).json(e.toString());
    }
  },
  deleteImage: async (req, res) => {
    const { img } = req.body;
    try {
      console.log(img);
      const image = await Image.find({ img });
      console.log(image);
      await image[0].remove();
      return res.json(image);
    } catch (e) {
      return res.status(401).json("Ошибка" + e.toString());
    }
  },
};
