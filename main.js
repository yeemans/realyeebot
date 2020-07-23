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
    client.guilds.cache.forEach((guild) => {
        console.log(guild.name);
        console.log(guild.ownerID);
    })
});
 
client.on('message', message => {
    message.content = message.content.toLowerCase();
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (message.content === 'hi' || message.content === 'hello' && 
    message.author.bot == false) {
        client.commands.get('shutup').execute(message, args);
        return;
    }
    

    if (message.content.includes('bruh') && message.author.bot == false) {
        message.channel.send('bruh');
        return;
    }
    //if someone pings testers
    if (message.content.includes('<@&551884063967805440')) {
        message.channel.send('You will get tested soon'); 
        return;
    }

    if (message.content.includes('@&552131262622466048')) {
        message.channel.send('Nobody uses this channel');
        return;
    }

    if (message.content.includes('fuck') || message.content.includes('shit') || 
    message.content.includes('bitch')) {
        message.channel.send('Please do not swear');
    }

    if (message.content.includes('yee') && !(message.content.includes('-'))) {
        message.channel.send('Y E E E E E E E E'); 
        return;
    }

    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    else if(command === 'fresh'){
        client.commands.get('fresh').execute(message, args);
    }
    else if(command === 'yee'){
        client.commands.get('yee').execute(message, args);
        return;
    }
    else if (command ==='wa') { 
        client.commands.get('pa').execute(message, args);
    }
    else if (command ==='idiot') {
        client.commands.get('idiot').execute(message, args);
    }
    else if (command ==='pikachu') {
        client.commands.get('pikachu').execute(message, args);
    }

    
});

client.login(process.env.token);
