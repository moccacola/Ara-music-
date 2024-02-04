const db = require("../mongoDB");
module.exports = {
  name: "previous",
  description: "putar musik sebelumnya",
  permissions: "0x0000000000000800",
  options: [],
  voiceChannel: true,
  run: async (client, interaction) => {
    try {
      const queue = client.player.getQueue(interaction.guild.id);
      if (!queue || !queue.playing) return interaction.reply({ content: `gada musiknya coy!!`, ephemeral: true }).catch(e => { })
      try {
        let song = await queue.previous()
        interaction.reply({ content: `**Hadeh... ngga di bot musik, sama aja gamon!!**` }).catch(e => { })
      } catch (e) {
        return interaction.reply({ content: `lagu sebelumnya gada!!`, ephemeral: true }).catch(e => { })
      }
    } catch (e) {
    console.error(e); 
  }
  },
};
