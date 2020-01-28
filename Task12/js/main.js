class Element {
    constructor (width,height, bg, fontSize, textAlign) {
        this.width = width;
        this.height = height;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createDiv(){
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.textContent = 'Extra div';
        div.style.backgroundColor = this.bg;
        div.style.height = this.height + 'px';
        div.style.fontSize = this.fontSize + 'px';
        div.style.textAlign = this.textAlign;
        div.style.width = this.width + '%';
    }
}

let elem = new Element(100,150,'red',18,'center'),
    elem2 = new Element(100,200,'yellow',30,'center');


console.log(elem);
elem.createDiv();
elem2.createDiv();


