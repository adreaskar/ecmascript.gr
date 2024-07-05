# Εισαγωγή

Το `Document Object Model (DOM)` είναι ένα αντικειμενοστραφές μοντέλο (γραμμένο σε C++) που αναπαριστά το έγγραφο HTML ως δέντρο αντικειμένων (nodes). Το DOM επιτρέπει στους προγραμματιστές να αλλάξουν το περιεχόμενο, τη δομή και το στυλ στα elements της σελίδας HTML.

## Επιλογή Στοιχείων

Επιλέγοντας ένα στοιχείο απο το DOM, μας επιστρέφεται στην JavaScript ένα αντικείμενο. Αυτό το αντικείμενο έχει πολλές μεθόδους και ιδιότητες που μας επιτρέπουν να αλλάξουμε το περιεχόμενο, τη δομή και το στυλ του.

Για να επιλέξουμε ένα στοιχείο στο DOM, μπορούμε να χρησιμοποιήσουμε τις παρακάτω μεθόδους:

-   `getElementById()`: Επιστρέφει το στοιχείο που έχει το συγκεκριμένο `id`.

<!-- prettier-ignore -->
```javascript
// <div id="myElement">Hello World!</div>

const element = document.getElementById("myElement");
```

-   `getElementsByClassName()`: Επιστρέφει ένα σύνολο στοιχείων που έχουν τη συγκεκριμένη κλάση. Το αποτέλεσμα είναι ένα `HTMLCollection`. Αυτό είναι πρακτικά ένας πίνακας που περιέχει όλα τα στοιχεία που έχουν τη συγκεκριμένη κλάση. Τα στοιχεία στο `HTMLCollection` μπορούν να προσπελαστούν με τη χρήση της θέσης τους στον πίνακα.

<!-- prettier-ignore -->
```javascript
// <div class="myClass">First Element</div>
// <div class="myClass">Second Element</div>

const elements = document.getElementsByClassName("myClass");

console.log(elements[0]);   // <div class="myClass">First Element</div>
```

-   `getElementsByTagName()`: Επιστρέφει ένα σύνολο στοιχείων που έχουν το συγκεκριμένο tag name. Το αποτέλεσμα είναι ένα πάλι ένα `HTMLCollection`.

<!-- prettier-ignore -->
```javascript
// <div>First Element</div>
// <div>Second Element</div>

const elements = document.getElementsByTagName("div");

console.log(elements[0]);   // <div>First Element</div>
```

-   `querySelector()`: Επιστρέφει το πρώτο στοιχείο που ταιριάζει με το συγκεκριμένο selector. Αν δεν υπάρχει κανένα στοιχείο που ταιριάζει με τον selector, τότε επιστρέφεται `null`.

<!-- prettier-ignore -->
```javascript
// <div id="myElement">Hello World!</div>

const element = document.querySelector("#myElement");
```

<!-- prettier-ignore -->
> [!CAUTION]
> Προσοχή όταν χρησιμοποιείτε το `querySelector()`, ο selector πρέπει να είναι σε μορφή CSS. Αυτό σημαίνει ότι πρέπει να χρησιμοποιήσετε το `#` για να επιλέξετε ένα στοιχείο με βάση το `id` ή την `.` για να επιλέξετε ένα στοιχείο με βάση την κλάση.

-   `querySelectorAll()`: Επιστρέφει όλα τα στοιχεία που ταιριάζουν με το συγκεκριμένο selector. Το αποτέλεσμα είναι ένα `NodeList`. Το `NodeList` είναι παρόμοιο με το `HTMLCollection`, αλλά δεν είναι πίνακας. Τα στοιχεία στο `NodeList` μπορούν να προσπελαστούν με τη χρήση της μεθόδου `forEach()`.

<!-- prettier-ignore -->
```javascript
// <div class="myClass">First Element</div>
// <div class="myClass">Second Element</div>

const elements = document.querySelectorAll(".myClass");

elements.forEach(element => {
  console.log(element);  // <div class="myClass">First Element</div>
});
```

## Αλλαγή Περιεχομένου

Έστω οτι έχουμε το ακόλουθο html αρχείο:

<!-- prettier-ignore -->
```html
<div id="myList">
  This is my <b>links collection</b>:
  <ul>
    <li><a href="https://katabetian.dev">Andreas <b>Karabetian</b> </a></li>
    <li><a href="https://ds.unipi.gr">Welcome to <b>DS Unipi!</b></a></li>
    <li style="display: none;">Hidden Link</li>
  </ul>
</div>
```

Για να αλλάξουμε το περιεχόμενο ενός στοιχείου στο DOM, μπορούμε να χρησιμοποιήσουμε τις παρακάτω μεθόδους:

-   `innerHTML`: Χρησιμοποιείται για να πάρει ή να ορίσει το HTML περιεχόμενο ενός στοιχείου.

> [!CAUTION]
> Προσοχή: Η χρήση του `innerHTML` μπορεί να οδηγήσει σε security vulnerabilities. Αν το HTML περιεχόμενο που περνάτε στο `innerHTML` προέρχεται από χρήστη, τότε πρέπει να είστε προσεκτικοί.

<!-- prettier-ignore -->
```javascript
const element = document.getElementById("myList");

console.log(element.innerHTML);  

// Returns the whole HTML content of the element:

// This is my <b>links collection</b>: 
// <ul> 
//  <li><a href="https://katabetian.dev">Andreas <b>Karabetian</b> </a></li> 
//  <li><a href="https://ds.unipi.gr">Welcome to <b>DS Unipi!</b></a></li> 
//  <li style="display: none;">Hidden Link</li>
// </ul>
```

-   `innerText`: Χρησιμοποιείται για να πάρει ή να ορίσει το κείμενο ενός στοιχείου. Η διαφορά με το `innerHTML` είναι ότι το `innerText` αγνοεί το HTML περιεχόμενο.

<!-- prettier-ignore -->
```javascript
const element = document.getElementById("myList");

console.log(element.innerText);

// Returns the text content of the element:

// This is my links collection:
// Andreas Karabetian
// Welcome to DS Unipi!
```

-   `textContent`: Χρησιμοποιείται για να πάρει ή να ορίσει το κείμενο ενός στοιχείου. Η διαφορά με το `innerText` είναι ότι το `textContent` επιστρέφει όλο το κείμενο, συμπεριλαμβανομένων των κειμένων που είναι κρυμμένα με CSS.

<!-- prettier-ignore -->
```javascript
const element = document.getElementById("myElement");

console.log(element.textContent);

// Returns the text content of the element:

// This is my links collection:
// Andreas Karabetian
// Welcome to DS Unipi!
// Hidden Link
```

## Αλλαγή Στυλ

Για να αλλάξουμε το στυλ ενός στοιχείου στο DOM, μπορούμε να χρησιμοποιήσουμε την ιδιότητα `style`. Η ιδιότητα `style` είναι ένα αντικείμενο που περιέχει όλα τα CSS attributes ενός στοιχείου.

<!-- prettier-ignore -->
```javascript
// <div id="myElement">Hello World!</div>

const element = document.getElementById("myElement");

element.style.color = "red";
element.style.fontSize = "24px";
```

Μπορούμε επίσης να χρησιμοποιήσουμε τη μέθοδο `setAttribute()` για να ορίσουμε τα CSS attributes ενός στοιχείου.

<!-- prettier-ignore -->
```javascript
// <div id="myElement">Hello World!</div>

const element = document.getElementById("myElement");

element.setAttribute("style", "color: red; font-size: 24px;");
```

## Δημιουργία Στοιχείων

Για να δημιουργήσουμε ένα στοιχείο στο DOM, μπορούμε να χρησιμοποιήσουμε τις παρακάτω μεθόδους:

-   `createElement()`: Δημιουργεί ένα νέο στοιχείο με το συγκεκριμένο tag name.

<!-- prettier-ignore -->
```javascript
const element = document.createElement("div");
```

-   `createTextNode()`: Δημιουργεί ένα νέο κείμενο.

<!-- prettier-ignore -->
```javascript
const text = document.createTextNode("Hello World!");
```

Για να προσθέσουμε το στοιχείο στο DOM, μπορούμε να χρησιμοποιήσουμε τις παρακάτω μεθόδους:

-   `appendChild()`: Προσθέτει ένα στοιχείο ως τελευταίο παιδί ενός άλλου στοιχείου.

<!-- prettier-ignore -->
```javascript
// <div id="parentElement"></div>

const parentElement = document.getElementById("parentElement");

const element = document.createElement("div");

parentElement.appendChild(element);
```

-   `insertBefore()`: Προσθέτει ένα στοιχείο πριν από ένα άλλο στοιχείο.

<!-- prettier-ignore -->
```javascript
// <div id="parentElement"></div>

const parentElement = document.getElementById("parentElement");

const element = document.createElement("div");

parentElement.insertBefore(element, parentElement.firstChild);
```

## Αφαίρεση Στοιχείων

Για να αφαιρέσουμε ένα στοιχείο από το DOM, μπορούμε να χρησιμοποιήσουμε τις παρακάτω μεθόδους:

-   `removeChild()`: Αφαιρεί ένα στοιχείο από το DOM.

<!-- prettier-ignore -->
```javascript
// <div id="parentElement">

const parentElement = document.getElementById("parentElement");

const element = document.createElement("div");

parentElement.appendChild(element);

parentElement.removeChild(element);
```

-   `remove()`: Αφαιρεί το στοιχείο από το DOM.

<!-- prettier-ignore -->
```javascript
// <div id="parentElement">

const parentElement = document.getElementById("parentElement");

const element = document.createElement("div");

parentElement.appendChild(element);

element.remove();
```

## Event Listeners

Για να προσθέσουμε ένα event σε ένα στοιχείο στο DOM, μπορούμε να χρησιμοποιήσουμε τη μέθοδο `addEventListener()`. Η `addEventListener()` παίρνει δύο ορίσματα: το όνομα του event και τη συνάρτηση που θα εκτελεστεί όταν συμβεί το event.

Ορισμένα από τα πιο συνηθισμένα events είναι:

-   Mouse Events: click, dblclick, mousedown, mouseup, contextmenu, mouseout, mousewheel, mouseover
-   Touch Events: touchstart, touchend, touchmove, touchcancel
-   Keyboard Events: keydown, keyup, keypress
-   Form Events: focus, blur, change, submit
-   Window Events: resize, scroll, load, unload, hashchange

<!-- prettier-ignore -->
```javascript
// <button id="myButton">Click Me!</button>

const button = document.getElementById("myButton");

button.addEventListener("click", function() {
  console.log("Button Clicked!");
});
```

Το παραπάνω παράδειγμα προσθέτει ένα event listener στο κουμπί. Όταν το κουμπί πατηθεί, τότε εκτελείται η συνάρτηση που είναι περασμένη ως δεύτερο όρισμα στη μέθοδο `addEventListener()`.

Μπορούμε επίσης να χρησιμοποιήσουμε τη μέθοδο `removeEventListener()` για να αφαιρέσουμε ένα event από ένα στοιχείο.

<!-- prettier-ignore -->
```javascript
// <button id="myButton">Click Me!</button>

const button = document.getElementById("myButton");

function handleClick() {
  console.log("Button Clicked!");
}

button.addEventListener("click", handleClick);

button.removeEventListener("click", handleClick);
```
