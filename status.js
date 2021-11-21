const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.TOKEN;
client.on('ready' () {
   console.log('Ready to go')
  
  var fs = require('fs');
fs.readFile('statusinfo.txt', function(err, data) {
    if(err) throw err;
    var statusArray = data.toString().split("\n");

    setInterval(() => {
      client.user.setStatus(process.env.PRESENCE);
      const random = statusArray[Math.floor(Math.random() * statusArray.length)].split(', ')
      const status = random[0];
      const mode = random[1];
      client.user.setActivity(status, { type: mode })

    }, 3000) //your time of changing status in miliseconds for example 1 second = 1000 ms
});

