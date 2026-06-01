// the print statment: 
// window.alert("Hello, World!");
//document.write("Hello, World!");
 // console.log("Hello, World!");
// Document.CREATE_ELEMENT("p");

//مقارنة بين كود ايكما 5 و 6
// var num1 = 10;
// var num2 = 20;
// var sum = num1 + num2;
// console.log("The sum of " + num1 + " and " + num2 + " is: " + sum); 
//vs
// var num1 = 10;
// var num2 = 20;
// var sum = num1 + num2;
// // console.log(`The sum of ${num1} and ${num2} is: ${sum}`);


// var name = "Alice";
// console.log("Hello, " + name + "!");      
//vs
// var name = "Alice";
// console.log(`Hello, ${name}!`);


                            //تكليفات الزيرو 

                         // تكليف 1

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <title>Learn JavaScript</title>

//     /*    code one and code tow will not work because they are in the head
//      and the element with id "el" is not yet loaded when the scripts run. 
//      code three whil work be cause it is placed after the element with id "el" in the body,
//       ensuring the element is loadeed before the script runs. 
//       */

//     <script>
//       // Code One
//       document.getElementById("el").style.color = "red";
//     </script>
//     <script>
//       // Code Two
//       window.onload = function () {
//         document.getElementById("el").style.color = "red";
//       };
//     </script>
//   </head>
//   <body>
//     <h1 id="el">Page Title</h1>
//     <script>
//       // Code Three
//       document.getElementById("el").style.color = "red";
//     </script>
//   </body>
// </html>


                         // تكليف 2
//console.log("%cElzero ","color: blue;font-size: 80px;font-weight: bold;text-align: center; font-family: Arial");

/* let element = document.createElement("h1");
element.textContent = "Elzero";

element.style.color = "blue";
element.style.fontSize = "80px";
element.style.fontWeight = "bold";
element.style.textAlign = "center";
element.style.fontFamily = "Arial";

document.body.appendChild(element);
*/


                         // تكليف 3

//console.log("%cElzero %cWeb %cSchool","color: red;font-size: 80px;font-weight: bold;text-align: center; font-family: Arial","color: green;font-size: 80px;font-weight: bold;text-align: center; font-family: Arial","color: blue;font-size: 80px;font-weight: bold;text-align: center; font-family: Arial");


                         // تكليف 4

//console.log("%cElzero %cWeb %cSchool","color: red;font-size: 80px;font-weight: bold;text-align: center; font-family: Arial","color: green;font-size: 80px;font-weight: bold;text-align: center; font-family: Arial","color: blue;font-size: 80px;font-weight: bold;text-align: center; font-family: Arial");
/*


                         // تكليف 5

console.group("Group 1");

console.log("Message One");
console.log("Message Two");

console.group("Child Group");

console.log("Message One");
console.log("Message Two");

console.group("Grand Child Group");

console.log("Message One");
console.log("Message Two");

console.groupEnd();

console.groupEnd();

console.groupEnd();

console.group("Group 2");

console.log("Message One");
console.log("Message Two");

console.groupEnd();

*/

// console.table(["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"]);

                         // تكليف 6


// لتعطيل اي كود بعد هذا االلكود ومنع ضهوره في الكونسول 
/*
console.log = function () {};
console.error = function () {};
console.warn = function () {};
console.info = function () {};

console.log("Iam In Console");
document.write("Iam In Page");


*/
                         // تكليف 7

//قم بإنشاء متغيرين بإسم Number One و Number Two بالطريقة والمعايير السليمة لتسمية المتغيرات

// var numberOne ;
// var numberTwo ;

// // //المتغير الأول قيمته 10 ونوع البيانات هو Number
// numberOne = 10 ;

// // //المتغير الثاني قيمته 20 ونوع البيانات هو Number
// numberTwo = 20 ;

// // //في السطر الأول قم بطباعة النتيجة 1020 في ال Console بإستخدام طريقة ال Concatenate العادية
// console.log(numberOne + numberTwo);

// // //في السطر الثاني قم بطباعة نوع البيانات 1020 في ال Console بإستخدام طريقة ال Concatenate العادية
// console.log(typeof (numberOne + numberTwo));

// // //في السطر الثالث قم بطباعة النتيجة 1020 في ال Console بإستخدام ال Template Literals في عمل Concatenate
// console.log(`${numberOne}${numberTwo}`);

// // //في السطر الثالث قم بطباعة النتيجة 1020 في ال Console بإستخدام ال Template Literals في عمل Concatenate
// console.log(typeof `${numberOne}${numberTwo}`);

// // //في السطر الخامس والسادس وبدون تكرار ال Console.log قم بطباعة الرقم 20 وتحته الرقم 10 بإستخدام ال Concatenate العادية
// console.log(numberTwo + "\n" + numberOne);

// // //في السطر السابع والثامن وبدون تكرار ال Console.log قم بطباعة الرقم 20 وتحته الرقم 10 بإستخدام ال Template Literals
// console.log(`${numberTwo}\n${numberOne}`);



                         // تكليف 8
/*  يجب عدم التعديل نهائيا على ملف ال JS
يجب عدم كتابة أي JavaScript Code في اي مكان للوصول للمطلوب
يجب عليك أن تجعل هذا ال Code يعمل ويخرج النتيجة الموجودة  */
// console.log(elzero.innerHTML); // object
// console.log(typeof elzero); // object

//عملت عنصر اوبجكت في الاندكس واعطيته اي دي اسمه الزيرو وقيمته كلمة اوبجكت 


// بحث 
// losely type vs strongly type
// في الجافا سكريبت المتغيرات ليست مرتبطة بنوع بيانات معين، مما يعني أنه يمكنك تغيير نوع البيانات المخزنة في المتغير في أي وقت. 
//  هذا يجعل جافا سكريبت لغة "loosely typed" أو "dynamically typed". على سبيل المثال:
/* | Loosely Typed         | Strongly Typed   |
| --------------------- | ---------------- |
| مرن                   | صارم             |
| يسمح بتغيير النوع     | يمنع تغيير النوع |
| أقل أخطاء وقت الكتابة | أكثر أمان        |
| JavaScript            | Java / C#        |
 */

                         // تكليف 9

// console.log(` \`I\'m In \n \\\\ \n Love \\\\ """ \'\'\' \n ++ with ++ \n \\ """ // """ \n ""JavaScript"" \`\``);



                         // تكليف 10

// let a = 21;
// let b = 20;

// console.log(` _${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`); // _21_2021_2021_2021_20_


                    // تحدي الكورس فيديو رقم 17





// ===========================================
// == Variables And Concatenation Challenge ==
// ===========================================

// [1] Create 3 Variables [Title, Desctiption, Date]
// -- All In One Statement
// -- Variable Name Must Be Two Words
// -- Title Content Is "Elzero"
// -- Description Content Is "Elzero Web School"
// -- Date Content Is "25/10"
// [2] Create Variable Contains Div And This Div Contains
// -- H3 For Title
// -- P For Paragraph
// -- Span For Time 
// [3] Add This Card To Page 4 Times
// [4] Use Template Literals For Concatenate

// Extra
// - Use ES6 Repeat
 // الحل :

            // let the_Title ="Elzero",
            //  the_Desctiption ="Elzero Web School",
            //  the_Date ="25/10";

            // let card =`
            //         <div class="card">
            //                 <h3> ${the_Title} </h>
            //                 <p> ${the_Desctiption} </p>
            //                 <span> ${the_Date} </span>        
            //         </div>
            //                         `;
            // document.write(card.repeat(4));

            
                   // تحدي الكورس فيديو رقم 22


/*
  Challenge 1
*/

// let a = 10;
// let b = "20";
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++); //100
// console.log(++a + -b + +c++ - -a++ + +a); //100 
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
// الان في جملة الطباعة الثانية تم استخدام المتغيرات بعد تعديلها في الجملة الاولى مما ادى الى تغير قيمتها في الجملة الثانية
// في الجملة الثالثة تم استخدام المتغيرات بعد تعديلها في الجملتين الاولى والثانية مما ادى الى تغير قيمتها في الجملة الثالث 
//  نلاحظ في السطر الثالث انه عندما طرح واحد من المتغير الف لم يتغير قيمته في الديكلريشن
//  ولكن عندما يضيف 1 الى قيمته تتغير في الدكليريشن 
// فعند التعامل مع المتغير مرة اخرى بالطرح يتم التعامل معه كما هي قيمته في الدكليريشن 
// اما اذا اضفت 1 له مرة اخرى يتم الاضافة بالدكليريشن ايضا 
/*
  [++a] [+]
  [++a]

  - Value:.
  - Explain:
  [+]
  - Explain:
*/

/*
  Challenge 2
*/

// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;

// // // Only Use Variables Value
// // // Do Not Use Variable Twice

// console.log( -d * +e); // 2000
// console.log( -d + ++f + ++e * ++g ); // 173


                                                     // التكليف 11
/*   ستبدل علامة الإستفهام بواحد من ال Arithmetic Operators لتخرج بالنتيجة المطلوبة
غير مسموح التعديل على الأرقام
النتيجة المطلوبة هي صفر */

// Replace ? With Arithmetic Operators
// console.log(10 ? 20 ? 15 ? 3 ? 190 ? 10 ? 400); // 0

//  console.log(10 * 20 / 15 * 3 % 190 % 10 * 400); // 0

// let num = 3;

// // Solution One
// console.log(`${num + num}`); // 6

// // Solution Two
// console.log( `${num * --num}`); // 6

// // Soultion Three
// console.log(`${ num * true  + num * true}`); // 6

// // Soultion Four
// console.log( `${ num / true  + num / true}`); // 6

// // Solution Five
// console.log(  num << true  ); // 6

// // Solution Six
// console.log(`${ num ** true  + num ** true}`); // 6

                                                     // التكليف 12
/*     إستخدم قيمة المتغير لتخرج بالنتيجة المطلوبة بخمس طرق مختلفة
يمكنك إستخدام كل ما تعلمته سابقا لتخرج بالمطلوب
غير مسموح بإستخدام اي أرقام نهائيا
يجب ان تكون كل طريقة مختلفة تماما عن الأخرى
النتيجة المطلوبة هي رقم 20
الرقم الناتج يجب أن يرجع على هيئة Number وليس String */

//  let num = "10";

// // // Solution One
// console.log(+num + +num); // 20

// // // Solution Two
// console.log( `${+num + +num * +true }`); // 20

// // // Solution Three
// console.log(parseInt(num) * true + parseInt(num));//20

// // // Solution Four
// console.log( Number(num) + Number(num) ); // 20


                                                     // التكليف 13

/*   لديك المتغير التالي والمطلوب طباعة القيم كما في المثال
في المكان المخصص يمكنك كتابة ال Code الخاص بك لتخرج القيم بشكل سليم
ممنوع تغيير قيمة المتغير ولا كتابة اي أرقام بيدك  */

// let points = 10;

// // Write Your Code Here
// points += true + true + true;
// console.log(points); // 13

// // Write Your Code Here
// points -= true + true + true + true + true;
// console.log(points); // 8;


//في البحث المطلوب نهاية الاسبوع الثالث 

// بنعمل كلاس اسمه كذا 
//بنفعله كونستراكتور حتى يسقبل القيم عند انشاء الاوبجكت  ويجهز الخصائص الاساسية 
// جوا الكونسراكتور بنشير للمكان الي رح تتخزن فيه القيم    
// بنعمل الاوبجكت وبنعطيه القيم  الي في الكونستراكتر اشرنا لمكان تخزينها 

//     class User{
//       constructor  ( name , age) {
//         this.name = name ;
//         this.age = age ;
//       }
//     };
// let oneUser = new User ("nagham" , 24);
// console.log(oneUser.age);

/*
  Number Challenge فيديو 26
*/

// let a = 100;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// // Find Smallest Number (min)  In All Variables And Return Integer (truce)  
// console.log( Math.min (Math.trunc( a , b , c , d)) ); // 2.4

// // Use Variables a + d One Time To Get The Needed Output
// console.log( Math.pow( a , Math.trunc( d ) ) ); // 10000

// // Get Integer "2" From d Variable With 4 Methods
// console.log( Math.trunc( d ) );
// console.log( Math .floor( d ) );
// console.log( Math.round( d ) );
// console.log( Math.ceil( d ) - 1 );

// // Use Variables b + d To Get This Valus
// console.log( (Math.trunc( b ) / Math.ceil( d )).toFixed( 2 ).toString() ); // 66.67 => String        
// console.log( (Math.trunc( b ) / Math.ceil( d )).toFixed( )); // 67 => Number



                                                     // التكليف 14 فيديو من 23 الى 26

/*   قم بطباعة الرقم 100000 ب 13 طريقة مختلفة
كل طريقة يجب أن تكون مختلفة عن الأخرى
إستخدام ال Operators الخاصة بالعمليات الحسابية يكون مرة واحدة فقط
هناك 3 امثلة لطباعة الرقم لتوضيح الفكرة أكثر
*/

// // Examples
// console.log(100_000); // 100000
// console.log(100000); // 100000
// console.log(5e4 + 5e4); // 100000

// // Your Solutions
// console.log( 1e5 ); // 100000
// console.log( Math.pow(10, 5) ); // 100000
// console.log( Math.floor(100000.9) ); // 100000
// console.log( Math.ceil( 99999.1 ) ); // 100000
// console.log( Math.round(99999.5) ); // 100000
// console.log( Math.trunc(100000.9) ); // 100000
// console.log( Math.abs(-100000) ); // 100000
// console.log( Math.max(100000) ); // 100000
// console.log( Math.min(100000) ); // 100000
// console.log( Math.sqrt(10000000000) ); // 100000


                                                     // التكليف 15

// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991   9007199254740991

//                                                      // التكليف 16
// // بسطر واحد فقط إستخدم MAX_SAFE_INTEGER لتخرج بالنتيجة رقم 16 بدون إستعمال أي أرقام
// console.log( Number.MAX_SAFE_INTEGER .toString().length ); // 16


                                                     // التكليف 17
/*   لديك المتغير التالي قيمته
100.56789 Views
في السطر الأول نريد طباعة الرقم 100 فقط من المتغير والتأكد من أن نوعه هو Number
في السطر الثاني نريد طباعة الرقم 100.57 فقط من المتغير والتأكد من أن نوعه هو Number */

// let myVar = "100.56789 Views";

// console.log( parseInt(myVar) ); // 100
// console.log( parseFloat(myVar).toFixed(2) ); // 100.57


                                                     // التكليف 18

/*   المتغير التالي يحتوي على الرقم 10
يجب عليك إستخدام isInteger لتخرج بالناتج رقم 2
غير مسموح بكتابة اي ارقام بنفسك ويجب إستخدام الخاصية السابقة لتخرج بالناتج المطلوب */

let num = 10;

console.log( Number.isInteger(num + num) ); // 2

//                                                      // التكليف 19


// /*    قم بإستخدام المتغير التالي لتخرج بالنتيجة 10 ب 5 طرق مختلفة
// يجب إستخدام المتغير فقط وعدم كتابة اي ارقام يدويا
// يجب عدم تكرار اي حل من الحلول */

// let flt = 10.4;

// console.log(); // 10
// console.log(); // 10
// console.log(); // 10
// console.log(); // 10
// console.log(); // 10


//                                                      // التكليف 20
// // قم بكتابة Code يطبع رقم عشوائي مابين الصفر ورقم 4
// console.log(); // 0 || 1 || 2 || 3 || 4
