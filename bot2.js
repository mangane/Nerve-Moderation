const CLEAR_MESSAGES = '!clearMessages';
const Discord = require('discord.js');
let client = new Discord.Client();
var prefix = "g!";
var prefix2 = "G!";
const cooldown = new Set ();
const Staff = ["493474639331459072"];

//client.on('ready', () => {
//	setInterval(() => {
       //     client.user.setPresence({ game: { name: `${client.guilds.size} Serveurs `, type: "WATCHING" } });
       // }, 1*30000);
	//setInterval(() => {
          //  client.user.setPresence({ game: { name: `g!setup | V.2.0.0`, type: "PLAYING" } });
     //   }, 1*40000);
	//setInterval(() => {
           // client.user.setPresence({ game: { name: `${client.users.size} Utilisateurs `, type: "WATCHING" } });
      //  }, 1*70000);
//});
client.on('message', message => {
if (message.content.startsWith ('g!uptime')) {
let totalSeconds = (client.uptime / 1000);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600; 
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.round(totalSeconds % 60);
let uptime = `${hours} heures, ${minutes} minutes et ${seconds} secondes`;
var embed220 = new Discord.RichEmbed()
.setTitle("je ne me suis pas redémarré depuis :")
.setDescription(uptime)
.setFooter(`Discord créateur sur ${client.guilds.size}\ Serveurs`)
.setColor("#ff0000")
.setTimestamp() 
//message.channel.sendEmbed(embed220)
}
});
  client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === '🚫vérification🚫');
    if (!channel)return;
    const embed = new Discord.RichEmbed()
    .setColor(0xF0000)
    .addField("Bienvenue Pour accéder au serveur il va falloir passer la vérification pour cela taper","\n``g!v-ok``")
    .setAuthor("🔐 La sécurité avant tout 🔐 ");
  //  channel.send({embed})
channel.send(member)
  });
   // client.on("guildCreate", guild => {
    // This event triggers when the bot joins a guild.
   // console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  //  client.user.setPresence({ game: { name: `${client.guilds.size} Serveurs `, type: "WATCHING" } });
//	const embed = new Discord.RichEmbed()
     //   .setDescription(`<:en_ligne:576662449734811659> Merci à **${guild.name}** d'avoir ajouté __Discord créateur__.`)
   //     .addField("📋 __Nom du serveur__", guild.name, true)
    //    .addField("📊 __Nombre de membres__ :", guild.memberCount, true)
     //   .addField("💻 __Nombre de salons__ :", guild.channels.size, true)
    //    .addField("👤 __Propriétaire__ :", guild.owner, true)
    //    .addField("🌍 __Région du serveur__ :", guild.region, true)
  //      .addField("📝 __ID du serveur__ :", guild.id, true)
  //      .setColor("RANDOM")
   //   client.channels.get('576665756389867520').send(embed);
//});

// Listener - Bot leaves server
//client.on("guildDelete", guild => {
    // This event triggers when the bot is removed from a guild.
 //   console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  //  client.user.setPresence({ game: { name: `${client.guilds.size} Serveurs `, type: "WATCHING" } });
//	const embed = new Discord.RichEmbed()
      //  .setDescription(`<a:non:576666508571312138> **${guild.name}** ma retiré.`)
     //   .addField("📋 __Nom du serveur__", guild.name, true)
   //     .addField("📊 __Nombre de membres__ :", guild.memberCount, true)
  //      .addField("💻 __Nombre de salons__ :", guild.channels.size, true)
  //      .addField("👤 __Propriétaire__ :", guild.owner, true)
//        .addField("🌍 __Région du serveur__ :", guild.region, true)
//        .addField("📝 __ID du serveur__ :", guild.id, true)
 //       .setColor("RANDOM")
 //     client.channels.get('576665756389867520').send(embed);
//});
client.on ("message", async message => {
   if(message.author.bot) return;
	if(message.content.indexOf(prefix) !== 0) return;
	// ajout de args vu que tu appelle une variable qui n'existe pas
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
  if (command === "slowmode") {
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
		return message.channel.send(" <a:non:576666508571312138> | Accès refusé !");
    if(!args[0]|| args[0] < 0 || args[0] > 10800) return message.channel.send("------------------------------------------------------------------------\n\nMerci d'indiquer un nombre entre 0 et 10800 ! (calcul en seconds)\n\n------------------------------------------------------------------------");
message.channel.edit({
rateLimitPerUser: `${args[0]}`
})
message.channel.send (`------------------------------------------------------------------------\n\n⛔  Le Mode Ralenti  est Maintenant activé sur #${message.channel.name} !\n\n🆕 Temps : ${args [0]}\n\n------------------------------------------------------------------------`);
}
});
client.on ("message", async message => {
if (message.channel.id === "salut") {
  if(message.content.startsWith (prefix + "raid")) {
    message.reply ("spam on")
  }
} else {
 // message.channel.send ("salle pute")
 // message.channel.send ("<@522660651202772992>"
 //message.channel.send ( <@494879851128553474>")
}
  
  if(message.content.startsWith (prefix + "mute")) {
    let member2 = message.mentions.users.first ();
    const toi = message.mentions.users.first ()
  let member = message.mentions.members.first ();
 //user.addRole('604075021488488498');
    //const toi = message.mentions.member.first();
   var amsg = message.content;
		// supprime le premier mot de la chaine (string) donc "!pub machin" va supprimer pub
		var msg = amsg.substr(amsg.indexOf(" ") + 23);
   var reason = msg;
    member.addRole ('604075021488488498')
    var embed = new Discord.RichEmbed()
   .setColor ("#f08619")
   .setTitle ("Vous venez de vous faire bannir :warning:")
   .addField("Par le modérateur/administrateur :", message.author.username + "#" + message.author.discriminator)
   .addField("Depuis le serveur :", message.guild.name)
   .addField ("Pour la raison suivante :", reason)
   .setFooter ("Vous êtes bannis, vous ne pourrez y retournez que en cas de unban 💮 !!")
    member.send ({embed})
    message.channel.send ("```diff\nL'utilisateurs "+ member2.username +"#"+ member2.discriminator +"\ Viens de ce faire mute pour la raison ci-dessous :\n``` ``\n\n"+ reason + " 🔨 ``")

     //message.guildMember.setRoles(['604075021488488498'])
    //user.setMute(true, 'It needed to be done')
  }
});
  
client.login (process.env.TOKEN)