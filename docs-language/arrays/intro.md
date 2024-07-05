---
sidebar_position: 1
---

# Εισαγωγή

Οι πίνακες είναι μια συλλογή από τιμές, οι οποίες αποθηκεύονται σε μια μεταβλητή. Οι τιμές αυτές μπορούν να είναι οποιουδήποτε τύπου δεδομένων.

Για να δηλώσουμε έναν πίνακα, χρησιμοποιούμε τα αγκύλες `[]`.

<!-- prettier-ignore -->
```javascript
const fruits = ["Apple", "Banana", "Orange"];
```

Οι τιμές ενός πίνακα μπορούν να αλλάξουν κατά τη διάρκεια της εκτέλεσης του προγράμματος. Αυτό σημαίνει ότι μπορούμε να προσθέσουμε, να αφαιρέσουμε ή να αλλάξουμε τις τιμές του πίνακα.

Επίσης οι τιμές ενός πίνακα μπορούν να είναι οποιουδήποτε τύπου δεδομένων.

<!-- prettier-ignore -->
```javascript
const arr = [10, "Hello", true, null, undefined];
```

## Πρόσβαση σε Στοιχεία

Για να αποκτήσουμε πρόσβαση σε ένα στοιχείο ενός πίνακα, χρησιμοποιούμε τον αριθμό της θέσης του στοιχείου μέσα στις αγκύλες `[]`.

Οι θέσεις των στοιχείων ενός πίνακα ξεκινούν από το 0.

<!-- prettier-ignore -->
```javascript
const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[0]); // "Apple"
console.log(fruits[1]); // "Banana"
console.log(fruits[2]); // "Orange"
```

<br />

<!-- prettier-ignore -->
> [!NOTE]
> Αν προσπαθήσουμε να αποκτήσουμε πρόσβαση σε μια θέση που δεν υπάρχει, τότε η τιμή που επιστρέφεται είναι `undefined`.

<br />

<!-- prettier-ignore -->
```javascript
console.log(fruits[3]); // undefined
```

## Μήκος Πίνακα

Για να μάθουμε το μήκος ενός πίνακα, χρησιμοποιούμε την ιδιότητα `length`.

<!-- prettier-ignore -->
```javascript
const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.length); // 3
```

## Προσθήκη Στοιχείων

Για να προσθέσουμε ένα στοιχείο στο τέλος ενός πίνακα, χρησιμοποιούμε τη μέθοδο `push()`.

<!-- prettier-ignore -->
```javascript
const fruits = ["Apple", "Banana", "Orange"];

fruits.push("Strawberry");

console.log(fruits); // ["Apple", "Banana", "Orange", "Strawberry"]
```

## Αφαίρεση Στοιχείων

Για να αφαιρέσουμε το τελευταίο στοιχείο ενός πίνακα, χρησιμοποιούμε τη μέθοδο `pop()`.

<!-- prettier-ignore -->
```javascript
const fruits = ["Apple", "Banana", "Orange"];

fruits.pop();

console.log(fruits); // ["Apple", "Banana"]
```

Για να αφαιρέσουμε το πρώτο στοιχείο ενός πίνακα, χρησιμοποιούμε τη μέθοδο `shift()`.

<!-- prettier-ignore -->
```javascript
const fruits = ["Apple", "Banana", "Orange"];

fruits.shift();

console.log(fruits); // ["Banana", "Orange"]
```

## Οι Πίνακες είναι Αντικείμενα

Στην JavaScript, οι πίνακες είναι αντικείμενα. Αυτό σημαίνει ότι μπορούμε να προσθέσουμε ιδιότητες και μεθόδους σε έναν πίνακα.

<!-- prettier-ignore -->
```javascript
const fruits = ["Apple", "Banana", "Orange"];

fruits.color = "Red";           // Προσθήκη ιδιότητας

console.log(fruits.color);      // "Red"

fruits.sayHello = function() {  // Προσθήκη μεθόδου
  console.log("Hello!");
};

fruits.sayHello();              // "Hello!"

for (let item in fruits) {      // Εμφάνιση όλων των ιδιοτήτων (κλειδιών) του πίνακα
  console.log(item);            // "0", "1", "2", "color", "sayHello"
}
```
