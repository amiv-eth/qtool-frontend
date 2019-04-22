import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logos from '../../res/logos'

export default function generateTable(header, data, filename = false, title = false ) {
  var doc = new jsPDF({
      orientation: 'landscape',
  });

  var totalPagesExp = "{total_pages_count_string}";

  doc.autoTable({
    margin: {top: 20},
    unit: 'mm', 
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
    didDrawPage: function (data) {
      // Header
      doc.setFontSize(15);
      doc.setTextColor(0);
      doc.setFontStyle('normal');

      /* let svgAsText = new XMLSerializer().serializeToString(logos.amivLogo.documentElement);

      if (svgAsText) {
          doc.addSvgAsImage(svgAsText, data.settings.margin.left, 15, 10, 10);
      } */
      title ? doc.text(title, data.settings.margin.left + 15, 15) : null;

      // Footer
      var str = "Seite " + doc.internal.getNumberOfPages()
      // Total page number plugin only available in jspdf v1.0+
      if (typeof doc.putTotalPages === 'function') {
          str = str + " / " + totalPagesExp;
      }
      doc.setFontSize(10);

      // jsPDF 1.4+ uses getWidth, <1.4 uses .width
      var pageSize = doc.internal.pageSize;
      var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
      doc.text(str, data.settings.margin.left, pageHeight - 10);
    },
  });

  if (typeof doc.putTotalPages === 'function') {
    doc.putTotalPages(totalPagesExp);
  }

  filename ? doc.save(filename) : doc.save('table.pdf');
}  