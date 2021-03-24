const {
    WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require('@adiwajshing/baileys');
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const util = require('util')
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { donasi } = require('./lib/donasi')
const { menuteste } = require('./lib/menuteste')
const { menuprincipal } = require('./lib/menuprincipal')
const { menuevento } = require('./lib/menuevento')
const { menualeatorio } = require('./lib/menualeatorio')
const { menuresumido } = require('./lib/menuresumido')
const { ajudaevento } = require('./lib/ajudaevento')
const { menudono } = require('./lib/menudono')
const { menuadms } = require('./lib/menuadms')
const { titulos } = require('./lib/titulos')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exec, spawn } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const path = require('path')
const ms = require('parse-ms')
const toMs = require('ms')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./language')

/********** MENU SETTING **********/
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Meliodas Admin\n' 
            + 'ORG: Pengembang XBot;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=557996019550:+557996019550\n' 
            + 'END:VCARD'			
blocked = []   
prefix = '#'
limitawal = 10
memberlimit = 0
ator = 'AMEL cans'
namo = 'jangan colong'
game = 'gtx'
game1 = 'logica'
um = '***********'
dois = '***********'
tres = '***********'
quatro = '***********'
cinco = '***********'
seis = '***********'
sete = '***********'
oito = '***********'
nove = '***********'
dez = '***********'
onze = '***********'
doze = '***********'
treze = '***********'
catorze = '***********'
quinze = '***********'
dezesseis = '***********'
dezesete = '***********'
dezoito = '***********'
dezenove = '***********'
vinte = '***********'
cr = '*🌟 Meliodas 🌟*'
/*************************************/

/******** OWNER NUMBER**********/
const ownerNumber = ["557996019550@s.whatsapp.net"] 
/************************************/

       
/*********** LOAD FILE ***********/
const setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./strg/video.json'))
const audionye = JSON.parse(fs.readFileSync('./strg/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./strg/image.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const jogo = JSON.parse(fs.readFileSync('./database/bot/jogo.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const rank = JSON.parse(fs.readFileSync('./database/user/rank.json'))
const prem = JSON.parse(fs.readFileSync('./database/user/prem.json'))
const porco = JSON.parse(fs.readFileSync('./database/user/porco.json'))
const deuses = JSON.parse(fs.readFileSync('./database/user/deuses.json'))
const oni = JSON.parse(fs.readFileSync('./database/user/oni.json'))
const ban = JSON.parse(fs.readFileSync('./database/user/ban.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))
/*********** END LOAD ***********/

/********** FUNCTION ***************/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }   

        const addNAN = (sender) => {
        	const obj1 = {id: sender, rank : 0}
            rank.push(obj1)
            fs.writeFileSync('./database/user/rank.json', JSON.stringify(rank))
        }
        
        const addPontUser = (sender, amount) => {
            let position = false
            Object.keys(rank).forEach((i) => {
                if (rank[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                rank[position].rank += amount
                fs.writeFileSync('./database/user/rank.json', JSON.stringify(rank))
            }
        }
        
        const checkNANuser = (sender) => {
        	let position = false
            Object.keys(rank).forEach((i) => {
                if (rank[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return rank[position].rank
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
		
		const confirmNAN = (sender, amount) => {
        	let position = false
            Object.keys(rank).forEach((i) => {
                if (rank[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                rank[position].rank -= amount
                fs.writeFileSync('./database/user/rank.json', JSON.stringify(rank))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }	

         const laimitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 5
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }

         const lbimitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 10
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }

         const lcimitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 25
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }

         const ldimitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 50
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }

         const leimitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 100
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }

         const lfimitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 250
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }	

         const lgimitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 600
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }		
        
         const getPremiumExpired = (sender) => {
		    let position = null
		    Object.keys(prem).forEach((i) => {
		        if (prem[i].id === sender) {
		            position = i
		        }
		    })
		    if (position !== null) {
		        return prem[position].expired
		    }
		} 
		
		const expiredCheck = () => {
		    setInterval(() => {
		        let position = null
		        Object.keys(prem).forEach((i) => {
		            if (Date.now() >= prem[i].expired) {
		                position = i
		            }
		        })
		        if (position !== null) {
		            console.log(`Premium Expirado: ${prem[position].id}`)
		            prem.splice(position, 1)
		            fs.writeFileSync('./database/user/prem.json', JSON.stringify(prem))
		        }
		    }, 1000)
		}
		
		const getAllPremiumUser = () => {
		    const array = []
		    Object.keys(prem).forEach((i) => {
		        array.push(prem[i].id)
		    })
		    return array
		}

         
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)} Hora ${pad(minutes)} Minuto ${pad(seconds)} Segundo`
}

function addMetadata(packname, author) {	
	if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./${name}.exif`, buffer, (err) => {	
		return `./${name}.exif`	
	})	

}

/********** FUNCTION ***************/

const client = new WAConnection()
   client.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('[','white'),color('∆','red'),color(']','white'),color('qr already scan.subscribe','white'),color('YOU','red'),color('TUBE','white'),color('Nan Killi','yellow'))
})

client.on('credentials-updated', () => {
	const authInfo = client.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
client.connect();


client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Olá @${num.split('@')[0]}\n*Bem vindo ao grupo*\n*${mdata.subject}*\n🇧🇷╬ sᴇᴊᴀ ʙᴇᴍ ᴠɪɴᴅᴏ (ᴀ)╬🇯🇵\n🏮 sᴇ ɑᴘʀᴇsᴇɴᴛᴇ ᴄᴏᴍ: (obrigɑtório)\n➦Nome(real):\n➠Idɑde: \n\n➦ *Só fique no grupo se for ser ativo*\n\n➠Foto (opcionɑl)\n\n🧧 Regras na descrição\n\n*Se quiser seguir a gente no instagram segue o link abaixo*\n\n*https://instagram.com/universo.otakuu?igshid=176irbj5c6r17*\n\n*Se vocês estiverem no grupo da recepção marca um ADM para por vcs no grupo principal.*`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*Digite F para o* @${num.split('@')[0]} *foi embora 😖*`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
            var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
            const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = client.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
			const isJogo = isGroup ? jogo.includes(from) : false
			const isBadWord = isGroup ? badword.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
			const isPrem = prem.includes(sender)
			const isPorco = porco.includes(sender)
			const isDeuses = deuses.includes(sender)
			const isOni = oni.includes(sender)
			const isBanned = ban.includes(sender)
			const isAntiLink = isGroup ? antilink.includes(from) : false
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
	        /*****************END SCURITY FEATURE ********/
			
			
			
			var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
			const peri = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const perl = peri-getLevelingXp(sender) 
			const resl = Math.round(100-((perl/getLevelingXp(sender))*100))
			if (resl <= 10) {
				per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 20) {
				per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 30) {
				per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 40) {
				per = `*[████▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 50) {
				per = `*[█████▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 60) {
				per = `*[██████▒▒▒▒] ${resl}%*`
			} else if (resl <= 70) {
				per = `*[███████▒▒▒] ${resl}%*`
			} else if (resl <= 80) {
				per = `*[████████▒▒] ${resl}%*`
			} else if (resl <= 90) {
				per = `*[█████████▒] ${resl}%*`
			} else if (resl <= 100) {
				per = `*[██████████] ${resl}%*`
			}
			

			
			//auto Expired
            expiredCheck()
			
			//function rank
        const levelRole = getLevelingLevel(sender)
        var role = '*Cidadão (A)*'
        if (levelRole <= 3) {
            role = '*Superando Limites*'
        } else if (levelRole <= 5) {
            role = '*Rompendo Os Ceus*'
        } else if (levelRole <= 7) {
            role = '*Iniciando Jornada*'
        } else if (levelRole <= 9) {
            role = '*A Imensidão Dos Universos*'
        } else if (levelRole <= 12) {
            role = '*Em Busca Do Equilibrio*'
        } else if (levelRole <= 14) {
            role = '*Trilhando Meu Caminho*'
        } else if (levelRole <= 17) {
            role = '*Mestre (A)*'
        } else if (levelRole <= 20) {
            role = '*Transcedente do Tempo*'
		} else if (levelRole <= 23) {
            role = '*Imperatriz De Guerra (Imperador)*'	
        } else if (levelRole <= 25) {
            role = '*Heroi (Heroina)*'
        } else if (levelRole <= 30) {
            role = '*Principe (Princesa)*'
        } else if (levelRole <= 35) {
            role = '*Rank SSS*'
        } else if (levelRole <= 40) {
            role = '*Demonio Antigo SSS*'
        } else if (levelRole <= 45) {
            role = '*Rei (Rainha)*'
        } else if (levelRole <= 50) {
            role = '*Entrando No Reino Dos Deuses*'
        } else if (levelRole <= 55) {
            role = '*Filhos de Divindades*'
        } else if (levelRole <= 60) {
            role = '*Soberano Continental*'
        } else if (levelRole <= 65) {
            role = '*Classificação Mundial*'
        } else if (levelRole <= 70) {
            role = '*Divindades*'
        } else if (levelRole <= 80) {
            role = '*⚠️ Perigo Incalculavel ⚠️*'
        } else if (levelRole <= 100) {
            role = '*🌍 Onipotencia 🌎*'
        }
		
		    var premi = '❌'
			if (isPrem) {
				premi = '🔛 '
			}
			if (isOwner) {
				premi = '֍֎⳼ₜᵣₒᵥãₒ ᎧᎮ ᭄'
			}
			
			var divindade = '❌'
			if (isDeuses) {
				divindade = '🔛 '
			}			
			if (isOwner) {
				divindade = '™ꪶ࿋྄ིᤢꫂ๖ۣۜℍ𝕒𝕣𝕦𓊗༢࿔ྀુ𓆪'
			}
			
			var onipotente = '❌'
			if (isOni) {
				onipotente = '🔛 _Zerou_'
			}			
            if (isOwner) {
				onipotente = 'ᏫᎮ• ࿐​ꪀꪖ​ꪀᴳᵒᵈ〗'
			}
			
			if (isRegistered) {
				    const regis =['Feliz','Triste','Raiva','Vingativo','Motivado','Desconfiado','Imperativo','Desafiador','Depressivo','Amargurado','Infeliz','Louco','Sede Por Sangue','Sem emoção','Confiança','Assassino','Escuridão','Explorar','Viajar','Conhecimento','Redenção','Humildade','Motivado','Avançar','Desistir','Sumir','Namorar','Riqueza','Grandeza','Medo','Assustado','Amedrontado','Comediante','Engraçado','Vencedor','Perdedor','Pobreza','Fome','Frio','Quente','Sede','Tesão','Equilibrado']
					const tered = regis[Math.floor(Math.random() * regis.length)]
			        emotion = tered
			}		
			
			
			
	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 2) + 110
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 2)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role, premi, divindade, onipotente))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`*🇧🇷🇯🇵 seus tickets acabaram 🇯🇵🇧🇷*\n\n*🐼 Compre ou suba de nivel para conseguir mais 🐼*`, text,{ quoted: mek})
                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
			//funtion limited
            const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
	 
	        //function laimited
            const isLaimit = (sender) =>{ 
          	if (isOwner) {return false;}
		      let position = false
              for (let lmt of _limit) {
              if (lmt.id === sender) {
              	let limits = limitawal - lmt.limit
              if (limits <= 5 ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
	 
	        //funtion lbimited
            const isLbimit = (sender) =>{ 
          	if (isOwner) {return false;}
		      let position = false
              for (let lmt of _limit) {
              if (lmt.id === sender) {
              	let limits = limitawal - lmt.limit
              if (limits <= 10 ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
	 
	        //funtion lcimited
            const isLcimit = (sender) =>{ 
          	if (isOwner) {return false;}
		      let position = false
              for (let lmt of _limit) {
              if (lmt.id === sender) {
              	let limits = limitawal - lmt.limit
              if (limits <= 25 ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
	 
	        //funtion ldimited
            const isLdimit = (sender) =>{ 
          	if (isOwner) {return false;}
		      let position = false
              for (let lmt of _limit) {
              if (lmt.id === sender) {
              	let limits = limitawal - lmt.limit
              if (limits <= 50 ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
	 
	        //funtion leimited
            const isLeimit = (sender) =>{ 
          	if (isOwner) {return false;}
		      let position = false
              for (let lmt of _limit) {
              if (lmt.id === sender) {
              	let limits = limitawal - lmt.limit
              if (limits <= 100 ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
	 
	        //funtion lfimited
            const isLfimit = (sender) =>{ 
          	if (isOwner) {return false;}
		      let position = false
              for (let lmt of _limit) {
              if (lmt.id === sender) {
              	let limits = limitawal - lmt.limit
              if (limits <= 250 ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
	 
	        //funtion lgimited
            const isLgimit = (sender) =>{ 
          	if (isOwner) {return false;}
		      let position = false
              for (let lmt of _limit) {
              if (lmt.id === sender) {
              	let limits = limitawal - lmt.limit
              if (limits <= 600 ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
			
		    if (isGroup) {
					try {
						const getmemex = groupMembers.length	
					    if (getmemex <= memberlimit) {
						reply(`Limite de membros do grupo muito pouco o limite minimo é ${memberlimit}`)
						setTimeout( () => {
 	                           client.groupLeave(from) 
 					   	}, 5000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("1")
							}, 4000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("2")
							}, 3000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("3")
							}, 2000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("4")
							}, 1000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("5")
							}, 0)
					    }
		       } catch (err) { console.error(err)  }
 	       }

        if (isGroup && isBadWord) {
            if (bad.includes(mesejAnti)) {
                if (!isGroupAdmins) {
                    return reply("😠")
                        .then(() => client.groupRemove(from, sender))
                        .then(() => {
                            client.sendMessage(from, `*「 ANTI 」*\nVoce vai ser banido!`, text ,{quoted: mek})
                        }).catch(() => client.sendMessage(from, `_Ja baniram ele_`, text , {quoted : mek}))
                } else {
                    return reply( "😇")
                }
            }
        }
	   
         
            //function balance
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 1) + 20
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
		
		    //function balance rank
            if (isRegistered ) {
            const checkNAN = checkNANuser(sender)
            try {
                if (checkNAN === undefined) addNAN(sender)
                const ranksaku = Math.floor(Math.random() * 0) + 0
                addPontUser(sender, ranksaku)
            } catch (err) {
                console.error(err)
            }
        }
// ANTI LINK GRUP
                if (mesejAnti.includes("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('✅ *Adms do grupo podem mandar* ✅')
		        client.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("#Meliodas")) return reply("*#Meli*")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`⚠️ *Adeus mané ${sender.split("@")[0]} vira gente e para de divulgar no grupo de outro* ⚠️`)
		        setTimeout( () => {
			        client.groupRemove(from, [kic]).catch((e)=>{reply(`🙌 *Preciso de ADM* 🙌`)})
		        }, 500)
		        setTimeout( () => {
			        client.updatePresence(from, Presence.composing)
			        reply("🌟 _Apagar_ 🌟")
		        }, 0)
	        } 
// Resposta Quiz
                if (mesejAnti.includes(game)){
	        if (!isGroup) return
	        if (!isJogo) return
	        client.updatePresence(from, Presence.composing)
	        if (mesejAnti.includes(game1)) return reply("*Sem spam*")
	        var acerto = `${sender.split("@")[0]}@s.whatsapp.net`
	        reply(`⚠️ *Analisando sua resposta* ⚠️`)
	        setTimeout( () => {
	              const one5 = Math.ceil(Math.random() * 5000)
		      const ale = Math.ceil(Math.random() * 10)
		      const ace = Math.ceil(Math.random() * 3)
		      addPontUser(sender, ace)
                      addLevelingXp(sender, one5)
                      addLevelingLevel(sender, 0)
		      bayarLimit(sender, ale)
                      reply(`️🕋 *PARABENS VOCÊ ACERTOU* 🕋\n\n🆙 *XP* 🆙: ${one5}\n🧧 *Tickets* 🧧: ${ale}\n🌟 *Pontos* 🌟: ${ace}\n\n⚠️ _Fale para o wa.me/557996019550 que voce ganhou_ ⚠️`)
		      jogo.splice(from, 1)
			fs.writeFileSync('./database/bot/jogo.json', JSON.stringify(jogo))
			reply('🌟🇯🇵 ✅ 🇯🇵🌟')   
	        }, 1000)
	        setTimeout( () => {
	            client.updatePresence(from, Presence.composing)
	            reply("🌟 _Analisando_ 🌟")
	        }, 0)
            } 
// Resposta Quiz dois
                if (mesejAnti.includes(game1)){
	        if (!isGroup) return
	        if (!isJogo) return
	        client.updatePresence(from, Presence.composing)
	        if (mesejAnti.includes(game)) return reply("*Sem spam*")
	        var acerto = `${sender.split("@")[0]}@s.whatsapp.net`
	        reply(`⚠️ *Analisando sua resposta* ⚠️`)
	        setTimeout( () => {
	              const mining6 = Math.ceil(Math.random() * 2500)
		      const ale1 = Math.ceil(Math.random() * 10)
		      const ace1 = Math.ceil(Math.random() * 3)
		      addPontUser(sender, ace1)
                      addKoinUser(sender, mining6)
		      bayarLimit(sender, ale1)
                      reply(`🕋 *PARABENS VOCÊ ACERTOU* 🕋\n\n💸 *Dinheiro* 💸: ${mining6}\n🧧 *Tickets* 🧧: ${ale1}\n🌟 *Pontos* 🌟: ${ace1}\n\n⚠️ _Fale para o wa.me/557996019550 que voce ganhou_ ⚠️`)
		      jogo.splice(from, 1)
			fs.writeFileSync('./database/bot/jogo.json', JSON.stringify(jogo))
			reply('🌟🇯🇵 ✅ 🇯🇵🌟')   
	        }, 1000)
	        setTimeout( () => {
	            client.updatePresence(from, Presence.composing)
	            reply("🌟 _Analisando_ 🌟")
	        }, 0)
            }  
// Casa Palavra
                if (mesejAnti.includes(um)){
	        if (!isGroup) return
	        if (!isJogo) return
	        client.updatePresence(from, Presence.composing)
	        if (mesejAnti.includes("#Meli")) return reply("*Sem spam*")
	        var acerto = `${sender.split("@")[0]}@s.whatsapp.net`
	        reply(`⚠️ *✅* ⚠️`)
            } 
// Casa Palavra
                if (mesejAnti.includes(dois)){
	        if (!isGroup) return
	        if (!isJogo) return
	        client.updatePresence(from, Presence.composing)
	        if (mesejAnti.includes("#Meli")) return reply("*Sem spam*")
	        var acerto = `${sender.split("@")[0]}@s.whatsapp.net`
	        reply(`⚠️ *✅* ⚠️`)
            }
// Casa Palavra
                if (mesejAnti.includes(tres)){
	        if (!isGroup) return
	        if (!isJogo) return
	        client.updatePresence(from, Presence.composing)
	        if (mesejAnti.includes("#Meli")) return reply("*Sem spam*")
	        var acerto = `${sender.split("@")[0]}@s.whatsapp.net`
	        reply(`⚠️ *✅* ⚠️`)
            } 
// Casa Palavra
                if (mesejAnti.includes(quatro)){
	        if (!isGroup) return
	        if (!isJogo) return
	        client.updatePresence(from, Presence.composing)
	        if (mesejAnti.includes("#Meli")) return reply("*Sem spam*")
	        var acerto = `${sender.split("@")[0]}@s.whatsapp.net`
	        reply(`⚠️ *✅* ⚠️`)
            } 
// Casa Palavra
                if (mesejAnti.includes(cinco)){
	        if (!isGroup) return
	        if (!isJogo) return
	        client.updatePresence(from, Presence.composing)
	        if (mesejAnti.includes("#Meli")) return reply("*Sem spam*")
	        var acerto = `${sender.split("@")[0]}@s.whatsapp.net`
	        reply(`⚠️ *✅* ⚠️`)
            } 
// Casa Palavra
                if (mesejAnti.includes(seis)){
	        if (!isGroup) return
	        if (!isJogo) return
	        client.updatePresence(from, Presence.composing)
	        if (mesejAnti.includes("#Meli")) return reply("*Sem spam*")
	        var acerto = `${sender.split("@")[0]}@s.whatsapp.net`
	        reply(`⚠️ *✅* ⚠️`)
            } 
// Casa Palavra
                if (mesejAnti.includes(sete)){
	        if (!isGroup) return
	        if (!isJogo) return
	        client.updatePresence(from, Presence.composing)
	        if (mesejAnti.includes("#Meli")) return reply("*Sem spam*")
	        var acerto = `${sender.split("@")[0]}@s.whatsapp.net`
	        reply(`⚠️ *✅* ⚠️`)
            } 
// Casa Palavra
                if (mesejAnti.includes(oito)){
	        if (!isGroup) return
	        if (!isJogo) return
	        client.updatePresence(from, Presence.composing)
	        if (mesejAnti.includes("#Meli")) return reply("*Sem spam*")
	        var acerto = `${sender.split("@")[0]}@s.whatsapp.net`
	        reply(`⚠️ *✅* ⚠️`)
            } 
// Casa Palavra
                if (mesejAnti.includes(nove)){
	        if (!isGroup) return
	        if (!isJogo) return
	        client.updatePresence(from, Presence.composing)
	        if (mesejAnti.includes("#Meli")) return reply("*Sem spam*")
	        var acerto = `${sender.split("@")[0]}@s.whatsapp.net`
	        reply(`⚠️ *✅* ⚠️`)
            } 
// Casa Palavra
                if (mesejAnti.includes(onze)){
	        if (!isGroup) return
	        if (!isJogo) return
	        client.updatePresence(from, Presence.composing)
	        if (mesejAnti.includes("#Meli")) return reply("*Sem spam*")
	        var acerto = `${sender.split("@")[0]}@s.whatsapp.net`
	        reply(`⚠️ *✅* ⚠️`)
            } 
// Casa Palavra
                if (mesejAnti.includes(doze)){
	        if (!isGroup) return
	        if (!isJogo) return
	        client.updatePresence(from, Presence.composing)
	        if (mesejAnti.includes("#Meli")) return reply("*Sem spam*")
	        var acerto = `${sender.split("@")[0]}@s.whatsapp.net`
	        reply(`⚠️ *✅* ⚠️`)
            }  	
// Casa Palavra
                if (mesejAnti.includes(treze)){
	        if (!isGroup) return
	        if (!isJogo) return
	        client.updatePresence(from, Presence.composing)
	        if (mesejAnti.includes("#Meli")) return reply("*Sem spam*")
	        var acerto = `${sender.split("@")[0]}@s.whatsapp.net`
	        reply(`⚠️ *✅* ⚠️`)
            } 
// Casa Palavra
                if (mesejAnti.includes(catorze)){
	        if (!isGroup) return
	        if (!isJogo) return
	        client.updatePresence(from, Presence.composing)
	        if (mesejAnti.includes("#Meli")) return reply("*Sem spam*")
	        var acerto = `${sender.split("@")[0]}@s.whatsapp.net`
	        reply(`⚠️ *✅* ⚠️`)
            } 
// Casa Palavra
                if (mesejAnti.includes(quinze)){
	        if (!isGroup) return
	        if (!isJogo) return
	        client.updatePresence(from, Presence.composing)
	        if (mesejAnti.includes("#Meli")) return reply("*Sem spam*")
	        var acerto = `${sender.split("@")[0]}@s.whatsapp.net`
	        reply(`⚠️ *✅* ⚠️`)
            } 
// Casa Palavra
                if (mesejAnti.includes(dezesseis)){
	        if (!isGroup) return
	        if (!isJogo) return
	        client.updatePresence(from, Presence.composing)
	        if (mesejAnti.includes("#Meli")) return reply("*Sem spam*")
	        var acerto = `${sender.split("@")[0]}@s.whatsapp.net`
	        reply(`⚠️ *✅* ⚠️`)
            } 
// Casa Palavra
                if (mesejAnti.includes(dezesete)){
	        if (!isGroup) return
	        if (!isJogo) return
	        client.updatePresence(from, Presence.composing)
	        if (mesejAnti.includes("#Meli")) return reply("*Sem spam*")
	        var acerto = `${sender.split("@")[0]}@s.whatsapp.net`
	        reply(`⚠️ *✅* ⚠️`)
            } 
// Casa Palavra
                if (mesejAnti.includes(dezoito)){
	        if (!isGroup) return
	        if (!isJogo) return
	        client.updatePresence(from, Presence.composing)
	        if (mesejAnti.includes("#Meli")) return reply("*Sem spam*")
	        var acerto = `${sender.split("@")[0]}@s.whatsapp.net`
	        reply(`⚠️ *✅* ⚠️`)
            } 
// Casa Palavra
                if (mesejAnti.includes(dezenove)){
	        if (!isGroup) return
	        if (!isJogo) return
	        client.updatePresence(from, Presence.composing)
	        if (mesejAnti.includes("#Meli")) return reply("*Sem spam*")
	        var acerto = `${sender.split("@")[0]}@s.whatsapp.net`
	        reply(`⚠️ *✅* ⚠️`)
            } 	
// Casa Palavra
                if (mesejAnti.includes(vinte)){
	        if (!isGroup) return
	        if (!isJogo) return
	        client.updatePresence(from, Presence.composing)
	        if (mesejAnti.includes("#Meli")) return reply("*Sem spam*")
	        var acerto = `${sender.split("@")[0]}@s.whatsapp.net`
	        reply(`⚠️ *✅* ⚠️`)
            } 			
// ANTI PORCO
                if (mesejAnti.includes('puta','desgraçado','lixo','viado','gay','boiola','vtnc','penis','meu pau','filho da puta','lixinho','toma no cu','vai toma no cu','pnc','inuteis','vermes','comi sua mae','comi sua mãe','rabuda','buceta','pauzao','pau','pinto','porra','caralho','viadinho','viadao','cu','bot lixo','grupo lixo','toma no seus cu','meu ovo','seu cu','seu rabo','cala boca','enfia o dedo no cu')){
		        if (!isGroup) return
                if (!isPorco) return
		        if (!isAntiLink) return
		        client.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("#Meli")) return reply("*#Meliodas*")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`⚠️ *Porco ${sender.split("@")[0]} Irei de remover por causa da sua porquisse* ⚠️`)
		        setTimeout( () => {
			        client.groupRemove(from, [kic]).catch((e)=>{reply(`🙌 *Preciso de ADM* 🙌`)})
		        }, 5000)
		        setTimeout( () => {
			        client.updatePresence(from, Presence.composing)
			        reply("🌟 _Um Porco Quebrando As Regras, Detectado_ 🌟")
		        }, 500)
	        }			
             //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			switch(command) {
                                case 'letra':
		if (isBanned) return reply(ind.benned())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (!isRegistered) return reply(ind.noregis())
                teks = body.slice(7)
		    anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${teks}`, {method: 'get'})
		    reply('✒️ *Letra da musica* ✒️ '+teks+' 🎼🎤 :\n\n'+anu.result.lirik)
		await limitAdd(sender)
		    break
			case 'addbad':
			        if (isBanned) return reply(ind.benned())
			        if (!isRegistered) return reply(ind.noregis())
                    if (!isOwner) return reply(ind.ownerb())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `_Marque alguem exemplo ${prefix}addporco @_`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('*Usuario Adicionado Na Lista De Porcos Com Sucesso*')
                    break
			case 'delbad':
			        if (isBanned) return reply(ind.benned())
			        if (!isRegistered) return reply(ind.noregis())
                    if (!isOwner) return reply(ind.ownerb())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `_Marque alguem exemplo ${prefix}delporco @_`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('*Usuario Retirado Na Lista De Porcos Com Sucesso*')
                    break 
                case 'badwordlist':
				    if (isBanned) return reply(ind.benned())
			        if (!isRegistered) return reply(ind.noregis())
                    let lbw = `🐖 *A famosa Lista Dos Porcos* 🐖\n_Total_ : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸🐷 ${i.replace(bad)} 🐽\n`
                    }
                    await reply(lbw)
			        break 
				case 'badword':
				if (isBanned) return reply(ind.benned())
			    if (!isRegistered) return reply(ind.noregis())
                    if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Boo :??')
                if (args[0] === 'ativar') {
                if (isBadWord) return reply('_Os Porcos ja estão Contidos_')
                 	   badword.push(from)
                 	   fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                  	   reply(`⛓️ *Os Porcos estão sendo vigiados* ⛓️`)
              	  } else if (args[0] === 'desativar') {
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                 	    reply(`🐖 *Os Porcos estão a solta* 🐖`)
             	   } else {
                 	   reply(ind.satukos())
                	}		
                    break 		
		    case 'nome':
		    if (isBanned) return reply(ind.benned())
		    if (!isRegistered) return reply(ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    if (args.length < 1) return reply(ind.wrongf())
		    aruga = body.slice(5)
		    reply(ind.wait())
		    aruga = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${aruga}`)
		    client.sendMessage(from, aruga, image, {caption: '*ok*', quoted: mek})
		    await limitAdd(sender)
					break
                case 'waifus':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isNsfw) return reply(ind.nsfwoff())
					gatauda = body.slice(8)
					reply(ind.wait())
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break 
		    case 'nulis':
		    if (isBanned) return reply(ind.benned())
		    if (!isRegistered) return reply(ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    if (args.length < 1) return reply(ind.wrongf())
		    aruga = body.slice(7)
		    reply(ind.wait())
		    aruga = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${aruga}&apikey=apivinz`)
		    client.sendMessage(from, aruga, image, {caption: 'ok', quoted: mek})
		    await limitAdd(sender)
				    break 
                   case 'igstalk':
				   if (isBanned) return reply(ind.benned())
                   if (!isRegistered) return reply(ind.noregis())
                   if (isLimit(sender)) return reply(ind.limitend(pusname))
                     hmm = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/igs?u=${body.slice(9)}`)
                     buffer = await getBuffer(hmm.data.profilehd)
                     hasil = `Nome completo : ${hmm.data.fullname}\nseguidores : ${hmm.data.follower}\nSeguindo : ${hmm.data.following}\nPrivado : ${hmm.data.private}\nVerificado : ${hmm.data.verified}\nbio : ${hmm.data.bio}`
                    client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    await limitAdd(sender)
					break
          case 'speed':
          case 'ping':
		  if (isBanned) return reply(ind.benned())
          if (!isRegistered) return reply(ind.noregis())
            await client.sendMessage(from, `Acelerando!!!!\nRapidez: ${processTime(time, moment())} _Second_`)
					break
                case 'imgmaker':
		if (isBanned) return reply(ind.benned())
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                var ghh = body.slice(9)
		    var quote = ghh.split("-")[0];
		    var wm = ghh.split("-")[1];
		    var bg = ghh.split("-")[2];
		    const pref = `🖋️ *Como Usar* 🖋️: \n${prefix}imgmaker texto-nome-tema\n\n🖋️ *Exemplo* 🖋️ \n\n${prefix}imgmaker Meu Bot É Muito Top|Meliodas|random`
		    if (args.length < 1) return reply(pref)
		    reply(ind.wait())
		    anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=${bg}`, {method: 'get'})
		    buffealr = await getBuffer(anu.result)
		    client.sendMessage(from, buffealr, image, {caption: '✒️', quoted: mek})
		    await limitAdd(sender)
				break
/*
 ]=====> MIDIA AUDIO E VIDEOS <=====[
*/
				case 'tiktok':
				if (isBanned) return reply(ind.benned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				anu = await fetchJson (`https://docs-jojo.herokuapp.com/api/tiktok_nowm?url=${args[0]}`, {method : 'get' })
				if (anu.error) return reply(anu.error)
					teks = `*A partir* : ${anu.result.from}\n*Título* : ${anu.result.title}\n*Envio* : ${anu.result.uploaded}`
					thumb = await getBuffer(anu.result.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result.url)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					await limitAdd(sender)
				break
                case 'mod':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=BotWeA`)
			hepi = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*publisher*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*latest version*: ${hepi.latest_version}\n*genre*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)	
			    break
			case 'modx':
			   if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=BotWeA`)
			hupo = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			    break
            case 'url':
			    if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
               client.updatePresence(from, Presence.composing) 
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=BotWeA`)
                hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
                reply(hasil)
                await limitAdd(sender)
				break
                      case 'qrcode':
				if (isBanned) return reply(ind.benned())	  
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return client.sendMessage(from, '*👓 Digite o texto da url que deseja transformar em qr 👓*', text, {quoted: mek})
					const buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					client.sendMessage(from, buff, image, {quoted: mek})
					await limitAdd(sender)
				break
                case 'boxmsc':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=BotWeA`, {method: 'get'})
               if (data.error) return reply(data.error)
                 infomp3 = `*🇧🇷🇯🇵 Canção encontrada 🇧🇷🇯🇵*\n*🎧 Titulo 🎧* : ${data.result.judul}\n*🎧 Album 🎧* : ${data.result.album}\n*🎧 Publicados 🎧*: ${data.result.dipublikasi}`
                buffer = await getBuffer(data.result.thumb)
                lagu = await getBuffer(data.result.mp3)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
                await limitAdd(sender)
				break
					case 'play':
				if (isBanned) return reply(ind.benned())	  
				if (!isRegistered) return reply(ind.noregis())
			    if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply('🐤 *Cade a URL?* 🐤')
                anu = await fetchJson(`https://api.zeks.xyz/api/yts?q=${body.slice(6)}&apikey=apivinz`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 infomp3 = `*ENCONTREI*\nJudul : ${anu.result.title}\nDurasi : ${anu.result.duration}\nUkuran : ${anu.result.size}\n\n*ESPERE ENVIANDO POR FAVOR, NÃO FAÇA SPAM*`
                buffer = await getBuffer(anu.result.thumb)
                lagu = await getBuffer(anu.result.mp3)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                break
                break
                case 'yta':
				    if (isBanned) return reply(ind.benned())
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('🐤 *Cade a URL?* 🐤')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.wrogf())
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/yta?url=${args[0]}&apikey=BotWeA`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Titulo* : ${anu.title}\n*Tamanho* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					await limitAdd(sender)
                break				
				case 'pagweb':
				if (isBanned) return reply(ind.benned())
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                
					if (args.length < 1) return reply('🐣 *Cade a URL camarada* 🐣')
					teks = body.slice(7)
					reply(ind.wait())
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					buff = await getBuffer(anu.gambar)
					client.sendMessage(from, buff, image, {quoted: mek})
					await limitAdd(sender)	
                break 
					case 'pin':
					if (isBanned) return reply(ind.benned())
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*🐯 Mundo Otaku 🐯*`})
					await limitAdd(sender)
                break		
                case 'ytv':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('🐦 *Cade a URL mano* 🐦')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/ytv?url=${args[0]}&apikey=BotWeA`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Titulo* : ${anu.title}\n*tamanho* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					await limitAdd(sender)	
                break
				case 'voz':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return client.sendMessage(from, '⚜️ *Codigo idioma necessario* ⚜️', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, '🇧🇷 *qual texto voce esta criando? minha? voz?* 🇯🇵', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('*bem falhe, repeti dnv* 😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply('😤:(')
							client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)					
                break
/*
]=====> EVENTO LEVELING <=====[
*/				
				case 'melhoreslvl':
				case 'top':
				if (!isGroup) return reply(ind.groupo())
				if (isLaimit(sender)) return reply(ind.limitend(pusname))	
			    if (!isBotGroupAdmins) return reply(ind.badmin())
				if (isBanned) return reply(ind.benned())
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '*🇧🇷🇯🇵 🇷 🇦 🇳 🇰 🇮 🇳 🇬  🇩 🇦 🇸  🇱 🇪 🇳 🇩 🇦 🇸  🇯🇵🇧🇷*\n\n_🚧 Esse é o top 10 dos que estão com level mais altos So os ativos são capazes de chegar ao topo 🚧_\n\n'
                let leaderboarduang = '*🇯🇵🇧🇷 ℝ𝔸ℕ𝕂𝕀ℕ𝔾 𝔻𝕆𝕊 ℝ𝕀ℂ𝕆 🇧🇷🇯🇵*\n\n_🏔️ Ranking top 10 dos mais ricos, para ficar no topo tem que saber fazer dinheiro 🏔️_\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `🌪️🌋 *[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n┗⊱🌺 *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                        leaderboarduang += `💸💰 *[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱💎 *Dinheiro*: ${uang[i].uang}\n`
                    } 
                    await reply(leaderboardlvl)
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`*🏆 10 participantes para criar o Top10 🏆*`)
                }
				    await laimitAdd(sender)
				break
                case 'rank':
				case 'ranking':
				if (!isGroup) return reply(ind.groupo())
				if (isLaimit(sender)) return reply(ind.limitend(pusname))	
			    if (!isBotGroupAdmins) return reply(ind.badmin())
				if (isBanned) return reply(ind.benned())
				rank.sort((a, b) => (a.rank < b.rank) ? 1 : -1)
                  let leaderboardrank = '🧧 *🕋 [я̲̅α̲̅и̲̅k̲̅i̲̅и̲̅g̲̅ ̲̅є̲̅v̲̅є̲̅и̲̅т̲̅σ̲̅s̲̲̅̅] 🕋* 🧧\n\n_Participe de eventos para ganhar pontos para cada evento voce ganha de 1 a 3 pontos aleatoriamente_\n*Final do Ranking O Primeiro Coloca Ganhará um premio*\n _Possiveis Premios_ : *Dinheiro, Previlegios, Cargos ETC...*\n\n'
                let nom1 = 0
                try {
                    for (let i = 0; i < 20; i++) {
                        nom1++                        
                        leaderboardrank += `🔥🔝 *[${nom1}]* wa.me/${rank[i].id.replace('@s.whatsapp.net', '')}\n┣⊱🌟 *Pontos*: ${rank[i].rank}\n`
                    }
                    await reply(leaderboardrank)
                } catch (err) {
                    console.error(err)
                    await reply(`*🏆 10 participantes para criar o Top10 🏆*`)
                }
				    await laimitAdd(sender)				
				break
				case 'parceiro':
				if (isBanned) return reply(ind.benned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isRegistered) return reply( ind.noregis())
                if (isGroup) return  reply( '*🎟️ Use esse comando no meu pv 🎟️*')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('🇧🇷🇯🇵 *Procurando um parceiro* 🇧🇷🇯🇵')
                await reply(`wa.me/${anug}`)
				await limitAdd(sender)
                await reply( `*🐻 Encontrei um vai la conversa 🐻*\n*${prefix}next* 🐦 *Use esse comando se quer encontrar outro* 🐦`)
            break
            case 'next':
			    if (isBanned) return reply(ind.benned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))	
                if (!isRegistered) return reply( ind.noregis())
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('🇧🇷🇯🇵 *Procurando um membro* 🇧🇷🇯🇵')
                await reply(`wa.me/${anug}`)
                await reply( `*🐻 Essa pessoa sera seu desafio 🐻*\n\n*🇧🇷🇯🇵 Boa Sorte 🇧🇷🇯🇵*`)
				await limitAdd(sender)
            break
				case 'tfdinheiro':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
			    const tujuan0 = args[0].replace('@','')
                const jumblah = ('550')
				if(isNaN(jumblah)) return await reply('*Tem que ser numeros*')	
                if (checkATMuser(sender) < jumblah) return reply(`🐡 *Você nem tem esse dinheiro como quer transferi-lo* 🐡`)
                const tujuantf = tujuan0 + '@s.whatsapp.net'
                fee = 0.10 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('557996019550@s.whatsapp.net', fee)
                reply(`*「 🇧🇷🇯🇵 Transferencia Dinheiro 🇯🇵🇧🇷 」*\n\n💰 *de* : +${sender.split("@")[0]}\n\n💰 *para* : +${tujuan0}\n\n💰 *Valor da transferência* : ${jumblah}\n\n💰 *Imposto* : ${fee}`)
            break
				case 'tfdinheiro+':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
			    const tujuan00 = args[0].replace('@','')
                const jumblah0 = ('1550')
				if(isNaN(jumblah0)) return await reply('*Tem que ser numeros*')	
                if (checkATMuser(sender) < jumblah0) return reply(`🐡 *Você nem tem esse dinheiro como quer transferi-lo* 🐡`)
                const tujuan0tf = tujuan00 + '@s.whatsapp.net'
                fee = 0.10 *  jumblah0
                hasiltf = jumblah0 - fee
                addKoinUser(tujuan0tf, hasiltf)
                confirmATM(sender, jumblah0)
                addKoinUser('557996019550@s.whatsapp.net', fee)
                reply(`*「 🇧🇷🇯🇵 Transferencia Dinheiro 🇯🇵🇧🇷 」*\n\n💰 *de* : +${sender.split("@")[0]}\n\n💰 *para* : +${tujuan00}\n\n💰 *Valor da transferência* : ${jumblah0}\n\n💰 *Imposto* : ${fee}`)
            break
				case 'tfdinheiro++':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
			    const tujuan000 = args[0].replace('@','')
                const jumblah00 = ('5500')
				if(isNaN(jumblah00)) return await reply('*Tem que ser numeros*')	
                if (checkATMuser(sender) < jumblah00) return reply(`🐡 *Você nem tem esse dinheiro como quer transferi-lo* 🐡`)
                const tujuan00tf = tujuan000 + '@s.whatsapp.net'
                fee = 0.10 *  jumblah00
                hasiltf = jumblah00 - fee
                addKoinUser(tujuan00tf, hasiltf)
                confirmATM(sender, jumblah00)
                addKoinUser('557996019550@s.whatsapp.net', fee)
                reply(`*「 🇧🇷🇯🇵 Transferencia Dinheiro 🇯🇵🇧🇷 」*\n\n💰 *de* : +${sender.split("@")[0]}\n\n💰 *para* : +${tujuan000}\n\n💰 *Valor da transferência* : ${jumblah00}\n\n💰 *Imposto* : ${fee}`)
            break
				case 'tfgrana':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
			    const tujuanp = args[0].replace('@','')
                const jumblahp= ('15000')
				if(isNaN(jumblahp)) return await reply('*Tem que ser numeros*')	
                if (checkATMuser(sender) < jumblahp) return reply(`🐡 *Você nem tem esse dinheiro como quer transferi-lo* 🐡`)
                const tujuanptf = tujuanp + '@s.whatsapp.net'
                fee = 0.10 *  jumblahp
                hasiltf = jumblahp - fee
                addKoinUser(tujuanptf, hasiltf)
                confirmATM(sender, jumblahp)
                addKoinUser('557996019550@s.whatsapp.net', fee)
                reply(`*「 🇧🇷🇯🇵 Transferencia Dinheiro 🇯🇵🇧🇷 」*\n\n💰 *de* : +${sender.split("@")[0]}\n\n💰 *para* : +${tujuanp}\n\n💰 *Valor da transferência* : ${jumblahp}\n\n💰 *Imposto* : ${fee}`)
            break
				case 'tfticket':
				if (isBanned) return reply(ind.benned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))	
				if (!isRegistered) return reply(ind.noregis())
                const tujuan1 = ('1')
                const tujuan11 = args[0].replace('@','')
				const tujuan11tf = tujuan11 + '@s.whatsapp.net'
                fee = 0 *  tujuan1
                hasiltf = tujuan1 - fee
                bayarLimit(tujuan11tf, hasiltf)
                bayarLimit('557996019550@s.whatsapp.net', fee)
                reply(`*「 🇧🇷🇯🇵 Transferencia Tickets 🇯🇵🇧🇷 」*\n\n🧧 *de* : +${sender.split("@")[0]}\n\n🧧 *para* : +${tujuan11}\n\n🧧 *Valor da transferência* : ${tujuan1} \n\n🧧 *Imposto* : ${fee}`)      
                await limitAdd(sender)
			break
				case 'tfticket+':
				if (isBanned) return reply(ind.benned())
				if (isLaimit(sender)) return reply(ind.limitend(pusname))	
				if (!isRegistered) return reply(ind.noregis())
                const tujuan2 = ('5')
                const tujuan22 = args[0].replace('@','')
				const tujuan22tf = tujuan2 + '@s.whatsapp.net'
                fee = 0 *  tujuan2
                hasiltf = tujuan2 - fee
                bayarLimit(tujuan22tf, hasiltf)
                bayarLimit('557996019550@s.whatsapp.net', fee)
                reply(`*「 🇧🇷🇯🇵 Transferencia Tickets 🇯🇵🇧🇷 」*\n\n🧧 *de* : +${sender.split("@")[0]}\n\n🧧 *para* : +${tujuan22}\n\n🧧 *Valor da transferência* : ${tujuan2} \n\n🧧 *Imposto* : ${fee}`)      
                await laimitAdd(sender)	
			break
				case 'tfticket++':
				if (isBanned) return reply(ind.benned())
				if (isLbimit(sender)) return reply(ind.limitend(pusname))	
				if (!isRegistered) return reply(ind.noregis())
                const tujuan3 = ('10')
                const tujuan33 = args[0].replace('@','')
				const tujuan33tf = tujuan33 + '@s.whatsapp.net'
                fee = 0 *  tujuan3
                hasiltf = tujuan3 - fee
                bayarLimit(tujuan33tf, hasiltf)
                bayarLimit('557996019550@s.whatsapp.net', fee)
                reply(`*「 🇧🇷🇯🇵 Transferencia Tickets 🇯🇵🇧🇷 」*\n\n🧧 *de* : +${sender.split("@")[0]}\n\n🧧 *para* : +${tujuan33}\n\n🧧 *Valor da transferência* : ${tujuan3} \n\n🧧 *Imposto* : ${fee}`)      
                await lbimitAdd(sender)	
			break
				case 'tfticket+++':
				if (isBanned) return reply(ind.benned())
				if (isLcimit(sender)) return reply(ind.limitend(pusname))	
				if (!isRegistered) return reply(ind.noregis())
                const tujuan4 = ('25')
                const tujuan44 = args[0].replace('@','')
				const tujuan44tf = tujuan44 + '@s.whatsapp.net'
                fee = 0 *  tujuan4
                hasiltf = tujuan4 - fee
                bayarLimit(tujuan44tf, hasiltf)
                bayarLimit('557996019550@s.whatsapp.net', fee)
                reply(`*「 🇧🇷🇯🇵 Transferencia Tickets 🇯🇵🇧🇷 」*\n\n🧧 *de* : +${sender.split("@")[0]}\n\n🧧 *para* : +${tujuan44}\n\n🧧 *Valor da transferência* : ${tujuan4} \n\n🧧 *Imposto* : ${fee}`)      
                await lcimitAdd(sender)	
			break
				case 'tfticket++++':
				if (isBanned) return reply(ind.benned())
				if (isLdimit(sender)) return reply(ind.limitend(pusname))	
				if (!isRegistered) return reply(ind.noregis())
                const tujuan5 = ('50')
                const tujuan55 = args[0].replace('@','')
				const tujuan55tf = tujuan55 + '@s.whatsapp.net'
                fee = 0 *  tujuan5
                hasiltf = tujuan5 - fee
                bayarLimit(tujuan55tf, hasiltf)
                bayarLimit('557996019550@s.whatsapp.net', fee)
                reply(`*「 🇧🇷🇯🇵 Transferencia Tickets 🇯🇵🇧🇷 」*\n\n🧧 *de* : +${sender.split("@")[0]}\n\n🧧 *para* : +${tujuan55}\n\n🧧 *Valor da transferência* : ${tujuan5} \n\n🧧 *Imposto* : ${fee}`)      
                await ldimitAdd(sender)	
			break
				case 'tftickets':
				if (isBanned) return reply(ind.benned())
				if (isLeimit(sender)) return reply(ind.limitend(pusname))	
				if (!isRegistered) return reply(ind.noregis())
                const tujuan6 = ('100')
                const tujuan66 = args[0].replace('@','')
				const tujuan66tf = tujuan66 + '@s.whatsapp.net'
                fee = 0 *  tujuan6
                hasiltf = tujuan6 - fee
                bayarLimit(tujuan66tf, hasiltf)
                bayarLimit('557996019550@s.whatsapp.net', fee)
                reply(`*「 🇧🇷🇯🇵 Transferencia Tickets 🇯🇵🇧🇷 」*\n\n🧧 *de* : +${sender.split("@")[0]}\n\n🧧 *para* : +${tujuan66}\n\n🧧 *Valor da transferência* : ${tujuan6} \n\n🧧 *Imposto* : ${fee}`)      
                await leimitAdd(sender)	
                break
				case 'conta':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				const kantong = checkATMuser(sender)
			    const rankss = checkNANuser(sender)
				reply(ind.uangkau(pushname, sender, kantong, role, premi, divindade, onipotente, getLevelingLevel, rankss, emotion))
				break
				case 'comprar+1':
				if (isBanned) return reply(ind.benned())	
				if (!isRegistered) return reply(ind.noregis())
			    payout = ('1')
				const koinPerlimit = 900
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`💰 *Seu dinheiro não é suficiente* 💰`)
				if ( checkATMuser(sender) >= total ){ 
				    confirmATM(sender, total)
			        bayarLimit(sender, payout)
					await reply(`*「 🇯🇵🇧🇷 Compre Tickets Aqui 🇯🇵🇧🇷 」*\n\n*Vendedor* : *Bot*\n*Comprador* : *${pushname}*\n\n*Quantidades de Tickets Comprado* : ${payout} \n\n*Preço do ticket* : ${koinPerlimit} / *🐼 Cada Ticket 🐼*\n\n*Seu dinheiro final* : ${checkATMuser(sender)}\n\n*⚠️ para comprar tickets use o comando comprar+1, comprar+5, comprar+10, comprar+20, comprar+30, comprar+40, comprar+50 ⚠️*\n\n*Exemplo : ${prefix}comprar +1*\n\n${createSerial(15)}`)
					}
				break
				case 'comprar+5':
				if (isBanned) return reply(ind.benned())	
				if (!isRegistered) return reply(ind.noregis())
			    payout = ('5')
				const koinPerlimit1 = 880
				const total1 = koinPerlimit1 * payout
				if ( checkATMuser(sender) <= total1) return reply(`💰 *Seu dinheiro não é suficiente* 💰`)
				if ( checkATMuser(sender) >= total1 ){ 
				    confirmATM(sender, total1)
			        bayarLimit(sender, payout)
					await reply(`*「 🇯🇵🇧🇷 Compre Tickets Aqui 🇯🇵🇧🇷 」*\n\n*Vendedor* : *Bot*\n*Comprador* : *${pushname}*\n\n*Quantidades de Tickets Comprado* : ${payout} \n\n*Preço do ticket* : ${koinPerlimit1} / *🐼 Cada Ticket 🐼*\n\n*Seu dinheiro final* : ${checkATMuser(sender)}\n\n*⚠️ para comprar tickets use o comando comprar+1, comprar+5, comprar+10, comprar+20, comprar+30, comprar+40, comprar+50 ⚠️*\n\n*Exemplo : ${prefix}comprar +1*\n\n${createSerial(15)}`)
					}
				break
				case 'comprar+10':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
			    payout = ('10')
				const koinPerlimit2 = 860
				const total2 = koinPerlimit2 * payout
				if ( checkATMuser(sender) <= total2) return reply(`💰 *Seu dinheiro não é suficiente* 💰`)
				if ( checkATMuser(sender) >= total2 ){ 
				    confirmATM(sender, total2)
			        bayarLimit(sender, payout)
					await reply(`*「 🇯🇵🇧🇷 Compre Tickets Aqui 🇯🇵🇧🇷 」*\n\n*Vendedor* : *Bot*\n*Comprador* : *${pushname}*\n\n*Quantidades de Tickets Comprado* : ${payout} \n\n*Preço do ticket* : ${koinPerlimit2} / *🐼 Cada Ticket 🐼*\n\n*Seu dinheiro final* : ${checkATMuser(sender)}\n\n*⚠️ para comprar tickets use o comando comprar+1, comprar+5, comprar+10, comprar+20, comprar+30, comprar+40, comprar+50 ⚠️*\n\n*Exemplo : ${prefix}comprar +1*\n\n${createSerial(15)}`)
					}
				break
				case 'comprar+20':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
			    payout = ('20')
				const koinPerlimit3 = 840
				const total3 = koinPerlimit3 * payout
				if ( checkATMuser(sender) <= total3) return reply(`💰 *Seu dinheiro não é suficiente* 💰`)
				if ( checkATMuser(sender) >= total3 ){ 
				    confirmATM(sender, total3)
			        bayarLimit(sender, payout)
					await reply(`*「 🇯🇵🇧🇷 Compre Tickets Aqui 🇯🇵🇧🇷 」*\n\n*Vendedor* : *Bot*\n*Comprador* : *${pushname}*\n\n*Quantidades de Tickets Comprado* : ${payout} \n\n*Preço do ticket* : ${koinPerlimit3} / *🐼 Cada Ticket 🐼*\n\n*Seu dinheiro final* : ${checkATMuser(sender)}\n\n*⚠️ para comprar tickets use o comando comprar+1, comprar+5, comprar+10, comprar+20, comprar+30, comprar+40, comprar+50 ⚠️*\n\n*Exemplo : ${prefix}comprar +1*\n\n${createSerial(15)}`)
					}
				break
				case 'comprar+30':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
			    payout = ('30')
				const koinPerlimit4 = 820
				const total4 = koinPerlimit4 * payout
				if ( checkATMuser(sender) <= total4) return reply(`💰 *Seu dinheiro não é suficiente* 💰`)
				if ( checkATMuser(sender) >= total4 ){ 
				    confirmATM(sender, total4)
			        bayarLimit(sender, payout)
					await reply(`*「 🇯🇵🇧🇷 Compre Tickets Aqui 🇯🇵🇧🇷 」*\n\n*Vendedor* : *Bot*\n*Comprador* : *${pushname}*\n\n*Quantidades de Tickets Comprado* : ${payout} \n\n*Preço do ticket* : ${koinPerlimit4} / *🐼 Cada Ticket 🐼*\n\n*Seu dinheiro final* : ${checkATMuser(sender)}\n\n*⚠️ para comprar tickets use o comando comprar+1, comprar+5, comprar+10, comprar+20, comprar+30, comprar+40, comprar+50 ⚠️*\n\n*Exemplo : ${prefix}comprar +1*\n\n${createSerial(15)}`)
					}
				break
				case 'comprar+40':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
			    payout = ('40')
				const koinPerlimit5 = 800
				const total5 = koinPerlimit5 * payout
				if ( checkATMuser(sender) <= total5) return reply(`💰 *Seu dinheiro não é suficiente* 💰`)
				if ( checkATMuser(sender) >= total5 ){ 
				    confirmATM(sender, total5)
			        bayarLimit(sender, payout)
					await reply(`*「 🇯🇵🇧🇷 Compre Tickets Aqui 🇯🇵🇧🇷 」*\n\n*Vendedor* : *Bot*\n*Comprador* : *${pushname}*\n\n*Quantidades de Tickets Comprado* : ${payout} \n\n*Preço do ticket* : ${koinPerlimit5} / *🐼 Cada Ticket 🐼*\n\n*Seu dinheiro final* : ${checkATMuser(sender)}\n\n*⚠️ para comprar tickets use o comando comprar+1, comprar+5, comprar+10, comprar+20, comprar+30, comprar+40, comprar+50 ⚠️*\n\n*Exemplo : ${prefix}comprar +1*\n\n${createSerial(15)}`)
					}
				break
				case 'comprar+50':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
			    payout = ('50')
				const koinPerlimit6 = 750
				const total6 = koinPerlimit6 * payout
				if ( checkATMuser(sender) <= total6) return reply(`💰 *Seu dinheiro não é suficiente* 💰`)
				if ( checkATMuser(sender) >= total6 ){ 
				    confirmATM(sender, total6)
			        bayarLimit(sender, payout)
					await reply(`*「 🇯🇵🇧🇷 Compre Tickets Aqui 🇯🇵🇧🇷 」*\n\n*Vendedor* : *Bot*\n*Comprador* : *${pushname}*\n\n*Quantidades de Tickets Comprado* : ${payout} \n\n*Preço do ticket* : ${koinPerlimit6} / *🐼 Cada Ticket 🐼*\n\n*Seu dinheiro final* : ${checkATMuser(sender)}\n\n*⚠️ para comprar tickets use o comando comprar+1, comprar+5, comprar+10, comprar+20, comprar+30, comprar+40, comprar+50 ⚠️*\n\n*Exemplo : ${prefix}comprar +1*\n\n${createSerial(15)}`)
					}
				break
				case 'comprar+':
				if (isBanned) return reply(ind.benned())
				if (!isPrem) return reply(ind.premon(pushname))	
				if (!isRegistered) return reply(ind.noregis())
			    payout = ('10')
				const koinPerlimit7 = 300
				const total7 = koinPerlimit7 * payout
				if ( checkATMuser(sender) <= total7) return reply(`💰 *Seu dinheiro não é suficiente* 💰`)
				if ( checkATMuser(sender) >= total7 ){ 
				    confirmATM(sender, total7)
			        bayarLimit(sender, payout)
					await reply(`*「 🇯🇵🇧🇷 Compre Tickets Aqui 🇯🇵🇧🇷 」*\n\n*Vendedor* : *Bot*\n*Comprador* : *${pushname}*\n\n*Quantidades de Tickets Comprado* : ${payout} \n\n*Preço do ticket* : ${koinPerlimit7} / *🐼 Cada Ticket 🐼*\n\n*Seu dinheiro final* : ${checkATMuser(sender)}\n\n*⚠️ Você é premium promoção 10 tickets por apenas 300,00 RS ⚠️*\n\n*Exemplo : ${prefix}comprar+1*\n\n${createSerial(15)}`)
					}
				break
				case 'comprardemais':
				if (isBanned) return reply(ind.benned())
				if (!isDeuses) return reply(ind.deuso(pushname))	
				if (!isRegistered) return reply(ind.noregis())
			    payout = ('20')
				const koinPerlimit8 = 300
				const total8 = koinPerlimit8 * payout
				if ( checkATMuser(sender) <= total8) return reply(`💰 *Seu dinheiro não é suficiente* 💰`)
				if ( checkATMuser(sender) >= total8 ){ 
				    confirmATM(sender, total8)
			        bayarLimit(sender, payout)
					await reply(`*「 🇯🇵🇧🇷 Compre Tickets Aqui 🇯🇵🇧🇷 」*\n\n*Vendedor* : *Bot*\n*Comprador* : *${pushname}*\n\n*Quantidades de Tickets Comprado* : ${payout} \n\n*Preço do ticket* : ${koinPerlimit8} / *🐼 Cada Ticket 🐼*\n\n*Seu dinheiro final* : ${checkATMuser(sender)}\n\n*⚠️ Você tem divindade promoção 20 tickets por apenas 300,00 RS KD ⚠️*\n\n*Exemplo : ${prefix}comprar+1*\n\n${createSerial(15)}`)
					}	
				break
				case 'ticket':
				if (isBanned) return reply(ind.baned())
				if (!isOwner) return reply(ind.ownerb())
				if (!isRegistered) return reply(ind.noregis())
				if (!q.includes('/')) return  reply(ind.wrongf())
                const destino = q.substring(0, q.indexOf('/') - 1)
                const tudo = q.substring(q.lastIndexOf('/') + 1)
                if (checkATMuser(sender) < tudo) return reply(`🐡 *tem certeza?* 🐡`)
                const destinotf = `${destino.replace("@", '')}@s.whatsapp.net`
                fee = 0 *  tudo
                hasiltf = tudo - fee
                bayarLimit(destinotf, hasiltf)
                confirmATM(sender, tudo)
                bayarLimit('557996019550@s.whatsapp.net', fee)
                reply(`*「 🇧🇷🇯🇵 Parabens 🇯🇵🇧🇷 」*\n\n🧧 *de* : +${sender.split("@")[0]}\n\n🧧 *para* : +${destino}\n\n🧧 *Valor dado* : ${tudo}\n\n🧧 *Metade vai pro bolso do patrão* : ${fee}\n\n*🇯🇵🇧🇷 Mundo Otaku 🇯🇵🇧🇷*`)	
                break
				case 'rank+':
				if (isBanned) return reply(ind.baned())
				if (!isOwner) return reply(ind.ownerb())
				if (!isRegistered) return reply(ind.noregis())
				if (!q.includes('/')) return  reply(ind.wrongf())
                const destino0 = q.substring(0, q.indexOf('/') - 1)
                const tudo00 = q.substring(q.lastIndexOf('/') + 1)
                if (checkATMuser(sender) < tudo00) return reply(`🐡 *tem certeza?* 🐡`)
                const destino00tf = `${destino0.replace("@", '')}@s.whatsapp.net`
                fee = 0 *  tudo00
                hasiltf = tudo00 - fee
                addPontUser(destino00tf, hasiltf)
                confirmATM(sender, tudo00)
                addPontUser('557996019550@s.whatsapp.net', fee)
                reply(`*「 🇧🇷🇯🇵 Parabens 🇯🇵🇧🇷 」*\n\n⚠️ *de* : +${sender.split("@")[0]}\n\n⚠️ *para* : +${destino0}\n\n⚠️ *Valor dado* : ${tudo00}`)
				break
				case 'tickets':
				   if (isBanned) return reply(ind.benned())
				   if (!isRegistered) return reply(ind.noregis())
				   checkLimit(sender)
                break 
				case 'presentear': 
				if (!isOni) return reply(ind.onipo(pushname))
				const nomerr = args[0].replace('@','')
                const jmla = args[1]
                if (jmla <= 1) return reply(`🇧🇷🇯🇵 *O limite de presente é 1* 🇧🇷🇯🇵`)
                if (isNaN(jmla)) return reply(`🇧🇷🇯🇵 *O presente deve ser um numero* 🇧🇷🇯🇵`)
                if (!nomerr) return reply(`*Você esta escrevendo errado. Exemplo: ${prefix}presentear @557996019550 20`)
                const cysz = nomerr + '@s.whatsapp.net'
                var found = false
                        Object.keys(_limit).forEach((i) => {
                            if(_limit[i].id === cysz){
                                found = i
                            }
                        })
                        if (found !== false) {
                            _limit[found].limit -= jmla
                            const updated = _limit[found]
                            const result = `🧧 *Voce ganhou Tickets de presente* 🧧\n\n${createSerial(8)}\n ${moment().format('DD/MM/YY HH:mm:ss')}

*「 Parabens」*
• Usuario : @${updated.id.replace('@s.whatsapp.net','')}

• Tickets : ${limitawal-updated.limit}`
                            console.log(_limit[found])
                            fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit));
                            reply(result)
                        } else {
                                reply(`🇧🇷🇯🇵 *Numero ${nomerr} não registrado no meu sistema* 🇧🇷🇯🇵`)
                        }			   
			    break
				case 'resposta':
				      if (isBanned) return reply(ind.benned())
                      if (!isRegistered) return reply(ind.noregis())
                      if (!isJogo) return reply(`${pushname} ⚠️ *JA ACERTARAM A PERGUNTA, FIQUE LIGADO PARA A PROXIMA* ⚠️`)
                      if (args[0] === game) {
                      const one5 = Math.ceil(Math.random() * 5000)
					  const ale = Math.ceil(Math.random() * 10)
					  const ace = Math.ceil(Math.random() * 3)
					  addPontUser(sender, ace)
                      addLevelingXp(sender, one5)
                      addLevelingLevel(sender, 0)
					  bayarLimit(sender, ale)
                      reply(`️🕋 *PARABENS VOCÊ ACERTOU* 🕋\n\n🆙 *XP* 🆙: ${one5}\n🧧 *Tickets* 🧧: ${ale}\n🌟 *Pontos* 🌟: ${ace}\n\n⚠️ _Fale para o wa.me/557996019550 que voce ganhou_ ⚠️`)
					  jogo.splice(from, 1)
						fs.writeFileSync('./database/bot/jogo.json', JSON.stringify(jogo))
						reply('🌟🇯🇵 ✅ 🇯🇵🌟')
                      } else if (args[0] === game1) {
                      const mining6 = Math.ceil(Math.random() * 2500)
					  const ale1 = Math.ceil(Math.random() * 10)
					  const ace1 = Math.ceil(Math.random() * 3)
					  addPontUser(sender, ace1)
                      addKoinUser(sender, mining6)
					  bayarLimit(sender, ale1)
                      await reply(`🕋 *PARABENS VOCÊ ACERTOU* 🕋\n\n💸 *Dinheiro* 💸: ${mining6}\n🧧 *Tickets* 🧧: ${ale1}\n🌟 *Pontos* 🌟: ${ace1}\n\n⚠️ _Fale para o wa.me/557996019550 que voce ganhou_ ⚠️`)
					  jogo.splice(from, 1)
						fs.writeFileSync('./database/bot/jogo.json', JSON.stringify(jogo))
						reply('🌟🇯🇵 ✅ 🇯🇵🌟')
                      } else {
						reply(ind.jogando())
					  }
				break
				case 'up':
				      if (isBanned) return reply(ind.benned())
                      if (!isRegistered) return reply(ind.noregis())
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`Desculpa ${pushname} O evento não esta ativado`)
                      if (isOwner) {
                      const one = Math.ceil(Math.random() * 20000)
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 0)
                      reply(`️ *Nivel desconhecido, mais ${one}XP para você* ⚜️`)
                      }else{
                      const mining = Math.ceil(Math.random() * 15000)
                      addLevelingXp(sender, mining)
                      await reply(`🆙 *Parabens* 🆙 *${pushname}* *🆙 voce pega xp 🆙* *${mining}Xp*`)
                      }
                    await limitAdd(sender)
				break
				case 'apostaxp':
				      if (isBanned) return reply(ind.benned())
                      if (!isRegistered) return reply(ind.noregis())
					  if (isGroup) return  reply( '*🎟️ Use esse comando no meu pv 🎟️ (Se você flodar no meu pv toma block)*')	   
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (isOwner) {
                      const one1 = Math.ceil(Math.random() * 3000)
                      addLevelingXp(sender, one1)
                      addLevelingLevel(sender, 0)
                      reply(`️ *Criador ? Hihihihi ${one1} XP* ⚜️`)
                      }else{ 
                      const mining1 = Math.ceil(Math.random() * 2500)
                      addLevelingXp(sender, mining1)
                      await reply(`*Ha ha ha, ${pushname} Voce esta com sorte? ${mining1} XP*`)
                      }
                    await limitAdd(sender)			
				break
				case 'aposta$':
				      if (isBanned) return reply(ind.benned())
                      if (!isRegistered) return reply(ind.noregis())
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
					  if (isGroup) return  reply( '*🎟️ Use esse comando no meu pv 🎟️ (Se você flodar no meu pv toma block)*')  
                      if (isOwner) {
                      const one2 = Math.ceil(Math.random() * 1700)
                      addKoinUser(sender, one2)
                      addLevelingLevel(sender, 0)
                      reply(`️ *Criador ? Hihihihi ${one2} R$* ⚜️`)
                      }else{
                      const mining2 = Math.ceil(Math.random() * 1300)
                      addKoinUser(sender, mining2)
                      await reply(`*Ha ha ha, ${pushname} voce esta com sorte? ${mining2} R$*`)
                      }
                    await limitAdd(sender)	
                break
				case 'aposta$$':
				      if (isBanned) return reply(ind.benned())
                      if (!isRegistered) return reply(ind.noregis())
                      if (isLcimit(sender)) return reply(ind.limitend(pushname))
                      if (isOwner) {
                      const one9 = Math.ceil(Math.random() * 23000)
                      addKoinUser(sender, one9)
                      addLevelingLevel(sender, 0)
                      reply(`️ *Criador ? Hihihihi ${one9} R$* ⚜️`)
                      }else{
                      const mining9 = Math.ceil(Math.random() * 23000)
                      addKoinUser(sender, mining9)
                      await reply(`*Cuidado, ${pushname} você vai ficar negativado ${mining9} R$*`)
                      }
                    await lcimitAdd(sender)    					
					break
				case 'level':
				if (isBanned) return reply(ind.benned())
                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))	
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━❉ *🇧🇷🇯🇵 Seu Status 🇧🇷🇯🇵* ❉━━\n\n┣⊱🌍 *Nome* : ${pushname}\n\n┣⊱🌎 *Numero* : wa.me/${sender.split("@")[0]}\n\n┣⊱🌏 *Jogador XP* :  ${userXp}/${requiredXp}\n\n┣⊱🌍 *Jogador Level* : ${userLevel}\n\n*👑 Voce consegue ficar no topo? 👑* (Sem flood)`
               client.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
					await limitAdd(sender)
					break
				case 'leveling':
				if (isBanned) return reply(ind.benned())
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Boo :??')
                if (args[0] === 'ativar') {
                    if (isLevelingOn) return reply('🔱 *Use o comando ativar ou desativar na frente com espaço* 🔱')
                    _leveling.push(from)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvlon())
                } else if (args[0] === 'desativar') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvloff())
                } else {
                    reply(ind.satukos())
                }
				    break	
				case 'jogo':
				    if (isBanned) return reply(ind.benned())
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isJogo) return reply('🦄 *Ativa ou desativa?* 🦄')
						jogo.push(from)
						fs.writeFileSync('./database/bot/jogo.json', JSON.stringify(jogo))
						reply('🕋 *ATENÇAO GALERA VAI ROLAR QUIZ AGORA FIQUEM LIGADOS* 🕋\n\n🌟 O premio para quem acerta é muito variado 🌟\n\n 💸 _Boa sorte a todos_ 💸 ')
					} else if (Number(args[0]) === 0) {
						jogo.splice(from, 1)
						fs.writeFileSync('./database/bot/jogo.json', JSON.stringify(jogo))
						reply('*❬ 𝗦ucesso ❭ 🐮 O jogo esta desativado*')
					} else {
						reply(ind.satukos())
					}
					break	
				case 'evento':
				    if (isBanned) return reply(ind.benned())
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('🦄 *Digita o comando e o 1 ou 0 na frente com espaço* 🦄')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ 𝗦𝗨cesso ❭ 🐮 Evento esta ativado nesse grupo*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ 𝗦ucesso ❭ 🐮 Evento esta desativado nesse grupo*')
					} else {
						reply(ind.satukos())
					}
					break	
/*
]=====> DIVERSOS <=====[
*/				
				case 'neko':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=BotWeA` , {method: 'get'})
                buf = await getBuffer(anu.result)
                client.sendMessage(from, buf, image, { quoted: mek, caption: '⚓ *Nice* ⚓' })
			    await limitAdd(sender)
			    break
			    case 'waifu':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu?apikey=BotWeA`)
				buf = await getBuffer(anu.image)
				texs = ` *🐬 Nome da personagem 🐬* : ${anu.name} \n\n*🐋 Descrição 🐋* : ${anu.desc} \n\n*🐳 Fonte 🐳* : ${anu.source} \n\n 🇧🇷🇯🇵`
				client.sendMessage(from, buf, image, { quoted: mek, caption: `${texs}` })
			    await limitAdd(sender)
				break
                case 'anime🚹':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				    try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=BotWeA`)
						buffer = await getBuffer(res.image)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Mundo Otaku*'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					await limitAdd(sender)
				break
                case 'anime🚺':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(8)
					reply(ind.wait())
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)	
				break
                case 'imgale':
				if (isBanned) return reply(ind.benned())
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                const trut =['🦁 *Imagem Aleatoria Saindo* 🦁']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://source.unsplash.com/user/erondu/1600x900`)
					client.sendMessage(from, truteh, image, { caption: '*Mundo Otaku*\n\n'+ ttrth, quoted: mek })
					await limitAdd(sender)
					break
                case 'pokemon':
				if (isBanned) return reply(ind.benned())
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
                case 'loli':
		if (isBanned) return reply(ind.benned())
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
	        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=BotWeA` , {method: 'get'})
                buf = await getBuffer(anu.result)
                client.sendMessage(from, buf, image, { quoted: mek, caption: '⚓ *Nice* ⚓' })
	        await limitAdd(sender)
		    break
                case 'kpop':
		if (isBanned) return reply(ind.benned())
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
	        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=BotWeA` , {method: 'get'})
                buf = await getBuffer(anu.result)
                client.sendMessage(from, buf, image, { quoted: mek, caption: '⚓ *Nice* ⚓' })
	        await limitAdd(sender)
		    break
                case 'fofo':
		if (isBanned) return reply(ind.benned())
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
	        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu2?apikey=BotWeA` , {method: 'get'})
                buf = await getBuffer(anu.result)
                client.sendMessage(from, buf, image, { quoted: mek, caption: '⚓ *Nice* ⚓' })
	        await limitAdd(sender)
		    break
                case 'anime':
		if (isBanned) return reply(ind.benned())
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
	        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA` , {method: 'get'})
                buf = await getBuffer(anu.result)
                client.sendMessage(from, buf, image, { quoted: mek, caption: '⚓ *Nice* ⚓' })
	        await limitAdd(sender)
		    break
                case 'dog':
				if (isBanned) return reply(ind.benned())
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
				case 'cat':
				if (isBanned) return reply(ind.benned())
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kucing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
			    case 'fototiktok':
			if (isBanned) return reply(ind.benned())
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
                    gatauda = body.slice(12)
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${gatauda}` , {method: 'get'})
			        buff = await getBuffer(anu.result)
                    reply(buff)
			        await limitAdd(sender)
					break
			    case 'map':
			if (isBanned) return reply(ind.benned())
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
                buffer = await getBuffer(anu.gambar)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
				await limitAdd(sender)	
                break
/*
]=====> FIGURINHAS <=====[
*/				
                case 'anime😢':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'anime+18':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'animekiss':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'animegif':
				if (isBanned) return reply(ind.benned())	
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
				case 'glass':
                                         
                                        if (!isRegistered) return reply(ind.noregis())
										if (isLimit(sender)) return reply(ind.limitend(pusname))	
                if (isBanned) return reply(ind.benned())
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         reply(mess.wait)
                                         owgi = await  client.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.png')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/glass?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                 client.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Use uma imagem')
                                          }
										    await limitAdd(sender)
					break
				case '🐯': 
				case '🦁':
				case 's':
				    if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply(ind.benned())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
									//if (error) {
											// reply(ind.stikga())
											// fs.unlinkSync(media)	
											// fs.unlinkSync(ran)
											// }
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ _Falha ao converter ${tipe} em figurinha_ `)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
									//if (error) {
											// reply(ind.stikga())
											// fs.unlinkSync(media)	
											// fs.unlinkSync(ran)
											// }
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`🦦 *Envie fotos com legendas ${prefix}🦁* 🦦`)
					}
					break
					case 'toimg':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isQuotedSticker) return reply('📌 *Marque uma figurinha !* 📌 !')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '*🥶 Up 🥵* '})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
/*
]=====> JOGOS <=====[
*/					
				case 'posso':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					posso = body.slice(1)
					const pos =['🇯🇵🇧🇷 Pode 🇯🇵🇧🇷','🇯🇵🇧🇷 Não pode 🇯🇵🇧🇷','🇯🇵🇧🇷 Irei pensar 🇯🇵🇧🇷','🇯🇵🇧🇷 Talvez 🇯🇵🇧🇷','🇯🇵🇧🇷 Voce decide dessa vez 🇯🇵🇧🇷','🇯🇵🇧🇷 Que pergunta sem noção 🇯🇵🇧🇷']
					const so = pos[Math.floor(Math.random() * pos.length)]
					client.sendMessage(from, 'Questão : *'+posso+'*\n\nResposta : '+ so, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'sorte':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					sorte = body.slice(1)
					const sor =['*1*','*2*','*3*','*4*','*5*','*6*','*7*','*8*','*9*','*10*','*Perdeu 🐣*','*Ganhou 🦁*']
					const te = sor[Math.floor(Math.random() * sor.length)]
					client.sendMessage(from, 'Questão : *'+sorte+'*\n\nResposta : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
					break
				case 'quando':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					quando = body.slice(1)
					const qua =['*daqui 1*','*daqui 2*','*daqui 3*','*daqui 4*','*daqui 5*','*daqui 6*','*daqui 7*','*daqui 8*','*daqui 9*','*daqui 10*','*daqui 11*','*daqui 12*','*daqui 13*','*daqui 14*','*daqui 15*','*daqui 16*','*daqui 17*','*daqui 18*','*daqui 19*','*daqui 20*','*daqui 21*','*daqui 22*','*daqui 23*','*daqui 24*','*daqui 25*','*daqui 26*','*daqui 27*','*daqui 28*','*daqui 29*','*daqui 30*','*daqui 31*','*daqui 32*','*daqui 33*','*daqui 34*','*daqui 35*','*daqui 36*','*daqui 37*','*daqui 38*','*daqui 39*','*daqui 40*','*daqui 41*','*daqui 42*','*daqui 43*','*daqui 44*','*daqui 45*','*daqui 46*','*daqui 47*','*daqui 48*','*daqui 49*','*daqui 50*','*daqui 51*','*daqui 52*','*daqui 53*','*daqui 54*','*daqui 55*','*daqui 56*','*daqui 57*','*daqui 58*','*daqui 59*','*daqui 60*','*daqui 61*','*daqui 62*','*daqui 63*','*daqui 64*','*daqui 65*','*daqui 66*','*daqui 67*','*daqui 68*','*daqui 69*','*daqui 70*','*daqui 71*','*daqui 72*','*daqui 73*','*daqui 74*','*daqui 75*','*daqui 76*','*daqui 77*','*daqui 78*','*daqui 79*','*daqui 80*','*daqui 81*','*daqui 82*','*daqui 83*','*daqui 84*','*daqui 85*','*daqui 86*','*daqui 87*','*daqui 88*','*daqui 89*','*daqui 90*','*daqui 91*','*daqui 94*','*daqui 95*','*daqui 96*','*daqui 97*','*daqui 98*','*daqui 99*','*daqui 100*','*Iludido por mais de*']
					const ndo = qua[Math.floor(Math.random() * qua.length)]
					client.sendMessage(from, 'Questão : *'+quando+'*\n\nResposta : '+ ndo+' anos', text, { quoted: mek })
					await limitAdd(sender)
					break
/*
]=====> DONO <=====[
*/					
					case 'imgbot':
					if (!isOwner) return reply(ind.ownerb())
					if (!isRegistered) return reply(ind.noregis())	
				    client.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`*Envie a imagem com a legenda* *${prefix}imgbot ou tag de imagem que foi enviada*`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('*Obrigado pelo novo perfil 😗*')
					break
				    case 'premiar':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))	
				    if (!isOwner) return reply(ind.ownerb())
				    const pnom = `${args[0].replace('@','')}@s.whatsapp.net`
				    prem.push(pnom)
				    fs.writeFileSync('./database/user/prem.json',JSON.stringify(prem))
				    reply(ind.premadd(args[0]))
					await limitAdd(sender)
					break
				    case 'addporco':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))	
				    if (!isOwner) return reply(ind.ownerb())
				    const pnomporco = `${args[0].replace('@','')}@s.whatsapp.net`
				    porco.push(pnomporco)
				    fs.writeFileSync('./database/user/porco.json',JSON.stringify(porco))
				    reply(ind.porcoadd(args[0]))
					await limitAdd(sender)
					break
				
				    case 'despremiar':
					if (!isRegistered) return reply(ind.noregis())
				    if (!isDeuses) return reply(ind.deuso())
					if (isLeimit(sender)) return reply(ind.limitend(pusname))	
				    const hnom = `${args[0].replace('@','')}@s.whatsapp.net`
				    var arr = prem
 			        for( var i = 0; i < arr.length; i++){ 
 		            if ( arr[i] === hnom) { 
    		      	  arr.splice(i, 1); 
      		   	    i--; 
      				fs.writeFileSync('./database/user/prem.json',JSON.stringify(arr))
       			      }
 			        }
				    reply(ind.dellprem(args[0]))
					await leimitAdd(sender)
					break
				
				    case 'libertar':
					if (!isRegistered) return reply(ind.noregis())
				    if (!isDeuses) return reply(ind.deuso())
					if (isLeimit(sender)) return reply(ind.limitend(pusname))	
				    const hnomporco = `${args[0].replace('@','')}@s.whatsapp.net`
				    var arr = porco
 			        for( var i = 0; i < arr.length; i++){ 
 		            if ( arr[i] === hnomporco) { 
    		      	  arr.splice(i, 1); 
      		   	    i--; 
      				fs.writeFileSync('./database/user/porco.json',JSON.stringify(arr))
       			      }
 			        }
				    reply(ind.dellporco(args[0]))
					await leimitAdd(sender)
					break
				    case 'divindade':
					if (!isRegistered) return reply(ind.noregis())
				    if (!isOni) return reply(ind.onipo())
					if (isLimit(sender)) return reply(ind.limitend(pusname))	
				    const pnom1 = `${args[0].replace('@','')}@s.whatsapp.net`
				    deuses.push(pnom1)
				    fs.writeFileSync('./database/user/deuses.json',JSON.stringify(deuses))
				    reply(ind.deuseadd(args[0]))
					await limitAdd(sender)
					break
				
				    case 'exdivindade':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (!isOni) return reply(ind.onipo())
				    const hnom1 = `${args[0].replace('@','')}@s.whatsapp.net`
				    var arr = deuses
 			        for( var i = 0; i < arr.length; i++){ 
 		            if ( arr[i] === hnom1) { 
    		      	  arr.splice(i, 1); 
      		   	    i--; 
      				fs.writeFileSync('./database/user/deuses.json',JSON.stringify(arr))
       			      }
 			        }
				    reply(ind.delldeuse(args[0]))
					await limitAdd(sender)
					break
				    case 'oni':
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return reply(ind.noregis())
				    if (!isOwner) return reply(ind.ownerb())
				    const pnom2 = `${args[0].replace('@','')}@s.whatsapp.net`
				    oni.push(pnom2)
				    fs.writeFileSync('./database/user/oni.json',JSON.stringify(oni))
				    reply(ind.oniadd(args[0]))
					await limitAdd(sender)
					break
				
				    case 'exoni':
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return reply(ind.noregis())
				    if (!isOwner) return reply(ind.ownerb())
				    const hnom2 = `${args[0].replace('@','')}@s.whatsapp.net`
				    var arr = oni
 			        for( var i = 0; i < arr.length; i++){ 
 		            if ( arr[i] === hnom2) { 
    		      	  arr.splice(i, 1); 
      		   	    i--; 
      				fs.writeFileSync('./database/user/oni.json',JSON.stringify(arr))
       			      }
 			        }
				    reply(ind.delloni(args[0]))
					await limitAdd(sender)
					break
					case 'exilar':
					if (isLcimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return reply(ind.noregis())
				    if (!isDeuses) return reply(ind.deuso())
				    const pnom3 = `${args[0].replace('@','')}@s.whatsapp.net`
				    ban.push(pnom3)
				    fs.writeFileSync('./database/user/ban.json',JSON.stringify(ban))
				    reply(ind.banadd(args[0]))
					await lcimitAdd(sender)
					break
				
				    case 'buscar':
					if (isLcimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return reply(ind.noregis())
				    const hnom3 = `${args[0].replace('@','')}@s.whatsapp.net`
				    var arr = ban
 			        for( var i = 0; i < arr.length; i++){ 
 		            if ( arr[i] === hnom3) { 
    		      	  arr.splice(i, 1); 
      		   	    i--; 
      				fs.writeFileSync('./database/user/ban.json',JSON.stringify(arr))
       			      }
 			        }
				    reply(ind.dellban(args[0]))
					await lcimitAdd(sender)
					break 
        		case 'online':
				if (!isRegistered) return reply(ind.noregis())
				if (isLcimit(sender)) return reply(ind.limitend(pusname))
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
			    client.sendMessage(from, '*🕋 Lista De Pessoas Online No Grupo 🕋*\n\n' + online.map(v => '🔛 @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				  await lcimitAdd(sender)
				  break 
				case '=>':
				const cmd = body.slice(4)
				exec(cmd, (err, stdout) => {
					if (err) return client.sendMessage(from, `root@Nfz.01:~ ${err}`, text, { quoted: mek })
					if (stdout) {
						client.sendMessage(from, stdout, text)
					}
				})
				break 
				case 'audio':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.benned())
			    if (!isRegistered) return reply(ind.noregis())
				client.updatePresence(from, Presence.composing)
				if (!isQuotedVideo) return reply('*Isso é um video?*')
				reply(ind.wait())
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await client.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp4')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('*Oloco*')
					buffer = fs.readFileSync(ran)
					client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek })
					fs.unlinkSync(ran)
				})
				await limitAdd(sender)
				break
				case 'excfiguraspara':
				case 'gets':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
					namastc = body.slice(12)
					result = fs.readFileSync(`./strg/sticker/${namastc}.webp`)
					client.sendMessage(from, result, sticker, {quoted :mek})
					await limitAdd(sender)
				    break
				case 'figurinhaspara':
				case 'stickerpara':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
					teks = '🪂 *Lista de figurinhas* 🪂\n\n'
					for (let awokwkwk of setiker) {
						teks += `-🧇 ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })	
					await limitAdd(sender)
					break
				case 'addfiguraspara':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedSticker) return reply('_Marque A Figurinha_')
					svst = body.slice(12)
					if (!svst) return reply('*Qual o nome da figurinha?*')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./strg/sticker/${svst}.webp`, delb)
					fs.writeFileSync(`./strg/stik.json`, JSON.stringify(setiker))
					client.sendMessage(from, `🌳 *Figurinha Adicionada com Sucesso digite ${prefix}figurinhas* 🌳`, MessageType.text, { quoted: mek })
                    await limitAdd(sender)
                    break
				case 'adaud':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedAudio) return reply('_Marque O Audio_')
					svst = body.slice(7)
					if (!svst) return reply('*Qual o nome do audio?*')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./strg/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./strg/audio.json', JSON.stringify(audionye))
					client.sendMessage(from, `🌳 *Audio Adicionado com Sucesso digite ${prefix}audios* 🌳`, MessageType.text, { quoted: mek })
                    await limitAdd(sender)
					break
				case 'exaud':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./strg/audio/${namastc}.mp3`)
					client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					await limitAdd(sender)
					break
				case 'audios':
				case 'listaad':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
					teks = '*🎧 Lista De Audios 🎧*\n\n'
					for (let awokwkwk of audionye) {
						teks += `-🎼 ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					await limitAdd(sender)
					break
				case 'addimage':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedImage) return reply('_Marque A Imagem_')
					svst = body.slice(10)
					if (!svst) return reply('*Qual o nome da imagem?*')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./strg/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./strg/image.json', JSON.stringify(imagenye))
					client.sendMessage(from, `🌳 *Imagem Adicionada com Sucesso digite ${prefix}imagens* 🌳`, MessageType.text, { quoted: mek })
                    await limitAdd(sender)
					break
				case 'eximagem':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/image/${namastc}.jpeg`)
					client.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
					await limitAdd(sender)
					break
				case 'imagens':
				case 'listimage':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
					teks = '*🏖️ Lista De Imagens 🏜️*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `-🏝️ ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					await limitAdd(sender)
					break
				    case 'avaliar':
				if (!isOwner) return reply(ind.ownerb())
                if (!q) return reply(ind.wrongf())
                try {
         	           let evaled = await eval(q)
         	           if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
          	          await reply(evaled)
       	         } catch (err) {
        	            console.error(err)
          	          await reply('Error!')
  	   	       }
					break
				case 'bcgp':

				    if (!isOwner) return reply(ind.ownerb())
					if (!isRegistered) return reply(ind.noregis())	 
					if (args.length < 1) return reply('.......')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 📣 Mensagem Grupo 📣 」*\n\nNome do grupo : ${groupName}\nRemetente : wa.me/${(sender.split('@')[0])}\nMensagem : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 📣 Mensagem Grupo 📣 」*\n\nNome do grupo : ${groupName}\nRemetente : wa.me/${(sender.split('@')[0])}\nMensagem : ${body.slice(6)}`)
						}
						reply('*🐯 Grupo de transmissão bem-sucedido 🐯*')
					}
					break 
                    case 'kickall':
                    if (!isOwner) return reply(ind.ownerb())
					if (!isRegistered) return reply(ind.noregis())	
			        members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					client.groupRemove(from, members_id)
					break 
					case 'setreply':
					if (!isOwner) return reply(ind.ownerb())
					if (!isRegistered) return reply(ind.noregis())	
                    client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`🐺 *Mensagem alterada* 🐺 : ${cr}`)
					await limitAdd(sender)
					break
					case 'lptudo':
				    if (isBanned) return reply(ind.benned())
					if (!isOwner) return reply(ind.ownerb())
					if (!isRegistered) return reply(ind.noregis())	
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
			        case 'blockear':
				    if (isBanned) return reply(ind.benned())    
				    if (!isRegistered) return reply(ind.noregis())
				
				    client.updatePresence(from, Presence.composing) 
				    client.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb()) 
					client.blockUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `Pedidos recebidos, bloquear ${body.slice(7)}@c.us`, text)
					break
                    case 'desbloquear':
                    if (isBanned) return reply(ind.benned())    
				    if (!isRegistered) return reply(ind.noregis())
                    
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb()) 
				    client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `*Pedidos recebido, debloqueado* ${body.slice(9)}@c.us`, text)
					break
				case 'sair': 
				    if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    await reply(from, 'bye').then(() => client.groupLeave(groupId))
					break
				case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await client.chats.groupId()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `❮ *Mensagem de transmissão* ❯\n\n${body.slice(4)}`})
						}
						reply('Transmissão Enviada ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 Mensagem de transmissão 」*\n\n${body.slice(4)}`)
						}
						reply('*Transmissão Sucedida* ')
					}
					break
				case 'alterar':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    game = args[0]
                    reply(`🐦 *piu* ${game} *Sucesso*`)
					break
				case 'mudar':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    game1 = args[0]
                    reply(`🐦 *piu* ${game1} *Sucesso*`)
					break
				case 'um':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    um = args[0]
                    reply(`🐦 *piu* ${um} *Sucesso*`)
					break
				case 'dois':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    dois = args[0]
                    reply(`🐦 *piu* ${dois} *Sucesso*`)
					break
				case 'tres':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    tres = args[0]
                    reply(`🐦 *piu* ${tres} *Sucesso*`)
					break
				case 'quatro':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    quatro = args[0]
                    reply(`🐦 *piu* ${quatro} *Sucesso*`)
					break
				case 'cinco':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    cinco = args[0]
                    reply(`🐦 *piu* ${cinco} *Sucesso*`)
					break
				case 'seis':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    seis = args[0]
                    reply(`🐦 *piu* ${seis} *Sucesso*`)
					break
				case 'palavrasete':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    sete = args[0]
                    reply(`🐦 *piu* ${sete} *Sucesso*`)
					break
				case 'palavraoito':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    oito = args[0]
                    reply(`🐦 *piu* ${oito} *Sucesso*`)
					break
				case 'nove':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    palavranove = args[0]
                    reply(`🐦 *piu* ${nove} *Sucesso*`)
					break
				case 'dez':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    dez = args[0]
                    reply(`🐦 *piu* ${dez} *Sucesso*`)
					break
				case 'onze':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    onze = args[0]
                    reply(`🐦 *piu* ${onze} *Sucesso*`)
					break
				case 'doze':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    doze = args[0]
                    reply(`🐦 *piu* ${doze} *Sucesso*`)
					break
				case 'treze':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    treze = args[0]
                    reply(`🐦 *piu* ${treze} *Sucesso*`)
					break
				case 'catorze':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    catorze = args[0]
                    reply(`🐦 *piu* ${catorze} *Sucesso*`)
					break
				case 'quinze':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    quinze = args[0]
                    reply(`🐦 *piu* ${quinze} *Sucesso*`)
					break
				case 'dezesseis':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    dezesseis = args[0]
                    reply(`🐦 *piu* ${dezesseis} *Sucesso*`)
					break
				case 'dezesete':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    dezesete = args[0]
                    reply(`🐦 *piu* ${dezesete} *Sucesso*`)
					break
				case 'dezoito':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    dezoito = args[0]
                    reply(`🐦 *piu* ${dezoito} *Sucesso*`)
					break
				case 'dezenove':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    dezenove = args[0]
                    reply(`🐦 *piu* ${dezenove} *Sucesso*`)
					break
				case 'vinte':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    vinte = args[0]
                    reply(`🐦 *piu* ${vinte} *Sucesso*`)
					break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    prefix = args[0]
                    reply(`🐦 *piu* ${prefix} *Sucesso*`)
					break 
				case 'membros':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (isNaN(args[0])) return reply('*Deve ser um numero*')
                    memberlimit = args[0]
                    reply(`*Alterando a quantidade para ${memberlimit} Sucesso*`)
					break
/*
]=====> MENU COMANDOS <=====[
*/					
				case 'registrar':
				if (isBanned) return reply(ind.benned())
                if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('-')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('-') - 0)
                const umurUser = q.substring(q.lastIndexOf('-') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return await reply('🦧  *A idade tem que ser um numero* 🦧 ')
                if (namaUser.length >= 30) return reply(`*Seu nome é longo demais*`)
                if (umurUser > 40) return reply(`*Você é muito velho*`)
                if (umurUser < 12) return reply(`*Você é muito novo*`)
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    checkLimit(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    checkLimit(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
					break
               case 'help': 
				case 'menu':
				if (isBanned) return reply(ind.benned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isRegistered) return reply(ind.noregis())
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				    const uangku = checkATMuser(sender)
					const ranks = checkNANuser(sender)
					await costum(ind.menu(pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, premi, divindade, onipotente, ranks), text, tescuk, cr)
                    await limitAdd(sender)
					break
				case 'donasi':
				case 'donate':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
					client.sendMessage(from, donasi(), text)
				    break
				case 'menuteste':
				case 'comandosteste':
				if (isBanned) return reply(ind.benned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))	
				if (!isRegistered) return reply(ind.noregis())
				if (isGroup) return  reply( '*🎟️ Use esse comando no meu pv 🎟️*')	
					await costum(menuteste(prefix, pushname, role, getLevelingLevel, sender, premi), text, tescuk, cr)
				    await limitAdd(sender)
					 break
				case 'menualeatorio':
				case 'aleatorio':
				if (isBanned) return reply(ind.benned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))	
				if (!isRegistered) return reply(ind.noregis())
				if (isGroup) return  reply( '*🎟️ Use esse comando no meu pv 🎟️*')	
					await costum(menualeatorio(prefix, pushname, role, getLevelingLevel, sender, premi), text, tescuk, cr)
				    await limitAdd(sender)
					 break
				case 'menuresumido':
				case 'resumido':
				if (isBanned) return reply(ind.benned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))		
				if (!isRegistered) return reply(ind.noregis())
					await costum(menuresumido(prefix, pushname, role, getLevelingLevel, sender, premi), text, tescuk, cr)
				    await limitAdd(sender)
					 break
				case 'ajudaevento':
				case 'g':
				if (isBanned) return reply(ind.benned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))	
				if (!isRegistered) return reply(ind.noregis())
					await costum(ajudaevento(prefix, pushname, role, getLevelingLevel, sender, premi), text, tescuk, cr)
				    await limitAdd(sender)
					 break
				case 'menudono':
				case 'editor':
				if (isBanned) return reply(ind.benned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))	
				if (!isRegistered) return reply(ind.noregis())
					await costum(menudono(prefix, pushname, role, getLevelingLevel, sender, premi), text, tescuk, cr)
				    await limitAdd(sender)
					 break
				case 'menuadms':
				case 'administrador':
				if (isBanned) return reply(ind.benned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))	
				if (!isRegistered) return reply(ind.noregis())
					await costum(menuadms(prefix, pushname, role, getLevelingLevel, sender, premi), text, tescuk, cr)
				    await limitAdd(sender)
					 break
				case 'titulos':
				case 'aleatorio':
				if (isGroup) return  reply( '*🎟️ Use esse comando no meu pv 🎟️*')
				if (isBanned) return reply(ind.benned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))	
				if (!isRegistered) return reply(ind.noregis())
					await costum(titulos(prefix, pushname, role, getLevelingLevel, sender, premi), text, tescuk, cr)
				    await limitAdd(sender)
					break
				case 'menuevento':
				case 'menulvl':
				if (isBanned) return reply(ind.benned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))	
				if (!isRegistered) return reply(ind.noregis())
					await costum(menuevento(prefix, pushname, role, getLevelingLevel, sender, premi), text, tescuk, cr)
				    await limitAdd(sender)
					break
				case 'menuprincipal':
				case 'principal':
				if (isGroup) return  reply( '*🎟️ Use esse comando no meu pv 🎟️*')
				if (isBanned) return reply(ind.benned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))	
				if (!isRegistered) return reply(ind.noregis())
					await costum(menuprincipal(prefix, pushname, role, getLevelingLevel, sender, premi), text, tescuk, cr)
				    await limitAdd(sender)
					break
/*
]=====> ADMINISTRAÇÃO <=====[
*/					
				case 'premiuns':
				    if (isBanned) return reply(ind.benned())
				    if (!isRegistered) return reply( ind.noregis()) 
					if (isLimit(sender)) return reply(ind.limitend(pusname))	
				    const krem = JSON.parse(fs.readFileSync('./database/user/prem.json'))
				    teks = '*==[ 🇧🇷🇯🇵 Membros Premiums 🇧🇷🇯🇵 ]==*\n'
				    for (let premau of krem){
				 	teks += `┣➢👑 @${premau.replace('@s.whatsapp.net','')}\n`
				    }
				    teks += `┣➢🐺 *Total de usuarios premiums* : ${krem.length}`
				    client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": prem}})
					await limitAdd(sender)
					break
				case 'divindades':
				    if (isBanned) return reply(ind.benned())
				    if (!isRegistered) return reply( ind.noregis()) 
					if (isLimit(sender)) return reply(ind.limitend(pusname))	
				    const krem1 = JSON.parse(fs.readFileSync('./database/user/deuses.json'))
				    teks = '*==[ 🇧🇷🇯🇵 Membros Deuses 🇧🇷🇯🇵 ]==*\n'
				    for (let premau1 of krem1){
					teks += `┣➢👑 @${premau1.replace('@s.whatsapp.net','')}\n`
				    }
			 	    teks += `┣➢🐺 *Total de usuarios Deuses* : ${krem1.length}`
				    client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": deuses}})
					await limitAdd(sender)
					break
				case 'porcos':
				    if (isBanned) return reply(ind.benned())
				    if (!isRegistered) return reply( ind.noregis()) 
					if (isLimit(sender)) return reply(ind.limitend(pusname))	
				    const krem9 = JSON.parse(fs.readFileSync('./database/user/porco.json'))
				    teks = '🐖 *A famosa Lista Dos Porcos* 🐖\n'
				    for (let premau9 of krem9){
					teks += `┣➢🐷 @${premau9.replace('@s.whatsapp.net','')}\n`
				    }
			 	    teks += `┣➢🐽 *Total de usuarios Porcos* : ${krem9.length}`
				    client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": porco}})
					await limitAdd(sender)
					break
				case 'onipotencias':
				    if (isBanned) return reply(ind.benned())
				    if (!isRegistered) return reply( ind.noregis()) 
					if (isLimit(sender)) return reply(ind.limitend(pusname))	
				    const krem2 = JSON.parse(fs.readFileSync('./database/user/oni.json'))
				    teks = '*==[ 🇧🇷🇯🇵 Membros Onipotentes 🇧🇷🇯🇵 ]==*\n'
				    for (let premau2 of krem2){
					teks += `┣➢👑 @${premau2.replace('@s.whatsapp.net','')}\n`
				    }
				    teks += `┣➢🐺 *Total de usuarios Onipotentes* : ${krem2.length}`
				    client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": oni}})
					await limitAdd(sender)
				    break
				case 'exilados':
                    if (isBanned) return reply(ind.benned())				
				    if (!isRegistered) return reply( ind.noregis()) 
					if (isLimit(sender)) return reply(ind.limitend(pusname))	
				    const krem3 = JSON.parse(fs.readFileSync('./database/user/ban.json'))
				    teks = '*==[ 🇧🇷🇯🇵 ⚔️ Exilado ⚔️ 🇧🇷🇯🇵 ]==*\n'
				    for (let premau3 of krem3){
					teks += `┣➢🛡️ @${premau3.replace('@s.whatsapp.net','')}\n`
				    }
				    teks += `┣➢⌛ *Total de usuarios Exilados* : ${krem3.length}`
				    client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})	
					await limitAdd(sender)
					break
				case 'bloqueados': 
				    if (isBanned) return reply(ind.benned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))	
					teks = 'LISTA DE BLOQUEADOS :\n'
					for (let block of blocked) {
						teks += `┣➢ 🇯🇵🇧🇷 @${block.split('@')[0]}\n`
					}
					teks += `𝗧𝗼𝘁𝗮𝗹 : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					await limitAdd(sender)
					break
				case 'contagem':
			if (isBanned) return reply(ind.benned())    
				if (!isRegistered) return reply(ind.noregis())
				if (isLgimit(sender)) return reply(ind.limitend(pusname))	
					if (!isGroup) return reply(ind.groupo())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você deseja chutar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedidos recebidos, emitidos:\n'
						for (let i= 0; i < 1; mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						 client.groupRemove(from, mentioned)
					} else {
						setTimeout( () => {
						mentions(`🛡️ *Contagem regressiva para eu te apagar* 🛡️ @${mentioned[0].split('@')[0]}`, mentioned, true)
						}, 0) // 100 = 5s,
					setTimeout( () => {
					 client.groupRemove(from, mentioned, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 5s,
					setTimeout( () => {
					 client.sendMessage(from, '🛡️ *Adeus* 🛡️', text) // ur cods
					}, 20000) // 1000 = 5s,
					setTimeout( () => {
					 client.sendMessage(from, '*🛡️ Um 🛡️*', text) // ur cods
					}, 10000) // 1000 = 5s,
					setTimeout( () => {
					 client.sendMessage(from, '*🛡️ Dois 🛡️*', text) // ur cods
					}, 1000) // 1000 = 5s,
					setTimeout( () => {
					 client.sendMessage(from, '*🛡️ três 🛡️*', text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 10s,
					}
					await lgimitAdd(sender)
					break
				case 'delete':
				case 'del':
				case 'd':
					if (isBanned) return reply(ind.benned())
				    if (!isGroup) return reply(ind.groupo())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
				    await limitAdd(sender)
				    break
					 case 'pv':
					 client.updatePresence(from, Presence.composing)  
					if (isBanned) return reply(ind.benned())
					if (!isGroup) return reply(ind.groupo())
					if (!isBotGroupAdmins) return reply(ind.badmin())	
				    if (!isRegistered) return reply(ind.noregis())
                
					teks = '*Lista de bate papos* :\n'
					for (let all of totalchat) {
						teks += `~> 🇧🇷🇯🇵 @${all}\n`
					}
					teks += `Total : ${totalchat.length}`
					 client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": totalchat}})
					break
                case 'linkgp':
				    if (isBanned) return reply(ind.benned())
				    if (!isGroup) return reply(ind.groupo())
				    if (isLcimit(sender)) return reply(ind.limitend(pusname))
					if (!isBotGroupAdmins) return reply(ind.badmin())	
				    linkgc = await client.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\n🐺 *Link do grupo* 🐺  *${groupName}*`
				    client.sendMessage(from, yeh, text, {quoted: mek})
			        await lcimitAdd(sender)
					break
                                case 'antilink':
                  if (isBanned) return reply(ind.baned())				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())					
					if (args.length < 1) return reply('*Digita 1 para ativar*')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('*Esta morto?*')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('「 🇯🇵🇧🇷 _Anti Link Ativado No Grupo_ 🇯🇵🇧🇷 」')
						client.sendMessage(from,`🔥 *Se divulgarem link nesse grupo agora é ban na certa* 🔥`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('*Esta ativo*')
						var ini = anti.botLangsexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('「 🇯🇵🇧🇷 _Anti Link Desativado No Grupo_ 🇯🇵🇧🇷 」')
					} else {
						reply('*Digite 1 para ativar e 0 Para desativar*')
					}
					break
                                case 'porco':
                  if (isBanned) return reply(ind.baned())				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())					
					if (args.length < 1) return reply('Uai Osh')
                if (args[0] === 'ativar') {
                if (isPorco) return reply('_Os Porcos ja estão Contidos_')
                 	   porco.push(from)
                 	   fs.writeFileSync('./database/user/porco.json', JSON.stringify(porco))
                  	   reply(`⛓️ *Os Porcos estão sendo vigiados* ⛓️`)
              	  } else if (args[0] === 'desativar') {
                  	  porco.splice(from, 1)
                 	   fs.writeFileSync('./database/user/porco.json', JSON.stringify(porco))
                 	    reply(`🐖 *Os Porcos estão a solta* 🐖`)
             	   } else {
                 	   reply(ind.satukos())
                	}
					break
				case 'marcar':
				    if (isBanned) return reply(ind.benned())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `┣➥ 🇯🇵🇧🇷 @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
			   	case 'icongp': 
				        if (isBanned) return reply(ind.benned())
                        if (!isGroup) return reply(ind.groupo())
                       if (!isGroupAdmins) return reply(ind.admin())
                        if (!isBotGroupAdmins) return reply(ind.badmin())
                       media = await client.downloadAndSaveMediaMessage(mek)
                         await client.updateProfilePicture (from, media)
                        reply('*Mudou com sucesso o icone do grupo*')
					break						
				case 'add':
				    if (isBanned) return reply(ind.benned())
					if (!isGroup) return reply(ind.groupo())
				    if (isLdimit(sender)) return reply(ind.limitend(pusname))
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('🐺 *Você quer adicionar um gênio?* 🐺')
					if (args[0].startsWith('08')) return reply('🐯 *Use o código do país mas* 🐯 *Exemplo: add 5598452532*')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log(e)
						reply('⚠️ *Falha ao adicionar destino, talvez porque é privado* ⚠️')
					}
					await ldimitAdd(sender)
					break
					case 'gp':
					case 'grupo':
					if (isBanned) return reply(ind.benned())
					if (!isGroup) return reply(ind.groupo())
					if (isLbimit(sender)) return reply(ind.limitend(pusname))	
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'abrir') {
					    reply(`🦊 *Grupo aberto* 🦊`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'fechar') {
						reply(`🐶 *Grupo fechado* 🐶`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					await lbimitAdd(sender)
					break    
            case 'gpnome':
		        if (isBanned) return reply(ind.benned())
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMessage(from, '*Mudou com sucesso o nome do grupo*', text, {quoted: mek})
					break
                case 'gpdesc':
				if (isBanned) return reply(ind.benned())
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, '*Mudou com sucesso a descrição do grupo*', text, {quoted: mek})
					break
           case 'demitir':
		            if (isBanned) return reply(ind.benned())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Marque Alguem*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Rebaixado com sucesso :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`*O* @${mentioned[0].split('@')[0]}  *Acabou de perder o ADM*`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'contratar':
				    if (isBanned) return reply(ind.benned())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Marque Alguem*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Contratado com sucesso* :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`*Agora* @${mentioned[0].split('@')[0]} foi contratado como ADM* 🐼`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
				case 'bv':
				    if (isBanned) return reply(ind.benned())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('🦄 *Digita o comando e o 1 ou 0 na frente com espaço* 🦄')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ *SUCESSO* ❭ 🐰 *Sistema de bem vindo esta ativado nesse grupo* 🐰')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ *SUCESSO* ❭ 🐰 *Sistema de bem vindo esta desativado nesse grupo* 🐰')
					} else {
						reply(ind.satukos())
					}
					break	
			     	case 'ban':
					if (isBanned) return reply(ind.benned())
				    if (isLgimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.groupo())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Marque alguem que deseje banir*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let i= 0; i < 1; mentioned) {
							teks += `Pedidos recebidos, emitidos  :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`😨😨😨 @${mentioned[0].split('@')[0]} *foi banido 🦊* `, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					await lgimitAdd(sender)
					break	
			     	case 'banpremium':
					if (isBanned) return reply(ind.benned())
					if (!isPrem) return reply(ind.premon(pushname))	
				    if (isLfimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.groupo())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Marque alguem que deseje banir*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let i= 0; i < 1; mentioned) {
							teks += `Pedidos recebidos, emitidos  :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`😨😨😨 @${mentioned[0].split('@')[0]} *foi banido 🦊* `, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					await lfimitAdd(sender)
					break	
			     	case 'bandivino':
					if (isBanned) return reply(ind.benned())
					if (!isDeuses) return reply(ind.deuso(pushname))	
				    if (isLeimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.groupo())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Marque alguem que deseje banir*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let i= 0; i < 1; mentioned) {
							teks += `Pedidos recebidos, emitidos  :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`😨😨😨 @${mentioned[0].split('@')[0]} *foi banido 🦊* `, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					await leimitAdd(sender)
					break
					break	
				case 'adms':
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply(ind.benned())
					if (!isGroup) return reply(ind.groupo())
					teks = `🔰 *Lista de admins do grupo* 🔰 *${groupMetadata.subject}*\n🔓 *Total* 🔒 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					await limitAdd(sender)
					break
/*
]=====> SIMI <=====[
*/
                 case 'simi':
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply(ind.benned())
					if (args.length < 1) return reply('*Cade o texto?*')
					teks = body.slice(5)
					anu = await simih(teks) 
					reply(anu)
				    await limitAdd(sender)
					break
				case 'simih':
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply(ind.benned())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('*Piu*')
						samih.push(from)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('simi ativado neste grupo')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('simi Desativado neste grupo')
					} else {
						reply(ind.satukos())
					}
					await limitAdd(sender)
					break
/*
]=====> COMANDOS DIVERSIFICADOS <=====[
*/				                    
                case 'admin':
                case 'dono':
                case 'creator':
			         if (isBanned) return reply(ind.benned())
                     client.sendMessage(from, {displayname: "Nan", vcard: vcard}, MessageType.contact, { quoted: mek})
                     client.sendMessage(from, '*Esse é o numero do meu dono, cuidado quando for mandar mensagem para ele, voce pode ser bloqueado*',MessageType.text, { quoted: mek} )
					 break	
				case 'nsfw':
				    if (isBanned) return reply(ind.benned())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('🔑 *Coloca 1 ou 0 na frente com espaço* 🔑')
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ *Sucesso* ❭ NSFW esta ativado no grupo')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ *Sucesso* ❭ NSFW esta desativado no grupo')
					} else {
						reply(ind.satukos())
					}
					break
                case 'hidetag':
				if (isBanned) return reply(ind.benned())
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					await limitAdd(sender)
					break
					case 'usuarios':
					client.updatePresence(from, Presence.composing) 
 
					if (!isRegistered) return reply(ind.noregis())
					if (isBanned) return reply(ind.benned())     
					teks = `╭────*「 Total de usuarios 👑* 」\n\n`
					no = 0
					for (let hehehe of user) {
						no += 1
						teks += `[${no.toString()}] *-* @${hehehe.split('@')[0]}\n`
					}
					teks += `│+ Total Usuarios : ${user.length}\n╰──────*「 *Nan Killi* 」*────`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": user}})
					break
				case 'info':
				    if (isBanned) return reply(ind.benned())
					me = client.user
					uptime = process.uptime()
					teks = `*Nome bot* : ${me.name}\n*DONO* : *Meliodas*\n*AUTOR* : Meliodas\n*NUMERO* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*TOTAL CONTATOS BLOQUEADOS* : ${blocked.length}\n\n*BOT ESTA ATIVADO* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break 
				case 'tiktokstalk':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				try {
						if (args.length < 1) return client.sendMessage(from, '*Nome do usuario*', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(ind.wait())
						teks = `*ID* : ${user.id}\n*Nome de usuario* : ${user.uniqueId}\n*Nome* : ${user.nickname}\n*Seguidores* : ${stats.followerCount}\n*Seguindo* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Curtidas* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('[𝗘𝗥𝗥𝗢𝗥] ❌ *Nome de usuario invalido ou incorreto* ❌')
					}
					await limitAdd(sender)
					break
				case 'ocr': 
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('*🐣 mandar junto de uma imagem com palavras ${prefix}ocr 🐣* *(É meio nada haver esse comando)')
					}
					await limitAdd(sender)
					break
				case 'clone':
				    if (isBanned) return reply(ind.benned())
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply(' *QUERO TAGS NO CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque uma mensagem')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`A foto do perfil foi atualizada com sucesso, usando a foto do perfil @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					await limitAdd(sender)
					break
				case 'wait':
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply(ind.benned())
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(ind.wait())
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply(ind.ocron())
					}
					await limitAdd(sender)
					break
				default:
			if (body.startsWith(`${prefix}${command}`)) {

                  reply(`*Esse comando não tem no menu ${pushname}*`)

                  }
			if (isGroup && !isCmd && isSimi && budy != undefined && body.startsWith(`${prefix}`)) {
						console.log(budy)
						muehe = await simih(budy)
						reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Comando não registrado de', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})