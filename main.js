const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '-';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('yee bot');
});
 
client.on('message', message =>{
    message.channel.send('poop');
    console.log(message.content);
    if (message.content === 'hi' || message.content === 'hello' && 
    message.author.bot == false) {
        client.commands.get('shutup').execute(message, args);
    }
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    else if(command === 'fresh'){
        client.commands.get('fresh').execute(message, args);
    }
    else if(command === 'yee'){
        client.commands.get('yee').execute(message, args);
    }
    else if (command ==='wa') { 
        client.commands.get('pa').execute(message, args);
    }
    else if (command ==='idiot') {
        client.commands.get('idiot').execute(message, args);
    }
    
});

client.login(process.env.token);
