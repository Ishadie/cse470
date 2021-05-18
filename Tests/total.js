
function calculateTotal(list){
    let sum = 0;

    for(var i in list) 
    { sum += list[i]; }
        
    

    return sum;
}
module.exports= calculateTotal;