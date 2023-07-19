const calculadora = {
    numeroA: 0,
    numeroB: 0,
    suma: function () {
      return this.numeroA + this.numeroB;
    },
    resta: function () {
      return this.numeroA - this.numeroB;
    },
    multiplicacion: function () {
        return this.numeroA * this.numeroB;
      },
      division: function () {
        return this.numeroA / this.numeroB;
      }
    // 1. crear multiplicación
    // 2. crear division
  };
  
  const caso1 = { numeroA: 3, numeroB: 5 };
  const caso2 = { numeroA: 1000, numeroB: 85 };

console.log("Operaciones para caso 1:");
calculadora.numeroA = caso1.numeroA;
calculadora.numeroB = caso1.numeroB;
console.log("Suma:", calculadora.suma());
console.log("Resta:", calculadora.resta());
console.log("Multiplicación:", calculadora.multiplicacion());
console.log("División:", calculadora.division());

console.log("\nOperaciones para caso 2:");
calculadora.numeroA = caso2.numeroA;
calculadora.numeroB = caso2.numeroB;
console.log("Suma:", calculadora.suma());
console.log("Resta:", calculadora.resta());
console.log("Multiplicación:", calculadora.multiplicacion());
console.log("División:", calculadora.division());

function nuevaSuma(caso1, caso2) {
    calculadora.numeroA = caso1.numeroA;
    calculadora.numeroB = caso1.numeroB;
    const sumaCaso1 = calculadora.suma();
  
    calculadora.numeroA = caso2.numeroA;
    calculadora.numeroB = caso2.numeroB;
    const sumaCaso2 = calculadora.suma();
  
    return sumaCaso1 + sumaCaso2;
  }
  
  const resultado = nuevaSuma(caso1, caso2);
  console.log("\nResultado de la nuevaSuma:", resultado);