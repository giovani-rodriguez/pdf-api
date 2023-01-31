import PDFDocument = require("pdfkit");
export const createPdf = () => {
  const doc = new PDFDocument({
    margin: 20,
  });
  doc.registerFont("gillsan", __dirname + "../../../assets/fonts/gillsan.ttf");
  doc.registerFont(
    "als-script",
    __dirname + "../../../assets/fonts/als-script.regular.ttf"
  );
  doc.registerFont(
    "minion pro",
    __dirname + "../../../assets/fonts/Minion Pro Semi Bold Italic.ttf"
  );

  doc.font("als-script", 30).text("Hello World!");
  doc.end();
  return doc;
};
