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

  phone: 'Telefon',
  email: 'E-Mail',
  date: 'Datum',

  currency: {
    chf: 'CHF',
  },

  position: {
    treasurer: 'Quästor',
  },

  invoice: {
    payment_within: 'Zahlungsziel',
    payment_within_duration: '30 Tage',
    contact_person: 'Kontaktperson',

    title: {
      mr: 'Herr',
      ms: 'Frau',
      comp: 'Firma',
      general: 'Damen und Herren',
    },

    invoice: 'Rechnung',
    no: 'Nr.',
    salutation: 'Sehr geehrte {{pronoun}}',
    salutation_male: 'Sehr geehrter $t(invoice.pronoun.mr)',

    intro:
      'Wir erlauben uns für die unten aufgeführten Leistungen folgenden Betrag in Rechnung zu stellen.',

    services: {
      pos: 'Pos',
      desc: 'Bezeichnung',
      qty: 'Menge',
      tax: 'Steuern %',
      unit_price: 'Einzelpreis $t(currency.chf)',
      tot: 'Total $t(currency.chf)',
      tot_net: 'Gesamt Netto $t(currency.chf)',
      tot_vat: 'Gesamt Steuer $t(currency.chf)',
      tot_gros: 'Gesamt Brutto $t(currency.chf)',
    },

    outro:
      'Bitte Überweisen Sie den Betrag bis am {{till}} ohne Abzüge unter Angabe der Rechnungsnummer \nauf unser unten aufgeführtes Bankkonto.',
    thanks: 'Besten Dank für Ihr Vertrauen.\n',
    greetings: 'Mit freundlichen Grüssen',
    position: '{{pos}} - $t(amiv_eth)',

    mwst: 'MwStNr: CHE-218.868.772 MWST',
    bank_acc: 'Konto: 80-3210-5',
    blz: 'Blz: 9000',
    bank: 'Bank: Die Schweizerische Post',
    iban: 'IBAN: CH80 0900 0000 8000 3210 5',
    bic: 'BIC: POFICHBEXXX',
  },

  months: {
    1: 'Januar',
    2: 'Februar',
    3: 'März',
    4: 'April',
    5: 'Mai',
    6: 'Juni',
    7: 'Juli',
    8: 'August',
    9: 'September',
    10: 'Oktober',
    11: 'November',
    12: 'Dezember',
  },
};
