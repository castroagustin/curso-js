const camiseta1 = {
    team: 'Boca Jrs',
    size: 'S',
    year: 2021,
    price: 8000,
    sold: false
}

class Camisetas {
    constructor(team, size, year, price){
        this.team = team;
        this.size = size;
        this.year = year;
        this.price = price;
        this.sold = false;
        this.sell = function () {this.sold = true}
    }
}

const camiseta2 = new Camisetas('River Plate', 'M', 2019, 6500);
const camiseta3 = new Camisetas('Barcelona', 'XL', 2003, 9500);
const camiseta4 = new Camisetas('Juventus', 'L', 2018, 5800);

console.log(camiseta1);

camiseta2.sell();
console.log(camiseta2);

console.log(camiseta3);

camiseta4.sell();
console.log(camiseta4);
