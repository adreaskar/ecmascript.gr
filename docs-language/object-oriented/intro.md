---
sidebar_position: 1
---

# Εισαγωγή

Ο `Αντικειμενοστραφής Προγραμματισμός (Object-Oriented Programming - OOP)` είναι μια μεθοδολογία προγραμματισμοϋ, η οποία βασίζεται στην αναπαράσταση εννοιών ως αντικείμενα. Στην JavaScript, όπως είδαμε, τα αντικείμενα είναι συλλογές από ιδιότητες και μεθόδους.

Οι βασικές αρχές του Αντικειμενοστραφής Προγραμματισμοϋ είναι:

-   `Κλάσεις (Classes)`: Ορίζουν τη δομή ενός αντικειμένου.
-   `Αντικείμενα (Objects)`: Είναι συγκεκριμένα στιγμιότυπα μιας κλάσης.
-   `Ιδιότητες (Properties)`: Χαρακτηρίζουν τα χαρακτηριστικά ενός αντικειμένου.
-   `Μέθοδοι (Methods)`: Είναι συναρτήσεις που ανήκουν σε ένα αντικείμενο.

## This Keyword

Η λέξη-κλειδί `this` χρησιμοποιείται για να αναφερθούμε στο τρέχον αντικείμενο. Η τιμή του `this` εξαρτάται από τον τρόπο με τον οποίο καλείται η συνάρτηση.

Στον παρακάτω κώδικα, το `this` αναφέρεται στο αντικείμενο `person`.

<!-- prettier-ignore -->
```javascript
const person = {
  name: "John",
  age: 30,
  city: "New York",
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.sayHello();    // "Hello, my name is John"
```

Αν καλέσουμε τη μέθοδο `sayHello()` χωρίς το `this`, τότε το `name` δεν θα αναφέρεται στο όνομα του αντικειμένου `person`, αλλά σε μια μεταβλητή με το όνομα `name`.

<!-- prettier-ignore -->
```javascript
const person = {
  name: "John",
  age: 30,
  city: "New York",
  sayHello: function() {
    console.log(`Hello, my name is ${name}`);
  }
};

person.sayHello();    // "Hello, my name is "
```

## Κλάσεις

Στην JavaScript χρησιμοποιούμε τις συναρτήσεις για να ορίσουμε μια κλάση. Οι συναρτήσεις αυτές ονομάζονται `Συναρτήσεις Κατασκευής (Constructor Functions)`. Η κλάση αυτή ορίζει τις ιδιότητες και τις μεθόδους που θα έχουν τα αντικείμενα που δημιουργοϋνται από αυτήν. Συνηθισμένη πρακτική είναι η ονομασία των κλάσεων με κεφαλαίο πρώτο γράμμα.

<!-- prettier-ignore -->
```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const john = new Person("John", 30);
```

Στο παραπάνω παράδειγμα, η συνάρτηση `Person` είναι μια κλάση που ορίζει τις ιδιότητες `name` και `age`. Το αντικείμενο `john` δημιουργείται από την κλάση `Person` με τις τιμές `"John"` και `30`.

Για να προσθέσουμε μια μέθοδο σε μια κλάση, χρησιμοποιούμε το πεδίο πρωτοτύπου (prototype) της κλάσης.

## Prototype

Στην JavaScript, όλα τα αντικείμενα έχουν ένα πεδίο πρωτοτύπου (prototype), το οποίο είναι ένα αντικείμενο από το οποίο κληρονομούνται ιδιότητες και μέθοδοι. Καθώς το πεδίο πρωτοτύπου είναι ένα αντικείμενο, αυτό σημαίνει ότι και αυτό έχει ένα πεδίο πρωτοτύπου, το οποίο μπορεί να έχει ένα άλλο πεδίο πρωτοτύπου και ούτω καθεξής. Αυτό ονομάζεται `Αλυσίδα Πρωτοτύπων (Prototype Chain)`.

Μπορούμε να προσπελάσουμε το πεδίο πρωτοτύπου ενός αντικειμένου με την ιδιότητα `__proto__`.

<!-- prettier-ignore -->
```javascript
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log(person.__proto__);   // { constructor: f Object(), __defineGetter__: f, __defineSetter__: f, ... }
```

Όταν καλούμε μια ιδιότητα ενός αντικειμένου, η JavaScript πρώτα ψάχνει την ιδιότητα στο ίδιο το αντικείμενο. Αν δεν βρει την ιδιότητα, τότε ψάχνει στο πεδίο πρωτοτύπου του αντικειμένου.

Στο παρακάτω παράδειγμα, η συνάρτηση `sayHello()` δεν ορίζεται στο αντικείμενο `john`, αλλά στο πεδίο πρωτοτύπου της κλάσης `Person`. Αυτό σημαίνει ότι όλα τα αντικείμενα που δημιουργοϋνται από την κλάση `Person` θα έχουν πρόσβαση στη μέθοδο `sayHello()`.

<!-- prettier-ignore -->
```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const john = new Person("John", 30);
john.sayHello();        // "Hello, my name is John and I am 30 years old."
```

## Κληρονομικότητα

Η κληρονομικότητα είναι η ικανότητα μιας κλάσης να κληρονομήσει ιδιότητες και μεθόδους από μια άλλη κλάση. Στην JavaScript, η κληρονομικότητα επιτυγχάνεται μέσω του πεδίου πρωτοτύπου.

Στο παρακάτω παράδειγμα, η κλάση `Developer` κληρονομεί τις ιδιότητες και τις μεθόδους της κλάσης `Person`.

<!-- prettier-ignore -->
```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

function Developer(name, age, language) {
  Person.call(this, name, age);
  this.language = language;
}

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.sayLanguage = function() {
  console.log(`I am a developer and I code in ${this.language}.`);
};

const john = new Developer("John", 30, "JavaScript");

john.sayHello();        // "Hello, my name is John and I am 30 years old."
john.sayLanguage();     // "I am a developer and I code in JavaScript."
```

Με την χρήση της μεθόδου `call()`, καλούμε τον κατασκευαστή της κλάσης `Person` με το `this` της κλάσης `Developer`. Αυτό είναι απαραίτητο για να μπορέσουμε να περάσουμε τις τιμές `name` και `age` στην κλάση `Person`.

Η μέθοδος `Object.create()` δημιουργεί ένα νέο αντικείμενο με το πεδίο πρωτοτύπου του αντικειμένου που περνάμε ως όρισμα. Στην περίπτωσή μας, δημιουργοϋμε ένα νέο αντικείμενο με το πεδίο πρωτοτύπου της κλάσης `Person`.

Τέλος, ορίζουμε την ιδιότητα `constructor` του πεδίου πρωτοτύπου της κλάσης `Developer` ώστε να δείχνει πάλι στην κλάση `Developer`.

## Class Keyword

Η λέξη-κλειδί `class` εισήχθηκε στην JavaScript με την ES6 για να διευκολύνει τη δημιουργία κλάσεων. Η σύνταξη της `class` είναι πιο συντομευμένη από τη χρήση των συναρτήσεων κατασκευής. Η `class` δημιουργεί μια συνάρτηση κατασκευής, η οποία ονομάζεται `constructor`.

Δεν έχει καμία διαφορά στην ουσία με τη χρήση των συναρτήσεων κατασκευής και του πεδίου πρωτοτύπου. Η `class` είναι απλά μια συντομευμένη μορφή για τη δημιουργία κλάσεων. Σην κοινότητα της JavaScript συχνά το ονομάζουν σαν syntactic sugar.

<!-- prettier-ignore -->
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Κληρονομικότητα
class Developer extends Person {
  constructor(name, age, language) {
    super(name, age);
    this.language = language;
  }

  sayLanguage() {
    console.log(`I am a developer and I code in ${this.language}.`);
  }
}

const john = new Developer("John", 30, "JavaScript");

john.sayHello();        // "Hello, my name is John and I am 30 years old."
john.sayLanguage();     // "I am a developer and I code in JavaScript."
```

Στο παραπάνω παράδειγμα, η κλάση `Developer` κληρονομεί τις ιδιότητες και τις μεθόδους της κλάσης `Person` με τη χρήση της λέξης-κλειδί `extends`.

Η μέθοδος `super()` καλεί τον κατασκευαστή της γονικής κλάσης με το `this` της κλάσης `Developer`. Αυτό είναι απαραίτητο για να μπορέσουμε να περάσουμε τις τιμές `name` και `age` στην κλάση `Person`.
