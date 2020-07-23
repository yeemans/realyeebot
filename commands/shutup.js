
module.exports={
    name: 'shutup',
    description: 'tells sender to shut up when they say hi or hello',
    execute(message, args) {
        message.channel.send("shut up"); 
    }
}
