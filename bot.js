const Discord = require('discord.js');
let client = new Discord.Client();
var prefix = "+";
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'général');
    if (!channel)return;
    const embed = new Discord.RichEmbed()
    .setColor(0xF0000)
    .setDescription("Bienvenue Sur le serveur ``NerveRadio !!`` ")
    .setAuthor(` Nous sommes maintenant : \ ` + member.guild.memberCount);
    channel.send({embed})
});
client.on('ready', () => {
	setInterval(() => {
            client.user.setPresence({ game: { name: `Nerve Moderation `, type: "STREAMING" } });
        }, 1*30000);
	setInterval(() => {
            client.user.setPresence({ game: { name: `+help`, type: "STREAMING" } });
        }, 1*40000);
	setInterval(() => {
            client.user.setPresence({ game: { name: `Love NerveRadio `, type: "STREAMING" } });
        }, 1*70000);
});
client.on ("message", async message => {
  if (message.author.id === "345951306055417857") {
  if(message.content.startsWith("H.E.L.L.O")) {
    message.delete ()
    message.channel.send ("Nous vous rappelons que nos réseaux se trouvent sur le salon <#523239874871033866>")
    setInterval (() => {
      message.channel.send ("Nous vous rappelons que nos réseaux se trouvent sur <#523239874871033866>")
    },1*86400000);
  }
  } else {
 }
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
 if (message.content.startsWith ( prefix + "ban")) {
		 	if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send (":x: Tu ne peux pas executer la commande demandée");	

    var amsg = message.content;
		// supprime le premier mot de la chaine (string) donc "!pub machin" va supprimer pub
		var msg = amsg.substr(amsg.indexOf(" ") + 23);
   var reason = msg;
    if (!reason || reason < 250 ) return message.channel.send("***Vous n'avez pas mis de raison ou vous en avez mise une trop longue !!***")

    let member = message.mentions.members.first ();
    let member2 = message.mentions.users.first ();
   var embed = new Discord.RichEmbed()
   .setColor ("#f08619")
   .setTitle ("Vous venez de vous faire bannir :warning:")
   .addField("Par le modérateur/administrateur :", message.author.username + "#" + message.author.discriminator)
   .addField("Depuis le serveur :", message.guild.name)
   .addField ("Pour la raison suivante :", reason)
   .setFooter ("Vous êtes bannis, vous ne pourrez y retournez que en cas de unban 💮 !!")
    
    let search = message.guild.channels.find(`name`, "logs")
    const a = new Discord.RichEmbed()
    .setTitle("test")
    member.send ({embed})
   
message.channel.send ("```diff\nL'utilisateurs "+member2.username +"#"+ member2.discriminator +"\ Viens de ce faire kick pour la raison ci-dessous :\n``` ``\n\n"+ reason + " 🔨 ``")
   member.ban();
     
  }
  if (message.content.startsWith(prefix + "kick")) {
	    	if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: Tu ne peux pas executer la commande demandée");	

    var amsg = message.content;
		// supprime le premier mot de la chaine (string) donc "!pub machin" va supprimer pub
		var msg = amsg.substr(amsg.indexOf(" ") + 23);
   var reason = msg;
    if (!reason || reason < 250 ) return message.channel.send("***Vous n'avez pas mis de raison ou vous en avez mise une trop longue !!***")

    let member = message.mentions.members.first ();
    let member2 = message.mentions.users.first ();
   var embed = new Discord.RichEmbed()
   .setColor ("#f08619")
   .setTitle ("Vous venez de vous faire kické :warning:")
   .addField("Par le modérateur/administrateur :", message.author.username + "#" + message.author.discriminator)
   .addField("Depuis le serveur :", message.guild.name)
   .addField ("Pour la raison suivante :", reason)
   .setFooter ("Vous n'êtes pas bannis du serveur et pouvez y revenir !!")
    
    let search = message.guild.channels.find(`name`, "logs")
    const a = new Discord.RichEmbed()
    .setTitle("test")
    member.send ({embed})
   
message.channel.send ("```diff\nL'utilisateurs "+member2.username +"#"+ member2.discriminator +"\ Viens de ce faire kick pour la raison ci-dessous :\n``` ``\n\n"+ reason + " 🔨 ``")
 member.kick ();
  }
  if(message.channel.id === "602874414438023176","602899845291966475") {
  if (message.content.startsWith (prefix + "ping")) {
    message.delete();
    message.reply("Pong! (Calcul en cours...)").then(m => m.edit(`${message.author}:ping_pong: Pong!__\n La latence actuelle est de ${m.createdTimestamp - message.createdTimestamp}ms__`) );
    message.react("✅");
  }
} else {
}
           
  if(message.content.startsWith (prefix + "clear")) {
		message.delete()
		if(!message.member.hasPermission("KICK_MEMBERS")) 
			return message.channel.send(":x: Et ben non, je crois bien que tu n'a pas les permissions d'utiliser cette commande :x:").then(message => {message.delete(5000)})
	const deleteCount = parseInt(args[0], 10);
	if(!deleteCount || deleteCount < 2 || deleteCount > 100)
		return message.reply("Veuillez indiquer un nombre compris entre 2 et 100 pour le nombre de messages à supprimer.").then(message => {message.delete(5000)});
		const fetched = await message.channel.fetchMessages({limit: deleteCount});
		message.channel.bulkDelete(fetched)
		.catch(error => message.reply(`Impossible de supprimer des messages à cause de: ${error}`)).then(message => {message.delete(5000)});
	}
  var fly = [
    "discord.gg",
    
      //"ect..."
      ];
  if (fly.some (x => message.content.toLowerCase().includes(fly))) {
    message.reply (":x: Faire de la publicité vous oppose au règlement ! ")
    message.delete(message.author)
  }
  
if (message.channel.id === "602899845291966475","602874414438023176") {
if (message.content.startsWith (prefix + "help")) {
  

const embed = new Discord.RichEmbed()
.setAuthor("Bienvenue sur le menu d'aide de Nerve-Moderation! ")
.setImage(message.author.avatarURL)
.addField ("Kick","Kick une personne mentionner")
.addField ("Ban","Bannis une personne mentionner")
.addField ("Ping","Donne la latence du bot")
.addField("Clear","Efface un certain nombre de messages")
.addField ("Staff","Affiche les membres du staff de NerveRadio")
.addField ("Warn","Avertir un utilisateurs que sont comportement est incorrecte ")
.addField ("Mute","Réduit au silence une personne mentionner")
.addField ("Unmute","Revoque la réduction au silence d'une personne mentionner")
.setFooter ("Anti-pub activé");
message.channel.send({embed})
}
} else {
  
}
  
  if (message.content.startsWith (prefix + "warn")) {
    amsg = message.content;
		// supprime le premier mot de la chaine (string) donc "!pub machin" va supprimer pub
		var msg = amsg.substr(amsg.indexOf(" ") + 23);
   var reason = msg;
    if (!reason || reason < 250 ) return message.channel.send("***Vous n'avez pas mis de raison ou vous en avez mise une trop longue !!***")

    let member = message.mentions.members.first ();
    let member2 = message.mentions.users.first ();
   var embed = new Discord.RichEmbed()
   .setColor ("#f08619")
   .setTitle (":warning: Avertissement NerveRadio :warning:")
   .addField("Par le modérateur/administrateur :", message.author.username + "#" + message.author.discriminator)
   .addField("Depuis le serveur :", message.guild.name)
   .addField ("Pour la raison suivante :", reason)
   .setFooter ("Vous avez reçu un avertissement sur NerveRadio")
    
    let search = message.guild.channels.find(`name`, "modlogs")
    const a = new Discord.RichEmbed()
    .setTitle("test")
    member.send ({embed})
   
message.channel.send ("```diff\nL'utilisateurs "+member2.username +"#"+ member2.discriminator +"\ Viens de ce faire warn pour la raison ci-dessous :\n``` ``\n\n"+ reason + " 🔨 ``")
  } 
if (message.content.startsWith (prefix + "staff")) {
const embed = new Discord.RichEmbed()
.setAuthor ("Membre du staff de NerveRadio " )
.addField ("Directeur", "<@423882332660039690>\n<@446459846192005131>")
.addField ("Co-Directeur","<@314815301311266820>\n<@403524009720807424>")
.addField ("Chroniqueur","<@348209477989957632>\n<@467597966077591553>\n<@348741550915715072>\n<@522660651202772992>")
.addField ("Standardiste","<@296666355850149891>\n<@346655035800944650>\n<@377841145532645381>")
.addField ("DJ","<@325253154260385802>\n<@378692219206631434>")
.addField ("Responsable Managers","<@345951306055417857>")
.addField ("Managers","<@210778186760454144>\n<@353659999098109952>\n<@387306880529334274>")
.addField ("Responsable Modérateurs","<@547091548702244910>")
.addField ("Modérateur","<@494879851128553474>")
.addField ("Technicien","<@403591962298679327>");
message.channel.send ({embed})
}
  
  if (message.content.startsWith (prefix + "member")) {
    message.channel.send (`nous sommes ${message.guild.memberCount} membres sur NerveRadio`)
  }
  if (message.content.startsWith (prefix + "mute")) {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":x: Tu ne peux pas executer la commande demandée");	
     if(message.mentions.users.size === 0)
			return message.reply("Vous avez oublier de mentionner une personne !")
    var amsg = message.content;
		// supprime le premier mot de la chaine (string) donc "!pub machin" va supprimer pub
		var msg = amsg.substr(amsg.indexOf(" ") + 23);
   var reason = msg;
    if (!reason || reason < 250 ) return message.channel.send("***Vous n'avez pas mis de raison ou vous en avez mise une trop longue !!***")
 let member = message.mentions.members.first ();
    let member2 = message.mentions.users.first ();
   var embed = new Discord.RichEmbed()
   .setColor ("#f08619")
   .setTitle ("Vous venez de vous faire mute :warning:")
   .addField("Par le modérateur/administrateur :", message.author.username + "#" + message.author.discriminator)
   .addField("Depuis le serveur :", message.guild.name)
   .addField ("Pour la raison suivante :", reason)
   .setFooter ("Vous êtes mute sur NerveRadio 💮 !!")
    member.addRole('523239788409782293')
    member.send ({embed})
    message.channel.send ("```diff\nL'utilisateurs \ "+ member2.username +"#"+ member2.discriminator +"\ Viens de ce faire mute  pour la raison ci-dessous :\n``` ``\n\n"+ reason + " 🔨 ``")
  }
  if (message.content.startsWith (prefix + "unmute")) {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":x: Tu ne peux pas executer la commande demandée");	
     if(message.mentions.users.size === 0)
			return message.reply("Vous avez oublier de mentionner une personne !")
   // var amsg = message.content;
		// supprime le premier mot de la chaine (string) donc "!pub machin" va supprimer pub
	//	var msg = amsg.substr(amsg.indexOf(" ") + 23);
   //var reason = msg;
  //  if (!reason || reason < 250 ) return message.channel.send("***Vous n'avez pas mis de raison ou vous en avez mise une trop longue !!***")
 let member = message.mentions.members.first ();
    let member2 = message.mentions.users.first ();
   var embed = new Discord.RichEmbed()
   .setColor ("#f08619")
   .setTitle ("Vous venez de vous faire unute :warning:")
   .addField("Par le modérateur/administrateur :", message.author.username + "#" + message.author.discriminator)
   .addField("Depuis le serveur :", message.guild.name)
  // .addField ("Pour la raison suivante :", reason)
   .setFooter ("Vous êtes unmute sur NerveRadio 💮 !!")
    member.removeRole('523239788409782293')
    member2.removeRole ('523239788409782293')
    member.send ({embed})
    message.channel.send (member2.username +"#"+ member2.discriminator + " N'est plus réduit au silence !")
  }
});
client.login (process.env.TOKEN)