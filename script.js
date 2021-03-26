function jogada(square) {
    // Verifica de quem é a vez de jogar. Utiliza o valor de texto na tag com ID quemJoga e add a variavel 'jogador'.
    var jogador = document.getElementById('quemJoga').innerText;

    // A variavel statusSquare receber o texto presente no campo de jogada para verificar se ele está vazio posteriormente.
    var statusSquare = document.getElementById(square).innerText;

    var movimentoRestante = parseInt(document.getElementById('movimentoRestante').innerText);
    if (movimentoRestante => 0) {
        --movimentoRestante;
        document.getElementById('movimentoRestante').innerText = movimentoRestante;
    }

    if (movimentoRestante == 0) {
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
}