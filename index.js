///////////////////////////////////////////////////////
// Simple discord bot that will have some simple tools 
// to help manage a discord community
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();

// Read all commands from the commands directory
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

// See README for how to setup your auth.json file with the correct token
const auth = require("./auth.json");

// Config file is where you can put your bot-specic settings in, like what prefix to use
const config = require("./config.json");
const prefix = config.prefix;

// Logging message once the bot is logged in
client.once('ready', () => {
	console.log('Ready!');
	console.log(`Logged in as ${client.user.tag}!`);
});

// For more info on how to set up dynamic commands, see 
// the Discord.js docs: https://discordjs.guide/command-handling/dynamic-commands.html#how-it-works
client.on('message', message => {
	// Ignore messages without the prefix or messages from this bot
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(auth.token);