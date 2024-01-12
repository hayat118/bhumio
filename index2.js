// const fs = require("fs");
// const { jsPDF } = require("jspdf");
// require("jspdf-autotable");

// // Function to convert image to PDF
// async function convertImageToPDF(imagePath, outputPath) {
//   const pdf = new jsPDF();

//   // Load image as data URI
//   const imageURI = await loadImageAsDataURI(imagePath);

//   // Add image to PDF
//   pdf.addImage(imageURI, "JPEG", 10, 10, 190, 150);

//   // Save the PDF to a file
//   pdf.save(outputPath);
// }

// // Function to load an image as data URI
// function loadImageAsDataURI(imagePath) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(imagePath, (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         const dataURI = `data:image/jpeg;base64,${data.toString("base64")}`;
//         resolve(dataURI);
//       }
//     });
//   });
// }

// // Example usage
// const imagePath = "image/20231113135539935138000000-6.jpg"; // Replace with the actual path to your image file
// const outputPath = "image/output.pdf"; // Replace with the desired output path

// convertImageToPDF(imagePath, outputPath);
