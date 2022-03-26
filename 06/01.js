// function printOwing(invoice) {
//   printBanner();
//   let outstanding = calculateOutstanding();

//   console.log(`고객명: ${invoice.ustomer}`);
//   console.log(`채무액: ${outstanding}`);
// }

function printOwing(invoice) {
  printBanner();
  const outstanding = calculateOutstanding(invoice);
  recordDueDate(invoice);
  printDetail(invoice, outstanding);
}

function calculateOutstanding(invoice) {
  let result = 0;
  for (const o of invoice.order) {
    result += o.amount;
  }
  return result;
}

function recordDueDate(invoice) {
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printDetail(invoice, outstanding) {
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
}

function printBanner() {
  console.log("*******************");
  console.log("**** 고객 채무 ****");
  console.log("*******************");
}

printOwing({});
