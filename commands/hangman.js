const { Message } = require("discord.js");

module.exports={
    name: 'hangman',
    description: 'plays hangman',
    execute(message, args) {
        var fs = require("fs");
        var text = fs.readFileSync("./commands/dictionary.txt") + '';
        var mistakes = 6; //6 mistakes and you lose 
        var dictionary = text.split("\n");
        var word = dictionary[Math.floor(Math.random() * dictionary.length)];
        var underscores = '';
        for (var a = 0; a < word.length; a++) { 
            underscores += '_';
        } 
        while (mistakes > 0) {
            mistakes -= 1; 
            message.channel.send('' + mistakes);
        }
        message.channel.send('' + word);
    }
}
