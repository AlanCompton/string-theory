// xify

function xify(str){
    let newStr = "";

    for(let i = 0; i < str.length; i++){
        newStr += "x";
    }
    return newStr;
}

console.log(xify("Hello"));
console.log(xify("Hi there"));
console.log("\n");

// yellingChars

function yellingChars(str){
    let newStr = "";

    for(let i = 0; i < str.length; i++){
        // newStr += str[i];
        // newStr += "!";

        newStr += str[i] + "!";
    }
    return newStr;
}

console.log(yellingChars(`goodness`));
console.log(yellingChars(`oh hello`));
console.log(`\n`);

// indexedChars

function index(str){
    let newStr = "";

    for(let i = 0; i < str.length; i++){
        newStr += i + str[i];
    }
    return newStr;
}

console.log(index("Hello"));
console.log(index("bye"));
console.log(`\n`);

// exclaim

function exclaim(str){
    let newStr = "";
    
    for(let i = 0; i < str.length; i++){
        if(str[i] === "?" || str[i] === "."){
            newStr += "!";
        }else{
            newStr += str[i];
        }
        
    }
    return newStr;
}

console.log(exclaim(`What are you doing? are you a fool?`));
console.log(exclaim(`This is fine.`));
console.log(`\n`);

// truncate

function truncate(str){
    let newStr = "";

    for(let i = 0; i <= 15; i++){
        newStr += str[i];

    }
    return newStr + "...";
}

console.log(truncate('The fault, dear Brutus, is not in our stars, but in ourselves.'));
console.log(truncate("Well, that's just, like, your opinion man."));
console.log(`\n`);

// ciEmailify

function ciEmailify(str){
    let newStr = "";

    for(let i = 0; i < str.length; i++){
        if(str[i] === " "){
            newStr += ".";
        }else{
            newStr += str[i];

        }
    }
    return newStr.toLowerCase() + "@codeimmersives.com";
}

console.log(ciEmailify('colin jaffe'));
console.log(ciEmailify('Anthony DeRosa'));
console.log(`\n`);

// reverse

function reverse(str){
    let newStr = "";

    for(let i = str.length -1; i >= 0; i--){
        newStr += str[i];
    }
    return newStr;
}

console.log(reverse('colin'));
console.log(reverse('mesuara'));
console.log(`\n`);

// onlyVowels

function onlyVowels(str){
    let newStr = "";

    for(let i = 0; i < str.length; i++){
        if(str[i].toLowerCase() === `a` || str[i].toLowerCase() === `e`|| str[i].toLowerCase() === `i`|| str[i].toLowerCase() === `o`|| str[i].toLowerCase() === `u`){
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(onlyVowels('Colin Jaffe'));
console.log(onlyVowels('quickly'));
console.log(onlyVowels('Anthony DeRosa'));
console.log("\n");