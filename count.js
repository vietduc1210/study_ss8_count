let count = document.getElementById("count");
count.value = "0";
count.innerText = count.value;

let plus_button = document.getElementById("plus");
let minus_button = document.getElementById("minus");
plus_button.addEventListener("click",()=>{
    count.value = Number(count.value) + 1;
    count.innerText = count.value;
})
minus_button.addEventListener("click",()=>{
    count.value = Number(count.value) - 1;
    count.innerText = count.value;
})