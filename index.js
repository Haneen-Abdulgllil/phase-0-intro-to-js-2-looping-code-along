// Code your solutions in this file

function writeCards(names, event){
    let arr = [];
    for(let i=0; i < names.length; i++){
        arr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return arr;
}

function countDown(from){
    for(let i=from; i >= 0; i--)
        console.log(i);
}
