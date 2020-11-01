const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require("./auth.json");
const config = require("./config.json");

client.once('ready', () => {
	console.log('Ready!');
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
	console.log(message.content);

	if (message.content === '!ping') {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('Pong.');
	}
});

client.login(auth.token);