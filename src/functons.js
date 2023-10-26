const makePositive = (chislo) => {
    if (String(chislo)[0] == '-') {
        return Number(String(chislo).slice(1, String(chislo).length))
    } else {
        return chislo
    }
}

const greet = (text) => {
    if (text == '') {
        return 'Hi!'
    } else {
        return `Hi ${text}!`
    }
}

const getShotFullName = (name, family) => {
    return `${name} ${family[0]}.`
}

/*const neutralise = (text, text2) => {
    stroka = ''
    if (text.length < text2) {
        for (let x = 0; x < text2.length; x += 1){
            if (text[x] == text2[x] && text[x] == 't'){
                stroka += 't'
            } else if (text[x] == text2[x] && text[x] == 'f'){
                stroka += 'f'
            } else if (text[x] == 'f' && text2)
        }
    }
}*/
const neutralise = (text, text2) => {
    a = ''
    for (let x = 0; text.length > 0; x += 1) {
        if (text[x] == text2[x] && text[x] == 't'){
            a += 't'
        } else if (text[x] == text2[x] == 'f') {
            a += 'f'
        } else if ((text[x] == 'f' && text2[x] == 't') || (text[x] == 't' && text2[x] == 'f')){
            a += '.'
        } else {
            a += '-'
        }
    }
    return a
}

const basicOp = (text) => {
    if (text[1] == '+'){
        return Number(text[0] + Number(text[2])) 
    } else if (text[1] == '-') {
        return Number(text[0] - Number(text[2]))
    }else if (text[1] == '*'){
        return Number(text[0] * Number(text[2]))
    } else{
        return Number(text[0] / Number(text[2]))
    }
}

export { makePositive, greet, getShotFullName, neutralise, basicOp }