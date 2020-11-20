exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU DONASI ${BotName}* ]----- 🔰
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Want to donate? ✨

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♻ Please donate below :
   
⚜ *paytm*: 919677331878
⚜ *#DANA*: 919677331878
⚜ *#BANK*: 919677331878
⚜ *#PULSA*: 919677331878
⚜ *#GOPAY*: 919677331878
⚜ *#SAWERIA*: https://saweria.co/donate/bintangnurpradana

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
  
⚠️ Use it wisely mask‼️
⚠️ This bot is running ${kapanbotaktif} ‼️

✳️ Official Grub [1] : ${grupch1}

✳️ Official Grub [2] : ${grupch2}

  
🔰 ----[ *POWERED BY ${BotName}* ]---- 🔰`
}
