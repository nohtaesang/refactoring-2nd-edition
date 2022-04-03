// 예시: 함수 이름 바꾸기 (간단한 절차)
function circum(radius) {
  return 2 * Math.PI * radius;
}

// 이 함수의 이름을 이해하기 더 쉽게 바꾸기
function circumference(radius) {
  return 2 * Math.PI * radius;
}

function inNewEngland(aCustomer) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(aCustomer.address.state);
}

function inNewEngland2(aCustomer) {
  const stateCode = aCustomer.address.state;
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

function inNewEngland3(aCustomer) {
  const stateCode = aCustomer.address.state;
  return xxInNewEngland(stateCode);
}

function xxInNewEngland(stateCode) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

function inNewEngland4(aCustomer) {
  return xxInNewEngland(aCustomer.address.state);
}
