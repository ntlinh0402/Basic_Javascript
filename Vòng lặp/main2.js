var sportsGold = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]
var myTotalGold = sportsGold.reduce(function(accumulator,currentValue){
    return accumulator +currentValue
},0);
console.log('this is' + myTotalGold)