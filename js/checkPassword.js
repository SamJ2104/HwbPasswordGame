/*-----===FUNCTIONS===-----*/
export function checkReq1(pw) {
    if(pw.length >= 8){
        return true;
    }
    else{
        return false;
    }
}

export function checkReq2(pw) {
    let regex = /\d/g; // Regular expression to match digits
    let digits = pw.match(regex);

    if(digits && digits.length >= 3){
        return true;
    }
    else{
        return false;
    }
}


export function checkReq6(pw) {
    if (pw.length < 20) {
        return true;
    } else {
        return false;
    }
}


export function checkReq3(pw) {
    let regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    let caracteresEspeciais = pw.match(regex);

    if(caracteresEspeciais && caracteresEspeciais.length >= 2){
        return true;
    }
    else{
        return false;
    }
}

export function checkReq11(pw) {
    let paises = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

    pw = pw.toLowerCase();

    for (let index = 0; index < paises.length; index++) {
        if(pw.includes(paises[index])){
            return true;
        }
    }

    return false;
}

export function checkReq4(pw) {
    let regex = /([1]{2,})|([2]{2,})|([3]{2,})|([4]{2,})|([5]{2,})|([6]{2,})|([7]{2,})|([8]{2,})|([9]{2,})|([0]{2,})/g;
    let digitosSequenciados = pw.match(regex);

    if(digitosSequenciados >= 1){
        return false;
    }
    else{
        return true;
    }
}

export function checkReq5(pw) {
    let regex = /\d/g;
    let digitos = pw.match(regex);
    let soma = 0;
    let primo = true;

    if(digitos === null){
        return false;
    }
    else{
        for (let index = 0; index < digitos.length; index++) {
            soma += parseInt(digitos[index]);      
        }

        for (let i = 2; i < soma; i++){
            if (soma % i === 0) {
                primo = false;
            }
        }

        if(primo){
            return false;
        }
        else{
            return true;
        }
    }

}

export function checkReq12(pw) {
    let paises = ["car", "train", "bus", "plane", "bike", "scooter", "skateboard", "taxi", "walk", "run"];

    pw = pw.toLowerCase();

    for (let index = 0; index < paises.length; index++) {
        if(pw.includes(paises[index])){
            return true;
        }
    }

    return false;
}

export function checkReq13(pw) {
    let paises = ["per", "por"];

    pw = pw.toLowerCase();

    for (let index = 0; index < paises.length; index++) {
        if(pw.includes(paises[index])){
            return true;
        }
    }

    return false;
}

export function checkReq14(pw) {
    let paises = ["wc2bd"];

    pw = pw.toLowerCase();

    for (let index = 0; index < paises.length; index++) {
        if(pw.includes(paises[index])){
            return true;
        }
    }

    return false;
}

export function checkReq7(pw) {
    let regex = /[A-Z]/g; // Regular expression to match capital letters
    let capitals = pw.match(regex);

    if(capitals && capitals.length >= 3){
        return true;
    }
    else{
        return false;
    }
}
export function checkReq8(pw) {
    for (let i = 0; i < pw.length - 1; i++) {
        let currentChar = pw.charCodeAt(i);
        let nextChar = pw.charCodeAt(i + 1);

        // Check if both characters are alphabetic
        if ((currentChar >= 65 && currentChar <= 90) || (currentChar >= 97 && currentChar <= 122)) {
            if ((nextChar >= 65 && nextChar <= 90) || (nextChar >= 97 && nextChar <= 122)) {
                // Check if the current character and the next character are consecutive in the alphabet
                if ((nextChar === currentChar + 1) || (nextChar === currentChar - 1)) {
                    return false;
                }
            }
        }
    }
    return true;
}

export function checkReq9(pw) {
    for (let i = 0; i < pw.length - 1; i++) {
        if (/\d/.test(pw[i]) && /\d/.test(pw[i + 1])) {
            return false;
        }
    }
    return true;
}
export function checkReq10(pw) {
    let paises = ["s"];

    pw = pw.toLowerCase();

    for (let index = 0; index < paises.length; index++) {
        if(pw.includes(paises[index])){
            return true;
        }
    }

    return false;
}
export function checkReq15(pw) {
    return false;
}