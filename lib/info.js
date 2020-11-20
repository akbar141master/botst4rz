exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU ${BotName}* ]----- 🔰
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Here is the info on the bot! ✨

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♻ INFO BOT! :
   
⚜ *GITHUB*: https://github.com/akbar141master/botst4rz
⚜ *AUTHOR*: BINTANG NUR PRADANA
⚜ *DESIGNER*: BINTANG NUR PRADANA
⚜ *YOUTUBE*: BINTANG NUR PRADANA
⚜ *SCRIPT ORIGINAL BY*: AKBAR / FDCIABDUL

♻ OTHER INFO! :

OH YES THIS SCRIPT is 100% FREE.
SCRIPT IS MADE IN THE NODE PROGRAMMING LANGUAGE .JS
LATEST BOT UPDATE AT YOUTUBE 

♻️ DONT FORGET TO DONATE FOR THE BOT TO BE ACTIVE!
♻️ WANT TO DONATE? PLEASE TYPE #donate

📺 *Iklan* :

✅ Follow the admin instagram account ${instagramlu}

⚠️ LATEST COVID-19 INFORMATION!

⚠️ POSITIF: *${corohelp.confirmed.value}*
⚠️ HEAL: *${corohelp.recovered.value}*
⚠️ DIED: *${corohelp.deaths.value}*
⚠️ UPDATE: *${corohelp.lastUpdate}*

♻️ _KEEP YOUR HEALTH AND ALWAYS USE A MASK!_

♻️ Want to advertise on *${BotName} ?*
☎️ WA : *${whatsapplu}*
  
⚠️ Use it wisely ‼️
⚠️ This bot is running ${kapanbotaktif} ‼️

✳️ Official Grub [1] : ${grupch1}

✳️ Official Grub [2] : ${grupch2}

  
🔰 ----[ *POWERED BY ${BotName}* ]---- 🔰`
}
