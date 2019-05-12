import JsPDF from 'jspdf';
import { i18n, setLanguage, currentLanguage } from './language';
import logos from '../../res/images/logos';

export default function generateInvoice(invoice, lang) {
  const current_lang = currentLanguage();
  setLanguage(lang);

  const doc = new JsPDF({
    orientation: 'p',
    unit: 'mm',
    format: 'a4',
  });

  const left_border = 25;
  const general_font_size = 10;

  // Logo
  const logo_width = 70;
  doc.addImage(logos.amivData, 'PNG', left_border, 15, logo_width, (logo_width / 489) * 150);

  // Header ========================================================================================
  const header_start = 53; // Starting point in mm of the header
  const header_spacing = 5; // Spacing in mm between lines

  // Header left -----------------------------------------------------------------------------------
  let row = header_start; // current row

  // Header AMIV-Address
  doc.setFontSize(8);
  doc.text(i18n('address_full'), left_border, row);
  doc.line(left_border, row + 1, left_border + 82, row + 1);
  row += header_spacing;

  doc.setFontSize(general_font_size);

  // Company
  if (invoice.customer.company) {
    doc.text(invoice.customer.company, left_border, row);
    row += header_spacing;
  }

  // Customer name with title
  if (invoice.customer.last_name && invoice.customer.title) {
    doc.text(
      `${i18n(`invoice.title.${invoice.customer.title}`)} ${
        invoice.customer.first_name ? invoice.customer.first_name : ''
      } ${invoice.customer.last_name}`,
      left_border,
      row
    );
    row += header_spacing;
  }

  // Customer address
  doc.text(invoice.customer.address, left_border, row);
  row += header_spacing;

  // Customer City
  doc.text(`${invoice.customer.plz} ${invoice.customer.city}`, left_border, row);
  row += header_spacing;

  // Country
  if (invoice.customer.country) {
    doc.text(invoice.customer.country, left_border, row);
    row += header_spacing;
  }

  // Header right ----------------------------------------------------------------------------------
  const border_tab_left = 125; // Starting point [mm] of titles
  const border_tab_right = border_tab_left + 30; // Starting point [mm] of entries
  row = header_start + header_spacing;

  // Issue date
  doc.text(`${i18n('date')}:`, border_tab_left, row);
  doc.text(invoice.issue_date, border_tab_right, row); // TODO: Date formatter
  row += header_spacing;

  // To Pay within
  doc.text(`${i18n('invoice.payment_within')}:`, border_tab_left, row);
  doc.text(i18n('invoice.payment_within_duration'), border_tab_right, row);
  row += header_spacing;

  // Contact person
  doc.text(`${i18n('invoice.contact_person')}:`, border_tab_left, row);
  doc.text(invoice.user.name, border_tab_right, row);
  row += header_spacing;

  // Phone
  doc.text(`${i18n('phone')}:`, border_tab_left, row);
  doc.text(i18n('phone_no'), border_tab_right, row);
  row += header_spacing;

  // Mail either amivmail or queastur mail
  doc.text(`${i18n('email')}:`, border_tab_left, row);
  doc.text(
    invoice.user.amiv_mail ? invoice.user.amiv_mail : i18n('queastur_mail'),
    border_tab_right,
    row
  );
  row += header_spacing;

  // INVOICE CONTENT %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

  // Title
  const title_start = 93;
  doc.setFontSize(14);
  doc.text(
    `${i18n('invoice.invoice')} ${i18n('invoice.no')} ${invoice.nr}`,
    left_border,
    title_start
  );
  doc.setFontSize(general_font_size);

  // Salutation
  const salutation_start = 100;
  if (invoice.customer.last_name && invoice.customer.title) {
    doc.text(
      `${
        invoice.customer.title === 'mr'
          ? i18n('invoice.salutation_male')
          : i18n('invoice.salutation')
      }${i18n(`invoice.title.${invoice.customer.title}`)} ${invoice.customer.last_name}`,
      left_border,
      salutation_start
    );
  } else {
    doc.text(
      `${i18n('invoice.salutation')} ${i18n('invoice.title.general')}`,
      left_border,
      salutation_start
    );
  }

  // Intro
  const intro_start = salutation_start + header_spacing;
  doc.text(i18n('invoice.intro'), left_border, intro_start);

  doc.save(`${invoice.nr}.pdf`);

  console.log(doc.getFontList());
  setLanguage(current_lang);
}
