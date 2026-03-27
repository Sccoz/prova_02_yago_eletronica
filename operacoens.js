//CALCULADORA DE CONSUMO DE GASTO EM KWh
function CalculoConsumoKWh() {
    let quantidadeEletro = parseInt(
        prompt(`
        Bem vindo a calculadora de consumo e gasto eletrico
        Digite quantos eletrodomesticos voce deseja ver o gasto : `)
    );

    let tarifa = parseFloat(prompt(`Digite o valor da tarifa em (R$) por KWh : `));

    let quilowatts = 0,
        consumoEletrodomestico = 0,
        horaspDia = 0,
        diaspMes = 0,
        quiloWattsHoraMes = 0,
        custoMensal = 0,
        wattsOUquilowatts = 0;
    let totalReaisTodosOsEletros = 0;

    for (let contador = 0; contador < quantidadeEletro; contador++) {
        let nomeEletro = prompt("Digite o nome do eletrodomestico :");
        wattsOUquilowatts = parseInt(
            prompt(`Como voce tem o dado do consumo do eletrodomestico ?
            Digite (1) se o consumo esta em Watts
            Digite (2) se o consumo esta em QuiloWatts
            Digite :`)
        );
        consumoEletrodomestico = parseFloat(prompt(`Digite o consumo do Eletrodomestico que pode ser em (Watts ou QuiloWats) :`));
        horaspDia = parseFloat(prompt("Digite quantas horas em media o eletrodomestico fica ligado por dia :"));
        diaspMes = parseFloat(prompt("Digite quantos dias em media o eletrodomestico fica ligado por mes :"));
        switch (wattsOUquilowatts) {
            case 1:
                quilowatts = consumoEletrodomestico / 1000; // Se for watts divide por mil p virar KWh
                break;
            case 2:
                quilowatts = consumoEletrodomestico; // Se ja ta em KWh so receber na variavel
                break;
            default:
                alert("Voce escolheu uma opcao invalida desconsidere o que aparecer apartir de agora, Recomece!!");
                console.log("Voce escolheu uma opcao invalida desconsidere o que aparecer apartir de agora, Recomece!!");
        }
        quiloWattsHoraMes = quilowatts * horaspDia * diaspMes; // Calculando total em KWh gasto por mes
        custoMensal = quiloWattsHoraMes * tarifa; // Calculando o valor em R$ gasto por mes
        totalReaisTodosOsEletros += custoMensal; //Juntando o valor gasto por todos os eletrodomesticos.

        console.log("Temos seus resultados do/a : " + nomeEletro + "\nSeu gasto total por mes  em Kilowwats/h : " + quiloWattsHoraMes.toFixed(2) + "\nO custo total desse eletrodomestico e : R$" + custoMensal.toFixed(2) + "\nPressione o Enter para ir pro proximo ou ir para os resultados finais:");

        alert("Temos seus resultados do/a : " + nomeEletro + "\nSeu gasto total por mes  em Kilowwats/h : " + quiloWattsHoraMes.toFixed(2) + "\nO custo total desse eletrodomestico e : R$" + custoMensal.toFixed(2) + "\nPressione o Enter para ir pro proximo ou ir para os resultados finais:");
    }
    console.log("Agora que voce ja viu seu consumo eletrodomestico por eletrodomestico..\nPodemos informar que o gasto total mensal de todos eles e : R$" + totalReaisTodosOsEletros.toFixed(2));

    alert("Agora que voce ja viu seu consumo eletrodomestico por eletrodomestico..\nPodemos informar que o gasto total mensal de todos eles e : R$" + totalReaisTodosOsEletros.toFixed(2));
}

//CONVERTER UNIDADES DO SI

function ConversorUnidades() {
    const prefixo = {
        // Prefixos do SI
        G: 10 ** 9,
        M: 10 ** 6,
        k: 10 ** 3,
        base: 10 ** 0,
        mili: 10 ** -3,
        micro: 10 ** -6,
        nano: 10 ** -9,
    };

    let unidadeMedida = prompt(`
    Bem vindo ao conversor de uniades!! 
    Aqui voce vai escolher o que deseja converter (Digite):

    A -> para corrrente elétrica (Ampère)
    V -> para tensão elétrica (Volts)
    Ohm -> para Resistencia elétrica (Ohm)
    W -> para Potencia elétrica (Watts)

    Digite:`);

    let primeiroPrefixo = prompt(`
    Digite o prefixo do numero a ser convertido:
    (EXATAMENTE COMO ESTA ESCRITO A ESQUERDA)

    G -> para Giga
    M -> para Mega
    k -> para Quilo
    base -> se não tiver prefixo
    mili -> para Mili
    micro -> para Micro
    nano -> para Nano

    Digite : 
    `);

    let segundoPrefixo = prompt(`
    Digite o prefixo para qua você quer converter :
    (EXATAMENTE COMO ESTA ESCRITO A ESQUERDA)

    G -> para Giga
    M -> para Mega
    k -> para Quilo
    base -> se não tiver prefixo
    mili -> para Mili
    micro -> para Micro
    nano -> para Nano

    Digite :
    `);

    let quantidade = parseFloat(prompt("Digite quantos  " + primeiroPrefixo + unidadeMedida + " voce uer converter para " + segundoPrefixo + unidadeMedida + " : "));

    let primeiroPrefixo_ConversaoParaBase = quantidade * prefixo[primeiroPrefixo]; // Converte do prefixo que estava o numero para o numero sem nenhum prefixo
    let base_ParaUnidadeFinal = primeiroPrefixo_ConversaoParaBase / prefixo[segundoPrefixo]; // Converte o numero sem nenhum prefixo para o prefixo desejado

    //Apenas para ficar bonito :

    if (primeiroPrefixo == "base") {
        primeiroPrefixo = "";
    } else if (segundoPrefixo == "base") {
        segundoPrefixo = "";
    }

    alert("RESULTADO: \n" + quantidade + " " + primeiroPrefixo + " " + unidadeMedida + " Convertidos para " + segundoPrefixo + " " + unidadeMedida + "\nTeremos : " + base_ParaUnidadeFinal + " " + segundoPrefixo + " " + unidadeMedida);
    console.log("RESULTADO: \n" + quantidade + " " + primeiroPrefixo + " " + unidadeMedida + " Convertidos para " + segundoPrefixo + " " + unidadeMedida + "\nTeremos : " + base_ParaUnidadeFinal + " " + segundoPrefixo + " " + unidadeMedida);
}

//DESCOBRIR A RESISTENCIA EM OHM DE UM RESISTOR

function ResistenciaResistor() {
    const faixadeDigito = {
        PRETO: 0,
        MARROM: 1,
        VERMELHO: 2,
        LARANJA: 3,
        AMARELO: 4,
        VERDE: 5,
        AZUL: 6,
        VIOLETA: 7,
        CINZA: 8,
        BRANCO: 9,
    };

    const faixaMultiplicadora = {
        PRETO: 1,
        MARROM: 10,
        VERMELHO: 100,
        LARANJA: 1000,
        AMARELO: 10000,
        VERDE: 100000,
        AZUL: 1000000,
        VIOLETA: 10000000,
        CINZA: 100000000,
        BRANCO: 1000000000,
        DOURADO: 0.1,
        PRATA: 0.01,
    };

    const faixadeTolerancia = {
        MARROM: 1,
        VERMELHO: 2,
        VERDE: 0.5,
        AZUL: 0.25,
        VIOLETA: 0.1,
        CINZA: 0.05,
        DOURADO: 5,
        PRATA: 10,
    };

    //Apenas parte estetica
    console.log(`
    Para escrever as cores escreva assim : 
    PRETO -> faixa preta
    MARROM -> faixa marrom
    VEREMLHO -> faixa veremlha
    LARANJA -> faixa laranja
    AMARELO -> faixa amarela
    VERDE -> faixa verde
    AZUL -> faixa azul
    VIOLETA -> faixa violeta
    CINZA -> faixa cinza
    BRANCO -> faixa branca
    DOURADO -> faixa dourada
    PRATA -> faixa prateada`);

    let qtdFixasdoResistor = parseInt(
        prompt(`
        Digite a quantidad de faixas do resitor ja que temos 2 modelos

        (4) -> para resistores que possuem apenas 4 faixas
        (5) -> para resistores que possuem 5 faixas
        
        Digite :`)
    );

    let faixa1 = prompt("Digite a cor da faixa 1 (IGUAL ESCRITO NO CONSOLE) :");
    let faixa2 = prompt("Digite a cor da faixa 2 (IGUAL ESCRITO NO CONSOLE) :");
    let faixa3 = prompt("Digite a cor da faixa 3 (IGUAL ESCRITO NO CONSOLE) :");
    let faixa4 = prompt("Digite a cor da faixa 4 (IGUAL ESCRITO NO CONSOLE) :");
    let faixa5;

    let numeroDasPrimeirasFaixas = 0, //Nuemro juntando as 2 ou 3 primeiras faixas.
        numeroMultiplicado = 0, // Numero das 2 ou 3 primeiras faixas multiplicado pela 3 ou 4 faixa ( O que resulta no nuemro final).
        toleranciapBaixo = 0, // Tolerancia do resistor (Quando diminui a resistividade( Ex : se o numero base e 100 e a tolerancia e 10% essa variavel recebe 90))
        toleranciapCima = 0; // Tolerancia do resistor (Quando aumenta a resistividade( Ex : se o numero base e 100 e a tolerancia e 10% essa variavel recebe 110))

    switch (qtdFixasdoResistor) {
        case 4:
            numeroDasPrimeirasFaixas = faixadeDigito[faixa1] * 10 + faixadeDigito[faixa2];
            numeroMultiplicado = numeroDasPrimeirasFaixas * faixaMultiplicadora[faixa3];
            //Temos os Ohm do resistor; Vamos descobrir a tolerancia:
            toleranciapCima = numeroMultiplicado * (1 + faixadeTolerancia[faixa4] / 100);
            toleranciapBaixo = numeroMultiplicado * (1 - faixadeTolerancia[faixa4] / 100);
            //Proxima linha e apenas para o print para nao precisar repetilo em cada um dos cases
            faixa5 = faixa4;
            break;
        case 5:
            faixa5 = prompt("Digite a cor da faixa 5 (IGUAL ESCRITO NO CONSOLE) :");
            numeroDasPrimeirasFaixas = faixadeDigito[faixa1] * 100 + faixadeDigito[faixa2] * 10 + faixadeDigito[faixa3];
            numeroMultiplicado = numeroDasPrimeirasFaixas * faixaMultiplicadora[faixa4];
            //Temos os Ohm do resistor; Vamos descobrir a tolerancia:
            toleranciapCima = numeroMultiplicado * (1 + faixadeTolerancia[faixa5] / 100);
            toleranciapBaixo = numeroMultiplicado * (1 - faixadeTolerancia[faixa5] / 100);
            break;
    }

    console.log("O Resistor tem como caracteristicas :\nSua resistividade base e : " + numeroMultiplicado + " Ohms\nPodem como tolerancia e " + faixadeTolerancia[faixa5] + " % :\nA resistividade varia de " + toleranciapBaixo + " Ohms a " + toleranciapCima + " Ohms");
    alert("O Resistor tem como caracteristicas :\nSua resistividade base e : " + numeroMultiplicado + " Ohms\nPodem como tolerancia e " + faixadeTolerancia[faixa5] + " % :\nA resistividade varia de " + toleranciapBaixo + " Ohms a " + toleranciapCima + " Ohms");
}

//FUNCAO PARA A LEI DE OHM

function Leiohm() {
    let escolha = parseInt(
        prompt(`
        Bem vindo a calculadora de LEI DE OHM...
        Aqui voce tem 3 opçõens de para descobrir :

        (1) -> Para descobrir a Tensão (Volts)
        (2) -> Para descobrir a Corrente (Amperes)
        (3) -> Para descobrir a Resistencia (Ohm)
        
        Digite : `)
    );

    let volts = 0, // Criando os tres valores para pedir os que o usuario ja sabe,
        resistencia = 0, // E dar o que ele ainda nao sabe.
        amperes = 0,
        resposta = 0;

    //Para fins esteticos :
    let unidadeMedida = 0;

    switch (escolha) {
        case 1:
            resistencia = parseFloat(prompt("Digite a Resistencia (Ohm) : "));
            amperes = parseFloat(prompt("Digite a Corrente (Amperes) : "));

            //Formula de Ohm
            volts = resistencia * amperes;
            resposta = volts;
            unidadeMedida = "Volts";
            break;
        case 2:
            volts = parseFloat(prompt("Digite a Tensao (Volts) : "));
            resistencia = parseFloat(prompt("Digite a Resistencia (Ohm) : "));

            //Formula de Ohm
            amperes = volts / resistencia;
            resposta = amperes;
            unidadeMedida = "Amperes";
            break;
        case 3:
            volts = parseFloat(prompt("Digite a Tensao (Volts) : "));
            amperes = parseFloat(prompt("Digite a Corrente (Amperes) : "));

            //Formula de Ohm
            resistencia = volts / amperes;
            resposta = resistencia;
            unidadeMedida = "ohms";
            break;
    }
    console.log("De acordo com os numero informados a resposta e : " + resposta.toFixed(2) + " " + unidadeMedida);
    alert("De acordo com os numero informados a resposta e : " + resposta.toFixed(2) + " " + unidadeMedida);
}

//FUNCAO PARA CALCULAR REQ EM SERIE E PARALELO

function CalculoReq_Serie_E_Paralelo() {
    let escolha = parseInt(
        prompt(`
        Bem vindo a calculadora de Resistencia Equivalente :
        Aqui voce possui 2 opcoes : 
        (1) -> Para calcular uma Req em Serie
        (2) -> Para calcular uma Req em Paralelo `)
    );

    let qtd = parseInt(prompt("Digite a quantidade de resistores : "));

    let resistores = [];
    let req = 0, //Vou usar o mesmo nos dois aqui teremos a resposta final
        soma = 0; // soma usada para REQ em paralelo

    for (let contador = 0; contador < qtd; contador++) {
        resistores[contador] = parseFloat(prompt("Digite a resistencia do " + (contador + 1) + " resistor : "));

        switch (escolha) {
            case 1:
                req += resistores[contador];
                break;
            case 2:
                soma += 1 / resistores[contador];
                req = 1 / soma; // Aqui isso acontecera todas as vezes que rodar o for entao a ultima resposta sera correta
                break;
        }
    }
    console.log("A resistencia equivalente e : " + req.toFixed(2) + " Ohms");
    alert("A resistencia equivalente e : " + req.toFixed(2) + " Ohms");
}
