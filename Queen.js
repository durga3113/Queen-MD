require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const os = require('os')
const util = require('util')
const path = require('path')
const hx = require('hxz-api')
const axios = require('axios')
const chalk = require('chalk')
const yts = require('yt-search')
const xfar = require('xfarr-api')
const google = require('google-it')
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const simpleGit = require('simple-git');
const git = simpleGit();
const Heroku = require('heroku-client');
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
let { covid } = require('./lib/covid.js')
const hariini = moment.tz('Asia/Colombo').format('dddd, DD MMMM YYYY')
const west = moment.tz('Asia/Colombo').format('HH:mm:ss')
const tengah = moment.tz('Asia/Colombo').format('HH:mm:ss')
const timur = moment.tz('Asia/Colombo').format('HH:mm:ss')
const ripo = ('ยฉ ๐ค๐๐ฒ๐ฒ๐ป ๐ ๐\nGithub :\nhttps://github.com/DarkWinzo/Queen-MD')  //ubah di config biar ngk emror
const ini_mark = `0@s.whatsapp.net`
const pepek =  `*แด๊ฐ๊ฐษชแดษชแดส สแดแด สส Qแดแดแดษด-แดแด* 
 *แดแดแด แดสแดแด สส @${'๐แดสแด๐ชษชษดแดขแด'.split('@')[0]}*`
const wm = `๐ค๐๐ฒ๐ฒ๐ป ๐ ๐ ๐๐ ๐๐ฎ๐ฟ๐ธ๐ช๐ถ๐ป๐๐ผ ยฉ 2022`
const from = m.chat
const dripsanti = JSON.parse(fs.readFileSync('./lib/badword.json'))
let bad = JSON.parse(fs.readFileSync('./lib/badword.json'))
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(TIME)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//  

const time2 = moment().tz('Asia/Colombo').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var GreetingTime = 'เทเทเถถ เถปเทเถญเทโเถปเทเถบเถเท ๐'
 }
 if(time2 < "19:00:00"){
var GreetingTime = 'เทเทเถถ เทเถฑเทเถฐเทโเถบเทเทเถเท ๐'
 }
 if(time2 < "18:00:00"){
var GreetingTime = 'เทเทเถถ เทเถฑเทเถฐเทโเถบเทเทเถเท ๐'
 }
 if(time2 < "15:00:00"){
var GreetingTime = 'เทเทเถถ เทเถฑเทเถฐเทโเถบเทเทเถเท ๐'
 }
 if(time2 < "13:01:01"){
var GreetingTime = 'เทเทเถถ เถฏเทเทเถฝเถเท ๐'
}
 if(time2 < "12:01:01"){
var GreetingTime = 'เทเทเถถ เถฏเทเทเถฝเถเท ๐'
 }
 if(time2 < "11:00:00"){
var GreetingTime = 'เทเทเถท เถเถฏเทเทเถฑเถเท  ๐'
 }
 if(time2 < "05:00:00"){
var GreetingTime = 'เทเทเถท เถเถฏเทเทเถฑเถเท  ๐'
 } 
 if(time2 < "00:01:01"){
var GreetingTime = 'เทเทเถท เถเถฏเทเทเถฑเถเท  ๐'
 } 
 
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(Read Database)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//  

let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = Queen = async (Queen, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[ยฐโขฯรทรยถโยฃยขโฌยฅยฎโข+โ_=|~!?@#$%^&.ยฉ^]/gi.test(body) ? body.match(/^[ยฐโขฯรทรยถโยฃยขโฌยฅยฎโข+โ_=|~!?@#$%^&.ยฉ^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await Queen.decodeJid(Queen.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid

//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(Group)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//    
        const antiToxic = m.isGroup ? dripsanti.includes(from) : false
        const groupMetadata = m.isGroup ? await Queen.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
        const wizbotv1 = body.slice(0).trim().split(/ +/).shift().toLowerCase()
    
    try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
        
        let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
        if (setting) {
        if (!isNumber(setting.status)) setting.status = 0
        if (!('autobio' in setting)) setting.autobio = true
        if (!('templateImage' in setting)) setting.templateImage = true
        if (!('templateVideo' in setting)) setting.templateVideo = false
        if (!('templateGif' in setting)) setting.templateGif = false
        if (!('templateMsg' in setting)) setting.templateMsg = false    
        } else global.db.data.settings[botNumber] = {
        status: 0,
        autobio: true,
        templateImage: true,
        templateVideo: false,
        templateGif: false,
        templateMsg: false,
        }
        
        } catch (err) {
            console.error(err)
        }
        
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(Public & Self)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//        
        
        if (!Queen.public) {
            if (!m.key.fromMe) return
        }
        if (m.message) {
            Queen.readMessages([m.key])
        }
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(reset limit every 12 hours)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|// 

        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Colombo"
        })
       
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(auto set bio)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//  
        if (db.data.settings[botNumber].autobio) {
        let setting = global.db.data.settings[botNumber]
        if (new Date() * 1 - setting.status > 1000) {
        let uptime = await runtime(process.uptime())
        await Queen.setStatus(`${wm} | Queen-MD เถฐเทเทเถฑ เถเทเถฝเถบ : ${runtime(uptime)}`)
        setting.status = new Date() * 1
        }
    }
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(Anti Link)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//         
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`ใ ANTI LINK ใ\n\nเถเถถ เถเถซเทเถฉเทเถบเถธเท เทเถถเทเถณเทเถบเถเท เถบเทเทเท เถถเท เทเถณเทเถฑเทเถเทเถฑ เถเถญ, เทเถธเทเทเทเถฑเทเถฑ..เถธเถง เถเถถเท เถเทเถญเท เถเทเถปเทเถธเถง เทเทเถฏเทเทเท.`)
        if (!isBotAdmins) return m.reply(`เถธเถธ เถเถฉเทเถธเทเถฑเท เถเถฑเทเถฑเทเท`)
        let gclink = (`https://chat.whatsapp.com/`+await Queen.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`เถธเถง เทเถธเทเทเทเถฑเทเถฑ, เถธเถธ เถเถบเทเท เถเถบเทเถฑเท เถฑเทเถเถฝเท เถเถบเท เถธเท เถเทฒเถดเท เถเถเท เถฝเทเถฑเทเถเท เถเถ เถเทเถดเท เถฑเทเทเท`)
        if (isAdmins) return m.reply(`เถธเถง เทเถธเทเทเทเถฑเทเถฑ,เถเถบเท เถเถฉเทเถธเทเถฑเท เถเทเถฑเทเถเท เถฑเทเทเท เถเทเทเทเถธ เถดเทเถบเทเถปเถเท เถเถฑเทเถฑเท เถฑเท`)
        if (isCreator) return m.reply(`เถธเถง เทเถธเทเทเทเถฑเทเถฑ,เถเถบเท เถธเถเท Owner เถฑเทเทเท เถเทเทเทเถฏเท เถดเทเถบเทเถปเถเท เถเถฑเทเถฑเท เถฑเท`)
        Queen.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(Mute Chat)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//         
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(Respon Cmd with media)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//   

         if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: Queen.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, Queen.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        Queen.ev.emit('messages.upsert', msg)
        }

//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(Game)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|// 
	    if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
เถดเทเถญ เถดเทโเถปเทเทเถฑเทเถฝเถง เถดเทเทเทเถญเทเถปเท เถฏเทเถฑเทเถฑ :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(เทเถธเทเถป เถเถญเทเถญเถป เทเถฝเถง เทเทเทเทเถญเทเถฑเท เถเถญ)` : ''}
${isWin ? `เทเทเถบเถฝเทเถธ เถดเทเทเทเถญเทเถปเท เทเถฝเถง เถดเทเทเทเถญเทเถปเท เทเถดเถบเถฑ เถฝเถฏเท` : isSurender ? 'เถเถญเทเถปเทเถฑเทเถฑ!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `เถดเถปเทเถดเทเถปเทเถซ เถเทโเถปเทเถฉเถเถบเทเถเท`}`.trim()
            Queen.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Queen.sendButtonText(m.chat, [{ buttonId: 'เถเทเถญเถบ เถเถฑเทเถธเทเถฑ เถเถปเถฑเทเถฑ', buttonText: { displayText: 'เถเทเถญเถบ เถเถฑเทเถธเทเถฑ เถเถปเถฑเทเถฑ' }, type: 1 }], `๐ฎ เถเทเถญเถบ เถเถฑเทเถธเทเถฑ เถเถปเถฑเทเถฑ ๐ฎ\n\nเถฑเทเทเทเถปเถฏเท เถดเทเทเทเถญเทเถป ๐\n\nเถฑเทเทเถญ เถเทโเถปเทเถฉเท เถเทเถปเทเถธเถง เถเทเทเทโเถบเถฏ? เถดเทเถญ เถถเทเถญเทเถญเถธ เถเถถเถฑเทเถฑ`, Queen.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*เทเทเถปเถฏเท เถดเทเทเทเถญเทเถปเถเท!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`๐ฎ เถเถซเทเถญ เถดเทโเถปเทเทเถฑเทเทเถฝเทเถบ  ๐ฎ\n\nเถฑเทเทเทเถปเถฏเท เถดเทเทเทเถญเทเถป ๐\n\nเถฑเทเทเถญ เถเทโเถปเทเถฉเท เถเทเถปเทเถธเถง เถเทเทเทโเถบเถฏ?เถเทเทเถฑเถธเท เถธเทเทเท เถงเถบเทเถดเท เถเถปเถฑเทเถฑ ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*เทเทเถปเถฏเท เถดเทเทเทเถญเทเถปเถเท!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Queen.sendButtonText(m.chat, [{ buttonId: 'เถดเทเถฑเทเถญเทเถปเถบ เถเถฑเทเถธเทเถฑ เถเถปเถฑเทเถฑ', buttonText: { displayText: 'เถดเทเถฑเทเถญเทเถปเถบ เถเถฑเทเถธเทเถฑ เถเถปเถฑเทเถฑ' }, type: 1 }], `๐ฎ เถดเทเถฑเทเถญเทเถปเถบ เถเถฑเทเถธเทเถฑ เถเถปเถฑเทเถฑ ๐ฎ\n\nเถฑเทเทเทเถปเถฏเท เถดเทเทเทเถญเทเถป ๐\n\nเถฑเทเทเถญ เถเทโเถปเทเถฉเท เถเทเถปเทเถธเถง เถเทเทเทโเถบเถฏ? เถดเทเถญ เถถเทเถญเทเถญเถธ เถเถถเถฑเทเถฑ`, Queen.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*เทเทเถปเถฏเท เถดเทเทเทเถญเทเถปเถเท!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Queen.sendButtonText(m.chat, [{ buttonId: 'เทเถ เถฑเถบ เถเถฑเทเถธเทเถฑ เถเถปเถฑเทเถฑ', buttonText: { displayText: 'เทเถ เถฑเถบ เถเถฑเทเถธเทเถฑ เถเถปเถฑเทเถฑ' }, type: 1 }], `๐ฎ เทเถ เถฑเถบ เถเถฑเทเถธเทเถฑ เถเถปเถฑเทเถฑ ๐ฎ\n\nเถฑเทเทเทเถปเถฏเท เถดเทเทเทเถญเทเถป ๐\n\nเถฑเทเทเถญ เถเทโเถปเทเถฉเท เถเทเถปเทเถธเถง เถเทเทเทโเถบเถฏ? เถดเทเถญ เถถเทเถญเทเถญเถธ เถเถถเถฑเทเถฑ`, Queen.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*เทเทเถปเถฏเท เถดเทเทเทเถญเทเถปเถเท!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Queen.sendButtonText(m.chat, [{ buttonId: 'เทเทเถฝเท เถเทเถเท เถเถฑเทเถธเทเถฑ เถเถปเถฑเทเถฑ', buttonText: { displayText: 'เทเทเถฝเท เถเทเถเท เถเถฑเทเถธเทเถฑ เถเถปเถฑเทเถฑ' }, type: 1 }], `๐ฎ เทเทเถฝเท เถเทเถเท เถเถฑเทเถธเทเถฑ เถเถปเถฑเท ๐ฎ\n\nเถฑเทเทเทเถปเถฏเท เถดเทเทเทเถญเทเถป ๐\n*${deskripsi}*\n\nเถฑเทเทเถญ เถเทโเถปเทเถฉเท เถเทเถปเทเถธเถง เถเทเทเทโเถบเถฏ? เถดเทเถญ เถถเทเถญเทเถญเถธ เถเถถเถฑเทเถฑ`, Queen.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*เทเทเถปเถฏเท เถดเทเทเทเถญเทเถปเถเท!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Queen.sendButtonText(m.chat, [{ buttonId: 'เทเทเถเทโเถบเถบ เถเถฑเทเถธเทเถฑ เถเถปเถฑเทเถฑ', buttonText: { displayText: 'เทเทเถเทโเถบเถบ เถเถฑเทเถธเทเถฑ เถเถปเถฑเทเถฑ' }, type: 1 }], `๐ฎ เทเทเถเทโเถบเถบ เถเถฑเทเถธเทเถฑ เถเถปเถฑเทเถฑ๐ฎ\n\nเถฑเทเทเทเถปเถฏเท เถดเทเทเทเถญเทเถป ๐\n\nเถฑเทเทเถญ เถเทโเถปเทเถฉเท เถเทเถปเทเถธเถง เถเทเทเทโเถบเถฏ? เถดเทเถญ เถถเทเถญเทเถญเถธ เถเถถเถฑเทเถฑ`, Queen.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*เทเทเถปเถฏเท เถดเทเทเทเถญเทเถปเถเท!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Queen.sendButtonText(m.chat, [{ buttonId: 'เถเท เถดเถฏ เถเถฑเทเถธเทเถฑ เถเถปเถฑเทเถฑ', buttonText: { displayText: 'เถเท เถดเถฏ เถเถฑเทเถธเทเถฑ เถเถปเถฑเทเถฑ' }, type: 1 }], `๐ฎ เถเท เถดเถฏ เถเถฑเทเถธเทเถฑ เถเถปเถฑเทเถฑ ๐ฎ\n\nเถฑเทเทเทเถปเถฏเท เถดเทเทเทเถญเทเถป ๐\n\nเถฑเทเทเถญ เถเทโเถปเทเถฉเท เถเทเถปเทเถธเถง เถเทเทเทโเถบเถฏ? เถดเทเถญ เถถเทเถญเทเถญเถธ เถเถถเถฑเทเถฑ`, Queen.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*เทเทเถปเถฏเท เถดเทเทเทเถญเทเถปเถเท!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Queen.sendButtonText(m.chat, [{ buttonId: 'เถดเทโเถปเทเทเถฝเทเถเท', buttonText: { displayText: 'เถดเทโเถปเทเทเถฝเทเถเท' }, type: 1 }], `๐ฎ เถดเทโเถปเทเทเถฝเทเถเท ๐ฎ\n\nเถฑเทเทเทเถปเถฏเท เถดเทเทเทเถญเทเถป ๐\n\nเถฑเทเทเถญ เถเทโเถปเทเถฉเท เถเทเถปเทเถธเถง เถเทเทเทโเถบเถฏ? เถดเทเถญ เถถเทเถญเทเถญเถธ เถเถถเถฑเทเถฑ`, Queen.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*เทเทเถปเถฏเท เถดเทเทเทเถญเทเถปเถเท!*')
        }

//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(Group)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//         
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) {
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'เถเทโเถปเทเถฉเทเท เถเทเทเถฑเท เทเทเถบ',
	    '-2': 'เทเถฝเถเถเท เถฑเทเถญ',
	    '-1': 'เทเถฝเถเถเท เถฑเทเทเถฑ เทเทเถฎเทเถฑเถบ',
	    0: 'เทเถฝเถเถเท เถฑเทเทเถฑ เทเทเถฎเทเถฑเถบ',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: 'โ',
	    O: 'โญ',
	    1: '1๏ธโฃ',
	    2: '2๏ธโฃ',
	    3: '3๏ธโฃ',
	    4: '4๏ธโฃ',
	    5: '5๏ธโฃ',
	    6: '6๏ธโฃ',
	    7: '7๏ธโฃ',
	    8: '8๏ธโฃ',
	    9: '9๏ธโฃ',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} เถขเถบ!` : isTie ? `เถเทโเถปเทเถฉเทเท เถเทเทเถฑเท` : `เทเทเถปเทเถฑเทเท ${['โ', 'โญ'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
โ: @${room.game.playerX.split('@')[0]}
โญ: @${room.game.playerO.split('@')[0]}

เถบเถงเถญเท เทเทเถธเถง เทเท เถดเถปเทเถขเถบ เถดเทเทเทเถเทเถฑเทเถธเถง *เถเถญเทเทเทเถปเทเถธ*`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await Queen.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await Queen.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(Suit PvP)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//

	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    Queen.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} เถเถณเทเถธ เถดเทโเถปเถญเทเถเทเทเทเถด เถเถปเถบเท, เถเถณเทเถธ เถเทเถฝเถเถเท เทเท`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    Queen.sendText(m.chat, `เทเทเถงเท เถ เทเถงเท เถเทเถปเทเถธเถง เถบเทเท เถเถญ

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

เถเถปเทเถซเทเถเถป เถเถฏเทเท เถเถญเทเถถเทเท เถญเทเท เถเถณเทเถธเถเท เถญเทเถปเท เถเถฑเทเถฑ"
เถเทเถฝเทเถเท เถเถปเถฑเทเถฑ  https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) Queen.sendText(roof.p, `เถเถปเทเถซเทเถเถป เถญเทเถปเท เถเถฑเทเถฑ \n\nrock๐ฟ\npaper๐\nscissorsโ๏ธ`, m)
	    if (!roof.pilih2) Queen.sendText(roof.p2, `เถเถปเทเถซเทเถเถป เถญเทเถปเท เถเถฑเทเถฑ \n\nrock๐ฟ\npaper๐\nscissorsโ๏ธ`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) Queen.sendText(m.chat, `เถเทโเถปเทเถฉเถเถบเถฑเท เถฏเทเถฏเทเถฑเทเถงเถธ เถเทโเถปเทเถฉเท เถเทเถปเทเถธเถง เถเถฏเทเทเถเท เถฑเทเถญ,\nSuit เถเทเถฝเถเถเท เทเท`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    Queen.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} เถเถณเทเถธ เถญเทเถปเถฑเทเถฑ เถเถดเท, เถเทโเถปเทเถฉเทเท เถเทเทเถฑเท เถเถปเถฑเทเถฑ`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`เถเถถ เถญเทเถปเทเถเทเถฑ เถเถญ ${m.text} ${!roof.pilih2 ? `\n\nเถดเทโเถปเถญเทเทเทเถฏเทเถบเท เถญเทเถปเท เถเถฑเทเถฑเท เถญเทเถเท เถถเถฝเท เทเทเถงเทเถธ` : ''}`)
	    if (!roof.pilih2) Queen.sendText(roof.p2, '_เถดเทโเถปเถญเทเทเทเถฏเทเถบเท เถญเทเถปเทเถเทเถฑ เถเถญ_\nเถฏเทเถฑเท เถเถถเท เทเทเถปเถบ', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`เถเถถ เถญเทเถปเทเถเทเถฑ เถเถญ ${m.text} ${!roof.pilih ? `\n\nเถดเทโเถปเถญเทเทเทเถฏเทเถบเท เถญเทเถปเท เถเถฑเทเถฑเท เถญเทเถเท เถถเถฝเท เทเทเถงเทเถธ` : ''}`)
	    if (!roof.pilih) Queen.sendText(roof.p, '_เถดเทโเถปเถญเทเทเทเถฏเทเถบเท เถญเทเถปเทเถเทเถฑ เถเถญ_\nเถฏเทเถฑเท เถเถถเท เทเทเถปเถบ', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    Queen.sendText(roof.asal, `_*เถเถณเทเถธเท เถดเทโเถปเถญเทเถตเถฝ*_${tie ? '\nเถธเทเถฝเทเทเถเท' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` เถขเถบ \n` : ` เถดเถปเทเถขเถบ \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` เถขเถบ \n` : ` เถดเถปเทเถขเถบ \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
เถเทเทเท เถงเทเถเท เถเถปเถฑเทเถฑ เถเถดเท!
เถเถบเท เถเถฑเทเถฑเท AFK เถเถเท  ${reason ? 'เทเทเถญเทเทเถเท เถเถญเทเท' + reason : 'เทเทเถญเทเทเถเท เถฑเท'}
เถญเทเท  ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            Queen.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} AFK เถฑเถญเถป เถเถปเถฑเทเถฑ${user.afkReason ? 'เถดเทเทเท' + user.afkReason : ''}
เถญเทเท ${clockString(new Date - user.afkTime)}`)
            user.afkTime = -1
            user.afkReason = ''
        }
	 
	let isBan = ""
         switch(command) {
           
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(afk)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//           
           case 'afk': {
                let user = global.db.data.users[m.sender]
                await Queen.sendMessage(m.chat, { react: { text: `โฃ๏ธ`, key: m.key }})
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} เถฏเทเถฑเถงเถธเถญเท Afk ${text ? ': ' + text : ''}`)
                }
            break	
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(ttc)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//
            
        case 'ttc': case 'ttt': case 'tictactoe': {
        await Queen.sendMessage(m.chat, { react: { text: `โ๏ธ`, key: m.key }})
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'เถเถถ เถญเทเถธเถญเท เถเทโเถปเทเถฉเทเทเท เทเทเถงเท'   
            await Queen.sendMessage(m.chat, { react: { text: `๐ป๏ธ`, key: m.key }})
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('เทเทเทเถฝเทเถเถปเทเทเถฑเท เทเถธเท เทเทเถบ!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: 'โ',
            O: 'โญ',
            1: '1๏ธโฃ',
            2: '2๏ธโฃ',
            3: '3๏ธโฃ',
            4: '4๏ธโฃ',
            5: '5๏ธโฃ',
            6: '6๏ธโฃ',
            7: '7๏ธโฃ',
            8: '8๏ธโฃ',
            9: '9๏ธโฃ',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

เถปเทเถณเท เทเทเถงเทเถฑเทเถฑ @${room.game.currentTurn.split('@')[0]}

เถบเถงเถญเท เทเทเถธเถง เทเท เถดเถปเทเถขเถบ เถดเทเทเทเถเทเถฑเทเถธเถง *เถเถญเทเทเทเถปเทเถธ*`
            if (room.x !== room.o) await Queen.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await Queen.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('เทเทเถเถปเท เถเถฑเถญเทเถปเท เถถเถฝเท เทเทเถงเทเถธ' + (text ? `เถดเทเถญ เทเทเถฐเทเถฑเถบ เถงเถบเทเถดเท เถเถปเถฑเทเถฑ ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(delttc)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//
            
            case 'delttc': case 'delttt': {
            await Queen.sendMessage(m.chat, { react: { text: `โ๏ธ`, key: m.key }})
            let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
            if (!roomnya) throw `เถเถถ tictactoe เถเทเถธเถปเถบเท เถฑเทเทเท !`
            delete this.game[roomnya.id]
            m.reply(`เทเทเทเท เถเทเถธเถปเถบเท tictactoe เทเทเถปเทเถฎเถเท เถธเถเถฑเทเถฑ !`)
            await Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }})
            }
            break
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(suitpvp)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//
            
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`เถเถถเท เถเถฝเทเถฑเท เถเถณเทเถธ เทเถธเทเถดเทเถปเทเถซ เถเถปเถฑเทเถฑ`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`เถธเทเถญเท เถเถเทเถ เทเทเถฝเทเถฝเถธเท เถเถปเถฑเทเถฑ เถถเทเทเท!`)
            if (!m.mentionedJid[0]) return m.reply(`_เถเถถ เถเถทเทเถบเทเถ เถเทเถปเทเถธเถง เถเทเถธเถญเท เถเทเถงเถฏ?_\nเถเทเทเท เถงเทเถเท เถเถปเถฑเทเถฑ..\n\nเถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix}เถเถณเทเถธ @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `เถเถถ เถเถทเทเถบเทเถ เถเถปเถฑ เถดเทเถฏเทเถเถฝเถบเท เทเทเถฑเถญเท เถเทเถฑเทเถเท เทเถธเถ เทเทเถฝเทเถฝเถธเท เถเถปเถบเท`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} เถเถทเทเถบเทเถเถบ @${m.mentionedJid[0].split`@`[0]} suit เทเทเถฝเทเถฝเถธเท เถเทเถปเทเถธเถง

เถเถปเทเถซเทเถเถป @${m.mentionedJid[0].split`@`[0]} เถดเทเทเทเถเถฑเทเถฑ/เถดเทโเถปเถญเทเถเทเทเทเถด เถเถปเถฑเทเถฑ เถงเถบเทเถดเท เถเถปเถฑเทเถฑ`
            this.suit[id] = {
            chat: await Queen.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) Queen.sendText(m.chat, `_suit เถเทเถฝเถบ เถเทเถปเถบเท_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            
 //|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(Donate)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//
            
	    case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
            await Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }})
              if (m.isGroup)
             Queenpic ='https://i.ibb.co/jZkzpw2/Queen.jpg'
            const help = `*๐๏ธ เถเถบเทเถถเทเทเถฑเท...${m.pushName} ,เถเทเทเทเถธเถฏ เถเถญเทเถฑเท เถเถบเทเถง?*\n\n เถเถบเทเถฝเท เถฏเถฑเทเถฑเทเถฑเท เถเถญเทเถฑเท เถธเถฑเท เถเทเถฑ..\n เถธเถธ เถญเถธเถบเท DarkWinzo \nเถธเถง เถถเทเถงเทเท เถญเทเถฏเทเถปเถงเถญเท เทเทเถฉเท เถฏเทเถบเทเถซเท เถเถปเถฑเทเถฑ เถเถบเทเถฝเถงเถญเท เถดเทเถฝเทเทเถฑเท เถเถฏเทเท เถเถปเถฑเทเถฑ.\nhttps://wa.me/+94775200935 (Queen-MD Developer)\n\nDonate For Me : \n<===< ๐๐ฎ๐ป๐ธ ๐๐ฒ๐๐ฎ๐ถ๐น๐ >===>\n*NSB BANK*\nโคBranch  =  Imaduwa\nโคAccount No:  =  107578013551\nโคName  =  K.K.Isuru Lakshan `
     
         let butRun = [
                {buttonId: `.simplemenu`, buttonText: {displayText: 'Menu'}, type: 1} ,
                {buttonId: `.speed`, buttonText: {displayText: 'Speed'}, type: 1}
                ]      
                let buttonMessage = {
                    image:fs.readFileSync('./src/Media/Image/Donate.png'),ImagePlayback:true,
                    caption: help,
                    footer: `\n*เถดเทเทเทเถฏเถฑ :*\nเถธเถฑเท เถธเทเถ Develop เถเถฝเท เถเทเทเทเถธ Donate เถเทเถปเทเถธเถเท เถถเถฝเทเถดเทเถปเทเถญเทเถญเท เถฑเทเทเท..เถธเทเถ Open Source Project เถเถเถเท..เถ เถฑเทเทเท เถเถบเทเถฝเถง เถดเทเถฝเทเทเถฑเท เถฑเถธเท เทเทเถญเถปเถเท Donate เถเถปเถฑเทเถฑ.....โค๏ธ\nเถดเถปเทเทเทเทเถธเทเถฑเท เถเถฑเทเถฑ เทเทเถธเทเถธ, เถญเทเถปเทเทเถฑเท เทเถปเถซเถบเท\n\nQแดแดแดษด แดแดสแดษช แดแดแด ษชแดแด สแดแด`,
                    buttons: butRun,
                    headerType: 4
                }
            Queen.sendMessage(m.chat,buttonMessage,{quoted:m})
            await Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }})
                }
            break
            
 //|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(antibadword)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//           
            case 'antibadword': {		
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (antiToxic) return m.reply('*Already activated*')
dripsanti.push(from)
m.reply('*Success turning on antibadword in this group*')
var group = await Queen.groupMetadata(from)
var members = group['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Queen.sendMessage(from, {text: `*ANTILINK BADWORD*\n\n*no hate speech anymore, watch space im going to kick dumps*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return m.reply('*Already deactivated*')
let off = dripsanti.indexOf(from)
dripsanti.splice(off, 1)
m.reply('*Success in turning off antirude in this group happy now*')
} else {
 let buttons = [
 { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
 { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
 ]
 await Queen.sendButtonText(m.chat, buttons, `*ANTI BADWORDS*\n\n.`, `${global.botname}`, m)
 }
 }
 
break
 //|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(sc)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//           
             case 'sc': case 'script': case 'Script': {
            await Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }})
              if (m.isGroup)
             Queenpic ='https://i.ibb.co/jZkzpw2/Queen.jpg'
            const scc = `โโโโ๊ฅใ ๐ฎ *๐ค๐๐ฒ๐ฒ๐ป ๐ ๐ ๐๐ผ๐ ๐ฆ๐ฐ๐ฟ๐ถ๐ฝ๐* ๐ฎใ๊ฅโโฌฃ
โ
โ๐๏ธ *@DarkWinzo* (Main Developer)
โ   
โ๐ฅ๏ธGithub : https://github.com/DarkWinzo
โ๐ฌ๏ธYoutube : https://youtube.com/c/DarkWinzo
โ
โ๐๏ธ *เถธเทเถฝเถเทเถญเถบ (Bot Script) :* 
โ    https://github.com/DarkWinzo/Queen-MD
โโโโโโโ๊ฅ

โโโโ๊ฅ ใ๐ซ๏ธ *๐ง๐ต๐ฎ๐ป๐ธ ๐ง๐ผ* ๐ซ๏ธใ๊ฅโโฌฃ
โ
โ๐ท๏ธ *@Alien Alfa*
โ๐ฅ๏ธGithub : https://github.com/Alien-Alfa
โ
โ *๐ค๏ธเทเถ เถฑเถบเถเทเถฑเท เทเท เถเถฏเทเท เถเถฝ เทเทเถธ เถเถบเทเถเทเถงเถธ* 
โ             *เทเทเถญเทเถญเทเถบ เถดเทเถฏ เถเถปเถธเท.* 
โ             
โโโโโโโ๊ฅ
`
     
         let butRun = [
                {buttonId: `ok`, buttonText: {displayText: 'Ok'}, type: 1} ,
                {buttonId: `speed`, buttonText: {displayText: 'Speed'}, type: 1}
                ]      
                let buttonMessage = {
                    image:fs.readFileSync('./src/Media/Image/Script.png'),ImagePlayback:true,
                    caption: scc,
                    footer: `Qแดแดแดษด-แดแด สแดแด`,
                    buttons: butRun,
                    headerType: 4
                }
            Queen.sendMessage(m.chat,buttonMessage,{quoted:m})
            await Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }})
                }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(mdonate)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//
          case 'mdonate': {
            await Queen.sendMessage(m.chat, { react: { text: `โ๏ธ`, key: m.key }})
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let ments = [ownernya, me, ini_mark]
            let kukiw = `*${GreetingTime}*
โโโโโโโโโโโโโโโโโโโโโโโโโฌฃ
โ       *๐ ๐๐ผ๐ป๐ฎ๐๐ฒ ๐ ๐ฒ๐ป๐ ๐* 
โโโโโโโโโโโโโโโโโโโโโโโโโฌฃ

โโโโ๊ฅใ เถดเถปเทเทเทเถฝเถ เทเทเทเทเถญเถป ใ๊ฅโโฌฃ
โโพ *เถดเถปเทเทเทเถฝเถ เถฑเทเถธเถบ* : ${pushname}
โโพ *เถดเถปเทเทเทเถฝเถ เถเถเถเถบ* : @${me.split('@')[0]}
โโ๊ฅ

โโโโ๊ฅใ เถถเทเถงเท เถดเทเทเทเถถเถฏเท ใ๊ฅโโฌฃ
โโพ *เถถเทเถงเทเถเท เถฑเทเถธเถบ* : ${pushname}
โโพ *เทเทเถธเทเถเถปเท* : @${ownernya.split('@')[0]}
โโพ *เถธเทเถฏเทเถฝเทเถบ* : ${Queen.public ? 'Public' : `Self`}
โโ๊ฅ

โโ๊ฅใ เถฏเทเถฑเถบ เทเท เทเทเถฝเทเท ใ๊ฅโโฌฃ
โโพ *เถฏเทเถฑเถบ* : ${hariini}
โโพ *เทเทเถฝเทเท* : ${tengah}
โโโโโโโ๊ฅ`
                let sections = [
                {
                title: "<<<--------------------------<<<๐ค๐๐ฒ๐ฒ๐ป ๐ ๐ ๐๐ผ๐ป๐ฎ๐๐ฒ ๐ ๐ฒ๐ป๐>>>-------------------------->>>",
                rows: [
                {title: " ๐๐ผ๐ป๐๐ฎ๐ฐ๐ ๐ ๐ฒ ", rowId: `mcontact`, description: `เถธเทเท เทเถธเทเถถเถฑเทเถฏ เถเถปเถเถฑเทเถฑ..`},
                {title: " ๐ฆ๐ฐ๐ฟ๐ถ๐ฝ๐ ", rowId: `sc`, description: `เถธเทเถฝเถเทเถญเถบ..`},
                {title: " ๐๐ผ๐ป๐ฎ๐๐ฒ ๐ ๐ฒ ", rowId: `donate`, description: `เทเทโเถบเทเถดเทเถญเทเถบ เทเทเถฉเทเถฏเทเถบเทเถซเท เถเทเถปเทเถธ เทเถฏเทเท Donate เถเถปเถฑเทเถฑ..`}
                ]
                },
                ]
                Queen.sendListMsg(m.chat, kukiw, ripo, `*Hello ${pushname}*!`, `๐๐ผ๐ป๐ฎ๐๐ฒ ๐ ๐ฒ๐ป๐`, sections, m)
                await Queen.sendMessage(m.chat, { react: { text: `๐ฑ๐ฐ๏ธ`, key: m.key }})
                }
                break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(afk)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//

            case 'chat': {
                await Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }}) 
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    Queen.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    Queen.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    Queen.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    Queen.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    Queen.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    Queen.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    Queen.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(family100)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//
            
        case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('เถญเทเถธเถญเท เถเทเทเถฑเท เถฑเทเทเท เทเทเทเท เถญเทเถถเท!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*เถดเทเถญ เถดเทโเถปเทเทเถฑ เทเถฝเถง เถดเทเทเทเถญเทเถปเท เทเถดเถบเถฑเทเถฑ :*\n${random.soal}\n\nเถเถป เถญเทเถบเทเถฑเทเถฑเท *${random.jawaban.length}* เถดเทเทเทเถญเทเถป ${random.jawaban.find(v => v.includes(' ')) ? `(เทเถธเทเถป เถดเทเทเทเถญเทเถปเท เทเถฝเถง เทเทเทเทเถญเทเถฑเท เถเถญ)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await Queen.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
                                   
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Caption เถเถ เทเทเทเถญ text เถเถ เถบเทเถฑเทเถฑ ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': case 'guess': {
                if (!text) throw `เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "เถญเทเถธเถญเท เถเทเทเถฑเท เถฑเทเทเท เทเทเทเท เถญเทเถถเท!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await Queen.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    Queen.sendText(m.chat, `เถเทเถญเถบเถเทเถฏ?\n\nเถเถฝเทเถเถปเท : ${result.artist}\nเถเทเถฝเถบ : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("เถดเทเทเทเถญเทเถป: " + result.jawaban)
                    Queen.sendButtonText(m.chat, [{ buttonId: 'เถเทเถญเถบ เถเถฑเทเถธเทเถฑ เถเถปเถฑเทเถฑ', buttonText: { displayText: 'เถเทเถญเถบ เถเถฑเทเถธเทเถฑ เถเถปเถฑเทเถฑ' }, type: 1 }], `เถเทเถฝเถบ เถเทเถปเถบเท\nเถดเทเทเทเถญเทเถป:  ${tebaklagu[m.sender.split('@')[0]]}\n\nPlay เถเทเถปเทเถธเถง เถเทเทเทโเถบเถฏ? เถดเทเถญ เถถเทเถญเทเถญเถธ เถเถถเถฑเทเถฑ`, Queen.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "เถญเทเถธเถญเท เถเทเทเถฑเท เถฑเทเถเท เทเทเทเท เถญเทเถถเท!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Queen.sendImage(m.chat, result.img, `เถเถปเทเถซเทเถเถป เถเทเถญ เถดเทโเถปเทเทเถฑเถบเถง เถดเทเทเทเถญเทเถปเท เถฏเทเถฑเทเถฑ\n\nเทเทเทเทเถญเถปเถบ : ${result.deskripsi}\nเถเทเถฝเถบ : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("เถดเทเทเทเถญเทเถป: " + result.jawaban)
                    Queen.sendButtonText(m.chat, [{ buttonId: 'เถดเทเถฑเทเถญเทเถปเถบ เถเถฑเทเถธเทเถฑ เถเถปเถฑเทเถฑ', buttonText: { displayText: 'เถดเทเถฑเทเถญเทเถปเถบ เถเถฑเทเถธเทเถฑ เถเถปเถฑเทเถฑ' }, type: 1 }], `เถเทเถฝเถบ เถเทเถปเถบเท\nเถดเทเทเทเถญเทเถป:  ${tebakgambar[m.sender.split('@')[0]]}\nPlay เถเทเถปเทเถธเถง เถเทเทเทโเถบเถฏ? เถดเทเถญ เถถเทเถญเทเถญเถธ เถเถถเถฑเทเถฑ`, Queen.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "เถญเทเถธเถญเท เถเทเทเถฑเท เถฑเทเถเท เทเทเทเท เถญเทเถถเท!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Queen.sendText(m.chat, `เถเถปเทเถซเทเถเถป เถดเทเถญ เถดเทโเถปเทเทเถฑเทเถฝเถง เถดเทเทเทเถญเทเถปเท เทเถดเถบเถฑเทเถฑ\n\n${result.soal}\nเถเทเถฝเถบ : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("เถดเทเทเทเถญเทเถป: " + result.jawaban)
                    Queen.sendButtonText(m.chat, [{ buttonId: 'เทเถ เถฑเถบ เถเถฑเทเถธเทเถฑ เถเถปเถฑเทเถฑ', buttonText: { displayText: 'เทเถ เถฑเถบ เถเถฑเทเถธเทเถฑ เถเถปเถฑเทเถฑ' }, type: 1 }], `เถเทเถฝเถบ เถเทเถปเถบเท\nเถดเทเทเทเถญเทเถป:  ${tebakkata[m.sender.split('@')[0]]}\n\nPlay เถเทเถปเทเถธเถง เถเทเทเทโเถบเถฏ? เถดเทเถญ เถถเทเถญเทเถญเถธ เถเถถเถฑเทเถฑ`, Queen.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "เถญเทเถธเถญเท เถเทเทเถฑเท เถฑเทเถเท เทเทเทเท เถญเทเถถเท!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Queen.sendText(m.chat, `เถเถปเทเถซเทเถเถป เถดเทเถญ เถดเทโเถปเทเทเถฑเทเถฝเถง เถดเทเทเทเถญเทเถปเท เทเถดเถบเถฑเทเถฑ\n\n${result.soal}\nเถเทเถฝเถบ : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("เถดเทเทเทเถญเทเถป: " + result.jawaban)
                    Queen.sendButtonText(m.chat, [{ buttonId: 'เทเทเถเทโเถบเถบ เถเถฑเทเถธเทเถฑ เถเถปเถฑเทเถฑ', buttonText: { displayText: 'เทเทเถเทโเถบเถบ เถเถฑเทเถธเทเถฑ เถเถปเถฑเทเถฑ' }, type: 1 }], `เถเทเถฝเถบ เถเทเถปเถบเท\nเถดเทเทเทเถญเทเถป:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nPlay เถเทเถปเทเถธเถง เถเทเทเทโเถบเถฏ? เถดเทเถญ เถถเทเถญเทเถญเถธ เถเถถเถฑเทเถฑ`, Queen.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "เถญเทเถธเถญเท เถเทเทเถฑเท เถฑเทเถเท เทเทเทเท เถญเทเถถเท!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Queen.sendText(m.chat, `เถธเท เถเทเถญเถบเท เถดเถฏ เถปเถ เถฑเถบเถฏ? : *${result.soal}*?\nเถเทเถฝเถบ : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("เถดเทเทเทเถญเทเถป: " + result.jawaban)
                    Queen.sendButtonText(m.chat, [{ buttonId: 'เถดเถฏ เถปเถ เถฑเถบ เถเถฑเทเถธเทเถฑ เถเถปเถฑเทเถฑ', buttonText: { displayText: 'เถดเถฏ เถปเถ เถฑเถบ เถเถฑเทเถธเทเถฑ เถเถปเถฑเทเถฑ' }, type: 1 }], `เถเทเถฝเถบ เถเทเถปเถบเท\nเถดเทเทเทเถญเทเถป:  ${tebaklirik[m.sender.split('@')[0]]}\n\nPlay เถเทเถปเทเถธเถง เถเทเทเทโเถบเถฏ? เถดเทเถญ เถถเทเถญเทเถญเถธ เถเถถเถฑเทเถฑ`, Queen.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "เถญเทเถธเถญเท เถเทเทเถฑเท เถฑเทเถเท เทเทเทเท เถญเทเถถเท!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Queen.sendText(m.chat, `*เถดเทเถญ เถดเทโเถปเทเทเถฑ เทเถฝเถง เถดเทเทเทเถญเทเถปเท เทเถดเถบเถฑเทเถฑ :*\n${result.soal}*\nเถเทเถฝเถบ : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("เถดเทเทเทเถญเทเถป: " + result.jawaban)
                    Queen.sendButtonText(m.chat, [{ buttonId: 'เทเทเถฝเท เถเทเถเท เถเถฑเทเถธเทเถฑ เถเถปเถฑเทเถฑ', buttonText: { displayText: 'เทเทเถฝเท เถเทเถเท เถเถฑเทเถธเทเถฑ เถเถปเถฑเทเถฑ' }, type: 1 }], `เถเทเถฝเถบ เถเทเถปเถบเท\nเถดเทเทเทเถญเทเถป:  ${caklontong[m.sender.split('@')[0]]}\nเทเทเทเทเถญเถป : ${caklontong_desk[m.sender.split('@')[0]]}\n\nPlay เถเทเถปเทเถธเถง เถเทเทเทโเถบเถฏ? เถดเทเถญ เถถเทเถญเทเถญเถธ เถเถถเถฑเทเถฑ`, Queen.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(math)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//             
            case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "เถญเทเถธเถญเท เถเทเทเถฑเท เถฑเทเถเท เทเทเทเท เถญเทเถถเท!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `เถธเทเถฏเทเถฝเทเถบ: ${Object.keys(modes).join(' | ')}\nเถทเทเทเทเถญเถบ เถดเทเทเทเถถเถณ เถเถฏเทเทเถปเถซ: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                Queen.sendText(m.chat, `*เถเทเท เถดเทโเถปเถญเทเถตเถฝเถบ เถเทเถธเถเทเถฏ?: ${result.soal.toLowerCase()}*?\n\nเถเทเถฝเถบ: ${(result.waktu / 1000).toFixed(2)} เถฏเทเทเถฑเทเท เถเถเทเถธเถซเทเถฑเท เทเทเถฝเท เถเถป เถดเทเทเทเถญเทเถป เถฝเถถเท เถฏเทเถฑเทเถฑ.`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("เถดเทเทเทเถญเทเถป: " + result.jawaban)
                    m.reply("เถเทเถฝเถบ เถเทเถปเถบเท\nเถดเทเทเทเถญเทเถป: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(couplematch)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//             
            case 'couplematch': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `๐ซ เถเถถเท เถเทเถฝเถดเทเถธเถบเท

@${me.split('@')[0]} โค๏ธ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'เถธเถเท เถเถญเทเถธ เทเทเถเถปเท', buttonText: { displayText: 'เถธเถเท เถเถญเทเถธ เทเทเถเถปเท' }, type: 1 }
                    ]
                    await Queen.sendButtonText(m.chat, buttons, jawab, Queen.user.name, m, {mentions: ments})
            }
            break
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(React)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//           
           case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                Queen.sendMessage(m.chat, reactionMessage)
            }
            break  
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(join/leave/setexif/kick/add)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//             
            case 'join': {
                await Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }}) 
                if (!isCreator) throw mess.owner
                if (!text) throw 'เถเถซเทเถฉเทเถบเถธเท เทเถถเทเถฏเทเถบเถเท เถเถญเทเถฝเถญเท เถเถปเถฑเทเถฑ.!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'เถฝเทเถฑเทเถเท เถเถ เทเถฝเถเถเท เถฑเทเถญ!'
                m.reply(mess.wait)
                await Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }}) 
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await Queen.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                await Queen.sendMessage(m.chat, { react: { text: `โ๏ธ`, key: m.key }}) 
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await Queen.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                await Queen.sendMessage(m.chat, { react: { text: `โ๏ธ`, key: m.key }}) 
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} เถเทเทเถปเทเถธเท เถฑเทเถธเถบ|เถเถปเทเถญเท`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif เทเทเถปเทเถฎเถเท เทเทเถฑเทเท เถเถป เถเถญ\n\nโค เถเทเทเถปเทเถธเท เถฑเทเถธเถบ : ${global.packname}\nโค เถเถปเทเถญเท : ${global.author}`)
           }
            break
    case 'kick': {
        if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        await Queen.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
        }
        break
    case 'add': {
        if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
        let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        await Queen.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
        }
    break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(promote/demote)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//     
    case 'promote': {
        if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        await Queen.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
    }
    break
    case 'demote': {
        if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        await Queen.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
    }
    break
    
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(block/unblock)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//     
        case 'block': {
if (!isCreator) throw global.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Queen.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'unblock': {
if (!isCreator) throw global.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Queen.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
    
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(setsubject/setdesc/setppbot/setppgroup)-->>>Queen MDโข โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//     
        case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text เถเถ เถเท?'
                await Queen.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text เถเถ เถเท?'
                await Queen.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!/image/.test(mime)) throw `Caption เถเถ เทเถธเถ เถปเทเถดเถบ เถบเทเถฑเทเถฑ/เถดเทเทเทเถญเทเถปเท เถฏเทเถฑเทเถฑ  ${prefix + command}`
                if (/webp/.test(mime)) throw `Caption เถเถ เทเถธเถ เถปเทเถดเถบ เถบเทเถฑเทเถฑ/เถดเทเทเทเถญเทเถปเท เถฏเทเถฑเทเถฑ  ${prefix + command}`
                let media = await Queen.downloadAndSaveMediaMessage(quoted)
                await Queen.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!/image/.test(mime)) throw `Caption เถเถ เทเถธเถ เถปเทเถดเถบ เถบเทเถฑเทเถฑ/เถดเทเทเทเถญเทเถปเท เถฏเทเถฑเทเถฑ  ${prefix + command}`
                if (/webp/.test(mime)) throw `Caption เถเถ เทเถธเถ เถปเทเถดเถบ เถบเทเถฑเทเถฑ/เถดเทเทเทเถญเทเถปเท เถฏเทเถฑเทเถฑ  ${prefix + command}`
                let media = await Queen.downloadAndSaveMediaMessage(quoted)
                await Queen.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
                
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(tagall/hidetag/totag)-->>>Queen MDโข โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//                 
            case 'tagall': case 'tag': {
   if (!m.isGroup) throw mess.group
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
let teks = ` 
 โโโโโโโโโโโโโ
 โ๐ง๐๐๐๐๐
 โโโโโโโโโโโโ
 โ*๐๐๐๐๐๐๐ : ${q ? q : 'เถฑเทเถญ'}*
 โโโโโโโโโ \n\n
`
 for (let mem of participants) {
   teks += `๐ช @${mem.id.split('@')[0]}\n`
   }
   Queen.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
   }
   break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            Queen.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
            case 'totag': {
               if (!m.isGroup) throw mess.group
               if (!isBotAdmins) throw mess.botAdmin
               if (!isAdmins) throw mess.admin
               if (!m.quoted) throw `Caption เถเถ เทเถธเถเทเถฑเท เถดเถซเทเทเทเถฉเถบเถง เถดเทเทเทเถญเทเถปเท เถฏเทเถฑเทเถฑ  ${prefix + command}`
               Queen.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
               
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(styletext)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//                
        case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) //เทเทเถธเทเท เถเทเทเถฑเท เทเท เทเทเถง เถดเทโเถปเถญเทเถ เทเถป เถฏเทเถเทเทเทเถธ
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'เทเทเถธเทเทเถธเท เถดเทเท เถเถญเทเทเถญเท เถเถปเถฑเทเถฑ!'
                let anu = await styletext(text)
                let teks = `เถธเทเทเทเถญเถป เถดเทเท เทเทเถญเทเถฑเท ${text}\n\n`
                for (let i of anu) {
                    teks += `โค *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
	    
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(vote)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|// 	    
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_เถธเทเถธ เถเถญเทเถถเทเท เถญเทเถธเถญเท เถกเถฑเทเถฏ(vote) เถเถญ!_\n\n*${prefix}deletevote* - เถกเถฑเทเถฏ เถธเถเท เถฏเทเถธเทเถธเถง`
            if (!text) throw `เถกเถฑเทเถฏเถบ เถดเทโเถปเถเทเท เถเทเถปเทเถธเถง เทเทเถญเทเท เถเถญเทเทเถญเท เถเถปเถฑเทเถฑ, เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท: *${prefix + command} Queen Bot เทเทเถธเทเถเถปเท*`
            m.reply(`เถกเถฑเทเถฏ เทเทเถธเทเทเถธ เถเถปเถธเทเถท เทเท!\n\n*${prefix}upvote* - เถธเถฑเทเถดเถบเท.\n*${prefix}devote* - เถธเถฑเทเถด เถฑเทเถญ.\n*${prefix}checkvote* - เถกเถฑเทเถฏเถบ เถดเถปเทเถเทเทเท เถเทเถปเทเถธเถง\n*${prefix}deletevote* - เถกเถฑเทเถฏ เถธเถเท เถฏเทเถธเทเถธเถง`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*ใ VOTE ใ*

*เทเทเถญเทเท:* ${vote[m.chat][0]}

โใ UPVOTE ใ
โ 
โ เทเถธเทเทเถญ: ${vote[m.chat][1].length}
โ
โ 
โโโโโ

โใ DEVOTE ใ
โ 
โ เทเถธเทเทเถญ: ${vote[m.chat][2].length}
โ
โ 
โโโโโ

*${prefix}deletevote* - เถกเถฑเทเถฏ เถธเถเท เถฏเทเถธเทเถธเถง`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '๐๐ฟ๐๐พ๐๐ด'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '๐ณ๐ด๐๐พ๐๐ด'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: Queen.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            Queen.sendMessage(m.chat, buttonMessageVote)
	    }
            break
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(upvote)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//             
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*เถธเทเถธ เถเถซเทเถฉเทเถบเถธเท เถกเถฑเทเถฏเถบ เถฑเทเถญ!*_\n\n*${prefix}vote* - เถกเถฑเทเถฏเถบ เถเถปเถธเทเถท เถเทเถปเทเถธเถง`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'เถเถถ เถกเถฑเทเถฏเถบ เถดเทโเถปเถเทเท เถเถป เถเถญ'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*ใ VOTE ใ*

*เทเทเถญเทเท:* ${vote[m.chat][0]}

โใ UPVOTE ใ
โ 
โ เทเถธเทเทเถญ: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `โ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
โ 
โโโโโ

โใ DEVOTE ใ
โ 
โ เทเถธเทเทเถญ: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `โ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
โ 
โโโโโ

*${prefix}deletevote* - เถกเถฑเทเถฏ เถธเถเท เถฏเทเถธเทเถธเถง`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '๐๐ฟ๐๐พ๐๐ด'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '๐ณ๐ด๐๐พ๐๐ด'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: Queen.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            Queen.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
             
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(devote)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//              
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*เถธเทเถธ เถเถซเทเถฉเทเถบเถธเท เถกเถฑเทเถฏเถบ เถฑเทเถญ!*_\n\n*${prefix}vote* - เถกเถฑเทเถฏเถบ เถเถปเถธเทเถท เถเทเถปเทเถธเถง`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'เถเถถ เถกเถฑเทเถฏเถบ เถดเทโเถปเถเทเท เถเถป เถเถญ'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*ใ VOTE ใ*

*เทเทเถญเทเท:* ${vote[m.chat][0]}

โใ UPVOTE ใ
โ 
โ เทเถธเทเทเถญ: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `โ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
โ 
โโโโโ

โใ DEVOTE ใ
โ 
โ เทเถธเทเทเถญ: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `โ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
โ 
โโโโโ

*${prefix}deletevote* - เถกเถฑเทเถฏ เถธเถเท เถฏเทเถธเทเถธเถง`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '๐๐ฟ๐๐พ๐๐ด'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '๐ณ๐ด๐๐พ๐๐ด'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: Queen.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            Queen.sendMessage(m.chat, buttonMessageDevote)
	}
            break
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(checkvote)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//             
                 
case 'checkvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*เถธเทเถธ เถเถซเทเถฉเทเถบเถธเท เถกเถฑเทเถฏเถบ เถฑเทเถญ!*_\n\n*${prefix}vote* - เถกเถฑเทเถฏเถบ เถเถปเถธเทเถท เถเทเถปเทเถธเถง`
teks_vote = `*ใ VOTE ใ*

*เทเทเถญเทเท:* ${vote[m.chat][0]}

โใ UPVOTE ใ
โ
โ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `โ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
โ
โโโโโ

โใ DEVOTE ใ
โ 
โ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `โ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
โ
โโโโโ

*${prefix}deletevote* - เถกเถฑเทเถฏ เถธเถเท เถฏเทเถธเทเถธเถง


ยฉ${Queen.user.id}
`
Queen.sendTextWithMentions(m.chat, teks_vote, m)
break

//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(deletevote)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|// 
        case 'deletevote': case'delvote': case 'deletevote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*เถธเทเถธ เถเถซเทเถฉเทเถบเถธเท เถกเถฑเทเถฏเถบ เถฑเทเถญ!*_\n\n*${prefix}vote* - เถกเถฑเทเถฏเถบ เถเถปเถธเทเถท เถเทเถปเทเถธเถง`
            delete vote[m.chat]
            m.reply('เถธเทเถธ เถเถซเทเถฉเทเถบเถธเท เถกเถฑเทเถฏ เทเทเทเทเถบ เทเทเถปเทเถฎเถเท เถธเถเถฑเทเถฑ')
	    }
            break
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(group)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//             
               case 'group': case 'grup': case 'Group': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await Queen.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`เถเถซเทเถฉเทเถบเถธ เทเทเถปเทเถฎเถเท เทเทเท เถฏเถธเถบเท`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await Queen.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`เถเถซเทเถฉเทเถบเถธ เทเทเถปเทเถฎเถเท เทเทเทเทเถญ เถเทเถปเทเถธ`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'เทเทเทเทเถญเถบเท' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'เทเทเถฑเทเถฑ' }, type: 1 }
                    ]
                    await Queen.sendButtonText(m.chat, buttons, `เถเถซเทเถฉเทเถบเถธเท เถธเทเถฏเทเถฝเทเถบ`, Queen.user.name, m)

             }
            }
            break
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(editinfo)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//             
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await Queen.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`เถเถซเทเถฉเทเถบเถธเท เถญเทเถปเถญเทเถปเท เทเถเทเทเถเถปเถซเถบ เถเทเถปเทเถธ เทเทเถปเทเถฎเถเท เทเทเทเทเถญ เถเถปเถฑ เถฝเถฏเท`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await Queen.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`เถเถซเทเถฉเทเถบเถธเท เถญเทเถปเถญเทเถปเท เทเถเทเทเถเถปเถซเถบ เถเทเถปเทเถธ เทเทเถปเทเถฎเถเท เทเทเถฑ เถฝเถฏเท`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'เทเทเทเทเถญเถบเท' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'เทเทเถฑเทเถฑ' }, type: 1 }
                    ]
                    await Queen.sendButtonText(m.chat, buttons, `เถญเทเถปเถญเทเถปเท เทเถเทเทเถเถปเถซเถบ เถเถปเถฑเทเถฑ`, Queen.user.name, m)

            }
            }
            break
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(antilink)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//             
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`เถเถฝเทเถฑเทเถธ เทเถเทโเถปเทเถบ เถเถป เถเถญ.`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink เทเถเทโเถปเทเถบ เถเถปเถฑ เถฝเถฏเท !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`เถเถฝเทเถฑเทเถธ เถเถเทโเถปเทเถบ เถเถป เถเถญ.`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink เถเถเทโเถปเทเถบ เถเถปเถฑ เถฝเถฏเท. !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'เถเทโเถปเทเถบเทเถญเทเถธเถเถบเท' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'เถเถเทโเถปเทเถบเถบเท' }, type: 1 }
                    ]
                    await Queen.sendButtonText(m.chat, buttons, `Antilink เถเถปเถเทเทเถฑ เถธเทเถฏเทเถฝเทเถบ`, Queen.user.name, m)
                }
             }
             break
             
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(mute)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//              
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`เถเถฝเทเถฑเทเถธ เทเถเทโเถปเทเถบ เถเถป เถเถญ.`)
                db.data.chats[m.chat].mute = true
                m.reply(`${Queen.user.name} เถธเทเถธ เถเถซเทเถฉเทเถบเถธ เถญเทเท เถฑเทเทเถฌ เถเถป เถเถญ !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`เถเถฝเทเถฑเทเถธ เถเถเทโเถปเทเถบ เถเถป เถเถญ.`)
                db.data.chats[m.chat].mute = false
                m.reply(`${Queen.user.name} เถธเทเถธ เทเถธเทเทเถบ เถญเทเท เถฑเทเทเถฌ เถเทเถปเทเถธ เถเทเถญเท เถเถป เถเถญ !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'เถเทโเถปเทเถบเทเถญเทเถธเถเถบเท' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'เถเถเทโเถปเทเถบเถบเท' }, type: 1 }
                    ]
                    await Queen.sendButtonText(m.chat, buttons, `เถถเทเถงเท เถฑเทเทเทเทเถถเทเถฏ เถเถปเถฑเทเถฑ`, Queen.user.name, m)
                }
             }
             break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(linkgroup)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//              
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await Queen.groupInviteCode(m.chat)
                Queen.sendText(m.chat, `*เถเถบเทเถง เถธเท Group เถเถเท เถฝเทเถฑเทเถเท เถเถ เถเถฑเถฏ?*\nเถธเทเถฑเทเถฑ Group เถฝเทเถฑเทเถเท เถเถ =\n\nhttps://chat.whatsapp.com/${response}\n\n ${groupMetadata.subject} : เถเถซเทเถฉเทเถบเถธเท เทเถถเทเถณเทเถบ`, m, { detectLink: true })
            }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(disappear)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//             
            case 'ephemeral': case 'disappear': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === '1') {
                    await Queen.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === '7') {
                    await Queen.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === '90') {
                    await Queen.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'off') {
                    await Queen.groupToggleEphemeral(m.chat, 0).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else {
                let sections = [
                {
                title: "Disappearing Massage เทเทเถเถฝเทเถดเถบ เทเทเถฑเทเท เถเถปเถฑเทเถฑ",
                rows: [
                {title: "Disappearing Massage 1 Day", rowId: `ephemeral 1`, description: `เถฏเทเถฑ 1 เถเท เทเถณเทเท เถเถซเทเถฉเทเถบเถธเท Disappearing Massage เทเถเทโเถปเทเถบ เถเถปเถฑเทเถฑ`},
                {title: "Disappearing Massage 7 Days", rowId: `ephemeral 7`, description: `เถฏเทเถฑ 7 เถเท เทเถณเทเท เถเถซเทเถฉเทเถบเถธเท Disappearing Massage เทเถเทโเถปเทเถบ เถเถปเถฑเทเถฑ`},
                {title: "Disappearing Massage 90 Days", rowId: `ephemeral 90`, description: `เถฏเทเถฑ 90 เถเท เทเถณเทเท เถเถซเทเถฉเทเถบเถธเท Disappearing Massage เทเถเทโเถปเทเถบ เถเถปเถฑเทเถฑ`},
                {title: "Disappearing Massage Off", rowId: `ephemeral off`, description: `เถธเทเถธ เถเถซเทเถฉเทเถบเถธเท Disappearing Massage เถเถเทโเถปเทเถบ เถเถปเถฑเทเถฑ`}
                ]
                },
                ]
                Queen.sendListMsg(m.chat, `เถเถปเทเถซเทเถเถป เถดเทเถญ Disappearing Massage เทเทเถเถฝเทเถด เถฝเทเถบเทเทเทเถญเทเท เถญเทเถปเถฑเทเถฑ !`, Queen.user.name, `เถเถบเทเถถเทเทเถฑเท เถดเถปเทเถดเทเถฝเถ  ${groupMetadata.subject}`, `เถธเทเถญเถฑ เถเทเถฝเทเถเท เถเถปเถฑเทเถฑ`, sections, m)
                }
            }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(setbotname)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
            case 'setbotname': {
            if (!text) throw `เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} Queen MD โ`
            let name = await Queen.updateProfileName(text)
            m.reply(`${name} เถฝเทเท เทเทเถปเทเถฎเถเท เถฑเทเทเถญ เถฑเถธเท เถเถปเถฑ เถฝเถฏเท`)
            }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(setbotbio)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
            case 'setstatus': case 'setbiobot': case 'setbotbio': {
            if (!text) throw `เถธเถธ Queen-MD เทเถงเทเทเทเถเถดเท เถปเทเถถเท เถเทเถฑเทเถเท..`
            let name = await Queen.updateProfileStatus(text)
            m.reply(`${name} เถฝเทเท เทเทเถปเทเถฎเถเท เทเทเถฑเทเท เถเถปเถฑ เถฝเถฏเท`)
            }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(anticall)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//             
            case 'anticall': {
            if (!isCreator) throw mess.owner
                let ciko = db.data.settings[botNumber].anticall
                if (args[0] === "on") {
                if (ciko) return m.reply(`เถเถฝเทเถฑเทเถธ เทเถเทโเถปเทเถบ เถเถป เถเถญ.`)
                ciko = true
                m.reply(`AntiCall เทเถเทโเถปเทเถบ เถเถปเถฑ เถฝเถฏเท !`)
                } else if (args[0] === "off") {
                if (!ciko) return m.reply(`เถเถฝเทเถฑเทเถธ เถเถเทโเถปเทเถบ เถเถป เถเถญ.`)
                ciko = false
                m.reply(`เถเถเทโเถปเทเถบ เถเถปเถฑ เถฝเถฏเท !`)
                } else {
                 let buttons = [
                        { buttonId: 'anticall on', buttonText: { displayText: 'เถเทโเถปเทเถบเทเถญเทเถธเถเถบเท' }, type: 1 },
                        { buttonId: 'anticall off', buttonText: { displayText: 'เถเทโเถปเทเถบเทเทเทเถปเทเทเถญเถบเท' }, type: 1 }
                    ]
                    await Queen.sendButtonText(m.chat, buttons, `AntiCall เถธเทเถฏเทเถฝเทเถบ`, Queen.user.name, m)
                }
             }
             break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(del/delete)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//             
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'เถดเถซเทเทเทเถฉเถบ เถเทเทเทเท เถถเทเถงเท เถฑเทเทเท!'
                Queen.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(report)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
            case 'report': {
                if (!text) throw `เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} เถฏเทเท เทเทเทเทเทเทเถเถเถบเถเท เทเทเถปเทเถญเท เถเถปเถฑเทเถฑ`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `เถดเถซเทเทเทเถฉเถบ : @${me.split('@')[0]} \nเทเถฏเทเท : @${ownernya.split('@')[0]}\n\n${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '๐เถฏเทเทเถบ เทเทเถปเทเถญเท เถเถฝเทเถง เทเทเถญเทเถญเทเถบเท' }, type: 1 }]
            await Queen.sendButtonText('94775200935@s.whatsapp.net', buttons, pjtxt, ripo, m, {mentions: ments})
            let akhji = `เทเทเถปเทเถญเทเท เถบเทเถฑ เถฝเถฏเท\nเถธเถธ เถเถบเทเถญเทเถเถปเท @${ownernya.split('@')[0]}\n*๐เถฏเทเทเถบ เทเทเถปเทเถญเท เถเถฝเทเถง เทเทเถญเทเถญเทเถบเท๐*\n_เถเถถเถเท เถเถเถเถบ เถเทเทเทเถป เถเถปเถฑเท เถฝเทเถถเท_\n_เทเทเถปเทเถญเทเท เถฑเทเถปเทเถธเทเถซเถบ เถเถปเถฑเทเถฑเท เถฑเถธเท เถดเถธเถซเท_`
            await Queen.sendButtonText(m.chat, buttons, akhji, ripo, m, {mentions: ments})
            }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(Reaction emojy line)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
            case 'hehehe': {
                reactionMessage = {
                    react: {
                        text: 'โค',
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                Queen.sendMessage(m.chat, reactionMessage)
            }
            break  
            break
            case 'ok': {
                reactionMessage = {
                    react: {
                        text: '๐๐ป๏ธ',
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                Queen.sendMessage(m.chat, reactionMessage)
                Queen.sendMessage(m.chat, { react: { text: `๐ฅบ๏ธ`, key: m.key }})
            }
            break  
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(covid)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//             
            case 'covid':
    const c = await covid()
var { kasus, kematian, sembuh } = c[0]
Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }})
m.reply(`Case : ${kasus}\n\nDead : ${kematian}\n\nHealed : ${sembuh}`)
break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(React)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//    
    case 'react': {
                if (!isCreator) throw mess.owner
                    reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                Queen.sendMessage(m.chat, reactionMessage)
            }
            break  
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(bcgc/bcgroup)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text เถเถ เถเท?\n\nเถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} Queen-MD Support`
                let getGroups = await Queen.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`${anu.length} Group Chat เทเทเถญ เทเทเถเทเทเถฑเถบ เถบเทเถฑเทเถฑ, เถเทเถฝเถบ เถเทเทเถฑเท ${anu.length * 1.5} เถญเถญเทเถดเถป`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Queen Bot Source Code',
                                    url: 'https://github.com/DarkWinzo/Queen-MD'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Owner Phone Number',
                                    phoneNumber: '+94775200935'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Queen Bot Status',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      let txt = `ใ Broadcast Bot ใ\n\n${text}`
                      Queen.send5ButImg(i, txt, Queen.user.name, global.thumb, btn)
                    }
                m.reply(`${anu.length} Group เถเถ เทเทเถญ เทเทเถปเทเถฎเถเท เทเทเถเทเทเถฑเถบ เถบเทเทเทเถธ`)
            }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(broadcast)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text เถเถ เถเท?\n\nเถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`${anu.length} Chat เถเถ เทเทเถญ เทเทเถเทเทเถฑเถบ เถบเทเถฑเทเถฑ\nเถเทเถฝเถบ เถเทเทเถฑเท ${anu.length * 1.5} เถญเถญเทเถดเถป`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Queen Bot Source Code',
                                    url: 'https://github.com/DarkWinzo/Queen-MD'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Owner Phone Number',
                                    phoneNumber: '+94775200935'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Queen Bot Status',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      let txt = `ใ Broadcast Bot ใ\n\n${text}`
                      Queen.send5ButImg(yoi, txt, Queen.user.name, global.thumb, btn)
		}
		m.reply('เทเทเถเทเทเถฑเถบ เทเทเถปเทเถฎเถเถบเท')
            }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(infochat)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
              case 'chatinfo': {
   if (!m.quoted) m.reply('*Reply to mesaage๐*')
   let msg = await m.getQuotedObj()
   if (!m.quoted.isBaileys) throw '*เถดเถซเทเทเทเถฉเถบ เถบเทเทเทเทเท Queen เถถเทเถงเท เถฑเทเทเท๐ฅ*'
   let teks = ''
   for (let i of msg.userReceipt) {
  let read = i.readTimestamp
  let unread = i.receiptTimestamp
  let waktu = read ? read : unread
  teks += `๐ช @${i.userJid.split('@')[0]}\n`
  teks += `๐ช *๐ง๐๐ ๐ :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ๐ช *๐ฆ๐ง๐๐ง๐จ๐ฆ :* ${read ? 'Read' : 'Unread'}\n\n`
   }
   Queen.sendTextWithMentions(m.chat, teks, m)
 }
 break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(tools menu)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//     
case 'ipdomain':
    m.reply(mess.wait)
    const driphacker = {
      method: 'GET',
      url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
      qs: {ip: `${text}`, apikey: '873dbe322aea47f89dcf729dcc8f60e8'},
      headers: {
        'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
        'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com',
        useQueryString: true
      }
    };
    let mhamha = require('request')
    mhamha(driphacker, function (error, response, body) {
      if (error) throw new Error(error);
       m.reply(body);
      console.log(body);
    });
    break
    case 'ip':
      m.reply(mess.wait)
      const dripsba = {
        method: 'GET',
        url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
        qs: {apikey: '873dbe322aea47f89dcf729dcc8f60e8'},
        headers: {
          'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
          'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com',
          useQueryString: true
        }
      };
      let bhudhi = require('request')
      bhudhi(dripsba, function (error, response, body) {
        if (error) throw new Error(error);
        m.reply(body);
        console.log(body);
      });
break
case 'checknumber':
  m.reply(mess.wait)
  const dripska = {
    method: 'GET',
    url: 'https://phonenumbervalidatefree.p.rapidapi.com/ts_PhoneNumberValidateTest.jsp',
    qs: {number: `${text}`},
    headers: {
      'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
      'X-RapidAPI-Host': 'phonenumbervalidatefree.p.rapidapi.com',
      useQueryString: true
    }
  };
  let dhidhi = require('request')
  dhidhi(dripska, function (error, response, body) {
    if (error) throw new Error(error);
    m.reply(body);
    console.log(body);
  });
break
case 'veriphone':
  m.reply(mess.wait)
  const dripdrop = {
    method: 'GET',
    url: 'https://veriphone.p.rapidapi.com/verify',
    qs: {phone: `${text}`},
    headers: {
      'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
      'X-RapidAPI-Host': 'veriphone.p.rapidapi.com',
      useQueryString: true
    }
  };
  let mhati = require('request')
  mhati(dripdrop, function (error, response, body) {
    if (error) throw new Error(error);
    m.reply(body);
    console.log(body);
  });
  break    
  
  case 'shortlink': {
 m.reply(mess.wait)
 try {
 anu = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`)
 m.reply(`${anu.data}`)
 } catch (e) {//https://leyscoders-api.herokuapp.com/api/cuttly?url=https://google.com&apikey=Your_key
 emror = String(e)
 m.reply(`${e}`)
 }
}
break
case 'shortlinkcuttly': {
  m.reply(mess.wait)
  try {
  anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cuttly?url=${text}&apikey=IkyOgiwara`)
  hoo = anu.result.title
  bhoo = anu.result.hasil

  m.reply(`*TITLE:* ${hoo}\n*RESULT:* ${bhoo}`)
  } catch (e) {//https://leyscoders-api.herokuapp.com/api/cuttly?url=https://google.com&apikey=Your_key
  emror = String(e)
  m.reply(`${e}`)
  }
 }
break
case 'shortlinkisgd': {
  m.reply(mess.wait)
  try {
  anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/shrturl?url=${text}&apikey=IkyOgiwara`)
  hoo = anu.result

  m.reply(`*RESULT:* ${hoo}`)
  } catch (e) {//https://leyscoders-api.herokuapp.com/api/cuttly?url=https://google.com&apikey=Your_key
  emror = String(e)
  m.reply(`${e}`)
  }
 }
break

case 'brainly': {
m.reply(mess.wait)
if (!text) throw `Example : ${prefix + command} What is Love`           
x = await fetchJson(`https://api.violetics.pw/api/media/brainly?apikey=beta&query=${text}`)                       
ini_txt = '*BRAINLY SEARCH*\n\n'
for (let i of x.result) {       
ini_txt += `*QUESTION* : ${i.pertanyaan}\n`
ini_txt += `*ANSWER* : ${i.jawaban}\n`                     
}   
m.reply(`${ini_txt}`)
}
break

case 'ssweb-hp': {
  if(args.length < 1) return m.reply(`Url link`)
  anu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/ssweb-hp?url=${text}&apikey=IkyOgiwara`)
let buttons = [
                  {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
              ]
              let buttonMessage = {
                  image: anu ,
                  caption: `*SSWEB URL ( HP )* `,
                  footer: `แดแดแดกแดสแดแด สส Qแดแดแดษด-แดแด`,
                  buttons: buttons,
                  headerType: 4
              }
              Queen.sendMessage(m.chat, buttonMessage, { quoted: m })
              }
break
case 'ssweb-pc': {
  if(args.length < 1) return m.reply(`Url link`)
  anu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/ssweb-pc?url=${text}&apikey=IkyOgiwara`)
let buttons = [
                  {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
              ]
              let buttonMessage = {
                  image: anu ,
                  caption: `*SSWEB URL ( PC )* `,
                  footer: `แดแดแดกแดสแดแด สส Qแดแดแดษด-แดแด`,
                  buttons: buttons,
                  headerType: 4
              }
              Queen.sendMessage(m.chat, buttonMessage, { quoted: m })
              }             
break       
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(q/quoted)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('เถดเทเทเทเถญเทเถปเท เถดเถซเทเทเทเถฉเถบ!!')
		let wokwol = await Queen.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('เถเถถ เถดเทเทเทเถญเทเถปเท เถฏเทเถฑเท เถดเถซเทเทเทเถฉเถบเท เถดเทเทเทเถญเทเถปเถเท เถเถฉเถเถเท เถฑเทเทเท')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(listpc)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//	  
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `โฌฃ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `โฌก *เถฑเถธ :* ${nama}\nโฌก *เถดเถปเทเทเทเถฝเถเถบเท :* @${i.split('@')[0]}\nโฌก *Chat :* https://wa.me/${i.split('@')[0]}\n\nโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโท\n\n`
                 }
                 Queen.sendTextWithMentions(m.chat, teks, m)
             }
             break
 //|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(listgc)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//             
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `โฌฃ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await Queen.groupMetadata(i)
                     teks += `โฌก *เถฑเถธ :* ${metadata.subject}\nโฌก *เทเทเถธเทเถเถปเท :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'เถฑเทเถฏเถฑเท'}\nโฌก *ID :* ${metadata.id}\nโฌก *เทเทเถฏเถฑ เถฝเถฏเทเถฏเท :* ${moment(metadata.creation * 1000).tz('Asia/Colombo').format('DD/MM/YYYY HH:mm:ss')}\nโฌก *เทเทเถธเทเถขเทเถเถบเถฑเท :* ${metadata.participants.length}\n\nโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโท\n\n`
                 }
                 Queen.sendTextWithMentions(m.chat, teks, m)
             }
             break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(listonline)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//             
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    Queen.sendText(m.chat, 'List Online:\n\n' + online.map(v => 'โค @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(s/sticker)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//             
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
           if (/image/.test(mime)) {
           m.reply(mess.wait)
                let media = await quoted.download()
                let encmedia = await Queen.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
            m.reply(mess.wait)
                if (qmsg.seconds > 11) return m.reply('เถเถดเถปเทเถธ เถญเถญเทเถดเถป 10 เถบเท!')
                let media = await Queen.downloadMediaMessage(qmsg)
                let encmedia = await Queen.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                m.reply(`Caption เถเถ เทเถธเถ เถปเทเถดเถบ/เทเทเถฉเทเถบเทเท/gif เถบเทเถฑเทเถฑ เทเท เถดเทเทเทเถญเทเถปเท เถฏเทเถฑเทเถฑ ${prefix + command}\n(เทเทเถฉเทเถบเท/Gif เถเทเถฝเถบ เถญเถญเทเถดเถป 1-9)`)
                }
            }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(stickerwm)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
            case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) throw `Caption เถเถ เทเถธเถ เถปเทเถดเถบ/เทเทเถฉเทเถบเทเท เถบเทเถฑเทเถฑ เทเท เถดเทเทเทเถญเทเถปเท เถฏเทเถฑเทเถฑ  ${prefix + command} text 1|text 2`
                if (!teks2) throw `Caption เถเถ เทเถธเถ เถปเทเถดเถบ/เทเทเถฉเทเถบเทเท เถบเทเถฑเทเถฑ เทเท เถดเทเทเทเถญเทเถปเท เถฏเทเถฑเทเถฑ  ${prefix + command} text 1|text 2`
            	m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await Queen.downloadMediaMessage(qmsg)
                    let encmedia = await Queen.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('เถเถดเถปเทเถธ เถญเถญเทเถดเถป 10เถเท เถดเถธเถซเถบเท!')
                    let media = await Queen.downloadMediaMessage(qmsg)
                    let encmedia = await Queen.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Caption เถเถ เทเถธเถ เถปเทเถดเถบ/เทเทเถฉเทเถบเทเท เถบเทเถฑเทเถฑ ${prefix + command}\nเทเทเถฉเทเถบเท เถเทเถฝ เทเทเถธเทเท เถญเถญเทเถดเถป 1-9`
                }
            }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(ebinary)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
            case 'ebinary': {
            await Queen.sendMessage(m.chat, { react: { text: `๐งฎ๏ธ`, key: m.key }})
            if (!text) throw `เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
            }
        break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(dbinary)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//        
            case 'dbinary': {
            await Queen.sendMessage(m.chat, { react: { text: `๐งฎ๏ธ`, key: m.key }})
            if (!text) throw `เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
            }
        break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(emojimix)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//        
            case 'emojimix': {
                await Queen.sendMessage(m.chat, { react: { text: `โ๏ธ`, key: m.key }})
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} ๐+๐ค`
		if (!emoji2) throw `เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} ๐+๐ค`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await Queen.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		    await Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }})
		}
	    }
	    break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(emojimix2)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//	    
	    case 'emojimix2': {
	    if (!text) throw `เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} ๐`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await Queen.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(attp)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//	    
           case 'attp': case 'ttp': {
           if (!text) throw `เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} text`
           await Queen.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'Queen', 'DarkWinzo', m, {asSticker: true})

         }
         break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(stickermeme)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//         
           case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	        let respond = `Caption เถเถ เทเถธเถ เถปเทเถดเถบ/stiker เถเถ เถบเทเถฑเทเถฑ  ${prefix + command} text 1|text 2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await Queen.downloadMediaMessage(qmsg)
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await Queen.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break    
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(simisimi)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//	        
	        case 'simih': case 'simisimi': {
            if (!text) throw `เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} text`
            hm = await fetchJson(api('zenz', '/api/simisimi', { text : text }, 'apikey'))
            m.reply(hm.result.message)
            }
            break
   
    case 'alive': case 'Alive': {
            await Queen.sendMessage(m.chat, { react: { text: `๐ฅบ๏ธ`, key: m.key }})
              if (m.isGroup)
             Queenpic ='https://i.ibb.co/jZkzpw2/Queen.jpg'
            const scc = `เทเทเถบเท..๐๏ธ เถเถบเท เถธเทเท เทเทเทเทเทเถฏ?๐ฅฐ๏ธ เถธเถฑเท เถเถฑเทเถฝเถบเทเถฑเท เถเถฑเทเถฑเทเท เถเถฑเท ๐คญ๏ธ'
`
     
         let butRun = [
                {buttonId: `ok`, buttonText: {displayText: 'Ok'}, type: 1} ,
                {buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
                ]      
                let buttonMessage = {
                    image:fs.readFileSync('./src/Media/Image/Alive.png'),ImagePlayback:true,
                    caption: scc,
                    footer: `Qแดแดแดษด-แดแด สแดแด`,
                    buttons: butRun,
                    headerType: 4
                }
            Queen.sendMessage(m.chat,buttonMessage,{quoted:m})
            await Queen.sendMessage(m.chat, { react: { text: `๐คญ๏ธ`, key: m.key }})
                }
            break       
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(toimage)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
            case 'toimage': case 'toimg': {
                if (!/webp/.test(mime)) throw `Caption เถเถ เทเถธเถ Reply stiker เถเถ เถบเทเถฑเทเถฑ *${prefix + command}*`
                m.reply(mess.wait)
                let media = await Queen.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    Queen.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(tomp4/tovideo)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
            case 'tomp4': case 'tovideo': {
                if (!/webp/.test(mime)) throw `Caption เถเถ เทเถธเถ Reply stiker เถเถ เถบเทเถฑเทเถฑ *${prefix + command}*`
                m.reply(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await Queen.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await Queen.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'โป๏ธWebp เทเทเถฉเทเถบเท เถถเทเถง เถดเถปเทเทเถปเทเถญเถฑเถบโป๏ธ' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(toaudio)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `เถเถถเถง เทเทโเถปเทเทโเถบ(Audio) เถฝเทเท เถทเทเทเทเถญเท เถเทเถปเทเถธเถง เถเทเทเทโเถบ Video/Audio เถบเทเถฑเทเถฑ/เถดเทเทเทเถญเทเถปเท เถฏเทเถฑเทเถฑ. ${prefix + command}`
            m.reply(mess.wait)
            let media = await Queen.downloadMediaMessage(qmsg)
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            Queen.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(tomp3)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
            case 'tomp3': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `เถเถถเถง MP3 เถถเทเถง เถดเถปเทเทเถปเทเถญเถฑเถบ เถเทเถปเทเถธเถง เถเทเทเทโเถบ เทเทเถฉเทเถบเท/เทเทโเถปเทเทโเถบ(Audio) เถบเทเถฑเทเถฑ/เถดเทเทเทเถญเทเถปเท เถฏเทเถฑเทเถฑ. ${prefix + command}`
            m.reply(mess.wait)
            let media = await Queen.downloadMediaMessage(qmsg)
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            Queen.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${Queen.user.name}.mp3`}, { quoted : m })
            }
            break
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(tovn)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `เถเถถเถง VN เถถเทเถง เถดเถปเทเทเถปเทเถญเถฑเถบ เถเทเถปเทเถธเถง เถเทเทเทโเถบ เทเทเถฉเทเถบเทเท/Audio เถเถ Caption เถเถ เทเถธเถ เถดเทเทเทเถญเทเถปเท เถฏเทเถฑเทเถฑ. ${prefix + command}`
            m.reply(mess.wait)
            let media = await Queen.downloadMediaMessage(qmsg)
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            Queen.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(togif)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//           
            case 'togif': {
                if (!/webp/.test(mime)) throw `Caption เทเทเทเถญ เถดเทเทเทเถญเทเถปเท เทเทเถงเทเถเถปเถบ *${prefix + command}*`
                m.reply(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await Queen.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await Queen.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'โป๏ธWebp เทเทเถฉเทเถบเท เถถเทเถง เถดเถปเทเทเถปเทเถญเถฑเถบโป๏ธ' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
                await Queen.sendMessage(m.chat, { react: { text: `โ๏ธ`, key: m.key }})
            }
            break
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(tourl)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
            case 'tourl': {
                m.reply(mess.wait)
        let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await Queen.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
 //|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(removebg)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//           
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!/image/.test(mime)) throw `Caption เถเถ เถปเทเถดเถบ เถบเทเถฑเทเถฑ/เถดเทเทเทเถญเทเถปเท เถฏเทเถฑเทเถฑ. ${prefix + command}`
	    if (/webp/.test(mime)) throw `Caption เถเถ เถปเทเถดเถบ เถบเทเถฑเทเถฑ/เถดเทเทเทเถญเทเถปเท เถฏเทเถฑเทเถฑ. ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await Queen.downloadAndSaveMediaMessage(qmsg, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    Queen.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(ytsearch)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//	    
        case 'yts': case 'ytsearch': {
                if (!text) throw `เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} DarkWinzo`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `โค No : ${no++}\nโค Type : ${i.type}\nโค Video ID : ${i.videoId}\nโค Title : ${i.title}\nโค Views : ${i.views}\nโค Duration : ${i.timestamp}\nโค Upload At : ${i.ago}\nโค Author : ${i.author.name}\nโค Url : ${i.url}\n\nโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโ\n\n`
                }
                Queen.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
            
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(weather)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
            case 'weather':
   await Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }})         
  if (!args[0]) throw " เถเถปเทเถซเทเถเถป เทเทเถฎเทเถฑเถบเถ เทเท เทเทเถฎเทเถฑเถบเท เถฑเถธ เถฝเถถเท เถฏเทเถฑเทเถฑ"
  try {
    const response = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`
    )
    const res = await response
    const name = res.data.name
    const Country = res.data.sys.country
    const Weather = res.data.weather[0].description
    const Temperature = res.data.main.temp + "ยฐC"
    const Minimum_Temperature = res.data.main.temp_min + "ยฐC"
    const Maximum_Temperature = res.data.main.temp_max + "ยฐC"
    const Humidity = res.data.main.humidity + "%"
    const Wind = res.data.wind.speed + "km/h"
    const wea = `*๐PLACE:* ${name}\n*COUNTRY:* ${Country}\n*WEATHER:* ${Weather}\n*TEMPERATURE:* ${Temperature}\nMINIMUM TEMPERATURE: ${Minimum_Temperature}\n*๐MAX TEMPERATURE:* ${Maximum_Temperature}\n*HUMIDITY:* ${Humidity}\n*WIND:* ${Wind}
  `

    m.reply(wea)
  } catch (e) {
    return "เถฏเทเทเถบเถเท เทเถง เถเทเถฑเทเถซเท..เถ เถฑเทเทเท เทเทเถฎเทเถฑเถบ เทเถธเท เถฑเทเทเทเถบ!!!"
  }
  await Queen.sendMessage(m.chat, { react: { text: `๐ก๏ธ`, key: m.key }})
break

//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(update/update now)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//
      case 'update':

  await git.fetch();
  var commits = await git.log(['main' + '..origin/' + 'main']);
  if (commits.total === 0) return m.reply("You have already installed the latest version ")
  let update = ""
  commits["all"].map((commit) => {
    update += `${' โข '}*${
      commit.message
    }* by ${commit.author_name} *[${commit.date.substring(0, 10)}]* \n`
  })
  var changelog = "*New updates:*\n\n" + update;
 
 let buttonsUpdate = [
  {buttonId: `${prefix}updatenow`, buttonText: {displayText: 'Start Updating๐'}, type: 1}
]

 let buttonMessageUpdate = {
   text: changelog,
   footer: `Updates Available`,
   buttons: buttonsUpdate,
   headerType: 1
 }
 Queen.sendMessage(m.chat, buttonMessageUpdate)
   
break
case 'updatenow':
  
    const heroku = new Heroku({ token: process.env.HEROKU_API_KEY })
  await git.fetch();
      var commits = await git.log(['main' + '..origin/' + 'main'])
  if (commits.total === 0) { Queen.sendMessage(m.chat, { text:"_Latest version has been already installed_"})  } else {

        await Queen.sendMessage(m.chat, {text: "_Started Updating_"})
       if (true) {
            try {
                var app = await heroku.get('/apps/' + Config.HEROKU_APP_NAME)
            } catch (e) {
		await Queen.sendMessage(m.chat, { text : `${e}` }) 
                await Queen.sendMessage(m.chat, { text:"*Heroku app name/api key wrong*"})
                await new Promise(r => setTimeout(r, 1000));
                return await Queen.sendMessage(m.chat, { text:"*Heroku app name/api key wrong*"})
            }

        
            git.fetch('upstream', 'main');
            git.reset('hard', ['FETCH_HEAD']);
            
            var git_url = app.git_url.replace(
                "https://", "https://api:" + global.herokuapi + "@"
            )

            try {
                await git.addRemote('heroku', git_url);
            } catch { 
              console.log('heroku remote ekli');
                     git.push('heroku', 'main')

                    }
            await git.push('heroku', 'main');

                await Queen.sendMessage(m.chat, {text:"_เทเทเถปเทเถฎเถเท เถบเทเทเถญเทเถเทเถฝเทเถฑ เถเถปเถฑ เถฝเถฏเท โ_"})

        } else {
            git.pull((async (err, update) => {
                if(update && update.summary.changes) {
                    await Queen.sendMessage(m.chat, {text:"_Finished build! Restarting.._"})
                    exec('npm install').stderr.pipe(process.stderr);
                } else if (err) {
                    await console.log('*โ เถบเทเทเถญเทเถเทเถฝเทเถฑ เถเทเถปเทเถธ เถเทเทเถปเทเถฎเถ เทเทเถบ!*\n*Even:* ```' + err + '```')
                }
            }));
                                                                          }
     }

break

//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(google)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
        case 'google': {
                if (!text) throw `เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} Queen-MD`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `โค *Title* : ${g.title}\n`
                teks += `โค *Description* : ${g.snippet}\n`
                teks += `โค *Link* : ${g.link}\n\nโโโโโโโโโโโโโโโโโโโโโโโโ\n\n`
                } 
                m.reply(teks)
                })
                }
                break
                
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(image/Googleimage)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//                
                 case 'image':case 'gimage': case 'googleimage': {
                 await Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }})
                 m.reply(mess.wait)
                 if (!text) throw `เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} Flower`
                 let gis = require('g-i-s')
                 gis(text, async (error, result) => {
                 n = result
                 images = n[Math.floor(Math.random() * n.length)].url
                 let buttons = [
                 {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                  ]
                 let buttonMessage = {
                 image: { url: images },
                 caption: `โฐ ๐๐ข๐ข๐๐๐ ๐๐ ๐๐๐ โฑ
                 *๐ค๐จ๐๐ฅ๐ฌ* : ${text}
                 *๐ ๐๐๐๐ ๐จ๐ฅ๐* : ${images}`,
                 footer: "แดแดแดกแดสแดแด สส Qแดแดแดษด-แดแด",
                 buttons: buttons,
                 headerType: 4
                 }
                 Queen.sendMessage(m.chat, buttonMessage, { quoted: m })
                 })
                 await Queen.sendMessage(m.chat, { react: { text: `๐ธ๏ธ`, key: m.key }})
                 }
                 break

//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(Qr)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//
case 'qr': case 'qrcode':
                await Queen.sendMessage(m.chat, { react: { text: `โ ๏ธ`, key: m.key }})
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                m.reply(`Repl เถฐเทเทเถฑเถบ เถเถปเถธเทเถฑเท....เถดเทโเถปเถญเทเถ เทเถป เถฏเถเทเทเถฑ เถญเทเถเท เถเถปเทเถซเทเถเถป เถปเทเถณเท เทเทเถงเทเถฑเทเถฑ...`)						
                var replqr =  await getBuffer(`https://queen-md-qr--darkwinzo.repl.co/`)
                               var qrbutton = [
                                   {buttonId: `.qr`, buttonText: {displayText: `Repl เถฑเทเทเถญ เถฐเทเทเถฑเถบ เถเถปเถฑเทเถฑ`}, type: 1}
            ]
               let bmffg = {
                   image: replqr,
                   caption:  `เถญเถญเทเถดเถป 10-15เถเท เถเถญเทเทเถญ qr เถเถ เทเทเถเทเถฑเท เถเถปเถฑเทเถฑ...`,
                   footer: `${global.BotName}`,
                   buttons: qrbutton,
                   headerType: 4
          }     
                await Queen.sendMessage(m.chat, bmffg,{ quoted:m }).catch(err => {
                        return('Error!')
                    })
                    await Queen.sendMessage(m.chat, { react: { text: `๐ฑ๏ธ`, key: m.key }})
    break
    
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(Play)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//    
        case 'play': case 'ytplay': {
        await Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }})
                if (!text) throw `เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} Mandaram Kathawe Song`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '๐ง๏ธ Audio ๐ง๏ธ'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '๐ฌ๏ธ Video ๐ฌ๏ธ'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
โค Title : ${anu.title}
โค Ext : Search
โค ID : ${anu.videoId}
โค Duration : ${anu.timestamp}
โค Viewers : ${anu.views}
โค Upload At : ${anu.ago}
โค Author : ${anu.author.name}
โค Channel : ${anu.author.url}
โค Description : ${anu.description}
โค Url : ${anu.url}`,
                    footer: Queen.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Queen.sendMessage(m.chat, buttonMessage, { quoted: m })
                await Queen.sendMessage(m.chat, { react: { text: `๐ง๏ธ`, key: m.key }})
            }
            break
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(ytmp3/ytaudio)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
        case 'ytmp3': case 'ytaudio': {
                await Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }})
                let { yta } = require('./lib/y2mate')
                if (!text) throw `เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} https://youtube.com 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                Queen.sendImage(m.chat, media.thumb, `โค Title : ${media.title}\nโค File Size : ${media.filesizeF}\nโค Url : ${isUrl(text)}\nโค Ext : MP3\nโค Resolusi : ${args[1] || '128kbps'}`, m)
                Queen.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                await Queen.sendMessage(m.chat, { react: { text: `๐ง๏ธ`, key: m.key }})
            }
            break
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(ytmp4/ytvideo)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} https://youtube.com 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('เทเทเถธเทเทเถง เทเถฉเท เถเทเถฑเท เถเถปเถฑเทเถฑ '+util.format(media))
                Queen.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `โค Title : ${media.title}\nโค File Size : ${media.filesizeF}\nโค Url : ${isUrl(text)}\nโค Ext : MP3\nโค Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(getmusic)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
        case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} 1`
                if (!m.quoted) return m.reply('เถดเทเทเทเถญเทเถปเท เถดเถซเทเทเทเถฉเถบ')
                if (!m.quoted.isBaileys) throw `เถถเทเถงเท เทเทเถญเทเถฑเท เถฝเทเถถเทเถฑ เถดเถซเทเทเทเถฉ เทเถฝเถง เถดเถธเถซเถเท เถดเทเทเทเถญเทเถปเท เถฏเทเถบ เทเทเถ`
        let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `เทเถธเทเถป เทเทเถง เถเถถ เถดเทเทเทเถญเทเถปเท เถฏเทเถฑเท เถดเถซเทเทเทเถฉเถบเท ytsearch เถดเทโเถปเถญเทเถตเถฝเถบ เถเถฉเถเถเท เถฑเทเทเทเถบ เทเทเถเทเถบ`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('เทเทเถธเทเทเถง เทเถฉเท เถเทเถฑเท เถเถปเถฑเทเถฑ '+util.format(media))
                Queen.sendImage(m.chat, media.thumb, `โค Title : ${media.title}\nโค File Size : ${media.filesizeF}\nโค Url : ${urls[text - 1]}\nโค Ext : MP3\nโค Resolusi : ${args[1] || '128kbps'}`, m)
                Queen.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(getvideo)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//           
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} 1`
                if (!m.quoted) return m.reply('เถดเทเทเทเถญเทเถปเท เถดเถซเทเทเทเถฉเถบ')
                if (!m.quoted.isBaileys) throw `เถถเทเถงเท  เทเทเถญเทเถฑเท เถฝเทเถถเทเถฑ เถดเถซเทเทเทเถฉ เทเถฝเถง เถดเถธเถซเถเท เถดเทเทเทเถญเทเถปเท เถฏเทเถบ เทเทเถ`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `เทเถธเทเถป เทเทเถง เถเถถ เถดเทเทเทเถญเทเถปเท เถฏเทเถฑเท เถดเถซเทเทเทเถฉเถบเท ytsearch เถดเทโเถปเถญเทเถตเถฝเถบ เถเถฉเถเถเท เถฑเทเทเทเถบ เทเทเถเทเถบ`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('เทเทเถธเทเทเถง เทเถฉเท เถเทเถฑเท เถเถปเถฑเทเถฑ '+util.format(media))
                Queen.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `โค Title : ${media.title}\nโค File Size : ${media.filesizeF}\nโค Url : ${urls[text - 1]}\nโค Ext : MP3\nโค Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break

//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(pinterest)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//           
            case 'pinterest': {
                m.reply(mess.wait)
        if (!text) throw `เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} text`
            hm = await fetchJson(`https://saipulanuar.herokuapp.com/api/pinterest?query=${text}&apikey=${bear}`)
              pepe = hm.url_download
                Queen.sendMessage(m.chat, { image: { url: pepe }, caption: 'โค Media Url : '+pepe }, { quoted: m })
            }
            break
            case 'waifu': {
                m.reply(mess.wait)
                anu = await fetchJson(`https://waifu.pics/api/sfw/waifu`)
                buffer = await getBuffer(anu.url)
                let buttons = [{buttonId: `waifu`, buttonText: {displayText: 'Next Image'}, type: 1},{buttonId: `simplemenu`, buttonText: {displayText: 'Back'}, type: 1}]
                let buttonMessage = {
                    image: buffer,
                    caption: `Random Waifu`,
                    footer: pepek,
                    buttons: buttons,
                    headerType: 4
                }
                Queen.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(apk)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
            case 'apk':
   await Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }})         
  m.reply(mess.wait)
if (args.length == 0) return m.reply(`เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} Whatsapp`)
query = args.join(' ')
get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/uapkpro?apps=${query}&page=1&apikey=cabd55849002ea851ce8`, { method: 'get' })
kontol = get_result.result
ini_txt = 'โฐ *APPLICATIONS* โฑ\n\n'
for (var x of kontol) {
  ini_txt += `Name : ${x.apps_name}\n`
  ini_txt += `Link :${x.apps_linkdl}\n`
  ini_txt += `Tag : ${x.apps_tag}\n`
  ini_txt += `\n`
}
m.reply(ini_txt)
await Queen.sendMessage(m.chat, { react: { text: `๐งฎ๏ธ`, key: m.key }})
break 

//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(couple)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//             
        case 'couple': {
                await Queen.sendMessage(m.chat, { react: { text: `๐ฉโโค๏ธโ๐จ๏ธ`, key: m.key }})
                m.reply(mess.wait)
                let anu = await fetchJson(`https://saipulanuar.herokuapp.com/api/random/couple?apikey=${bear}`)
                auh = anu.result
                Queen.sendMessage(m.chat, { image: { url: auh.ppcwo }, caption: `Couple Male` }, { quoted: m })
                Queen.sendMessage(m.chat, { image: { url: auh.ppcwe }, caption: `Couple Female` }, { quoted: m })
                await Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }})
            }
        break
        
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(coffe)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//         
            case 'coffe': case 'kopi': {
            await Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }})
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'เถเทเถ เถปเทเถดเถบ'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `โ Random Coffe โ`,
                    footer: `แดแดแดกแดสแดแด สส Qแดแดแดษด-แดแด`,
                    buttons: buttons,
                    headerType: 4
                }
                Queen.sendMessage(m.chat, buttonMessage, { quoted: m })
                await Queen.sendMessage(m.chat, { react: { text: `โ๏ธ`, key: m.key }})
            }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(Spamshell)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//                
      case 'bug1': {            
if (!isCreator && !isBan) return
await Queen.sendMessage(m.chat, { react: { text: `โ ๏ธ`, key: m.key }})
if (args.length == 0) return m.reply(`เถดเทโเถปเถธเทเถซเถบ ?`)
await Queen.sendMessage(m.chat, { react: { text: `๐ฟ๏ธ`, key: m.key }})
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
             teng = `
โโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโ
โโโโโโโโฌโฌโฌโฌโฌโโโโโโโ
โโโโโโโฌโผโผโผโผโผโฌโโโโโโ
โโโโโโโโดโดโดโดโดโโโโโโโ
โโโโโโโโโโโโโโโโQแดแดแดษด-แดแด
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `แดแดแดกแดสแดแด สส Qแดแดแดษด-แดแด`,
                            "jpegThumbnail": "Bug"
                        } 
                    } 
                }
await Queen.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
}
m.reply(`Bug1 ${jumlah} เทเทเถปเทเถฎเถเท เถบเทเถฑ เถฝเถฏเท.`)
}
            break
            
            
  case 'bug2': {            
if (!isCreator && !isBan) return
await Queen.sendMessage(m.chat, { react: { text: `โ ๏ธ`, key: m.key }})
if (args.length == 0) return m.reply(`เถดเทโเถปเถธเทเถซเถบ ?`)
await Queen.sendMessage(m.chat, { react: { text: `๐ฟ๏ธ`, key: m.key }})
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
             teng = `
โโโฑโโโโโโฒโโHMโHM
โโฑโโโฑโโฒโฒโฒโโโโHMM
โฑโโโฑโโฑโโโโโโฒโโฎโโ
โโโโโโฑโโฒโฑโโฒโโฎโโโ
โโโโฐโโโโโโโโโโฏโโ
โฒโโโฒโฑโโญโฎโโโณโฒโฒโโโ
โโฒโโโโญโโโโโฏโโโโโ
โโโฒโโฒโโโโโโโฑโฑโโโ
โโโโโโโโโโโโโโโฒโ
โโโโโโโโโโโโโฒโโโฒ
โโฑโโฒโโโโโโโโโฑโโฒโ
โโ โโโโฐโโโโโฏโโโโโ
โโฒโโโโฒโโโโโฑโโโโฑโโฒ
โโโฒโโโโโโโโโโโฑโฒโฒโฒโ
โโฑโโโโโโโโโโโโโฒโโ
โโฒโโโโฑโโโโโฒโโโโฑโQแดแดแดษด-แดแด
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `แดแดแดกแดสแดแด สส Qแดแดแดษด-แดแด`,
                            "jpegThumbnail": "Bug"
                        } 
                    } 
                }
await Queen.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
}
m.reply(`Bug2 ${jumlah} เทเทเถปเทเถฎเถเท เถบเทเถฑ เถฝเถฏเท.`)
}
            break
            
 case 'bug3': {            
          if (!isCreator && !isBan) return
await Queen.sendMessage(m.chat, { react: { text: `โ ๏ธ`, key: m.key }})          
if (args.length == 0) return m.reply(`เถดเทโเถปเถธเทเถซเถบ ?`)
await Queen.sendMessage(m.chat, { react: { text: `๐ฟ๏ธ`, key: m.key }})
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
             halo = `///โญโโโฎโโโโญโโโฎโโโโโ
///โโญโฎโฃโโโโซโญโฎโโโญโณโณโฎ
///โฐโโณโฏโโโโฐโณโโฏโโโโโ
///โโโโโโฏโโโโโโญโซโโโ
///โโโโฐโณโณโณโฏโโโโโโญโโ
///โญโโปโฎโโปโโญโปโโฎโฐโณโโณโฏ
///โโโโฐโโโโฏโโโฐโโโโโQแดแดแดษด-แดแด
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `แดแดแดกแดสแดแด สส Qแดแดแดษด-แดแด`,
                            "jpegThumbnail": "BUG"
                        } 
                    } 
                }
await Queen.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
}
m.reply(`Bug3 ${jumlah} เทเทเถปเทเถฎเถเท เถบเทเถฑ เถฝเถฏเท.`)
}
            break   
            
               case 'bugnumber1': {            
          if (!isCreator && !isBan) return
          await Queen.sendMessage(m.chat, { react: { text: `๐ฟ๏ธ`, key: m.key }})
          if (!text) throw `เถฑเถธเทเถถเถปเท เถเถ เถเท ? (94)`
             halo = `///โญโโโฎโโโโญโโโฎโโโโโ
โโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโ
โโโโโโโโฌโฌโฌโฌโฌโโโโโโโ
โโโโโโโฌโผโผโผโผโผโฌโโโโโโ
โโโโโโโโดโดโดโดโดโโโโโโโ
โโโโโโโโโโโโโโโโQแดแดแดษด-แดแด
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `แดแดแดกแดสแดแด สส Qแดแดแดษด-แดแด`,
                            "jpegThumbnail": "BUG"
                        } 
                    } 
                }
await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
await m.reply(`Bugnumber1 เทเทเถปเทเถฎเถเท ${text} เถฑเถธเทเถถเถปเท เถเถ เทเทเถญ เถบเทเถฑ เถฝเถฏเท.`)
}
            break          
            
   case 'bugnumber2': { 
          if (!isCreator && !isBan) return
          await Queen.sendMessage(m.chat, { react: { text: `๐ฟ๏ธ`, key: m.key }})
          if (!text) throw `เถฑเถธเทเถถเถปเท เถเถ เถเท ? (94)`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `แดแดแดกแดสแดแด สส Qแดแดแดษด-แดแด`,
                            "jpegThumbnail": "BUG"
                        } 
                    } 
                }
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await Queen.sendMessage(`${text}@s.whatsapp.net`, {text:"๐๏ธ ๐ค๐๐ฒ๐ฒ๐ป-๐ ๐ ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐๏ธ"},{quoted:asukonyol11})
            await sleep(30000)
            await m.reply(`Bugnumber2 เทเทเถปเทเถฎเถเท ${text} เถฑเถธเทเถถเถปเท เถเถ เทเทเถญ เถบเทเถฑ เถฝเถฏเท.`)
            }
            break          
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(wallpaper)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
           case 'wallpaper': {
                await Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }})
                if (!text) throw 'เทเทเถธเทเทเถธเท เถธเทเถญเทเถเทเท เถเถญเทเทเถญเท เถเถปเถฑเทเถฑ'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'เถเทเถ เถปเทเถดเถบ'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `โค Title : ${result.title}\nโค Category : ${result.type}\nโค Detail : ${result.source}\nโค Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: global.footer,
                    buttons: buttons,
                    headerType: 4
                }
                Queen.sendMessage(m.chat, buttonMessage, { quoted: m })
                await Queen.sendMessage(m.chat, { react: { text: `๐ธ๏ธ`, key: m.key }})
            }
            break
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(coffe)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
            case 'gcsearch': {
                await Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }})
                if (!text) throw 'เทเทเถธเทเทเถธเท เถธเทเถญเทเถเทเท เถเถญเทเทเถญเท เถเถปเถฑเทเถฑ'
                anu = await fetchJson(`https://api.akuari.my.id/search/carigc?query=${text}`)
                n = anu.result
                result = n[Math.floor(Math.random() * n.length)]
                let jwbn = `*Name : ${result.nama}\n*Link : ${result.link}*`
        let buttons = [{ buttonId: 'menu', buttonText: { displayText: '๐List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendButtonText(m.chat, buttons, jwbn, ripo, m)
            await Queen.sendMessage(m.chat, { react: { text: `๐ฒ๏ธ`, key: m.key }})
            }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(wikimedia)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//                
            case 'wikimedia': {
                await Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }})
                if (!text) throw 'เทเทเถธเทเทเถธเท เถธเทเถญเทเถเทเท เถเถญเทเทเถญเท เถเถปเถฑเทเถฑ'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'เถเทเถ เถปเทเถดเถบ'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `โค Title : ${result.title}\nโค Source : ${result.source}\nโค Media Url : ${result.image}`,
                    footer: Queen.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Queen.sendMessage(m.chat, buttonMessage, { quoted: m })
                await Queen.sendMessage(m.chat, { react: { text: `๐ฒ๏ธ`, key: m.key }})
            }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(quoteanime)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//             
            case 'quotesanime': case 'quoteanime': {
                await Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }})
		let { quotesAnime } = require('./lib/scraper123')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next ๐๏ธ'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'เถดเทเถญ เถถเทเถญเทเถญเถธ เถเถถเถฑเทเถฑ\nแดพแตสทแตสณแตแต แดฎสธ Qแตแตแตโฟ แดนแดฐ',
                    buttons: buttons,
                    headerType: 2
                }
                Queen.sendMessage(m.chat, buttonMessage, { quoted: m })
                await Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }})
            }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo---->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|// 	        
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) throw `Example : ${prefix + command} text`
                m.reply(mess.wait)
                Queen.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
        }
            break
        case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                Queen.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                Queen.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(quoteanime)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//          
        case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                if (!text) return m.reply(`เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `เทเทเถธเทเทเถธเท id เถฑเทเถญ, เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท ${prefix + command} ff 0000000`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `เทเทเถธเทเทเถธเท id เถฑเทเถญ, เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} ml 00000000`
                    if (!zone) throw `เทเทเถธเทเทเถธเท id เถฑเทเถญ, เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} ml 00000000`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `เทเทเถธเทเทเถธเท id เถฑเทเถญ, เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท ${prefix + command} aov 00000000`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `เทเทเถธเทเทเถธเท id เถฑเทเถญ, เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท ${prefix + command} cod 000000000`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `เทเทเถธเทเทเถธเท id เถฑเทเถญ, เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท ${prefix + command} pb 000000000`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `เทเทเถธเทเทเถธเท เถดเถปเทเทเทเถฝเถ เถฑเทเถธเถบเถเท เถฑเทเถธเทเถญ, เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} ig 000000000`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    Queen.sendMedia(m.chat, anu.caption.profile_hd, '', `โค เทเถธเทเถดเทเถปเทเถซ เถฑเถธ : ${anu.caption.full_name}\nโค เถดเถปเทเทเทเถฝเถ เถฑเทเถธเถบ : ${anu.caption.user_name}\nโค ID ${anu.caption.user_id}\nโค Followers : ${anu.caption.followers}\nโค Following : ${anu.caption.following}\nโค เทเทโเถบเทเถดเทเถปเถบ : ${anu.caption.bussines}\nโค เทเทเถญเทเถญเทเถบ : ${anu.caption.profesional}\nโค Verified : ${anu.caption.verified}\nโค Private : ${anu.caption.private}\nโค Bio : ${anu.caption.biography}\nโค Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `เทเทเถธเทเทเถธเท เถดเถปเทเทเทเถฝเถ เถฑเทเถธเถบเถเท เถฑเทเถธเทเถญ, เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} npm DarkWinzo`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`โค Name : ${anu.name}\nโค Version : ${Object.keys(anu.versions)}\nโค Created : ${tanggal(anu.time.created)}\nโค Modified : ${tanggal(anu.time.modified)}\nโค Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\nโค Description : ${anu.description}\nโค Homepage : ${anu.homepage}\nโค Keywords : ${anu.keywords}\nโค Author : ${anu.author.name}\nโค License : ${anu.license}\nโค Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    m.reply(`เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(tiktok)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//              
            case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'เทเทเถธเทเทเถธเท เทเถถเทเถณเทเถบ เถเถญเทเทเท เถเถปเถฑเทเถฑ!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '๐งฉ๏ธ With Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '๐ง๏ธ Audio ๐ง๏ธ'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'เถดเทเถญ เถถเทเถญเทเถญเถธ เถเถถเถฑเทเถฑ\nแดพแตสทแตสณแตแต แดฎสธ Qแตแตแตโฟ แดนแดฐ',
                    buttons: buttons,
                    headerType: 5
                }
                Queen.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(tiktokwatermark)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//              
          case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'เทเทเถธเทเทเถธเท เทเถถเทเถณเทเถบ เถเถญเทเทเท เถเถปเถฑเทเถฑ!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '๐๏ธ No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '๐ง๏ธ Audio ๐ง๏ธ'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'เถดเทเถญ เถถเทเถญเทเถญเถธ เถเถถเถฑเทเถฑ\nแดพแตสทแตสณแตแต แดฎสธ Qแตแตแตโฟ แดนแดฐ',
                    buttons: buttons,
                    headerType: 5
                }
                Queen.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(tiktokmp3)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'เทเทเถธเทเทเถธเท เทเถถเทเถณเทเถบ เถเถญเทเทเท เถเถปเถฑเทเถฑ!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/musically', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '๐๏ธ No Watermark'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '๐งฉ๏ธ With Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'เถดเทเถญ เถถเทเถญเทเถญเถธ เถเถถเถฑเทเถฑ\nแดพแตสทแตสณแตแต แดฎสธ Qแตแตแตโฟ แดนแดฐ',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await Queen.sendMessage(m.chat, buttonMessage, { quoted: m })
                Queen.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(instagrame)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
	        case 'instagram': case 'ig': case 'igdl': {
                if (!text) throw 'เทเทเถธเทเทเถธเท เทเถถเทเถณเทเถบ เถเถญเทเทเท เถเถปเถฑเทเถฑ!!'
                m.reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) Queen.sendFileUrl(m.chat, media, `๐ฅ๏ธ Download Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    Queen.sendFileUrl(m.chat, anu.media[0].url, `๐ฅ๏ธ Download Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(apkmod)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//
            
            case 'apkdl': case 'apkmod': case 'apkd': {      
  
  if (!text) return m.reply(`Use${prefix + command} vpn`) 
  let noh = require('./lib/myfunc2.js')                
  noh.rexdl(`${text}`).then(async (data) => {
  let sections = []   
  for (let i of data) {
  const list = {title: `${i.judul}`,
  rows: [
	    {
	     title: `${i.judul}`, 
	     rowId: `${prefix}donlod ${i.link}`,
	     description: `CATEGORY: ${i.kategori}\nPUBLISH: ${i.upload_date}\nINFORMATION: ${i.deskripsi}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  Queen.sendMessage(
      m.chat, 
      {
       text: `${ucapannya2} ${pushname} *Search Results From ${text} Click the button below to choose*`,
       footer: `ยฉ แดแดแดกแดสแดแด สส Qแดแดแดษด-แดแด`,
       title: "*APK DOWNLOAD*",
       buttonText: "CLICK HERE",
       sections
      }, { quoted : m })                 
                }).catch((err) => {
                    m.reply(`*${text} Not found*`)
                })
            }
            break
 
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(Soundcloud)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'เทเทเถธเทเทเถธเท เถธเทเถญเทเถเทเทเถเท เถฑเทเถญ'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await Queen.sendImage(m.chat, anu.result.thumb, `โค Title : ${anu.result.title}\nโค Url : ${isUrl(text)[0]}`)
                Queen.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(Twitter)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'เทเทเถธเทเทเถธเท เทเถถเทเถณเทเถบ เถเถญเทเทเท เถเถปเถฑเทเถฑ!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '๐ง๏ธ Audio ๐ง๏ธ'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'เถดเทเถญ เถถเทเถญเทเถญเถธ เถเถถเถฑเทเถฑ\nแดพแตสทแตสณแตแต แดฎสธ Qแตแตแตโฟ แดนแดฐ',
                    buttons: buttons,
                    headerType: 5
                }
                Queen.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(twitteraudio)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'เทเทเถธเทเทเถธเท เทเถถเทเถณเทเถบ เถเถญเทเทเท เถเถปเถฑเทเถฑ!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '๐ฌ๏ธ Video ๐ฌ๏ธ'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'เถดเทเถญ เถถเทเถญเทเถญเถธ เถเถถเถฑเทเถฑ\nแดพแตสทแตสณแตแต แดฎสธ Qแตแตแตโฟ แดนแดฐ',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await Queen.sendMessage(m.chat, buttonMessage, { quoted: m })
                Queen.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(supportgroup)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
             case "supportgroup" : {
             await Queen.sendMessage(m.chat, { react: { text: `โ๏ธ`, key: m.key }})
                 if (m.isGroup)
            Queenpic ='https://i.ibb.co/jZkzpw2/Queen.jpeg'
             
           const supportgroup = `*เถเถบเทเถง Queen-MD เถถเทเถงเท เถดเทเทเทเถถเถฏเท เถเทเถงเถฝเท เถญเทเถบเทเถฏ?*\nเถเถฑเถธเท เถเถดเท Queen Bot Support เถเถเถง เถขเทเถบเทเถฑเท เทเทเถฑเทเถฑ.\n\nเถธเทเถฑเทเถฑ เถฝเทเถฑเทเถเท เถเถ๐ค๏ธ = \n https://chat.whatsapp.com/IWvaZWObbJK0Dr64WQdGqO \n\n_(เถธเท Queen-MD Support Group เถเถเทเถฑเท เถเถบเทเถง เถถเทเถงเทเถเท เถเถฝเทเถญเทเถธ เถเทเถฑ เถฏเทเถฑเถเถฑเทเถฑเถญเท เถดเทเถฝเทเทเถฑเท เทเทเถบเท)_`
     
         let butRun = [
                {buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1} ,
                {buttonId: `speed`, buttonText: {displayText: 'Speed'}, type: 1},
                {buttonId: `darkwinzocontact`, buttonText: {displayText: 'Contact Developer'}, type: 1}
                ]      
                let buttonMessage = {
                    image:fs.readFileSync('./src/Media/Image/support.jpeg'),imagePlayback:true,
                    caption: supportgroup,
                    footer: `แดแดแดกแดสแดแด สส Qแดแดแดษด-แดแด`,
                    buttons: butRun,
                    headerType: 4
                }
            Queen.sendMessage(m.chat,buttonMessage,{quoted:m})
            await Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }})
                }
            break
            
            case 'darkwinzocontact': {
            await Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }})
                 if (m.isGroup)
             Queenpic ='https://i.ibb.co/jZkzpw2/Queen.jpeg'
    
        
           const needhelpmenu = `๐๏ธ เทเทเถบเท... ${pushname}\n*เถธเถฑเท DarkWinzo.เถเถบเทเถง เถดเทเถฝเทเทเถฑเท เถดเทเถญ เถเทโเถปเถธ เทเถฝเทเถฑเท เถธเทเท Contact เถเถปเถเถฑเทเถฑ.*\n\n๐๏ธ Whatsapp -> Wa.me/94775200935\n๐๏ธ Email -> darkwinzo440@gmail.com\n๐๏ธ Telegrame -> https://t.me/DarkWinzo\n๐๏ธ Instagram -> https://msng.link/o/?darkwinzo=ig\n๐๏ธ Youtube -> https://youtube.com/c/DarkWinzo`
     
         let butRun = [
                {buttonId: `.menu`, buttonText: {displayText: 'Menu'}, type: 1} ,
                {buttonId: `.owner`, buttonText: {displayText: 'Contact Owner'}, type: 1}
                ]      
                let buttonMessage = {
                    image:fs.readFileSync('./src/Media/Image/contact.jpeg'),imagePlayback:true,
                    caption: needhelpmenu,
                    footer: `Qแตแตแตโฟโปแดนแดฐ แดฎแตแต แดฎสธ แดฐแตสณแตแตโฑโฟแถปแต`,
                    buttons: butRun,
                    headerType: 4
                }
            Queen.sendMessage(m.chat,buttonMessage,{quoted:m})
            await Queen.sendMessage(m.chat, { react: { text: `๐ฑ๐ฐ๏ธ`, key: m.key }})
                }
            break  
      
      
      case 'grupinfo': case 'groupinfo':
try{
 var pic = await Queen.getProfilePicture(m.chat)
  } catch {
 var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
  }
let ingfo = `*๐๐ฅ๐ข๐จ๐ฃ ๐๐ก๐๐ข*\n\n*๐ก๐๐ ๐ :* ${groupName}\n*๐๐ ๐๐ฅ๐ข๐จ๐ฃ:* ${m.chat}\n*๐ ๐๐๐ :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n*๐๐ฅ๐ข๐จ๐ฃ ๐ข๐ช๐ก๐๐ฅ:* @${groupMetadata.owner.split('@')[0]}\n*๐๐๐ ๐๐ก๐ฆ :* ${groupAdmins.length}\n*๐ ๐๐ ๐๐๐ฅ๐ฆ :* ${participants.length}\n*๐๐๐ฆ๐ :* \n${groupMetadata.desc}`
ds = await getBuffer(pic)
Queen.sendMessage(m.chat, { image: ds,caption: ingfo, mentions: [groupMetadata.owner] }, { quoted: m})
break      
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(facebook)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
	        
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'เทเทเถธเทเทเถธเท เทเถถเทเถณเทเถบ เถเถญเทเทเท เถเถปเถฑเทเถฑ!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                Queen.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `โญ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(pinterestdl)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'เทเทเถธเทเทเถธเท เทเถถเทเถณเทเถบ เถเถญเทเทเท เถเถปเถฑเทเถฑ!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                Queen.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'ummadl': {
	        if (!text) throw `เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '๐ง๏ธ Audio ๐ง๏ธ'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '๐ฌ๏ธ Video ๐ฌ๏ธ'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
โค Title : ${anu.title}
โค Author : ${anu.author.name}
โค Like : ${anu.like}
โค Caption : ${anu.caption}
โค Url : ${anu.media[0]}
เถธเทเถฐเทโเถบ เถถเทเถเถญ เถเทเถปเทเถธ เทเถณเทเท, เถเถปเทเถซเทเถเถป เถดเทเถญ เถถเทเถญเทเถญเถธเท เทเถฝเทเถฑเท เถเถเถเท เถเทเถฝเทเถเท เถเถปเถฑเทเถฑ เทเท เถเทเถญ url เทเถธเถ ytmp3/ytmp4 เทเทเถฐเทเถฑเถบ เถเถญเทเทเท เถเถปเถฑเทเถฑ
`,
			 footer: 'แดพแตสทแตสณแตแต แดฎสธ Qแตแตแตโฟ แดนแดฐ',
			buttons,
			headerType: 4
		    }
		    Queen.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        Queen.sendMessage(m.chat, { image: { url }, caption: `โค Title : ${anu.title}\nโค Author : ${anu.author.name}\nโค Like : ${anu.like}\nโค Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
	case 'song': {
	await Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }})
        m.reply(mess.wait)
  if (!text) throw `เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} Mandaram Kathawe Song`
  let yts = require("yt-search")
  let search = await yts(text)                   
let sections = []   
let listmenu = [`ytmp4 ${search.all[0].url}`,`ytmp3 ${search.all[1].url}`,`ytmp4 ${search.all[2].url}`,`ytmp3 ${search.all[3].url}`,`ytmp4 ${search.all[4].url}`,`ytmp3 ${search.all[5].url}`,`ytmp4 ${search.all[6].url}`,`ytmp3 ${search.all[7].url}`,`ytmp4 ${search.all[8].url}`,`ytmp3 ${search.all[9].url}`,`ytmp4 ${search.all[10].url}`,`ytmp3 ${search.all[11].url}`,`ytmp4 ${search.all[12].url}`,`ytmp3 ${search.all[13].url}`,`ytmp4 ${search.all[14].url}`,`ytmp3 ${search.all[15].url}`,`ytmp4 ${search.all[16].url}`,`ytmp3 ${search.all[17].url}`,`ytmp4 ${search.all[18].url}`,`ytmp3 ${search.all[19].url}`]
      let listmenuu = [`VIDEO MP4โฌค: ${search.all[0].title}`,`SONG MP3โฌค: ${search.all[1].title}`,`VIDEO MP4โฌค: ${search.all[2].title}`,`SONG MP3โฌค: ${search.all[3].title}`,`VIDEO MP4โฌค: ${search.all[4].title}`,`SONG MP3โฌค: ${search.all[5].title}`,`VIDEO MP4โฌค: ${search.all[6].title}`,`SONG MP3โฌค: ${search.all[7].title}`,`VIDEO MP4โฌค: ${search.all[8].title}`,`SONG MP3โฌค: ${search.all[9].title}`,`VIDEO MP4โฌค: ${search.all[10].title}`,`SONG MP3โฌค: ${search.all[11].title}`,`VIDEO MP4โฌค: ${search.all[12].title}`,`SONG MP3โฌค: ${search.all[13].title}`,`VIDEO MP4โฌค: ${search.all[14].title}`,`SONG MP3โฌค: ${search.all[15].title}`,`VIDEO MP4โฌค: ${search.all[16].title}`,`SONG MP3โฌค: ${search.all[17].title}`,`VIDEO MP4โฌค: ${search.all[18].title}`,`SONG MP3โฌค: ${search.all[19].title}`]
      let listmenuuu = [`\n${search.all[0].description}`,`\n${search.all[1].description}`,`\n${search.all[2].description}`,`\n${search.all[3].description}`,`\n${search.all[4].description}`,`\n${search.all[5].description}`,`\n${search.all[6].description}`,`\n${search.all[7].description}`,`\n${search.all[8].description}`,`\n${search.all[9].description}`,`\n${search.all[10].description}`,`\n${search.all[11].description}`,`\n${search.all[12].description}`,`\n${search.all[13].description}`,`\n${search.all[14].description}`,`\n${search.all[15].description}`,`\n${search.all[16].description}`,`\n${search.all[17].description}`,`\n${search.all[18].description}`,`\n${search.all[19].description}`]
      let nombor = 1
      let startnum = 0
      let startnumm = 0
      for (let x of listmenu) {
      const list = {title: 'RESULT NUMBER ' + nombor++,
      rows: [
         {
          title: `${listmenuu[startnum++]}`,
          description: `${listmenuuu[startnumm++]}`,
          rowId: `${prefix}${x}`
}, 
]
}
sections.push(list)   
}
await Queen.sendMessage(m.chat, { react: { text: `๐ฅ๏ธ`, key: m.key }})
const sendm =  Queen.sendMessage(
m.chat, 
{
text: "\n*เถฏเถญเทเถญ เทเทเถเทเทเถธ เทเทเถฏเท เทเทเถบ..โ๏ธ*\n",
footer: "แดแดแดกแดสแดแด สส Qแดแดแดษด-แดแด",
title: `*${text}*...เถธเทเถฑเทเถฑ เถเถถเท เถดเทโเถปเถญเทเถตเถฝเถบ\n_๐๏ธเถดเทเถญเทเถฑเท เถเถถเถง เถเทเทเทโเถบ เถเทเถญเถบ เทเท เทเทเถฉเทเถบเทเท เถญเทเถปเถฑเทเถฑ๐๏ธ_ \n`,
buttonText: "CLICK HERE",
sections
}, { quoted : m })
}
break    
	    case 'ringtone': {
	    await Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }})
		if (!text) throw `เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		Queen.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
		await Queen.sendMessage(m.chat, { react: { text: `๐ถ๏ธ`, key: m.key }})
	    }
	    break
            case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await Queen.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                Queen.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`เถเถถเถง เทเทเถฑเทเท เถเทเถปเทเถธเถง เถเทเทเทโเถบ Audio เถเถ เทเถธเถ เถดเทเทเทเถญเทเถปเท เถฏเทเถฑเทเถฑ *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'เถดเทเทเทเถญเทเถปเท เถดเถซเทเทเทเถฉเถบ!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash เถเถญเทเถปเทเถฏเทเถฑเท'
                if (!text) throw `เถเทเถธเถฑ เทเทเถฐเทเถฑเถบ เทเถณเทเทเถฏ?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'เถเถถเถง เถธเทเถธ เทเทเถงเทเถเถปเท เทเทเถฐเทเถฑเถบ เทเทเถฑเทเท เถเทเถปเทเถธเถง เถเทเทเถป เถฑเทเถญ'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`โ เถเทเท`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Hash เถเถเถเท เถฑเท`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'เถเถถเถง เถธเทเถธ เทเทเถงเทเถเถปเท เทเทเถฐเทเถฑเถบ เถธเถเท เถฏเทเถธเทเถธเถง เถเทเทเถป เถฑเทเถญ'              
                delete global.db.data.sticker[hash]
                m.reply(`โ เถเทเท`)
            }
            break
            case 'listcmd': {
                let teks = `
*๐๐ฎ๐๐ต ๐๐ถ๐๐*
เทเทเทเทเถญเถปโเถบ: *bold* hash เถเถเทเทเท เถฏเถธเท เถเถญ.
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                Queen.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'เถดเทเทเทเถญเทเถปเท เถดเถซเทเทเทเถฉเถบ!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash เถเถญเทเถปเทเถฏเทเถฑเท'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'เถฏเถญเทเถญ เทเถธเทเถฏเทเถบ เถญเทเท Hash เทเทเถบเท เถเถญ เถฑเทเทเทเถเท เทเทเถบ.'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('โ เถเทเท')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'เถเถถเถง เถฏเถญเทเถญ เถเถถเถฉเทเทเท เทเทเถปเทเถเทเถธเถง เถเทเทเทโเถบ เถดเถซเทเทเทเถฉเถบเถง เถดเทเทเทเถญเทเถปเท เถฏเทเถฑเทเถฑ'
                if (!text) throw `เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} file Name`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' เถดเถซเทเทเทเถฉ เถฝเทเถบเทเทเทเถญเทเทเท เถฝเทเถบเทเถดเถฏเทเถเถ เท เถเถป เถเถญ`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`'${text}'เถฝเทเท เถดเถซเทเทเทเถฉ เถฝเทเถบเทเทเทเถญเทเทเท เถดเถซเทเทเทเถฉเถบ เทเทเถปเทเถฎเถเท เถเถเท เถเถปเถฑ เถฝเถฏเท.
    
 ${prefix}getmsg ${text} เทเถธเถ เถดเทโเถปเทเทเท เทเถฑเทเถฑ.

 ${prefix}listmsg เทเถธเถ เถดเถซเทเทเทเถฉ เถฝเทเถบเทเทเทเถญเทเท เถถเถฝเถฑเทเถฑ`)
            }
            break
            case 'getmsg': {
                if (!text) throw `เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} file name\n\n${prefix}listmsg เทเถธเถ เถดเถซเทเทเทเถฉ เถฝเทเถบเทเทเทเถญเทเท เถถเถฝเถฑเทเถฑ.`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' เถดเถซเทเทเทเถฉ เถฝเทเถบเทเทเทเถญเทเทเท เถฝเทเถบเทเทเทเถญเทเถเถญ เถเถป เถฑเทเถญ.`
                Queen.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = 'ใ เถฏเถญเทเถญ เถเถถเถฉเท เถฝเทเถบเทเทเทเถญเทเท  ใ\n\n'
		for (let i of seplit) {
		    teks += `โฌก *เถฑเถธ :* ${i.nama}\nโฌก *เทเถปเทเถเถบ :* ${getContentType(i.message).replace(/Message/i, '')}\nโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโท\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
                let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' เถดเถซเทเทเทเถฉ เถฝเทเถบเทเทเทเถญเทเทเท เถฝเทเถบเทเทเทเถญเทเถเถญ เถเถป เถฑเทเถญ`)
		delete msgs[text.toLowerCase()]
		m.reply(`เถดเถซเทเทเทเถฉ เถฝเทเถบเทเทเทเถญเทเทเทเถฑเท '${text}' เทเทเถปเทเถฎเถเท เถธเถเท เถเถญ`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('เถเถซเทเถฉเทเถบเถธเท เทเถณเทเท เทเทเทเทเทเทเถเถ เถทเทเทเทเถญเท เถเท เถฑเทเทเทเถ!')
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                Queen.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await Queen.getName(m.sender)} เถฑเทเถปเทเถฑเทเถธเทเถ เถเถญเทเถถเทเถง เทเทเถฏเถปเถบเทเถฑเท เถดเทเทเทเถเถฑเทเถธเท\n\nเทเทเทเถฝเทเถเถปเทเทเทเถเท เทเทเทเทเถธเถง เถดเทเถญ เถถเทเถญเทเถญเถธ เถเทเถฝเทเถเท เถเถปเถฑเทเถฑ.\`\`\``, Queen.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('เถเถซเทเถฉเทเถบเถธเท เทเถณเทเท เถธเทเถธ  เทเทเทเทเทเทเถเถ เถทเทเทเทเถญเท เถเท เถฑเทเทเทเถ!')
                let room = Object.values(db.data.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await Queen.sendButtonText(m.chat, buttons, `\`\`\`เถเถถ เถฑเทเถปเทเถฑเทเถธเทเถ เทเทเทเทเถบเถ(Anonymous chat) เถฑเทเทเท, เทเทเทเถฝเทเถเถปเทเทเทเถเท เทเทเถบเท เถเทเถฑเทเถธเถง เถถเทเถญเทเถญเถธ เถเถถเถฑเทเถฑ \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await Queen.sendText(other, `\`\`\`เทเทเทเถฝเทเถเถปเท เถฑเทเถปเทเถฑเทเถธเทเถ เทเทเทเทเถบเทเถฑเท เถเทเถญเท เทเท เถเถญ.\`\`\``, m)
                delete db.data.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('เถเถซเทเถฉเทเถบเถธเท เทเถณเทเท เทเทเทเทเทเทเถเถ เถทเทเทเทเถญเท เถเท เถฑเทเทเทเถ!')
                if (Object.values(db.data.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await Queen.sendButtonText(m.chat, buttons, `\`\`\`เถเถถ เถญเทเถธเถญเท เทเทเถงเทเถฑเทเถฑเท เถฑเทเถปเทเถฑเทเถธเทเถ เทเทเทเทเถบเถ เถบ, เถเถถเถเท เถฑเทเถปเทเถฑเทเถธเทเถ เทเทเทเทเถบ เถเทเทเถฑเท เถเทเถปเทเถธเถง เถดเทเถญ เถถเทเถญเทเถญเถธ เถเถถเถฑเทเถฑ\`\`\``, Queen.user.name, m)
                    throw false
                }
                let room = Object.values(db.data.anonymous).find(room => room.state === 'WAITING' && room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'เถธเถ เทเถปเทเถฑเทเถฑ' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'เถฑเทเถญเทเทเถฑเทเถฑ' }, type: 1 }
                    ]
                    await Queen.sendButtonText(room.a, buttons, `\`\`\`เทเทเถปเทเถฎเถ เถฝเทเท เทเทเทเถฝเทเถเถปเท เทเทเถบเท เถเถฑเทเถฑเท เถฝเถฏเท, เถฏเทเถฑเท เถเถถเถง เถดเถซเทเทเทเถฉเถบเถเท เถบเทเทเทเถบ เทเทเถ\`\`\``, Queen.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await Queen.sendButtonText(room.b, buttons, `\`\`\`เทเทเถปเทเถฎเถ เถฝเทเท เทเทเทเถฝเทเถเถปเท เทเทเถบเท เถเถฑเทเถฑเท เถฝเถฏเท, เถฏเทเถฑเท เถเถถเถง เถดเถซเทเทเทเถฉเถบเถเท เถบเทเทเทเถบ เทเทเถ\`\`\``, Queen.user.name, m)
                } else {
                    let id = + new Date
                    db.data.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await Queen.sendButtonText(m.chat, buttons, `\`\`\`เถเถปเทเถซเทเถเถป เถปเทเถณเท เทเทเถงเทเถฑเทเถฑ, เทเทเถเถปเทเทเทเถเท เทเทเถบเถธเทเถฑเท...\`\`\``, Queen.user.name, m)
                }
                break
            }
            
          case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('เถเถซเทเถฉเทเถบเถธเท เทเถณเทเท เทเทเทเทเทเทเถเถ เถทเทเทเทเถญเท เถเท เถฑเทเทเทเถ!')
                let romeo = Object.values(db.data.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await Queen.sendButtonText(m.chat, buttons, `\`\`\`เถเถถ เถฑเทเถปเทเถฑเทเถธเทเถ เทเทเทเทเถบเถ เถฑเทเทเท, เทเทเทเถฝเทเถเถปเทเทเทเถเท เทเทเถบเท เถเทเถฑเทเถธเถง เถถเทเถญเทเถญเถธ เถเถถเถฑเทเถฑ\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await Queen.sendText(other, `\`\`\`เทเทเทเถฝเทเถเถปเท เถฑเทเถปเทเถฑเทเถธเทเถ เทเทเทเทเถบเทเถฑเท เถเทเถญเท เทเท เถเถญ\`\`\``, m)
                delete db.data.anonymous[romeo.id]
                let room = Object.values(db.data.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await Queen.sendButtonText(room.a, buttons, `\`\`\`เทเทเถปเทเถฎเถ เถฝเทเท เทเทเทเถฝเทเถเถปเท เทเทเถบเท เถเถฑเทเถฑเท เถฝเถฏเท, เถฏเทเถฑเท เถเถถเถง เถดเถซเทเทเทเถฉเถบเถเท เถบเทเทเทเถบ เทเทเถ\`\`\``, Queen.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await Queen.sendButtonText(room.b, buttons, `\`\`\`เทเทเถปเทเถฎเถ เถฝเทเท เทเทเทเถฝเทเถเถปเท เทเทเถบเท เถเถฑเทเถฑเท เถฝเถฏเท, เถฏเทเถฑเท เถเถถเถง เถดเถซเทเทเทเถฉเถบเถเท เถบเทเทเทเถบ เทเทเถ\`\`\``, Queen.user.name, m)
                } else {
                    let id = + new Date
                    db.data.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await Queen.sendButtonText(m.chat, buttons, `\`\`\`เถเถปเทเถซเทเถเถป เถปเทเถณเท เทเทเถงเทเถฑเทเถฑ, เทเทเถเถปเทเทเทเถเท เทเทเถบเถธเทเถฑเท...\`\`\``, Queen.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
               await Queen.sendMessage(m.chat, { react: { text: `โ๏ธ`, key: m.key }})
                Queen.public = true
                m.reply('*Qแดแดแดษด สแดแด แดแดสสษชแด แดแดแดแด*\nโป๏ธQueen Bot เถดเทเถฏเท เถทเทเทเทเถญเถบเถง เทเทเถฑเทเท เถเถปเถฑ เถฝเถฏเท.เถฏเทเถฑเท เทเทเถบเถฝเทเถธ เถฏเทเถฑเทเถง เถถเทเถงเท เถทเทเทเทเถญเท เถเถฝ เทเทเถ.โป๏ธ')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                await Queen.sendMessage(m.chat, { react: { text: `โ๏ธ`, key: m.key }})
                Queen.public = false
                m.reply('*Qแดแดแดษด สแดแด แดสษชแด แดแดแด แดแดแดแด*\nโป๏ธQueen Bot เทเทเทเถบเถ เถทเทเทเทเถญเถบเถง เทเทเถฑเทเท เถเถปเถฑ เถฝเถฏเท.เถฏเทเถฑเท เถถเทเถงเท เถทเทเทเทเถญเท เถเถฝ เทเทเถเทเถเท เถถเทเถงเท เถเถบเทเถญเทเถเถปเทเถง เถดเถธเถซเท.โป๏ธ')
                 }
            break
            case 'ping': case 'speed': case 'botstatus': case 'statusbot': {
   await Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }})        
   const used = process.memoryUsage()
   const cpus = os.cpus().map(cpu => {
  cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
   })
   const cpu = cpus.reduce((last, cpu, _, { length }) => {
  last.total += cpu.total
  last.speed += cpu.speed / length
  last.times.user += cpu.times.user
  last.times.nice += cpu.times.nice
  last.times.sys += cpu.times.sys
  last.times.idle += cpu.times.idle
  last.times.irq += cpu.times.irq
  return last
   }, {
  speed: 0,
  total: 0,
  times: {
 user: 0,
 nice: 0,
 sys: 0,
 idle: 0,
 irq: 0
   }
   })
   let timestamp = speed()
   let latensi = speed() - timestamp
   neww = performance.now()
   oldd = performance.now()
   respon = `*<<--Response In ${latensi.toFixed(4)}*-->>`.trim()
   m.reply(respon)
   await Queen.sendMessage(m.chat, { react: { text: `๐ฏ๏ธ`, key: m.key }})
 }
            break
            
          case 'speedtest': {
            Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }})
            m.reply('เทเทเถเถบ เถดเถปเทเถเทเทเท เถเทเถปเทเถธ...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
        break
            
          case 'runtime': case 'uptime':{
          Queen.sendMessage(m.chat, { react: { text: `๐ฅต๏ธ`, key: m.key }})
          let siapp = `*โโ๊ฅใ ๐ฅ๐๐ป๐๐ถ๐บ๐ฒ ใ๊ฅโโฌฃ*
โโฒ๏ธ เถเทเถฝเถบ: ${hariini} WIB
โ๐ เทเถเทโเถปเทเถบ เถเทเถฝเถบ: ${runtime(process.uptime())}
โ๐น Tag : ${pushname}
โโโโโโโ๊ฅ`
           Queen.sendMessage(m.chat, { image: { url: 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=400&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=Runtime' }, caption: siapp }, { quoted: m })
          }
            break
            
           case 'rules': case 'rulesbot':{
           Queen.sendMessage(m.chat, { react: { text: `๐ฌ๏ธ`, key: m.key }})    
               
           let ohh = `*๐๐ผ๐ ๐ฅ๐๐น๐ฒ๐* :\n
1. เถถเทเถงเท เทเทเถญ เถฏเทเถปเถเถญเถฑ เถเถธเถญเทเถธเท เถฝเถถเท เถฑเทเถเถฑเทเถฑ.
2. เถเถปเทเถซเทเถเถป เถถเทเถงเท เถทเทเทเทเถญเท เถเถปเถฑ เทเทเถง เทเทเถปเทเถธเถบเถเท เถญเถถเถฑเทเถฑ (เทเทเถดเทเถธเท เถฑเทเถเถปเถฑเทเถฑ)
3. เถถเทเถงเท เถเถฑเทเถญเถปเทเถเถญเถบ เทเทเถปเท เถฑเทเถเถฑเทเถฑ
4. เถธเทเถธ เถถเทเถงเท เถทเทเทเทเถญเท เถเทเถปเทเถธเถง เถเถญเทเถญเทเถเท เถฑเทเถฏเทเท เถเถญเท เถถเทเทเทเถฑเท (เถถเทเถงเท เถเถซเทเถฉเทเถบเถธเถเถง เถเถเถญเท เถเทเถปเทเถธ เทเทเถป) เทเทเถเทเถซเทเถธ เทเท เทเทเทเถณเทเถธเท เถเทเถปเทเถธ เถญเทเถฑเถธเทเถบ.
5. Bot เถธเถเทเถฑเท เถดเถปเทเทเทเถฝเถ เถฏเถญเทเถญ เทเทเถปเทเถเทเถฑเทเถฑเท เถฑเทเถญ.เถธเทเถฑเทเทเทเถฑเท เถธเทเถฑเท เทเถปเทเท เทเถธเทเถดเทเถปเทเถซ เถบเทเถบเท เทเทเถญเท เถฑเทเทเทเทเทเถปเทเถฑเทเถฑ.
6. เถดเถปเทเทเทเถฝเถเถบเถฑเท,เถถเทเถงเทเถเท เถเถฑเทเถญเถปเทเถเถญเถบ เทเท เถฝเถถเทเถเถฑเทเถฑเท เถธเทเถฐเถบเถบ เทเท เถเทเทเทเถธ เถเถเทเถปเถบเท เถดเทโเถปเถ เถซเทเถฉ เถเทเถบเทเทเถเถง เถเถด เทเถ เถฑเทเถเทเถบเถฑเท เถเถญ.
7. เถเทเถทเทโเถบ เถเถฑเทเถญเถปเทเถเถญเถบเทเถฑเท เทเทเถเทเถฑเทเถฑ (เถดเทเถฑเทเถญเทเถป, เถฝเทเถเถฑ, เทเทเถฉเทเถบเท เทเท เทเทเถงเทเถเถปเท เถเถเทเถปเถบเทเถฑเท)

*เถปเทเทเทโเถบเถญเท เถดเทโเถปเถญเทเถดเถญเทเถญเทเถบ:*
  1. เถถเทเถงเท เทเทเทเทเถฑเท เถดเถปเทเทเทเถฝเถเถบเทเถเท เถเถญเทเถถเทเท เถเถญเทเทเทเท เถฏเถญเทเถญ เทเทเถปเทเถญเท เถฑเทเถเถปเถฑเท เถเถญ.
  2. เถถเทเถงเท เทเทเทเทเถฑเท เถดเถปเทเทเทเถฝเถ เถเถเถ เถถเทเถฏเท เถฑเทเถเถฑเท.
  3. เถดเถปเทเทเทเถฝเถเถบเถฑเท เทเทเทเทเถฑเท เถเถฏเทเถปเทเถดเถญเท เถเถปเถฑ เถฝเถฏ เถธเทเถฐเทโเถบ เถถเทเถงเท เทเทเทเทเถฑเท เทเทเถปเถเทเถฑเท เถฑเทเถฝเทเถถเท.
  4. เถถเทเถงเท เถดเถปเทเทเทเถฝเถ เถฏเถญเทเถญ เถเทเถทเทเทเทเถญ เถฑเทเถเถปเถฑเท เถเถญ.
  5. เถดเถปเทเทเทเถฝเถเถบเถฑเทเถเท เถเถญเทเถถเทเท เถเถญเทเทเทเท เถฏเถญเทเถญ เถถเทเถฝเทเถธเถง เถถเทเถงเทเทเท เทเทเถธเทเถเถปเทเถง เถเถบเทเถญเทเถบ เถเถญ.
  6. เถถเทเถงเทเทเท เทเทเถธเทเถเถปเทเถง เถดเถปเทเทเทเถฝเถเถบเทเถฑเทเถเท เถญเถญเทเถญเทเทเถบ เถถเทเถฝเทเถธเถง เถเถบเทเถญเทเถบ เถเถญ.
  7. เถถเทเถงเท เทเทเถธเทเถเถปเทเทเถง เถเถญเทเถถเทเท เถเถญเทเทเทเทเถบ เทเท เถดเถปเทเทเทเถฝเถเถบเถฑเท เทเทเทเทเถฑเท เถเทเถฑ เถฝเถฏ เถธเทเถฐเทโเถบ เถฑเทเถปเถนเทเถบ เทเทเถ.
 
*เถถเทเถงเทเถเท เถฑเทเถบเถธเถบเถฑเท เทเท เถเทเถฑเทเถฏเทเทเท*
  1. เถดเทเถงเถญเท เทเทเถธเถง เถเทเถฝเถบ เถดเทเถธเทเถซเท เทเทเถง เถถเทเถงเท เถเถซเทเถฉเทเถบเถธเทเถฑเท เถเทเถญเท เทเถฑเท เถเถญ.
  2. เถดเถปเทเทเทเถฝเถเถบเถฑเท เทเทเถปเถฏเทเถฏ เถฑเทเถฏเทเถฏ เถบเถฑเทเถฑ เถฑเทเทเถฝเถเท เถเถเถดเทเถปเทเทเทเทเทเถเท เถดเถปเทเทเทเถฝเถเถบเถฑเท เถญเทเถฑเถธเท เถเทเถปเทเถธเถง bots เทเถง เทเทเถเทเถบ.
  3. เถถเทเถงเท *เถทเทเทเทเถญ เถเถปเถฑเทเถฑเถฑเท เถถเทเถงเท เทเทเทเทเทเทเถเถเถบเถง เถเถปเถฑ เถเทเทเทเถธ เถฏเทเถบเถเถง เถเถด เทเถเถเทเถบเถฑเท เถฑเทเถฝเทเถถเท.*
  4. เถถเทเถงเท เทเทเทเทเถฑเท เถฏเถฌเทเทเถธเท เถฑเทเถบเถธ เถเถปเถฑเท เถเถญ : เถฑเทเถญเท เถเถฝเทเถฝเถเถเถฑเถบ เถเถปเถฑ เถดเถปเทเทเทเถฝเถเถบเทเถฑเท เถเทเทเทเถป เถเทเถปเทเถธ เทเท เถญเทเถฑเถธเท เถเทเถปเทเถธ.
  5. เถเทโเถปเถธเถฝเทเถเถฑเถบเท เทเท เทเทเถธเทเถเถปเทเถเท เถฏเทเท เทเถณเทเท เถถเทเถงเท เทเถเถเทเท เถบเทเถญเทเถบ.
 
_เถธเทเถธ เถถเทเถงเท เถทเทเทเทเถญเท เถเทเถปเทเถธเถง เถเถถเถง เถเทเทเทเถฏเท เถธเทเถฏเถฝเท เถเทเทเทเถธเถเท เถเทเทเทโเถบ เถฑเทเถญเท เถฑเทเทเท เถเถบเถง เถเทเถญเทเทเถฏเท เทเถฑเทเถฑ, เถถเทเถงเท เถฅเทเถฑเทเถฑเทเถญเท เถทเทเทเทเถญเท เถเถปเถฑเทเถฑ, เถเทเทเทเถฏเทเทเทเถงเถ เถเถบ เถเถเทเถธเทเท เถฑเทเถบเถฑเทเถฑ._

เถฏเถเทเท เถดเถปเทเทเทเถฝเถเถบเทเถเท เทเถฑเทเถฑ.. \ngood luck!

๐ก๏ธแดแดแดกแดสแดแด สส Qแดแดแดษด-แดแด๐ก๏ธ`
              Queen.sendMessage(m.chat, { image: { url: 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=400&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=Bot Rules ' }, caption: ohh }, { quoted: m })
              }
            break
            
            case 'mcontact': {
                Queen.sendContact(m.chat, `94775200935@s.whatsapp.net`, m)
                Queen.sendMessage(m.chat, { react: { text: `๐ค๏ธ`, key: m.key }})
            }
            break
            
            
            case 'owner': case 'creator': {
                Queen.sendContact(m.chat, global.owner, m)
                Queen.sendMessage(m.chat, { react: { text: `๐ค๏ธ`, key: m.key }})
            }
            break
            case 'playstore': {
            if (!text) throw `เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} clash of clans`
            let res = await fetchJson(api('zenz', '/webzone/playstore', { query: text }, 'apikey'))
            let teks = `โค Playstore Search From : ${text}\n\n`
            for (let i of res.result) {
            teks += `โค Name : ${i.name}\n`
            teks += `โค Link : ${i.link}\n`
            teks += `โค Developer : ${i.developer}\n`
            teks += `โค Link Developer : ${i.link_dev}\n\nโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโท\n`
            }
            m.reply(teks)
            }
            break
            case 'phones': {
            if (!text) throw `เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} samsung`
            let res = await fetchJson(api('zenz', '/webzone/gsmarena', { query: text }, 'apikey'))
            let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `โค  เถธเทเถญเทเถเทเท: ${judul}
โค  Realease เทเท เถฏเทเถฑเถบ: ${rilis}
โค   เทเทเทเทเถฝเถญเทเทเถบ: ${ukuran}
โค   เทเถปเทเถเถบ: ${type}
โค   เถธเถญเถ เถเถถเถฉเทเท: ${storage}
โค   เทเถเถฏเถปเทเทเถเถบ: ${display}
โค   เถดเทโเถปเถธเทเถซเถบ: ${inchi}
โค Pixel: ${pixel}
โค Video Pixel: ${videoPixel}
โค Ram เถเถ: ${ram}
โค   เถ เทเถดเท เถเถงเทเถงเถฝเถบ: ${chipset}
โค   เถดเทโเถปเถธเทเถซเถบ: ${batrai}
โค   เถถเทเถงเถปเท เทเถฑเทเถฑเทเถธเถบ: ${merek_batre}
โค   เทเทเทเทเถญเถป: ${detail}`
            Queen.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'cinemaschedule': {
            if (!text) throw `เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท: ${prefix + command} Colombo`
            let res = await fetchJson(api('zenz', '/webzone/jadwalbioskop', { kota: text }, 'apikey'))
            let capt = `${text} : เทเทเถฑเถธเท เถเทเถฝเทเถงเทเถฑ เทเทเถญเทเถฑเท\n\n`
            for (let i of res.result){
            capt += `โค เถธเทเถญเทเถเทเท: ${i.title}\n`
            capt += `โค เถดเทเถป เถฏเทเทเถฑ: ${i.thumb}\n`
            capt += `โค Url เทเถถเทเถฏเทเถบ: ${i.url}\n\nโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโท\n`
            }
            Queen.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
            break
            case 'nowplayingbioskop': {
            let res = await fetchJson(api('zenz', '/webzone/nowplayingbioskop', {}, 'apikey'))
            let capt = `เถฏเทเถฑเท Bioskop Play เถเถปเถฑเทเท.\n\n`
            for (let i of res.result){
            capt += `โค เถธเทเถญเทเถเทเท: ${i.title}\n`
            capt += `โค Url เทเถถเทเถฏเทเถบ: ${i.url}\n`
            capt += `โค Image Url: ${i.img}\n\nโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโท\n`
            }
            Queen.sendImage(m.chat, res.result[0].img, capt, m)
            }
            break
            case 'community': {
            if (!text) throw `เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท: ${prefix + command} free fire`
            let res = await fetchJson(api('zenz', '/webzone/amino', { query: text }, 'apikey'))
            let capt = `community Search From : ${text}\n\n`
            for (let i of res.result){
            capt += `โค Community: ${i.community}\n`
            capt += `โค Community Link: ${i.community_link}\n`
            capt += `โค Thumbnail: ${i.community_thumb}\n`
            capt += `โค Description: ${i.community_desc}\n`
            capt += `โค Member Count: ${i.member_count}\n\nโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโท\n`
            }
            Queen.sendImage(m.chat, 'https://'+res.result[0].community_thumb, capt, m)
            }
            break
            case 'wattpad': {
            if (!text) throw `เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/wattpad', { query: text }, 'apikey'))
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From ${text}\n\n`
            capt += `โค เถธเทเถญเทเถเทเท: ${judul}\n`
            capt += `โค เถเทเถบเทเท เถเถซเถฑ: ${dibaca}\n`
            capt += `โค เถเถเถธเทเถญเท เถเถบ เถเถซเถฑ: ${divote}\n`
            capt += `โค Bab: ${bab}\n`
            capt += `โค เถเทเถฝเถบ: ${waktu}\n`
            capt += `โค Url: ${url}\n`
            capt += `โค เทเทเทเทเถญเถปเถบ: ${description}`
            Queen.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'webtoons': {
            if (!text) throw `เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/webtoons', { query: text }, 'apikey'))
            let capt = `Webtoons Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `โค เถธเทเถญเทเถเทเท: ${i.judul}\n`
            capt += `โค เถเทเถธเถญเท: ${i.like}\n`
            capt += `โค เถฑเทเถปเทเถธเทเถญเท: ${i.creator}\n`
            capt += `โค เทเถปเทเถเถบ: ${i.genre}\n`
            capt += `โค Url: ${i.url}\n\nโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโท\n`
            }
            m.reply(capt)
            }
            break
            case '': {
            Queen.sendMessage(m.chat, { react: { text: `โ๏ธ`, key: m.key }})
            }
            break
            case 'drakor': {
            if (!text) throw `เถเถฏเทเทเถปเถซเถบเถเท เถฝเทเท : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/drakor', { query: text }, 'apikey'))
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `โค เถธเทเถญเทเถเทเท: ${i.judul}\n`
            capt += `โค เทเทเถป: ${i.years}\n`
            capt += `โค เทเถปเทเถเถบ: ${i.genre}\n`
            capt += `โค Url: ${i.url}\n`
            capt += `โค Thumbnail Url: ${i.thumbnail}\n\nโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโทโท\n`
            }
            Queen.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break
            case 'help': case 'Help': {
            await Queen.sendMessage(m.chat, { react: { text: `โ๏ธ`, key: m.key }})
              if (m.isGroup)
             Queenpic ='https://i.ibb.co/jZkzpw2/Queen.jpg'
            const help = `*${pushname} เถเถถเถง เถเถฏเทเทเทเถเท เถเทเทเทโเถบเถฏ?*\n\nเถธเถเท เทเถธเทเถดเทเถปเทเถซ เทเทเถฐเทเถฑ เถฝเทเถบเทเทเทเถญเทเท เถฝเถถเท เถเทเถฑเทเถธเถง เถธเทเถฑเท เถถเทเถญเทเถญเถธ เถเถถเถฑเทเถฑ.`
     
         let butRun = [
                {buttonId: `.simplemenu`, buttonText: {displayText: 'Menu'}, type: 1} ,
                {buttonId: `.speed`, buttonText: {displayText: 'Speed'}, type: 1},
                {buttonId: `.owner`, buttonText: {displayText: 'Contact Owner'}, type: 1}
                ]      
                let buttonMessage = {
                    image:fs.readFileSync('./src/Media/Image/Queen.jpg'),videoPlayback:true,
                    caption: help,
                    footer: `\nQueen-MD\n\n         โโ เถดเทเถญ เถถเทเถญเทเถญเถธเท เถทเทเทเทเถญเท เถเถปเถฑเทเถฑ โโ`,
                    buttons: butRun,
                    headerType: 4
                }
            Queen.sendMessage(m.chat,buttonMessage,{quoted:m})
            await Queen.sendMessage(m.chat, { react: { text: `๐งโ๐ง๏ธ`, key: m.key }})
                }
            break
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(setmenu)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//             
            case 'setmenu': {
            await Queen.sendMessage(m.chat, { react: { text: `๐ง๏ธ`, key: m.key }})
            if (!isCreator) throw mess.owner
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                m.reply(mess.success)
                } else {
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
                {title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
                {title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
                {title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`}
                ]
                },
                ]
                Queen.sendListMsg(m.chat, `เถเถปเทเถซเทเถเถป เถเถถเถง เทเทเถฑเทเท เถเทเถปเทเถธเถง เถเทเทเทโเถบ เถธเทเถฑเทเท เถญเทเถปเถฑเทเถฑ!`, Queen.user.name, `เถเถบเทเถถเทเทเถฑเท เถเถถเถง!`, `เถธเทเถญเถฑ เถเทเถฝเทเถเท เถเถปเถฑเทเถฑ`, sections, m)
                }
            }
            break
          
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(sponsor)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
            case 'sponsor': {
            Queen.sendMessage(m.chat, { react: { text: `โ๏ธ`, key: m.key }})
            if (!m.isGroup) throw mess.group
            let qontak = `94775200935@s.whatsapp.net`
let whatsapp = `94775200935@s.whatsapp.net`

            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let jawab =`    *๏ผฑ๏ฝ๏ฝ๏ฝ๏ฝ๏ผ๏ผญ๏ผค  ๏ผณ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ*\n\n 
-เทเทเถธเทเถเถปเท :  @${ownernya.split('@')[0]}\n-เถถเทเถงเท เถเถเถเถบ : @${me.split('@')[0]}\n-Powered  : @${ini_mark.split('@')[0]}\n- :  @${qontak.split('@')[0]}\n- :  @${whatsapp.split('@')[0]}`
            let ments = [ownernya, me, ini_mark, qontak, whatsapp]
            let buttons = [
                        { buttonId: 'allmenu', buttonText: { displayText: '๐List Menu' }, type: 1 }
                    ]
                    await Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }})
                    await Queen.sendButtonText(m.chat, buttons, jawab, wm, m, {mentions: ments})
                     }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(menu)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
            case 'menu': {
            Queen.sendMessage(m.chat, { react: { text: `โ๏ธ`, key: m.key }})
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            hm = await fetchJson(`https://saipulanuar.herokuapp.com/api/quotes?apikey=${bear}`)
              sami = hm.result
            let jawab = `*${GreetingTime}*
โโโโ๊ฅใ เถดเถปเทเทเทเถฝเถ เทเทเทเทเถญเถป ใ๊ฅโโฌฃ
โโพ *เถดเถปเทเทเทเถฝเถ เถฑเทเถธเถบ* : ${pushname}
โโพ *เถดเถปเทเทเทเถฝเถ เถเถเถเถบ* : @${me.split('@')[0]}
โโพ *Premium เถญเถญเทเทเถบ* : ${isPremium ? 'โ' : `โ`}
โโพ *เทเทเถธเทเท* : ${isPremium ? 'โพเถเทเทเถธเทเถญเถบเท.' : `ใฝ๏ธ${db.data.users[m.sender].limit}`}
โโ๊ฅ

โโโโ๊ฅใ เถถเทเถงเท เถดเทเทเทเถถเถฏเท ใ๊ฅโโฌฃ
โโพ *เถถเทเถงเทเถเท เถฑเทเถธเถบ* : ${pushname}
โโพ *เถถเทเถงเทเถเท เถเถเถเถบ* : @${ini_mark.split('@')[0]}
โโพ *เทเทเถธเทเถเถปเท* : @${ownernya.split('@')[0]}
โโพ *เถธเทเถฏเทเถฝเทเถบ* : ${Queen.public ? 'Public' : `Self`}
โโพ *เถเถดเทเถปเทเถเถบ* :ใ MULTI-PREFIX ใ
โโ๊ฅ

โโ๊ฅใ เถฏเทเถฑเถบ เทเท เทเทเถฝเทเท ใ๊ฅโโฌฃ
โโพ *เถฏเทเถฑเถบ* : ${hariini}
โโพ *เทเทเถฝเทเท* : ${tengah}
โโโโโโโ๊ฅ
โโ๊ฅ
โ๐ เถธเทเถธ เถเถฑเทเถธ เทเทเถฐเทเถฑเถบเถเท เถทเทเทเทเถญเท เถเทเถปเทเถธเถง 
โ          เถธเทเทเท เถงเถบเทเถดเท เถเถปเถฑเทเถฑ
โ      " *${prefix}เทเทเถฐเทเถฑเถบ* ".
โ 
โ๐ Support เถเถซเทเถฉเทเถบเถธเท เทเถถเทเถณเทเถบ เถฝเถถเท 
โ เถเทเถฑเทเถธเถง "*${prefix}support* เถงเถบเทเถดเท เถเถปเถฑเทเถฑ".
โ
โ๐ เทเถธเทเถดเทเถปเทเถซ เทเทเถฐเทเถฑ เถฝเทเถบเทเทเทเถญเทเท เถฝเถถเท
โ  เถเทเถฑเทเถธเถง" *${prefix}allmenu* "เถงเถบเทเถดเท เถเถปเถฑเทเถฑ .
โโโโโโโ๊ฅ`
            let ments = [ownernya, me, ini_mark]
            let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '๐ Menu ๐' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'โRules' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
             await Queen.sendMessage(m.chat, { react: { text: `โ`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, jawab, pepek, m, {mentions: ments})
            }
            break
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(simplemenu)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
            case 'simplemenu': case 'list': {
            await Queen.sendMessage(m.chat, { react: { text: `๐ค๏ธ`, key: m.key }})
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let ments = [ownernya, me, ini_mark]
            let kukiw = `*${GreetingTime}*
โโโโ๊ฅใ เถดเถปเทเทเทเถฝเถ เทเทเทเทเถญเถป ใ๊ฅโโฌฃ
โโพ *เถดเถปเทเทเทเถฝเถ เถฑเทเถธเถบ* : ${pushname}
โโพ *เถดเถปเทเทเทเถฝเถ เถเถเถเถบ* : @${me.split('@')[0]}
โโพ *Premium เถญเถญเทเทเถบ* : ${isPremium ? 'โ' : `โ`}
โโพ *เทเทเถธเทเท* : ${isPremium ? 'โพเถเทเทเถธเทเถญเถบเท.' : `ใฝ๏ธ${db.data.users[m.sender].limit}`}
โโ๊ฅ

โโโโ๊ฅใ เถถเทเถงเท เถดเทเทเทเถถเถฏเท ใ๊ฅโโฌฃ
โโพ *เถถเทเถงเทเถเท เถฑเทเถธเถบ* : ${pushname}
โโพ *เถถเทเถงเทเถเท เถเถเถเถบ* : @${ini_mark.split('@')[0]}
โโพ *เทเทเถธเทเถเถปเท* : @${ownernya.split('@')[0]}
โโพ *เถธเทเถฏเทเถฝเทเถบ* : ${Queen.public ? 'Public' : `Self`}
โโพ *เถเถดเทเถปเทเถเถบ* :ใ MULTI-PREFIX ใ
โโ๊ฅ

โโ๊ฅใ เถฏเทเถฑเถบ เทเท เทเทเถฝเทเท ใ๊ฅโโฌฃ
โโพ *เถฏเทเถฑเถบ* : ${hariini}
โโพ *เทเทเถฝเทเท* : ${tengah}
โโโโโโโ๊ฅ
โโ๊ฅ
โโพ๐ เถธเทเถธ เถเถฑเทเถธ เทเทเถฐเทเถฑเถบเถเท เถทเทเทเทเถญเท เถเทเถปเทเถธเถง 
โ          เถธเทเทเท เถงเถบเทเถดเท เถเถปเถฑเทเถฑ
โ       " *${prefix}เทเทเถฐเทเถฑเถบ* ".
โ 
โ๐ Support เถเถซเทเถฉเทเถบเถธเท เทเถถเทเถณเทเถบ เถฝเถถเท 
โ เถเทเถฑเทเถธเถง "*${prefix}supportgroup* 
โ                 เถงเถบเทเถดเท เถเถปเถฑเทเถฑ".
โ๐ เทเถธเทเถดเทเถปเทเถซ เทเทเถฐเทเถฑ เถฝเทเถบเทเทเทเถญเทเท เถฝเถถเท
โ  เถเทเถฑเทเถธเถง" *${prefix}allmenu* "เถงเถบเทเถดเท เถเถปเถฑเทเถฑ .
โโโโโโโ๊ฅ`
                let sections = [
                {
                title: "<<<--------------------------<<<๐ค๐๐ฒ๐ฒ๐ป ๐ ๐ ๐๐ผ๐ ๐ ๐ฒ๐ป๐>>>-------------------------->>>",
                rows: [
                {title: " ๐๐ฟ๐ผ๐๐ฝ ๐ ๐ฒ๐ป๐ ", rowId: `mgroup`, description: `(<<<----๐ฅ Group เถดเถปเทเถดเทเถฝเถฑเถบ เทเท เทเถธเทเถถเถฑเทเถฐ เทเทเถบเถฝเทเถธ เทเทเถฐเทเถฑ ๐ฅ---->>>)`},
                {title: " ๐ช๐ฒ๐ฏ๐๐ผ๐ป๐ฒ ๐ ๐ฒ๐ป๐ ", rowId: `mwebzone`, description: `(<<<----๐น Webzone เทเท เทเถธเทเถถเถฑเทเถฐ เทเทเถบเถฝเทเถธ เทเทเถฐเทเถฑ ๐น---->>>)`},
                {title: " ๐๐ผ๐๐ป๐น๐ผ๐ฎ๐ฑ ๐ ๐ฒ๐ป๐ ", rowId: `mdownloader`, description: `(<<<----๐ฅ Download เทเท เทเถธเทเถถเถฑเทเถฐ เทเทเถบเถฝเทเถธ เทเทเถฐเทเถฑ ๐ฅ---->>>)`},
                {title: " ๐ฆ๐ฒ๐ฎ๐ฟ๐ฐ๐ต ๐ ๐ฒ๐ป๐ ", rowId: `msearch`, description: `(<<<----๐Search เทเท เทเถธเทเถถเถฑเทเถฐ เทเทเถบเถฝเทเถธ เทเทเถฐเทเถฑ ๐---->>>)`},
                {title: " ๐ฅ๐ฎ๐ป๐ฑ๐ผ๐บ ๐ ๐ฒ๐ป๐ ", rowId: `mrandom`, description: `(<<<----โ Random เทเท เทเถธเทเถถเถฑเทเถฐ เทเทเถบเถฝเทเถธ เทเทเถฐเทเถฑ โ---->>>)`},
                {title: " ๐ง๐ฒ๐๐ ๐ฃ๐ฟ๐ผ ๐ ๐ฒ๐ป๐ ", rowId: `mtextpro`, description: `(<<<----โ Text Pro เทเท เทเถธเทเถถเถฑเทเถฐ เทเทเถบเถฝเทเถธ เทเทเถฐเทเถฑ โ---->>>)`},
                {title: " ๐ฃ๐ต๐ผ๐๐ผ ๐ผ๐๐ ๐ ๐ฒ๐ป๐ ", rowId: `mphotooxy`, description: `(<<<----๐๏ธ Photo Oxy เทเท เทเถธเทเถถเถฑเทเถฐ เทเทเถบเถฝเทเถธ เทเทเถฐเทเถฑ ๐๏ธ---->>>)`},
                {title: " ๐๐ฝ๐ต๐ผ๐๐ผ ๐ ๐ฒ๐ป๐ ", rowId: `mephoto`, description: `(<<<----๐ณ Ephoto เทเท เทเถธเทเถถเถฑเทเถฐ เทเทเถบเถฝเทเถธ เทเทเถฐเทเถฑ ๐ณ---->>>)`},
                {title: " ๐๐๐ป ๐ ๐ฒ๐ป๐ ", rowId: `mfun`, description: `(<<<----๐ซ เทเถญเทเถง/เถเทโเถปเทเถฉเท เทเท เทเถธเทเถถเถฑเทเถฐ เทเทเถบเถฝเทเถธ เทเทเถฐเทเถฑ ๐ซ---->>>)`},
                {title: " ๐๐ผ๐ป๐๐ฒ๐ฟ๐ ๐ ๐ฒ๐ป๐ ", rowId: `mconvert`, description: `(<<<----โป๏ธ Convert เทเท เทเถธเทเถถเถฑเทเถฐ เทเทเถบเถฝเทเถธ เทเทเถฐเทเถฑ โป๏ธ---->>>)`},
                {title: " ๐ ๐ฎ๐ถ๐ป ๐ ๐ฒ๐ป๐ ", rowId: `mmain`, description: `(<<<----๐พ เถดเทโเถปเถฐเทเถฑ  เทเทเถฐเทเถฑ ๐พ---->>>)`},
                {title: " ๐๐ฎ๐๐ฎ๐ฏ๐ฎ๐๐ฒ ๐ ๐ฒ๐ป๐ ", rowId: `mdatabase`, description: `(<<<----๐๏ธ Database เทเท เทเถธเทเถถเถฑเทเถฐ เทเทเถบเถฝเทเถธ เทเทเถฐเทเถฑ  ๐๏ธ---->>>)`},
                {title: " ๐๐ป๐ผ๐ป๐๐บ๐ผ๐๐ ๐ ๐ฒ๐ป๐ ", rowId: `manonymous`, description: `(<<<----๐ญ Anonymous Chat เทเท เทเถธเทเถถเถฑเทเถฐ เทเทเถบเถฝเทเถธ เทเทเถฐเทเถฑ ๐ญ---->>>)`},
                {title: " ๐ฉ๐ผ๐ถ๐ฐ๐ฒ ๐ ๐ฒ๐ป๐ ", rowId: `mvoice`, description: `(<<<----๐ถ Voice เทเท เทเถธเทเถถเถฑเทเถฐ เทเทเถบเถฝเทเถธ เทเทเถฐเทเถฑ ๐ถ---->>>)`},
                {title: " ๐ข๐๐ป๐ฒ๐ฟ ๐ ๐ฒ๐ป๐ ", rowId: `mowner`, description: `(<<<----๐ เทเทเถธเทเถเถปเท เทเท  เทเถธเทเถถเถฑเทเถฐ เทเทเถบเถฝเทเถธ เทเทเถฐเทเถฑ ๐---->>>)`},
                {title: " ๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐ ๐ฒ๐ป๐ ", rowId: `mbugmenu`, description: `(<<<----โ ๏ธ เถธเทเถธ เทเทเถฐเทเถฑ เถทเทเทเทเถญเท เถเถฝ เทเทเถเทเถเท เถถเทเถงเท เทเทเถธเทเถเถปเท เทเถง เถดเถธเถซเท โ ๏ธ---->>>)`},
                {title: " ๐ง๐ผ๐ผ๐น ๐ ๐ฒ๐ป๐ ", rowId: `mtools`, description: `(<<<----๐ง๏ธ Tools เทเท  เทเถธเทเถถเถฑเทเถฐ เทเทเถบเถฝเทเถธ เทเทเถฐเทเถฑ ๐ง๏ธ---->>>)`},
                {title: " ๐๐ผ๐ ๐๐ป๐ณ๐ผ ๐ ๐ฒ๐ป๐ ", rowId: `mbotinfomenu`, description: `(<<<----๐๏ธ เถถเทเถงเท เถดเทเทเทเถถเถฏเท เทเทเถบเถฝเทเถธ เทเทเถฐเทเถฑ ๐๏ธ---->>>)`},
                {title: " ๐ฟ๐ค๐ฃ๐๐ฉ๐ ", rowId: `mdonate`, description: `(<<<----๐ฅบ๏ธ Donate เถเถป เถเถดเถเทเถป เถเทเถปเทเถธ เทเถฏเทเท ๐ฅบ๏ธ---->>>)`}
                ]
                },
                ]
                Queen.sendListMsg(m.chat, kukiw, ripo, `*Hello ${pushname}*!`, `๐ค๐๐ฒ๐ฒ๐ป ๐ ๐ ๐ ๐ฒ๐ป๐`, sections, m)
                await Queen.sendMessage(m.chat, { audio: { url: `https://github.com/DarkWinzo/Queen-MD-Module/raw/main/src/Menu.mp3` }})
                 }
                break
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(mgroup)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
            case 'mgroup': {
goup = `โโโโ๊ฅใ *๐๐ฟ๐ผ๐๐ฝ ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}groupinfo
โโพ ${prefix}linkgroup
โโพ ${prefix}disappear [option]
โโพ ${prefix}setppgroup [image]
โโพ ${prefix}setsubject [text]
โโพ ${prefix}setdesc [text]
โโพ ${prefix}group [option]
โโพ ${prefix}editinfo [option]
โโพ ${prefix}add @user
โโพ ${prefix}kick @user
โโพ ${prefix}tagall [text]
โโพ ${prefix}hidetag [text]
โโพ ${prefix}totag [text]
โโพ ${prefix}antilink [on/off]
โโพ ${prefix}antibadword [on/off]
โโพ ${prefix}mute [on/off]
โโพ ${prefix}promote @user
โโพ ${prefix}demote @user
โโพ ${prefix}vote [text]
โโพ ${prefix}devote
โโพ ${prefix}upvote
โโพ ${prefix}checkvote
โโพ ${prefix}deletevote
โโโโโโโ๊ฅ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '๐List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, goup, ripo, m)
              }
            break
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(mwebzone)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
      case 'mwebzone': {
wbzone = `โโ๊ฅใ *๐ช๐ฒ๐ฏ๐๐ผ๐ป๐ฒ ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}covid [Sri Lanka Only]
โโพ ${prefix}weather [Location]
โโพ ${prefix}playstore
โโพ ${prefix}apk
โโพ ${prefix}apkmod
โโพ ${prefix}phones
โโพ ${prefix}cinemashedule
โโพ ${prefix}nowplayingbioskop
โโพ ${prefix}community
โโพ ${prefix}wattpad
โโพ ${prefix}webtoons
โโพ ${prefix}drakor
โโโโโโโ๊ฅ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '๐List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `๐น๏ธ`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, wbzone, ripo, m)
             }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(mdownloader)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
            
            case 'mdownloader': {
dwnloader = `โโ๊ฅใ *๐๐ผ๐๐ป๐น๐ผ๐ฎ๐ฑ ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}tiktoknowm [url]
โโพ ${prefix}tiktokwm [url]
โโพ ${prefix}tiktokmp3 [url]
โโพ ${prefix}instagram [url]
โโพ ${prefix}twitter [url]
โโพ ${prefix}twittermp3 [url]
โโพ ${prefix}facebook [url]
โโพ ${prefix}pinterestdl [url]
โโพ ${prefix}ytmp3 [url]
โโพ ${prefix}ytmp4 [url]
โโพ ${prefix}getmusic [query]
โโพ ${prefix}getvideo [query]
โโพ ${prefix}ummadl [url]
โโพ ${prefix}soundcloud [url]
โโโโโโโ๊ฅ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '๐List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `๐ฅ๏ธ`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, dwnloader, ripo, m)
              }
            break
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(msearh)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
            case 'msearch': {
sarch = `โโ๊ฅใ *๐ฆ๐ฒ๐ฎ๐ฟ๐ฐ๐ต ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}play [query]
โโพ ${prefix}song [query]
โโพ ${prefix}yts [query]
โโพ ${prefix}google [query]
โโพ ${prefix}googleimage [query]
โโพ ${prefix}gcsearch [query]
โโพ ${prefix}pinterest [query]
โโพ ${prefix}wallpaper [query]
โโพ ${prefix}wikimedia [query]
โโพ ${prefix}ytsearch [query]
โโพ ${prefix}ringtone [query]
โโพ ${prefix}stalk [option] [query]
โโโโโโโ๊ฅ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '๐List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, sarch, ripo, m)
              }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo----(mrandom)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
     case 'mrandom': {
rndom = `โโ๊ฅใ *๐ฅ๐ฎ๐ป๐ฑ๐ผ๐บ ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}coffe
โโพ ${prefix}quotesanime
โโพ ${prefix}couple
โโพ ${prefix}couplematch
โโพ ${prefix}anime
โโพ ${prefix}waifu
โโโโโโโ๊ฅ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '๐List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `๐งฉ๏ธ`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, rndom, ripo, m)
              }
            break       
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo----(mtextpro)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//
            case 'mtextpro': {
txtpro = `โโ๊ฅใ *๐ง๐ฒ๐๐ ๐ฃ๐ฟ๐ผ ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}3dchristmas
โโพ ${prefix}3ddeepsea
โโพ ${prefix}americanflag
โโพ ${prefix}3dscifi
โโพ ${prefix}3drainbow
โโพ ${prefix}3dwaterpipe
โโพ ${prefix}halloweenskeleton
โโพ ${prefix}sketch
โโพ ${prefix}bluecircuit
โโพ ${prefix}space
โโพ ${prefix}metallic
โโพ ${prefix}fiction
โโพ ${prefix}greenhorror
โโพ ${prefix}transformer
โโพ ${prefix}berry
โโพ ${prefix}thunder
โโพ ${prefix}magma
โโพ ${prefix}3dcrackedstone
โโพ ${prefix}3dneonlight
โโพ ${prefix}impressiveglitch
โโพ ${prefix}naturalleaves
โโพ ${prefix}fireworksparkle
โโพ ${prefix}matrix
โโพ ${prefix}dropwater
โโพ ${prefix}harrypotter
โโพ ${prefix}foggywindow
โโพ ${prefix}neondevils
โโพ ${prefix}christmasholiday
โโพ ${prefix}3dgradient
โโพ ${prefix}blackpink
โโพ ${prefix}gluetext
โโโโโโโ๊ฅ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '๐List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `โจ๏ธ`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, txtpro, ripo, m)
             }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo----(mphotooxy)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//                       
            case 'mphotooxy': {
potooxy = `โโ๊ฅใ *๐ฃ๐ต๐ผ๐๐ผ ๐ข๐๐ ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}shadow
โโพ ${prefix}romantic
โโพ ${prefix}smoke
โโพ ${prefix}burnpapper
โโพ ${prefix}naruto
โโพ ${prefix}lovemsg
โโพ ${prefix}grassmsg
โโพ ${prefix}lovetext
โโพ ${prefix}coffecup
โโพ ${prefix}butterfly
โโพ ${prefix}harrypotter
โโพ ${prefix}retrolol
โโโโโโโ๊ฅ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '๐List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, potooxy, ripo, m)
              }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo----(mephoto)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
             case 'mephoto': {
ehoto = `โโ๊ฅใ *๐๐ฝ๐ต๐ผ๐๐ผ ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}ffcover
โโพ ${prefix}crossfire
โโพ ${prefix}galaxy
โโพ ${prefix}glass
โโพ ${prefix}neon
โโพ ${prefix}beach
โโพ ${prefix}blackpink
โโพ ${prefix}igcertificate
โโพ ${prefix}ytcertificate
โโโโโโโ๊ฅ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '๐List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `๐ท๏ธ`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, ehoto, ripo, m)
              }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo----(mfun)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
           case 'mfun': {
mun = `โโ๊ฅใ *๐๐๐ป ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}afk
โโพ ${prefix}simisimi
โโพ ${prefix}halah
โโพ ${prefix}hilih
โโพ ${prefix}huluh
โโพ ${prefix}heleh
โโพ ${prefix}holoh
โโพ ${prefix}jadian
โโพ ${prefix}jodohku
โโพ ${prefix}tictactoe
โโพ ${prefix}delttc
โโพ ${prefix}family100
โโพ ${prefix}tebak [option]
โโพ ${prefix}math [mode]
โโพ ${prefix}suitpvp [@tag]
โโโโโโโ๊ฅ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '๐List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `๐ฒ๏ธ`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, mun, ripo, m)
             }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo----(mconvert)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|// 
            case 'mconvert': {
cnvert = `โโ๊ฅใ *๐๐ผ๐ป๐๐ฒ๐ฟ๐ ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}attp
โโพ ${prefix}ttp
โโพ ${prefix}removebg
โโพ ${prefix}wm
โโพ ${prefix}meme
โโพ ${prefix}emojimix
โโพ ${prefix}emojimix2
โโพ ${prefix}toimage
โโพ ${prefix}tovideo
โโพ ${prefix}togif
โโพ ${prefix}tourl
โโพ ${prefix}tovn
โโพ ${prefix}tomp3
โโพ ${prefix}toaudio
โโพ ${prefix}ebinary
โโพ ${prefix}dbinary
โโพ ${prefix}styletext
โโพ ${prefix}smeme
โโโโโโโ๊ฅ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '๐List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `โป๏ธ`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, cnvert, ripo, m)
              }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo----(mmain)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//
            case 'mmain': {
min = `โโ๊ฅใ *๐ ๐ฎ๐ถ๐ป ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}ping
โโพ ${prefix}owner
โโพ ${prefix}menu / ${prefix}?
โโพ ${prefix}runtime/uptime
โโพ ${prefix}delete
โโพ ${prefix}chatinfo
โโพ ${prefix}report
โโพ ${prefix}quoted
โโพ ${prefix}listpc
โโพ ${prefix}listgc
โโพ ${prefix}listonline
โโพ ${prefix}speedtest
โโพ ${prefix}qr
โโโโโโโ๊ฅ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '๐List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `๐ก๏ธ`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, min, ripo, m)     
            }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo----(database)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//            
            case 'mdatabase': {
dtbase = `โโ๊ฅใ *๐๐ฎ๐๐ฎ๐ฏ๐ฎ๐๐ฒ ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}setcmd
โโพ ${prefix}listcmd
โโพ ${prefix}delcmd
โโพ ${prefix}lockcmd
โโพ ${prefix}addmsg
โโพ ${prefix}listmsg
โโพ ${prefix}getmsg
โโพ ${prefix}delmsg
โโโโโโโ๊ฅ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '๐List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `๐ป๏ธ`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, dtbase, ripo, m)
            }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo----(manonymous)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|// 
            
            case 'manonymous': {
aonymous = `โโ๊ฅใ *๐๐ป๐ผ๐ป๐๐บ๐ผ๐๐ ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}anonymous
โโพ ${prefix}start
โโพ ${prefix}next
โโพ ${prefix}leave
โโโโโโโ๊ฅ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '๐List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `๐ญ๏ธ`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, aonymous, ripo, m)
            }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo----(mvoice)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//             
case 'mvoice': {
vice = `โโ๊ฅใ *๐ฉ๐ผ๐ถ๐ฐ๐ฒ ๐๐ต๐ฎ๐ป๐ด๐ฒ๐ฟ* ใ๊ฅโโฌฃ
โโพ ${prefix}bass
โโพ ${prefix}blown
โโพ ${prefix}deep
โโพ ${prefix}earrape
โโพ ${prefix}fast
โโพ ${prefix}fat
โโพ ${prefix}nightcore
โโพ ${prefix}reverse
โโพ ${prefix}robot
โโพ ${prefix}slow
โโพ ${prefix}tupai
โโโโโโโ๊ฅ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '๐List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `๐ค๏ธ`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, vice, ripo, m)
             }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo----(owner)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//             
            case 'mowner': {
oner = `โโ๊ฅใ *๐ข๐๐ป๐ฒ๐ฟ ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}react [emoji]
โโพ ${prefix}chat [option]
โโพ ${prefix}join [link]
โโพ ${prefix}leave
โโพ ${prefix}block @user
โโพ ${prefix}unblock @user
โโพ ${prefix}bcgroup [text]
โโพ ${prefix}bcall [text]
โโพ ${prefix}setppbot [image]
โโพ ${prefix}setexif
โโพ ${prefix}setmenu [option]
โโพ ${prefix}setbotname [text]
โโพ ${prefix}setbotbio [text]
โโพ ${prefix}anticall [text]
โโพ ${prefix}self
โโพ ${prefix}public
โโโโโโโ๊ฅ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '๐List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `๐คด๏ธ`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, oner, ripo, m)
              }
            break
            
            
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(mbugmenu)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//           
           case 'mbugmenu': {
rbug = `โโ๊ฅใ *๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}bug1
โโพ ${prefix}bug2
โโพ ${prefix}bug3
โโพ ${prefix}bugnumber1 [number]
โโพ ${prefix}bugnumber2 [number]
โโโโโโโ๊ฅ

โโ๊ฅ *โ ๏ธ ๐๐๐๐๐๐๐ โ ๏ธ* 
๐๏ธ เถธเทเถธ Bug เทเทเถฐเทเถฑ เถทเทเทเทเถญเทเถเทเถปเทเถธเทเถฏเท เทเทเถฏเทเทเท เถดเถปเทเถฏเท Antivirus Option On เถเถปเถเทเถฑเทเถธ เถเถฑเทเทเทเถปเทโเถบ เทเถฑ เถเถญเถป เถธเท เทเถฏเทเท เถเทเทเทเถฏเท เทเถเถเทเถธเถเท เถธเทเถธ เถถเทเถงเท เทเท เถเถด เทเถญเท เถฑเทเทเถฑ เถเถญเถป เถทเทเทเทเถญเถบ เทเท เทเถฑ เทเทเถฑเทเถบ เถดเทเทเทเถถเถฏเท เทเถธเทเถดเทเถปเทเถซ เทเถเถเทเถธ เถทเทเทเทเถญเท เถเถปเถฑ เถเถถ เทเถญเทเถบ...

๐๏ธ เถเถถเถเท เถเถปเถเทเทเทเทเถง เถดเถธเถฑเถเท เถทเทเทเทเถญเท เถเถปเถฑเทเถฑ..เทเทเถธเทเทเถงเถธ เถธเทเถธ Bug Commands เถทเทเทเทเถญเถบเทเถฑเท เถเถถเถเท เทเถงเทเทเทเถเถดเท เถเทเถซเทเถธ เถญเทเถฑเถธเถเถง(Banned)  เถฝเถเทเทเทเถธเถง เทเทเถ.เถเถธเถฑเทเทเท เทเทเถธเทเถญ เถฝเทเท เถทเทเทเทเถญเท เถเถปเถฑเทเถฑ.
โโโโโโโ๊ฅ
`
let buttons = [{ buttonId: '.ok', buttonText: { displayText: 'Ok' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '๐List Menu' }, type: 1 },{ buttonId: 'donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendButtonText(m.chat, buttons, rbug, ripo, m)
            await Queen.sendMessage(m.chat, { react: { text: `๐น๏ธ`, key: m.key }})
            }
            break        
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(mtools)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//                 
           case 'mtools': {
aonymous = `โโ๊ฅใ *๐ง๐ผ๐ผ๐น ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}ipdomain
โโพ ${prefix}ip
โโพ ${prefix}checknumber
โโพ ${prefix}veriphone
โโพ ${prefix}shortlink
โโพ ${prefix}shortlinkcuttly
โโพ ${prefix}shortlinkisgd
โโพ ${prefix}ssweb-hp
โโพ ${prefix}ssweb-pc
โโพ ${prefix}brainly
โโโโโโโ๊ฅ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '๐List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `๐ง๏ธ`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, aonymous, ripo, m)
            }
            break 
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(All Menu)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|// 
           case 'allmenu': {
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let ments = [ownernya, me, ini_mark]
                anu = `*${GreetingTime}* เทเทเถบเท @${me.split('@')[0]}\n*Powered*  : @${ini_mark.split('@')[0]}\n*Creator* : @${ownernya.split('@')[0]}
โโโโ๊ฅใ *๐๐ฟ๐ผ๐๐ฝ ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}groupinfo
โโพ ${prefix}linkgroup
โโพ ${prefix}disappear [option]
โโพ ${prefix}setppgroup [image]
โโพ ${prefix}setsubject [text]
โโพ ${prefix}setdesc [text]
โโพ ${prefix}group [option]
โโพ ${prefix}editinfo [option]
โโพ ${prefix}add @user
โโพ ${prefix}kick @user
โโพ ${prefix}tagall [text]
โโพ ${prefix}hidetag [text]
โโพ ${prefix}totag [text]
โโพ ${prefix}antilink [on/off]
โโพ ${prefix}antibadword [on/off]
โโพ ${prefix}mute [on/off]
โโพ ${prefix}promote @user
โโพ ${prefix}demote @user
โโพ ${prefix}vote [text]
โโพ ${prefix}devote
โโพ ${prefix}upvote
โโพ ${prefix}checkvote
โโพ ${prefix}deletevote
โโ๊ฅ
โโ๊ฅใ *๐ช๐ฒ๐ฏ๐๐ผ๐ป๐ฒ ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}covid [Sri Lanka Only]
โโพ ${prefix}weather [Location]
โโพ ${prefix}playstore
โโพ ${prefix}apk
โโพ ${prefix}apkmod
โโพ ${prefix}phones
โโพ ${prefix}cinemashedule
โโพ ${prefix}nowplayingbioskop
โโพ ${prefix}community
โโพ ${prefix}wattpad
โโพ ${prefix}webtoons
โโพ ${prefix}drakor
โโ๊ฅ
โโ๊ฅใ *๐๐ผ๐๐ป๐น๐ผ๐ฎ๐ฑ ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}tiktoknowm [url]
โโพ ${prefix}tiktokwm [url]
โโพ ${prefix}tiktokmp3 [url]
โโพ ${prefix}instagram [url]
โโพ ${prefix}twitter [url]
โโพ ${prefix}twittermp3 [url]
โโพ ${prefix}facebook [url]
โโพ ${prefix}pinterestdl [url]
โโพ ${prefix}ytmp3 [url]
โโพ ${prefix}ytmp4 [url]
โโพ ${prefix}getmusic [query]
โโพ ${prefix}getvideo [query]
โโพ ${prefix}ummadl [url]
โโพ ${prefix}soundcloud [url]
โโ๊ฅ
โโ๊ฅใ *๐ฆ๐ฒ๐ฎ๐ฟ๐ฐ๐ต ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}play [query]
โโพ ${prefix}song [query]
โโพ ${prefix}yts [query]
โโพ ${prefix}google [query]
โโพ ${prefix}googleimage [query]
โโพ ${prefix}gcsearch [query]
โโพ ${prefix}pinterest [query]
โโพ ${prefix}wallpaper [query]
โโพ ${prefix}wikimedia [query]
โโพ ${prefix}ytsearch [query]
โโพ ${prefix}ringtone [query]
โโพ ${prefix}stalk [option] [query]
โโ๊ฅ
โโ๊ฅใ *๐ฅ๐ฎ๐ป๐ฑ๐ผ๐บ ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}coffe
โโพ ${prefix}quotesanime
โโพ ${prefix}couple
โโพ ${prefix}anime
โโพ ${prefix}waifu
โโ๊ฅ
โโ๊ฅใ *๐ง๐ฒ๐๐ ๐ฃ๐ฟ๐ผ ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}3dchristmas
โโพ ${prefix}3ddeepsea
โโพ ${prefix}americanflag
โโพ ${prefix}3dscifi
โโพ ${prefix}3drainbow
โโพ ${prefix}3dwaterpipe
โโพ ${prefix}halloweenskeleton
โโพ ${prefix}sketch
โโพ ${prefix}bluecircuit
โโพ ${prefix}space
โโพ ${prefix}metallic
โโพ ${prefix}fiction
โโพ ${prefix}greenhorror
โโพ ${prefix}transformer
โโพ ${prefix}berry
โโพ ${prefix}thunder
โโพ ${prefix}magma
โโพ ${prefix}3dcrackedstone
โโพ ${prefix}3dneonlight
โโพ ${prefix}impressiveglitch
โโพ ${prefix}naturalleaves
โโพ ${prefix}fireworksparkle
โโพ ${prefix}matrix
โโพ ${prefix}dropwater
โโพ ${prefix}harrypotter
โโพ ${prefix}foggywindow
โโพ ${prefix}neondevils
โโพ ${prefix}christmasholiday
โโพ ${prefix}3dgradient
โโพ ${prefix}blackpink
โโพ ${prefix}gluetext
โโ๊ฅ
โโ๊ฅใ *๐ฃ๐ต๐ผ๐๐ผ ๐ข๐๐ ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}shadow
โโพ ${prefix}romantic
โโพ ${prefix}couplematch
โโพ ${prefix}smoke
โโพ ${prefix}burnpapper
โโพ ${prefix}naruto
โโพ ${prefix}lovemsg
โโพ ${prefix}grassmsg
โโพ ${prefix}lovetext
โโพ ${prefix}coffecup
โโพ ${prefix}butterfly
โโพ ${prefix}harrypotter
โโพ ${prefix}retrolol
โโ๊ฅ
โโ๊ฅใ *๐๐ฝ๐ต๐ผ๐๐ผ ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}ffcover
โโพ ${prefix}crossfire
โโพ ${prefix}galaxy
โโพ ${prefix}glass
โโพ ${prefix}neon
โโพ ${prefix}beach
โโพ ${prefix}blackpink
โโพ ${prefix}igcertificate
โโพ ${prefix}ytcertificate
โโ๊ฅ
โโ๊ฅใ *๐๐๐ป ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}afk
โโพ ${prefix}simisimi
โโพ ${prefix}halah
โโพ ${prefix}hilih
โโพ ${prefix}huluh
โโพ ${prefix}heleh
โโพ ${prefix}holoh
โโพ ${prefix}jadian
โโพ ${prefix}jodohku
โโพ ${prefix}tictactoe
โโพ ${prefix}delttc
โโพ ${prefix}family100
โโพ ${prefix}tebak [option]
โโพ ${prefix}math [mode]
โโพ ${prefix}suitpvp [@tag]
โโ๊ฅ
โโ๊ฅใ *๐๐ผ๐ป๐๐ฒ๐ฟ๐ ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}attp
โโพ ${prefix}ttp
โโพ ${prefix}removebg
โโพ ${prefix}wm
โโพ ${prefix}meme
โโพ ${prefix}emojimix
โโพ ${prefix}emojimix2
โโพ ${prefix}toimage
โโพ ${prefix}tovideo
โโพ ${prefix}togif
โโพ ${prefix}tourl
โโพ ${prefix}tovn
โโพ ${prefix}tomp3
โโพ ${prefix}toaudio
โโพ ${prefix}ebinary
โโพ ${prefix}dbinary
โโพ ${prefix}styletext
โโพ ${prefix}smeme
โโ๊ฅ
โโ๊ฅใ *๐ ๐ฎ๐ถ๐ป ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}ping
โโพ ${prefix}owner
โโพ ${prefix}menu / ${prefix}?
โโพ ${prefix}runtime/uptime
โโพ ${prefix}delete
โโพ ${prefix}chatinfo
โโพ ${prefix}report
โโพ ${prefix}quoted
โโพ ${prefix}listpc
โโพ ${prefix}listgc
โโพ ${prefix}listonline
โโพ ${prefix}speedtest
โโพ ${prefix}qr
โโ๊ฅ
โโ๊ฅใ *๐๐ฎ๐๐ฎ๐ฏ๐ฎ๐๐ฒ ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}setcmd
โโพ ${prefix}listcmd
โโพ ${prefix}delcmd
โโพ ${prefix}lockcmd
โโพ ${prefix}addmsg
โโพ ${prefix}listmsg
โโพ ${prefix}getmsg
โโพ ${prefix}delmsg
โโ๊ฅ
โโ๊ฅใ *๐๐ป๐ผ๐ป๐๐บ๐ผ๐๐ ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}anonymous
โโพ ${prefix}start
โโพ ${prefix}next
โโพ ${prefix}leave
โโ๊ฅ
โโ๊ฅใ *๐ฉ๐ผ๐ถ๐ฐ๐ฒ ๐๐ต๐ฎ๐ป๐ด๐ฒ๐ฟ* ใ๊ฅโโฌฃ
โโพ ${prefix}bass
โโพ ${prefix}blown
โโพ ${prefix}deep
โโพ ${prefix}earrape
โโพ ${prefix}fast
โโพ ${prefix}fat
โโพ ${prefix}nightcore
โโพ ${prefix}reverse
โโพ ${prefix}robot
โโพ ${prefix}slow
โโพ ${prefix}tupai
โโ๊ฅ
โโ๊ฅใ *๐ข๐๐ป๐ฒ๐ฟ ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}react [emoji]
โโพ ${prefix}chat [option]
โโพ ${prefix}join [link]
โโพ ${prefix}leave
โโพ ${prefix}block @user
โโพ ${prefix}unblock @user
โโพ ${prefix}bcgroup [text]
โโพ ${prefix}bcall [text]
โโพ ${prefix}setppbot [image]
โโพ ${prefix}setexif
โโพ ${prefix}setmenu [option]
โโพ ${prefix}setbotname [text]
โโพ ${prefix}setbotbio [text]
โโพ ${prefix}anticall [text]
โโพ ${prefix}self
โโพ ${prefix}public
โโ๊ฅ
โโ๊ฅใ *๐๐๐ด ๐ฉ๐ถ๐ฟ๐๐ ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}bug1
โโพ ${prefix}bug2
โโพ ${prefix}bug3
โโพ ${prefix}bugnumber1
โโพ ${prefix}bugnumber2
โโ๊ฅ
โโ๊ฅใ *๐ง๐ผ๐ผ๐น ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}ipdomain
โโพ ${prefix}ip
โโพ ${prefix}checknumber
โโพ ${prefix}veriphone
โโพ ${prefix}shortlink
โโพ ${prefix}shortlinkcuttly
โโพ ${prefix}shortlinkisgd
โโพ ${prefix}ssweb-hp
โโพ ${prefix}ssweb-pc
โโพ ${prefix}brainly
โโ๊ฅ
โโ๊ฅใ *๐๐ผ๐ ๐๐ป๐ณ๐ผ ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}help
โโพ ${prefix}donate
โโพ ${prefix}sc
โโพ ${prefix}rules
โโพ ${prefix}sponsor
โโโโโโโ๊ฅ
              
                 แดพแตสทแตสณแตแต แดฎสธ Qแตแตแตโฟโปแดนแดฐ`
                let buttons = [{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'โRules' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, anu, ripo, m, {mentions: ments})
            }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo--(mbotinfomenu)-->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//  
            case 'mbotinfomenu': {
aonymous = `โโ๊ฅใ *๐๐ผ๐ ๐๐ป๐ณ๐ผ ๐ ๐ฒ๐ป๐* ใ๊ฅโโฌฃ
โโพ ${prefix}help
โโพ ${prefix}donate
โโพ ${prefix}sc
โโพ ${prefix}rules
โโพ ${prefix}sponsor
โโโโโโโ๊ฅ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '๐List Menu' }, type: 1 },{ buttonId: '.donate', buttonText: { displayText: 'Donate' }, type: 1 }]
            await Queen.sendMessage(m.chat, { react: { text: `๐๏ธ`, key: m.key }})
            await Queen.sendButtonText(m.chat, buttons, aonymous, ripo, m)
            }
            break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo---->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//                  
            case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
Queen_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
Queen.sendMessage(m.chat, { react: { text: `๐ง๏ธ`, key: m.key }})
break
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo---->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//      
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
            
        if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
   }
   if (antiToxic)
   if (bad.includes(wizbotv1)) {
   if (m.text) {
   wizv1 = `*ANTIBAD WORDS*\n\n*Lucky you, you are admin*`
   if (isAdmins) return m.reply(wizv1)
   if (m.key.fromMe) return m.reply(wizv1)
   if (isCreator) return m.reply(wizv1)
   kice = m.sender
   await Queen.groupParticipantsUpdate(m.chat, [kice], 'remove')
   Queen.sendMessage(from, {text:`*ANTIBAD WORDS*\n\n@${kice.split("@")[0]} *was kicked because of being rude to others in this group*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})}
   }
if (isCmd && budy.toLowerCase() != undefined) {
            if (m.chat.endsWith('broadcast')) return
            if (m.isBaileys) return
            let msgs = global.db.data.database
            if (!(budy.toLowerCase() in msgs)) return
            KingOfBear.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
        }
        }
//|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|โ โธDarkWinzo---->>>Queen MDโข โ|โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|//              

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
