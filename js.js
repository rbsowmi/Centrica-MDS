// function outerFunction(){//closure 
//     let Ofun="hi"
//     console.log(Ofun);
//     function innerFunction(){
//         let Ifun="sathya"
//     }
//     return innerFunction;
// }
// outerFunction()

// function outerFunction(){
//     var outerValue=20
//     var innerFunction=function() {
//         console.log(outerFunction+4)
        

//     }
//     return innerFunction();

// }
//  outerFunction()
var a=1;
function inner(){
    var b=2;
function outer(){
    var c=3;
    console.log(a,b,c)
}
return outer();
}
inner()

// a=1;
// elem=document.getElementById("demo")
// elem.innerHTML=a;
// var a;

// var ab;
// ab=5;
// elem=document.getElementById("demo")
// elem.innerHTML=ab;
{
    let=50;
    console.log(50)
}
function scope(){
let funscope=5;
}

let global=12345;
function globalscope(){
    console.log(typeof(global))
}
globalscope()