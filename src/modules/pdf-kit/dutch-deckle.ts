export const pageOne = (
  doc: PDFKit.PDFDocument,
  name: string,
  phone: string,
  email: string,
  address: string,
  adress2: string
) => {
  doc.addPage({ size: "A4", margin: 20 });
  doc.font("gillsan", 18).text(name);
  doc.font("minion pro", 14).text(phone);
  doc.font("minion pro", 14).text(email);
  doc.font("minion pro", 14).text(address);
  doc.font("minion pro", 14).text(adress2);
};
