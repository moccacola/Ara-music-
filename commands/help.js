/*

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   
   # MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE
   ## FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/FUEHs7RCqz ]
   ## YT : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
*/
const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');

module.exports = {
  name: "help",
  description: "Get information about bot and commands.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const musicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('🎸 **Music Commands**')
        .addFields(
          { name: 'Play', value: 'ayo puter lagu sampe budeg' },
          { name: 'Stop', value: 'kasih aku nafas buat istirahat' },
          { name: 'Queue', value: 'liat dan atur antrian lagu' },
          { name: 'Skip', value: 'lewati lagu yang lagi diputar' },
          { name: 'Pause', value: 'jeda lagu yang lagi diputar' },
          { name: 'Resume', value: 'lanjutkan lagu yang lagi diputar' },
          { name: 'Loop', value: 'aktifin mode looping' },
          { name: 'Autoplay', value: 'aktifin mode autoplay random' },
          { name: 'Seek', value: 'loncat ke waktu tertentu dari lagu yang diputar' },
          { name: 'Previous', value: 'putar ulang lagu sebelumnya' },
          { name: 'Shuffle', value: 'acak antrian lagu' }
        )
        .setImage(`https://cdn.discordapp.com/attachments/1004341381784944703/1165201249331855380/RainbowLine.gif?ex=654f37ba&is=653cc2ba&hm=648a2e070fab36155f4171962e9c3bcef94857aca3987a181634837231500177&`); 

      const basicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('✨ **CMD Dasar**')
        .addFields(
          { name: 'Ping', value: "Check latensiku" },
          { name: 'Clear', value: 'hapus antrian lagu' },
          { name: 'Time', value: 'tampilin waktu play lagu yang lagi diputar' },
          { name: 'Filter', value: 'kasih filter sesukamu' },
           { name: 'Now Playing', value: 'tampilin info dari lagu yang lagi diputar' },
          { name: 'Volume', value: 'atur volume [jangan ketinggian, ntar budeg]' },
        ) 
       .setImage('https://cdn.discordapp.com/attachments/1169032312579686460/1201752424231211058/welcome.png?ex=65caf629&is=65b88129&hm=c0f22303c07abe3e73e93bc1a884968777748b73ad4cb4e46b303ece49199ca4&')
      const button1 = new ButtonBuilder()
        .setLabel('YouTube')
        .setURL('https://www.youtube.com/@itsaraara')
        .setStyle(ButtonStyle.Link);

      const button2 = new ButtonBuilder()
        .setLabel('Discord')
        .setURL('https://discord.gg/cbxcCQdJsj')
        .setStyle(ButtonStyle.Link);

      const button3 = new ButtonBuilder()
        .setLabel('Code')
        .setURL('https://replit.com/@BEASTGAMERS1?tab=community')
        .setStyle(ButtonStyle.Link);

      const row = new ActionRowBuilder()
        .addComponents(button1, button2);

      interaction.reply({
        embeds: [musicCommandsEmbed, basicCommandsEmbed],
        components: [row]
      }).catch(e => {});
    } catch (e) {
      console.error(e);
    }
  },
};

/*

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   
   # MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE
   ## FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/FUEHs7RCqz ]
   ## YT : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
*/
