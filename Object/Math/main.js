//Hãy tạo hàm getRandomItem, hàm này nhận 1 tham số là mảng và sẽ trả về ngẫu nhiên 1 phần tử của mảng.
function getRandomItem(array){
    
    
    return array[Math.floor(Math.random() * array.length)]
}
var array = ['ms','ls','he']


//  TOÁN TỬ 3 NGÔI Để vượt qua thử thách này bạn cần 
/*tạo hàm getCanVoteMessage, 
hàm này có 1 tham số là age. 
Trong trường hợp từ 18 tuổi trở lên hàm sẽ trả về Bạn có thể bỏ phiếu, 
ngược lại hàm trả về Bạn chưa được bỏ phiếu.*/
// Làm bài
function getCanVoteMessage(age){
    return  age>18 ? 'Bạn có thể bỏ phiếu': 'Bạn chưa được bỏ phiếu'
}




// Kỳ vọng
console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'