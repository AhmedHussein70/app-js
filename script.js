let line = Array.from(document.querySelectorAll(".parent-affter"));

let parentAffterTwo;

let containerOne = document.querySelector(".container-one");

let containerTwo = document.querySelector(".container-two");

let containerThree = document.querySelector(".container-three");

let inConBottom2 = document.querySelector(".in-con-bottom-1-1");

let inRit2 = document.querySelector(".in-rit-2");

let back = document.querySelector(".back");

containerOne.classList.remove("disp-none");

// containerOne.classList.remove(".disp-none");

containerOne.style.display = "flex";

line.forEach((element, index) => {
  let cartona = ``;

  let cartonaTwo;

  let word = ``;

  element.addEventListener("click", (e) => {
    // console.log(element);
    cartona = `${element.innerHTML}`;
    word = element.parentElement.children[index].outerText;

    console.log(containerTwo.children[1].innerHTML);

    containerTwo.children[1].innerHTML = cartona;

   

    // containerOne.children[1].innerHTML += cartona;

    containerOne.style.display = "none";

    containerOne.classList.add("disp-none");

    containerTwo.classList.remove("disp-none");

    containerOne.style.display = "flex";

    inRit2.innerHTML = `<div class="w200px parent-affter"> ${cartona} </div>`;

    cartonaTwo = `

    <div class="parent-affter-2">
      <div class="serves" >
        <p>فواتير ${word} </p>
      </div>
    </div>

    <div class="parent-affter-2">
      <div class="serves" >
        <p> ${word} ADSL </p>
      </div>
    </div>

    <div class="parent-affter-2">
      <div class="serves" >
        <p> ${word} بطاقات </p>
      </div>
    </div>

    <div class="parent-affter-2" id="goo">
      <div class="serves" >
        <p>شحن ${word}</p>
      </div>
    </div>
 

    `;

    inConBottom2.innerHTML = cartonaTwo;

    parentAffterTwo = Array.from(document.querySelectorAll(".parent-affter-2"));

    functionName();

    //  functionName();
  });
});

async function functionName() {

  await parentAffterTwo.forEach((element) => {
    // console.log(element)

    element.addEventListener("click", () => {

      containerTwo.classList.add("disp-none");

      console.log("Hello");

      containerThree.classList.remove("disp-none");

      inRit2.innerHTML += element.innerHTML;

      console.log(element);

    });
  });
}
//  functionName()
// to get elements

// buttom رجوع

back.addEventListener("click", () => {
  containerOne.style.display = "flex";

  containerOne.classList.remove("disp-none");

  containerTwo.classList.add("disp-none");

  console.log("click");
});

let numbers = document.querySelectorAll(".num");

let input = document.querySelector("#input");

numbers.forEach((num) => {
  num.addEventListener("click", () => {
    input.value += num.innerText;

    console.log(num.innerText);

    var phoneno = /^[0-9]{11}$/;

    input.style.border = "none";

    if (input.value.length >= 11) {
      input.style.border = "2px solid red";
    }
  });
});


let dle= document.querySelector(".dle");


dle.addEventListener("click",()=>{

  input.value = ""

  // console.log(inputvalue.slice(input.value.length,-1))

})