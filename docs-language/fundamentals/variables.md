# Μεταβλητές

Οι μεταβλητές είναι οι βασικές μονάδες αποθήκευσης πληροφορίας σε ένα πρόγραμμα. Μια μεταβλητή **είναι ένα όνομα (label) που αναφέρεται σε μια τιμή**.

## Δήλωση Μεταβλητών

Στην JavaScript, οι μεταβλητές δηλώνονται με το λεκτικό `var`.

Μπορούμε να δηλώσουμε μια μεταβλητή χωρίς να της αναθέσουμε τιμή, αλλά αυτό σημαίνει ότι η τιμή της μεταβλητής θα είναι `undefined`.

<!-- prettier-ignore -->
```javascript
var x;                  // Δήλωση μεταβλητής
console.log(x);         // undefined
```

## Ανάθεση Τιμής

Μια μεταβλητή μπορεί να περιέχει οποιαδήποτε τιμή, όπως αριθμούς, αλφαριθμητικά, boolean, κλπ.

<!-- prettier-ignore -->
```javascript
var x = 5;              // Ταυτόχρονη δήλωση και ανάθεση αριθμητικής τιμής
var y = "Hello";        // Αλφαριθμητική τιμή
var z = true;           // Boolean τιμή

console.log(x);         // 5
console.log(y);         // "Hello"
console.log(z);         // true
```

## Εμβέλεια

Η εμβέλεια μιας μεταβλητής αναφέρεται στο πόσο μακριά από το σημείο δήλωσης της μπορεί να χρησιμοποιηθεί. Οι μεταβλητές μπορεί να έχουν είτε `τοπική (local)` εμβέλεια, είτε `καθολική (global)` εμβέλεια.

### var

---

Οι μεταβλητές που δηλώνονται με το με το λεκτικό `var` έχουν είτε global εμβέλεια, είτε εμβέλεια στα πλαίσια μιας συνάρτησης, ανάλογα με το σημείο δήλωσης τους.

<!-- prettier-ignore -->
```javascript
var x = 5;              // Global μεταβλητή

function myFunction() {
  var y = 10;           // Local μεταβλητή
  console.log(x);       // 5
  console.log(y);       // 10
}

console.log(x);         // 5
console.log(y);         // ReferenceError: y is not defined
```

<br />

<!-- prettier-ignore -->
> [!NOTE] 
> Αν μια μεταβλητή var δηλώνεται μέσα σε ένα code block (π.χ. μέσα σε ένα if statement), τότε η εμβέλεια της μεταβλητής δεν περιορίζεται στο block αυτό, αλλά είναι η συνάρτηση στην οποία ανήκει το code block. Αν το code block δεν ανήκει σε κάποια συνάρτηση, τότε η μεταβλητή έχει global εμβέλεια.

<br />

<!-- prettier-ignore -->
```javascript
if (true) {
  var x = 5;            // Η x έχει global εμβέλεια
}

function myFunction() {
    if (true) {
        var y = 10;     // Η y έχει local εμβέλεια στην myFunction
    }
}

console.log(x);         // 5
console.log(y);         // ReferenceError: y is not defined
```

### let

---

Η εντολή `let` εισήχθη στην ES6 και χρησιμοποιείται για τη δήλωση μεταβλητών με block scope. Αυτό σημαίνει ότι οι μεταβλητές που δηλώνονται με το λεκτικό `let` έχουν εμβέλεια μόνο στο block στο οποίο δηλώνονται.

<!-- prettier-ignore -->
```javascript
let x = 5;              // Global μεταβλητή

function myFunction() {
    let y = 10;         // Local μεταβλητή στην myFunction
    console.log(x);     // 5
    console.log(y);     // 10

    for (let i = 0; i < 5; i++) {
        console.log(i); // Local μεταβλητή i μέσα στο for loop
    }

    console.log(i);     // ReferenceError: i is not defined
}

console.log(x);         // 5
console.log(y);         // ReferenceError: y is not defined
```

Επίσης μια μεταβλητή που δηλώνεται με το λεκτικό `let` δεν μπορεί να ξαναδηλωθεί μέσα στο ίδιο block, κάτι το οποίο είναι δυνατό με το λεκτικό `var`.

<!-- prettier-ignore -->
```javascript
let x = 5;
let x = 10;             // SyntaxError: Identifier 'x' has already been declared
```

### const

---

Η εντολή `const` χρησιμοποιείται για τη δήλωση μεταβλητών με block scope, οι οποίες δεν μπορούν να αλλάξουν τιμή μετά την αρχική ανάθεση.

<!-- prettier-ignore -->
```javascript
const x = 5;            // Η x είναι μια σταθερά

x = 10;                 // TypeError: Assignment to constant variable
```

Όπως και με το `let`, μια μεταβλητή που δηλώνεται με το λεκτικό `const` δεν μπορεί να ξαναδηλωθεί μέσα στο ίδιο block.

<!-- prettier-ignore -->
```javascript
const x = 5;
const x = 10;           // SyntaxError: Identifier 'x' has already been declared
```

Μια μεταβλητή που δηλώνεται με το λεκτικό `const` πρέπει να αρχικοποιηθεί με μια τιμή.

<!-- prettier-ignore -->
```javascript
const x;                // SyntaxError: Missing initializer in const declaration
```

Το λεκτικό `const` είναι λίγο παραπλανητικό. Στην ουσία δεν ορίζει μία σταθερή τιμή, αλλά μια σταθερή αναφορά σε μια τιμή.

Αυτό σημαίνει οτι ΔΕΝ μπορούμε να:

-   Εκχωρήσουμε ξανά μια constant τιμή
-   Εκχωρήσουμε ξανά ένα constant πίνακα
-   Εκχωρήσουμε ξανά ένα constant αντικειμένο

Αλλά μπορούμε να:

-   Αλλάξουμε τα στοιχεία ενός constant πίνακα
-   Αλλάξουμε τις ιδιότητες ενός constant αντικειμένου

<br />

<!-- prettier-ignore -->
> [!TIP]
Με την εισαγωγή των `let` και `const` στην ES6, η χρήση του `var` έχει μειωθεί σημαντικά. Συνιστάται να χρησιμοποιείς `let` για μεταβλητές που μπορεί να αλλάξουν τιμή και `const` για σταθερές.