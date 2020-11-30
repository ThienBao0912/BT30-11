// BT29/11
// Array.map() tạo ra 1 mảng mới bằng cách thực hiện 1 chức năng trên mỗi pt mảng
console.log("Cho mảng ");
var human = new Array("Anh Khiêm","Hiếu","Lai","Bảo");
console.log(human);
var handsome = human.map(functionHuman);
console.log("Sau khi dùng map() để miêu tả đúng \"SỰ THẬT\": ");
console.log(handsome);
function functionHuman(value, index, array){
    return value + " đẹp trai";
}

console.log("Cho mảng:");
var flower = new Array("Hồng","Cúc","Đào","Ly");
console.log(flower);
// sort()
console.log("Mảng sau khi sắp xếp theo abc: \n\t"+flower.sort());
// reverse(): đảo ngược mảng
console.log("Đảo ngược mảng từ mảng đã sắp xếp: \n\t" +flower.reverse());
// forEach()
var txt = "";
function functionFlower(value, index, array) {
   txt = txt + value + "\n";
}
flower.forEach(functionFlower);
console.log(txt);

// ruduce(): 
console.log("Cho mảng: ");
var numbers = new Array (9, 12, 20, 25);
console.log(numbers);
function functionNumbers(total, value, index, array) {
    return total + value;
}
var sum = numbers.reduce(functionNumbers);
console.log("Tổng của mảng tính từ trái sang phải: \t"+sum);

// reduceRight ()
var sumRight = numbers.reduceRight(functionNumbers);
console.log("Tổng của mảng tính từ phải sáng trái: \t"+sumRight);

// every() & some() kiểm tra mảng theo đk 
function functionEvery(value) {
    return value > 10;
}
var allOver10 = numbers.every(functionEvery);
console.log("Kiểm tra các pt trong mảng lớn hơn 10 không: " + allOver10);

//indexOf(): tìm kiếm 1 mảng cho 1 giá trị pt vag trả về vị trí của nó
var a = numbers.indexOf(25);
console.log("vị trí a: " + a); 
// lastIndexOf()
var b = numbers.lastIndexOf(12);
console.log("vị trí lần cuối b: " + b); 

// find() trả về giá trị của ptu đầu tiên kiểm tra
var first = numbers.find(functionFind);
function functionFind(value,index,array) {
    return value > 10;
}
console.log("phần tử đầu tiên lớn hơn 10 là: " + first);
// findIndex trả về vị trí của phần tử đầu tiên trong dk kiểm tra
var firstIndex = numbers.findIndex(functionFind);
console.log("Vị trí của phần tử đầu tiên lớn hơn 10 là: "+ firstIndex);

// ---------------------------------------------------------
// Date Objects & Date Formats
var d = new Date();
console.log("Ngày giờ hiện tại: " + d);

// getFullYear() trả về năm 
console.log("Năm: "+ d.getFullYear());

// getMonth() trả về tháng
// trong js tháng đầu tiên là tháng 1 là tháng số 0 nên tháng 11 sẽ trả về tháng số 10
console.log("Tháng: " + d.getMonth());

// getDate()
console.log("Ngày: "+d.getDate());

// getHours()
console.log("Giờ: " + d.getHours());

// getMinutes()
console.log("Phút: "+d.getMinutes());

// getSeconsds()
console.log("Giây: "+d.getSeconds());

// getDay() trả về ngày trong tuần
// trong js ngày đầu tiên là Chủ nhật (0) nên thứ Hai (1)
console.log("Thứ: "+d.getDay());

var date = new Date("2020-11-30");
document.getElementById("date").innerHTML = date;

//-----------------------------------------------------------
// JavaScript Math Object

// Math.round() trả về giá trị làm tròn
console.log("5.1 làm tròn: "+Math.round(5.1));
console.log("9.5 làm tròn: "+Math.round(9.5));

// Math.sqrt() trả về căn bậc 2 
console.log("Căn bậc 2 của 10 là: "+ Math.sqrt(10));
console.log("Căn bậc 2 của 24 là: "+ Math.sqrt(24));

// Math.abs () trả về giá trị tuyệt đối
console.log("Giá trị tuyệt đối của -6: "+ Math.abs(-6));

// Math.ceil () trả về giá trị làm tròn "thành" số nguyên gần nhất
console.log("Giá trị làm tròn thành số nguyên gần nhất của 5.2: "+ Math.ceil(5.2));

// Math.floor () trả về giá trị làm tròn "xuống" số nguyên gần nhất 
console.log("Giá trị làm tròn xuống số nguyên gần nhất của 5.2: "+ Math.floor(5.2));

// Math.sin () & Math.cos () trả về sin và trả về cosine
console.log("Sin: " + Math.sin(90 * Math.PI / 180));
console.log("Cos: " + Math.cos(0 * Math.PI / 180));

// Math.min () và Math.max ()
console.log("Giá trị min: " + Math.min(9,12,10,25,20,-4,90));
console.log("Giá trị max: " + Math.max(9,12,10,25,20,-4,90));

// Math.random ()
console.log("Giá trị ngẫu nhiên: "+ Math.random());

// Số nguyên ngẫu nhiên:
console.log("Giá trị số nguyên ngẫu nhiên từ 0-9: "+ Math.floor(Math.random()*10));

// Boolean() tìm hiểu xem 1 biểu thức or 1 biến đúng hay ko
console.log(Boolean(10>9));

// Comparison Operators: toán tử so sánh
var x = 9;
console.log(x == 8);

// conditions điều kiện
if (new Date().getHours()>18){
    alert("Good Evening")
}else if (new Date().getHours()<18 && new Date().getHours()>13 ){
    alert("Good Afternoon")
}else {
    alert("Good Morning")
}


// var age, voteable;
// if (isNaN(age)) {
//     voteable = "Input is not a number";
// } else {
//     voteable = (age < 18) ? "Too young" : "Old enough";
// }
// document.write(voteable);
// var age = parseInt(prompt("Nhập tuoi: "));q