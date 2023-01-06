const once = fn => {
    let done = false;
    return (...args) => {
        if(!done){
            done = true;
            fn(...args);
        }
        else{
            console.log("Illegal");
        }
    };
};

const squeak = a => console.log(a, "squeak!!");

const squeakOnce = once(squeak);

squeakOnce("first ");
squeakOnce("second ");
squeakOnce("third ");