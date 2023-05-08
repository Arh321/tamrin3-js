const text = "DDDeshkar is the best";

let textArray = [];

textArray = text.split('');

const howManyCharAndType = textArray.reduce((perv,cur) => {
    const charType = cur;
    let i = 1;
    if (charType != " ")
    {
    if (!perv[charType]){
        perv[charType] = {charType: cur,numb: i};
        
    }else{
         
         perv[charType].numb = perv[charType].numb + 1;
    }
}
    return perv;
},{})

console.log(howManyCharAndType);
