---
sidebar_position: 4
---

# Αλλαγή τύπου

Όπως είπαμε στην αρχή, η JavaScript είναι μια γλώσσα δυναμικού τύπου, που σημαίνει ότι μια μεταβλητή μπορεί να περιέχει δεδομένα διαφορετικού τύπου κατά τη διάρκεια της εκτέλεσης του προγράμματος.

Υπάρχουν δύο τρόποι για να αλλάξει ο τύπος μιας τιμής:

-   Type Conversion (Type Casting)
-   Type Coercion (Implicit Type Conversion)

## Type Conversion

Με αυτόν τον όρο εννοούμε την εξαναγκασμένη αλλαγή τύπου μιας τιμής από τον προγραμματιστή. Αυτό γίνεται με τη χρήση των συναρτήσεων `Number()`, `String()`, `Boolean()`.

### Number()

Συνάρτηση που μετατρέπει μια τιμή σε αριθμό.

<!-- prettier-ignore -->
```javascript
const x = "10";
console.log(Number(x)); // 10
```

Αν η τιμή δεν μπορεί να μετατραπεί σε αριθμό, τότε η συνάρτηση επιστρέφει την τιμή `NaN`.

<!-- prettier-ignore -->
```javascript
const x = "Hello";
console.log(Number(x)); // NaN
```

### String()

Συνάρτηση που μετατρέπει μια τιμή σε αλφαριθμητικό.

<!-- prettier-ignore -->
```javascript
const x = 10;
console.log(String(x)); // "10"
```

### Boolean()

Συνάρτηση που μετατρέπει μια τιμή σε boolean.

Οι εξής τιμές μετατρέπονται σε `false`:

-   `false`
-   `0`
-   `""` (κενό string)
-   `null`
-   `undefined`
-   `NaN`

Οποιαδήποτε άλλη τιμή μετατρέπεται σε `true`.

<!-- prettier-ignore -->
```javascript
const x = 0;
console.log(Boolean(x)); // false

const y = "Hello";
console.log(Boolean(y)); // true
```

## Type Coercion

Με αυτόν τον όρο εννοούμε την αυτόματη αλλαγή τύπου μιας τιμής από την JavaScript. Αυτό συμβαίνει όταν δύο τιμές διαφορετικών τύπων συγκρίνονται μεταξύ τους.

Για παράδειγμα, όταν μια αριθμητική τιμή συγκρίνεται με μια αλφαριθμητική τιμή, η αλφαριθμητική τιμή μετατρέπεται σε αριθμό.

<!-- prettier-ignore -->
```javascript
const x = 10;
const y = "10";

console.log(x == y);    // true
```

Στο παραπάνω παράδειγμα, η τιμή της μεταβλητής `y` μετατρέπεται σε αριθμό πριν γίνει η σύγκριση.

### Συνένωση Τύπων

Όταν συνενώνουμε δύο αλφαριθμητικές τιμές με τον τελεστή `+`, τότε οι τιμές μετατρέπονται σε αλφαριθμητικές.

<!-- prettier-ignore -->
```javascript
const x = "Hello";
const y = "World";

console.log(x + y);     // "HelloWorld"
```

Αν η μία τιμή είναι αριθμός, τότε η αλλη τιμή μετατρέπεται σε αριθμό.

<!-- prettier-ignore -->
```javascript
const x = 10;
const y = "20";

console.log(x + y);     // 30
```

Αν οι δύο τιμές είναι αριθμοί, τότε γίνεται αριθμητική πρόσθεση.

<!-- prettier-ignore -->
```javascript
const x = 10;
const y = 20;

console.log(x + y);     // 30
```

## Truthy & Falsy

Στην JavaScript, υπάρχουν οι εξής τιμές που ερμηνεύονται ως `false`:

-   `false`
-   `0`
-   `""` (κενό string)
-   `null`
-   `undefined`
-   `NaN`

Οποιαδήποτε άλλη τιμή ερμηνεύεται ως `true`.

<!-- prettier-ignore -->
```javascript
const x = 0;

if (x) {
  console.log("Truthy");
} else {
  console.log("Falsy"); // Εκτυπώνει "Falsy"
}
```

## Χαλαρή Ισότητα

Η χαλαρή ισότητα (Loose Equality) είναι μια σύγκριση μεταξύ δύο τιμών χωρίς να λαμβάνεται υπόψη ο τύπος τους. Αυτό σημαίνει ότι οι τιμές με διαφορετικούς τύπους μπορούν να είναι ίσες.

Ο τελεστής για τη χαλαρή ισότητα είναι το `==`.

<!-- prettier-ignore -->
```javascript
const x = 10;
const y = "10";

if (x == y) {
  console.log("Equal"); // Εκτυπώνει "Equal"
}
```

## Αυστηρή Ισότητα

Η αυστηρή ισότητα (Strict Equality) είναι μια σύγκριση μεταξύ δύο τιμών λαμβάνοντας υπόψη και τον τύπο τους. Αυτό σημαίνει ότι οι τιμές με διαφορετικούς τύπους δεν μπορούν να είναι ίσες.

Ο τελεστής για την αυστηρή ισότητα είναι το `===`.

<!-- prettier-ignore -->
```javascript
const x = 10;
const y = "10";

if (x === y) {
  console.log("Equal");
} else {
  console.log("Not Equal"); // Εκτυπώνει "Not Equal"
}
```
