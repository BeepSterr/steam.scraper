import Scraper from "./src/index.js";

// let data = await Scraper.getWorkshopItem("https://steamcommunity.com/sharedfiles/filedetails/?id=484734108");
// let data = await Scraper.getWorkshopItem("https://steamcommunity.com/sharedfiles/filedetails/?id=1828070733");

let data = await Scraper.getUser('https://steamcommunity.com/id/YukiBelle');
// let data = await Scraper.getUser('https://steamcommunity.com/id/xeonir/');
console.log(data);
