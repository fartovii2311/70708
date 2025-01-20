import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
   await m.react('☁️');

    // VCARD
    let list = [{
        displayName: "Darkcore ☁️",
        vcard: `BEGIN:VCARD\nVERSION:3.0\nFN: Darkcore\nitem1.TEL;waid=51968382008:51968382008\nitem1.X-ABLabel:Número\nitem2.EMAIL;type=INTERNET: darkcore@example.com\nitem2.X-ABLabel:Email\nitem3.URL:https://darkcore-support.vercel.app/\nitem3.X-ABLabel:Internet\nitem4.ADR:;; Perú;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
    }];

    await conn.sendMessage(m.chat, {
        contacts: {
            displayName: `${list.length} Contacto`,
            contacts: list
        },
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: 'һ᥆ᥣᥲ s᥆ᥡ ᑕrᥱᥲძ᥆r Darkcore ☁️',
                body: 'Este es el contacto oficial de mi creador',
                thumbnailUrl: '',
                sourceUrl: 'https://darkcore-support.vercel.app/',
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });

    await conn.sendMessage(m.chat, {
        text: '👋 Hola, este es el contacto oficial de mi creador.',
        footer: '© Darkcore ☁️',
        buttons: [
            {
                buttonId: ".menu",
                buttonText: {
                    displayText: 'MENU BOT'
                },
                type: 1
            }
        ],
        viewOnce: true,
        headerType: 1
    }, { quoted: m });
};

handler.help = ['owner', 'creator'];
handler.tags = ['main'];
handler.command = /^(owner|creator|creador|dueño)$/i;

export default handler;
