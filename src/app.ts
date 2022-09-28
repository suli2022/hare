/*
Sallai András
Szoft II N
2022-09-21
2022-09-28
*/

const calcButton = document.querySelector('#calcButton');
const eredmeny = document.querySelector('#eredmeny');

calcButton.addEventListener('click', () => {
    const base = document.querySelector('#base') as HTMLInputElement;
    const height = document.querySelector('#height') as HTMLInputElement;
    let baseNum: number = Number(base.value);
    let heightNum : number = Number(height.value);
    let area = calcArea(baseNum, heightNum);
    eredmeny.textContent = "Terület: " + String(area);
    base.value = "";
    height.value = "";
    // alert(area);
});

function calcArea(base: number, height: number):number {
    return base * height / 2;
}