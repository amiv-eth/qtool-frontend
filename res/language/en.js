export default {
  amiv: 'AMIV',
  amiv_eth: 'AMIV an der ETH',
  street: 'Universitätsstrasse 6 (CAB E37)',
  zurich: '8092 Zürich',
  address_full: '$t(amiv_eth), $t(street), $(zurich)',
  phone_no: '044 632 42 45',
  website: 'www.amiv.ethz.ch',

  phone: 'phone',
  email: 'email',
  date: 'date',

  currency: {
    chf: 'CHF',
  },

  position: {
    treasurer: 'treasurer',
  },

  invoice: {
    payment_within: 'to pay within',
    contact_person: 'Contact person',

    pronoun: {
      mr: 'Mr',
      ms: 'Ms',
      general: 'Madam or Sir',
    },

    invoice: 'invoice',
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
      'Please transfer the amount until {{till}} without deductions specifying the invoice number to our bank account given below',
    thanks: 'with our best thanks for your confidence',
    greetings: 'Kind regards',
    position: '{{pos}} - $t(amiv_eth)',

    mwst: 'MwStNr: CHE-218.868.772 MWST',
    bank_acc: 'Account: 80-3210-5',
    blz: 'Blz: 9000',
    bank: 'Bank: Die Schweizerische Post',
    iban: 'IBAN: CH80 0900 0000 8000 3210 5',
    bic: 'BIC: POFICHBEXXX',
  },
};
