//function declaration
function saturdayFun(activity = "roller-skate") {
       return `This Saturday, I want to ${activity}!`;
    }
saturdayFun("bathe my dog");
//function expression
let mondayWork = function (activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}
mondayWork("work from home");

function wrapAdjective (visualflair = "*"){
    return function (adjective = "special"){
        const highlight = "*"
        return `You are ${visualflair}${adjective}${visualflair}!`;
    };
}
const asteric = wrapAdjective("*");
const slash = wrapAdjective("||");
