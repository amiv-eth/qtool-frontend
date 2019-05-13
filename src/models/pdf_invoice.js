import JsPDF from 'jspdf';
import { i18n, setLanguage, amountFormatter, dateTextFormatter, currentLanguage } from './language';
import logos from '../../res/images/logos';

export default function generateInvoice(invoice, lang) {
  // TODO Multipage Support
  const current_lang = currentLanguage();
  setLanguage(lang);

  const doc = new JsPDF({
    orientation: 'p',
    unit: 'mm',
    format: 'a4',
  });

  // Left boarder of the Document content
  const left_border = 22;

  // Font specifications
  const font = {
    size: 10,
    sender_size: 8,
    title_size: 15,
    type: 'helvetica',
    style: 'normal',
    title_style: 'bold',
  };

  // Line specifications
  const lines = {
    addressline: 0.2,
    table_normal: 0.1,
    table_total: 0.6,
    footer: 0.1,
  };

  doc.setFont(font.type, font.style);

  // Logo
  const logo_width = 70;
  doc.addImage(logos.amivData, 'PNG', left_border, 15, logo_width, (logo_width / 489) * 150);

  // Header ========================================================================================
  const header_start = 53; // Starting point in mm of the header
  const header_spacing = 5; // Spacing in mm between lines

  // Header left -----------------------------------------------------------------------------------
  let row = header_start; // current row

  // Header AMIV-Address
  doc.setFontSize(font.sender_size);
  doc.text(i18n('address_full'), left_border, row);
  doc.setLineWidth(lines.addressline);
  doc.line(left_border, row + 1, left_border + 82, row + 1);
  row += header_spacing;
  doc.setFontSize(font.size);

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
  doc.text(dateTextFormatter(new Date(invoice.issue_date)), border_tab_right, row); // TODO: Date formatter
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

  // Title =========================================================================================
  const title_start = 93; // Starting point in mm
  doc.setFontSize(font.title_size);
  doc.setFont(font.type, font.title_style);
  doc.text(
    `${i18n('invoice.invoice')} ${i18n('invoice.no')} ${invoice.nr}`,
    left_border,
    title_start
  );
  doc.setFont(font.type, font.style);
  doc.setFontSize(font.size);

  // Salutation ====================================================================================
  const salutation_start = 100; // Starting point in mm from the top
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

  // Intro =========================================================================================
  const intro_start = salutation_start + header_spacing; // Starting point in mm from the top
  doc.text(i18n('invoice.intro'), left_border, intro_start);

  // Table =========================================================================================
  const table_start = 120; // Starting point in mm from the top
  const table_spacing = 10; // Spacing between rows

  // Specifications of all column rows;
  const columns = [
    { header: i18n('invoice.services.pos'), dataKey: 'pos', pos: left_border },
    { header: i18n('invoice.services.desc'), dataKey: 'article_type', pos: left_border + 11 },
    {
      header: i18n('invoice.services.qty'),
      dataKey: 'amount',
      add_key: 'unit',
      pos: left_border + 82,
      align: 'right',
    },
    {
      header: i18n('invoice.services.tax'),
      dataKey: 'taxrate',
      pos: left_border + 101,
      align: 'right',
    },
    {
      header: i18n('invoice.services.unit_price'),
      dataKey: 'unitprice',
      pos: left_border + 135,
      align: 'right',
      formatter: price => amountFormatter(price),
    },
    {
      header: i18n('invoice.services.tot'),
      dataKey: 'subtotal',
      pos: left_border + 162,
      align: 'right',
      formatter: price => amountFormatter(price),
    },
  ];

  // Table-Title -----------------------------------------------------------------------------------
  row = table_start;
  columns.forEach(col => {
    doc.text(col.header, col.pos, row, col.align);
  });

  // Table-Items -----------------------------------------------------------------------------------
  doc.setLineWidth(lines.table_normal);
  invoice.items.forEach(item => {
    doc.line(left_border, row + 1, left_border + 164, row + 1);
    row += table_spacing / 2;
    columns.forEach(col => {
      doc.text(
        `${col.formatter ? col.formatter(item[col.dataKey]) : item[col.dataKey]} ${
          col.add_key ? item[col.add_key] : ''
        }`,
        col.pos,
        row,
        col.align
      );
    });
    row += table_spacing / 2;
    doc.text(item.description, columns[1].pos, row);
  });

  // Sums ------------------------------------------------------------------------------------------
  doc.setLineWidth(lines.table_total);
  doc.line(left_border, row + 1, left_border + 164, row + 1);
  row += table_spacing / 2;

  const table_footer_pos_left = columns[columns.length - 2].pos;
  const table_footer_pos_right = columns[columns.length - 1].pos;
  const table_footer_align = 'right';

  // Total net
  doc.text(`${i18n('invoice.services.tot_net')}:`, table_footer_pos_left, row, table_footer_align);
  doc.text(`${amountFormatter(invoice.tot_net)}`, table_footer_pos_right, row, table_footer_align);
  row += table_spacing / 2;

  // Total Tax
  doc.text(`${i18n('invoice.services.tot_vat')}:`, table_footer_pos_left, row, table_footer_align);
  doc.text(`${amountFormatter(invoice.tot_tax)}`, table_footer_pos_right, row, table_footer_align);
  row += table_spacing / 2;

  // Total gros
  doc.setFont(font.type, font.title_style);
  doc.text(`${i18n('invoice.services.tot_gros')}:`, table_footer_pos_left, row, table_footer_align);
  doc.text(`${amountFormatter(invoice.tot_gros)}`, table_footer_pos_right, row, table_footer_align);
  doc.setFont(font.type, 'normal');

  doc.line(left_border, row + 1, left_border + 164, row + 1);

  // Outro =========================================================================================
  const outro_spacing = 14; // After the table we only can put spacings
  row += outro_spacing;
  doc.text(
    i18n('invoice.outro', { till: dateTextFormatter(new Date(invoice.due_date)) }),
    left_border,
    row
  );

  // Thanks ========================================================================================
  const thanks_spacing = 19; // Spacing after the outro
  row += thanks_spacing;
  doc.text(i18n('invoice.thanks'), left_border, row);

  // Greetings =====================================================================================
  const greetings_spacing = 5; // Spacing to afte thanks
  row += greetings_spacing;
  doc.text(i18n('invoice.greetings'), left_border, row);

  // Name ==========================================================================================
  const name_spacing = 10; // Spacing after  greetings
  row += name_spacing;
  doc.text(invoice.user.name, left_border, row);

  // Role ==========================================================================================
  const role_spacing = 5; // Spacing after name
  if (invoice.user.role) {
    row += role_spacing;
    doc.text(invoice.user.role, left_border, row);
  }

  // Footer %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  const footer_spacing = 5; // spacing between footers
  const footer_start = 260; // Starting point in mm from the top

  // Footer left ===================================================================================
  row = footer_start + footer_spacing;

  // AMIV
  doc.text(i18n('amiv_eth'), left_border, row);
  row += footer_spacing;

  // MWST-No
  doc.text(i18n('invoice.mwst'), left_border, row);

  // Footer middle =================================================================================
  const middle_footer_col = 105; // start from the left border
  row = footer_start;

  // Street
  doc.text(i18n('street'), middle_footer_col, row, 'center');
  row += footer_spacing;

  // Room
  doc.text(i18n('cab'), middle_footer_col, row, 'center');
  row += footer_spacing;

  // City
  doc.text(i18n('zurich'), middle_footer_col, row, 'center');
  row += footer_spacing;

  // AMIv-Website
  doc.text(i18n('website'), middle_footer_col, row, 'center');

  // Footer right ==================================================================================
  const right_footer_col = 135; // start from the left border
  row = footer_start;

  // Bank Account
  doc.text(i18n('invoice.bank_acc'), right_footer_col, row);
  row += footer_spacing;

  // BLZ
  doc.text(i18n('invoice.blz'), right_footer_col, row);
  row += footer_spacing;

  // Bank
  doc.text(i18n('invoice.bank'), right_footer_col, row);
  row += footer_spacing;

  // IBAN
  doc.text(i18n('invoice.iban'), right_footer_col, row);
  row += footer_spacing;

  // BIC
  doc.text(i18n('invoice.bic'), right_footer_col, row);

  // Footer lines ==================================================================================
  const line_start = 255; // start from the top
  const line_end = 285; // end from the top
  const line_distance = 25; // distance from middle

  doc.setLineWidth(lines.footer);
  doc.line(
    middle_footer_col - line_distance,
    line_start,
    middle_footer_col - line_distance,
    line_end
  );
  doc.line(
    middle_footer_col + line_distance,
    line_start,
    middle_footer_col + line_distance,
    line_end
  );

  doc.save(`${invoice.nr}.pdf`);
  setLanguage(current_lang);
}
