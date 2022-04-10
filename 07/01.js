const organization = { name: "애크미 구스베리", country: "GB" };

result += `<h1>${organization.name}</h1>`;
organization.name = newName;

// 가장 먼저 이 상수를 캡슐화 해보자.
function getRawDataOfOrganization() {
  return organization;
}

result += `<h1>${getRawDataOfOrganization().name}</h1>`;
getRawDataOfOrganization().name = newName;

//
class Organization {
  constructor(data) {
    this._data = data;
  }
}

const organization = new Organization({ name: "애크미 구스베리", country: "GB" });
function getRawDataOfOrganization() {
  return organization._data;
}
function getOrganization() {
  return organization;
}
//

class Organization {
  constructor(data) {
    this._data = data;
  }
  set name(aString) {
    this._data.name = aString;
  }
}

//
class Organization {
  constructor(data) {
    this._data = data;
  }
  set name(aString) {
    this._data.name = aString;
  }
  get name() {
    this._data.name;
  }
}

//
class Organization {
  constructor(data) {
    this_.name = data.name;
    this._country = data.country;
  }
  get name() {
    return this._name;
  }
  set name(aString) {
    this._name = aString;
  }
  get country() {
    return this._country;
  }
  set country(aCountryCode) {
    this._country = aCountryCode;
  }
}
