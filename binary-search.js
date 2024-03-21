function searchPhoneNumber(nameToFind, phoneArray) {
  let leftRange = 0;
  let rightRange = phoneArray.length - 1;

  while (leftRange <= rightRange) {
    const middle = Math.floor((leftRange + rightRange) / 2);
    const currentName = phoneArray[middle].name;

    if (currentName === nameToFind) return phoneArray[middle].phoneNumber;

    if (currentName < nameToFind) leftRange = middle + 1;
    else rightRange = middle - 1;
  }
  return "Number not in phonebook";
}

const phoneBook = [
  { name: "Alice", phoneNumber: "123-456-7890" },
  { name: "Bob", phoneNumber: "987-654-3210" },
  // ... other entries ...
];
// Example usage:
const personName = "Bob";
const phoneNumber = searchPhoneNumber(personName, phoneBook);
console.log(`Phone number for ${personName}: ${phoneNumber}`);


SELECT s.SUPPLIER_NAME AS SUPPLIER, p.PRICE
FROM SUPPLIER s
INNER JOIN SUPPLY sp ON s.SUPPLIER_CODE = sp.SUPPLIER_CODE
INNER JOIN PART p ON sp.PART_CODE = p.PART_CODE
INNER JOIN CAR c ON sp.CAR_CODE = c.CAR_CODE
WHERE s.CITY = 'VITORIA' AND p.NAME_PART = 'MOTOR' AND c.NAME_CAR = 'KOMBI';
