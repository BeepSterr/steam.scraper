import Scraper from "./src/index.js";

// let data = await Scraper.getWorkshopItem("https://steamcommunity.com/sharedfiles/filedetails/?id=484734108");
// let data = await Scraper.getWorkshopItem("https://steamcommunity.com/sharedfiles/filedetails/?id=1828070733");

let data = await Scraper.getStorepage('https://store.steampowered.com/app/255710/Cities_Skylines/');
console.log(data);
