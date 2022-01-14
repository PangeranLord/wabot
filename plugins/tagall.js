let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  m.reply('*[T A G - A L L...!\n' + text + '\n' + users.map(v => '@' + v.replace(/@.+/, '')).join`\n`, null, {
    contextInfo: { mentionedJid: users }
  })
}
handler.command = ['tagall']

handler.admin = true
handler.group = true
handler.limit = true

module.exports = handler
