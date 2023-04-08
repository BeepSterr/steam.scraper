import scrapeIt from "scrape-it";
import WorkshopItem from "./types/WorkshopItem.js";
import User from "./types/User.js";
export default class Scraper {

    static async getWorkshopItem(url) {
        const { data } = await scrapeIt(url, {
            title: ".workshopItemTitle",
            description: ".workshopItemDescription",
            image: {
                selector: "#previewImageMain",
                attr: "src"
            },
            author: {
                selector: ".friendBlockLinkOverlay",
                attr: "href",
            },
            tags: {
                listItem: ".workshopTags a",
            },
            rating_total: {
                selector: ".numRatings",
                convert: x => parseInt(x.split(' ')[0].replaceAll(',', '').replaceAll('.', '')) || null
            },
            rating: {
                selector: ".fileRatingDetails img",
                attr: "src",
                convert: x => {
                    if(x.includes("5-star_large")) return 5;
                    if(x.includes("4-star_large")) return 4;
                    if(x.includes("3-star_large")) return 3;
                    if(x.includes("2-star_large")) return 2;
                    if(x.includes("1-star_large")) return 1;
                    if(x.includes("not-yet_large")) return 0;
                }
            },

        });
        console.log(data);
        return new WorkshopItem(data);
    }
    static async getUser(url) {
        const { data } = await scrapeIt(url, {
            avatar: {
                selector: ".playerAvatarAutoSizeInner > img",
                attr: "src"
            },
            avatar_frame: {
                selector: ".playerAvatarAutoSizeInner > div img",
                attr: "src"
            },
            nickname: ".actual_persona_name",
            realname: ".header_real_name > bdi",
            summary: ".profile_summary ",
            level: ".persona_level > .friendPlayerLevel > .friendPlayerLevelNum",
            status: ".profile_in_game_header",

            // Stats, currently broken!
            recent_playtime: ".recentgame_recentplaytime",
            awards: "#responsive_page_template_content > div.no_header.profile_page.has_profile_background.full_width_background > div.profile_content.has_profile_background > div > div.profile_rightcol > div.responsive_count_link_area > div.profile_awards > div > div.profile_count_link.ellipsis > a > span.profile_count_link_total",
            badges: "#responsive_page_template_content > div.no_header.profile_page.has_profile_background.full_width_background > div.profile_content.has_profile_background > div > div.profile_rightcol > div.responsive_count_link_area > div.profile_badges > div > div.profile_count_link.ellipsis > a > span.profile_count_link_total",
            games: "#responsive_page_template_content > div.no_header.profile_page.has_profile_background.full_width_background > div.profile_content.has_profile_background > div > div.profile_rightcol > div.responsive_count_link_area > div.profile_item_links > div:nth-child(1) > a > span.profile_count_link_total",
            workshop_items: "#responsive_page_template_content > div.no_header.profile_page.has_profile_background.full_width_background > div.profile_content.has_profile_background > div > div.profile_rightcol > div.responsive_count_link_area > div.profile_item_links > div:nth-child(5) > a > span.profile_count_link_total",
            reviews: "#responsive_page_template_content > div.no_header.profile_page.has_profile_background.full_width_background > div.profile_content.has_profile_background > div > div.profile_rightcol > div.responsive_count_link_area > div.profile_item_links > div:nth-child(6) > a > span.profile_count_link_total",
            friends: "#responsive_page_template_content > div.no_header.profile_page.has_profile_background.full_width_background > div.profile_content.has_profile_background > div > div.profile_rightcol > div.profile_friend_links.profile_count_link_preview_ctn.responsive_groupfriends_element > div.profile_count_link.ellipsis > a > span.profile_count_link_total",
            groups: "#responsive_page_template_content > div.no_header.profile_page.has_profile_background.full_width_background > div.profile_content.has_profile_background > div > div.profile_rightcol > div.profile_group_links.profile_count_link_preview_ctn.responsive_groupfriends_element > div.profile_count_link.ellipsis > a > span.profile_count_link_total",

            // vac bans
            bans: {
                selector: ".profile_ban_status",
                convert: value => {
                    return {
                        vac: value.includes('VAC ban'),
                        game: value.includes('game ban')
                    }
                }
            }
        });

        console.log(data);
        return new User(data);
    }


}