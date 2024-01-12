// const Tesseract = require("tesseract.js");
// const fs = require("fs");

// const imagePath = "image/20231113135539935138000000-6.jpg";

// // Read the image file
// fs.readFile(imagePath, (err, data) => {
//   if (err) {
//     console.error("Error reading image file:", err);
//     return;
//   }

//   // Perform OCR on the image
//   Tesseract.recognize(
//     data,
//     "eng", // Language code (English in this case)
//     {
//       logger: (info) => console.log(info),
//     }
//   )
//     .then(({ data: { text } }) => {
//       // Output the recognized text
//       console.log("Recognized Text:", text);
//     })
//     .catch((error) => {
//       console.error("Error performing OCR:", error);
//     });
// });

const { log } = require("console");
const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");

app.use(express.static(path.join(__dirname + "/uploads")));

app.set("view engine", "ejs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    // Specify how the filename will be constructed for each uploaded file
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/extract", upload.single("file"), (req, res) => {
  console.log(req.body, "req");
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.send("Text extracted successfully.");
  console.log(req.file.filename, "abcd");
  // console.log(req.file.path, "abcd");
});

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
