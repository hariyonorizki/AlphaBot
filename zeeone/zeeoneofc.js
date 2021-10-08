const petik = '```'
const help = (prefix,hahh,pushname,ownername,status) => {
	return`${hahh} ${pushname}

*◪  ❲ INFORMATION ❳*
${petik}├❒ Owner : ${ownername}
├❒ Base : Self-Bot°©2K21
├❒ Status : ${status}
├❒ Lib : Baileys「 v3.5.0 」
└❒ Prefix : [ ${prefix} ]${petik}

*◪  ❲ LIST MENU ❳*
${petik}├❒ ${prefix}convertmenu
├❒ ${prefix}downloadmenu
├❒ ${prefix}funmenu
├❒ ${prefix}makermenu
├❒ ${prefix}othermenu
├❒ ${prefix}ownermenu
├❒ ${prefix}storagemenu
├❒ ${prefix}tagmenu
└❒ ${prefix}upmenu${petik}

*◪  ❲ ABOUT ❳*
${petik}├❒ ${prefix}source
├❒ ${prefix}mystat
├❒ ${prefix}speed
├❒ ${prefix}status
└❒ ${prefix}runtime${petik}

❒ _Creator BotWea © 2K21_ ❒
`
}
const convert = (prefix) => {
	return`*◪  ❲ CONVERT MENU ❳*
${petik}├❒ ${prefix}toimg
├❒ ${prefix}tomp3
├❒ ${prefix}tomp4
├❒ ${prefix}slow
├❒ ${prefix}fast
├❒ ${prefix}reverse
└❒ ${prefix}tourl${petik}
`
}
const download = (prefix) => {
	return`*◪  ❲ DOWNLOAD MENU ❳*
${petik}├❒ ${prefix}ytsearch${petik} _query_
${petik}├❒ ${prefix}igstalk${petik} _username_
${petik}├❒ ${prefix}ghstalk${petik} _username_
${petik}├❒ ${prefix}play${petik} _query_
${petik}├❒ ${prefix}playmp4${petik} _query_
${petik}├❒ ${prefix}video${petik} _query_
${petik}├❒ ${prefix}ytmp3${petik} _link_
${petik}├❒ ${prefix}ytmp4${petik} _link_
${petik}├❒ ${prefix}ig${petik} _link_
${petik}├❒ ${prefix}twitter${petik} _link_
${petik}├❒ ${prefix}tiktok${petik} _link_
${petik}├❒ ${prefix}tiktokaudio${petik} _link_
${petik}├❒ ${prefix}fb${petik} _link_
${petik}├❒ ${prefix}brainly${petik} _query_
${petik}├❒ ${prefix}image${petik} _query_
${petik}└❒ ${prefix}anime${petik} _random_
`
}
const allmenu = (prefix, wita, wit, ucapannya, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensiii, tekss)  => {
	return`❏───「 *ALPHA BOT* 」───❏
     
┌❏ *INDONESIA TIME*
${petik}│◦➛ WIB : ${timuu}
│◦➛ WITA : ${wita}
└❏ WIT : ${wit}${petik}
                          
┌❏ *TODAY*
${petik}│◦➛${ucapannya}
│◦➛Jam : ${timuu}
│◦➛Hari : ${thisDay}
└❏ Tanggal : ${ini_tanggal}${petik}

┌❏ *DEVICE*
${petik}│◦➛Whatsapp : ${wa_version}
│◦➛Merk HP : ${device_manufacturer}
│◦➛Versi HP : ${device_model}
│◦➛Versi OS : ${os_version}
│◦➛RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│◦➛MCC : ${mcc}
└❏ MNC : ${mnc}${petik}

┌─❑「 *BOT INFO* 」
${petik}│◦➛Mode : ${status}
│◦➛Prefix : ${prefix}
│◦➛Total Hit : ${hit_today.length}
│◦➛Personal Chat : ${totalchat.length - ini_gcchat.lenght}
│◦➛Total All Chat : ${totalchat.length}
│◦➛Group Chat : ${ini_gcchat}
│◦➛Browser : Chrome
│◦➛Server : Baileys
│◦➛Version : 3.5.1${petik}
${petik}│◦➛Speed :${petik} ${latensiii} 
${petik}└❏ ${tekss}${petik}

┌─❑「 *CONVERT MENU* 」
│
${petik}│◦ ${prefix}toimg
│◦ ${prefix}tomp3
│◦ ${prefix}tomp4
│◦ ${prefix}slow
│◦ ${prefix}fast
│◦ ${prefix}reverse
│◦ ${prefix}tourl${petik}
│
├❑「 *DOWNLOAD MENU* 」
│
${petik}│◦ ${prefix}ytsearch${petik} _query_
${petik}│◦ ${prefix}igstalk${petik} _username_
${petik}│◦ ${prefix}ghstalk${petik} _username_
${petik}│◦ ${prefix}play${petik} _query_
${petik}│◦ ${prefix}playmp4${petik} _query_
${petik}│◦ ${prefix}video${petik} _query_
${petik}│◦ ${prefix}ytmp3${petik} _link_
${petik}│◦ ${prefix}ytmp4${petik} _link_
${petik}│◦ ${prefix}ig${petik} _link_
${petik}│◦ ${prefix}twitter${petik} _link_
${petik}│◦ ${prefix}tiktok${petik} _link_
${petik}│◦ ${prefix}tiktokaudio${petik} _link_
${petik}│◦ ${prefix}fb${petik} _link_
${petik}│◦ ${prefix}brainly${petik} _query_
${petik}│◦ ${prefix}image${petik} _query_
${petik}│◦ ${prefix}anime${petik} _random_
│
├❑「 *FUN MENU* 」
│
${petik}│◦ ${prefix}fitnah
│◦ ${prefix}fitnahpc
│◦ ${prefix}kontak${petik}
│
├❑「 *MAKER MENU* 」
│
${petik}│◦ ${prefix}sticker${petik}
${petik}│◦ ${prefix}swm${petik} author|packname
${petik}│◦ ${prefix}take${petik} author|packname
${petik}│◦ ${prefix}fdeface
│◦ ${prefix}emoji${petik}
│
├❑「 *OTHER MENU* 」
│
${petik}│◦ ${prefix}add
│◦ ${prefix}ping${petik}
${petik}│◦ ${prefix}get${petik} _link_
${petik}│◦ ${prefix}getpp${petik} _@user_
${petik}│◦ ${prefix}getbio${petik} _@user_
${petik}│◦ ${prefix}tagall
│◦ ${prefix}admin
│◦ ${prefix}hentai
│◦ ${prefix}trapnime
│◦ ${prefix}blowjob
│◦ ${prefix}awoo
│◦ ${prefix}megumin${petik}
│
├❑「 *OWNER MENU* 」
│
${petik}│◦ ${prefix}off
│◦ ${prefix}on
│◦ ${prefix}buggc
│◦ ${prefix}bc
│◦ ${prefix}bcimage
│◦ ${prefix}bcgif
│◦ ${prefix}bcvideo
│◦ ${prefix}bcaudio
│◦ ${prefix}bcsticker
│◦ ${prefix}status
│◦ ${prefix}clearall
│◦ ${prefix}self
│◦ ${prefix}public
│◦ ${prefix}join
│◦ ${prefix}leave
│◦ ${prefix}clearall
│◦ ${prefix}setthumb
│◦ ${prefix}settarget
│◦ ${prefix}setfakeimg
│◦ ${prefix}setreply${petik}
${petik}│◦ ${prefix}term${petik} _code_
${petik}│◦ x or >${petik} _code_
│
├❑「 *SET STC CMD* 」
│
${petik}│◦ ${prefix}set_stc_menu
│◦ ${prefix}set_stc_ping
│◦ ${prefix}set_stc_music
│◦ ${prefix}set_stc_gclose
│◦ ${prefix}set_stc_gopen
│◦ ${prefix}set_stc_itos
│◦ ${prefix}set_stc_toimg
│◦ ${prefix}set_stc_self
│◦ ${prefix}set_stc_public${petik}
│
├❑「 *STORAGE  MENU* 」
│
${petik}│◦ ${prefix}addstik 
│◦ ${prefix}addimg 
│◦ ${prefix}addvid 
│◦ ${prefix}addvn   
│◦ ${prefix}liststick
│◦ ${prefix}listimg
│◦ ${prefix}listvid
│◦ ${prefix}listvn${petik}
│
├❑「 *TAG  MENU* 」
│
${petik}│◦ ${prefix}hidetag
│◦ ${prefix}kontag
│◦ ${prefix}sticktag
│◦ ${prefix}totag${petik}
│
├❑「 *UP ESWE* 」
│
${petik}│◦ ${prefix}upswteks
│◦ ${prefix}upswimage
│◦ upswvideo${petik}
│
├❑「 *NSFW & SFW* 」
│
${petik}│◦ ahegao
│◦ ass
│◦ bdsm
│◦ blowjob2
│◦ cuckold
│◦ cum
│◦ ero
│◦ femdom
│◦ foot
│◦ gangbang
│◦ glasses
│◦ hentai2
│◦ hentai_gifs
│◦ jahy
│◦ manga
│◦ masturbation
│◦ neko
│◦ orgy
│◦ panties
│◦ pussy
│◦ neko_sfw
│◦ tentacles
│◦ thighs
│◦ yuri
│◦ zettai${petik}
│
├❑ 「 *STC  MENU* 」
│
${petik}│◦ awoawo
│◦ benedict
│◦ chat
│◦ dbfly
│◦ dino_kuning
│◦ doge
│◦ gojosatoru
│◦ hope_boy
│◦ jisoo
│◦ kr_robot
│◦ kucing
│◦ lonte
│◦ manusia_lidi
│◦ menjamet
│◦ meow
│◦ nicholas
│◦ patrick
│◦ popoci
│◦ sponsbob
│◦ kawan_sponsbob
│◦ tyni${petik}
│
├❑「 *GACHA  MENU* 」 
│
${petik}│◦ china
│◦ indonesia
│◦ malaysia
│◦ thailand
│◦ korea
│◦ japan
│◦ vietnam
│◦ jenni
│◦ jiso
│◦ lisa
│◦ rose${petik}
│
├❑「 *ASUPAN  MENU* 」
│
│ _MAINTENANCE_
│
${petik}│◦ ${prefix}rikagusriani 
│◦ ${prefix}ukhty 
│◦ ${prefix}santuy 
│◦ ${prefix}geayubi   
│◦ ${prefix}bocil
│◦ ${prefix}asupan${petik}
└─❑「 MENU BOT 」

❏───「 *ALPHA BOT* 」───❏
`
}

const fun = (prefix) => {
	return`*❏  FUN MENU*
${petik}├❒ ${prefix}fitnah
├❒ ${prefix}fitnahpc
└❒ ${prefix}kontak${petik}
`
}

const maker = (prefix) => {
	return`*◪  ❲ MAKER MENU ❳*
${petik}├❒ ${prefix}sticker${petik}
${petik}├❒ ${prefix}swm${petik} author|packname
${petik}├❒ ${prefix}take${petik} author|packname
${petik}├❒ ${prefix}fdeface
└❒ ${prefix}emoji${petik}
`
}

const other = (prefix) => {
	return`*◪  ❲ OTHER MENU ❳*
${petik}├❒ ${prefix}add
├❒ ${prefix}ping${petik}
${petik}├❒ ${prefix}get${petik} _link_
${petik}├❒ ${prefix}getpp${petik} _@user_
${petik}├❒ ${prefix}getbio${petik} _@user_
${petik}├❒ ${prefix}tagall
├❒ ${prefix}admin
├❒ ${prefix}hentai
├❒ ${prefix}trapnime
├❒ ${prefix}blowjob
├❒ ${prefix}awoo
└❒ ${prefix}megumin${petik}
`
}

const ownermenu = (prefix) => {
	return`*◪  ❲ OWNER MENU ❳*
${petik}├❒ ${prefix}off
├❒ ${prefix}on
├❒ ${prefix}buggc
├❒ ${prefix}bc
├❒ ${prefix}bcimage
├❒ ${prefix}bcgif
├❒ ${prefix}bcvideo
├❒ ${prefix}bcaudio
├❒ ${prefix}bcsticker
├❒ ${prefix}status
├❒ ${prefix}clearall
├❒ ${prefix}self
├❒ ${prefix}public
├❒ ${prefix}join
├❒ ${prefix}leave
├❒ ${prefix}clearall
├❒ ${prefix}setthumb
├❒ ${prefix}settarget
├❒ ${prefix}setfakeimg
├❒ ${prefix}setreply${petik}
${petik}├❒ ${prefix}term${petik} _code_
${petik}└❒ x or >${petik} _code_
`
}

const setStcCmd = (prefix) => {
	return`*◪  ❲ SET STC CMD ❳*
${petik}├❒ ${prefix}set_stc_menu
├❒ ${prefix}set_stc_ping
├❒ ${prefix}set_stc_music
├❒ ${prefix}set_stc_gclose
├❒ ${prefix}set_stc_gopen
├❒ ${prefix}set_stc_itos
├❒ ${prefix}set_stc_toimg
├❒ ${prefix}set_stc_self
└❒ ${prefix}set_stc_public${petik}

Cara penggunaan :
> ${prefix}set_stc_menu _fileLenght sticker_

Example :
> ${prefix}set_stc_menu 7446
`
}

const storage = (prefix) => {
	return`*◪  ❲ STORAGE MENU ❳*
${petik}├❒ ${prefix}addstik 
├❒ ${prefix}addimg 
├❒ ${prefix}addvid 
├❒ ${prefix}addvn   
├❒ ${prefix}liststick
├❒ ${prefix}listimg
├❒ ${prefix}listvid
└❒ ${prefix}listvn${petik}
`
}
const cecanmenu = (prefix) => {
	return`*◪  ❲ GACHA MENU ❳*
${petik}├❒ china
├❒ indonesia
├❒ malaysia
├❒ thailand
├❒ korea
├❒ japan
├❒ vietnam
├❒ jenni
├❒ jiso
├❒ lisa
└❒ rose${petik}

_No prefix (khusus)_
`
}

const tag = (prefix) => {
	return`*◪  ❲ TAG MENU ❳*
${petik}├❒ ${prefix}hidetag
├❒ ${prefix}kontag
├❒ ${prefix}sticktag
└❒ ${prefix}totag${petik}
`
}

const upmenu = (prefix) => {
	return`*◪  ❲ UP ESWE ❳*
${petik}├❒ ${prefix}upswteks
├❒ ${prefix}upswimage
└❒ ${prefix}upswvideo${petik}
`
}
const nsfw = (prefix) => {
	return`*◪  ❲ NSFW & SFW ❳*
${petik}├❒ ahegao
├❒ ass
├❒ bdsm
├❒ blowjob2
├❒ cuckold
├❒ cum
├❒ ero
├❒ femdom
├❒ foot
├❒ gangbang
├❒ glasses
├❒ hentai2
├❒ hentai_gifs
├❒ jahy
├❒ manga
├❒ masturbation
├❒ neko
├❒ orgy
├❒ panties
├❒ pussy
├❒ neko_sfw
├❒ tentacles
├❒ thighs
├❒ yuri
└❒ zettai${petik}

_No prefix (khusus)_
`
}
const asupan = (prefix) => {
	return`*◪  ❲ ASUPAN MENU ❳*
${petik}├❒ ${prefix}rikagusriani 
├❒ ${prefix}ukhty 
├❒ ${prefix}santuy 
├❒ ${prefix}geayubi   
├❒ ${prefix}bocil
└❒ ${prefix}asupan${petik}
`
}
const telestiker = (prefix) => {
	return`*◪  ❲ STC MENU ❳*
${petik}├❒ awoawo
├❒ benedict
├❒ chat
├❒ dbfly
├❒ dino_kuning
├❒ doge
├❒ gojosatoru
├❒ hope_boy
├❒ jisoo
├❒ kr_robot
├❒ kucing
├❒ lonte
├❒ manusia_lidi
├❒ menjamet
├❒ meow
├❒ nicholas
├❒ patrick
├❒ popoci
├❒ sponsbob
├❒ kawan_sponsbob
└❒ tyni${petik}


_No prefix (khusus)_
`
}

exports.help = help
exports.convert = convert
exports.funmenu = fun
exports.download = download
exports.maker = maker
exports.other = other
exports.ownermenu = ownermenu
exports.storage = storage
exports.tag = tag
exports.telestiker = telestiker
exports.cecanmenu= cecanmenu
exports.set_stc_cmd =  setStcCmd
exports.upmenu = upmenu
exports.nsfw = nsfw
exports.asupan = asupan
exports.allmenu = allmenu