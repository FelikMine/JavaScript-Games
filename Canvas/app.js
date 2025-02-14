
const chess = document.getElementById('chess');
const element = chess.getContext('2d');

// element.strokeRect(20, 40, 100, 100)
// strokeRect(x, y, ширина, высота) // Рисует прямоугольник
// fillRect(x, y, ширина, высота)   // Рисует закрашенный прямоугольник
// clearRect(x, y, ширина, высота)  // Очищает область на холсте размер с прямоугольник заданного размера


element.strokeStyle = "#708090";
element.fillStyle = "#464544";

element.strokeRect(15, 15, 266, 266);
element.strokeRect(18, 18, 260, 260);
element.fillRect(20, 20, 256, 256);
// for (i = 0; i < 8; i += 2)
//     for (j = 0; j < 8; j += 2) {
//         element.clearRect(20 + i * 32, 20 + j * 32, 32, 32);
//         element.clearRect(20 + (i + 1) * 32, 20 + (j + 1) * 32, 32, 32);
//     }

let i = 0;
let j = 0;

const draw = () => {

    if (i < 8) {

        element.clearRect(20 + i * 32, 20 + j * 32, 32, 32);
        element.clearRect(20 + (i + 1) * 32, 20 + (j + 1) * 32, 32, 32);

        j += 2;
        if (j >= 8) {
            j = 0;
            i += 2;
        }

        setTimeout(draw, 200);
    }
};

draw();

const lines = document.getElementById('lines');
const line = lines.getContext('2d');
line.strokeStyle = "#1a4780";
line.beginPath();
line.moveTo(40, 30);

const linePositions = [
    { x: 20, y: 10 },
    { x: 40, y: 60 },
    { x: 60, y: 80 }
];

const drawLines = (index) => {
    if (index < linePositions.length) {
        line.lineTo(linePositions[index].x, linePositions[index].y);
        line.stroke();
        setTimeout(() => drawLines(index + 1), 200);
    }
};

drawLines(0);

line.quadraticCurveTo(10, 300, 250, 200);
