const { Message } = require("discord.js");
const { count } = require("console");

module.exports={
    name: 'hangman',
    description: 'plays hangman',
    execute(message, args) {
        var fs = require("fs");
        var text = fs.readFileSync("./commands/dictionary.txt") + '';
        var mistakes = 6; //6 mistakes and you lose 
        var dictionary = text.split("\n");
        var word = dictionary[Math.floor(Math.random() * dictionary.length)];
        var underscores = [];
        for (var a = 0; a < word.length; a++) { 
            underscores.append('_');
        } 
        while (mistakes > 0) {
            message.channel.send("Guess a letter."); 
            //check if the letter is in the word
            for (var b = 0; b < word.length; b++) {

                if (word[b] == message.content) {
                    underscores[b] = word[b];
                }
            }
            if (word == underscores) {
                message.channel.send("you won");
                break;
            }
            if (word.includes(message.content) == false || message.content.length != 1) {
                mistakes -= 1;
            }
            message.channel.send('' + word);
            message.channel.send('' + underscores);
        }

    }
}
