const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("645274323258703883")
setInterval(function() {
channel.send(`1
1
1
111
1
1
1
1
1
1
1
1
1
1
1
11
1
1
1
1
2

2
2
3
3

4
44
4
5
5
5
6
6
67
7
8
8
9
9

090
0
-
-
-
-
-
#credits
`);
}, 30)
})

client.login(process.env.BOT_TOKEN);