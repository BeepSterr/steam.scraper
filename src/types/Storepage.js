
export default class Storepage {

    name;
    description;
    image;

    tags;

    price;

    constructor(data) {
        this.name = data.name;
        this.description = data.description.replaceAll('\t', '');
        this.image = data.image;
        this.price = data.price.includes('Free to Play') ? 'Free' : data.price;
        this.tags = data.tags.map((x) => {
            if(typeof x !== 'string') return x;
            return x.replaceAll('\t', '').replaceAll('\n', '');
        }).filter( (x) => x !== '' && x !== null && x !== '+');

    }

}