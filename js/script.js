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
    displayOnScreen() {
        let container = document.querySelector("#container");
        let phoneDiv = document.createElement("div");
        phoneDiv.classList.add("phone-screen");
        phoneDiv.innerHTML = `
        <h1>${this.nomeModello}</h1>
        <h3>Credito Residuo: ${this.credito}</h3>
        <h3>Chiamate Effettuate: ${this.numeroChiamate}</h3>
        <input type="text" />
        <button>
          Chiama
        </button>
        <input type="text" />
        <button>Ricarica</button>
      `;
        container === null || container === void 0 ? void 0 : container.appendChild(phoneDiv);
    }
}
class Samsung extends SmartPhone {
}
class Iphone extends SmartPhone {
}
class NothingPhone extends SmartPhone {
}
let firstUser = new Samsung("Samsung");
firstUser.ricarica(50);
firstUser.ricarica(25);
firstUser.chiamata(7);
firstUser.numero404();
firstUser.getNumeroChiamate();
firstUser.chiamata(15);
firstUser.getNumeroChiamate();
firstUser.numero404();
console.log(firstUser);
firstUser.displayOnScreen();
let secondUser = new Iphone("Iphone");
console.log(secondUser);
let thirdUser = new NothingPhone("NothingPhone");
console.log(thirdUser);
