const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    const x = e.target.querySelector("#Peso");
    const y = e.target.querySelector("#Altura");
    const peso = Number(x.value);
    const altura = Number(y.value);
    const imc = CalcularImc(peso, altura);
    const p = document.createElement("p");
    p.innerHTML = imc;

    const resultado = document.querySelector("#resultado");

    resultado.innerHTML = "";
    resultado.appendChild(p);
});

function CalcularImc(a, b) {
    return (a / b ** 2).toFixed(2);
}