/*
Sallai András
Szoft II N
2022-09-21
*/

const calcButton = document.querySelector('#calcButton');

calcButton.addEventListener('click', () => {
    const base = document.querySelector('#base') as HTMLInputElement;
    const height = document.querySelector('#height') as HTMLInputElement;
    let baseNum: number = Number(base.value);
    let heightNum : number = Number(height.value);
    let area = calcArea(baseNum, heightNum);
    alert(area);
});

function calcArea(base: number, height: number):number {
    return base * height / 2;
}