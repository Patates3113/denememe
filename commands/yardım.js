const { EmbedBuilder } = require("discord.js");

exports.run = async (client, message, args) => {

  const embed = new EmbedBuilder()
  .setColor("#ff0105")
  .setTitle(`${message.guild.name} | Commands`)
  .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
  .setDescription("`!help`,`!abone-yetkilisi`,`!abone`,`!abone-rol`") 
  .setFooter({ text: `Asked by ${message.author.tag}.`, iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })    
  .setTimestamp()  

  return message.reply({ embeds: [embed] })

};
exports.conf = {
  aliases: ["yardım"]
};

exports.help = {
  name: "help"
};