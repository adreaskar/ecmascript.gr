---
sidebar_position: 1
---

# Εισαγωγή

## Δήλωση Συνάρτησης

Για να δηλώσουμε μια συνάρτηση στην JavaScript, χρησιμοποιούμε τη λέξη-κλειδί `function`.

<!-- prettier-ignore -->
```javascript
function myFunction() {
  console.log("Hello World!");
}
```

Η συνάρτηση αυτή μπορεί να κληθεί με το όνομά της.

<!-- prettier-ignore -->
```javascript
myFunction();           // "Hello World!"
```

## Οι Συναρτήσεις είναι Αντικείμενα

Στην JavaScript, οι συναρτήσεις είναι αντικείμενα. Αυτό σημαίνει ότι μπορούμε να προσθέσουμε ιδιότητες και μεθόδους σε μια συνάρτηση.

<!-- prettier-ignore -->
```javascript
function myFunction() {
  console.log("Hello World!");
}

myFunction.color = "Red";           // Προσθήκη ιδιότητας

console.log(myFunction.color);      // "Red"

myFunction.sayHello = function() {  // Προσθήκη μεθόδου
  console.log("Hello!");
};

myFunction.sayHello();              // "Hello!"

for (let item in myFunction) {      // Εμφάνιση όλων των ιδιοτήτων (κλειδιών) της συνάρτησης
  console.log(item);                // "color", "sayHello"
}
```

## Ανώνυμες Συναρτήσεις

Μπορούμε επίσης να αναθέσουμε τη συνάρτηση σε μια μεταβλητή. Σε αυτήν τη περίπτωση, η κλήση της συνάρτησης γίνεται με το όνομα της μεταβλητής. Οι συναρτήσεις που αναθέτουμε σε μεταβλητές ονομάζονται `Ανώνυμες Συναρτήσεις`.

<!-- prettier-ignore -->
```javascript
const myFunction = function() {
  console.log("Hello World!");
};

myFunction();           // "Hello World!"
```

Η ανάθεση συνάρτησης σε μεταβλητή μας επιτρέπει επίσης να περάσουμε τη συνάρτηση ως όρισμα σε μια άλλη συνάρτηση.

<!-- prettier-ignore -->
```javascript
function sayHello(callbackFunction) {
  callback();
}

sayHello(myFunction);   // "Hello World!"
```

Οι συναρτήσεις που δίνονται ώς όρισμα σε μια άλλη συνάρτηση συχνά ονομάζονται `Συναρτήσεις Επανάκλησης (Callback Functions)`.

## Συναρτήσεις Υψηλότερης Τάξης

Οι συναρτήσεις που δέχονται μια άλλη συνάρτηση ως όρισμα ή επιστρέφουν μια συνάρτηση, ονομάζονται `Συναρτήσεις Υψηλότερης Τάξης (Higher-Order Functions)`.

Ένα παράδειγμα συνάρτησης υψηλότερης τάξης είναι η `filter()`, η οποία δέχεται μια συνάρτηση ως όρισμα και επιστρέφει ένα νέο πίνακα με τα στοιχεία που πληρούν τη συνθήκη που ορίζεται στη συνάρτηση. Η `filter()` είναι μια από τις πολλές ενσωματωμένες συναρτήσεις για πίνακες στη JavaScript.

<!-- prettier-ignore -->
```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers);   // [2, 4, 6, 8, 10]
```

## Arrow Functions

Οι `Arrow Functions` είναι μια συντομευμένη σύνταξη για τη δημιουργία συναρτήσεων στη JavaScript. Είναι συνήθως πιο σύντομες από τις συναρτήσεις που δηλώνονται με τη λέξη-κλειδί `function`. Οι Arrow Functions εισήχθησαν στην JavaScript με την ES6.

Όλοι οι παρακάτω ορισμοί συναρτήσεων είναι ισοδύναμοι.

<!-- prettier-ignore -->
```javascript
function addOne(input) { return input + 1; }
// ή
const addOne = function(input) { return input + 1; };
// ή
const addOne = (input) => { return input + 1; };
// ή
const addOne = (input) => input + 1;
// ή
const addOne = input => input + 1;
```

Αν η συνάρτηση δέχεται όρισμα, τότε δεν χρειάζεται να χρησιμοποιήσουμε παρενθέσεις, όπως στο τελευταίο παράδειγμα.

<!-- prettier-ignore -->
```javascript
const myFunction = name => {
  console.log(`Hello ${name}!`);
};

myFunction("John");   // "Hello John!"
```
