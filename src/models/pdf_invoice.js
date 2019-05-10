import JsPDF from 'jspdf';
// import { i18n } from '../models/language';
//  import logos from '../../res/logos';

export default function generateInvoice(invoice) {
  const doc = new JsPDF({});

  doc.save(`${invoice.nr}.pdf`);
}
