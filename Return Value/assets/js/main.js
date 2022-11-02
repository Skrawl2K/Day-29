// function return value

// jannik@super-code.de

function getNameFromEmail(email){
    const atIndex = email.indexOf("@");
    const name = email.slice(0, atIndex);
    return name;
}

console.log(getNameFromEmail("jannik@super-code.de"));

const name = getNameFromEmail("jannik@super-code.de")

