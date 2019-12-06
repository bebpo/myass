const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("645274323258703883")
setInterval(function() {
channel.send(`#credits`);
}, 30)
})

client.login(process.env.BOT_TOKEN);