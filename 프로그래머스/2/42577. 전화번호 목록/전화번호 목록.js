function solution(phone_book) {
    const phone_set = new Set(phone_book);
    // console.log(phone_set);
    for(let j = 0 ; j<phone_book.length; j++) {
        const phone = phone_book[j];
        for(let i = 1; i<phone.length; i++) {
            const sliced = phone.slice(0,i);
            // console.log(sliced);
            if(phone_set.has(sliced)) {
                return false;   
            }
        }
    }
    return true;
}