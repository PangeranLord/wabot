let handler = async (m, { conn, participants }) => {
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('Done! Bot nya sudah mati di group ini..')
  // } else m.reply('Ada nomor host disini...')
}
handler.help = ['banchat']
handler.tags = ['owner','admin']
handler.command = /^banchat$/i
handler.owner = true
handler.group = true
handler.admin = true

module.exports = handler
