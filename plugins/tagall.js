let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  m.reply('*[TAG ALL...!]*\n' + text + '\n' + users.map(v => '@' + v.replace(/@.+/, '')).join`\n`, null, {
    contextInfo: { mentionedJid: users }
  })
}
handler.help = ['tagall']
handler.tags = ['admin']
handler.command = /^(tagall|\-)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true
handler.limit = true

handler.fail = null

module.exports = handler
