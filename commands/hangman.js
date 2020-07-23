const { Message } = require("discord.js");

module.exports={
    name: 'hangman',
    description: 'plays hangman',
    execute() {
        var fs = require("fs");
        var text = fs.readFileSync("./dictionary.txt");
        var dictionary = text.split("\n");
        var word = dictionary[Math.floor(Math.random() * dictionary.length)];
        message.channel.send(word);
    }
}
