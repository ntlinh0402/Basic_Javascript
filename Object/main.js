/* /*OBJECT*/
/* var schoolKey = 'school'
var myInfo ={
    name: 'Linh',
    age:18,
    address:'Ha Noi',
    [schoolKey] : 'HUST',
    getAge: function(){
        return this.age
    }
}
console.log(myInfo); */
/*Thêm key và value*/
/* myInfo.email = 'Linhnguyen@.email'
console.log(myInfo);
var myKey = 'name';
console.log(myInfo[myKey]) */

/*Thêm key và value cách 2*/
/* var schoolKey = 'school' */ /*phải khai báo trc myInfo*/

/* console.log(myInfo) */
/*Cách xóa*/
/* delete myInfo.name
console.log(myInfo)
getName = function(){
    return myInfo.age
} */
/* console.log(myInfo.getAge()) */
//Function --> Phương thức method
// Other ---> Thuộc tính property */




//Object constructor

function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
}
var author = new User('Linh','Nguyễn','img');
var user = new User('Linh','Nguyễn','Thuy');
console.log(author);
console.log(user);


