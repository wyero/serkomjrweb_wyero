const path = require("path");
const db = require("../models");

const getRegister = async (req, res) => {
  try {
    const response = await db.User.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  const { name, email, ipk, phone, semester, scholarship } = req.body;
  const file = req.files.file;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/files/${fileName}`;
  file.mv(`./public/files/${fileName}`);

  try {
    const newRegister = await db.User.create({
      name: name,
      email: email,
      ipk: ipk,
      phone: phone,
      semester: semester,
      scholarship: scholarship,
      file: fileName,
      url: url,
    });
    res.status(200).json(newRegister);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getRegister,
  register,
};
