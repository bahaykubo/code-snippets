import { parseWithXMLJs, parseWithXMLParser } from '../xml/parser';
import { generateLixiMessage } from '../xml/builder';

const xml = generateLixiMessage({
  orderNumber: 'BTX-8888-ABC',
  valuer: 'ValuerName',
  status: 'Accepted',
}).end({ prettyPrint: true });

console.log('<-- Built XML -->');
console.log(`${xml}\n`);

const xmlObjectWithXMLParser = parseWithXMLParser(xml);
console.log('<-- Parsed XML With XML Parser -->');
console.log(`${JSON.stringify(xmlObjectWithXMLParser, null, 2)}\n`);

const xmlObjectWithXMLJs = parseWithXMLJs(xml);
console.log('<-- Parsed XML With XML JS -->');
console.log(`${JSON.stringify(xmlObjectWithXMLJs, null, 2)}\n`);
