class Rectancle{
    constructor(width, length, color){
        this.width = width;
        this.length = length;
        this.color = color;
    }
    area(){
        return this.length * this.width
    }
}

const rect = new Rectancle(2, 6);
const ar = rect.area();
console.log(ar);
