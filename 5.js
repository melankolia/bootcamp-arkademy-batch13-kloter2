function ganti_kata(sentence, verb, replaceVerb){

    sentence = sentence.toLowerCase()
    verb = verb.toLowerCase()
    replaceVerb = replaceVerb.toLowerCase()

let newSentence = '';
    for (let i = 0; i < sentence.length; i++){
        if (sentence[i] === verb){
            newSentence += replaceVerb
        }
        else {
            newSentence += sentence[i]
        }
    }
console.log(newSentence)
}
ganti_kata('purwakarta','a','o');
ganti_kata('hanacaraka datasawala padhajayanya mabhagatanga','a','o');