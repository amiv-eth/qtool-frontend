export default {
  amiv: 'AMIV',
  amiv_eth: 'AMIV an der ETH',
  street: 'Universitätstrasse 6',
  cab: '(CAB E37)',
  zurich: '8092 Zürich',
  address_full: '$t(amiv_eth), $t(street) $t(cab), $t(zurich)',
  phone_no: '(+41) 44 632 42 45',
  website: 'www.amiv.ethz.ch',
  queastur_mail: 'questor@amiv.ethz.ch',

  phone: 'Phone',
  email: 'Mail',
  date: 'Date',

  currency: {
    chf: 'CHF',
  },

  position: {
    treasurer: 'treasurer',
  },

  invoice: {
    payment_within: 'To pay within',
    payment_within_duration: '30 Days',
    contact_person: 'Contact person',

    title: {
      mr: 'Mr',
      ms: 'Ms',
      comp: 'Company',
      general: 'Madam or Sir',
    },

    invoice: 'Invoice',
    no: 'No.',
    salutation: 'Dear {{pronoun}}',
    salutation_male: '$t(salutation)',

    intro: 'For the services listed below we do venture to invoice the following amount',

    services: {
      pos: 'Pos',
      desc: 'Description',
      qty: 'Quantity',
      tax: 'VAT %',
      unit_price: 'Unit price $t(currency.chf)',
      tot: 'Total $t(currency.chf)',
      tot_net: 'Total net $t(currency.chf)',
      tot_vat: 'Total VAT $t(currency.chf)',
      tot_gros: 'Total gros $t(currency.chf)',
    },

    outro:
      'Please transfer the amount until {{till}} without deductions specifying the invoice number \nto our bank account given below',
    thanks: 'With our best thanks for your confidence',
    greetings: 'Kind regards',
    position: '{{pos}} - $t(amiv_eth)',

    mwst: 'MwStNr: CHE-218.868.772 MWST',
    bank_acc: 'Account: 80-3210-5',
    blz: 'Blz: 9000',
    bank: 'Bank: Die Schweizerische Post',
    iban: 'IBAN: CH80 0900 0000 8000 3210 5',
    bic: 'BIC: POFICHBEXXX',
  },

  months: {
    1: 'Januay',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
  },
};