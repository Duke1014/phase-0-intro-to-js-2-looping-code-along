// Code your solutions in this file
// writeCards(["George", "Fred", "Harry"], 'birthday');
const thanks = []
function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {   
        thanks.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thanks;
}

function countDown(n = 10) {
    while (n >= 0) {
        console.log(n--);
    }
}