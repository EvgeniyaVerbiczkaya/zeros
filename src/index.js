module.exports = function getZerosCount(number) {
    let counter = Math.trunc(number / 5);
    let zeros = counter;
    while (counter > 1) {
        counter = Math.trunc(counter / 5);
        zeros = zeros + counter;
    }
    return zeros;
}