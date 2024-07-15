
// var fullName ='Trung Hieu'; /*tên biến kí tự đầu tiên là chữ, tên biến hai chữ, từ đầu tiên viết thường, từ tiếp theo in hoa chữ cái đầu */
// var age=21;
// alert(fullName); /*alert hiển thị 1 thông báo, hiện lần lượt thông báo */
// alert(age);


// var fullName = 'Hieu';
// console.warn(fullName); //in ra cảnh báo- chấm than màu vàng
// console.error(fullName);//in ra dấu x màu đỏ- lỗi
// console.log(fullName)

// confirm('xac nhan ban du tuoi!') // có nút cancel-ok


// prompt('xac nhan du tuoi') // hiện thêm ô input điền vào và cancel-ok để xác nhận


// setTimeout(function() { //tham số thứ nhất truyền vào là 1 funtion, tham số thứ hai truyền vào là khoảng thời gian
//   alert('thong bao')    // thực thi 1 đoạn code ấn định sau 1 khoảng thời gian
// },1000) //mili giây



// setInterval(function () { // thực thi liên tục
//      console.log('day la log' + Math.random()) //cách dể viết ra 1 chuỗi random
// },1000) 




// var a=1 + 2; //toán tử số học + - * % /
// console.log(a)



// var fullName ='Hieu'; //toán tử gán- gán cho tên


// var a=1;
// var b=2;

// if (a > b) {
//     alert('Dung');    // đúng thì thực thi lệnh này, ko thì k hiện

// }






// // toán tử logic &&
// if(a > 0 && b > 0) {
//     alert('a & b lớn hơn 0')
// }



/** TOÁN TỬ SỐ HỌC
 + cộng
 - trừ
 * nhân
 ** lũy thừa
 / chia
 % số dư
 ++ tăng 1 giá trị số tăng 1 đơn vị
 -- giảm 1 giá trị số  giảm 1 đơn vị
 */

//  var a = 8;
//  var b = 2;
//  var c = a % b;             //số dư > hoặc #0 số lẻ, còn lại là chẵn
//  console.log(c);



// var a =5;
// a++;
// console.log(a);




// toán tử ++ -- 
// prefix & postix  = tiền tô, hậu tố - sd toán tử ++ -- đằng trước toán hạng là tiền tố, sau toán hạng là hậu tố

// var a =6;
// // việc 1: +1 cho a, a = a + 1 => a = 7
// // việc 2: trả về a sau khi được + 1
// console.log(++a); // trả về sau khi đc cộng

// // tiền tố
// var a = 6;
// var output = ++a;  //output a=7
// console.log('output', output);


// hậu tố
// việc 1: 'a copy', 'a copy =6
// việc 2: trừ 1 của a , a = a-1 => 5
// việc 3: trả về 'a copy'

// var a = 6;
// var output = a--;
// console.log('output', output);   //output a=6
// console.log('a:', a) // muốn nhận đc giá trị thì trả về a


// // ví dụ 1
// var number = 6;
// var output = number++ + --number;
//  // 6+6=12
//  console.log('output:', output);

// // ví dụ 2
// var number =6;
// var output = ++number *2 - --number *2;
// console.log('output', output);
// //7*2-6*2



/**
 toán tử      ví dụ          tương đương
 =            x=y             x=y
+=            x+=y            x=x+y
-=            x-=y            x=x-y
*=            x*=y            x=x*y
/=            x/=y            x=x/y
**=           x**=y           x=x**y

 */

// var a = 1;
// a -= 2;
// console.log (a);

/**
 * TOÁN TỬ CHUỖI - STRING OPERATOR
 */
// var firstName = 'Hieu';
// var lastName = 'Ngu';

// console.log(firstName + ' ' + lastName); // chuỗi hai chữ nối nhau


// var name = 'hieu';
// name += ' ngu';
// console.log(name);



/** TOÁN TỬ SO SÁNH
 ==  --> Bằng
 !=  --> không bằng
 >   --> lớn hơn
 <   --> nhỏ hơn
 >=  --> lớn hơn hoặc bằng
 <=  --> nhỏ hơn hoặc bằng
 */

//  var a='Hieu ngu';
//  var b = 'hieu ngu';
//  if (a == b) {
//     console.log ('dieu kien dung!');
//  } else {
//     console.log ('dieu kien sai!');
//  }

 /**
  BOOLEAN
  */

//   var a = 1;
//   var b = 2;
//  var isSuccess = a > b;
//  console.log(isSuccess);


/**
 * IF - ELSE
 */
/** chỉ có những giá trị sau convert sang boolean mới ra false, còn lại là true
 * 0
 * false
 * '' - "" - chuỗi rỗng
 * underfined
 * NaN
 * null
 */
// var isSuccess = 1 < 2;
//  if(isSuccess) {
//     console.log ('DIEU KIEN DUNG');

//  } else {
//     console.log ('DIEU KIEN SAI');
//  }

//  var fullName = 'Hieu ngu';
//  if(isSuccess) {
//     console.log ('DIEU KIEN DUNG');

//  } else {
//     console.log ('DIEU KIEN SAI');
//  }



// toán tử logical
/** TOÁN TỬ LOGIC
 * 1. && - And
 * 2. || - or
 * 3. !  - not --> giá trị ( phủ định) đúng thành sai, sai thành đúng
 */
// var a = 1;
// var b = 2;
// var c = 3;
// if (a > 0 && b > 0 && c > 0) {
//   console.log ('DIEU KIEN DUNG!');
// }
// if (!(a < 0)) {
//   console.log ('DIEU KIEN DUNG!');
// }




/** KIỂU DỮ LIỆU TRONG JAVASCRIPT
 1. Dữ liệu nguyên thủy - primitive Data
 * number
 * string
 * boolean
 * underfined
 * null
 * symbol
  2. Dữ liệu phức tạp - complex data
 * function
 * object
 */

  // //number
  // var a = 1;
  // var b = 2;
  // var c = 1.5;
  // console.log(typeof a)
  
  // //string
  // var fullName = 'hieu';
  // console.log(typeof fullName)
  
  
  // //boolean
  // var isSuccess = true; // bình thường theo quy ước boolean hay đặt is đằng trước
  // console.log(typeof isSuccess)
  //  //undefined - định nghĩa ra 1 biến k gán giá trị cho nó
  
  
  // var age;
  // //null - không có gì(nothing)
  // var isNull = null;
  // console.log(typeof isNull) //kq ra object
  
  
  // // Symbol
  // var id = Symbol('id'); //unique- tính duy nhất
  // var id2 = Symbol('id'); //unique- tính duy nhất
  // console.log(id===id2); // kết quả ra false
  
  
  // //function
  // var myFunction = function() {
  //   alert('hi. xin chao!'); // code sẽ k chạy
  // }
  
  
  // myFunction(); // gọi function ra nó ms chạy
 
 
  // //object
  // var myObject = {
  //   name: 'Hieu ngu',
  //   age: 18,
  //   adress: Hoa Binh
  //   myFunction: function () {

  //   }
  // };
  // console('myObject', myObject);

  // var myArray = [
  //   'javascript'
  // ];





  //TOÁN TỬ SO SÁNH - P2
  /**
   * ===  //So sánh cả giá trị lẫn kiểu dữ liệu của hai biến.
   * !==//So sánh cả giá trị lẫn kiểu dữ liệu của hai biến.
   * 
   * ngược lại == và != chỉ so sánh giá trị của biến
   */
  //  var a = 1;
  //  var b = 1;
  //  console.log(a === b);





//Hiểu hơn về câu lệnh điều kiện 
// và phép so sánh
var a = 1;
var b = 2;
// var result = 'A' && 'Nan' && 'C';// trả về C vì a b c ko nằm trong những dữ liệu false( null, ',...) nên nó gán vế phải cuối cùng vào result
// var result = 'A' || 'Nan' || 'C'; // or nó lấy luôn phần tử A khi xét a k thuộc phần false(...) trên

// console.log('result', result)

// if (result) {
//   console.log('DIEU KIEN DUNG');
// } else {
//   console.log('DIEU KIEN SAI');
// }

// if (result) {
//   console.log('A < B');
// } else {
//   console.log('A > B')
// }




//FUNCTION( HÀM)
// Toán tử: call() - gọi hàm

/*QUY TẮC ĐẶT TÊN HÀM
- Chứa chữ cái twd a-z, A-Z, 0-9, _$, tuy nhiên vẫn ko đc đặt số tên biến đầu tiên
-
*/
// function showDialog() { 
//   alert('Xin chào');
// }
// showDialog(); //PHẢI GỌI HÀM NHƯ NÀY THÌ FUNCTION NÓ MỚI CHẠY








// THAM SỐ TRONG HÀM, TRUYỀN ĐC NHIỀU KHAI BÁO HƠN SO VỚI TẠO BÊN TRONG
// function writelog(message, message2) {
//   console.log(message);
//   console.log(message2);

// }
//TRUYỀN ĐC MỌI KIỂU DỮ LIỆU
// writelog('alo', 'test_2');
// writelog(['php', 'js'])
// writelog(123)

//LƯU Ý, TRONG FUCTION CÓ ARGUMENT, VÀ CHỈ GỌI ARGUMENT TROGN FUNCTION
// function writelog () {
//   console.log(arguments) 
// }
// writelog('log1', 'log2');

//FOR - OF TRONG FUNCTION
//ĐỀ BÀI: in ra log 1,2,3 trong fucntion
// function  writelog() {
//   var myString = '';
//   for (var param of arguments) {
//     myString += `${param} - `; // dùng để kết nối param với dấu gạch ngang

//   }
//   console.log(myString)
// }
// writelog('log1', 'log2', 'log3',5, 6);




//RETURN TRONG HÀM
// var isConfirm = confirm('message?'); //hiển thị một hộp thoại với thông báo được chỉ định, cùng với nút “OK” và nút “Canc
// console.log(isConfirm);

// function cong(a, b) {
//   return a + b; // dùng retun thì tất cả code phía sau ko thực thi
//   //return [a, b]; -----> dùng đc bất cứ kiểu dữ liệu gì
  
// }
// var result = cong(2, 8); //truyền giá trị tương ứng vào function rồi return
// console.log(result)






// HIỂU HƠN VỀ FUNCTION TRONG JAVASCRIPT
//1 KHI ĐẶT HAI FUCNTION CÙNG TÊN, FUNCTION ĐC ĐỊNH NGHĨA SAU SẼ GHI ĐÈ FUNCTION TRƯỚC
// function showMessage () {
//   console.log('Message 1');
// }
// function showMessage () {
//   console.log('Message2');
// }
// showMessage();






//CÁC LOẠI FUNCTION
// showMessage();

// function showMessage () { //declaration function
// console.log('declaration function')
// }
// //expression function 

// var showMessage2 =function() {   //expression function - gán cho một biến
// console.log('expression function')
// }
// setTimeout(function testName () {

// });
// var my0bject = {
//   myFunction: function testName () {

//   }
  
// }








// CHUỖI
// Cách 1 : tạo chuỗi
// var fullName = ;
// // Cách 2
// var fullName = new String('Hieu ngu')  //==> NÊN DÙNG CÁCH 1


// var fullName = 'Hieu ko ngu lắm hiếu chỉ hơi ngáo thôi'; // tối đa kí tự trên 1 dòng nên là 80
// console.log(fullName.length) // DÙNG LENGTH XEM ĐỘ DÀI CHUỖI, TÍNH CẢ CHỮ CÁI VÀ DẤU CÁCH


//cách cắt dòng xuống:
// var fullName = "Căn cứ theo các tài liệu lưu hành phổ biến về bộ môn Câu cá" 
// + " 1.thì Câu Đài được hiểu nôm na là hình thức câu ta"
// + " 2.thì Câu Đài được hiểu nôm na là hình thức câu ta"
// console.log(fullName)

// var firstName = "Hieu"
// var lastName = "Le"
// console.log(`toi la: ${firstName} ${lastName}`)








//LÀM VIEJC VỚI CHUỖI


// var myString = 'Hoc js tại js js đây'

//1. kiểm tra độ dài
// console.log(myString.length)

//2.tìm index
//console.log(myString.indexOf('js',6)) //trả về chuỗi đầu tiên, tìm chữ js thứ hai thì tìm sua số 4( số thứ tự của js đầu tiên)
// console.log(myString.lastIndexOf('js')) // tìm chữ js ở cuối trong chuỗi
// //
// console.log(myString.search('js')) // search tìm chuỗi nhưng tìm 1 chữ thôi, ko hỗ trợ tìm thứ 2,3...

// var myString = 'Hoc js tại js js đây'
// 3. cách cắt chuỗi
// console.log(myString.slice(4,6)) // tại chữ js ỏ vị trí 4,6

//4. ghi đè, thay thế
// console.log(myString.replace('js','javascript'))
//để thay thế nhiều chữ js
// console.log(myString.replace(/js/g,'javascript'))


// var myString = 'Hoc js tại đây'
// //5. chuyển đổi tất cả các chuỗi thành chữ hoa
// console.log(myString.toUpperCase())
// //6. thành chữ thường
// console.log(myString.toLowerCase())

// var myString = '          Hoc js tại đây       '
// //7. xử lý dữ liệu nhập vào của người dùng
// console.log(myString.trim()) // xử lý khaonrg cách thừa

// //8.split - cắt 1 chuỗi thành 1 array
// var language = 'js, php, ruby'
// console.log(language.split(', '))
// var language1 ='javscript'
// console.log(language.split(''))

// //9. lấy đi 1 kí tự
// const myString2 = 'Son Dang';
// console.log(myString2.charAt[3])









// HỌC VỀ KIỂU NUMBER
// var age = 18
// var pi = 3.14

// var result = 20 / 'ABC';
// console.log(isNaN(result))


//làm việc với number
// console.log(age.toString()) // chuyển đổi kiểu number sang string
// //fixed
// console.log(pi.toFixed()) // làm tròn
// console.log(pi.toFixed(2)) // rút gọn 2 số sau số thập phân









//ARRAY
// var languages = [
//   'javascript',
//   'php',
//   'ruby',
//   undefined,
//   function(){

//   },
// ]// ARRAY CHỨA TẤT CẢ CÁC KIỂU DỮ LIỆU
// console.log(languages)


//CÁCH KIỂM TRA XEM 1 BIẾN CÓ PHẢI ARRAY HYA KO
// console.log(Array.isArray(languages))

//TRUY XUẤT MẢNG - ĐỘ DÀI MẢNG
// console.log(languages.length)

// phần tử của array gọi là chỉ mục hoặc index
// console.log(languages[2])// lấy ra đc thằng ruby vì chỉ mục đầu tieeb là 0



// CÁC CÁCH LÀM VIỆC VỚI ARRAY
// var languages = [
//   'javascript',
//   'php',
//   'ruby'
// ]
// //to string
// console.log(languages.toString()) // to string ở đây để chuyển kiểu dữ liệu của array sang string

//join
// console.log(languages.join(' - ')) // cách thay dấu phẩy thành 1 dấu khác

//pop
// console.log(languages.pop()) // xóa đi phần tử cuối mảng và trả về phần tử đã xóa
// console.log(languages)

//push
// console.log(languages.push('dart', 'java')) // thêm 1 hoặc nhiều phần tử vào mảng và in ra số độ dài mảng
// console.log(languages)

//shift
// console.log(languages.shift()) // xóa đi phần tử đầu tiên ở mảng trả về phần tử đó
// console.log(languages) 

//unshift
// console.log(languages.unshift('dart', 'java'))// thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới
// console.log(languages)

//splice
//xóa, cắt hoặc chèn phần tử mới vào mảng

// xóa
// languages.splice(1, 2)   // đưa một chỉ mục vào đầu tiên ( số đầu tien - trỏ vào phần tử nào; số thứ 2- xóa phần tử đó)
// console.log(languages)

//chèn thêm 1 element
// languages.splice(1, 0, 'java') // đưa một chỉ mục vào đầu tiên ( số đầu tien - trỏ vào phần tử nào; số thứ 2- xóa phần tử đó( ở đây để 0 để giữa nguyên hết các phần tử, còn để số 1, 2 vẫn đc), thứ ba là 1 element cần chèn vào
// console.log(languages)

//concat : nối array
// var language = [
//   'javascript',
//   'php',
//   'ruby'
// ]

// var languages2 = [
//   'dart',
//   'ruby'
// ]
// console.log(languages.concat(languages2)) // truyền array muốn hợp nhất vào
// console.log(languages2.concat(languages))

//slice
// var language = [
//   'javascript',
//   'php',
//   'ruby'
// ]
// console.log(languages.slice(1)) // cắt di 1 vài hoặc cắt hết element trong mảng
// console.log(languages.slice(1, 2))
  






// OBJECT TRONG JS
// var myInfo = {
//   name:'son dang',
//   age: 18,
//   address: 'Ha Noi, VN'
//   // muốn thêm kí tự, VD my-name: thì thêm 'my-name'
// }
// myInfo.email = 'sondang@gmail.com'// cách thêm 1 key nữa khi object đã đc tạo 
// myInfo.[my-email] = 'sd@gmail.com' // nếu muốn thêm dấu - thì dùng []
// console.log(myInfo)


//cách để lấy value ra ngoài
// console.log(myInfo.age) // cách 1
// var myKey = 'address'
// console.log(myInfo[myKey]) // cách 2

// cách thêm key mới
// var emailKey = 'email'
// var myInfo = {
//   name: 'son dang',
//   age: 18,
//   address: 'Hà Nội',
//   [emailKey]: 'son@gmail.com'

// }
// console.log(myInfo)

//xóa value
// delete myInfo.age
// console.log(myInfo)

//function trong object
// var emailKey = 'email'
// var myInfo = {
//   name: 'son dang',
//   age: 18,
//   address: 'Hà Nội',
//   [emailKey]: 'son@gmail.com',
//   getName: function() {
//     return this.name //=myInfor.name nhưng nên dùng this
//   }

// }
// console.log(myInfo.getName())

//function ở đây gọi là phương thức/method
// còn lại ---> thuộc tính/property


// XÂY DỰNG ĐỐI TƯỢNG ( OBJECT CONSTRUCTOR)
function User(firstName, lastName, avatar) {  // viết hoa chữ cái đầu của object constructor- quy ước chung
  this.firstName = firstName
  this.lastName = lastName
  this.avatar = avatar


}
var author = new User ('Sơn', 'Đặng', 'Avatar')
var user = new User('Vũ', 'Nguyễn', 'Avatar') 

console.log(author)
console.log(user)



















/** VÒNG LẶP - LOOP
 * 1. for - lặp với điều kiện đúng
 * 2. for/ in - lặp qua key ( array, object, string) của đối tượng
 * 3. for/of - lặp qua value của đối tượng (array, string)
 * 4. while - lặp điều kiện đúng
 * do/while - lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
 */




// forr loop
// đề bài in ra từ 1- 1000

// for(var i = 1; i <= 100; i++) {
//   console.log(i)
// }





//DO/WHILE (LOOP) --> LUÔN LUÔN DUYỆT CODE Ở DO TRƯỚC RỒI MỚI TỚI WHILE
// VÍ DỤ VỀ NẠP THẺ THÀNH CÔNG HAY KHÔNG 
// var i = 0;
//  var isSuccess = false; // khi bài toán thất bại sẽ chạy ở while
//  do {
//   i++  // NHỚ KO ĐC QUÊN TĂNG GIẢM GIÁ TRỊ CỦA Y ĐỂ TRÁNH CHẠY VÔ HẠN
//   console.log('nạp thẻ lần' + i);
 
//   if(true) { // khi bài toán thành công
//     isSuccess = true;
//   }

//  }while(!isSuccess && i < 3); 

