// White Habbit

// Função iniciada toda vez que um jogador clica em um campo do jogo.
function jogada(square) {
    
    // Verifica de quem é a vez de jogar. Utiliza o valor de texto na tag com ID quemJoga e add a variavel 'jogador'.
    var jogador = document.getElementById('quemJoga').innerText;

    // A variavel statusSquare receber o texto presente no campo de jogada para verificar se ele está vazio posteriormente.
    var statusSquare = document.getElementById(square).innerText;

    // variavel recebe do elemento HTML o numero de jogadas até o fim do jogo.
    var movimentoRestante = parseInt(document.getElementById('movimentoRestante').innerText);

    // Compara se movimento restante é maior ou igual a á zero.
    if (movimentoRestante => 0) {

        // Decrementa um do numero de rodadas restantes.
        --movimentoRestante;

        // Atualiza o elemento HTML com o novo numero de rodadas restantes.
        document.getElementById('movimentoRestante').innerText = movimentoRestante;
    }

    // Verifica se o numero de jogadas esgotou.
    if (movimentoRestante == 0) {

        // Alerta de fim de jogo.
        alert('Fim do jogo. Velha!');
    }

    // Verifica se o statusSquare está vazio.
    if (statusSquare === 'X' || statusSquare === 'O') {
        alert('Jogada Invalida!');

    // Se statusSquare estiver vazio ele procesegue.
    } else {

        // Verifica se é a vez do jogador Player 1.
        if (jogador === 'Player 1') {

            // Add classe gamerX ao quadrado de jogo clicado.
            document.getElementById(square).classList.add('gamerX');

            // Remove outra classe presente no quadrado clicado.
            document.getElementById(square).classList.remove('gamerY');

            // Passa a vez da jogada para o proximo player.
            document.getElementById('quemJoga').innerText = 'Player 2';

            // Add a marcação do Player 1 no quadra de jogo clicado.
            document.getElementById(square).innerText = 'X';

        // Se não for a vez do jogador Player 1. Então é a vez do jogador Player 2.
        } else {

            // Add classe gamerY ao quadrado de jogo clicado.
            document.getElementById(square).classList.add('gamerY');

            // Remove outra classe presente no quadrado clicado.
            document.getElementById(square).classList.remove('gamerX');

            // Passa a vez da jogada para o proximo player.
            document.getElementById('quemJoga').innerText = 'Player 1';

            // Add a marcação do Player 2 no quadra de jogo clicado.
            document.getElementById(square).innerText = 'O';
        }
    }


    // ----------- Inicio -> Verificação de vencedor. ----------

    /* 

    Incicia a verificação de jogador vencedor.
    
    Pega dos elementos HTML quais campos foram preenchidos. Depois verifica se a tres squares repetidos.

    Primeiro verifica as linhas A, B e C.

    Segundo verifica as Colunas 1, 2 e 3.

    Por ultimo verifica as diagonais Superior-Esquerda para Inferior-Direita e Superior-direita para Inferior-esquerda.
    
    */

    // Pegando elementos do HTML.
    var squareA1 = document.getElementById('squareA1').innerText;
    var squareA2 = document.getElementById('squareA2').innerText;
    var squareA3 = document.getElementById('squareA3').innerText;
    var squareB1 = document.getElementById('squareB1').innerText;
    var squareB2 = document.getElementById('squareB2').innerText;
    var squareB3 = document.getElementById('squareB3').innerText;
    var squareC1 = document.getElementById('squareC1').innerText;
    var squareC2 = document.getElementById('squareC2').innerText;
    var squareC3 = document.getElementById('squareC3').innerText;

    // Verificando primeira linha.
    if (squareA1 == squareA2 && squareA1 == squareA3 && squareA1 != '') {
        if (squareA1 == 'X') {
            var jog = '1';
        } else {
            var jog = '2';
        }

        alert('O jogador ' +jog+ ' Ganhou!');
    }

    // Verificando linha do meio.
    if (squareB1 == squareB2 && squareB1 == squareB3 && squareB1 != '') {
        if (squareB1 == 'X') {
            var jog = '1';
        } else {
            var jog = '2';
        }

        alert('O jogador ' +jog+ ' Ganhou!');
    }

    // Verificando ultima linha.
    if (squareC1 == squareC2 && squareC1 == squareC3 && squareC1 != '') {
        if (squareC1 == 'X') {
            var jog = '1';
        } else {
            var jog = '2';
        }

        alert('O jogador ' +jog+ ' Ganhou!');
    }

    // Verifica primeira coluna.
    if (squareA1 == squareB1 && squareA1 == squareC1 && squareA1 != '') {
        if (squareA1 == 'X') {
            var jog = '1';
        } else {
            var jog = '2';
        }

        alert('O jogador ' +jog+ ' Ganhou!');
    }

    // Verifica coluna do meio.
    if (squareA2 == squareB2 && squareA2 == squareC2 && squareA2 != '') {
        if (squareA2 == 'X') {
            var jog = '1';
        } else {
            var jog = '2';
        }

        alert('O jogador ' +jog+ ' Ganhou!');
    }

    // Verifica ultima coluna.
    if (squareA3 == squareB3 && squareA3 == squareC3 && squareA3 != '') {
        if (squareA3 == 'X') {
            var jog = '1';
        } else {
            var jog = '2';
        }

        alert('O jogador ' +jog+ ' Ganhou!');
    }

    // Verifica primeira diagonal.
    if (squareA1 == squareB2 && squareA1 == squareC3 && squareA1 != '') {
        if (squareA1 == 'X') {
            var jog = '1';
        } else {
            var jog = '2';
        }

        alert('O jogador ' +jog+ ' Ganhou!');
    }

    // Verifica segunda diagonal.
    if (squareA3 == squareB2 && squareA3 == squareC1 && squareA3 != '') {
        if (squareA3 == 'X') {
            var jog = '1';
        } else {
            var jog = '2';
        }

        alert('O jogador ' +jog+ ' Ganhou!');
    }


    // ----------- Fim -> Verificação de vencedor. ----------
}