class Order {
  constructor(data) {
    this.priority = data.priority;
  }
}

highPriorityCount = orders.filter((o) => "high" === o.priority || "rush" == o.priority).length;

//
class Order {
  constructor(data) {
    this.priority = data.priority;
  }
  get priority() {
    return this._priority;
  }
  set priority(aString) {
    this._priority = aString;
  }
}

//
class Priority {
  constructor(value) {
    this._value = value;
  }
  toString() {
    return this._value;
  }
}

//

class Order {
  constructor(data) {
    this.priority = data.priority;
  }
  get priority() {
    return this._priority.toString();
  }
  set priority(aString) {
    this._priority = new Priority(aString);
  }
}

//

class Order {
  constructor(data) {
    this.priority = data.priority;
  }
  get priorityString() {
    return this._priority.toString();
  }
  set priority(aString) {
    this._priority = new Priority(aString);
  }
}

highPriorityCount = orders.filter((o) => "high" === o.priorityString || "rush" == o.priorityString).length;

//
