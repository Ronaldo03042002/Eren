exports.wait = () => {
	return`*「 🇧🇷🇯🇵 ESPERE 🇧🇷🇯🇵 」 ⌛ ESTA EM PROCESSO ⌛*`
}

exports.succes = () => {
	return`*「 🇧🇷🇯🇵 SUCESSO 🇧🇷🇯🇵 」*`
}

exports.lvlon = () => {
	return`*「 🇧🇷🇯🇵 Ativado 🇧🇷🇯🇵 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 🇧🇷🇯🇵 Desativado 🇧🇷🇯🇵 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*🐤 SEU NÍVEL AINDA ESTÁ VAZIO 🐤*`
}

exports.lvlnoon = () => {
	return`*🦇 Leveling desativado 🦇*`
}

exports.noregis = () => {
return`*「 🇯🇵🇧🇷 NÃO REGISTRADO 🇯🇵🇧🇷 」*\n\n*\n\n_Para usar os comandos & Participar de eventos_\n\n*「 ${prefix}registrar nome-idade 」*`
}

exports.rediregis = () => {
	return`*「 🇯🇵🇧🇷 JA REGISTRADO 🇯🇵🇧🇷 」*\n\n*você já está registrado*`
}

exports.stikga = () => {
	return`*🦦 Falhou que pena 🦦*`
}

exports.linkga = () => {
	return`*🐕‍🦺 Link inválido 🐕‍🦺*`
}

exports.groupo = () => {
	return`*「SÓ PODE NOS GRUPO」*`
}

exports.benned = () => {
	return`*「Voce esta exilado」*`
}	

exports.oni = () => {
	return`*「Você ainda nao esta qualificado para usar esse comando」*`
}

exports.ownerb = () => {
	return`*「SÓ O DONO DO BOT QUE PODE USAR 」*`
}

exports.ownerg = () => {
	return`*「SÓ O DONO DO BOT QUE PODE USAR 」*`
}

exports.admin = () => {
	return`*「SÓ OS ADMINISTRADORES DO GRUPO」*`
}

exports.badmin = () => {
	return`*「O BOT DEVE SER ADMINISTRADOR」*`
}

exports.nsfwoff = () => {
	return`*❌ *em que ativar o NSFW ❌*`
}

exports.bug = () => {
	return`*🆙 Problemas foram relatados ao proprietário do BOT, relatórios falsos não serão respondidos 🆙*`
}

exports.wrongf = () => {
	return`*🗿 Formato incorreto / texto em branco 🗿*`
}

exports.clears = () => {
	return`*⚓ Limpando ⚓*`
}

exports.pc = () => {
	return`*「 🇧🇷🇯🇵 CADASTRO 🇧🇷🇯🇵 」*\n\n para saber se você se cadastrou, verifique a mensagem que enviei \n\n*NOTA:* *⚠️ se você não entendeu a mensagem significa que você não salvou o número do bot ⚠️*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 🇧🇷🇯🇵 SEUS DADOS 🇧🇷🇯🇵 」*\n\n*🌍 Você se registrou 🌎* \n\n┏━⊱🇧🇷🇯🇵 *Nome*\n┗⊱🇧🇷🇯🇵 ${namaUser}\n┏━⊱🇧🇷🇯🇵 *Numero*\n┗⊱🇧🇷🇯🇵 wa.me/${sender.split("@")[0]}\n┏━⊱🇧🇷🇯🇵 *Idade*\n┗⊱🇧🇷🇯🇵 ${umurUser}\n┏━⊱🇧🇷🇯🇵 *Hora de registro*\n┗⊱🇧🇷🇯🇵 ${time}\n\n┏━❉🇧🇷🇯🇵 *Codigo importante* ❉━\n┣⊱${serialUser}\n┗⊱🇧🇷🇯🇵 *NOTE* : *⚠️ Salva esse codigo ai que talvez você precise dele ⚠️*`
}

exports.cmdnf = (prefix, command) => {
	return`comando *${prefix}${command}* não encontrado\tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Desculpe, mas ${pushname} não o script do dono*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${aha}*\n\n_NOTE : Converse no grupo para sempre ganhar XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahb}*\n\n_NOTE : Converse no grupo para sempre ganhar XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahc}*\n\n_NOTE : Converse no grupo para sempre ganhar XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahd}*\n\n_NOTE : Converse no grupo para sempre ganhar XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahe}*\n\n_NOTE : Converse no grupo para sempre ganhar XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahf}*\n\n_NOTE : Converse no grupo para sempre ganhar XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, premi, divindade, onipotente, ranks) => { 
	return `
┏━━━⊱  *🇧🇷🇯🇵 Informação do Usuario 🇧🇷🇯🇵*  ⊰━━┓]
┣⊱⚓ *Titulo* : ${role}
┣⊱⚓ *Onipotente* : ${onipotente}
┣⊱⚓ *Divindade* : ${divindade}
┣⊱⚓ *Premium* : ${premi}
┣⊱⚓ *Pontos* : ${ranks}
┣⊱⚓ *Nome* : ${pushname}
┣⊱⚓ *Numero* : wa.me/${sender.split("@")[0]}
┣⊱⚓ *O teu dinheiro* : ${uangku}
┣⊱⚓ *XP* : ${getLevelingXp(sender)}/${reqXp}
┣⊱⚓ *Level* : ${getLevelingLevel(sender)}
┣⊱⚓ *Registro do usuário* : ${_registered.length}
┗━━━⊱  ⸨ *LISTA DE MENUS* ⸩  ⊰━━━━┛

┣⊱ 🌹 *${prefix}menuteste* 
┣⊱ 🌹 *${prefix}menuprincipal* 
┣⊱ 🌹 *${prefix}menuevento* 
┣⊱ 🌹 *${prefix}menualeatorio* 
┣⊱ 🌹 *${prefix}menudono*
┣⊱ 🌹 *${prefix}menuadms*   
┃  
┣⊱Meu App de Animes
┃
┣⊱ *https://play.google.com/store/apps/details?id=com.listasiptv*
┃ 
┣⊱ *https://chat.whatsapp.com/GSNM0r7qdFp3R3IHJgJ1xY*
┃
┗━━⊱  ⸨ *Meliodas* ⸩  ⊰━━━┛
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role, premi, divindade, onipotente) => {
	return`
*「 🆙 Parabéns 🆙 」*

┣⊱🆙 *Titulo* :  ${role}
┣⊱♻️ *Onipotente* : ${onipotente}
┣⊱🆙 *Divindade* : ${divindade}
┣⊱♻️ *Premium* : ${premi}
┣⊱🆙 *Nome* : ${pushname}
┣⊱♻️ *Numero* : wa.me/${sender.split("@")[0]}
┣⊱🆙 *Xp* : ${getLevelingXp(sender)}
┣⊱♻️ *Tickets* = +2
┣⊱🆙 *Level* : ${getLevel} ⊱✅  ${getLevelingLevel(sender)}

🌍 *Você quer ficar no topo 👑? Seja ativo no grupo* 🌏
`}
 
exports.limitend = (pushname) => {
	return`*${pushname} ⚓ Seus tickets são insuficientes ⚓*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 🆙 Seus Tickets 🆙 」*

*🇯🇵🇧🇷 Quantidade de Tickets 🇯🇵🇧🇷* : 
🧧🧧🧧🧧🧧🧧 ${limitCounts}

*⚠️ Consiga tickets comprando, subindo de level ou com o criador ⚠️*\n\nVocê tambem pode pedir para um amigo transferir dinheiro para você vou ensinar\n\n*Exemplo: ${prefix}transferir @/1000*`
}

exports.satukos = () => {
	return`*⚜️ Use o comando junto do ativar / para ativar ou desativar / para desativar ⚜️*`
}

exports.jogando = () => {
	return`*⚜️ ❌ Você Errou a Resposta / ou colocou a resposta em maiusculo ❌ ⚜️*`
}

exports.uangkau = (pushname, sender, uangkau, role, premi, divindade, onipotente, getLevelingLevel, rankss, emotion) => {
	return`*┏⊱ 「 🇯🇵🇧🇷 Mundo Otaku 🇯🇵🇧🇷 」⊰━┓*\n┣⊱🕋 *Titulo* : ${role}\n┣⊱🌟 *Onipotente* : ${onipotente}\n┣⊱👑 *Divindade* : ${divindade}\n┣⊱🔥 *Premium* : ${premi}\n┣⊱🏆 *Pontos* : ${rankss}\n┣⊱🤔 *Emoção* : ${emotion}\n┣⊱🌹 *Nome* : ${pushname}\n┣⊱🪝 *Numero* : ${sender.split("@")[0]}\n┣⊱💸 *Dinheiro* : ${uangkau}\n┣⊱🆙 *Level* : ${getLevelingLevel(sender)}\n\n *⚠️ Seja ativo e fique acima de todos ⚠️*`
}

exports.premadd = (pnom) => {
	return`*「🐺 Parabens Você agora é Premium 🐺」*

*Nome* : ${pnom}
*Expiração* : 30 DIAS\n*Aproveite bem quem sabe não ganhe denovo*`
}

exports.porcoadd = (pnomporco) => {
	return`*「🐷 Parabens Você agora é um Porco 🐷」*

*Nome* : ${pnomporco}
*Expiração* : 30 DIAS\n*Você agora esta marcado como um porco*`
}

exports.deuseadd = (pnom1) => {
	return`*「🌹 Parabens Você é uma divindade 🌹」*

*Nome* : ${pnom1}
*Expiração* : 30 DIAS\n*Aproveite bem quem sabe não ganhe denovo*`
}

exports.oniadd = (pnom2) => {
	return`*「⌛ Parabens Você se tornou ONIPOTENTE ⏳」*

*Nome* : ${pnom2}
*Expiração* : 30 DIAS\n*Aproveite bem quem sabe não ganhe denovo*`
}

exports.dellprem = (hnom) => {
	return`*「🆙 Você perdeu seu premium 🆙」*

*Nome* : ${hnom}
*Expiração* : 🇯🇵🇧🇷\n\n*Tente ganhar novamente gostou das vantagens?*`
}

exports.dellporco = (hnomporco) => {
	return`*「🐖 Ola porquinho Você Ganho Sua Liberdade 🐖」*

*Nome* : ${hnomporco}
*Expiração* : 🇯🇵🇧🇷\n\n*Aproveite sua liberdade porquinho, até o natal*`
}

exports.delldeuse = (hnom1) => {
	return`*「🆙 Você perdeu sua divindade 🆙」*

*Nome* : ${hnom1}
*Expiração* : 🇯🇵🇧🇷\n\n*Tente ganhar novamente gostou das vantagens?*`
}

exports.delloni = (hnom2) => {
	return`*「🆙 Você perdeu sua ONIPOTENCIA🆙」*

*Nome* : ${hnom2}
*Expiração* : 🇯🇵🇧🇷\n\n*Tente ganhar novamente gostou das vantagens?*`
}

exports.premon = (pushname) => {
	return`${pushname} *🆙 Você não é premium 🆙*`
}

exports.deuso = (pushname) => {
	return`${pushname} *🆙 Você não é divindade 🆙*`
}

exports.onipo = (pushname) => {
	return`${pushname} *🆙 Você não é ONIPOTENTE 🆙*`
}

exports.banadd = (pnom3) => {
	return`*「🐺 Você esta exilado🐺」*

*Nome* : ${pnom3}
*Expiração* : 30 DIAS\n\n*⚔️ Exilado ⚔️*`
}

exports.dellban = (hnom3) => {
	return`*「🆙 Você voltou do exilamento🆙」*

*Nome* : ${hnom3}
*Expiração* : 🇯🇵🇧🇷\n\n*⚔️ Voltou ⚔️*`
}