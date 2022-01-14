let handler = async (m, { conn }) => {
  global.db.data.chats[m.chat].isBanned = false
  m.reply('Done!')
}
handler.help = ['unbanchat']
handler.tags = ['owner','admin']
handler.command = /^unbanchat$/i
handler.owner,handler.mods,handler.admin = true

module.exports = handler
