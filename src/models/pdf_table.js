import JsPDF from 'jspdf';
import 'jspdf-autotable';
import { getNested } from '../utils';
import { i18n } from './language';
//  import logos from '../../res/logos';

/**
 * generates a PDF-table from given data
 * @param header header data: consisting of objects odf (title: ..., id:, ...) in the body_data
 * @param body_data body data consisting of an array of maps mapping entries to the id in the header
 * @param filename String of the filename
 * @param title Displayed title of
 */
export default function generateTable(header, body_data, filename = 'table', title = false) {
  const doc = new JsPDF({
    orientation: 'landscape',
  });

  const totalPagesExp = '{total_pages_count_string}';

  // This is needed since nested data can be brought here as well, and autotable cant handle
  // I am really sorry but didn't find a smarter solution yet.
  const header_map = new Map();
  const new_header = [];

  // Mapping the key to an number since those can be handled by autotable
  // Mapping the title to this number =>the int is the new DataKey
  header.forEach((element, i) => {
    header_map.set(i, element.dataKey);
    new_header.push({ header: i18n(element.header_key), dataKey: i });
  });

  // Filling a new body with dataKey being the new int.
  const new_body = [];
  body_data.forEach(row => {
    const new_row = {};
    header_map.forEach((key, val) => {
      new_row[val] = getNested(row, key, false);
      if (!new_row[val]) {
        new_row[val] = 'not defined';
      }
    });
    new_body.push(new_row);
  });
  // Generating the table
  doc.autoTable({
    margin: { top: 20 },
    unit: 'mm',
    body: new_body, // Filling in data
    columns: new_header, // Setting header
    // Style Stuff
    tableLineColor: 0, // Outline
    tableLineWidth: 1,
    styles: {
      lineColor: 0,
      lineWidth: 0.3,
    },
    headStyles: {
      fillColor: [232, 70, 43],
    },
    bodyStyles: {
      fillColor: 255,
    },
    alternateRowStyles: {
      fillColor: 255,
    },
    // Function to add footer and header including pagenumber
    didDrawPage(data) {
      // Header
      doc.setFontSize(15);
      doc.setTextColor(0);
      doc.setFontStyle('normal');

      /* let svgAsText = new XMLSerializer().serializeToString(logos.amivLogo.documentElement);

      if (svgAsText) {
          doc.addSvgAsImage(svgAsText, data.settings.margin.left, 15, 10, 10);
      } */
      if (title) {
        doc.text(title, data.settings.margin.left + 15, 15);
      }

      // Footer
      let str = `Seite ${doc.internal.getNumberOfPages()}`;
      // Total page number plugin only available in jspdf v1.0+
      if (typeof doc.putTotalPages === 'function') {
        str = `${str} / ${totalPagesExp}`;
      }
      doc.setFontSize(10);

      // jsPDF 1.4+ uses getWidth, <1.4 uses .width
      const { pageSize } = doc.internal;
      const pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
      doc.text(str, data.settings.margin.left, pageHeight - 10);
    },
  });

  if (typeof doc.putTotalPages === 'function') {
    doc.putTotalPages(totalPagesExp);
  }

  doc.save(`${filename}.pdf`);
}
