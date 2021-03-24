const menuadms = (prefix, pushname, role, getLevelingLevel, sender) => {
	  return `
┏━━━❉ *🇧🇷🇯🇵 Dados Do Usuario 🇧🇷🇯🇵* ❉━━┓
┣⊱🇯🇵🇧🇷 *Titulo* : ${role}
┣⊱🇯🇵🇧🇷 *Nome* : ${pushname}
┣⊱🇯🇵🇧🇷 *Numero* : wa.me/${sender.split("@")[0]}
┣⊱🇯🇵🇧🇷 *Level* : ${getLevelingLevel(sender)}
┗━━━━━⊱  ⸨ *MENU DOS ADMS* ⸩  ⊰━━━━━━━┛

┣⊱ 💣 *${prefix}linkgp* 
┣⊱ 💣 *${prefix}marcar* 
┣⊱ 💣 *${prefix}icongp*
┣⊱ 💣 *${prefix}gpnome*
┣⊱ 💣 *${prefix}gpdesc*
┣⊱ 💣 *${prefix}demitir*
┣⊱ 🧨 *Descrição:Demiti algum adm*
┣⊱ 💣 *${prefix}contratar*
┣⊱ 🧨 *Descrição:Contrata alguem para adm*
┣⊱ 💣 *${prefix}bv*
┣⊱ 🧨 *Descrição:Habilita as boas vindas no grupo*
┣⊱ 💣 *${prefix}leveling*
┣⊱ 🧨 *Descrição:Ativar/Desativar*
┣⊱ 💣 *${prefix}nsfw*
┣⊱ 💣 *${prefix}antilink*
┣⊱ 🧨 *Descrição:1 ativar / 0 desativar*

`
}

exports.menuadms = menuadms