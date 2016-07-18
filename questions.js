var selectElementsStartingWithA = function(array) {
    var tab_A = [];
        for (var i = 0; i < array.length; i++) {
            var fruit = array[i];
            console.log(fruit)
            if(fruit.startsWith("a")){
                tab_A.push(fruit);
            }
    }
    return tab_A;
}

var selectElementsStartingWithVowel = function(array) {
    var tab_B = [];
        for (var i = 0; i < array.length; i++) {
            var name = array[i];
            console.log(name);
            if(name.startsWith("o") || name.startsWith("i") || name.startsWith("a")){
                tab_B.push(name);
            }
    }
    return tab_B;
}

var removeNullElements = function(array) {
    var tab_C = [];
        for (var i = 0; i < array.length; i++) {
            var type = array[i];
            console.log(name);
            if(type != null){
                tab_C.push(type);
                console.log(tab_C);
            }
    }
    return tab_C;
}

var removeNullAndFalseElements = function(array) {
    var tab_D = [];
        for (var i = 0; i < array.length; i++) {
            var type = array[i];
            console.log(type);
            if(type != null && type !== false){
                tab_D.push(type);
                console.log(tab_D);
            }
    }
    return tab_D;
}

var reverseWordsInArray = function(array) {
    var tab_reverse = [];
        for (var i=0; i<array.length; i++){
            var word_reverse= array[i].split("").reverse().join("");
            console.log(word_reverse);
            tab_reverse.push(word_reverse);
        }
    return tab_reverse;
}

var everyPossiblePair = function(array) {

  var result = [];
    for (var i = 0 ; i < array.length ; i++) {
        var paire = [];
        paire.push(array[i]);
        if (i == array.length-1) {      
            paire.push(array[0]);
        }
        else { 
            paire.push(array[i+1]);
        }
        result.push(paire.sort());
    }
    return result.sort();
}

var allElementsExceptFirstThree = function(array) {
    array.splice(0,3);
    return array;
}

var addElementToBeginning = function(array, element) {
    array.unshift(element);
    return array;
}

var sortByLastLetter = function(array) {
    var result=[];

    for (var i = 0; i < array.length; i++) {
        var retourner = array[i].split("").reverse().join(""); 
        result.push(retourner);
    }
    console.log(result);
    result.sort();
    array = result;
    console.log(array);
        result=[];
    for (var i = 0; i < array.length; i++) {
        var bonsens = array[i].split("").reverse().join("");
            console.log(bonsens);
            result.push(bonsens);
        }

return result;
}

var getFirstHalf = function(string) {
    // Math.ceil converti en nombre entier
    var moitie = Math.round(string.length/2);
    console.log(moitie);
    var str = string.slice(0,moitie);
    console.log(str);
    return str;
    
}

var makeNegative = function(number) {
    if (number > 0) {
    number = -1 * number
    }
    return number;
}

var numberOfPalindromes = function(array) {
    var tab = [];
    
    for(var i = 0; i < array.length; i++){
        var word = array[i].split("").join("");
        var reverse_word = word.split("").reverse().join("");
/*        console.log("sortie de word: "+ word);
        console.log("sortie de reverse_word: "+ reverse_word);*/
        if(word == reverse_word){
            tab.push(reverse_word);
            console.log(tab);
        }
    }
    return tab.length;
}

var shortestWord = function(array) {
    result = array[0];
    for (var i = 0; i < array.length; i++) {
        if(result.length > array[i].length){
            result = array[i];
            console.log(result);
        }
    }
    return result;
}

var longestWord = function(array) {
    result = array[0];
    console.log(result);
    for (var i = 0; i < array.length; i++) {
        if(result.length < array[i].length){
            result = array[i];
            console.log(result);
        }
    }
    return result;
}

var sumNumbers = function(array) {
    var sommes = 0;
    for(var i= 0; i < array.length; i++){
        sommes = array[i] + sommes;
        console.log(sommes);
        /*return sommes; pas de return ici il sera rappeler après;*/
    }
    console.log(sommes);
    return sommes;
}

var repeatElements = function(array) {
    /*évite une boucle infini avec la taille du tableau*/
var tab =array.length;
    for(var i =0; i < tab; i++){
       array.push(array[i]);
    }
    console.log("sortie de repeat : "+array);
    return array;
}

var repeatElements_2 = function(array) {

        var repeat = array.concat(array);

    return repeat;
}

var stringToNumber = function(string) {
    var tonumber = Number(string);
    console.log(tonumber);
    return tonumber;
}

var calculateAverage = function(array) {
    var sommes = 0;
    
    for(var i= 0; i < array.length; i++){
        sommes = array[i] + sommes;
        console.log(sommes);
        /*return sommes; pas de return ici il sera rappeler après;*/
    }
    var average = sommes/array.length;
    console.log(sommes);
    console.log("la moyenne de la somme du tableau est: "+ average);
    return average;
}

var getElementsUntilGreaterThanFive = function(array) {
    for(var i=0; i < array.length; i++){
        if(0 >== array[i])
    }
    return until_five;
}

var convertArrayToObject = function(array) {
    return 'Write your method here';
}
/////////////////////////////////////////////
var getAllLetters = function(array) {
    return 'Write your method here';
}

var swapKeysAndValues = function(object) {
    return 'Write your method here';
}

var sumKeysAndValues = function(object) {
    return 'Write your method here';
}

var removeCapitals = function(string) {
    return 'Write your method here';
}

var roundUp = function(number) {
    return 'Write your method here';
}

var formatDateNicely = function(date) {
    return 'Write your method here';
}

var getDomainName = function(string) {
    return 'Write your method here';
}

var titleize = function(string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
    return 'Write your method here';
}

var squareRoot = function(number) {
    return 'Write your method here';
}

var factorial = function(number) {
    return 'Write your method here';
}

var findAnagrams = function(string) {
    return 'Write your method here';
}

var convertToCelsius = function(number) {
    return 'Write your method here';
}

var letterPosition = function(array) {
    return 'Write your method here';
}
