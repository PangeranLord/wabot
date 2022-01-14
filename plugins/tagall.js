let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  m.reply('*[TAG ALL...!]*\n' + text + '\n' + users.map(v => '@' + v.replace(/@.+/, '')).join`\n`, null, {
    contextInfo: { mentionedJid: users }
  })
}
handler.help = ['tagall'].map(v => 'tagall' + v + ' [teks]')
handler.tags = ['admin']
handler.command = /^(tagall|tagall\-)$/i
handler.group = true
handler.admin = true
handler.limit = true

module.exports = handler
