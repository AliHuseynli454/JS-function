// Verilmiş massivdə tək ədədlərin cəmini hesablayan funksiya yazın.

// const reqemler = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let index = 0; index < reqemler.length; index++) {
//    if(reqemler[index]%2 == 1){
//     sum +=reqemler[index];
//    }
    
// }
// console.log(sum);

// Massivdə olan ən böyük və ən kiçik ədədi qaytaran funksiya yazın.

// function tapMinMax(arr) {
//     let min = arr[0];
//     let max = arr[0];
  
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < min) {
//         min = arr[i];
//       }
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//     }
  
//     console.log("Min:", min);
//     console.log("Max:", max);
// }

// const ededler = [5, 3, 9, 1, 4];
// tapMinMax(ededler);

// Verilən array - dəki məhsulların qiymətinin cəmini tapan bir funksiya yazın.

// function qiymetCemi(arr) {
//     let cem = 0;

//     for (let i = 0; i < arr.length; i++) {
//         cem += arr[i].price; 
//     }

//     console.log("Qiymətlərin cəmi:", cem);
// }
// const products = [
//     { name: "Telefon", price: 500 },
//     { name: "Laptop", price: 1200 },
//     { name: "Qulaqlıq", price: 100 }
// ];
// qiymetCemi(products);

function filterByCategory(arr, kategoriya) {
    console.log(kategoriya + " kateqoriyasındakı məhsullar:");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].category === kategoriya) {
            console.log(arr[i]);
        }
    }
}

const myProducts = [
    { name: "Telefon", category: "Elektronika", price: 500 },
    { name: "Şalvar", category: "Geyim", price: 50 },
    { name: "Laptop", category: "Elektronika", price: 1200 },
    { name: "Ceket", category: "Geyim", price: 100 }
];

filterByCategory(myProducts, "Elektronika");
