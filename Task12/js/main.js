class Element {
    constructor (width,height, bg, fontSize, textAlign) {
        this.width = width;
        this.height = height;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createDiv(){
        let div = document.createElement('div'),
            param = `height: ${this.height}px; width: ${this.width}%; background-color: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign};`;
        document.body.appendChild(div);
        div.style.cssText = param;
    }
}

let elem = new Element(100,150,'red',18,'center'),
    elem2 = new Element(100,200,'yellow',30,'center');


console.log(elem);
elem.createDiv();
elem2.createDiv();


