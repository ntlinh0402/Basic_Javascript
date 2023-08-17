/*Tạo danh sách số ngẫu nhiên
Cập nhật tháng 4 năm 2022

Để vượt qua thử thách này, bạn cần kết hợp nhiều kiến thức đã học như: làm việc với array, đối tượng Math và loop.

👉 Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length. Hàm này sẽ trả về một mảng gồm length phần tử, các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max.

Gợi ý: Math.random() * (max - min) + min là cách tạo ra 1 số ngẫu nhiên trong khoảng min - max.*/
// Làm bài
function getRandNumbers(min, max, length){
    var arr=[];
    for(var i=1; i<=length; i++){
        var random = Math.floor(Math.random()* (max - min) + min) ;
        arr.push(random)

    }
    
    return arr
}

console.log(getRandNumbers(1,6,10))


/**
 * Hết sức lưu ý: Hãy suy nghĩ kỹ để đảm bảo vòng lặp (loop)
 * luôn có điểm dừng, trìnmberesh duyệt của bạn sẽ bị treo
 * nếu vòng lặp không có điểm dừng.
 * 
 * VD 1: for (var i = 0; i < 100; i--) // i++ mới đúng
 * VD 2: for (var i = 100; i >= 0; i++) // i-- mới đúng
 * là 2 vòng lặp không có điểm dừng (lặp vô hạn)
 * 
 * => Treo trình duyệt!!!
 */

/* Tính tổng  mảng*/

//Để vượt qua thử thách này, hãy tạo hàm getMostFavoriteSport có 1 tham số 
//(F8 sẽ gọi hàm này và luôn truyền đối số là 1 array). 
//Hàm getMostFavoriteSport sẽ trả về các môn thể thao có điểm số yêu thích lớn hơn 5.
const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]

function getMostFavoriteSport(myArr){
    return myArr.filter(function(sport, index){
        console.log(index)
        return sport.like >5
    })
            
        }  
// Kỳ vọng
console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]



//// REDUCE

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
// accumulator: biến luư trữ; lần 1 return cái j thì lần 2 là cái đấy, tương tự cộng dồn vào tiếp theo
// currentValue: giá trị hiện tại
// currentIndex: chỉ mục của currentValue trong mảng vd current value: đạp xe => currentIndex:2
//originArray: The array reduce() was called upon.
var i =0
function getTotalGold(accumulator,currentValue,currentIndex){
    i++;
    var total = accumulator + currentValue.gold;
    console.table({
        'lượt chạy':i,
        'Số huy chương': currentValue.gold,
        'Biến tích trữ': accumulator, // biến tích trữ đầu tiên là 0 giá trị truyền vào reduce
        'Tích trữ được': total
    });
    return total 
}
var totalGold = sportsGold.reduce(getTotalGold,0)
console.log(totalGold) //  Output: 23


// trình bày ngắn hơn
var myTotalGold = sportsGold.reduce(function(accumulator,currentValue){
    return accumulator +currentValue.gold
},0);
console.log('this is ' + myTotalGold)