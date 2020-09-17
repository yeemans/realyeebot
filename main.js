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

var index = 0; //color index
client.on('guildMemberAdd', member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === "general")
    welcomeChannel.send('https://pbs.twimg.com/profile_images/504715443479670784/fauyuPDy_400x400.png')
    welcomeChannel.send(`<@${member.id}>`)
    //adding a role to the new user 
    var newcomer = member.guild.roles.cache.find(r => r.name === "P I N K S E R V E R G U E S T");
    if (!(newcomer)) {
        member.guild.roles.create({ 
            data: {
                name: 'P I N K S E R V E R G U E S T', 
                color: '#FFC0CB', 
                permissions:[],
                position: member.guild.roles.cache.size - 1
            }
        }) 
    }
    newcomer = member.guild.roles.cache.find(r => r.name === "F C G G U E S T");
    member.roles.add(newcomer)
})
client.on('message', async (message, member) => {
    message.content = message.content.toLowerCase();
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (message.content === 'hi' || message.content === 'hello' && 
    message.author.bot == false) {
        client.commands.get('shutup').execute(message, args);
        return;
    }
    

    if (message.content.includes('bruh') && message.author.bot == false) {
        if (!(message.author.bot)) {
            message.author.send("bruh");
        }
        return;
    }

    if (message.content.includes('lmao') && message.author.bot == false) { 
        message.author.send('L M A O');
        return;
    }
    //if someone pings testers
    if (message.content.includes('<@&551884063967805440')) {
        if(!(message.author.bot)) {
            message.author.send('You will be tested soon.');
        }
        return;
    }

    if (message.content.includes('@&552131262622466048')) {
        message.channel.send('Nobody uses this channel');
        return;
    }
    if (message.content.includes('fuck you') && !(message.author.bot)) {
        //message.channel.send('dont say that pls');
        if (message.guild.me.hasPermission('MANAGE_NICKNAMES')) {
            message.member.setNickname('pphead'); 
        }
        else  {
            message.author.send('very rude');
        }
        return;
    }

    if (message.content.includes('fuck') || message.content.includes('shit') || 
    message.content.includes('bitch') || message.content.includes('damn') ||
    message.content.includes('cunt')) {
        if (!(message.author.bot)) {
            //message.channel.send(`Please do not swear <@${message.author.id}>`);
            message.author.send('If you swear again im gonna ban you');
        }
    }

    if (message.content.includes('yee') && !(message.content.includes('-'))) {
        message.channel.send('░░░░░░░░░░░░░░░░░░░░░░░░░░░ ░░░░░░░░░░░░░▄███▄▄▄░░░░░░░ ░░░░░░░░░▄▄▄██▀▀▀▀███▄░░░░░ ░░░░░░░▄▀▀░░░░░░░░░░░▀█░░░░ ░░░░▄▄▀░░░░░░░░░░░░░░░▀█░░░ ░░░█░░░░░▀▄░░▄▀░░░░░░░░█░░░ ░░░▐██▄░░▀▄▀▀▄▀░░▄██▀░▐▌░░░ ░░░█▀█░▀░░░▀▀░░░▀░█▀░░▐▌░░░ ░░░█░░▀▐░░░░░░░░▌▀░░░░░█░░░ ░░░█░░░░░░░░░░░░░░░░░░░█░░░ ░░░░█░░▀▄░░░░▄▀░░░░░░░░█░░░ ░░░░█░░░░░░░░░░░▄▄░░░░█░░░░ ░░░░░█▀██▀▀▀▀██▀░░░░░░█░░░░ ░░░░░█░░▀████▀░░░░░░░█░░░░░ ░░░░░░█░░░░░░░░░░░░▄█░░░░░░ ░░░░░░░██░░░░░█▄▄▀▀░█░░░░░░ ░░░░░░░░▀▀█▀▀▀▀░░░░░░█░░░░░ ░░░░░░░░░█░░░░░░░░░░░░█░░'); 
        return;
    }

    if (message.content.includes('gay') && !(message.author.bot)) {
        //message.channel.send(`We do not tolerate homophobic slurs in this server <@${message.author.id}>`);
        message.author.send(`We do not tolerate homophobic slurs in this server <@${message.author.id}>`);
        return;
    }

    if (message.content.includes('pp') || message.content.includes('cock') || 
    message.content.includes('penis')) {
        if (!(message.author.bot)) {
            message.author.send(`Penis <@${message.author.id}>`);
        }
    }

    //when someone pings yee bot 
    if (message.content.includes('735621111781523516')) {
        message.author.send( `<@${message.author.id}> stfu`);
    }
    //when fresh talks about his room 
    if (message.author.id == 163439672431869953 && message.content.includes('room')) {
        message.author.send('Your room smells');
    }

    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    else if(command === 'fresh'){
        client.commands.get('fresh').execute(message, args);
    }
    else if(command === 'igreg') {
        client.commands.get('igreg').exeucte(message, args);
    }
    else if(command === 'yee'){
        client.commands.get('yee').execute(message, args);
        return;
    }
    else if (command === 'wa') { 
        client.commands.get('pa').execute(message, args);
    }
    else if (command === 'idiot') {
        client.commands.get('idiot').execute(message, args);
    }
    else if (command === 'pikachu') {
        client.commands.get('pikachu').execute(message, args);
    }
    else if (command === 'incel') {
        client.commands.get('incel').execute(message, args);
    }
    else if (command === 'shit') {
        message.channel.send('https://imgur.com/gallery/mTFU9fJ');
    }

    else if (command === 'color' && !(message.member.roles.cache.find(r => r.name === "Wannabes")) &&
    !(message.member.roles.cache.find(r => r.name === "Chill Folks"))) {
        
        message.channel.send(`For this to work, my role needs to be the highest`);
        message.channel.send(`Usage: -color hexcode(like #00FFFF for cyan) name of role to be created`)
            await message.guild.roles.create({ 
                data: {
                    name: args[1], 
                    color: "" + args[0], 
                    permissions:[],
                    position: message.guild.roles.cache.size - 1
                }
            }) 
     //see how many roles there are
         
        message.guild.roles.cache.forEach(r => console.log(r.name, r.id))
        color = message.guild.roles.cache.find(r => r.name === "" + args[1]);
        console.log(`Role position: ${color.position}, Number of roles: ${message.guild.roles.cache.size}`)
        message.member.roles.add(color); 
    }

    
});



client.login(process.env.token);
