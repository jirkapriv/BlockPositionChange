
const firstInput = document.getElementById("firstInput");
const secInput = document.getElementById("secInput");
const button = document.getElementById("button");
const block = document.getElementById("block");


button.onclick = () =>{

    const firstValue = firstInput.value;
    const secValue = secInput.value;
    block.style.left = `${firstValue}px`;
    block.style.top = `${secValue}px`;


};
