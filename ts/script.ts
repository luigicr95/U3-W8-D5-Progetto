interface Phone {
  credito: number;
  numeroChiamate: number;
  nomeModello: string;
  ricarica(creditoAggiunto: number): void;
  chiamata(durataChiamata: number): void;
  numero404(): number;
  getNumeroChiamate(): number;
  azzeraChiamate(): void;
  // displayOnScreen(): void;
}

abstract class SmartPhone implements Phone {
  credito: number;
  numeroChiamate: number;
  nomeModello: string;

  constructor(nomeModello: string) {
    this.credito = 0;
    this.numeroChiamate = 0;
    this.nomeModello = nomeModello;
  }
  ricarica(creditoAggiunto: number): void {
    this.credito += creditoAggiunto;
    console.log(this.credito);
  }
  chiamata(durataChiamata: number): void {
    this.credito = this.credito - 0.2 * durataChiamata;
    this.numeroChiamate++;
    console.log(this.credito);
  }
  numero404(): number {
    console.log(this.credito);
    return this.credito;
  }
  getNumeroChiamate(): number {
    console.log(this.numeroChiamate);
    return this.numeroChiamate;
  }
  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }

  //   displayOnScreen(): void {
  //     let container = document.querySelector("#container");
  //     let phoneDiv = document.createElement("div");
  //     phoneDiv.classList.add("phone-screen");
  //     phoneDiv.innerHTML = `
  //         <h1>${this.nomeModello}</h1>
  //         <h3>Credito Residuo: <span id="credito-1">${this.credito}</span></h3>
  //         <h3>Chiamate Effettuate: <span id="chiamate-1">${this.numeroChiamate}</span></h3>
  //         <input type="text" />
  //         <button>
  //           Chiama
  //         </button>
  //         <input type="text" />
  //         <button>Ricarica</button>
  //         <div id="more-buttons">
  //             <button>404</button>
  //             <button>Chiamate</button>
  //             <button>Azzera</button>
  //         </div>
  //       `;

  //     container?.appendChild(phoneDiv);
  //   }
}

// TELEFONO SAMSUNG E RELATIVE DICHIARAZIONI

class Samsung extends SmartPhone {
  display;
  constructor() {
    super("Samsung");
    this.display = this.displayOnScreen();
  }
  chiamata(durataChiamata: number): void {
    if (this.credito < 0.2) {
      alert("Credito insufficiente");
    } else {
      this.credito = this.credito - 0.2 * durataChiamata;
      this.numeroChiamate++;
      chiamateDisplay.innerHTML = this.numeroChiamate.toString();
      creditoDisplay.innerHTML = this.credito.toString();
    }
  }
  ricarica(creditoAggiunto: number): void {
    this.credito += creditoAggiunto;
    creditoDisplay.innerHTML = this.credito.toString();
  }
  numero404(): number {
    console.log(this.credito);
    return this.credito;
  }
  getNumeroChiamate(): number {
    console.log(this.numeroChiamate);
    return this.numeroChiamate;
  }
  azzeraChiamate(): void {
    this.numeroChiamate = 0;
    chiamateDisplay.innerHTML = this.numeroChiamate.toString();
  }
  displayOnScreen(): void {
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

    container?.appendChild(phoneDiv);
  }
}

let firstUser = new Samsung();
console.log(firstUser);

let chiamateDisplay = document.querySelector("#chiamate-1") as HTMLSpanElement;
let creditoDisplay = document.querySelector("#credito-1") as HTMLSpanElement;
let bottoneChiamata = document.querySelector("button:nth-of-type(1)");
bottoneChiamata?.addEventListener("click", function () {
  firstUser.chiamata(
    parseInt((document.querySelector("input") as HTMLInputElement).value)
  );
});

let bottoneRicarica = document.querySelector("button:nth-of-type(2)");
bottoneRicarica?.addEventListener("click", function () {
  firstUser.ricarica(
    parseInt(
      (document.querySelector("input:nth-of-type(2)") as HTMLInputElement).value
    )
  );
});

let bottone404 = document.querySelector(
  "#more-buttons > button:nth-of-type(1)"
);
bottone404?.addEventListener("click", function () {
  firstUser.numero404();
});

let bottoneNumeroChiamate = document.querySelector(
  "#more-buttons > button:nth-of-type(2)"
);
bottoneNumeroChiamate?.addEventListener("click", function () {
  firstUser.getNumeroChiamate();
});

let bottoneAzzera = document.querySelector(
  "#more-buttons > button:nth-of-type(3)"
);
bottoneAzzera?.addEventListener("click", function () {
  firstUser.azzeraChiamate();
});

// TELEFONO IPHONE E RELATIVE DICHIARAZIONI

class Iphone extends SmartPhone {
  display;
  constructor() {
    super("Iphone");
    this.display = this.displayOnScreen();
  }
  chiamata(durataChiamata: number): void {
    if (this.credito < 0.2) {
      alert("Credito insufficiente");
    } else {
      this.credito = this.credito - 0.2 * durataChiamata;
      this.numeroChiamate++;
      chiamateDisplayIphone.innerHTML = this.numeroChiamate.toString();
      creditoDisplayIphone.innerHTML = this.credito.toString();
    }
  }
  ricarica(creditoAggiunto: number): void {
    this.credito += creditoAggiunto;
    creditoDisplayIphone.innerHTML = this.credito.toString();
  }
  numero404(): number {
    console.log(this.credito);
    return this.credito;
  }
  getNumeroChiamate(): number {
    console.log(this.numeroChiamate);
    return this.numeroChiamate;
  }
  azzeraChiamate(): void {
    this.numeroChiamate = 0;
    chiamateDisplayIphone.innerHTML = this.numeroChiamate.toString();
  }
  displayOnScreen(): void {
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

    container?.appendChild(phoneDiv);
  }
}

let secondUser = new Iphone();
console.log(secondUser);

let chiamateDisplayIphone = document.querySelector(
  "#chiamate-2"
) as HTMLSpanElement;
let creditoDisplayIphone = document.querySelector(
  "#credito-2"
) as HTMLSpanElement;
let bottoneChiamataIphone = document.querySelector(
  ".iphone > button:nth-of-type(1)"
);
bottoneChiamataIphone?.addEventListener("click", function () {
  secondUser.chiamata(
    parseInt(
      (
        document.querySelector(
          ".iphone > input:nth-of-type(1)"
        ) as HTMLInputElement
      ).value
    )
  );
});

let bottoneRicaricaIphone = document.querySelector(
  ".iphone > button:nth-of-type(2)"
);
bottoneRicaricaIphone?.addEventListener("click", function () {
  secondUser.ricarica(
    parseInt(
      (
        document.querySelector(
          ".iphone > input:nth-of-type(2)"
        ) as HTMLInputElement
      ).value
    )
  );
});

let bottone404Iphone = document.querySelector(
  "#more-buttons-iphone > button:nth-of-type(1)"
);
bottone404Iphone?.addEventListener("click", function () {
  secondUser.numero404();
});

let bottoneNumeroChiamateIphone = document.querySelector(
  "#more-buttons-iphone > button:nth-of-type(2)"
);
bottoneNumeroChiamateIphone?.addEventListener("click", function () {
  secondUser.getNumeroChiamate();
});

let bottoneAzzeraIphone = document.querySelector(
  "#more-buttons-iphone > button:nth-of-type(3)"
);
bottoneAzzeraIphone?.addEventListener("click", function () {
  secondUser.azzeraChiamate();
});

// TELEFONO NOTHINGPHONE E RELATIVE DICHIARAZIONI

class NothingPhone extends SmartPhone {
  display;
  constructor() {
    super("NothingPhone");
    this.display = this.displayOnScreen();
  }
  chiamata(durataChiamata: number): void {
    if (this.credito < 0.2) {
      alert("Credito insufficiente");
    } else {
      this.credito = this.credito - 0.2 * durataChiamata;
      this.numeroChiamate++;
      chiamateDisplayNothing.innerHTML = this.numeroChiamate.toString();
      creditoDisplayNothing.innerHTML = this.credito.toString();
    }
  }
  ricarica(creditoAggiunto: number): void {
    this.credito += creditoAggiunto;
    creditoDisplayNothing.innerHTML = this.credito.toString();
  }
  numero404(): number {
    console.log(this.credito);
    return this.credito;
  }
  getNumeroChiamate(): number {
    console.log(this.numeroChiamate);
    return this.numeroChiamate;
  }
  azzeraChiamate(): void {
    this.numeroChiamate = 0;
    chiamateDisplayNothing.innerHTML = this.numeroChiamate.toString();
  }
  displayOnScreen(): void {
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

    container?.appendChild(phoneDiv);
  }
}

let thirdUser = new NothingPhone();
console.log(thirdUser);

let chiamateDisplayNothing = document.querySelector(
  "#chiamate-3"
) as HTMLSpanElement;
let creditoDisplayNothing = document.querySelector(
  "#credito-3"
) as HTMLSpanElement;
let bottoneChiamataNothing = document.querySelector(
  ".nothing > button:nth-of-type(1)"
);
bottoneChiamataNothing?.addEventListener("click", function () {
  thirdUser.chiamata(
    parseInt(
      (
        document.querySelector(
          ".nothing > input:nth-of-type(1)"
        ) as HTMLInputElement
      ).value
    )
  );
});

let bottoneRicaricaNothing = document.querySelector(
  ".nothing > button:nth-of-type(2)"
);
bottoneRicaricaNothing?.addEventListener("click", function () {
  thirdUser.ricarica(
    parseInt(
      (
        document.querySelector(
          ".nothing > input:nth-of-type(2)"
        ) as HTMLInputElement
      ).value
    )
  );
});

let bottone404Nothing = document.querySelector(
  "#more-buttons-nothing > button:nth-of-type(1)"
);
bottone404Nothing?.addEventListener("click", function () {
  thirdUser.numero404();
});

let bottoneNumeroChiamateNothing = document.querySelector(
  "#more-buttons-nothing > button:nth-of-type(2)"
);
bottoneNumeroChiamateNothing?.addEventListener("click", function () {
  thirdUser.getNumeroChiamate();
});

let bottoneAzzeraNothing = document.querySelector(
  "#more-buttons-nothing > button:nth-of-type(3)"
);
bottoneAzzeraNothing?.addEventListener("click", function () {
  thirdUser.azzeraChiamate();
});
