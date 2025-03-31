let handler = async (m, { isPrems, conn }) => {

let img = 'https://i.pinimg.com/736x/0b/13/7a/0b137aecc6031644f4c522c5f593f43f.jpg' 
let texto = `🌟 𝐌𝐄𝐍𝐔 🌟
*˚₊·˚₊· ͟͟͞͞➳❥ @${m.sender.split("@")[0]}*
*│* ┊▸ ✦ 
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*│*
*│ ㊂ ▸▸ _Создатель Пуся  
*│ ㊂ ▸▸ _Номер +79054621061
*╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙
*│* ┊*│* ┊▸ ✦,
*│* ┊▸ ✦ вызов 
*│* ┊▸ ✦ внимание
*│* ┊▸ ✦ снести
*│* ┊▸ ✦ удалить
*│* ┊▸ ✦ молчуны
*│* ┊▸ ✦ неактивные
*│* ┊▸ ✦ ссылка
*│* ┊▸ ✦ создатель
*│* ┊▸ ✦ аренда 
*│* ┊▸ ✦ чекаренды 
*│* ┊▸ ✦ удалитьаренду
*│* ┊▸ ✦ автоадмин
*│* ┊▸ ✦ активность
*│* ┊▸ ✦ группу закрыть/открыть
*│* ┊▸ ✦ включить/выключить антиссылка
*│* ┊▸ ✦ включить/выключить антиссылка2
*│* ┊▸ ✦ включить/выключить приветствие
*│* ┊▸ ✦ включить/выключить ограничить
*│* ┊▸ ✦ включить/выключить авточтение
*│* ┊▸ ✦ включить/выключить антивызов
*│* ┊▸ ✦ включить/выключить антиличка
*│* ┊▸ ✦ включить/выключить антиудаление
*│* ┊▸ ✦ включить/выключить реакция
*│* ┊▸ ✦ включить/выключить толькоадмин
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙
──────────────────
⚠️ *Ознакомтесь с правильностью команд*.`
const fkontak = {
        "key": {
    "participants":"0@s.whatsapp.net",
                "remoteJid": "status@broadcast",
                "fromMe": false,
                "id": "Halo"
        },
        "message": {
                "contactMessage": {
                        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
        },
        "participant": "0@s.whatsapp.net"
}
await conn.sendFile(m.chat, img, 'img.jpg', texto, fkontak)
}
handler.help = ['menuhot (menu +18)']
handler.tags = ['main']
handler.command = ['меню'] 
export default handler;
