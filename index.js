//Your Code here

let usrAction00 = window.prompt();
if (usrAction00 == 'left'){
    window.alert("You travelled " + usrAction00 + ". You come across a stray cat. It scampers off down a small hole just large enough for you to crawl through.");
}
else{
    window.alert("You travelled " + usrAction00 + ". The universe continues into the void.");
    window.location.reload();
}
if (usrAction00 == 'left'){
    let usrAction01 = window.prompt("Do you follow the cat or continue on your path?");
}

let routeEntry = [0, 'All the universe lays before you, travel left or right?', dirL, dirR];

let mapRoute = [
    routeEntry,
    loc01
];