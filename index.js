const
{
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
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const { color, bgcolor } = require('./lib/color')
const { help } = require('./lib/help')
const { donasi } = require('./lib/donasi')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const kagApi = require('@kagchi/kag-api')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Affis Admin\n' 
            + 'ORG: Pengembang XBot;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=5586999111388:+55 86 99911-1388\n' 
            + 'END:VCARD' 
prefix = '!'
blocked = []          

/********** LOAD FILE **************/

/********** END FILE ***************/
  
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const arrayBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
const bulan = arrayBulan[moment().format('MM') - 1]
const config = {
    XBOT: 'ARTHUR BOT', 
    instagram: 'https://www.instagram.com/jh_sousa16?r=nametag', 
    nomer: 'wa.me/5586999111388',
    whatsapp: 'Comming soon', 
    tanggal: `TANGGAL: ${moment().format('DD')} ${bulan} ${moment().format('YYYY')}`,
    waktu: time
}

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}


const { tanggal, waktu, instagram, whatsapp, youtube, nomer, ontime } = config



const { exec } = require("child_process")

const client = new WAConnection()

client.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(`[ ${time} ] QR code is ready, subrek dulu yak ambipi team`)
})

client.on('credentials-updated', () => {
   const authInfo = client.base64EncodedAuthInfo()
   console.log(`credentials updated!`)

   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})

fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')

client.connect();

// client.on('user-presence-update', json => console.log(json.id + ' presence is => ' + json.type)) || console.log(`${time}: Bot by ig:@affis_saputro123`)

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
				teks = `OIIÊ @${num.split('@')[0]}\ SEJAM BEM-VINDX AO GRP *${mdata.subject}* ! EU ME CHAMO ARTHUR, MUITO PRAZER 🤖!\nLOGO ABAIXO TEM A MSG DOS ADM's PARA VC, LEIA COM ATENÇÃO PRFVR... A MSG DELES É UM POUCO EXAGERADA KKKK, MAS CONTÉM TDS AS INFORMAÇÕES IMPORTANTES DO GRP E TBM TEM ALGUMAS DICAS MTO BOAS 😁!\nESPERO QUE A GENTE SE FALE NOVAMENTE... TCHAU 👋!!\n\n
*_MENSAGEM DOS ADM's:_*

Olá, seja bem-vindX ao Grupo... É muito bom ter você no nosso time!

Essa msg é um pouco grande, mas ela foi feita para tentar resumir ao máximo o lance tdo do projeto... entt é mto importante que vc leia ela completa e com bastente atenção.

*REGRAS:*
▪️1º - Seguir a página e todos que a página segue. *[Caso não cumpra essa regra, vc poderá ser removido do projeto.]*

▪️2º - Conferir a bio do fake que você criou!!! Pois lá no recrutamento vc recebe as informações de outros grp (na maioria das vezes do Star Influencer), mas o nosso grupo não é o star. Entt se você não mudar vai divulgar a página errada e não vai ganhar seguidores. Peça um ADM a bio do grupo e a msg tbm.

▪️3º - Você vai enviar a mensagem de recrutamento para todos que te seguirem de volta (no *perfil fake* ). Atenção na mensagem! Se você enviar mensagem errada as pessoas não vão te seguir. 
*[Quem for pego fazendo qualquer alteração na msg será removido na hora! Não é para incluir o seu @, pois vc não vai ganhar seguidores dessa forma.]*

▪️4º - Entrar no grupo de metas para enviar os prints de meta cumprida. O grupo de metas é só para enviar prints! Leia a descrição do grupo com atenção.
E O QUE SERIA ESSA TAL META?
▪️ Seguir 300 pessoas (SOMENTE 300). E tirar um print de ANTES e um do DEPOIS dessa ação... 
(EX.: ANTES - print seguindo 300 // DEPOIS - print seguindo 600)
▪️Enviar a msg para qm seguir de volta e tirar os prints da caixa de direct *[devem ser mínimo 28 msgs]* .

▪️5º - Quando for postar no grupo a sua meta você tem que enviar:
- Print antes de começar a seguir os 300;
- Print depois de seguir os 300;
- Os prints da sua caixa de direct com as 28 mensagens que você enviou no dia;
- Colocar seu nome e marcar com ✅ na lista de metas.
*[Leiam com atenção as informações que estão no cabeçalho da lista de metas e não mandem print errado por favor. Se você for bloqueado no meio da meta vai precisar criar um novo fake e seguir 300 pessoas e enviar as mensagens novamente.]*

▪️6º - Após enviar a meta de chegada e cumprir a regra do item 01 coloque seu @ oficial (o que vc quer ganhar os seguidores) na lista do grupo principal para a página seguir você. *A página NÃO vai seguir:*
- Perfil privado;
- Quem não enviou a meta de chegada;
- Quem não seguiu a página e TODOS que a página segue.

*INFORMAÇÕES IMPORTANTES:*

- Se tiver qualquer dúvida, basta chamar os ADMs no grupo principal para ser respondido. Todos nós podemos ajudar você.

- Para participar do projeto *não pode estar* em multirão e afins, ou, qualquer outro projeto para ganhar seguidores ok? *[Se descobrirmos que está participando de qualquer outro projeto ou mutirão, vc poderá ser banido sem nenhum aviso.]*

- *Em nenhum momento* vocês podem deixar de seguir a página e os ADMs que estão sendo seguidos pela página. *[Tal ato, pode causar remoção imediata após descobrirmos.]*

- *O GRUPO É SEU,* o trabalho é coletivo para que todos ganhem no mínimo 100 seguidores por dia. Ajudem a motivar os colegas, ver as metas e tbm ver quem está cumprindo as regras direitinho. Quando um colega deixa de seguir as regras e entregar as metas você está dando seguidores para ele, mas ele não está fznd o msm por você! Então precisamos da ajuda de todos para o grupo decolar!

- *Ser bloqueado não é motivo* para não entregar as metas! Já avisamos que se você seguir rápido ou enviar muitas mensagens de uma vez vai ser bloqueado. Então cumpra a meta devagar!

- Print não é imagem, print é um registro de tela. Então *não pode ser cortado ou feita qualquer outra edição.* Não adulterem os prints por favor.

- Quando o ADM for conferir sua meta e no Instagram o número final de seguindo estiver muito abaixo do seu print, sua meta será desconsiderada. Se você seguir rápido o insta vai te dar block e desconsiderar um grande númro de pessoas seguidas, ou se, vc seguir muitas pessoas com perfil privado o Instagram não vai contabilizar essas pessoas até elas aceitarem sua solicitaçao. Então cuidado com isso, pois pode lhe prejudicar mto.

*DICAS:*

- O grupo sempre tem muitas mensagens e nem todos conseguem acompanhar. Mas LEIAM SEMPRE: a descrição dos grupos e o cabeçalho das listas que enviamos. Também favoritem essa msg para que vcs não à percam, e dêem uma olhada sempre q surgir alguma dúvida! Não corra o risco de ser removido por não ter lido as instruções.

- Siga os seguidores de Gamers, Inluenciadores, Youtubers, multirão ou “chuva de seguidores”. Porque essas pessoas que estão nesses perfis querem ganhar seguidores, então elas têm interesse no projeto!

- Não sigam nem mandem msg muito rápido. *Qualquer ação repetida em curto intervalo de tempo é motivo para o Instagram te bloquear!*


*OUTRAS INFORMAÇÕES:*

Não removemos ninguém à toa!

Ninguém é removido do projeto, por estar seguindo as regras 😒...

*❗Motivos de REMOÇÃO:❗* 

🔹 Não entregar as metas diárias!

🔹 Deixar de seguir a página e quem a página segue (RELEMBRANDO QUE A PÁGINA ESTÁ SEGUINDO OS ADM's... ENTT SE VC DEIXAR DE SEGUIR QM A PÁGINA SEGUE, TBM VAI DEIXAR DE SEGUI-LÓS E SERÁ REMOVIDO).

🔹 Participar de outros projetos para ganhar seguidores.

🔹 Desrespeitar os colegas e ADMs.

🔹 ADULTERAR a msg que é enviada no fake. Ex.: Incluir seu @.

🔹 ADULTERAR a bio do perfil fake. Ex.: incluir seu @.

🔹 FAZER QUALQUER EDIÇÃO nos prints das metas!
- Mudar o número;
- Cortar print; etc. 

🔹 Participar de dois grupos do projeto, tentando enganar os ADMs do recrutamento e dos grupos.

Ou seja, tudo que já cansamos de falar!

Quando vcs são removidos, a gente bloqueia vcs pra podermos lembrar quem saiu pq não cumpriu as regras.

Mas vcs podem voltar no recrutamento, desde que tenha sido removidos sem fazer sacanagem com o projeto! Mas quem fica mandando msgs no PV para membros do grupo, fica xingando ADMs, ou outras coisas do tipo, vão parar na lista negra do projeto!

Então se dps que forem removidos, ainda quiserem entrar no projeto não fiquem atormentando os membros do grupo pq vcs vão para lista negra e não poderão mais voltar.
`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Tchau ☹️... @${num.split('@')[0]} saiu e nem se despediu 😒`
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
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)

			mess = {
				wait: '{⌛} AGUARDE  ENQUANTO ESTOU PROCESSANDO {⏳}',
				success: '️❬✔❭ PRONTINHO!!! ',
				error: {
					stick: 'Desculpa... falhei 😓...',
					Iv: 'O link está inválido 😟...'
				},
				only: {
					group: '❬❗❭ ESTE COMANDO SÓ PODE SER EXECUTADO EM GRUPOS ❬❗❭ ',
					ownerG: '❬❗❭ ESTE COMANDO É EXCLUSIVO PARA O PROPRIETÁRIO DO BOT ❬❗❭ ',
					ownerB: '❬❗❭ COMANDO EXCLUSIVO PARA O PROPRIETÁRIO DO BOT ❬❗❭  ',
					admin: ' ❬❗❭ ESTE COMANDO PODE SER USADO SOMENTE POR ADM's ❬❗❭ ',
					Badmin: '❬❗❭ O BOT PRECISA SER ADM 😄 ❬❗❭'
				}
			}

			const botNumber = client.user.jid
			const ownerNumber = ["5586999111388@s.whatsapp.net"] 
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
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

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			switch(command) {
				case 'help': 
				case 'menu':
					client.sendMessage(from, help(prefix), text)
					break
				case 'donasi':
				case 'donate':
					client.sendMessage(from, donasi(), text)
				break
				case 'info':
					me = client.user
					uptime = process.uptime()
					teks = `*Nome do Bot:* ${me.name}\n*Número do Bot:* @${me.jid.split('@')[0]}\n*Sigla de comandos:* ${prefix}\n*Números bloqueados:* ${blocked.length}\n*O Bot está ativo desde:* ${kyun(uptime)}\n`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'listabloq': 
					teks = 'LISTA DE CONTTS BLOQUEADOS:\n'
					for (let block of blocked) {
						teks += `➢ @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
                case 'hidetag':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('???')
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
					break
                 case 'logoph':
					var gh = body.slice(9)
					var gbl1 = gh.split("|")[0];
					var gbl2 = gh.split("|")[1];
					if (args.length < 1) return reply('Escolha um txt PRFVR!')
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/textpro?theme=pornhub&text1=${gbl1}&text2=${gbl2}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
                case 'bug':
                case 'reportar':
                case 'reportarbug':
                     const pesan = body.slice(5)
                      if (pesan.length > 300) return client.sendMessage(from, 'Desculpe, o texto é muito longo 😕... *Máximo* de 300 letras.', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const teks1 = `*[BUG REPORTADO]*\nNúmero : @${nomor.split("@s.whatsapp.net")[0]}\nMOTIVO : ${pesan}`
                      var options = {
                         text: teks1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    client.sendMessage('558699911388@s.whatsapp.net', options, text, {quoted: mek})
                    reply('PDP PARSA... O BUG FOI REPORTADO, SE FOR MENTIRA VAI SER COBRADO 🙄✌🏼!!')
                    break
					case 'marcar':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
					break
                   case 'marcar2':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠} @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
                  case 'marcar3':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `-> @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                case 'dog':
                case 'auau':
                case 'cachorro':
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(mess.wait)
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					break
				case 'ytmp4':
				case 'ytvideo':
				case 'ytbuscar':
				case 'ytbaixa':
					if (args.length < 1) return reply('Qual o link??')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Titulo do video* : ${anu.title}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					break
                case 'logo3d':
              	    if (args.length < 1) return reply('Qual txt??')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return client.sendMessage(from, 'LIMITE DE 10 LETRAS.', text, {quoted: mek})
                    buff = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
                    client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
			     	break
                case 'shorturl':
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/shorturl?url=${body.slice(10)}`)
			        hasil = `${anu.result}`
			        reply(hasil)
			        break
			    case 'fototiktok':
                    gatauda = body.slice(12)
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${body.slice(8)}`)
			        buff = await getBuffer(anu.result)
                    reply(anu.result)
			        break
			    case 'map':
			case 'mapa': 
                anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
                buffer = await getBuffer(anu.gambar)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
				break
				case 'ocr': 
				case 'txtdafoto':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
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
						reply('Escolha a fto para pegar os txt dela ${prefix} 💁🏻‍♂️')
					}
					break
				case 'stiker': 
				case 'sticker':
				case 'fig':
				case 'figurinha':
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
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								client.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Drogaa 🤦🏻‍♂️... tente dnv!`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								client.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Coloca desse jeito please: *${prefix}sticker*. E tu vai fazer uma fig cm a foto ou o gif 😒`)
					}
					break
				case 'gtts':	
				case 'tts':
				case 'audio':
					if (args.length < 1) return client.sendMessage(from, 'Idioma é nescessário!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Qual txt tu quer q eu fale??', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('Txt MTO grande 😒')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Não deu... tente de novo mais tarde.')
							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
				case 'setprefix':
				case 'sigla':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`Sigla de comandos alterada para: *[${prefix}]*.`)
					break 	
				case 'hilih': 
					if (args.length < 1) return reply('Qual txt deseja baby??')
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break
				case 'tiktokstalk':
				case 'tiktokperfil':
					try {
						if (args.length < 1) return client.sendMessage(from, 'Qual nome da pessoa???', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(mess.wait)
						teks = `*ID* : ${user.id}\n*Nome* : ${user.uniqueId}\n*Nick* : ${user.nickname}\n*Seguidores* : ${stats.followerCount}\n*Seguindo* : ${stats.followingCount}\n*Posts da conta* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Nada encontrado 😕')
					}
					break
				case 'clearall':
				case 'limpar':
					if (!isOwner) return reply('???')
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply('Tá limpo chef 🤖')
					break
			       case 'bloquear':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					client.blockUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `Membro bloqueado ❌ ${body.slice(7)}@c.us`, text)
					break
                    case 'desbloquear':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
				    client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `Membro desbloqueado ✅ ${body.slice(9)}@c.us`, text)
				break
				case 'kitar': 
				if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
				await client.client.leaveGroup(from, 'By peoples 👋', groupId)
                    break
				case 'bc': 
					if (!isOwner) return reply('Somente meu criador pode usar!') 
					if (args.length < 1) return reply('......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `{Mensagem de transmissão}\n\n${body.slice(4)}`})
						}
						reply('Transmissão feita!')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `{Msg de transmissão}\n\n${body.slice(4)}`)
						}
						reply('TM feita!')
					}
					break
			   	case 'mudarfoto': 
                        if (!isGroup) return reply(mess.only.group)
                       if (!isGroupAdmins) return reply(mess.only.admin)
                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                       media = await client.downloadAndSaveMediaMessage(mek)
                         await client.updateProfilePicture (from, media)
                        reply('Pronto ✅')
                break						
				case 'add':
				case 'adicionar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Infelizmente EU Ñ TENHO bola de cristal pra adivinhar quem vc quer add aki.')
					if (args[0].startsWith('08')) return reply('Qual o cod do país?? ')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Falha ao adicionar... talvez porque o número seja privado ❗')
					}
					break
					case 'grup':
					case 'group':
					case 'grupo':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'abrir') {
					    reply(`{🔓} GRP ABERTO! AGRA TODOS PODEM CONVERSAR...`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'fechar') {
						reply(`{🔒} GRP FECHADO. SOMENTE ADM's PODEM CONVERSAR...`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
                    
            case 'admin':
            case 'owner':
            case 'creator':
            case 'criador':
            case 'jhon':
                  client.sendMessage(from, {displayname: "Jhon", vcard: vcard}, MessageType.contact, { quoted: mek})
       client.sendMessage(from, 'Este é o número do meu criador 🤖:',MessageType.text, { quoted: mek} )
           break    
           case 'setname':
           case 'mudarnome':
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMessage(from, 'Nome do grupo alterado com sucesso ✅', text, {quoted: mek})
                break
                case 'setdesc':
                case 'mudardesc':
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, 'Descrição do grp alterada ✅', text, {quoted: mek})
                break
           case 'demote':
           case 'rebaixar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('PRFVR, marca a pessoa à ser removida 😒')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Sorry 🤖🙂:\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`@${mentioned[0].split('@')[0]} sorry 🤖🙂...`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
				case 'promover':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('PRFVR, marca a pessoa à ser promovida 😒!!!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `New ADM 🔰:\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`New ADM 🔰: @${mentioned[0].split('@')[0]}!!`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break	
			     	case 'kick':
			case 'ban':
			case 'remover':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('PRFVR, marca a pessoa q deseja remover 🥵!!!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Tchau 👋 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`@${mentioned[0].split('@')[0]} vc descumpriu nossas regras, bye 👋🤖`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
				case 'listadmin':
				case 'listaadms':
				case 'adms':
					if (!isGroup) return reply(mess.only.group)
					teks = `ADM's do grupo *${groupMetadata.subject}*\nadms : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'toimg':
				case 'converter':
					if (!isQuotedSticker) return reply('Marca o sticker prfvr 😒!')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Erro... tente novamente!')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Pronto...'})
						fs.unlinkSync(ran)
					})
					break
				case 'nsfw':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('0 ou 1?')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('Ativado ✅')
						nsfw.push(from)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
						reply('Sucesso!!')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
						reply('Feito!!')
					} else {
						reply('Use o 0 para desativar e o 1 para ativar* \n Exemplo: *nsfw 1* .')
					}
					break
				case 'welcome':
				case 'bv':
				case 'bemvindo':
				case 'boasvindas':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('1 ou 0?')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Ativado ✅')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Feito!')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('❬ pronto ❭ ')
					} else {
						reply('Use *1 para ativar* e *0 para desativar* \n Exemplo: *${prefix}welcome 1* .')
					}
				case 'clone':
				case 'clonar':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Não consegui te identificar ): ...') 
					if (args.length < 1) return reply('TAG do membro clonada!')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto de perfil atualizada com sucesso! Usando como perfil: @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Tente novamente mais tarde!')
					}
					break
				case 'wait':
				case 'pesquisar':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply ('Encontrei isso... ')
					}
					break
				default:
			if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
