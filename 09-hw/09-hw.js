function getRandowColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color = color + letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateBlocksInterval() {
    let box_container = document.querySelector('.box-container');
    for (i = 0; i < 25; i++) {
        const box = document.createElement("div");
        box.style.width = 50 + 'px';
        box.style.height = 50 + 'px';
        setInterval(() => {
            box.style.backgroundColor = getRandowColor();
        }, 1000);
        box_container.append(box);
    }
}

generateBlocksInterval();