const container: HTMLDivElement = document.querySelector('.container');
const SQUARE: number = 200;

const setBackGroundColor = (): string => {
    let color = '#';
    const HEX = '0123456789ABCDEF';
    
    for (let i = 0; i < 6; ++i) {
        const randomNum = HEX[Math.floor(Math.random()*16)];
        color += randomNum;
    }
    return color;
}

const setColor = (element: HTMLDivElement): void => {
    const color: string = setBackGroundColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 10px ${color}, 0 0 100px ${color}`;
}

for (let i = 0; i < SQUARE; ++i) {
    const square = document.createElement('div');

    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
    });

    square.addEventListener('mouseleave', () => {
        square.style.backgroundColor = '#1d1d1d';
        square.style.boxShadow = '0 0 2px #000';
    });

    container.appendChild(square);
}

