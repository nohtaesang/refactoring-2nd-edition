// client1
reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };
const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

// client2
const aReading2 = acquireReading();
const baseCharge2 = baseRate(aReading2.month, aReading2.year) * aReading2.quantity;
const taxableCharge = Math.max(0, base - taxThreshold(aReading2.year));

// client3
const aReading3 = acquireReading();
const basicChargeAmount3 = calculateBaseCharge(aReading3);

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

// step 1
function enrichReading(original) {
  const result = cloneDeep(original);
  return result;
}

// step 2
const rawReading4 = acquireReading();
const aReading4 = enrichReading(rawReading4);
const basicChargeAmount4 = calculateBaseCharge(aReading4);

//
function enrichReading2(original) {
  const result = cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);
  return result;
}

const rawReading5 = acquireReading();
const aReading5 = enrichReading2(rawReading5);
const basicChargeAmount5 = aReading5.baseCharge;
