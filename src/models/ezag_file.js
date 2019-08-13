// import jsonXmlConverter from 'xml-js';
import ezag_info from '../../res/ezag_info';
import { addDays } from '../utils';
//  import logos from '../../res/logos';

function generate_payment(payment, ezag_id, serial_id) {
  const result = {
    CdtTrfTxInf: {
      PmtId: { InstrId: `InstrId-${ezag_id}-${serial_id}`, EndToEndId: payment.code },
      Amt: payment.amount,
      CdtrAgt: { FinInstnId: { BIC: payment.bic } },
      Cdtr: { Nm: payment.name },
      CdtrAcct: { Id: { IBAN: payment.iban } },
    },
  };
  return JSON.parse(JSON.stringify(result)); // Just to be safe
}

export default function generateEZAG(ezag_id, payments) {
  // TODO EUROS Euros Euros Euros
  const ezag_id_temp = '190613';

  let control_sum = 0;
  const payment_list = payments.map((payment, i) => {
    control_sum += payment.amount;
    return generate_payment(payment, ezag_id_temp, i);
  });

  const date = new Date();
  const credttm = date.format('isoDateTime');
  const group_header = {
    MsgId: `Msg-${ezag_id_temp}`,
    CreDtTm: credttm,
    NbOfTxs: payments.size(),
    CtrlSum: control_sum,
    InitgPty: { Nm: ezag_info.name },
  };

  const required_execution_date = addDays(date, 1).format('isoDateTime');

  const payment_info = {
    PmtInfId: `PmtInf-${ezag_id_temp}`,
    PmtMtd: ezag_info.payment_method,
    BtchBookg: false, // For reasons...
    ReqdExctnDt: required_execution_date,
    Dbtr: { Nm: ezag_info.debitor },
    DbtrAcct: { Id: { IBAN: ezag_info.debitor_IBAN } },
    DbtrAgt: { DbtrAgt: { BIC: ezag_info.debitor_BIC } },
    CdtTrfTxInf: payment_list,
  };

  const file = {};
  file[ezag_info.title] = { CstmrCdtTrfInitn: { GrpHdr: group_header, PmtInf: payment_info } };
}
