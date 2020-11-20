exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU ${BotName}* ]----- 🔰
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Here are some of the features of bot!✨

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♻ Command / Perintah :
   
=> *1.STICKER MAKER*
_${BotName} will send sticker caption #sticker!_
Command: #sticker
Example: send pictures captions #sticker

=> *2.AUTOMATIC WRITING*
_${BotName} will send the writing  the book according to what you sent!_
Command: #nulis [kata]
Example: #nulis handsome star

=> *3.RHYME FEATURES*
_${BotName} will send a random rhyme!_
Command: #pantun
Example: #pantun

=> *4.DOWNLOADER YOUTUBE*
_${BotName} will send the video downloader from youtube according to your command!_
Command: #yt [link]
Example: #yt https://youtu.be/blablabla

=> *5.QUOTES FEATURES*
_${BotName} will send a random word of wisdom!_
Command: #quotes
Example: #quotes

=> *6.TIMELINE REFRESTER*
_${BotName} will send the cogan / beauty image according to what you sent!_
Command: #ptl [cewek/cowok]
Example: #ptl cewek

=> *7.ANIME FEATURES*
_${BotName} will send anime images randomly!_
Command: #randomanime
Example: #randomanime

=> *8.GOOGLE VOICE CHANGER*
_${BotName} will send the vn voice from google according to the command you send!_
Command: #ttsid [kata]
Example: #ttsid handsome star

=> *9.QURAN FEATURES*
_${BotName} will send random Quran verses!_
Command: #quran
Example: #quran

=> *10.INFORMATION BOT*
_${BotName} will send information about the bot!_
Command: #info
Example: #info

=> *11.FEATURES SAY*
_${BotName} will send the words according to what you send!_
Command: #say [kata]
Example: #say halo bintang ganteng

=> *12.YOUTUBE MP3 DOWNLOADER*
_${BotName} will send the song according to the command you sent!_
Command: #ytmp3 [link]
Example: #ytmp3 https://youtu.be/xxxx

=> *13.INSTAGRAM VIDEO/FOTO DOWNLOADER*
_${BotName} will send ig video / photo according to the order you send!_
Command: #ig [link]
Example: #ig https://instagram.com/xxxx

=> *14.FACEBOOK VIDEO/FOTO DOWNLOADER*
_${BotName} will send the video / photo fb according to the order you send!_
Command: #fb [link]
Example: #fb https://facebook.com/xxxx

=> *15.TWITTER VIDEO/FOTO DOWNLOADER*
_${BotName} will send a twitter video / photo according to the command you send!_
Command: #twt [link]
Example: #twt https://twitter.com/xxxx

=> *16.WIKIPEDIA*
_${BotName} will send the results from wikipedia according to the command you send!_
Command: #wiki [query]
Example: #wiki anjing

♻️ DO NOT FORGET TO DONATE TO CONTINUE ACTIVE BOT!
♻️ WANT TO DONATE? PLEASE TYPE #donate

📺 *Iklan* :

✅ Follow the admin instagram account ${instagramlu}

⚠️ LATEST COVID-19 INFORMATION!

⚠️ POSITIVE: *${corohelp.confirmed.value}*
⚠️ HEAL: *${corohelp.recovered.value}*
⚠️ DIED: *${corohelp.deaths.value}*
⚠️ UPDATE: *${corohelp.lastUpdate}*

♻️ _KEEP YOUR HEALTH AND ALWAYS USE A MASK!_

♻️ Want to advertise on *${BotName} ?*
☎️ WA : *${whatsapplu}*
  
⚠️ Use it wisely ‼️
⚠️ This bot is running ${kapanbotaktif} ‼️

✳️ Official YOUTUBE [1] : ${grupch1}

✳️ Official YOUTUBE [2] : ${grupch2}

  
🔰 ----[ *POWERED BY ${BotName}* ]---- 🔰`
}
