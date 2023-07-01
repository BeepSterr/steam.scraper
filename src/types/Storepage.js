import Scraper from "../index.js";

export default class Storepage {

    name;
    description;
    image;

    price;


    constructor(data) {
        this.name = data.name;
        this.description = data.description;
        this.image = data.image;
        this.price = data.price.includes('Free to Play') ? 'Free' : data.price;

    }

}