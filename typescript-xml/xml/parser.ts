import { XMLParser } from 'fast-xml-parser';
import xmlJs from 'xml-js';

export const parseWithXMLParser = (xml: string) => {
  return new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '' }).parse(xml);
};

export const parseWithXMLJs = (xml: string) => {
  return xmlJs.xml2js(xml);
};
