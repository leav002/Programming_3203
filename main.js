  let count = 0;

//   function increase() {
//     count++;
//     document.getElementById("count").innerText = count;
//   }



//------------------------------------------------------------------------------



// const resultH1 = document.getElementsByTagName("h1")[0];
// const plusButton = document.getElementsByTagName('button')[0];
// //getElementsByTagName = 이 태그 이름의 엘리먼트를 가져온다. 시험나옴

// const resultH1 = document.querySelector("#result");
// const resultH1 = resultH1;

// plusButton.addEventListener("click", 처리함수);

// function 처리함수() {
//     count++;

//     resultH1.innerHTML = count;
// }



//--------------------------------------------------------------------



const resultH1 = document.getElementsByTagName("h1")[0];
// const plusButton = document.getElementsByTagName('button')[0];
const plusButton = document.getElementsByClassName("plusButton")[0];

// plusButton.addEventListener("click", ()=> {
//     count++;

//     resultH1.innerHTML = count;
// });

// plusButton.onclick = () => {
//     count++;

//     resultH1.innerHTML = count;
// };


function plus() {
    count++;
    
    resultH1.innerHTML = count;
    
}

function plus2() {
    count +=2 ;
    
    resultH1.innerHTML = count;
    
}

function minus() {
    count --;
    
    resultH1.innerHTML = count;
    
}