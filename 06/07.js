// 예시: 변수 이름 바꾸기
let tpHd = "untitled";

// 어떤 참조는 다음과 같이 변수를 읽기만 한다.
result += `<h1>${tpHd}</h1>`;

// 값을 수정하는 곳도 있다고 해보자.
tdHd = "hello world";

// 나는 이럴 때 주로 변수 캡슐화하기로 처리한다.
result += `<h1>${title()}</h1>`;
setTitle("hello world");

function title() {
  return tpHd;
}
function setTitle(arg) {
  tpHd = arg;
}

// 캡슐화 후에는 변수의 이름을 바꿔도 된다.
let _title = "untitled";
function title() {
  return _title;
}
function setTitle(arg) {
  _title = arg;
}

// 예시: 상수 이름 바꾸기
const cpyNm = "hello world";

// 먼저 원본의 이름을 바꾼 후, 원본의 원래 이름과 같은 복제본을 만든다.
const companyName = "hello world";
const cpyNm = companyName;
