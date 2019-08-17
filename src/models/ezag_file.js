import { js2xml } from 'xml-js';
import { save } from 'save-file';
import { addDays, log } from '../utils';
import ezag_template from '../../res/ezag/ezag_template';
import ezag_payment_template from '../../res/ezag/ezag_payment_template';

function generate_payment(payment, ezag_id, serial_id) {
  const res = ezag_payment_template;
  res.PmtId.InstrId._text = `InstrId-${ezag_id}-${serial_id}`;
  res.PmtId.EndToEndId._text = payment.code;
  res.Amt.InstdAmt._attributes.Ccy = payment.currency;
  res.Amt.InstdAmt._text = payment.amount;
  res.CdtrAgt.FinInstnId.BIC._text = payment.bic;
  res.Cdtr.Nm._text = payment.name;
  res.CdtrAcct.Id.IBAN._text = payment.iban;

  return JSON.parse(JSON.stringify(res));
}

export default async function generateEZAG(ezag_id, payments) {
  const ezag = ezag_template;
  let control_sum = 0;

  const payment_list = payments.map((payment, i) => {
    control_sum += Number(payment.amount);
    return generate_payment(payment, ezag_id, i);
  });

  const date = new Date();
  const credttm = date.toISOString().substr(0, 19);

  ezag.Document.CstmrCdtTrfInitn.GrpHdr.MsgId._text = `Msg-${ezag_id}`;
  ezag.Document.CstmrCdtTrfInitn.GrpHdr.CreDtTm._text = credttm;
  ezag.Document.CstmrCdtTrfInitn.GrpHdr.NbOfTxs._text = payments.length;
  ezag.Document.CstmrCdtTrfInitn.GrpHdr.CtrlSum._text = control_sum.toFixed(2);

  const required_execution_date = addDays(date, 1)
    .toISOString()
    .substr(0, 10);
  ezag.Document.CstmrCdtTrfInitn.PmtInf.PmtInfId._text = `PmtInf-${ezag_id}`;
  ezag.Document.CstmrCdtTrfInitn.PmtInf.ReqdExctnDt._text = required_execution_date;

  ezag.Document.CstmrCdtTrfInitn.PmtInf.CdtTrfTxInf = payment_list;

  const options = { compact: true, ignoreComment: true, spaces: 4 };
  const result = js2xml(ezag, options);

  log.info('generated Xml file', result);

  await save(result, `Msg-${ezag_id}.xml`);
}
