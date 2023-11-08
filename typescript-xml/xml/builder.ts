import { create } from 'xmlbuilder2';
import moment from 'moment';
import { XMLBuilder } from 'xmlbuilder2/lib/interfaces';

export interface LixiMessage {
  orderNumber: string;
  valuer: string;
  status: string;
}

export const generateLixiMessage = (options: LixiMessage) => {
  const message = create().ele('ValuationTransaction').att({ ProductionData: 'Yes' });
  addRevisionAndIdentifiersElements(message, options);
  addDateAndTimeElement(message);
  addPublisherElement(message, options.valuer);
  return message;
};

const addRevisionAndIdentifiersElements = (message: XMLBuilder, options: LixiMessage) => {
  message
    .ele('RevisionNumber')
    .att({
      LIXIVersion: '1.6',
      LenderVersion: '1.0',
      UserVersion: '1.0',
      UserType: 'Lender',
    })
    .up()
    .ele('Identifier')
    .att({
      UniqueID: 'b3359a25-bdd5-4a48-b35f-f11af15b75b6',
      Type: 'VPMAssigned',
      Description: options.status,
    })
    .up()
    .ele('Identifier')
    .att({
      UniqueID: options.orderNumber,
      Type: 'VMPAssigned',
      Description: 'CompanyName Order Number',
    });
};

const addDateAndTimeElement = (message: XMLBuilder) => {
  message.ele('Date').txt(moment().format('YYYY-MM-DD')).up().ele('Time').txt(moment().format('HH:mm:ss.SSSZ'));
};

const addPublisherElement = (message: XMLBuilder, valuer: string) => {
  message.ele('Publisher').ele('RelatedEntityRef').att({
    RelatedID: valuer,
  });
};
