/*
Sallai András
Szoft II N
2022-09-21
*/
const calcButton = document.querySelector('#calcButton');
const eredmeny = document.querySelector('#eredmeny');
calcButton.addEventListener('click', () => {
    const base = document.querySelector('#base');
    const height = document.querySelector('#height');
    let baseNum = Number(base.value);
    let heightNum = Number(height.value);
    let area = calcArea(baseNum, heightNum);
    eredmeny.textContent = "Terület: " + String(area);
    base.value = "";
    height.value = "";
    // alert(area);
});
function calcArea(base, height) {
    return base * height / 2;
}
