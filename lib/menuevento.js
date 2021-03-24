const menuevento = (prefix, pushname, role, getLevelingLevel, sender) => {
	  return `
┗━━━━━━━━━━━⊱  ⸨ *Evento Leveling* ⸩  ⊰━━━━━━━━━━━━━━━━┛

┣⊱ 🇧🇷🇯🇵 *${prefix}top* ( 2 ticket )
┣⊱ 🇧🇷🇯🇵 *Descrição:Mostra o top de level e o top de dinheiro*

┣⊱ 🇧🇷🇯🇵 *${prefix}tfdinheiro*
┣⊱ 🇧🇷🇯🇵 *Descrição:Esse comando serve para você transferir dinheiro para outra pessoa (Ex: ${prefix}tfdinheiro @)*

┣⊱ 🇧🇷🇯🇵 *${prefix}tfdinheiro+*
┣⊱ 🇧🇷🇯🇵 *Descrição:Esse comando serve para você transferir dinheiro para outra pessoa (Ex: ${prefix}tfdinheiro+ @)*

┣⊱ 🇧🇷🇯🇵 *${prefix}tfdinheiro++*
┣⊱ 🇧🇷🇯🇵 *Descrição:Esse comando serve para você transferir dinheiro para outra pessoa (Ex: ${prefix}tfdinheiro++ @)*

┣⊱ 🇧🇷🇯🇵 *${prefix}tfticket*
┣⊱ 🇧🇷🇯🇵 *Descrição:Esse comando serve para você transferir tickets para outra pessoa (Ex: ${prefix}tfticket @)*

┣⊱ 🇧🇷🇯🇵 *${prefix}tfticket+*
┣⊱ 🇧🇷🇯🇵 *Descrição:Esse comando serve para você transferir tickets para outra pessoa (Ex: ${prefix}tfticket+ @)*

┣⊱ 🇧🇷🇯🇵 *${prefix}tfticket++*
┣⊱ 🇧🇷🇯🇵 *Descrição:Esse comando serve para você transferir tickets para outra pessoa (Ex: ${prefix}tfticket++ @)*

┣⊱ 🇧🇷🇯🇵 *${prefix}ticket*
┣⊱ 🇧🇷🇯🇵 *Descrição:So o dono pode usar esse comando*

┣⊱ 🇧🇷🇯🇵 *${prefix}exilar* ( 8 ticket )

┣⊱ 🇧🇷🇯🇵 *${prefix}buscar* ( 8 ticket )

┣⊱ 🇧🇷🇯🇵 *${prefix}conta* ( 1 ticket )
┣⊱ 🇧🇷🇯🇵 *Descrição:Você ve sua conta*

┣⊱ 🇧🇷🇯🇵 *${prefix}comprar+1*
┣⊱ 🇧🇷🇯🇵 *Descrição:Esse comando serve para você comprar tickets no +1 você pode colocar +5, +10, +20, +30, +40, +50. (Lembrando que você precisa comprar no +1 primeiro para depois usar os outros*

┣⊱ 🇧🇷🇯🇵 *${prefix}comprar+*
┣⊱ 🇧🇷🇯🇵 *Descrição:loja de tickets exclusivo para membros premiums*

┣⊱ 🇧🇷🇯🇵 *${prefix}aposta$* ( 1 ticket )
┣⊱ 🇧🇷🇯🇵 *Descrição:Você ganha uma quantidade aleatoria de dinheiro*

┣⊱ 🇧🇷🇯🇵 *${prefix}aposta$$* ( 8 ticket )
┣⊱ 🇧🇷🇯🇵 *Descrição:Você ganha uma quantidade aleatoria de dinheiro*

┣⊱ 🇧🇷🇯🇵 *${prefix}apostaxp* ( 1 ticket )
┣⊱ 🇧🇷🇯🇵 *Descrição:Você ganha uma quantidade aleatoria de xp*

┣⊱ 🇧🇷🇯🇵 *${prefix}apostaxp+* ( 20 ticket )
┣⊱ 🇧🇷🇯🇵 *Descrição:Você ganha uma quantidade aleatoria de xp*

┣⊱ 🇧🇷🇯🇵 *${prefix}tickets*
┣⊱ 🇧🇷🇯🇵 *Descrição:Você vê sua quantidade de tickets*

┣⊱ 🇧🇷🇯🇵 *${prefix}up*
┣⊱ 🇧🇷🇯🇵 *Descrição:Esse comando serve para voce upar (So funciona quando o evento estiver ligado e você estiver com tickets)*

┣⊱ 🇧🇷🇯🇵 *${prefix}level* ( 1 ticket )
┣⊱ 🇧🇷🇯🇵 *Descrição:Voce ve seu level*

┣⊱ 🇧🇷🇯🇵 *${prefix}contagem* ( 50 ticket )
┣⊱ 🇧🇷🇯🇵 *Descrição:Ele faz uma contagem para banir do grupo Ex: ${prefix}contagem @  (So usuarios com divindade pode usar esse comando)*

┣⊱ 🇧🇷🇯🇵 *${prefix}ban* ( 20 ticket )
┣⊱ 🇧🇷🇯🇵 *Descrição:Voce bani alguem do grupo Ex: ${prefix}ban @  (So usuarios com onipotencia pode usar esse comando)*

┣⊱ 🇧🇷🇯🇵 *${prefix}premiums* ( 1 ticket )
┣⊱ 🇧🇷🇯🇵 *Descrição:Mostra a lista de membros premium*

┣⊱ 🇧🇷🇯🇵 *${prefix}exilados* ( 1 ticket )
┣⊱ 🇧🇷🇯🇵 *Descrição:Mostra a lista de exilados*

┣⊱ 🇧🇷🇯🇵 *${prefix}grupo* ( 8 ticket )
┣⊱ 🇧🇷🇯🇵 *Descrição:Abrir ou Fechar (So membros premiums)*

┣⊱ 🇧🇷🇯🇵 *${prefix}add* ( 8 ticket )
┣⊱ 🇧🇷🇯🇵 *Descrição:Adicionar alguem no grupo (Só membros premiums) Ex: ${prefix}add 556294455322*

┣⊱ 🇧🇷🇯🇵 *${prefix}premiar* ( 20 ticket )
┣⊱ 🇧🇷🇯🇵 *Descrição:Transforma um membro em membro premium ( So membros divindades pode fazer isso)*

┣⊱ 🇧🇷🇯🇵 *${prefix}divindade* ( 50 ticket )
┣⊱ 🇧🇷🇯🇵 *Descrição:Transforma um membro em membro divino ( So membros onipotentes pode fazer isso)*

┣⊱ 🇧🇷🇯🇵 *${prefix}exilar* ( 8 ticket )
┣⊱ 🇧🇷🇯🇵 *Descrição:Exila alguem de usar os comandos do bot ( So membros divindades pode fazer isso)*

┣⊱ 🇧🇷🇯🇵 *${prefix}buscar* ( 8 ticket )
┣⊱ 🇧🇷🇯🇵 *Descrição:Busca alguem que esta exilado ( So membros divindades pode fazer isso)*
`
}

exports.menuevento = menuevento