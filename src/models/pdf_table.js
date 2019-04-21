import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default function generateTable(header, data, filename = false, title = false ) {
  var doc = new jsPDF({
      orientation: 'landscape',
  });

  title ? doc.text(title, 14, 20) : null;

  console.log(header);
  console.log(data)

  doc.autoTable({
      startY: title ? 22 : '',
      body: data,
      columns: header,
      tableLineColor: 0, //Outline
      tableLineWidth: 1,
      styles: {
          lineColor: 0,
          lineWidth: .3
      },
      headStyles: {
          fillColor: [232,70,43]
      },
      bodyStyles: {
          fillColor: 255,
      },
      alternateRowStyles: {
          fillColor: 255
      },
    });

  filename ? doc.save(filename) : doc.save('table.pdf');
}  