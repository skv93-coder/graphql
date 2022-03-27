const cloudinary = require("cloudinary");

module.exports = (file) => {
  console.log(33);
  return cloudinary.v2.uploader.upload(
    file,
    { upload_preset: "my_preset" },
    (error, result) => {
      console.log(result, error);
    }
  );
};
