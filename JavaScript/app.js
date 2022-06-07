// function addTax(price) {
//     if (price > 0) {
//         const vat = 1.17; //maam
//         const total = (price * vat).toFixed(1);
//         return total;
//     } else {
//         return 'Nothing is for free! please supply a price';
//     }
// }





function addTax(price) {
    if (!price || price <= 0 || typrof(price) === 'string') {
        throw Error('Nothing is for free! please supply a price');
    }

    const vat = 1.17; //maam
    const total = (price * vat).toFixed(1);
    return total;
}

function generateId() {
    // const rand = Math.random();
    // console.log(` rand: ${rand}`);
    // const num = rand * 10000;
    // console.log(` num: ${rand}`);
    // const floor = Math.floor(num);
    // return floor;

    const time = new Date().getTime();
    return Math.floor(Math.random() * time);
}