let defaultOwner = { firstName: "taesang", lastName: "noh" };
spaceship.owner = defaultOwner;
defaultOwner = { firstName: "a", lastName: "b" };

// 1. 기본적인 캡슐화를 위해 가장 먼저 데이터를 읽고 쓰는 함수부터 정의한다.
function getDefaultOwner() {
  return defaultOwner;
}

function setDefaultOwner(arg) {
  defaultOwner = arg;
}

// 3. 그런 다음 defaultOwner를 참조하는 코드를 찾아내서 방금 만든 게터 함수를 호출하도록 고친다.
spaceship.owner = getDefaultOwner();
setDefaultOwner({ firstName: "a", lastName: "b" });

// 4. 모든 참조를 수정했다면 이제 변수의 가시 범위를 제한한다.
let defaultOwner1 = { firstName: "taesang", lastName: "noh" };
export function getDefaultOwner1() {
  return defaultOwner1;
}
export function setDefaultOwner1(arg) {
  defaultOwner1 = arg;
}

// 나는 게터 이름 앞에 get을 붙이는 것을 싫어해서 get을 빼도록 하겠다.
let defaultOwnerData = { firstName: "taesang", lastName: "noh" };
export function defaultOwner() {
  return defaultOwnerData;
}
export function setDefaultOwner2(arg) {
  defaultOwnerData = arg;
}

// 게터가 복제본을 반환하도록 하여 수정하지 못하도록 한다.
export function defaultOwner() {
  return Object.assign({}, defaultOwnerData);
}

// 데이터를 변경하기를 원하는 클라이언트가 있을 수 있다.
// 이를 위한 좋은 방법이 레코드 캡슐화하기다.
let defaultOwnerData3 = { firstName: "taesang", lastName: "noh" };
export function defaultOwner3() {
  return new personalbar(defaultOwnerData1);
}
export function setDefaultOwner3(arg) {
  defaultOwnerData3 = arg;
}
class Person {
  constructor(data) {
    this._lastName = data.lastName;
    this._firstName = data.firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get firstName() {
    return this._firstName;
  }
}
