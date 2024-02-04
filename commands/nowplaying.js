const { EmbedBuilder } = require('discord.js');
const db = require("../mongoDB");
module.exports = {
  name: "nowplaying",
  description: "liat info lagu yang diputar",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {

      const queue = client.player.getQueue(interaction.guild.id);
      if (!queue || !queue.playing) return interaction.reply({ content: `gada musiknya coy!!`, ephemeral: true }).catch(e => { })

      const track = queue.songs[0];
      if (!track) return interaction.reply({ content: `gada musiknya coy!!`, ephemeral: true }).catch(e => { })

      const embed = new EmbedBuilder();
      embed.setColor(client.config.embedColor);
      embed.setThumbnail(track.thumbnail);
      embed.setTitle(track.name)
      embed.setDescription(`> **Audio** \`%${queue.volume}\`
> **durasi :** \`${track.formattedDuration}\`
> **link :** **${track.url}**
> **Mode ngulang :** \`${queue.repeatMode ? (queue.repeatMode === 2 ? 'Semua antrian' : 'lagu ini') : 'mati'}\`
> **filter**: \`${queue.filters.names.join(', ') || 'mati'}\`
> **oleh :** <@${track.user.id}>`);


      interaction.reply({ embeds: [embed] }).catch(e => { })

    }  catch (e) {
    console.error(e); 
  }
  },
};
