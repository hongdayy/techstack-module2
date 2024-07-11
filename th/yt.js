
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



/* MẢNG - ARRAY
1. Tạo mảng
- cách tạo
- sử dụng cách nào? tại sao?
- kiểm tra data type
2. truy xuất mảng
- độ dài mảng
- lấy phần tử theo index
*/

// var languages = [
//   'javascript',  // các phần tử của mảng, đc đánh tự động bắt đâì = số 0
//   'ruby',
//   'php',
// ];   //khi tạo 1 mảng thì nên đặt ở dạng số nhiều, xuống dòng cho dễ nhìn
// console.log(languages)

//ARRAY CHỨA TẤT CẢ CÁC KIỂU DỮ LIỆU TRONG JS
// var languages = [
//   null,
//   undefined,
//   function(){
//   },
//   123,
//   {},
 


// ];   //khi tạo 1 mảng thì nên đặt ở dạng số nhiều, xuống dòng cho dễ nhìn


// console.log(languages)

//CÁCH 2 CỦA ARRAY
var languages = new Array(
  'javascript',  
  'ruby',
   'php',
);         // ko cần dùng dấu [], Array viết hoa. TUY NHIÊN CACSCH NÀY K ĐC KHUYẾN CÁO SỬ DỤNG
console.log (Array.isArray(languages))  //kiểm tra 1 đối tượng có phải array hay ko  

//CÁCH TRUY XUẤT, ĐỘ DÀI MẢNG
console.log (languages.length)















  
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

