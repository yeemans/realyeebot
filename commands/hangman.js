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
        var copy = word;
        while (mistakes > 0) {
            message.channel.send("Guess a letter."); 
            //check if the letter is in the word
            if (word.includes(message.content) && message.content.length == 1) {
                for (i = 0; i < count(word); i++) {
                    if (copy[i] == message.content) {
                        copy[i] = message.content;
                    }
                }
            }

            else {
                mistakes -= 1;
            }
            message.channel.send('' + word);
            message.channel.send('' + copy);
            message.channel.send('' + underscores);
        }

    }
}
