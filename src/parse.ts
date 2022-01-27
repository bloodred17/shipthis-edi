import * as Validator from 'edifact/validator';
import * as Parser from 'edifact/parser';
import * as Segments from 'edifact/segments';
import * as Elements from 'edifact/elements';


const validator = new Validator();
const parser = new Parser(validator);

validator.define(Segments);
validator.define(Elements);

let doc = '';

doc += 'UNB+UNOA:1+005435656:1+006415160:1+060515:1434+00000000000778\'';
// doc += 'UNH+00000000000117+INV\n\rOIC:D:97B:UN\'';
// doc += 'BGM+380+342459+9\'';
// doc += 'DTM+3:20060515:102\'';
// doc += 'RFF+ON:521052\'';
// doc += 'NAD+BY+792820524::16++CUMMINS MID-RANGE ENGINE PLANT\'';
// doc += 'NAD+SE+005435656::16++GENERAL WIDGET COMPANY\'';
// doc += 'CUX+1:USD\'';
// doc += 'LIN+1++157870:IN\'';
// doc += 'IMD+F++:::WIDGET\'';
// doc += 'QTY+47:1020:EA\'';
// doc += 'ALI+US\'';
// doc += 'MOA+203:1202.58\'';
// doc += 'PRI+INV:1.179\'';
// doc += 'LIN+2++157871:IN\'';
// doc += 'IMD+F++:::DIFFERENT WIDGET\'';
// doc += 'QTY+47:20:EA\'';
// doc += 'ALI+JP\'';
// doc += 'MOA+203:410\'';
// doc += 'PRI+INV:20.5\'';
// doc += 'UNS+S\'';
// doc += 'MOA+39:2137.58\'';
// doc += 'ALC+C+ABG\'';
// doc += 'MOA+8:525\'';
// doc += 'UNT+23+00000000000117\'';
// doc += 'UNZ+1+00000000000778\'';

// eslint-disable-next-line prefer-const
let result;
let elements;
let components;

parser.on('opensegment', function (segment) {
  elements = [];
  result.push({ name: segment, elements: elements });
});

parser.on('closesegment', function () {
  //
});


parser.on('element', function () {
  components = [];
  elements.push(components);
});

parser.on('component', function (value) {
  components.push(value);
});

result = [];

parser.encoding('UNOA');
parser.write(doc);
parser.end();

console.log(JSON.stringify(result, undefined, 2));
