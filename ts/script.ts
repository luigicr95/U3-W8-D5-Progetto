interface Phone {
  credito: number;
  numeroChiamate: number;
  nomeModello: string;
  ricarica(creditoAggiunto: number): void;
  chiamata(durataChiamata: number): void;
  numero404(): number;
  getNumeroChiamate(): number;
  azzeraChiamate(): void;
  displayOnScreen(): void;
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

  displayOnScreen(): void {
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

    container?.appendChild(phoneDiv);
  }
}

class Samsung extends SmartPhone {}
class Iphone extends SmartPhone {}
class NothingPhone extends SmartPhone {}

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
