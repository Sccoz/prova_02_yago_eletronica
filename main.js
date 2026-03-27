let escolha = 0;
escolha = parseInt(
    prompt(`Digite a opção que deseja escolher :
    (PRIMEIRO APERTE F12)
    (1) -> Para calculadora de consumo energetico
    (2) -> Para Conversor de unidades 
    (3) -> Para Calcular Resistencia do resistor
    (4) -> Para Calcular Lei de Ohm
    Digite :`)
);

switch (escolha) {
    case 1:
        CalculoConsumoKWh();
        break;
    case 2:
        ConversorUnidades();
        break;
    case 3:
        ResistenciaResistor();
        break;
    case 4:
        Leiohm();
        break;
    default:
        console.log("Digite novamente opção Invalida escolhida!!");
        alert("Digite novamente opção Invalida escolhida!!");
}
