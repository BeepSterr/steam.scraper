export default class User {

    nickname;
    realname;
    summary;
    avatar;
    avatar_border;
    status;
    bans = {
        vac: false,
        game: false
    }
    recent_playtime;
    stats = {
        level: 0,
        // awards: 0,
        // badges: 0,
        // games: 0,
        // workshop_items: 0,
        // reviews: 0,
        // friends: 0,
        // groups: 0,
    }

    constructor(data) {

        this.nickname = data.nickname;
        this.realname = data.realname;
        this.summary = data.summary;
        this.avatar_border = data.avatar_frame;
        this.avatar = data.avatar;
        this.status = data.status;
        this.recent_playtime = data.recent_playtime;
        this.stats.level = Number(data.level);
        this.bans = data.bans;
        // this.stats.awards = Number(data.awards);
        // this.stats.badges = Number(data.badges);
        // this.stats.games = Number(data.games);
        // this.stats.workshop_items = Number(data.workshop_items);
        // this.stats.reviews = Number(data.reviews);
        // this.stats.friends = Number(data.friends);
        // this.stats.groups = Number(data.groups);

    }

}