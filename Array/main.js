var newArray = 
[
    'Linh',
    'Hoa',
    'Mai',
    'Minh'
]
console.log(newArray)
//to string: Biến mảng thành chuỗi
console.log(newArray.toString())
//join: join kí tự vào giữa 2 phần tử
console.log(newArray.join(' - '))
//pop: xóa phần tử cuối cùng và trả lại phần tử bị xóa
console.log(newArray.pop())
//push: Thêm phần tử vào cuối mảng
console.log(newArray.push('Chi'))
console.log(newArray)
//shift: Xóa phần tử ở đầu mảng và trả lại phần tử đã xóa
console.log(newArray.shift())
//Thêm vào đầu và trả lại độ dài cuả mảng
console.log(newArray.unshift('Hanh'))
console.log(newArray)
//concat: Hợp nhất
var array2 = [
    'Thanh',
    'Thuy',
    'Anh',
    'Lam'
]
console.log(newArray.concat(array2))
//slice(start, end) và trả lại phần đã cắt
console.log(array2.slice(10,0,'Ngoc Anh'));
console.log(array2)


