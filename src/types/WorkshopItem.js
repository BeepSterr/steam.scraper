import Scraper from "../index.js";

export default class WorkshopItem {

    title;
    description;
    image;
    author;
    tags;
    rating_total;
    rating;


    constructor(data) {
        this.title = data.title;
        this.description = data.description;
        this.image = data.image;
        this.author = data.author;
        this.tags = data.tags;
        this.rating = {
            count: data.rating_total,
            stars: data.rating
        };

    }

}