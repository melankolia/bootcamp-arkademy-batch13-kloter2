function randomize(num){
    let arr = [];
    let sum = 0;
    let i = 0;
    let rand = 0;
    if (typeof num === "number"){    
        while (i < num){
            rand = Math.floor(Math.random() * 11);
            if (!(rand % 2 === 0)){
                arr.push(rand);
                sum += rand;
                i++;
            }
            else {
                continue;
            }
        }
        return [arr, sum]
        // console.log('Array : ', arr)
        // console.log('Sum : ', sum)
    }
    else {
        console.log("Bukan Number")
    }
}

let arrSum = randomize(6);

if (!(arrSum === undefined)){
    console.log('Array: ', arrSum[0]);
    console.log('Sum: ', arrSum[1]);
}
