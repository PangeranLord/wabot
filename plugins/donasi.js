let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • myXL [087832147584]
│ • Indosat Ooredoo [085719579904]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay, OVO, Dana [087832147584]
│ • https://saweria.co/Pangerann
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
