let comecarPartida = confirm(`Bem-vinde ao jogo de Blackjack! \nDeseja iniciar uma nova rodada?`);

if (comecarPartida) {

   let maoJogador = [];
   let maoBanca = [];
   let totalJogador = 0;
   let totalBanca = 0;
   let vitoriaJogador = "O jogador ganhou!";
   let vitoriaBanca = "A Banca ganhou!";
   let empate = "Empate!!"

   let carta1 = comprarCarta();
   let carta2 = comprarCarta();
   let carta3 = comprarCarta();
   let carta4 = comprarCarta();
   let carta5 = comprarCarta();

   let carta1Banca = comprarCarta();
   let carta2Banca = comprarCarta();
   let carta3Banca = comprarCarta();
   let carta4Banca = comprarCarta();
   let carta5Banca = comprarCarta();

   // saca as 2 primeiras cartas,a primeira da banca e guarda tudo no Array
   maoJogador.push(carta1.valor, carta2.valor);
   totalJogador = Number(carta1.valor + carta2.valor);
   // maoBanca.push(carta1Banca.valor);
   // totalBanca = Number(carta1Banca.valor);

   // function rodadaBanca () {
   //    if (maoBanca <= 21){
   //       maoBanca += Number(carta2Banca)
   //       totalBanca += Number(carta2Banca.valor)
   //    }
   // }

   for (i = 0; i < 5; i++){
      totalBanca = Number(maoBanca.valor[i]);
   }

   function rodadaBanca() {
      while (totalBanca <= 21) {  
            totalBanca = 
            maoBanca.push(comprarCarta());
         }
      }
      console.log(maoBanca)



   console.log(totalJogador);
   if (confirm(`Mão do jogador: ${carta1.texto} ${carta2.texto}. Deseja comprar outra carta?`)) {
      totalJogador += Number(carta3.valor);
      maoJogador.push(carta3.valor);
      console.log(totalJogador)
      // Primeira compra, adicionando carta3 -- 1
      if (totalJogador <= 21 && confirm(`Mão do jogador: ${carta1.texto} ${carta2.texto} ${carta3.texto}. Deseja comprar outra carta?`)) {
         totalJogador += Number(carta4.valor);
         maoJogador.push(carta4.valor);
         console.log(totalJogador)
         // Segunda compra, adicionando carta4 -- 2
         if (totalJogador <= 21 && confirm(`Mão do jogador: ${carta1.texto} ${carta2.texto} ${carta3.texto} ${carta4.texto}. Deseja comprar outra carta?`)) {
            totalJogador += Number(carta5.valor);
            maoJogador.push(carta5.valor);
            console.log(totalJogador)
            // Terceira compra, adicionando carta5 -- 3
         } else {
            alert(`Mão final: ${carta1.texto} ${carta2.texto} ${carta3.texto} ${carta4.texto} - Pontuação: ${totalJogador}`) // inicio de compras da Banca -- 3
            rodadaBanca()
         }
      } else {
         alert(`Mão final: ${carta1.texto} ${carta2.texto} ${carta3.texto} - Pontuação: ${totalJogador}`) // inicio de compras da Banca -- 2
         rodadaBanca()
      }
   } else {
      alert(`Mão final: ${carta1.texto} ${carta2.texto} - Pontuação: ${totalJogador}`) // inicio de compras da Banca -- 1
      rodadaBanca()
   }
} else {
   alert("Fim de jogo")
}

























































//    if (totalJogador > 21) {  // analisa se sacou dois As
//       let carta1 = comprarCarta();
//       let carta2 = comprarCarta();
//    } else {
//       if (confirm(`Suas cartas são ${carta1.texto} ${carta2.texto}. A carta revelada da Banca é ${carta1Banca.texto}. \nDeseja comprar outra carta?`)) {
//          maoJogador.push(carta3.valor);
//          totalJogador = Number(totalJogador + carta3.valor);
//          if (confirm(`Suas cartas são ${carta1.texto} ${carta2.texto} ${carta3.texto}. A carta revelada da Banca é ${carta1Banca.texto}. \nDeseja comprar outra carta?`)) {
//             maoJogador.push(carta4.valor);
//             totalJogador = Number(totalJogador + carta4.valor);
//             if (confirm(`Suas cartas são ${carta1.texto} ${carta2.texto} ${carta3.texto} ${carta4.texto}. A carta revelada da Banca é ${carta1Banca.texto}. \nDeseja comprar outra carta?`)) {
//                maoJogador.push(carta5.valor);
//                totalJogador = Number(totalJogador + carta5.valor);
//             } else {
//                if (totalJogador > totalBanca && totalJogador <= 21) {
//                   alert(`Mão do jogador: ${carta1.texto} ${carta2.texto} ${carta3.texto} ${carta4.texto} - Pontuação: ${totalJogador}\nMão da Banca: ${carta1Banca.texto}\n${vitoriaJogador}`);
//                } else if (totalJogador < totalBanca && totalBanca <= 21) {
//                   alert(`Mão do jogador: ${carta1.texto} ${carta2.texto} ${carta3.texto} ${carta4.texto} - Pontuação: ${totalJogador}\nMão da Banca: ${carta1Banca.texto}\n${vitoriaBanca}`);
//                } else if (totalJogador == totalBanca) {
//                   alert(`Mão do jogador: ${carta1.texto} ${carta2.texto} ${carta3.texto} ${carta4.texto} - Pontuação: ${totalJogador}\nMão da Banca: ${carta1Banca.texto}\n${empate}`);
//                }
//             }
//          } else {
//             if (totalJogador > totalBanca && totalJogador <= 21) {
//                alert(`Mão do jogador: ${carta1.texto} ${carta2.texto} ${carta3.texto} - Pontuação: ${totalJogador}\nMão da Banca: ${carta1Banca.texto}\n${vitoriaJogador}`);
//             } else if (totalJogador < totalBanca && totalBanca <= 21) {
//                alert(`Mão do jogador: ${carta1.texto} ${carta2.texto} ${carta3.texto} - Pontuação: ${totalJogador}\nMão da Banca: ${carta1Banca.texto}\n${vitoriaBanca}`);
//             } else if (totalJogador == totalBanca) {
//                alert(`Mão do jogador: ${carta1.texto} ${carta2.texto} ${carta3.texto} - Pontuação: ${totalJogador}\nMão da Banca: ${carta1Banca.texto}\n${empate}`);
//             }
//          }
//       } else {
//          if (totalJogador > totalBanca && totalJogador <= 21) {
//             alert(`Mão do jogador: ${carta1.texto} ${carta2.texto} - Pontuação: ${totalJogador}\nMão da Banca: ${carta1Banca.texto}\n${vitoriaJogador}`);
//          } else if (totalJogador < totalBanca && totalBanca <= 21) {
//             alert(`Mão do jogador: ${carta1.texto} ${carta2.texto} - Pontuação: ${totalJogador}\nMão da Banca: ${carta1Banca.texto}\n${vitoriaBanca}`);
//          } else if (totalJogador == totalBanca) {
//             alert(`Mão do jogador: ${carta1.texto} ${carta2.texto} - Pontuação: ${totalJogador}\nMão da Banca: ${carta1Banca.texto}\n${empate}`);
//          }
//       }
//    }
//    console.log(totalJogador);
// } else {
//    alert("Fim de jogo.")
