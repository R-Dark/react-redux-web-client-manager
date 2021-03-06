import * as jsPDF  from 'jspdf'
import letter_header from '../components/images/letter-2lines.png'
import letter_footer from '../components/images/letter-footer4.png'

export const runBatch = (data) => {
  // console.log(data)
  var doc = new jsPDF();
  return () => {
    for (var i = 0; i < data.length; i++) {
      doc.addImage(letter_header, 'PNG',0,0);
      doc.text(20,60, `Hello ${data[i].Owner}`);
      doc.text(20,70, `We would like to offer you: ${data[i].offerUpdate}`);
      doc.addImage(letter_footer, 'PNG',0,260);

      if (i != data.length-1) {
        doc.addPage();
      }
    }
    doc.save('ClientLetters.pdf');

     }
  }


  export const runReport = () => {
    return () => {
          console.log('runReport-test')
       }
  }


  export const runPackage = () => {
    return () => {
          console.log('runPackage-test')
       }
  }


//   function demoFromHTML() {
//     var pdf = new jsPDF('p', 'pt', 'letter');
//     // source can be HTML-formatted string, or a reference
//     // to an actual DOM element from which the text will be scraped.
//     source = $('#customers')[0];
//
//     // we support special element handlers. Register them with jQuery-style
//     // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
//     // There is no support for any other type of selectors
//     // (class, of compound) at this time.
//     specialElementHandlers = {
//         // element with id of "bypass" - jQuery style selector
//         '#bypassme': function (element, renderer) {
//             // true = "handled elsewhere, bypass text extraction"
//             return true
//         }
//     };
//     margins = {
//         top: 80,
//         bottom: 60,
//         left: 40,
//         width: 522
//     };
//     // all coords and widths are in jsPDF instance's declared units
//     // 'inches' in this case
//     pdf.fromHTML(
//     source, // HTML string or DOM elem ref.
//     margins.left, // x coord
//     margins.top, { // y coord
//         'width': margins.width, // max width of content on PDF
//         'elementHandlers': specialElementHandlers
//     },
//
//     function (dispose) {
//         // dispose: object with X, Y of the last line add to the PDF
//         //          this allow the insertion of new lines after html
//         pdf.save('Test.pdf');
//     }, margins);
// }
