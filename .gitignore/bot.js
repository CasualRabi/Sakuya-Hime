const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NDUyNDQ3NTU3NDgyODQwMDc1.DfRDcg.GOplwbG9mfRV0-pdx5IaVYbl_q8);
