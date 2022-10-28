"use strict";
class SmartPhone {
    constructor(nomeModello) {
        this.credito = 0;
        this.numeroChiamate = 0;
        this.nomeModello = nomeModello;
    }
    ricarica(creditoAggiunto) {
        this.credito += creditoAggiunto;
        console.log(this.credito);
    }
    chiamata(durataChiamata) {
        this.credito = this.credito - 0.2 * durataChiamata;
        this.numeroChiamate++;
        console.log(this.credito);
    }
    numero404() {
        console.log(this.credito);
        return this.credito;
    }
    getNumeroChiamate() {
        console.log(this.numeroChiamate);
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
// TELEFONO SAMSUNG E RELATIVE DICHIARAZIONI
class Samsung extends SmartPhone {
    constructor() {
        super("Samsung");
        this.display = this.displayOnScreen();
    }
    chiamata(durataChiamata) {
        if (this.credito < 0.2) {
            alert("Credito insufficiente");
        }
        else {
            this.credito = this.credito - 0.2 * durataChiamata;
            this.numeroChiamate++;
            chiamateDisplay.innerHTML = this.numeroChiamate.toString();
            creditoDisplay.innerHTML = this.credito.toString();
        }
    }
    ricarica(creditoAggiunto) {
        this.credito += creditoAggiunto;
        creditoDisplay.innerHTML = this.credito.toString();
    }
    numero404() {
        console.log(this.credito);
        return this.credito;
    }
    getNumeroChiamate() {
        console.log(this.numeroChiamate);
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        chiamateDisplay.innerHTML = this.numeroChiamate.toString();
    }
    displayOnScreen() {
        let container = document.querySelector("#container");
        let phoneDiv = document.createElement("div");
        phoneDiv.classList.add("phone-screen");
        phoneDiv.innerHTML = `
        <h1>${this.nomeModello}</h1>
        <h3>Credito Residuo: <span id="credito-1">${this.credito}</span></h3>
        <h3>Chiamate Effettuate: <span id="chiamate-1">${this.numeroChiamate}</span></h3>
        <input type="text" />
        <button>
          Chiama
        </button>
        <input type="text" />
        <button>Ricarica</button>
        <div id="more-buttons">
            <button>404</button>
            <button>Chiamate</button>
            <button>Azzera</button>
        </div>
      `;
        container === null || container === void 0 ? void 0 : container.appendChild(phoneDiv);
    }
}
let firstUser = new Samsung();
console.log(firstUser);
let chiamateDisplay = document.querySelector("#chiamate-1");
let creditoDisplay = document.querySelector("#credito-1");
let bottoneChiamata = document.querySelector("button:nth-of-type(1)");
bottoneChiamata === null || bottoneChiamata === void 0 ? void 0 : bottoneChiamata.addEventListener("click", function () {
    firstUser.chiamata(parseInt(document.querySelector("input").value));
});
let bottoneRicarica = document.querySelector("button:nth-of-type(2)");
bottoneRicarica === null || bottoneRicarica === void 0 ? void 0 : bottoneRicarica.addEventListener("click", function () {
    firstUser.ricarica(parseInt(document.querySelector("input:nth-of-type(2)").value));
});
let bottone404 = document.querySelector("#more-buttons > button:nth-of-type(1)");
bottone404 === null || bottone404 === void 0 ? void 0 : bottone404.addEventListener("click", function () {
    firstUser.numero404();
});
let bottoneNumeroChiamate = document.querySelector("#more-buttons > button:nth-of-type(2)");
bottoneNumeroChiamate === null || bottoneNumeroChiamate === void 0 ? void 0 : bottoneNumeroChiamate.addEventListener("click", function () {
    firstUser.getNumeroChiamate();
});
let bottoneAzzera = document.querySelector("#more-buttons > button:nth-of-type(3)");
bottoneAzzera === null || bottoneAzzera === void 0 ? void 0 : bottoneAzzera.addEventListener("click", function () {
    firstUser.azzeraChiamate();
});
// TELEFONO IPHONE E RELATIVE DICHIARAZIONI
class Iphone extends SmartPhone {
    constructor() {
        super("Iphone");
        this.display = this.displayOnScreen();
    }
    chiamata(durataChiamata) {
        if (this.credito < 0.2) {
            alert("Credito insufficiente");
        }
        else {
            this.credito = this.credito - 0.2 * durataChiamata;
            this.numeroChiamate++;
            chiamateDisplayIphone.innerHTML = this.numeroChiamate.toString();
            creditoDisplayIphone.innerHTML = this.credito.toString();
        }
    }
    ricarica(creditoAggiunto) {
        this.credito += creditoAggiunto;
        creditoDisplayIphone.innerHTML = this.credito.toString();
    }
    numero404() {
        console.log(this.credito);
        return this.credito;
    }
    getNumeroChiamate() {
        console.log(this.numeroChiamate);
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        chiamateDisplayIphone.innerHTML = this.numeroChiamate.toString();
    }
    displayOnScreen() {
        let container = document.querySelector("#container");
        let phoneDiv = document.createElement("div");
        phoneDiv.classList.add("phone-screen");
        phoneDiv.classList.add("iphone");
        phoneDiv.innerHTML = `
        <h1>${this.nomeModello}</h1>
        <h3>Credito Residuo: <span id="credito-2">${this.credito}</span></h3>
        <h3>Chiamate Effettuate: <span id="chiamate-2">${this.numeroChiamate}</span></h3>
        <input type="text" />
        <button>
          Chiama
        </button>
        <input type="text" />
        <button>Ricarica</button>
        <div id="more-buttons-iphone">
            <button>404</button>
            <button>Chiamate</button>
            <button>Azzera</button>
        </div>
      `;
        container === null || container === void 0 ? void 0 : container.appendChild(phoneDiv);
    }
}
let secondUser = new Iphone();
console.log(secondUser);
let chiamateDisplayIphone = document.querySelector("#chiamate-2");
let creditoDisplayIphone = document.querySelector("#credito-2");
let bottoneChiamataIphone = document.querySelector(".iphone > button:nth-of-type(1)");
bottoneChiamataIphone === null || bottoneChiamataIphone === void 0 ? void 0 : bottoneChiamataIphone.addEventListener("click", function () {
    secondUser.chiamata(parseInt(document.querySelector(".iphone > input:nth-of-type(1)").value));
});
let bottoneRicaricaIphone = document.querySelector(".iphone > button:nth-of-type(2)");
bottoneRicaricaIphone === null || bottoneRicaricaIphone === void 0 ? void 0 : bottoneRicaricaIphone.addEventListener("click", function () {
    secondUser.ricarica(parseInt(document.querySelector(".iphone > input:nth-of-type(2)").value));
});
let bottone404Iphone = document.querySelector("#more-buttons-iphone > button:nth-of-type(1)");
bottone404Iphone === null || bottone404Iphone === void 0 ? void 0 : bottone404Iphone.addEventListener("click", function () {
    secondUser.numero404();
});
let bottoneNumeroChiamateIphone = document.querySelector("#more-buttons-iphone > button:nth-of-type(2)");
bottoneNumeroChiamateIphone === null || bottoneNumeroChiamateIphone === void 0 ? void 0 : bottoneNumeroChiamateIphone.addEventListener("click", function () {
    secondUser.getNumeroChiamate();
});
let bottoneAzzeraIphone = document.querySelector("#more-buttons-iphone > button:nth-of-type(3)");
bottoneAzzeraIphone === null || bottoneAzzeraIphone === void 0 ? void 0 : bottoneAzzeraIphone.addEventListener("click", function () {
    secondUser.azzeraChiamate();
});
// TELEFONO NOTHINGPHONE E RELATIVE DICHIARAZIONI
class NothingPhone extends SmartPhone {
    constructor() {
        super("NothingPhone");
        this.display = this.displayOnScreen();
    }
    chiamata(durataChiamata) {
        if (this.credito < 0.2) {
            alert("Credito insufficiente");
        }
        else {
            this.credito = this.credito - 0.2 * durataChiamata;
            this.numeroChiamate++;
            chiamateDisplayNothing.innerHTML = this.numeroChiamate.toString();
            creditoDisplayNothing.innerHTML = this.credito.toString();
        }
    }
    ricarica(creditoAggiunto) {
        this.credito += creditoAggiunto;
        creditoDisplayNothing.innerHTML = this.credito.toString();
    }
    numero404() {
        console.log(this.credito);
        return this.credito;
    }
    getNumeroChiamate() {
        console.log(this.numeroChiamate);
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        chiamateDisplayNothing.innerHTML = this.numeroChiamate.toString();
    }
    displayOnScreen() {
        let container = document.querySelector("#container");
        let phoneDiv = document.createElement("div");
        phoneDiv.classList.add("phone-screen");
        phoneDiv.classList.add("nothing");
        phoneDiv.innerHTML = `
        <h1>${this.nomeModello}</h1>
        <h3>Credito Residuo: <span id="credito-3">${this.credito}</span></h3>
        <h3>Chiamate Effettuate: <span id="chiamate-3">${this.numeroChiamate}</span></h3>
        <input type="text" />
        <button>
          Chiama
        </button>
        <input type="text" />
        <button>Ricarica</button>
        <div id="more-buttons-nothing">
            <button>404</button>
            <button>Chiamate</button>
            <button>Azzera</button>
        </div>
      `;
        container === null || container === void 0 ? void 0 : container.appendChild(phoneDiv);
    }
}
let thirdUser = new NothingPhone();
console.log(thirdUser);
let chiamateDisplayNothing = document.querySelector("#chiamate-3");
let creditoDisplayNothing = document.querySelector("#credito-3");
let bottoneChiamataNothing = document.querySelector(".nothing > button:nth-of-type(1)");
bottoneChiamataNothing === null || bottoneChiamataNothing === void 0 ? void 0 : bottoneChiamataNothing.addEventListener("click", function () {
    thirdUser.chiamata(parseInt(document.querySelector(".nothing > input:nth-of-type(1)").value));
});
let bottoneRicaricaNothing = document.querySelector(".nothing > button:nth-of-type(2)");
bottoneRicaricaNothing === null || bottoneRicaricaNothing === void 0 ? void 0 : bottoneRicaricaNothing.addEventListener("click", function () {
    thirdUser.ricarica(parseInt(document.querySelector(".nothing > input:nth-of-type(2)").value));
});
let bottone404Nothing = document.querySelector("#more-buttons-nothing > button:nth-of-type(1)");
bottone404Nothing === null || bottone404Nothing === void 0 ? void 0 : bottone404Nothing.addEventListener("click", function () {
    thirdUser.numero404();
});
let bottoneNumeroChiamateNothing = document.querySelector("#more-buttons-nothing > button:nth-of-type(2)");
bottoneNumeroChiamateNothing === null || bottoneNumeroChiamateNothing === void 0 ? void 0 : bottoneNumeroChiamateNothing.addEventListener("click", function () {
    thirdUser.getNumeroChiamate();
});
let bottoneAzzeraNothing = document.querySelector("#more-buttons-nothing > button:nth-of-type(3)");
bottoneAzzeraNothing === null || bottoneAzzeraNothing === void 0 ? void 0 : bottoneAzzeraNothing.addEventListener("click", function () {
    thirdUser.azzeraChiamate();
});
