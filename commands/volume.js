const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const maxVol = require("../config.js").opt.maxVol;
const db = require("../mongoDB");

module.exports = {
  name: "volume",
  description: "atur volume sesukamu!",
  permissions: "0x0000000000000800",
  options: [{
    name: 'volume',
    description: 'ketik angkanya buat ngerubah volume.',
    type: ApplicationCommandOptionType.Integer,
    required: true
  }],
  voiceChannel: true,
  run: async (client, interaction) => {
    try {
      const queue = client.player.getQueue(interaction.guild.id);
      if (!queue || !queue.playing) {
        return interaction.reply({ content: 'gada musiknya coy!!', ephemeral: true });
      }

      const vol = parseInt(interaction.options.getInteger('volume'));

      if (!vol) {
        return interaction.reply({
          content: `Current volume: **${queue.volume}** buat ngerubah volume, ketik angka \`1\` sampai \`${maxVol}\`.`,
          ephemeral: true
        });
      }

      if (queue.volume === vol) {
        return interaction.reply({ content: 'volume sekarang berhasil diatur ke **' + vol + '**!', ephemeral: true });
      }

      if (vol < 1 || vol > maxVol) {
        return interaction.reply({
          content: `masukin angka antara \`1\` sampai \`${maxVol}\` kocak!.`,
          ephemeral: true
        });
      }

      const success = queue.setVolume(vol);

      if (success) {
        const embed = new EmbedBuilder()
          .setColor('#d291fe')
          .setAuthor({
        name: 'Musikmu! Rulesmu!',
        iconURL: 'https://cdn.discordapp.com/attachments/1156866389819281418/1157528025739563088/5657-volume-icon.png?ex=6518ef7b&is=65179dfb&hm=1797c2830537a28b5c6a57564517cc509146d02383a69fb4239d7b5d55aceeed&', 
        url: 'https://discord.gg/cbxcCQdJsj'
    })
          .setDescription(`**atur volume : ** **${vol}/${maxVol}**`);

        return interaction.reply({ embeds: [embed] });
      } else {
        return interaction.reply({ content: 'nahkan error waktu ngerubah volumenya.', ephemeral: true });
      }
    } catch (e) {
      console.error(e);
    }
  },
};
