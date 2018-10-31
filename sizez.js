const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "m!";

client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
    console.log("SelfBot is start");
    client.user.setGame("ملوووحي");
    client.user.setStatus("invisible");
});

