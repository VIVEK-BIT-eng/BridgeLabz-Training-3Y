// function fun() {
// var a = "hello";

//     console.log(a);
// }
// fun()
// console.log("hello");

// let name = "Dev";
// let msg = `Hello ${name}`;
// console.log(msg);

let name = "   Dev thakur  ";
console.log(name.trim());
console.log(name.toUpperCase());
console.log(name.toLowerCase());
// let arr = [3, 1, 4, 1, 5];
// console.log(arr.sort());
console.log(name.includes("thakur"));
console.log(name.replace("Dev", "John"));
console.log(name.trim().toUpperCase().split(" "));
console.log(name.slice(3, 8));
console.log(name.slice(5));

let password = "  werddw#$%WH2233 ";
function fun(password) {
    password = password.trim();
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    if (password.length < 6) return false;
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= 'A' && password[i] <= 'Z') {
            count1++;
        }
        if (password[i] >= 'a' && password[i] <= 'z') {
            count2++;
        }
        if (password[i] >= '0' && password[i] <= '9') {
            count3++;
        }
        else {
            count4++;
        }

    }
    return count1 > 0 && count2 > 0 && count3 > 0 && count4 > 0;
}
let ans = fun(password)
console.log(ans)


function otpgenerator() {
    let otp = "";
    for (let i = 0; i < 4; i++) {
        otp += Math.floor(Math.random() * 10);
    }
    return otp;
}
console.log(otpgenerator());




// objects

let student = {
    id:101,
    name:"raj",
    marks:80,
}

console.log(student["name"]);
console.log(student.name);
student.city = "delhi";
student.marks = 50;
delete student.id
console.log(student);
