let handler = async (m, { conn }) => {
  m.reply('Loading...')
  let res = `https://api.ichikaa.xyz/api/randomimage?q=maid&apikey=AAgXXQeo`
  conn.sendFile(m.chat, res, 'maid.jpg', 'huu suka ama maid', m)
}
handler.help = ['maid']
handler.tags = ['anime']
handler.limit = true
handler.premium = true

handler.command = /^(maid)$/i

module.exports = handler
