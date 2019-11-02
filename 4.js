function findSame(verb){
    let chr;
    let chrUnicode = 0;
    let arrChrUnicode =[];
    let arrChrUnicode2 =[];
    let result = [];

if (typeof verb === 'object' && verb.length > 1)
{    for (let i = 0; i < verb.length; i++){
        chr = verb[i]
        for (let j = 0; j < chr.length; j++){
            //console.log(chr[j])
            chrUnicode += chr.charCodeAt(j)
        }
        //console.log(chrUnicode)
        arrChrUnicode.push(chrUnicode)
        arrChrUnicode2 = [...arrChrUnicode]
        //console.log('-------')
        chr = null;
        chrUnicode = 0;
    }
    for (let i = 0; i < arrChrUnicode2.length; i++){
        //console.log('Loop ke 1 ' + verb[i] + arrChrUnicode[i])
        for (let j = 0; j <arrChrUnicode2.length; j++){
            //console.log('Loop ke 2 ' + verb[j] + arrChrUnicode2[j])
            if (i === j){
                continue;
            }
            else if (arrChrUnicode[i] === arrChrUnicode2[j]){
                //console.log(i)
                //console.log(arrChrUnicode[i], arrChrUnicode2[j]);
                //console.log(verb[i])
                if (!result.includes(verb[i])){
                    result.push(verb[i])
                }
                if (!result.includes(verb[j])){
                    result.push(verb[j])
                }
            }
        }
    }
    //console.log(arrChrUnicode);
    if (result.length > 0){
        return result
    }
    else {
        return 'Kata Tidak Ditemukan';
    }
}
else {
    return 'Bukan Array';
}
    
}

let input = ["cat", "listen", "code", "act", "silent", "tac"];
let result = findSame(input);
console.log(result);
