var word = prompt('Введите слово', '');
word = word.toLowerCase(word);
var alpabet = ['а', 'е', 'у', 'ы', 'о', 'я','ё', 'и', 'э', 'ю'];
var letter = '';
var resultWord = '';
for(var i = 0; i < word.length; i++){
    for(var j = 0; j < alpabet.length; j++){
        letter = word.charAt(i);
        if(letter === alpabet[j]){
            resultWord += letter;
        }
    }
}
document.write("Ответ: " + resultWord);