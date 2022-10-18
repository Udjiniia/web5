function fieldsCheck() {
    let fields = ["name", "bd", "adres", "email", "tg"]

    for (let value of fields) {
        let field = document.getElementById(value);
        let new_field = document.getElementById("new_" + value);
        new_field.innerText = field.value;
    }
}

function changeColor() {
    let el = document.getElementById("table")
    el.addEventListener("mouseover", e => {
    changeRandomColor(e.target)
    })
    el.addEventListener("click", e => {
        changeColorPalette(e.target)
    })
    el.addEventListener("dblclick", e => {
        changeColorSquare(e.target)
    })
}

function changeRandomColor(el) {
    let r = Math.floor(Math.random() * (256));
    let g = Math.floor(Math.random() * (256));
    let b = Math.floor(Math.random() * (256));

    if (el.nodeName === "TD") {
        el.style.backgroundColor = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    }
}


function changeColorPalette(el) {
    if (el.nodeName === "TD") {
        document.getElementById("palette").style.display = "block";
        el.style.backgroundColor = document.querySelector('jsuites-color').value
    }
}


function changeColorSquare(el) {
    let number = parseInt(el.innerText)
    let column = number % 6


    const table = document.getElementById("table");
    for (let i = 0; i < table.rows.length; i++) {
        let row = table.rows[i];
        for (let j = 0; j <= row.cells.length - 1; j++) {
            let cel = row.cells[j];
            if (j+1 >= column && parseInt(cel.innerText) >= number ){
                document.getElementById("palette").style.display = "block";
                cel.style.backgroundColor = document.querySelector('jsuites-color').value
            }
        }
    }
}

function clearTable(){
    const table = document.getElementById("table");
    for (let i = 0; i < table.rows.length; i++) {
        let row = table.rows[i];
        for (let j = 0; j <= row.cells.length - 1; j++) {
            let cel = row.cells[j];
            cel.style.backgroundColor = "white"
        }
    }
}