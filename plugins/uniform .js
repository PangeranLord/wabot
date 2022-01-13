let hmtai = require('hmtai')

let handler = async(m, { conn }) => {

let img = await hmtai.nsfw.uniform()
await conn.sendFile(m.chat, img, '', '', m)

}
handler.help = ['uniform']
handler.tags = ['anime']
handler.premium = true
handler.limit = true

handler.command = /^(uniform)$/i

module.exports = handler
