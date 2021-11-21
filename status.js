<<<<<<< HEAD
const dotenv = require('dotenv');
const TOKEN = (process.env.TOKEN);
const { Client } = require('discord.js-selfbot-v11')
const client = new Client();
=======
const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.TOKEN;
client.on('ready' () {
   console.log('Ready to go')
  
  var fs = require('fs');
fs.readFile('statusinfo.txt', function(err, data) {
    if(err) throw err;
    var statusArray = data.toString().split("\n");
}
>>>>>>> 4afcc511ffc51cc23a7e895a6ac0d558864fb5cd

client.on('ready', () => { 
  client.user.setActivity("Cyberpunk 2077", { type: "PLAYING"})
   console.log(`${client.user.username} Successfully Logged in!`)
})

client.login(TOKEN);
