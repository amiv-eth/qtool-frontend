!(function(t) {
  function e(e) {
    for (var i, o, s = e[0], c = e[1], l = e[2], d = 0, h = []; d < s.length; d++)
      (o = s[d]), a[o] && h.push(a[o][0]), (a[o] = 0);
    for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (t[i] = c[i]);
    for (u && u(e); h.length; ) h.shift()();
    return r.push.apply(r, l || []), n();
  }
  function n() {
    for (var t, e = 0; e < r.length; e++) {
      for (var n = r[e], i = !0, s = 1; s < n.length; s++) {
        var c = n[s];
        0 !== a[c] && (i = !1);
      }
      i && (r.splice(e--, 1), (t = o((o.s = n[0]))));
    }
    return t;
  }
  var i = {},
    a = { 0: 0 },
    r = [];
  function o(e) {
    if (i[e]) return i[e].exports;
    var n = (i[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  (o.m = t),
    (o.c = i),
    (o.d = function(t, e, n) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (o.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (o.t = function(t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var i in t)
          o.d(
            n,
            i,
            function(e) {
              return t[e];
            }.bind(null, i)
          );
      return n;
    }),
    (o.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return o.d(e, 'a', e), e;
    }),
    (o.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = '/');
  var s = (window.webpackJsonp = window.webpackJsonp || []),
    c = s.push.bind(s);
  (s.push = e), (s = s.slice());
  for (var l = 0; l < s.length; l++) e(s[l]);
  var u = c;
  r.push([333, 1]), n();
})({
  154: function(t) {
    t.exports = {
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
      search: 'Suche',
      currency: { chf: 'CHF' },
      position: { treasurer: 'Quästor', default: 'Qtool-User' },
      button: {
        confirm: 'Bestätigen',
        print_all: 'Alles drucken',
        print_selected: 'Gewählte drucken',
        unselect_all: 'Auswahl löschen',
      },
      menu: {
        home: 'Home',
        receipt_form: 'Belegformular',
        test_list: 'Testliste',
        kst: 'Kostenstelle',
        kst_eval: 'KST-Auswertung',
        kst_fore: 'Prognose',
        test: 'Test',
        ezag: 'EZAG',
        invoice: 'Rechung',
        profile: 'Profil',
        logout: 'Logout',
        login: 'Login',
      },
      profile: { iban: 'IBAN' },
      transaction: {
        id: 'ID',
        desc: 'Beschreibung',
        category: 'Kategorie',
        budget_post: 'Budgetposten',
        payment_method: 'Zahlungsart',
        account: 'Account',
        currency: 'Währung',
        amount: 'Betrag',
        comment: 'Kommentar',
        amount_chf: 'Betrag in CHF',
        valid: 'gültig',
        name: 'Name',
        ezag: 'EZAG',
        code: 'Code',
        group: 'Gruppe',
        expenditure: 'Ausgabe',
        revenue: 'Ertrag',
        difference: 'Differenz',
        budgeted: 'budgetiert',
        confirmed: 'bestätigt',
        forecasted: 'prognostiziert',
        expenditure_budgeted: '$t(transaction.expenditure) $t(transaction.budgeted)',
        expenditure_confirmed: '$t(transaction.expenditure) $t(transaction.confirmed)',
        expenditure_calculated: '$t(transaction.expenditure) $t(transaction.forecasted)',
        revenue_budgeted: '$t(transaction.revenue) $t(transaction.budgeted)',
        revenue_confirmed: '$t(transaction.revenue) $t(transaction.confirmed)',
        revenue_calculated: '$t(transaction.revenue) $t(transaction.forecasted)',
        difference_budgeted: '$t(transaction.difference) $t(transaction.budgeted)',
        difference_confirmed: '$t(transaction.difference) $t(transaction.confirmed)',
        difference_calculated: '$t(transaction.difference) $t(transaction.forecasted)',
      },
      kst: {},
      invoice: {
        payment_within: 'Zahlungsziel',
        payment_within_duration: '30 Tage',
        contact_person: 'Kontaktperson',
        title: { mr: 'Herr', ms: 'Frau', comp: 'Firma', general: 'Damen und Herren' },
        invoice: 'Rechnung',
        no: 'Nr.',
        salutation: 'Sehr geehrte {{pronoun}}',
        salutation_male: 'Sehr geehrter $t(invoice.pronoun.mr)',
        intro:
          'Wir erlauben uns für die unten aufgeführten Leistungen folgenden Betrag in Rechnung zu stellen. \nBei Fragen melden Sie sich gerne.',
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
  },
  155: function(t) {
    t.exports = {
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
      search: 'Search',
      currency: { chf: 'CHF' },
      position: { treasurer: 'treasurer', default: 'Qtool-User' },
      button: {
        confirm: 'Confirm',
        print_all: 'Print all',
        print_selected: 'Print selected',
        unselect_all: 'Unselect all',
      },
      menu: {
        home: 'Home',
        receipt_form: 'Receipt form',
        test_list: 'Test list',
        kst: 'Cost center',
        kst_eval: 'C.C.- evaluation',
        kst_fore: 'Forecast',
        test: 'Test',
        ezag: 'EZAG',
        invoice: 'Invoice',
        profile: 'Profile',
        logout: 'Logout',
        login: 'Login',
      },
      profile: { iban: 'IBAN' },
      transaction: {
        id: 'ID',
        desc: 'Description',
        category: 'Category',
        budget_post: 'Cost center',
        payment_method: 'Payment method',
        account: 'Account',
        currency: 'Currency',
        amount: 'Amount',
        comment: 'Comment',
        amount_chf: 'Amount in CHF',
        valid: 'valid',
        name: 'Name',
        ezag: 'EZAG',
        code: 'Code',
        group: 'Group',
        expenditure: 'Expenditure',
        revenue: 'Revenue',
        difference: 'Difference',
        budgeted: 'budgeted',
        confirmed: 'confirmed',
        forecasted: 'forecasted',
        expenditure_budgeted: '$t(transaction.expenditure) $t(transaction.budgeted)',
        expenditure_confirmed: '$t(transaction.expenditure) $t(transaction.confirmed)',
        expenditure_calculated: '$t(transaction.expenditure) $t(transaction.forecasted)',
        revenue_budgeted: '$t(transaction.revenue) $t(transaction.budgeted)',
        revenue_confirmed: '$t(transaction.revenue) $t(transaction.confirmed)',
        revenue_calculated: '$t(transaction.revenue) $t(transaction.forecasted)',
        difference_budgeted: '$t(transaction.difference) $t(transaction.budgeted)',
        difference_confirmed: '$t(transaction.difference) $t(transaction.confirmed)',
        difference_calculated: '$t(transaction.difference) $t(transaction.forecasted)',
      },
      kst: {},
      invoice: {
        payment_within: 'To pay within',
        payment_within_duration: '30 Days',
        contact_person: 'Contact person',
        title: { mr: 'Mr', ms: 'Ms', comp: 'Company', general: 'Madam or Sir' },
        invoice: 'Invoice',
        no: 'No.',
        salutation: 'Dear {{pronoun}}',
        salutation_male: '$t(salutation)',
        intro:
          'For the services enlisted below we do venture to invoice the following amount. \nShould there be questions please contact us. ',
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
  },
  157: function(t, e, n) {
    t.exports = n.p + '832ad9048b065121e2be0dad631f3938.svg';
  },
  158: function(t, e, n) {
    t.exports = n.p + 'be427661171ffc2a384eed4e1763969b.svg';
  },
  161: function(t) {
    t.exports = {
      _declaration: { _attributes: { version: '1.0', encoding: 'UTF-8' } },
      Document: {
        _attributes: {
          'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
          xmlns: 'http://www.six-interbank-clearing.com/de/pain.001.001.03.ch.02.xsd',
          'xsi:schemaLocation':
            'http://www.six-interbank-clearing.com/de/pain.001.001.03.ch.02.xsd pain.001.001.03.ch.02.xsd',
        },
        CstmrCdtTrfInitn: {
          GrpHdr: {
            MsgId: { _text: null },
            CreDtTm: { _text: null },
            NbOfTxs: { _text: null },
            CtrlSum: { _text: null },
            InitgPty: { Nm: { _text: 'AMIV an der ETH' } },
          },
          PmtInf: {
            PmtInfId: { _text: null },
            PmtMtd: { _text: 'TRF' },
            BtchBookg: { _text: 'false' },
            ReqdExctnDt: { _text: null },
            Dbtr: { Nm: { _text: 'AMIV an der ETH' } },
            DbtrAcct: { Id: { IBAN: { _text: 'CH8009000000800032105' } } },
            DbtrAgt: { FinInstnId: { BIC: { _text: 'POFICHBEXXX' } } },
            CdtTrfTxInf: [],
          },
        },
      },
    };
  },
  162: function(t) {
    t.exports = {
      PmtId: { InstrId: { _text: null }, EndToEndId: { _text: null } },
      Amt: { InstdAmt: { _attributes: { Ccy: null }, _text: null } },
      CdtrAgt: { FinInstnId: { BIC: { _text: null } } },
      Cdtr: { Nm: { _text: null } },
      CdtrAcct: { Id: { IBAN: { _text: null } } },
    };
  },
  261: function(t, e) {},
  273: function(t, e) {},
  275: function(t, e) {},
  331: function(t, e, n) {
    var i = n(332);
    'string' == typeof i && (i = [[t.i, i, '']]);
    var a = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(95)(i, a);
    i.locals && (t.exports = i.locals);
  },
  332: function(t, e, n) {
    (t.exports = n(94)(!1)).push([
      t.i,
      ".mainmenu-template {\n  transition: background-color ease-in-out 300ms;\n}\n.mainmenu-template li.active {\n  background-color: #eee;\n}\n.mainmenu-template li.active > a {\n  color: #1f2d54;\n}\n.mainmenu-template li > a {\n  display: block;\n  height: calc(88px - 1px);\n  line-height: 88px;\n  padding: 0 1.3em;\n  color: #fff;\n  text-decoration: none;\n}\n.mainmenu-template li > a:hover {\n  color: #e8462b;\n}\n.mobile-menu-icon {\n  display: inline-block;\n  cursor: pointer;\n}\n.mobile-menu-icon div {\n  width: 35px;\n  height: 5px;\n  background-color: #fff;\n  margin: 6px 0;\n  transition: 0.4s;\n}\n.mobile-menu-icon.change .bar1 {\n  transform: rotate(-45deg) translate(-9px, 6px);\n}\n.mobile-menu-icon.change .bar2 {\n  opacity: 0;\n}\n.mobile-menu-icon.change .bar3 {\n  transform: rotate(45deg) translate(-8px, -8px);\n}\nheader {\n  background-color: #1f2d54;\n  margin-bottom: 5px;\n  grid-area: header;\n  display: block;\n  width: 100%;\n  font-size: 1.2em;\n  z-index: 1000;\n}\nheader nav {\n  padding: 0 1em;\n  margin: 0 auto;\n  display: grid;\n  grid-area: navigation;\n  min-height: 88px;\n}\n@media screen and (min-width: 1281px), screen and (min-width: 1077px) and (max-width: 1280px) {\n  header nav {\n    grid-template-columns: auto 1fr auto auto auto;\n    grid-template-areas: 'logo main-navigation profile language-selector';\n    max-width: 1280px;\n  }\n}\n@media screen and (min-width: 921px) and (max-width: 1076px) {\n  header nav {\n    grid-template-columns: auto 1fr auto auto;\n    grid-template-areas: 'logo main-navigation profile language-selector';\n    font-size: 0.7em;\n  }\n}\n@media screen and (max-width: 920px) {\n  header nav {\n    grid-template-columns: 1fr auto;\n    grid-template-areas: 'logo mobile-menu' 'main-navigation main-navigation' 'profile profile' 'language-selector language-selector';\n    height: auto;\n    max-height: 88px;\n    transition: max-height ease-in-out 500ms;\n    align-items: center;\n    overflow: hidden;\n  }\n  header nav.expanded {\n    max-height: 1000px;\n  }\n}\nheader .logo {\n  grid-area: logo;\n  height: 88px;\n}\n@media screen and (max-width: 920px) {\n  header .logo {\n    height: 88px;\n  }\n}\nheader .logo img {\n  height: 100%;\n}\nheader ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n@media screen and (max-width: 920px) {\n  header ul {\n    width: 100%;\n  }\n}\nheader ul li {\n  display: inline-block;\n}\n@media screen and (max-width: 920px) {\n  header ul li {\n    width: 100%;\n    height: auto;\n    text-align: center;\n    border-bottom: 1px solid #eee;\n  }\n}\n.phantomElement {\n  height: 1px;\n}\nheader ul.mainmenu {\n  transition: background-color ease-in-out 300ms;\n  grid-area: main-navigation;\n}\nheader ul.mainmenu li.active {\n  background-color: #eee;\n}\nheader ul.mainmenu li.active > a {\n  color: #1f2d54;\n}\nheader ul.mainmenu li > a {\n  display: block;\n  height: calc(88px - 1px);\n  line-height: 88px;\n  padding: 0 1.3em;\n  color: #fff;\n  text-decoration: none;\n}\nheader ul.mainmenu li > a:hover {\n  color: #e8462b;\n}\n@media screen and (max-width: 920px) {\n  header ul.mainmenu {\n    transition: none;\n  }\n}\nheader ul.mainmenu > li.active {\n  height: auto;\n  background-color: #eee;\n  transition: none;\n}\nheader ul.mainmenu > li.active .phantomElement {\n  height: 2.5em;\n  display: block;\n  width: 100%;\n}\n@media screen and (max-width: 920px) {\n  header ul.mainmenu > li.active .phantomElement {\n    display: none;\n  }\n}\nheader ul.mainmenu > li.active > ul.submenu {\n  display: block;\n  visibility: visible;\n  height: 2.5em;\n  transition: none !important;\n  transition-duration: 0ms !important;\n  transition-delay: 0ms !important;\n  z-index: 1005;\n}\n@media screen and (min-width: 1281px), screen and (min-width: 1077px) and (max-width: 1280px), screen and (min-width: 921px) and (max-width: 1076px) {\n  header ul.mainmenu > li:hover ul.submenu {\n    visibility: visible;\n    height: 2.5em;\n  }\n}\nheader ul.mainmenu li > a {\n  display: block;\n  padding: 0 1.3em;\n  color: #fff;\n  text-decoration: none;\n}\nheader ul.mainmenu li > a:hover {\n  color: #e8462b;\n}\nheader ul.submenu {\n  display: block;\n  visibility: hidden;\n  height: 0;\n}\n@media screen and (min-width: 1281px), screen and (min-width: 1077px) and (max-width: 1280px), screen and (min-width: 921px) and (max-width: 1076px) {\n  header ul.submenu {\n    position: absolute;\n    top: 88px;\n    left: 0;\n    width: 100%;\n    text-align: center;\n    background-color: #eee;\n    z-index: 1010;\n    overflow-y: hidden;\n    transition-delay: 150ms;\n    transition-property: height;\n    transition-duration: 150ms;\n    transform-style: flat;\n  }\n}\n@media screen and (max-width: 920px) {\n  header ul.submenu {\n    display: none;\n    background-color: #fff;\n  }\n}\n@media screen and (max-width: 920px) {\n  header ul.submenu li {\n    background-color: #fff;\n  }\n}\nheader ul.submenu li.active {\n  background-color: transparent;\n}\n@media screen and (max-width: 920px) {\n  header ul.submenu li.active {\n    background-color: #fff;\n  }\n}\nheader ul.submenu li.active > a {\n  color: #e8462b;\n}\nheader ul.submenu li:hover > a {\n  color: #e8462b;\n}\nheader ul.submenu li > a {\n  display: block;\n  height: 2.5em;\n  line-height: 2.5em;\n  padding: 0 0.5em;\n  color: #000;\n  text-decoration: none;\n}\nheader ul.profile {\n  transition: background-color ease-in-out 300ms;\n  grid-area: profile;\n}\nheader ul.profile li.active {\n  background-color: #eee;\n}\nheader ul.profile li.active > a {\n  color: #1f2d54;\n}\nheader ul.profile li > a {\n  display: block;\n  height: calc(88px - 1px);\n  line-height: 88px;\n  padding: 0 1.3em;\n  color: #fff;\n  text-decoration: none;\n}\nheader ul.profile li > a:hover {\n  color: #e8462b;\n}\nheader ul.profile > span {\n  display: none;\n}\n@media screen and (max-width: 920px) {\n  header ul.profile li:last-of-type {\n    border-bottom: none;\n  }\n  header ul.profile .profilePicture {\n    display: none;\n  }\n  header ul.profile a {\n    padding: 0 !important;\n    display: inline;\n  }\n  header ul.profile span {\n    display: inline-block;\n  }\n}\nheader .language-selector {\n  grid-area: language-selector;\n  height: 88px;\n  line-height: 88px;\n  text-align: center;\n}\n@media screen and (max-width: 920px) {\n  header .language-selector {\n    border-top: 1px solid #eee;\n  }\n}\nheader .mobile-menu {\n  grid-area: mobile-menu;\n  display: none;\n}\n@media screen and (max-width: 920px) {\n  header .mobile-menu {\n    display: block;\n  }\n}\n.tableItem {\n  padding: 1em 0;\n}\n.tableTile {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.tableItem.red {\n  background: #F78181;\n}\n.tableItem.green {\n  background: #58FA82;\n}\n.profile-container {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 1.5em;\n  border: none;\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n.profile-container .info-container {\n  grid-column: 1 / 7;\n  grid-row: 1 / 2;\n  background-image: linear-gradient(#eee, #fff);\n  justify-content: space-between;\n}\n.profile-container .info-container .user {\n  width: 50%;\n  display: inline-block;\n  box-sizing: border-box;\n  text-align: left;\n  padding: 1em;\n  font-size: x-large;\n}\n.profile-container .info-container .user .email {\n  font-size: 0.75em;\n}\n.profile-container .info-container .amiv {\n  width: 50%;\n  display: inline-block;\n  box-sizing: border-box;\n  text-align: right;\n  font-size: large;\n  padding: 1em;\n}\n.profile-container .groups {\n  grid-column: 4 / 7;\n  grid-row: 2 / 3;\n}\n@media screen and (max-width: 920px) {\n  .profile-container .groups {\n    grid-column: 1 / 7;\n    grid-row: 3 / 4;\n  }\n}\n.profile-container .groups > div {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n}\n.profile-container .groups .list {\n  padding: 0 1em 1em;\n  max-height: 13em;\n  overflow-y: auto;\n}\n.profile-container .groups .list .group-item {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr auto auto;\n  grid-template-areas: 'text expiry button';\n  grid-gap: 0.5em;\n  align-items: center;\n}\n.profile-container .groups .list .group-item:first-of-type {\n  margin-top: 1em;\n}\n.profile-container .groups .list .group-item .name {\n  grid-area: text;\n}\n.profile-container .groups .list .group-item .expiry,\n.profile-container .groups .list .group-item .confirm {\n  grid-area: expiry;\n}\n.profile-container .groups .list .group-item .enroll,\n.profile-container .groups .list .group-item .withdraw,\n.profile-container .groups .list .group-item .cancel {\n  grid-area: button;\n}\n.profile-container .groups .list .no-items {\n  text-align: center;\n  padding: 3em 1em;\n}\n.profile-container .settings {\n  grid-column: 1 / 4;\n  grid-row: 2 / 3;\n}\n@media screen and (max-width: 920px) {\n  .profile-container .settings {\n    grid-column: 1 / 7;\n    grid-row: 2 / 3;\n  }\n}\n.profile-container .settings .newsletter,\n.profile-container .settings .sessions {\n  padding: 1em;\n}\n.profile-container .settings .iban {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  grid-gap: 1em;\n  padding: 0 1em 1em;\n}\n.profile-container .settings .iban .infobox {\n  grid-column: 1 / 3;\n}\n.profile-container .settings .change-password {\n  padding: 0 1em 1em;\n}\n.profile-container .settings .public-groups {\n  grid-column: 4 / 7;\n  grid-row: 4 / 5;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  grid-template-columns: repeat(3, 1fr);\n}\nbody {\n  padding: 0;\n  margin: 0;\n}\n.fs {\n  max-width: 100%;\n  width: 100%;\n}\n.layout {\n  margin: 10px auto;\n  max-width: 1000px;\n}\n.menu {\n  margin: 0 0 30px;\n}\n.user-list {\n  list-style: none;\n  margin: 0 0 10px;\n  padding: 0;\n}\n.user-list-item {\n  background: #fafafa;\n  border: 1px solid #ddd;\n  color: #333;\n  display: block;\n  margin: 0 0 1px;\n  padding: 8px 15px;\n  text-decoration: none;\n}\n.user-list-item:hover {\n  text-decoration: underline;\n}\n.label {\n  display: block;\n  margin: 0 0 5px;\n}\n.input {\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  box-sizing: border-box;\n  display: block;\n  margin: 0 0 10px;\n  padding: 10px 15px;\n  width: 100%;\n}\n.button {\n  background: #eee;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  color: #333;\n  display: inline-block;\n  margin: 0 0 10px;\n  padding: 10px 15px;\n  text-decoration: none;\n}\n.button:hover {\n  background: #e8e8e8;\n}\n",
      '',
    ]);
  },
  333: function(t, e, n) {
    'use strict';
    n.r(e);
    n(15);
    var i = n(0),
      a = n.n(i),
      r = n(334),
      o = (n(57), n(206), n(166)),
      s = (n(113), n(36), n(51), n(76), n(151));
    const c = n.n(s)()({ name: 'qTool-Logger', level: 'warn', timestamp: !0 });
    function l(t, e) {
      if (void 0 === t || void 0 === e) return;
      let n = t;
      return (
        e.split('.').forEach(t => {
          try {
            n = n[t];
          } catch (t) {
            c.warn('Probably a nested key was defined but no fitting data was found'), c.warn(t);
          }
        }),
        n
      );
    }
    class u {
      constructor() {
        c.debug('Constructing new main-page');
      }
      static view() {
        return a()('h1', 'Welcome to qtool!');
      }
    }
    n(25);
    var d = n(335),
      h = (n(83), n(29)),
      g = n(153),
      m = n.n(g),
      p = n(154),
      f = n(155);
    function y() {
      document.documentElement.setAttribute('lang', h.a.language);
    }
    function b() {
      h.a
        .use(m.a)
        .init({
          fallbackLng: 'de',
          whitelist: ['en', 'de'],
          nsSeparator: !1,
          initImmediate: !1,
          detection: {
            order: ['path', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
            lookupCookie: 'language',
            lookupLocalStorage: 'language',
            lookupFromPathIndex: 0,
          },
          resources: { en: { translation: f }, de: { translation: p } },
        })
        .then(() => {
          y();
        });
    }
    function w() {
      return h.a.language || b(), h.a.language;
    }
    function v(t) {
      h.a.changeLanguage(t),
        y(),
        a.a.route.set('/'.concat(w()).concat(a.a.route.get().substring(3)));
    }
    function x(t) {
      const e = w() !== t;
      return h.a.changeLanguage(t), e;
    }
    function M(t) {
      let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return e ? h.a.t(t, e) : h.a.t(t);
    }
    function k(t) {
      if (null == t) return t;
      const e = t.toFixed(2);
      return 0 === e ? '0.00' : e;
    }
    function L(t) {
      return ''
        .concat(t.getDate(), '. ')
        .concat(M('months.'.concat(t.getMonth() + 1)), ' ')
        .concat(t.getFullYear());
    }
    c.debug('Initializing language');
    const T = { static: 0, plain: 1, number: 2, drop: 3 };
    class z {
      constructor(t) {
        let e = t.attrs,
          n = e.controller,
          i = e.fields,
          a = void 0 !== i && i,
          r = e.buttons,
          o = void 0 !== r && r;
        c.debug('Constructing new FormView with fields '.concat(a, ' and buttons ').concat(o)),
          (this.controller = n),
          (this.fields = a),
          (this.buttons = o),
          (this.result = new Map());
      }
      async oninit() {
        const t = this.fields.filter(t => t.type === T.drop);
        t.forEach(t => {
          this.result.set(t.attr_key, []);
        });
        const e = [];
        t.forEach(t => {
          e.push(
            this.controller.getDropDownData(t.attr_key).then(e => {
              this.result.set(t.attr_key, e);
            })
          );
        }),
          await Promise.all(e),
          a.a.redraw();
      }
      getTextField(t, e) {
        let n = '';
        return (
          e === T.plain ? (n = 'text') : n === T.number && (n = 'number'),
          a()('input.form-control[type='.concat(n, ']'), {
            oninput: a.a.withAttr('value', e => {
              this.controller.setData(t, e);
            }),
            value: this.controller.getData(t),
          })
        );
      }
      getDropDown(t) {
        return a()(
          'select',
          {
            onchange: a.a.withAttr('value', e => {
              this.controller.setData(t, e);
            }),
          },
          this.result
            .get(t)
            .map(t => a()('option', { value: t.key, style: t.style ? t.style : '' }, t.text))
        );
      }
      getInputField(t, e) {
        return t === T.plain || t === T.number
          ? this.getTextField(e, t)
          : t === T.drop
          ? this.getDropDown(e)
          : t === T.static
          ? ''
          : (console.log('no correct Type for that field given'),
            a()('div', 'no correct type for that field given'));
      }
      getButtons() {
        return this.buttons
          ? this.buttons.map(t =>
              a()(o.a, {
                className: 'blue-button',
                border: !0,
                label: M(t.label_key),
                events: {
                  onclick: () => {
                    t.onclick();
                  },
                },
              })
            )
          : '';
      }
      view() {
        return a()('div.formtool', { style: { height: '100%', 'background-color': 'white' } }, [
          a()(d.a, { className: 'toolbar', compact: !0, content: [this.getButtons()] }),
          a()(
            'div.form',
            this.fields
              ? this.fields.map(t =>
                  a()('div.field', [
                    a()('div.field.desc', M(t.label_key)),
                    this.getInputField(t.type, t.attr_key),
                  ])
                )
              : 'Please reconsider using a form'
          ),
        ]);
      }
    }
    class N {
      constructor(t) {
        c.debug('Constructing new FormController with inputfields: '.concat(t)),
          (this.inputFields = t),
          (this.formData = {}),
          this.inputFields.forEach(t => {
            this.formData[t.attr_key] = t.value;
          });
      }
      setData(t, e) {
        this.formData[t] = e;
      }
      getData(t) {
        return this.formData[t];
      }
      async getDropDownData(t) {
        const e = this.inputFields.find(e => e.attr_key === t),
          n = e.endpoint;
        let i = [];
        try {
          i = await n.getFullList({ sort: 'default' });
        } catch (t) {
          console.log(t);
        }
        if (0 === i.length) return [{ value: 'None', key: void 0 }];
        const a = i.items[0][e.value_key];
        return (
          (this.formData[e.attr_key] = a),
          i.items.map(t => {
            const n = t[e.text_key];
            return t[e.value_key] === a
              ? { style: { selected: 'selected' }, key: t[e.value_key], text: n }
              : { key: t[e.value_key], text: n };
          })
        );
      }
    }
    n(61), n(84);
    var j = {
        transaction: {
          path: 'Transaction/transaction',
          search_keys: [
            'financial_year',
            'date',
            'description',
            'amount',
            'amount_in_chf',
            'user.name',
            'type.type_name',
            'category.category_name',
            'budgetitem.budgetitem_name',
            'budgetitem.budgetitem_code',
          ],
          default_sort: 'id.asc',
          embedded: ['user', 'category', 'budgetitem', 'type', 'currency'],
        },
        transaction_budgetitem: {
          path: 'Budget/item',
          default_sort: 'budgetitem_code.asc',
          unique_id: 'budgetitem_id',
          search_keys: ['budgetitem_code', 'budgetitem_name'],
        },
        transaction_category: { path: 'utility/category' },
        transaction_type: { path: 'utility/type' },
        transaction_account: { path: 'utility/account' },
        transaction_currency: { path: 'utility/currency' },
        user: { path: 'People/user' },
      },
      D = (n(252), n(253), n(97)),
      I = n.n(D);
    class _ {
      constructor(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t => t;
        (this.baseUrl = t),
          (this.headers = e),
          (this.headers['Content-Type'] = 'application/json'),
          (this.headers.Accept = 'application/json'),
          c.debug('Constructing new session with baseUrl '.concat(t, ' and header ').concat(e)),
          (this.errorCallback = function(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return (
              c.error(
                'Error resolving following request: '
                  .concat(e || '', ' Message: ')
                  .concat('Error' === String(t) ? 'No good Message given, API might be down' : t)
              ),
              n(t)
            );
          });
      }
      get(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const n = 'GET-request to '
          .concat(this.baseUrl, '/')
          .concat(t)
          .concat(e ? '?'.concat(e) : '');
        return (
          c.info(n),
          a.a
            .request({
              method: 'GET',
              url: ''
                .concat(this.baseUrl, '/')
                .concat(t)
                .concat(e ? '?'.concat(e) : ''),
              headers: this.headers,
            })
            .catch(t => this.errorCallback(t, n))
            .then(t => t)
        );
      }
      post(t, e) {
        const n = 'POST-request to '
          .concat(this.baseUrl, '/')
          .concat(t, ' payload: ')
          .concat(JSON.stringify(e));
        return (
          c.info(n),
          a.a
            .request({
              method: 'POST',
              url: ''.concat(this.baseUrl, '/').concat(t),
              data: e,
              headers: this.headers,
            })
            .catch(t => this.errorCallback(t, n))
        );
      }
      delete(t) {
        const e = 'DELETE-request to '.concat(this.baseUrl, '/').concat(t);
        return (
          c.info(e),
          a.a
            .request({
              method: 'GET',
              url: ''.concat(this.baseUrl, '/').concat(t),
              headers: this.headers,
            })
            .catch(t => this.errorCallback(t, e))
        );
      }
      patch(t, e) {
        const n = 'PATCH-request to '
          .concat(this.baseUrl, '/')
          .concat(t, ' payload: ')
          .concat(JSON.stringify(e));
        return (
          c.info(n),
          a.a
            .request({
              method: 'PATCH',
              url: ''.concat(this.baseUrl, '/').concat(t),
              headers: this.headers,
              data: e,
            })
            .catch(t => this.errorCallback(t, n))
        );
      }
    }
    var C = {
      qtool_api_url: 'localhost',
      qtool_api_port: '5000',
      qtool_api_address() {
        return 'http://'.concat(this.qtool_api_url, ':').concat(this.qtool_api_port);
      },
      amiv_api_address: 'https://api-dev.amiv.ethz.ch',
      own_url: 'http://localhost:9000',
      oAuthID: 'Local Tool',
    };
    function A(t) {
      c.info('reading key: '.concat(t, ' to loacal storage'));
      const e = window.sessionStorage.getItem('glob-'.concat(t));
      return e && '' !== e ? e : window.localStorage.getItem('glob-'.concat(t));
    }
    function O(t) {
      c.info('removing key: '.concat(t, ' to loacal storage')),
        window.sessionStorage.getItem('glob-'.concat(t)) &&
          window.sessionStorage.removeItem('glob-'.concat(t)),
        window.localStorage.getItem('glob-'.concat(t)) &&
          window.localStorage.removeItem('glob-'.concat(t));
    }
    function S(t, e) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      c.info('setting key: '.concat(t, ' to ').concat(e, ' in loacal storage')),
        n
          ? window.sessionStorage.setItem('glob-'.concat(t), e)
          : window.localStorage.setItem('glob-'.concat(t), e);
    }
    c.debug('Initializing Authentication');
    const E = {
      authenticated: !1,
      amiv_token: '',
      qtool_token: '',
      nethz: '',
      id: 0,
      rights: { beleg: [], invoice: [], user: [] },
    };
    let P = 0,
      H = new I.a({
        clientId: C.oAuthID,
        authorizationUri: ''.concat(C.amiv_api_address, '/oauth'),
        redirectUri: ''.concat(C.own_url, '/oauthcallback'),
      });
    function U() {
      (E.authenticated = !1),
        (E.amiv_token = ''),
        (E.qtool_token = ''),
        (E.nethz = ''),
        (E.id = 0),
        (E.rights = {}),
        O('amiv_token'),
        O('qtool_token');
    }
    async function V() {
      return (async function() {
        return new _(C.amiv_api_address, { Authorization: E.amiv_token }).delete(
          'sessions/'.concat(E.amiv_token)
        );
      })()
        .then(() => {
          U(), console.log(E), a.a.route.set('/');
        })
        .catch(() => {
          U(), console.log(E), a.a.route.set('/');
        });
    }
    function F() {
      let t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.pathname;
      console.log('Logging in'),
        (H = new I.a({
          clientId: C.oAuthID,
          authorizationUri: ''.concat(C.amiv_api_address, '/oauth'),
          redirectUri: ''.concat(C.own_url, '/oauthcallback').concat(t ? '?redir='.concat(t) : ''),
        })),
        window.location.replace(H.token.getUri());
    }
    function B(t) {
      return new _(C.qtool_api_address(), { 'X-AMIV-API-TOKEN': t }, () => !1).get(
        'Session/session'
      );
    }
    async function W() {
      let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (E.authenticated) return !0;
      const e = new Date();
      if (t || e.getTime() - P > 5e3) {
        const t = A('amiv_token');
        let e = A('qtool_token');
        if ('' === t) return !1;
        const i = await ((n = t),
        new _(C.amiv_api_address, { Authorization: n }, () => !1)
          .get('sessions/'.concat(n))
          .then(() => !0));
        i && (E.amiv_token = t);
        let a = await B(e);
        i &&
          !a &&
          (await (async function() {
            return E.amiv_token
              ? new _(C.qtool_api_address(), {})
                  .post('Session/session', { amivapi_session_token: E.amiv_token }, () =>
                    console.log('errorrrr')
                  )
                  .then(t => (S('qtool_token', t.qtool_session_token), t))
              : null;
          })(),
          (e = A('qtool_token')),
          (a = await B(e)));
        const r = new Date();
        if (((P = r.getTime()), i && a))
          return (
            (E.qtool_token = e),
            (E.nethz = a[0].nethz ? a[0].nethz : a.nethz),
            (E.id = a[0].user_id ? a[0].user_id : a.user_id),
            (E.authenticated = !0),
            !0
          );
      }
      var n;
      return !1;
    }
    async function q() {
      return (
        (await W()) || F(),
        new _(C.qtool_api_address(), { 'X-AMIV-API-TOKEN': E.qtool_token }, t => {
          console.log(t), W(!0);
        })
      );
    }
    async function Z() {
      if (await W()) return E.id;
    }
    class J {
      constructor(t) {
        (this.resource = t),
          c.debug('Constructing new session with baseUrl '.concat(this.resource)),
          (this.conf = j[this.resource]);
      }
      getSort(t) {
        if ('sort' in t && t.sort && t.sort.length > 0) {
          if ('default' === t.sort && this.conf.default_sort) return this.conf.default_sort;
          if ('default' !== t.sort) return t.sort;
        }
      }
      buildQueryString(t) {
        const e = Object.keys(t);
        if (0 === e.length) return '';
        const n = {};
        if (this.conf.embedded && 0 !== this.conf.embedded.length) {
          let t = '{';
          this.conf.embedded.forEach(e => {
            t += "'".concat(e, "':1, ");
          }),
            (t = t.substring(0, t.length - 2)),
            (t += '}'),
            (n.embedded = t);
        }
        if (
          ((n.sort = this.getSort(t) || {}),
          'search' in t && t.search && t.search.length > 0 && this.conf.search_keys)
        ) {
          let e = t.search.length > 1 ? "{'and': [" : '';
          t.search.forEach(t => {
            if (t.length > 0) {
              let n = "{'or': [";
              Object.values(this.conf.search_keys).forEach(e => {
                n = ''
                  .concat(n, "{'")
                  .concat(e, ".in': '")
                  .concat(t, "'}, ");
              }),
                (e += n += ']},');
            }
          }),
            (e = e.substring(0, e.length - 1)),
            (e += t.search.length > 1 ? ']}' : ''),
            (n.where = e);
        }
        return (
          e
            .filter(t => 'sort' !== t && 'search' !== t)
            .forEach(e => {
              n[e] = JSON.stringify(t[e]);
            }),
          a.a.buildQueryString(n)
        );
      }
      get() {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return q().then(e => e.get(this.conf.path, t ? this.buildQueryString(t) : null));
      }
      getId(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return q().then(n =>
          n.get(''.concat(this.conf.path, '/').concat(t), e ? this.buildQueryString(e) : null)
        );
      }
      post(t) {
        return q().then(e => e.post(this.conf.path, t));
      }
      patch(t, e) {
        return (
          c.debug('patching', t, e),
          q().then(n => n.patch(''.concat(this.conf.path, '/').concat(t), e))
        );
      }
    }
    class K extends N {
      constructor(t) {
        c.debug('Constructing new BelegFormController with inputfields '.concat(t)),
          super(t),
          (this.transaction_resource = new J('transaction'));
      }
      submit() {
        this.transaction_resource.post(this.formData);
      }
    }
    class Y extends J {
      constructor(t) {
        c.debug('Constructing new DataListController'), super(t);
      }
      async getItems() {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const e = await this.get(t);
        return (
          e.items.forEach(t => {
            t.unique_id = this.conf.unique_id ? t[this.conf.unique_id] : t.id;
          }),
          e
        );
      }
      async getFullList() {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const e = t ? JSON.parse(JSON.stringify(t)) : {};
        e.page = 1;
        let n = {};
        try {
          n = await this.get(e);
        } catch (t) {
          console.log(t);
        }
        const i = {};
        (i.meta = n.meta), (i.items = []);
        const a = { 1: n },
          r = [],
          o = i.meta.last_page;
        for (let t = 2; t <= o; t += 1) {
          const n = JSON.parse(JSON.stringify(e));
          (n.page = t),
            r.push(
              this.get(n).then(e => {
                a[t] = e;
              })
            );
        }
        try {
          await Promise.all(r);
        } catch (t) {
          console.log(t);
        }
        for (let t = 1; t <= o; t += 1) i.items = i.items.concat(a[t].items);
        return (i.meta = a[o].meta), i;
      }
      async getIds(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const n = e ? JSON.parse(JSON.stringify(e)) : {};
        if (0 === t.length) return [];
        if (1 === t.length) return [await this.getId(t, n)];
        let i = [];
        const a = { 0: await this.getId(t[0], n) },
          r = [],
          o = t.length;
        for (let e = 1; e < o; e += 1)
          r.push(
            this.getId(t[e], n).then(t => {
              a[e] = t;
            })
          );
        await Promise.all(r);
        for (let t = 0; t < o; t += 1) i = i.concat(a[t]);
        return i;
      }
    }
    class R {
      constructor(t, e, n) {
        c.debug(
          'Constructing new BaseTable with inputfields '.concat(e, ' and buttons ').concat(n)
        ),
          (this.buttons = n.map(t => ({ label_key: M(t.label_key) }))),
          (this.fields_view_data = []),
          (this.fields_ctrl_data = []),
          e.forEach(t => {
            this.fields_ctrl_data.push({
              endpoint: t.endpoint,
              attr_key: t.attr_key,
              value_key: t.value_key,
              text_key: t.text_key,
              value: t.value,
            }),
              this.fields_view_data.push({
                label_key: t.label_key,
                type: t.type,
                attr_key: t.attr_key,
              });
          }),
          (this.ctrl = new t(this.fields_ctrl_data));
      }
      view() {
        return a()(z, {
          controller: this.ctrl,
          fields: this.fields_view_data,
          buttons: this.buttons,
        });
      }
    }
    const Q = [
        { label_key: 'transaction.desc', type: T.plain, attr_key: 'description' },
        {
          label_key: 'transaction.category',
          type: T.drop,
          endpoint: new Y('transaction_category'),
          attr_key: 'category_id',
          value_key: 'category',
          text_key: 'category_name',
        },
        {
          label_key: 'transaction.budget_post',
          type: T.drop,
          endpoint: new Y('transaction_budgetitem'),
          attr_key: 'budgetitem_id',
          value_key: 'budgetitem_id',
          text_key: 'budgetitem_name',
        },
        {
          label_key: 'transaction.payment_method',
          type: T.drop,
          endpoint: new Y('transaction_type'),
          attr_key: 'type_id',
          value_key: 'type_id',
          text_key: 'type_name',
        },
        {
          label_key: 'transaction.account',
          type: T.drop,
          endpoint: new Y('transaction_account'),
          attr_key: 'account_id',
          value_key: 'account',
          text_key: 'account_name',
        },
        {
          label_key: 'transaction.currency',
          type: T.drop,
          endpoint: new Y('transaction_currency'),
          attr_key: 'currency_id',
          value_key: 'currency_id',
          text_key: 'currency_name',
        },
        { label_key: 'transaction.amount', type: T.number, attr_key: 'amount' },
        { label_key: 'transaction.comment', type: T.plain, attr_key: 'comment' },
        { type: T.static, attr_key: 'financial_year', value: 2019 },
        { type: T.static, attr_key: 'is_valid', value: !0 },
        { type: T.static, attr_key: 'user_id', value: 101 },
        { type: T.static, attr_key: 'amount_in_chf', value: 4242 },
      ],
      X = [{ label_key: 'button.confirm' }];
    var G = n(28),
      $ = n.n(G),
      tt = n(53),
      et = n.n(tt);
    n(268);
    function nt(t, e) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'table',
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const a = new et.a({ orientation: 'landscape' }),
        r = new Map(),
        o = [];
      t.forEach((t, e) => {
        r.set(e, t.dataKey), o.push({ header: M(t.header_key), dataKey: e });
      });
      const s = [];
      e.forEach(t => {
        const e = {};
        r.forEach((n, i) => {
          (e[i] = l(t, n)), e[i] || (e[i] = 'not defined');
        }),
          s.push(e);
      }),
        a.autoTable({
          margin: { top: 20 },
          unit: 'mm',
          body: s,
          columns: o,
          tableLineColor: 0,
          tableLineWidth: 1,
          styles: { lineColor: 0, lineWidth: 0.3 },
          headStyles: { fillColor: [232, 70, 43] },
          bodyStyles: { fillColor: 255 },
          alternateRowStyles: { fillColor: 255 },
          didDrawPage(t) {
            a.setFontSize(15),
              a.setTextColor(0),
              a.setFontStyle('normal'),
              i && a.text(i, t.settings.margin.left + 15, 15);
            let e = 'Seite '.concat(a.internal.getNumberOfPages());
            'function' == typeof a.putTotalPages &&
              (e = ''.concat(e, ' / ').concat('{total_pages_count_string}')),
              a.setFontSize(10);
            const n = a.internal.pageSize,
              r = n.height ? n.height : n.getHeight();
            a.text(e, t.settings.margin.left, r - 10);
          },
        }),
        'function' == typeof a.putTotalPages && a.putTotalPages('{total_pages_count_string}'),
        a.save(''.concat(n, '.pdf'));
    }
    c.debug('Initializing pdf table');
    class it {
      constructor(t) {
        c.debug('Constructing new TableController with endpoints: '.concat(t)),
          (this.stateCounter = $()(0)),
          (this.endpoint = t),
          (this.totalPages = null),
          (this.selected = []),
          (this.query = { sort: 'default', search: '' });
      }
      refresh() {
        this.stateCounter(this.stateCounter() + 1), a.a.redraw();
      }
      infiniteScrollParams(t) {
        return {
          item: t,
          pageData: t => this.getPageData(t),
          pageKey: t => ''.concat(t, '-').concat(this.stateCounter()),
          maxPages: this.totalPages ? this.totalPages : void 0,
        };
      }
      async getPageData(t) {
        const e = JSON.parse(JSON.stringify(this.query));
        e.page = t;
        const n = await this.endpoint.getItems(e);
        return (this.totalPages = n.meta.last_page), n.items;
      }
      setSearch(t) {
        (t.length >= 3 || '' !== this.query.search) &&
          (t.length >= 3 ? (this.query.search = t.split(' ')) : (this.query.search = ''),
          this.refresh());
      }
      setFilter(t) {
        (this.filter = t), this.refresh();
      }
      setSort(t) {
        this.sort === ''.concat(t, '.asc')
          ? (this.sort = ''.concat(t, '.desc'))
          : (this.sort = ''.concat(t, '.asc')),
          (this.query.sort = this.sort),
          this.refresh();
      }
      select(t) {
        if (this.selected.includes(t)) {
          const e = this.selected.indexOf(t);
          -1 !== e && this.selected.splice(e, 1);
        } else this.selected.push(t);
      }
      getSort() {
        return this.endpoint.getSort(this.query);
      }
      unselectAll() {
        this.selected = [];
      }
      async printAll(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'Table',
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        try {
          const i = await this.endpoint.getFullList(this.query);
          nt(t.map(t => ({ header_key: t.title_key, dataKey: t.key })), i.items, n, e);
        } catch (t) {}
      }
      async printSelected(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'Table',
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.selected.length > 0) {
          const i = await this.endpoint.getIds(this.selected, this.query);
          nt(t.map(t => ({ header_key: t.title_key, dataKey: t.key })), i, n, e);
        } else
          r.a.show({
            body: 'Please select at least one Item',
            backdrop: !0,
            modal: !0,
            footerButtons: [a()(o.a, { label: 'OK', events: { onclick: () => r.a.hide() } })],
          });
      }
    }
    class at extends it {
      constructor() {
        c.debug('Constructing new TransactionTableController'), super(new Y('transaction'));
      }
    }
    var rt = n(65),
      ot = n(54),
      st = n(336),
      ct = n(337),
      lt = n(13),
      ut = n(1);
    const dt = {
      search:
        '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>',
      back:
        '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>',
      clear:
        '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',
      ArrowRight:
        '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><path d="M0-.25h24v24H0z" fill="none"/></svg>',
      ArrowDown:
        '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/><path d="M0-.75h24v24H0z" fill="none"/></svg>',
      iconUsersSVG:
        '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
      iconEventSVG:
        '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
      iconJobsSVG:
        '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>',
      ArrowLeft:
        '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/><path d="M0-.5h24v24H0z" fill="none"/></svg>',
      checked:
        '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>',
      group:
        '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>',
      cloud:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>',
      star:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
      email:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
      department:
        '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M0 0h48v48H0z" fill="none"/><path d="M24 14V6H4v36h40V14H24zM12 38H8v-4h4v4zm0-8H8v-4h4v4zm0-8H8v-4h4v4zm0-8H8v-4h4v4zm8 24h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm20 24H24v-4h4v-4h-4v-4h4v-4h-4v-4h16v20zm-4-16h-4v4h4v-4zm0 8h-4v4h4v-4z"/></svg>',
      amivWheel:
        '<svg width="81.059502" height="80.056625" viewBox="0 0 82 82" id="svg2"><metadata id="metadata8"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs id="defs6"><clipPath id="clipPath18"><path d="m 0,849.563 1960.52,0 L 1960.52,0 0,0 0,849.563 z" id="path20" /></clipPath></defs><g transform="matrix(1.25,0,0,-1.25,-16.34525,92.96925)" id="g10"><g transform="scale(0.1,0.1)" id="g12"><g clip-path="url(#clipPath18)" id="g16"><path d="m 566.012,342.883 c -44.453,-61.184 -130.383,-74.797 -191.563,-30.344 -3.969,2.891 -7.719,5.957 -11.289,9.18 l 41.192,29.922 40.945,-56.375 51.351,117.707 37.684,-51.848 44.727,32.5 -40.387,55.598 41.469,30.132 c 19.257,-43.32 15.679,-95.437 -14.129,-136.472 m -235.504,23.465 c -19.887,43.554 -16.5,96.32 13.601,137.75 44.45,61.179 130.383,74.789 191.559,30.336 4.352,-3.161 8.391,-6.579 12.254,-10.125 l -41.762,-30.344 -40.558,55.82 -44.735,-32.5 40.563,-55.828 -0.067,-0.051 -127.726,-12.449 38.203,-52.578 -41.332,-30.031 z m 366.523,24.668 c 1.41,10.644 2.207,21.48 2.207,32.511 0,11.028 -0.797,21.86 -2.207,32.508 l -57.468,8.922 c -2.571,11.469 -6.196,22.711 -10.864,33.57 l 41.211,40.961 c -5.109,9.438 -10.828,18.676 -17.312,27.598 -6.481,8.922 -13.496,17.223 -20.899,25 l -51.679,-26.52 c -4.372,3.84 -8.93,7.532 -13.731,11.02 -4.84,3.512 -9.801,6.73 -14.84,9.719 l 9.258,57.351 c -9.676,4.641 -19.734,8.75 -30.238,12.16 -10.481,3.407 -21.039,5.993 -31.586,7.938 l -26.262,-51.918 c -11.742,1.07 -23.519,1.031 -35.199,-0.066 l -26.293,51.984 c -10.559,-1.945 -21.109,-4.531 -31.598,-7.938 -10.492,-3.41 -20.551,-7.519 -30.23,-12.148 l 9.269,-57.434 c -10.039,-5.925 -19.582,-12.859 -28.511,-20.707 l -51.746,26.559 c -7.407,-7.777 -14.422,-16.07 -20.903,-25 -6.492,-8.922 -12.211,-18.16 -17.32,-27.598 l 41.258,-41.011 c -4.715,-10.922 -8.36,-22.137 -10.887,-33.512 l -57.481,-8.93 c -1.421,-10.64 -2.218,-21.48 -2.218,-32.508 0,-11.031 0.797,-21.855 2.218,-32.511 l 57.563,-8.934 c 2.559,-11.445 6.168,-22.668 10.82,-33.496 L 240.09,307.57 c 5.109,-9.445 10.828,-18.683 17.32,-27.597 6.481,-8.926 13.488,-17.227 20.903,-25 l 51.675,26.523 c 4.41,-3.867 9,-7.59 13.84,-11.105 4.801,-3.485 9.723,-6.688 14.723,-9.657 l -9.258,-57.336 c 9.687,-4.636 19.746,-8.75 30.238,-12.156 10.489,-3.418 21.039,-5.996 31.598,-7.929 l 26.219,51.843 c 11.773,-1.093 23.57,-1.062 35.285,0.039 l 26.238,-51.894 c 10.559,1.945 21.117,4.523 31.598,7.941 10.504,3.406 20.551,7.52 30.238,12.149 l -9.246,57.285 c 10.078,5.957 19.648,12.898 28.617,20.789 l 51.621,-26.492 c 7.403,7.773 14.41,16.074 20.899,25 6.484,8.914 12.203,18.152 17.312,27.597 l -41.148,40.907 c 4.73,10.957 8.379,22.207 10.929,33.644 l 57.34,8.895" id="path30" style="fill:#f03d30;fill-opacity:1;fill-rule:nonzero;stroke:none" /></g></g></g></svg>',
      menu:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>',
      studydoc:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>',
      blacklist:
        '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M22.5,2.09C21.6,3 20.13,3.73 18.31,4.25C16.59,2.84 14.39,2 12,2C9.61,2 7.41,2.84 5.69,4.25C3.87,3.73 2.4,3 1.5,2.09C1.53,3.72 2.35,5.21 3.72,6.4C2.63,8 2,9.92 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,9.92 21.37,8 20.28,6.4C21.65,5.21 22.47,3.72 22.5,2.09M7.5,8.5L10.5,10C10.5,10.8 9.8,11.5 9,11.5C8.2,11.5 7.5,10.8 7.5,10V8.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23M16.5,10C16.5,10.8 15.8,11.5 15,11.5C14.2,11.5 13.5,10.8 13.5,10L16.5,8.5V10Z" /></svg>',
      error:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>',
      sortingArrowUp:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 10 l5 -5 5 5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
      sortingArrowDown:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
    };
    function ht(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
          (i = i.concat(
            Object.getOwnPropertySymbols(n).filter(function(t) {
              return Object.getOwnPropertyDescriptor(n, t).enumerable;
            })
          )),
          i.forEach(function(e) {
            gt(t, e, n[e]);
          });
      }
      return t;
    }
    function gt(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    ut.h.add('tableview', [
      {
        '.toolbar': { 'grid-row': 1, display: 'flex' },
        '.tableTile': {
          padding: '10px',
          'border-bottom': '1px solid rgba(0, 0, 0, 0.12)',
          'align-items': 'center',
        },
      },
    ]);
    class mt {
      constructor(t) {
        let e = t.attrs,
          n = e.controller,
          i = e.titles,
          a = e.tileContent,
          r = void 0 !== a && a,
          o = e.clickOnTitles,
          s =
            void 0 === o
              ? (t, e) => {
                  t.setSort(e);
                }
              : o,
          l = e.clickOnRows,
          u =
            void 0 === l
              ? (t, e) => {
                  t.select(e.unique_id);
                }
              : l;
        c.debug('Constructing new TableView with '.concat(n, ', ').concat(i)),
          (this.controller = n),
          (this.titles = i || []),
          (this.tileContent = r),
          (this.clickOnTitles = s),
          (this.clickOnRows = u);
      }
      getItemData(t) {
        return this.titles.map(e => {
          let n = t;
          return (
            e.key.split('.').forEach(t => {
              n = n[t];
            }),
            a()('div', { style: { width: ''.concat(98 / this.titles.length, '%') } }, n)
          );
        });
      }
      item() {
        return t =>
          a()(ot.a, {
            className: 'themed-list-tile',
            hoverable: this.clickOnRows,
            compactFront: !0,
            compact: !0,
            content: a()(
              'div',
              {
                onclick: () => {
                  this.clickOnRows && this.selectable && this.clickOnRows(this.controller, t);
                },
                className: 'tableTile',
                style: {
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  backgroundColor: this.controller.selected.includes(t.unique_id)
                    ? '#B8B8B8'
                    : null,
                },
              },
              this.tileContent ? this.tileContent(t) : this.getItemData(t)
            ),
          });
      }
      view(t) {
        let e = t.attrs,
          n = e.controller,
          i = e.buttons,
          r = void 0 !== i && i,
          s = e.tableHeight,
          c = void 0 !== s && s,
          l = e.selectable,
          u = void 0 !== l && l,
          h = e.searchable,
          g = void 0 !== h && h,
          m = e.sortable,
          p = void 0 !== m && m;
        return (
          (this.selectable = u),
          a()(
            'div.tabletool',
            {
              style: {
                display: 'grid',
                height: '100%',
                'grid-template-rows': this.filters
                  ? '48px 40px calc(100% - 88px)'
                  : '48px calc(100% - 78px)',
                'background-color': 'white',
              },
            },
            [
              a()(d.a, {
                className: 'toolbar',
                compact: !0,
                content: [
                  g
                    ? a()(st.a, {
                        textfield: {
                          label: M('search'),
                          onChange: t => {
                            let e = t.value;
                            e !== this.searchValue && n.setSearch(e), (this.searchValue = e);
                          },
                        },
                        fullWidth: !1,
                      })
                    : '',
                  r
                    ? r.map(t =>
                        t
                          ? a()(o.a, {
                              className: 'blue-button',
                              border: !0,
                              label: M(t.label_key),
                              events: {
                                onclick: () => {
                                  t.onclick();
                                },
                              },
                            })
                          : ''
                      )
                    : '',
                ],
              }),
              a()(ct.a, {
                className: 'scrollTable',
                style: ht({ 'grid-row': this.filters ? 3 : 2 }, c ? { height: c } : {}),
                tiles: [
                  a()(ot.a, {
                    className: 'tableTile',
                    hoverable: this.clickOnTitles,
                    content: a()(
                      'div',
                      { style: { width: '100%', display: 'flex' } },
                      this.titles.map(t =>
                        a()(
                          'div',
                          {
                            onclick: () => {
                              this.clickOnTitles && p && this.clickOnTitles(n, t.sort);
                            },
                            style: t.style
                              ? t.style
                              : { width: ''.concat(98 / this.tableKeys.length, '%') },
                          },
                          [
                            t.style.width ? M(t.title_key) : t,
                            (n.getSort().split('.')[0] !== t.key &&
                              n.getSort().split('.')[0] !== t.sort) ||
                            !p
                              ? ''
                              : a()(lt.a, {
                                  svg: {
                                    content: a.a.trust(
                                      'desc' === n.getSort().split('.')[1]
                                        ? dt.sortingArrowUp
                                        : dt.sortingArrowDown
                                    ),
                                  },
                                }),
                          ]
                        )
                      )
                    ),
                  }),
                  a()(rt.a, n.infiniteScrollParams(this.item())),
                ],
              }),
            ]
          )
        );
      }
    }
    class pt {
      constructor(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        c.debug('Constructing new BaseTable with table setup: '.concat(e)),
          (this.ctrl = new t()),
          (this.table_setup = e),
          (this.buttons = n),
          (this.title_arr = []),
          (this.print_table_info = []),
          (this.selectable = !1),
          (this.sortable = !1),
          (this.searchable = !1);
      }
      oninit() {
        this.table_setup.forEach(t => {
          this.title_arr.push({
            title_key: t.title_key,
            style: t.style,
            conditional_tags: e => !!t.conditional_tags && t.conditional_tags(e),
            formatting: e => (t.formatting ? t.formatting(e) : e),
            key: t.key,
            text_keys: t.text_keys,
            sort: t.sort ? t.sort : t.key,
          }),
            this.print_table_info.push({
              title_key: t.title_key,
              key: t.key,
              text_keys: t.text_keys,
            });
        });
      }
      getItemData(t) {
        const e = [];
        return (
          this.title_arr.forEach(n => {
            const i = l(t, n.key),
              r = n.text_keys ? n.text_keys.map(e => l(t, e)) : null;
            let o = '';
            r &&
              r.forEach(t => {
                t && (o += ''.concat(t, ' '));
              }),
              void 0 !== i || null !== i
                ? e.push(
                    a()(
                      'div.tableItem.'.concat(n.conditional_tags(t)),
                      { style: n.style },
                      ''.concat(o).concat(n.formatting(i))
                    )
                  )
                : e.push(
                    a()(
                      'div.tableItem.'.concat(n.conditional_tags(t)),
                      { style: n.style },
                      'not defined'
                    )
                  );
          }),
          e
        );
      }
      view() {
        return a()(mt, {
          controller: this.ctrl,
          tileContent: t => this.getItemData(t),
          titles: this.title_arr,
          sortable: this.sortable,
          searchable: this.searchable,
          selectable: this.selectable,
          buttons: this.buttons,
        });
      }
    }
    const ft = [
        { key: 'id', title_key: 'transaction.id', style: { width: '4em' } },
        {
          key: 'user.name',
          sort: 'user_id',
          title_key: 'transaction.name',
          style: { width: '12em' },
        },
        {
          key: 'description',
          title_key: 'transaction.desc',
          style: { width: '100%', display: 'flex' },
        },
        {
          key: 'category.category_name',
          sort: 'category_id',
          title_key: 'transaction.category',
          style: { width: '20em' },
        },
        {
          key: 'budgetitem.budgetitem_name',
          text_keys: ['budgetitem.budgetitem_code'],
          sort: 'budgetitem_id',
          title_key: 'transaction.budget_post',
          style: { width: '20em' },
        },
        {
          key: 'amount',
          text_keys: ['currency.currency_shortcut'],
          title_key: 'transaction.amount',
          style: { width: '8em' },
          formatting: t => k(t),
        },
        {
          key: 'amount_in_chf',
          title_key: 'transaction.amount_chf',
          style: { width: '8em' },
          formatting: t => k(t),
        },
        {
          key: 'type.type_name',
          sort: 'type_id',
          title_key: 'transaction.payment_method',
          style: { width: '20em' },
        },
        { key: 'is_valid', title_key: 'transaction.valid', style: { width: '10em' } },
        { key: 'ezag', title_key: 'transaction.ezag', style: { width: '10em' } },
      ],
      yt = [
        { label_key: 'button.print_all' },
        { label_key: 'button.print_selected' },
        { label_key: 'button.unselect_all' },
      ];
    class bt extends it {
      constructor() {
        c.debug('Constructing new ForecastController'), super(new Y('transaction_budgetitem'));
      }
      async getPageData(t) {
        const e = JSON.parse(JSON.stringify(this.query));
        e.page = t;
        const n = await this.endpoint.getItems(e);
        return (
          (this.totalPages = n.meta.last_page),
          n.items.map(t => {
            const e = Object.assign({}, t);
            return (
              (e.expenditure_budgeted = t.expenditure_budgeted.toFixed(2)),
              (e.expenditure_calculated = t.expenditure_calculated.toFixed(2)),
              (e.revenue_budgeted = t.revenue_budgeted.toFixed(2)),
              (e.revenue_calculated = t.revenue_calculated.toFixed(2)),
              (e.difference_budgeted = (t.revenue_budgeted - e.expenditure_budgeted).toFixed(2)),
              (e.difference_calculated = (t.revenue_calculated - e.expenditure_calculated).toFixed(
                2
              )),
              e
            );
          }),
          n.items
        );
      }
    }
    const wt = [
        { key: 'budgetitem_code', title_key: 'transaction.code', style: { width: '4em' } },
        {
          key: 'budgetitem_name',
          title_key: 'transaction.desc',
          style: { width: 'calc(100% - 80em)', minWidth: '10em' },
        },
        { key: 'budgetgroup', title_key: 'transaction.group', style: { width: '8em' } },
        {
          key: 'expenditure_budgeted',
          title_key: 'transaction.expenditure_budgeted',
          style: { width: '6em', textAlign: 'right' },
          formatting: t => k(t),
        },
        {
          key: 'expenditure_calculated',
          title_key: 'transaction.expenditure_calculated',
          style: { width: '6em', textAlign: 'right' },
          conditional_tags: t =>
            t.expenditure_calculated > t.expenditure_budgeted ? 'red' : 'green',
          formatting: t => k(t),
        },
        {
          key: 'revenue_budgeted',
          title_key: 'transaction.revenue_budgeted',
          style: { width: '6em', textAlign: 'right' },
          formatting: t => k(t),
        },
        {
          key: 'revenue_calculated',
          title_key: 'transaction.revenue_calculated',
          style: { width: '6em', textAlign: 'right' },
          conditional_tags: t => (t.revenue_calculated < t.revenue_budgeted ? 'red' : 'green'),
          formatting: t => k(t),
        },
        {
          key: 'difference_budgeted',
          title_key: 'transaction.difference_budgeted',
          style: { width: '6em', textAlign: 'right' },
          formatting: t => k(t),
        },
        {
          key: 'difference_calculated',
          title_key: 'transaction.difference_calculated',
          style: { width: '6em', textAlign: 'right' },
          conditional_tags: t =>
            t.difference_budgeted <= t.difference_calculated ? 'green' : 'red',
          formatting: t => k(t),
        },
      ],
      vt = [{ label_key: 'button.print_all' }];
    const xt = [
        { key: 'budgetitem_code', title_key: 'transaction.code', style: { width: '4em' } },
        {
          key: 'budgetitem_name',
          title_key: 'transaction.desc',
          style: { width: 'calc(100% - 80em)', minWidth: '10em' },
        },
        { key: 'budgetgroup', title_key: 'transaction.group', style: { width: '8em' } },
        {
          key: 'expenditure_budgeted',
          title_key: 'transaction.expenditure_budgeted',
          style: { width: '6em', textAlign: 'right' },
          formatting: t => k(t),
        },
        {
          key: 'expenditure_confirmed',
          title_key: 'transaction.expenditure_confirmed',
          style: { width: '6em', textAlign: 'right' },
          conditional_tags: t =>
            t.expenditure_confirmed > t.expenditure_budgeted ? 'red' : 'green',
          formatting: t => k(t),
        },
        {
          key: 'revenue_budgeted',
          title_key: 'transaction.revenue_budgeted',
          style: { width: '6em', textAlign: 'right' },
          formatting: t => k(t),
        },
        {
          key: 'revenue_confirmed',
          title_key: 'transaction.revenue_confirmed',
          style: { width: '6em', textAlign: 'right' },
          conditional_tags: t => (t.revenue_confirmed < t.revenue_budgeted ? 'red' : 'green'),
          formatting: t => k(t),
        },
        {
          key: 'difference_budgeted',
          title_key: 'transaction.difference_budgeted',
          style: { width: '6em', textAlign: 'right' },
          formatting: t => k(t),
        },
        {
          key: 'difference_confirmed',
          title_key: 'transaction.difference_confirmed',
          style: { width: '6em', textAlign: 'right' },
          conditional_tags: t =>
            t.difference_budgeted <= t.difference_confirmed ? 'green' : 'red',
          formatting: t => k(t),
        },
      ],
      Mt = [{ label_key: 'button.print_all' }];
    var kt = n(157),
      Lt = n.n(kt),
      Tt = n(158),
      zt = n.n(Tt),
      Nt = {
        amiv: Lt.a,
        amivWheel: zt.a,
        amivData:
          'data:image/png;base64,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',
        amivSVG:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSIxOTYuMDUycHgiIGhlaWdodD0iODQuOTU2cHgiIHZpZXdCb3g9IjAgMCAxOTYuMDUyIDg0Ljk1NiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTk2LjA1MiA4NC45NTYiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGRlZnM+DQoJCTxyZWN0IGlkPSJTVkdJRF8xXyIgd2lkdGg9IjE5Ni4wNTIiIGhlaWdodD0iODQuOTU2Ii8+DQoJPC9kZWZzPg0KCTxjbGlwUGF0aCBpZD0iU1ZHSURfMl8iPg0KCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgIG92ZXJmbG93PSJ2aXNpYmxlIi8+DQoJPC9jbGlwUGF0aD4NCgk8cGF0aCBjbGlwLXBhdGg9InVybCgjU1ZHSURfMl8pIiBmaWxsPSIjRTg0NjJCIiBkPSJNODkuMTg3LDQ2LjQwNWgtNS4xOWMtMi4zNjksMC0zLjY3OSwxLjEwOS0zLjY3OSwyLjk3NQ0KCQljMCwxLjgxMywxLjIxLDMuMDIyLDMuNzgsMy4wMjJjMS44MTQsMCwyLjk3My0wLjE1LDQuMTMyLTEuMjZjMC43MDYtMC42NTUsMC45NTctMS43MTMsMC45NTctMy4zMjZWNDYuNDA1eiBNODkuMzM4LDU3LjQ5M3YtMi4yNjkNCgkJYy0xLjc2NCwxLjc2NC0zLjQyNywyLjUyMS02LjQ1LDIuNTIxYy0yLjk3NCwwLTUuMTQxLTAuNzU3LTYuNzAzLTIuMzE4Yy0xLjQxMS0xLjQ2Mi0yLjE2Ny0zLjU3OC0yLjE2Ny01Ljg5Ng0KCQljMC00LjE4MywyLjg3Mi03LjYwOSw4Ljk3LTcuNjA5aDYuMTk4di0xLjMxYzAtMi44NzItMS40MS00LjEzMi00Ljg4OC00LjEzMmMtMi41MTksMC0zLjY3OCwwLjYwNS01LjAzOSwyLjE2N2wtNC4xODItNC4wODINCgkJYzIuNTY5LTIuODIyLDUuMDg5LTMuNjI4LDkuNDczLTMuNjI4YzcuMzU4LDAsMTEuMTg4LDMuMTI0LDExLjE4OCw5LjI3MnYxNy4yODZIODkuMzM4eiIvPg0KCTxwYXRoIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8yXykiIGZpbGw9IiNFODQ2MkIiIGQ9Ik0xMzEuMjMsNTcuNDkzVjQxLjYxOWMwLTMuNTc4LTIuMjY5LTQuNzg3LTQuMzM0LTQuNzg3DQoJCWMtMi4wMTcsMC00LjM4NCwxLjIwOS00LjM4NCw0LjYzNnYxNi4wMjVoLTYuNTUzVjQxLjYxOWMwLTMuNTc4LTIuMjY3LTQuNzg3LTQuMzMzLTQuNzg3Yy0yLjA2NSwwLTQuMzg1LDEuMjA5LTQuMzg1LDQuNzg3djE1Ljg3NQ0KCQloLTYuNTUxVjMxLjIzOGg2LjM5OXYyLjQxOWMxLjcxNS0xLjc2NCw0LjEzMy0yLjcyMSw2LjU1Mi0yLjcyMWMyLjkyMywwLDUuMjkxLDEuMDU4LDYuOTU1LDMuMzI2DQoJCWMyLjIxNy0yLjMxOSw0LjU4Ni0zLjMyNiw3Ljg2LTMuMzI2YzIuNjIsMCw0Ljk4OSwwLjg1Niw2LjQ1LDIuMzE4YzIuMTE3LDIuMTE2LDIuODczLDQuNTg2LDIuODczLDcuNDU4djE2Ljc4MUgxMzEuMjN6Ii8+DQoJPHJlY3QgeD0iMTQyLjczMyIgeT0iMzEuMjM4IiBjbGlwLXBhdGg9InVybCgjU1ZHSURfMl8pIiBmaWxsPSIjRTg0NjJCIiB3aWR0aD0iNi41NTEiIGhlaWdodD0iMjYuMjU1Ii8+DQoJPHBvbHlnb24gY2xpcC1wYXRoPSJ1cmwoI1NWR0lEXzJfKSIgZmlsbD0iI0U4NDYyQiIgcG9pbnRzPSIxNzAuNjk3LDMxLjIzOCAxNjUuNDA2LDQ3LjQ2NSAxNjAuMDY1LDMxLjIzOCAxNTMuMTYxLDMxLjIzOCANCgkJMTYyLjgzNiw1Ny40OTMgMTY3Ljk3Nyw1Ny40OTMgMTc3LjYwMiwzMS4yNCAxNzcuNjAyLDMxLjIzOCAJIi8+DQoJPHBhdGggY2xpcC1wYXRoPSJ1cmwoI1NWR0lEXzJfKSIgZmlsbD0iI0U4NDYyQiIgZD0iTTY5LjcwMyw0NS44NTRjMC4xNDEtMS4wNjQsMC4yMjEtMi4xNDgsMC4yMjEtMy4yNTENCgkJYzAtMS4xMDMtMC4wOC0yLjE4Ni0wLjIyMS0zLjI1MWwtNS43NDctMC44OTJjLTAuMjU3LTEuMTQ3LTAuNjE5LTIuMjcxLTEuMDg2LTMuMzU3bDQuMTIxLTQuMDk2DQoJCWMtMC41MTEtMC45NDQtMS4wODMtMS44NjgtMS43MzEtMi43NmMtMC42NDgtMC44OTItMS4zNS0xLjcyMi0yLjA5LTIuNWwtNS4xNjgsMi42NTJjLTAuNDM3LTAuMzg0LTAuODkzLTAuNzUzLTEuMzczLTEuMTAyDQoJCWMtMC40ODQtMC4zNTEtMC45OC0wLjY3My0xLjQ4NC0wLjk3MmwwLjkyNi01LjczNWMtMC45NjgtMC40NjQtMS45NzQtMC44NzUtMy4wMjQtMS4yMTZjLTEuMDQ4LTAuMzQxLTIuMTA0LTAuNTk5LTMuMTU5LTAuNzk0DQoJCWwtMi42MjYsNS4xOTJjLTEuMTc0LTAuMTA3LTIuMzUyLTAuMTAzLTMuNTIsMC4wMDdsLTIuNjI5LTUuMTk5Yy0xLjA1NiwwLjE5NS0yLjExMSwwLjQ1My0zLjE2LDAuNzk0DQoJCWMtMS4wNDksMC4zNDEtMi4wNTUsMC43NTItMy4wMjMsMS4yMTVsMC45MjcsNS43NDNjLTEuMDA0LDAuNTkzLTEuOTU4LDEuMjg2LTIuODUxLDIuMDcxbC01LjE3NS0yLjY1Ng0KCQljLTAuNzQsMC43NzgtMS40NDIsMS42MDctMi4wOSwyLjVjLTAuNjQ5LDAuODkyLTEuMjIxLDEuODE2LTEuNzMyLDIuNzZsNC4xMjYsNC4xMDFjLTAuNDcyLDEuMDkyLTAuODM2LDIuMjE0LTEuMDg5LDMuMzUxDQoJCWwtNS43NDgsMC44OTNjLTAuMTQyLDEuMDY0LTAuMjIyLDIuMTQ4LTAuMjIyLDMuMjUxYzAsMS4xMDMsMC4wOCwyLjE4NiwwLjIyMiwzLjI1MWw1Ljc1NiwwLjg5NA0KCQljMC4yNTYsMS4xNDUsMC42MTcsMi4yNjcsMS4wODIsMy4zNWwtNC4xMjcsNC4xMDJjMC41MTEsMC45NDQsMS4wODMsMS44NjgsMS43MzIsMi43NmMwLjY0OCwwLjg5MywxLjM0OSwxLjcyMywyLjA5LDIuNQ0KCQlsNS4xNjgtMi42NTJjMC40NDEsMC4zODcsMC45LDAuNzU5LDEuMzg0LDEuMTFjMC40OCwwLjM0OSwwLjk3MiwwLjY2OSwxLjQ3MiwwLjk2NmwtMC45MjYsNS43MzMNCgkJYzAuOTY5LDAuNDY0LDEuOTc1LDAuODc1LDMuMDI0LDEuMjE2YzEuMDQ5LDAuMzQyLDIuMTA0LDAuNiwzLjE2LDAuNzkzbDIuNjIyLTUuMTg1YzEuMTc3LDAuMTA5LDIuMzU3LDAuMTA2LDMuNTI4LTAuMDA0DQoJCWwyLjYyNCw1LjE4OWMxLjA1Ni0wLjE5NCwyLjExMi0wLjQ1MiwzLjE2LTAuNzk0YzEuMDUtMC4zNDEsMi4wNTUtMC43NTIsMy4wMjQtMS4yMTVsLTAuOTI1LTUuNzI5DQoJCWMxLjAwOC0wLjU5NiwxLjk2NS0xLjI5LDIuODYyLTIuMDc5bDUuMTYyLDIuNjQ5YzAuNzQtMC43NzcsMS40NDEtMS42MDcsMi4wOS0yLjVjMC42NDgtMC44OTIsMS4yMi0xLjgxNSwxLjczMS0yLjc2bC00LjExNS00LjA5MQ0KCQljMC40NzMtMS4wOTYsMC44MzgtMi4yMjEsMS4wOTMtMy4zNjRMNjkuNzAzLDQ1Ljg1NHogTTMzLjA1MSw0OC4zMjFjLTEuOTg5LTQuMzU1LTEuNjUtOS42MzIsMS4zNi0xMy43NzUNCgkJYzQuNDQ1LTYuMTE4LDEzLjAzOC03LjQ3OSwxOS4xNTYtMy4wMzRjMC40MzUsMC4zMTYsMC44MzksMC42NTgsMS4yMjUsMS4wMTNsLTQuMTc2LDMuMDM0bC00LjA1Ni01LjU4MmwtNC40NzMsMy4yNWw0LjA1Niw1LjU4Mw0KCQlsLTAuMDA3LDAuMDA1bC0xMi43NzIsMS4yNDVsMy44Miw1LjI1OEwzMy4wNTEsNDguMzIxeiBNNTYuNjAxLDUwLjY2OGMtNC40NDUsNi4xMTgtMTMuMDM4LDcuNDc5LTE5LjE1NiwzLjAzNA0KCQljLTAuMzk3LTAuMjg5LTAuNzcyLTAuNTk2LTEuMTI5LTAuOTE4bDQuMTE5LTIuOTkybDQuMDk1LDUuNjM4bDUuMTM1LTExLjc3MWwzLjc2OCw1LjE4Nmw0LjQ3My0zLjI1bC00LjAzOS01LjU2bDQuMTQ3LTMuMDEzDQoJCUM1OS45NCw0MS4zNTMsNTkuNTgyLDQ2LjU2NCw1Ni42MDEsNTAuNjY4Ii8+DQo8L2c+DQo8L3N2Zz4NCg==',
      };
    c.debug('Initializing pdf invoice');
    var jt = n(159),
      Dt = n(160),
      It = n(161),
      _t = n(162);
    async function Ct(t, e) {
      const n = It;
      let i = 0;
      const a = e.map(
          (e, n) => (
            (i += Number(e.amount)),
            (function(t, e, n) {
              const i = _t;
              return (
                (i.PmtId.InstrId._text = 'InstrId-'.concat(e, '-').concat(n)),
                (i.PmtId.EndToEndId._text = t.code),
                (i.Amt.InstdAmt._attributes.Ccy = t.currency),
                (i.Amt.InstdAmt._text = t.amount),
                (i.CdtrAgt.FinInstnId.BIC._text = t.bic),
                (i.Cdtr.Nm._text = t.name),
                (i.CdtrAcct.Id.IBAN._text = t.iban),
                JSON.parse(JSON.stringify(i))
              );
            })(e, t, n)
          )
        ),
        r = new Date(),
        o = r.toISOString().substr(0, 19);
      (n.Document.CstmrCdtTrfInitn.GrpHdr.MsgId._text = 'Msg-'.concat(t)),
        (n.Document.CstmrCdtTrfInitn.GrpHdr.CreDtTm._text = o),
        (n.Document.CstmrCdtTrfInitn.GrpHdr.NbOfTxs._text = e.length),
        (n.Document.CstmrCdtTrfInitn.GrpHdr.CtrlSum._text = i.toFixed(2));
      const s = (function(t, e) {
        const n = new Date(t);
        return n.setDate(n.getDate() + e), n;
      })(r, 1)
        .toISOString()
        .substr(0, 10);
      (n.Document.CstmrCdtTrfInitn.PmtInf.PmtInfId._text = 'PmtInf-'.concat(t)),
        (n.Document.CstmrCdtTrfInitn.PmtInf.ReqdExctnDt._text = s),
        (n.Document.CstmrCdtTrfInitn.PmtInf.CdtTrfTxInf = a);
      const l = Object(jt.js2xml)(n, { compact: !0, ignoreComment: !0, spaces: 4 });
      c.info('generated Xml file', l), await Object(Dt.save)(l, 'Msg-'.concat(t, '.xml'));
    }
    var At = n(338),
      Ot = n(167),
      St = n(165);
    class Et {
      constructor() {
        c.debug('Constructing new UserInfo');
      }
      oninit(t) {
        this.userController = t.attrs.userController;
      }
      view() {
        const t = this.userController.user;
        return [
          a()('div.user', [
            a()('b', t.name),
            a()(
              'div.nethz',
              a()(
                'a',
                { href: 'mailto:'.concat(t.nethz, '@student.ethz.ch') },
                ''.concat(t.nethz, '@student.ethz.ch')
              )
            ),
          ]),
          a()('div.amiv', [
            a()('div', a()('b', M('position.'.concat(t.role ? t.role : 'default')))),
            a()('div.email', t.amiv_mail ? t.amiv_mail : ''),
          ]),
        ];
      }
    }
    var Pt = n(164);
    class Ht {
      constructor() {
        c.debug('Constructing new ibanForm'), (this.iban = null), (this.valid = !0);
      }
      oninit(t) {
        this.userController = t.attrs.userController;
      }
      submit() {
        this.valid &&
          ((this.savedIban = this.iban),
          this.userController
            .set_iban(this.savedIban)
            .then(() => {
              (this.iban = this.savedIban), a.a.redraw();
            })
            .catch());
      }
      view() {
        const t = this.userController.iban;
        return a()('div.rfid', [
          a()(Ot.a, {
            label: M('profile.iban'),
            floatingLabel: !0,
            error: M('profile.rfidError'),
            valid: this.valid,
            value: t,
            events: {
              oninput: t => {
                (this.iban = t.target.value),
                  (this.valid = Object(Pt.isValid)(this.iban) || '' === this.iban);
              },
            },
          }),
          a()(o.a, { label: M('confirm'), events: { onclick: () => this.submit() } }),
        ]);
      }
    }
    const Ut = new class {
      constructor() {
        c.debug('Constructing new UserController'), (this.resourceHandler = new J('user'));
      }
      async init() {
        this._user = await this.resourceHandler.getId(await Z());
      }
      get user() {
        return void 0 === this._user ? {} : this._user;
      }
      get iban() {
        return void 0 === this._user ? null : this._user.iban;
      }
      async set_iban(t) {
        return this.resourceHandler.patch(await Z(), { iban: t });
      }
    }();
    function Vt(t, e) {
      return (
        (function(t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function(t, e) {
          var n = [],
            i = !0,
            a = !1,
            r = void 0;
          try {
            for (
              var o, s = t[Symbol.iterator]();
              !(i = (o = s.next()).done) && (n.push(o.value), !e || n.length !== e);
              i = !0
            );
          } catch (t) {
            (a = !0), (r = t);
          } finally {
            try {
              i || null == s.return || s.return();
            } finally {
              if (a) throw r;
            }
          }
          return n;
        })(t, e) ||
        (function() {
          throw new TypeError('Invalid attempt to destructure non-iterable instance');
        })()
      );
    }
    class Ft {
      constructor(t) {
        c.debug('Constructing new Naviagtion'),
          (this._items = t.map(t => {
            const e = Object.assign({}, t);
            return (
              e.url
                ? (e.getLink = () => Ft._getUrlLink(e.url))
                : e.addLanguagePrefix
                ? (e.getLink = t => Ft._getPathLink(e.path, t))
                : (e.getLink = () => e.path),
              e
            );
          }));
      }
      get items() {
        return this._items;
      }
      get selectedIndex() {
        return this._selectedIndex;
      }
      get selectedItem() {
        return this._selectedIndex >= 0 ? this._items[this._selectedIndex] : void 0;
      }
      map(t) {
        return this._items.map(t);
      }
      onupdate() {
        this._items.forEach(t => {
          t.submenu && t.submenu.onupdate();
        }),
          (this._selectedIndex = this._checkMenuItemSelection());
      }
      static _getPathLink(t) {
        return !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          ? '/'.concat(w()).concat(t)
          : t;
      }
      static _getUrlLink(t) {
        if (t instanceof Object) {
          if (t[w()]) return t[w()];
          let e;
          if (t.en) e = 'en';
          else e = Vt(Object.keys(t), 1)[0];
          return t[e];
        }
        return t;
      }
      _checkMenuItemSelection() {
        let t;
        return (
          this._items.forEach((e, n) => {
            const i = e.getLink(!1);
            ((i.length <= 4 && a.a.route.get() === i) ||
              (i.length > 4 && a.a.route.get().includes(i)) ||
              (e.submenu && e.submenu.selectedIndex)) &&
              (t = n);
          }),
          (this._selectedIndex = t),
          this._selectedIndex
        );
      }
    }
    const Bt = new Ft([
      { path: '/', addLanguagePrefix: !0, oncreate: a.a.route.link, view: u },
      {
        key: 'menu.receipt_form',
        path: '/belegformular',
        oncreate: a.a.route.link,
        addLanguagePrefix: !0,
        view: class extends R {
          constructor() {
            c.debug('Constructing new BelegFormView'),
              super(K, Q, X),
              (this.buttons[0].onclick = () => this.ctrl.submit());
          }
        },
      },
      {
        key: 'menu.test_list',
        path: '/testliste',
        oncreate: a.a.route.link,
        addLanguagePrefix: !0,
        view: class extends pt {
          constructor() {
            c.debug('Constructing new TransactionTableView'),
              super(at, ft, yt),
              (this.selectable = !0),
              (this.sortable = !0),
              (this.searchable = !0),
              (yt[0].onclick = () => {
                this.ctrl.printAll(this.print_table_info, 'Transaction_Table', 'All Transactions');
              }),
              (yt[1].onclick = () => {
                this.ctrl.printSelected(
                  this.print_table_info,
                  'Transaction_Table',
                  'Selected Transactions'
                );
              }),
              (yt[2].onclick = () => {
                this.ctrl.unselectAll();
              });
          }
        },
      },
      {
        key: 'menu.kst',
        path: '/kst',
        addLanguagePrefix: !0,
        oncreate: a.a.route.link,
        view: u,
        submenu: new Ft([
          {
            key: 'menu.kst_eval',
            path: '/kst/eval',
            addLanguagePrefix: !0,
            onupdate: a.a.route.link,
            view: class extends pt {
              constructor() {
                c.debug('Constructing new ForecastTableView'),
                  super(bt, xt, Mt),
                  (this.searchable = !0),
                  (Mt[0].onclick = () => {
                    this.ctrl.printAll(this.print_table_info);
                  });
              }
            },
          },
          {
            key: 'menu.kst_fore',
            path: '/kst/forecast',
            addLanguagePrefix: !0,
            onupdate: a.a.route.link,
            view: class extends pt {
              constructor() {
                c.debug('Constructing new BudgetTableView'),
                  super(bt, wt, vt),
                  (this.searchable = !0),
                  (vt[0].onclick = () => {
                    this.ctrl.printAll(this.print_table_info);
                  });
              }
            },
          },
        ]),
      },
      {
        key: 'menu.test',
        path: '/test',
        addLanguagePrefix: !0,
        oncreate: a.a.route.link,
        view: u,
        submenu: new Ft([
          {
            key: 'menu.invoice',
            path: '/test/invoice',
            addLanguagePrefix: !0,
            oncreate: a.a.route.link,
            view: class {
              constructor() {
                c.debug('Constructing new Testinvoice'),
                  (this.inv_data = {
                    customer: {
                      first_name: 'Katarina',
                      plz: '5400',
                      email: 'katarina.isailovic@ch.abb.com',
                      country: 'Schweiz',
                      company: 'ABB Schweiz AG',
                      title: 'ms',
                      quotation: 'Netto',
                      city: 'Baden',
                      last_name: 'Isailovic',
                      address: 'Brown Boveri Strasse 6',
                      category: 'Unternehmen',
                    },
                    user: {
                      name: 'Luzian Bieri',
                      role: 'Quästor - AMIV an der ETH',
                      amiv_mail: 'luzibier@amiv.ch',
                    },
                    items: [
                      {
                        unit: 'Stk',
                        amount: 371,
                        unitprice: 1.1,
                        article_type: 'Weiterverrechnung ohne Gewinn',
                        taxrate: 0,
                        subtotal: 371,
                        description: 'Bier für Automaten',
                        pos: 'QT-3',
                      },
                      {
                        unit: 'kg',
                        amount: 1.5,
                        unitprice: 25,
                        article_type: 'Kafferechnung',
                        taxrate: 0.077,
                        subtotal: 32,
                        description: 'Kaffee aus Schweden',
                        pos: 'K-3',
                      },
                      {
                        unit: 'kg',
                        amount: 1.5,
                        unitprice: 25,
                        article_type: 'Kafferechnung',
                        taxrate: 0.077,
                        subtotal: 32,
                        description: 'Kaffee aus Schweden',
                        pos: 'K-3',
                      },
                    ],
                    tot_net: 500,
                    tot_tax: 26,
                    tot_gros: 526,
                    nr: 'R19-test',
                    issue_date: '2017-02-27',
                    due_date: '2017-03-29',
                  });
              }
              view() {
                return a()('div', [
                  a()('h1', 'Test the generation of invoices here'),
                  a()(o.a, {
                    className: 'blue-button',
                    border: !0,
                    label: 'PDF',
                    events: {
                      onclick: () => {
                        !(function(t, e) {
                          const n = w();
                          x(e);
                          const i = new et.a({ orientation: 'p', unit: 'mm', format: 'a4' }),
                            a = 10,
                            r = 8,
                            o = 15,
                            s = 'helvetica',
                            c = 'normal',
                            l = 'bold',
                            u = 0.2,
                            d = 0.1,
                            h = 0.6,
                            g = 0.1;
                          i.setFont(s, c),
                            i.addImage(Nt.amivData, 'PNG', 22, 15, 70, (70 / 489) * 150);
                          let m = 53;
                          i.setFontSize(r),
                            i.text(M('address_full'), 22, m),
                            i.setLineWidth(u),
                            i.line(22, m + 1, 104, m + 1),
                            (m += 5),
                            i.setFontSize(a),
                            t.customer.company && (i.text(t.customer.company, 22, m), (m += 5)),
                            t.customer.last_name &&
                              t.customer.title &&
                              (i.text(
                                ''
                                  .concat(M('invoice.title.'.concat(t.customer.title)), ' ')
                                  .concat(t.customer.first_name ? t.customer.first_name : '', ' ')
                                  .concat(t.customer.last_name),
                                22,
                                m
                              ),
                              (m += 5)),
                            i.text(t.customer.address, 22, m),
                            (m += 5),
                            i.text(''.concat(t.customer.plz, ' ').concat(t.customer.city), 22, m),
                            (m += 5),
                            t.customer.country && (i.text(t.customer.country, 22, m), (m += 5)),
                            (m = 58),
                            i.text(''.concat(M('date'), ':'), 125, m),
                            i.text(L(new Date(t.issue_date)), 155, m),
                            (m += 5),
                            i.text(''.concat(M('invoice.payment_within'), ':'), 125, m),
                            i.text(M('invoice.payment_within_duration'), 155, m),
                            (m += 5),
                            i.text(''.concat(M('invoice.contact_person'), ':'), 125, m),
                            i.text(t.user.name, 155, m),
                            (m += 5),
                            i.text(''.concat(M('phone'), ':'), 125, m),
                            i.text(M('phone_no'), 155, m),
                            (m += 5),
                            i.text(''.concat(M('email'), ':'), 125, m),
                            i.text(
                              t.user.amiv_mail ? t.user.amiv_mail : M('queastur_mail'),
                              155,
                              m
                            ),
                            (m += 5),
                            i.setFontSize(o),
                            i.setFont(s, l),
                            i.text(
                              ''
                                .concat(M('invoice.invoice'), ' ')
                                .concat(M('invoice.no'), ' ')
                                .concat(t.nr),
                              22,
                              93
                            ),
                            i.setFont(s, c),
                            i.setFontSize(a),
                            t.customer.last_name && t.customer.title
                              ? i.text(
                                  ''
                                    .concat(
                                      'mr' === t.customer.title
                                        ? M('invoice.salutation_male')
                                        : M('invoice.salutation')
                                    )
                                    .concat(M('invoice.title.'.concat(t.customer.title)), ' ')
                                    .concat(t.customer.last_name),
                                  22,
                                  100
                                )
                              : i.text(
                                  ''
                                    .concat(M('invoice.salutation'), ' ')
                                    .concat(M('invoice.title.general')),
                                  22,
                                  100
                                ),
                            i.text(M('invoice.intro'), 22, 105);
                          const p = [
                            { header: M('invoice.services.pos'), dataKey: 'pos', pos: 22 },
                            {
                              header: M('invoice.services.desc'),
                              dataKey: 'article_type',
                              pos: 33,
                            },
                            {
                              header: M('invoice.services.qty'),
                              dataKey: 'amount',
                              add_key: 'unit',
                              pos: 104,
                              align: 'right',
                            },
                            {
                              header: M('invoice.services.tax'),
                              dataKey: 'taxrate',
                              pos: 123,
                              align: 'right',
                            },
                            {
                              header: M('invoice.services.unit_price'),
                              dataKey: 'unitprice',
                              pos: 157,
                              align: 'right',
                              formatter: t => k(t),
                            },
                            {
                              header: M('invoice.services.tot'),
                              dataKey: 'subtotal',
                              pos: 184,
                              align: 'right',
                              formatter: t => k(t),
                            },
                          ];
                          (m = 120),
                            p.forEach(t => {
                              i.text(t.header, t.pos, m, t.align);
                            }),
                            i.setLineWidth(d),
                            t.items.forEach(t => {
                              i.line(22, m + 1, 186, m + 1),
                                (m += 5),
                                p.forEach(e => {
                                  i.text(
                                    ''
                                      .concat(
                                        e.formatter ? e.formatter(t[e.dataKey]) : t[e.dataKey],
                                        ' '
                                      )
                                      .concat(e.add_key ? t[e.add_key] : ''),
                                    e.pos,
                                    m,
                                    e.align
                                  );
                                }),
                                (m += 5),
                                i.text(t.description, p[1].pos, m);
                            }),
                            i.setLineWidth(h),
                            i.line(22, m + 1, 186, m + 1),
                            (m += 5);
                          const f = p[p.length - 2].pos,
                            y = p[p.length - 1].pos;
                          i.text(''.concat(M('invoice.services.tot_net'), ':'), f, m, 'right'),
                            i.text(''.concat(k(t.tot_net)), y, m, 'right'),
                            (m += 5),
                            i.text(''.concat(M('invoice.services.tot_vat'), ':'), f, m, 'right'),
                            i.text(''.concat(k(t.tot_tax)), y, m, 'right'),
                            (m += 5),
                            i.setFont(s, l),
                            i.text(''.concat(M('invoice.services.tot_gros'), ':'), f, m, 'right'),
                            i.text(''.concat(k(t.tot_gros)), y, m, 'right'),
                            i.setFont(s, 'normal'),
                            i.line(22, m + 1, 186, m + 1),
                            (m += 14),
                            i.text(M('invoice.outro', { till: L(new Date(t.due_date)) }), 22, m),
                            (m += 19),
                            i.text(M('invoice.thanks'), 22, m),
                            (m += 5),
                            i.text(M('invoice.greetings'), 22, m),
                            (m += 10),
                            i.text(t.user.name, 22, m),
                            t.user.role && ((m += 5), i.text(t.user.role, 22, m)),
                            (m = 265),
                            i.text(M('amiv_eth'), 22, m),
                            (m += 5),
                            i.text(M('invoice.mwst'), 22, m),
                            (m = 260),
                            i.text(M('street'), 105, m, 'center'),
                            (m += 5),
                            i.text(M('cab'), 105, m, 'center'),
                            (m += 5),
                            i.text(M('zurich'), 105, m, 'center'),
                            (m += 5),
                            i.text(M('website'), 105, m, 'center'),
                            (m = 260),
                            i.text(M('invoice.bank_acc'), 135, m),
                            (m += 5),
                            i.text(M('invoice.blz'), 135, m),
                            (m += 5),
                            i.text(M('invoice.bank'), 135, m),
                            (m += 5),
                            i.text(M('invoice.iban'), 135, m),
                            (m += 5),
                            i.text(M('invoice.bic'), 135, m),
                            i.setLineWidth(g),
                            i.line(80, 255, 80, 285),
                            i.line(130, 255, 130, 285),
                            x(n),
                            i.save(''.concat(t.nr, '.pdf'));
                        })(this.inv_data, 'en');
                      },
                    },
                  }),
                ]);
              }
            },
          },
          {
            key: 'menu.ezag',
            path: '/test/ezag',
            addLanguagePrefix: !0,
            oncreate: a.a.route.link,
            view: class {
              constructor() {
                c.debug('Constructing new TestEzag'),
                  (this.ezag_data = [
                    {
                      name: 'Mavi Polatoglu',
                      amount: '184.90',
                      code: 'B-309K-190626-232617',
                      iban: 'CH7100700110006863150',
                      bic: 'ZKBKCHZZ80A',
                      currency: 'CHF',
                    },
                    {
                      name: 'Lioba Heimbach',
                      amount: '14.30',
                      code: 'B-114A-190728-231548',
                      iban: 'CH830021421410656640R',
                      bic: 'UBSWCHZH88A',
                      currency: 'CHF',
                    },
                    {
                      name: 'Lioba Heimbach',
                      amount: '14.90',
                      code: 'B-114A-190728-231633',
                      iban: 'CH830021421410656640R',
                      bic: 'UBSWCHZH88A',
                      currency: 'CHF',
                    },
                  ]);
              }
              view() {
                return a()('div', [
                  a()('h1', 'Test the generation of EZAGS here'),
                  a()(o.a, {
                    className: 'blue-button',
                    border: !0,
                    label: 'Download EZAG',
                    events: {
                      onclick: () => {
                        Ct('190805', this.ezag_data);
                      },
                    },
                  }),
                ]);
              }
            },
          },
        ]),
      },
      {
        path: '/profile',
        addLanguagePrefix: !0,
        oncreate: a.a.route.link,
        view: class {
          constructor() {
            c.debug('Constructing new Profile');
          }
          static async oninit() {
            await Ut.init(), a.a.redraw();
          }
          static view() {
            return a()('div.profile-container', [
              a()(At.a, { className: 'info-container', content: a()(Et, { userController: Ut }) }),
              a()(Ot.a, { label: 'Name', floatingLabel: !0, dense: !0 }),
              a()('div.settings', [
                a()(St.a, {
                  title: 'IBAN: '.concat(Ut.user.iban || M('profile.rfidNotSet')),
                  style: { margin: '16px 0', borderRadius: '4px' },
                  content: a()(Ht, { userController: Ut }),
                }),
              ]),
            ]);
          }
        },
      },
    ]);
    class Wt {
      constructor() {
        c.debug('Constructing new header');
      }
      view() {
        return a()(
          'header',
          a()('nav', [
            a()(
              'a.logo',
              { href: '/', onupdate: a.a.route.link },
              a()('img', { src: Nt.amiv, alt: 'AMIV an der ETH' })
            ),
            this.constructor._mainMenu,
            this.constructor._profileMenu,
            a()('div.language-selector', [
              a()(o.a, {
                label: 'en',
                className: 'bordered-button',
                border: 'en' === w(),
                inactive: 'en' === w(),
                tone: 'dark',
                events: { onclick: () => v('en') },
              }),
              a()(o.a, {
                label: 'de',
                className: 'bordered-button',
                border: 'de' === w(),
                inactive: 'de' === w(),
                tone: 'dark',
                events: { onclick: () => v('de') },
              }),
            ]),
          ])
        );
      }
      static get _mainMenu() {
        return a()(
          'ul.mainmenu',
          Bt.map((t, e) =>
            t.key
              ? a()('li', { class: Bt.selectedIndex === e ? 'active' : '' }, [
                  a()(
                    'a',
                    {
                      href: ''.concat(t.getLink()),
                      oncreate: a.a.route.link,
                      onupdate: a.a.route.link,
                      onclick: e => {
                        t.getLink().startsWith('/') &&
                          (a.a.route.set(t.getLink()), e.preventDefault());
                      },
                    },
                    M(t.key)
                  ),
                  t.submenu
                    ? [
                        a()('div.phantomElement'),
                        a()('ul.submenu', [
                          t.submenu.map((e, n) =>
                            a()(
                              'li',
                              { class: t.submenu.selectedIndex === n ? 'active' : '' },
                              a()(
                                'a',
                                {
                                  href: ''.concat(e.getLink()),
                                  oncreate: a.a.route.link,
                                  onupdate: e.onupdate,
                                },
                                M(e.key)
                              )
                            )
                          ),
                        ]),
                      ]
                    : a()(''),
                ])
              : ''
          )
        );
      }
      static get _profileMenu() {
        return a()(
          'ul.profile',
          E.authenticated || (A('amiv_token') && A('qtool_token'))
            ? [
                a()(
                  'li',
                  { class: a.a.route.get().includes('/profile') ? 'active' : '' },
                  a()(
                    'a',
                    {
                      href: '/'.concat(w(), '/profile'),
                      onupdate: a.a.route.link,
                      oncreate: a.a.route.link,
                    },
                    M('menu.profile')
                  )
                ),
                a()(
                  'li',
                  a()(
                    'a',
                    {
                      href: '/',
                      oncreate: a.a.route.link,
                      onclick: () => V().then(a.a.route.link),
                    },
                    M('menu.logout')
                  )
                ),
              ]
            : [
                a()(
                  'li',
                  { class: 'not-logged-in' },
                  a()('a', { onclick: () => F() }, a()('span', M('menu.login')))
                ),
              ]
        );
      }
    }
    c.debug('Initializing layout');
    class qt {
      static view(t) {
        return a()('div', [
          a()(Wt),
          a()(r.a),
          a()('main', { style: { height: 'calc(100vh - 130px)' } }, t.children),
        ]);
      }
    }
    n(331);
    var Zt = n(32);
    Object(Zt.d)();
    const Jt = '#e8462b',
      Kt = '#274284',
      Yt = '#5a6db4';
    function Rt(t) {
      return { view: () => a()(qt, a()(t)) };
    }
    Zt.a.addStyle('.blue-button', { color_light_text: Kt }),
      Zt.a.addStyle('.blue-button-filled', {
        color_light_background: Kt,
        color_light_text: 'white',
      }),
      Zt.a.addStyle('.red-row-button', {
        color_light_text: 'white',
        color_light_background: Jt,
        padding_h: 0,
        font_size: 12,
        margin_h: 0,
      }),
      Zt.a.addStyle('.blue-row-button', {
        color_light_text: 'white',
        color_light_background: Yt,
        padding_h: 0,
        font_size: 12,
        margin_h: 0,
      }),
      Zt.b.addStyle('.pe-card', { border_radius: '4' }),
      Zt.c.addStyle('.pe-shadow', {
        'shadow-top-z-1': 'initial',
        'shadow-bottom-z-1': '0 0 1px 0 rgba(0, 0, 0, 0.37)',
      }),
      c.info('Starting website'),
      b();
    const Qt = {};
    Bt.items.forEach(t => {
      t.path && t.view && (Qt['/:language'.concat(t.path)] = Rt(t.view)),
        t.submenu &&
          t.submenu.items.forEach(t => {
            t.path && t.view && (Qt['/:language'.concat(t.path)] = Rt(t.view));
          });
    }),
      (Qt['/'] = Rt(u)),
      (Qt['/oauthcallback'] = class {
        oninit() {
          H.token.getToken(a.a.route.get()).then(t => {
            S('amiv_token', t.accessToken),
              W()
                .then(() => {
                  const t = new URLSearchParams(window.location.search);
                  a.a.route.set(t.has('redir') ? t.get('redir') : '/');
                })
                .catch();
          });
        }
        view() {
          return 'redirecting...';
        }
      }),
      a.a.route.prefix(''),
      a.a.route(document.body, '/', Qt);
  },
});
