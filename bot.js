const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Death Shop`,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});
  
 const Discord = require("discord.js");
const client = new Discord.Client();

 client.on('message', message => {
    if (message.content.startsWith("ر")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 3,
        maxAge: 10800,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription("تم أرسال الرابط برسالة خاصة")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        
    .setDescription("** مدة الرابط : ثلاث ساعات | عدد استخدامات الرابط : 3 **")
      message.author.sendEmbed(Embed11)
    }
}); 


client.login("NDk5NjMyNTM3MzAwMTA3Mjg1.Dqs5Hg.xLbeIAs6NlX9bVPgPAuaxwO_BaY")
