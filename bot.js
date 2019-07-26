const Discord = require('discord.js');
let client = new Discord.Client();
var prefix = "!";
var prefix2 = "!";

client.on('ready', () => {
	setInterval(() => {
            client.user.setPresence({ game: { name: `Nerve Moderation `, type: "WATCHING" } });
        }, 1*30000);
	setInterval(() => {
            client.user.setPresence({ game: { name: `By Gaétan`, type: "PLAYING" } });
        }, 1*40000);
	setInterval(() => {
            client.user.setPresence({ game: { name: `${client.users.size} Utilisateurs `, type: "WATCHING" } });
        }, 1*70000);
});

client.login(process.env.BOT_TOKEN)
