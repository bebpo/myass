const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("645274323258703883")
setInterval(function() {
channel.send(`1`);
channel.send(`2`);
channel.send(`3`);
channel.send(`4`);
channel.send(`5`);
channel.send(`6`);
channel.send(`7`);
channel.send(`8`);
channel.send(`9`);
channel.send(`0`);
channel.send(`#daily`);
channel.send(`#credits`);
channel.send(`#mute @ahmedbedo#9458 `);
channel.send(`#unmute @ahmedbedo#9458 `);
channel.send(``);
channel.send(``);
channel.send(``);
channel.send(``);
channel.send(``);
channel.send(``);
channel.send(``);
channel.send(``);
}, 30)
})

client.login(process.env.BOT_TOKEN);