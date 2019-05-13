export default {
  amiv: 'AMIV',
  amiv_eth: 'AMIV an der ETH',
  street: 'Universitätsstrasse 6 (CAB E37)',
  zurich: '8092 Zürich',
  address_full: '$t(amiv_eth), $t(street), $t(zurich)',
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
    greetings: 'Freundliche Grüsse',
    position: '{{pos}} - $t(amiv_eth)',

    mwst: 'MwStNr: CHE-218.868.772 MWST',
    bank_acc: 'Konto: 80-3210-5',
    blz: 'Blz: 9000',
    bank: 'Bank: Die Schweizerische Post',
    iban: 'IBAN: CH80 0900 0000 8000 3210 5',
    bic: 'BIC: POFICHBEXXX',
  },
};
