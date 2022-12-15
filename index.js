// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name);
}

function destructivelyPrependCat(name){
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    return cats.pop(name);

}

function destructivelyRemoveFirstCat(name){
    return cats.shift(name);
}

function appendCat(name){
    const catsPlus = [...cats.slice(), name];
    return catsPlus
}

function prependCat(name){
    const catsPlus = [name, ...cats.slice()];
    return catsPlus
}

function removeLastCat(){
    const catsMinus = [0, cats.slice(cats.length-1)];
    return catsMinus;
}