module.exports = function getZerosCount(number) {
    // let number = 84583674;

    let zeros = 0;
    for (let i = 5; i <= number; i+=5) {
        let buf = i;
        while(buf%5===0){
            zeros++;
            buf/=5;
        }
    }
    return zeros;
    // console.log(zeros);
};
//