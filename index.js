// 43 - masala    ////    Berilgan qatorni sozlash uchun faqat raqamlar va harflarni saqlab, boshqa barcha belgilarni olib tashlang.
function sanitizeString(str) {
    console.log(str.replace(/[!@#]/g, '' ));
}
// sanitizeString("he@llo! w0rld#"); // "hello0rld"




// 44 - masala    ////    Berilgan massiv ichidagi musbat va manfiy sonlarni alohida massivlarga ajratib, natijani obyekt sifatida qaytaring.
function separatePositivesAndNegatives(arr) {
    let positives = []
    let negatives = []
    for(let item of arr){
        if (item > 0) {
            positives.push(item)
        }else{
            negatives.push(item)
        }
        
    }

    console.log({positives, negatives});
    
}
// separatePositivesAndNegatives([1, -2, 3, -4, 5]); 
// { positives: [1, 3, 5], negatives: [-2, -4] }




// 45 - masala    ////    Berilgan massiv ichida faqat bir marta uchraydigan birinchi elementni toping.
function firstUniqueElement(arr) {
    let  result = {};
    for (let element of arr) {
        if (result[element]) {
            result[element]++;
        } else {
            result[element] = 1;
        }
    }
    for (let element in result) {
        if (result[element] === 1) {
            return parseInt(element);
        }
    }
    return "elementlarni hammasi bir martadan kup takrorlangan"; 
}
// console.log(firstUniqueElement([2, 3, 4, 2, 3, 5, 4])) // 5);






// 46 - masala    ////    Berilgan massiv ichidagi har bir elementning takrorlanish sonini qaytaruvchi obyektni yarating.
function elementCounts(arr) {
    let obj = {};
    arr.forEach(element => {
        if (obj[element]) {
            obj[element]++;
        } else {
            obj[element] = 1;
        }
    });
    return obj;
}
// console.log(elementCounts([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));






// 47 - masala    ////     Berilgan massiv ichida k indeksdagi elementni oxirgi indeksdagi element bilan almashtiring.
function swapElements(arr, k) {
    let res = arr.splice(k,1)
    arr.push(+res.join(""))
    console.log(arr);
}
// swapElements([1, 2, 3, 4, 5], 2); // [1, 2, 5, 4, 3]










