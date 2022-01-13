let hmtai = require('hmtai')

let handler = async(m, { conn }) => {

let img = await hmtai.nsfw.incest ()
await conn.sendFile(m.chat, img, '', '', m)

}
handler.help = ['incest']
handler.tags = ['anime']
handler.premium = true
handler.limit = true

handler.command = /^(incest)$/i

module.exports = handler
