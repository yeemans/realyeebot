
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
            underscores += '1';
        }
        var letters = '';
        function game() {
            //check if the letter is in the word
            if (word.includes(message.content) && message.content.length == 1) {
                for (var i = 0; i < count(word); i++) {
                    if (word[i] == message.content) {
                        letters += word[i];
                    }
                    else {
                        letters += '-';
                    }
                }
            }
            else {
                mistakes -= 1;
            }
            message.channel.send('' + word);
            message.channel.send('' + letters);
            message.channel.send("guess a letter");
            if (mistakes != 0) {
                game();
            }
        }
        game();
    }
}
