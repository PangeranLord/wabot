let hmtai = require('hmtai')

let handler = async(m, { conn }) => {

let img = await hmtai.nsfw.blowjob()
await conn.sendFile(m.chat, img, '', '', m)

}
handler.help = ['blowjob']
handler.tags = ['anime']
handler.limit = true

handler.command = /^(blowjob)$/i

module.exports = handler
