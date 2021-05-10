const ps = require("prompt-sync");
const prompt = ps();


function update(msg,counter){
    if(msg === "+"){
        return counter+1;
    }
    else if(msg === "-"){
        return counter-1;
    }
    else{
        return counter;
    };
};

function view(counter){
    return "Count: " +counter+"\n\n(+)      (-)\n\n(q) for quit\n";
};

function app(counter){
    
    while (true){
        let currentView = view(counter);
        console.clear();

        console.log(currentView);
        let msg = prompt("What would you do: ")
        if (msg === "q"){
            return 0;
        } 
        else{
            counter = update(msg,counter);
        };
    };
};






app(0)