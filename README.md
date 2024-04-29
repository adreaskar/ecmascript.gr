# Ο κόσμος της JavaScript

Η JavaScript είναι μια γλώσσα προγραμματισμού που χρησιμοποιείται κυρίως για εισαγωγή διαδραστικότητας στις ιστοσελίδες μας. Είναι όμως αρκετά ιδιαίτερη στον τρόπο με τον οποίο λειτουργεί, με κανόνες που πιθανώς δεν συμβαδίζουν με άλλες γλώσσες τις οποίες να έχετε συναντήσει (π.χ. Java ή C).

Σε αυτό τον οδηγό θα δούμε τα βασικά στοιχεία της JavaScript και θα κατανοήσουμε καλύτερα τα κομμάτια τα οποία την κάνουν να ξεχωρίζει από άλλες γλώσσες.

# Περιεχόμενα

<!-- prettier-ignore -->
1. [Εισαγωγή](#εισαγωγή)
    - [Φταίει η JavaScript;](#φταίει-η-javascript)
    - [Spec & Manuals](#spec--manuals)
        - [Specification](#specification)
        - [MDN Web Docs](#mdn-web-docs)
    - [Compiled ή Interpreted;](#compiled-ή-interpreted)
2. [Μεταβλητές](#μεταβλητές)
    - [Δήλωση Μεταβλητών](#δήλωση-μεταβλητών)
    - [Ανάθεση Τιμής](#ανάθεση-τιμής)
    - [Εμβέλεια](#εμβέλεια)
        - [var](#var)
        - [let](#let)
        - [const](#const)
    - [ES6 Μεταβλητές](#es6-μεταβλητές)
3. [Τύποι Δεδομένων](#τύποι-δεδομένων)
    - [typeof](#typeof)
    - [Primitive Types](#primitive-types)
        - [Number](#number)
        - [String](#string)
        - [Boolean](#boolean)
        - [Undefined](#undefined)
        - [Null](#null)
        - [BigInt](#bigint)
        - [Symbol](#symbol)
    - [Objects](#objects)
    - [Αλλαγή Τύπου](#αλλαγή-τύπου)
        - [Έμμεση Μετατροπή (Implicit Conversion)](#άμεση-μετατροπή-implicit-conversion)
        - [Συνένωση Τύπων](#συνένωση-τύπων)
        - [Άμεση Μετατροπή (Explicit Conversion)](#άμεση-μετατροπή-explicit-conversion)
        - [Truthy & Falsy](#truthy-falsy)
        - [Χαλαρή Ισότητα](#χαλαρή-ισότητα)
        - [Αυστηρή Ισότητα](#αυστηρή-ισότητα)
4. [Συνθήκες](#συνθήκες)
5. [Επαναλήψεις](#επαναλήψεις)
    - [for](#for)
    - [while](#while)
    - [do...while](#dowhile)
    - [for...in](#forin)
    - [for...of](#forof)
6. [Συναρτήσεις](#συναρτήσεις)
    - [Δήλωση Συνάρτησης](#δήλωση-συνάρτησης)
    - [Παράμετροι](#παράμετροι)
    - [Ανώνυμες Συναρτήσεις](#ανώνυμες-συναρτήσεις)
    - [Συναρτήσεις Υψηλότερης Τάξης](#συναρτήσεις-υψηλότερης-τάξης)
    - [Closure](#closure)
    - [Arrow Functions](#arrow-functions)
7. [Αντικείμενα](#αντικείμενα)
    - [Δημιουργία Αντικειμένου](#δημιουργία-αντικειμένου)
    - [Πρόσβαση σε Ιδιότητες](#πρόσβαση-σε-ιδιότητες)
    - [Προσθήκη Ιδιοτήτων](#προσθήκη-ιδιοτήτων)
    - [Διαγραφή Ιδιοτήτων](#διαγραφή-ιδιοτήτων)
    - [Nested Objects](#nested-objects)
8. [Αντικειμενοστραφής Προγραμματισμός](#αντικειμενοστραφής-προγραμματισμός)
    - [Prototype](#prototype)
    - [Κληρονομικότητα](#κληρονομικότητα)
    - [Κλάσεις](#κλάσεις)
9. [Πίνακες](#πίνακες)
10. [DOM](#dom)
    - [Επιλογή Στοιχείων](#επιλογή-στοιχείων)
    - [Αλλαγή Περιεχομένου](#αλλαγή-περιεχομένου)
    - [Αλλαγή Στυλ](#αλλαγή-στυλ)
    - [Δημιουργία Στοιχείων](#δημιουργία-στοιχείων)
11. [Πηγές](#πηγές)

# Εισαγωγή

## Φταίει η JavaScript;

Στην πορεία σου γράφοντας κώδικα σε JavaScript, πολλές φορές θα συναντήσεις καταστάσεις που θα σε κάνουν να αναρωτηθείς αν φταίει η δομή της γλώσσας για λάθη που σταματούν τον κώδικα σου απο το να εκτελεστεί. Θα σκεφτείς οτι είναι κακογραμμένη και οτι δεν βγάζει κανένα νόημα ο τρόπος με τον οποίο δουλεύει. Αυτό είναι κάτι που συμβαίνει σε όλους τους προγραμματιστές, ακόμα και σε αυτούς που έχουν χρόνια εμπειρίας.

Είναι μια γλώσσα που έχει πολλές παραδοχές και περίπλοκες λειτουργίες, οι οποίες μπορεί να σε μπερδέψουν αν δεν τις κατανοήσεις σωστά. Αυτό όμως δεν σημαίνει ότι η JavaScript είναι κακή γλώσσα, απλά πρέπει να μάθεις να την χρησιμοποιείς σωστά.

Οπότε μην κατηγορείς την γλώσσα για τα λάθη που θα εμφανίζονται στον κώδικα σου. Η JavaScript είναι μια γλώσσα που ναι μεν είναι εύκολο να τη μάθεις, αλλά δύσκολο να τη μάθεις <ins>σωστά</ins>. Αυτό σημαίνει ότι μπορείς να γράψεις κώδικα που να λειτουργεί, αλλά να μην είναι καλός κώδικας.

_Σαν προγραμματιστές έχουμε την ευθύνη να γνωρίζουμε τα εργαλεία που επιλέγουμε και να τα χρησιμοποιούμε σωστά._

## Spec & Manuals

Σε αυτή την ενότητα θέλω να εξηγήσω κάποιες έννοιες που μπορεί να συναντήσεις στην αναζήτηση σου για πληροφορίες σχετικά με τη JavaScript.

### Specification

Το πρότυπο της JavaScript είναι καθορισμένο από τον οργανισμό [ECMA International](https://ecma-international.org/). Άλλα παραδείγματα προτύπων που ίσως έχεις ακούσει είναι τα ISO, IETF, W3C κλπ.

Όταν αναφερόμαστε στο πρότυπο της JavaScript, αναφερόμαστε στο [ECMA-262](https://ecma-international.org/publications-and-standards/standards/ecma-262/) ή αλλιώς ECMAScript / ES. Με όποιον συμβολισμό και αν το αναφέρουμε, εννοούμε το ίδιο πράγμα.

Χρησιμοποιώντας έναν αριθμό στο τέλος του προτύπου, μπορούμε να δούμε την έκδοση της JavaScript που χρησιμοποιούμε. Για παράδειγμα, η έκδοση του 2015 είναι γνωστή ως ECMAScript 6 ή ES6. Η έκδοση του 2016 είναι γνωστή ως ECMAScript 7 ή ES7 και ούτω καθεξής. Η τελευταία έκδοση του προτύπου είναι το ECMAScript 2023, την οποία μπορείς να βρεις εδώ https://tc39.es/ecma262/.

Καταλαβαίνεις λοιπόν ότι αυτό το πρότυπο καθορίζει τη συμπεριφορά της γλώσσας και τις νέες λειτουργίες που προστίθενται σε κάθε νέα έκδοση. Είναι λοιπόν η καλύτερη πηγή για να μάθεις τον τρόπο με τον οποίο λειτουργεί η JavaScript, ακόμα και σε αλγοριθμικό επίπεδο behind the scenes.

### MDN Web Docs

Πέρα απο το specification, ένα πολύ καλό manual για την JavaScript είναι το [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript). Εκεί θα βρεις πληροφορίες και παραδείγματα που χρειάζεσαι για να μάθεις καλύτερα τη γλώσσα.

## Compiled ή Interpreted;

Η JavaScript θεωρείται συνήθως ως interpreted γλώσσα, ενώ στην πραγματικότητα μια <ins>Just-In-Time</ins> compiled γλώσσα. Οι σύγχρονες JavaScript engines (π.χ. V8 engine) χρησιμοποιούν έναν JIT compiler για τη βελτιστοποίηση του κώδικα πριν την εκτέλεση. Αυτός ο μεταγλωττιστής επιτρέπει στην JavaScript να εκτελείται πολύ πιο γρήγορα και με αποτελεσματικό τρόπο σε σχέση με τις παραδοσιακές interpreted γλώσσες.

Ο κώδικας JavaScript αναλύεται πριν από την εκτέλεση και μετατρέπεται στην πραγματικότητα σε δυαδική μορφή (κώδικας μηχανής που εκτελείται απευθείας από το hardwate του υπολογιστή).

Έτσι, η απάντηση στην ερώτηση _<ins>"Η JavaScript είναι compiled ή interpreted γλώσσα;"</ins>_ είναι λίγο και από τα δύο. Είναι interpreted σε παλαιότερα προγράμματα περιήγησης, αλλά στα σύγχρονα προγράμματα περιήγησης, γίνεται compile με τη βοήθεια ενός JIT compiler.

<br />

# Μεταβλητές

Οι μεταβλητές είναι οι βασικές μονάδες αποθήκευσης πληροφορίας σε ένα πρόγραμμα. Μια μεταβλητή είναι ένα όνομα (label) που αναφέρεται σε μια τιμή.

<br />

## Δήλωση Μεταβλητών

Στην JavaScript, οι μεταβλητές δηλώνονται με την εντολή `var`. Μπορούμε να δηλώσουμε μια μεταβλητή χωρίς να της αναθέσουμε τιμή, αλλά αυτό σημαίνει ότι η τιμή της μεταβλητής θα είναι `undefined`.

<!-- prettier-ignore -->
```javascript
var x;                  // Δήλωση μεταβλητής
console.log(x);         // undefined
```

<br />

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

<br />

## Εμβέλεια

Η εμβέλεια μιας μεταβλητής αναφέρεται στο πόσο μακριά από το σημείο δήλωσης της μπορεί να χρησιμοποιηθεί. Οι μεταβλητές που δηλώνονται μπορεί να έχουν είτε `τοπική (local)` εμβέλεια, είτε `καθολική (global)` εμβέλεια.

<br />

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

> **Παρατήρηση:** Αν μια μεταβλητή var δηλώνεται μέσα σε ένα code block (π.χ. μέσα σε ένα if statement), τότε η εμβέλεια της μεταβλητής δεν περιορίζεται στο block αυτό, αλλά είναι η συνάρτηση στην οποία ανήκει το code block. Αν το code block δεν ανήκει σε κάποια συνάρτηση, τότε η μεταβλητή έχει global εμβέλεια.

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

<br />

### let

---

Η εντολή `let` εισήχθη στην ES6 και χρησιμοποιείται για τη δήλωση μεταβλητών με block scope. Αυτό σημαίνει ότι οι μεταβλητές που δηλώνονται με το λεκτικό `let` έχουν εμβέλεια μόνο στο block στο οποίο δηλώνονται.

<!-- prettier-ignore -->
```javascript
let x = 5;              // Global μεταβλητή

function myFunction() {
    let y = 10;         // Local μεταβλητή
    console.log(x);     // 5
    console.log(y);     // 10

    for (let i = 0; i < 5; i++) {
        console.log(i); // Local μεταβλητή i
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

<br />

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

- Εκχωρήσουμε ξανά μια constant τιμή
- Εκχωρήσουμε ξανά ένα constant πίνακα
- Εκχωρήσουμε ξανά ένα constant αντικειμένο

Αλλά μπορούμε να:

- Αλλάξουμε τα στοιχεία του constant πίνακα
- Αλλάξουμε τις ιδιότητες του constant αντικειμένου

<br />

> **Παρατήρηση:** Με την εισαγωγή των `let` και `const` στην ES6, η χρήση του `var` έχει μειωθεί σημαντικά. Συνιστάται να χρησιμοποιείς `let` για μεταβλητές που μπορεί να αλλάξουν τιμή και `const` για σταθερές.

<br />

# Τύποι Δεδομένων

H JavaScript είναι μια γλώσσα <u>δυναμικού τύπου</u>, που σημαίνει οτι στις μεταβλητές εισάγουμε δεδομένα χωρίς να χρειάζεται να δηλώσουμε τον τύπο τους. Μια μεταβλητή μπορεί να περιέχει δεδομένα διαφορετικού τύπου κατά τη διάρκεια της εκτέλεσης του προγράμματος.

Για παράδειγμα:

<!-- prettier-ignore -->
```javascript
const x = 5;            // Η τιμή της x είναι τύπου Number
x = "Hello";            // Η τιμή της x τώρα είναι τύπου String
```

<br />

## typeof

Για να μάθουμε τον τύπο μιας τιμής μπορούμε να χρησιμοποιήσουμε τον operator `typeof`. Αυτή η εντολή επιστρέφει τον τύπο της τιμής σε μορφή string.

```javascript
const x = 5;
console.log(typeof x); // "number"
```

<br />

## Primitive Types

Η JavaScript έχει κάποιους προκαθορισμένους τύπους δεδομένων, οι οποίοι ονομάζονται Primitive Data Types. Αυτοί οι τύποι είναι οι εξής:

<br />

### Number

---

Ο τύπος `Number` χρησιμοποιείται για αριθμητικές τιμές. Μπορεί να είναι ακέραιος αριθμός ή δεκαδικός αριθμός. Στην JavaScript δεν υπάρχει διαφορά μεταξύ αυτών των δύο τύπων.

<!-- prettier-ignore -->
```javascript
const x = 5;            // Ακέραιος αριθμός
const y = 5.5;          // Δεκαδικός αριθμός

console.log(typeof x);  // "number"
console.log(typeof y);  // Επίσης "number"
```

Δύο ειδικές τιμές που μπορούν να αντιστοιχιστούν στον τύπο Number είναι το `Infinity` και το `NaN`.

<br />

Το `Infinity` χρησιμοποιείται όταν ένας αριθμός υπερβαίνει το μέγιστο επιτρεπτό όριο.

<!-- prettier-ignore -->
```javascript
const x = 1 / 0;
console.log(x);         // Infinity

const y = -1 / 0;
console.log(y);         // -Infinity

console.log(typeof x);  // "number"
console.log(typeof y);  // Επίσης "number"
```

<br />

Το `NaN` (Not-a-Number) χρησιμοποιείται όταν μια αριθμητική πράξη δεν μπορεί να εκτελεστεί (Invalid Number). Καλή πρακτική είναι να ελέγχουμε αν μια τιμή είναι `NaN` πριν την χρησιμοποιήσουμε.

<!-- prettier-ignore -->
```javascript
const x = 100 / "Apple";
console.log(x);         // NaN

console.log(typeof(x)); // "number"
```

<br />

> **Παρατήρηση:** Το `NaN` είναι η μόνη τιμή στην JavaScript που δεν είναι ίση με τον εαυτό της. Αυτό σημαίνει ότι `NaN !== NaN`.

<br />

Για να ελέγξουμε αν μια τιμή δεν είναι αριθμός ή δεν μπορεί να μετατραπεί σε αριθμό (περισσότερα στο κεφάλαιο "Αλλαγή Τύπου"), μπορούμε να χρησιμοποιήσουμε την συνάρτηση `isNaN()`.

<!-- prettier-ignore -->
```javascript
const x = 100 / "Apple";
 
isNaN(x);               // true
```

Παρατηρούμε οτι η συνάρτηση `isNaN()` επιστρέφει `false` αν η τιμή είναι αριθμός σε μορφή `String`. Αυτό γίνεται γιατί η συνάρτηση `isNaN()` προσπαθεί πρώτα να μετατρέψει την τιμή σε αριθμό πριν επιστρέψει κάποιο αποτέλεσμα.

<!-- prettier-ignore -->
```javascript
const x = "100";

isNaN(x);               // false
```

<br />

Μπορούμε επίσης να χρησιμοποιήσουμε την συνάρτηση `Number.isNaN()` για να ελέγξουμε αν μια τιμή είναι αμιγώς `NaN`.

<!-- prettier-ignore -->
```javascript
const x = "bar" / "foo";
const y = NaN;

Number.isNaN(x);        // true
Number.isNaN(y);        // true
```

<br />

### String

---

Ο τύπος `String` χρησιμοποιείται για αλφαριθμητικές τιμές. Μπορεί να περιέχει οποιοδήποτε κείμενο μέσα σε εισαγωγικά.

<!-- prettier-ignore -->
```javascript
const x = "Hello World!";
console.log(typeof x);  // "string"
```

Μπορούμε να χρησιμοποιήσουμε είτε μονά είτε διπλά εισαγωγικά για να δηλώσουμε μια τιμή τύπου `String`.

<!-- prettier-ignore -->
```javascript
const x = 'Hello World!';
const y = "Hello World!";
```

<br />

Αν θέλουμε να χρησιμοποιήσουμε εισαγωγικά μέσα σε μια τιμή τύπου `String`, μπορούμε να χρησιμοποιήσουμε τον χαρακτήρα `\` για να δηλώσουμε ότι το εισαγωγικό δεν είναι το τέλος της τιμής.

<!-- prettier-ignore -->
```javascript
const x = "He said \"Hello\"";
console.log(x);         // He said "Hello"
```

<br />

### Boolean

---

Ο τύπος `Boolean` χρησιμοποιείται για τις τιμές `true` και `false`.

<!-- prettier-ignore -->
```javascript
const x = true;
const y = false;

console.log(typeof x);  // "boolean"
console.log(typeof y);  // Επίσης "boolean"
```

<br />

### Undefined

---

Η τιμή `undefined` χρησιμοποιείται όταν μια μεταβλητή δεν έχει αρχικοποιηθεί.

<!-- prettier-ignore -->
```javascript
var x;
console.log(x);         // undefined
console.log(typeof x);  // "undefined"

const y = undefined;
console.log(y);         // undefined

const arr = [1, 2, 3];
console.log(arr[3]);    // undefined

function foo() {
  return;
}

console.log(foo());     // undefined
```

<br />

### Null

---

Η τιμή `null` χρησιμοποιείται όταν θέλουμε να δηλώσουμε ότι μια μεταβλητή δεν περιέχει τίποτα.

<!-- prettier-ignore -->
```javascript
const x = null;
console.log(x);         // null
console.log(typeof x);  // "object"  (???)
```

> **Παρατήρηση:** Η τιμή `null` επιστρέφει `"object"` όταν χρησιμοποιήσουμε τον operator `typeof`. Αυτό είναι ένα bug στην JavaScript που υπάρχει απο τις πρώτες κιόλας εκδόσεις της γλώσσας. Αυτό το bug διατηρείται μέχρι και σημερα για λόγους συμβατότητας με παλαιότερες εκδόσεις της γλώσσας.

<p align="center">
<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--5XFJVMi_--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn.hashnode.com/res/hashnode/image/upload/v1627256711813/d4FV_NtKb.jpeg" alt="null typeof bug" width="250px"/>
</p>

### BigInt

---

Ο τύπος `BigInt` χρησιμοποιείται για ακέραιους αριθμούς με μεγάλη ακρίβεια. Μπορούμε να δηλώσουμε μια τιμή τέτοιου τύπου προσθέτοντας τον χαρακτήρα `n` στο τέλος της τιμής.

<!-- prettier-ignore -->
```javascript
const x = 237n;
console.log(x);         // 237n
console.log(typeof x);  // "bigint"
```

<br />

### Symbol

---

Ο τύπος `Symbol` χρησιμοποιείται για τη δημιουργία μοναδικών τιμών. Ένα `Symbol` δεν μπορεί να συγκριθεί με άλλες τιμές.

<!-- prettier-ignore -->
```javascript
const x = Symbol("Hello");
console.log(x);         // Symbol(Hello)
console.log(typeof x);  // "symbol"

const y = Symbol("Hello");
console.log(x === y);   // false

const z = Symbol("World");
console.log(x === z);   // false
```

<br />

## Objects

Ο τύπος `Object` χρησιμοποιείται για τη δημιουργία αντικειμένων. Ένα αντικείμενο είναι μια συλλογή από ζεύγη κλειδιών-τιμών.

<!-- prettier-ignore -->
```javascript
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log(person);    // { name: "John", age: 30, city: "New York" }
console.log(typeof person); // "object"
```
