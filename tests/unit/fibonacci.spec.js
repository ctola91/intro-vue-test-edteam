// [0, 1, 1, 2, 3, 5, 8,.....]
// n cantidad de numeros que queremos obtener
function fibonacci(n) {
  const sequence = [];
  for (let i = 0; i < n; i++) {
    if (i == 0) {
      sequence.push(0);
    } else if (i == 1) {
      sequence.push(1);
    } else {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  }
  return sequence;
}

describe("Fibonacci test", () => {
  it("el tamanio del arreglo debe ser n = 5", () => {
    // inicializar mis valores
    const num = 5;
    // ejecutando la funcion
    const res = fibonacci(num);
    // verificar el resultado
    expect(res.length).toBe(num);
  });

  it("si el tamanio de n es igual a 1, el primer item debe returnar 0", () => {
    const num = 1;
    const res = fibonacci(num);
    expect(res.length).toBe(num);
    expect(res[0]).toBe(0);
  });
});
