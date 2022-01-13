let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  m.reply(text + '\n' + users.map(v => '@' + v.replace(/@.+/, '')).join`\n`, null, {
    contextInfo: { mentionedJid: users }
  })
}
handler.command = ['tagall']
handler.tags = ['owner']
handler.command = /^(otagall|o\-)$/i

handler.owner = true
handler.group = true

module.exports = handler
