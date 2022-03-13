//initiate variables used
let ul = document.getElementById("announcementsList");

let row = document.querySelector(".row");

let discordNews = document.querySelector("#discordNews");
let webNews = document.querySelector("#webNews");
let allNews = document.querySelector("#allNews");

let allLink = document.querySelector("#allLink");
let webLink = document.querySelector("#webLink");
let discordLink = document.querySelector("#discordLink");

const pageLeft = document.querySelector("#pageLeft");
const pageRight = document.querySelector("#pageRight");
let pageNum = document.querySelector("#pageNum");

let num = 1;
let i = 0;
let j = 9;

// var mydata = JSON.parse(all);
// console.log(all);

//temporary lists for testing
//TODO: Seed these arrays with data to use... likely backend/fetch
const data =
    [
        {
            "id": 1,
            "content": "@everyone robbing and heists have been disabled in this server, everyone can come off passive and no longer need to leave the server in order to wait out the passive mode cooldown",
            "message_id": "952377825464299571",
            "author": "Lindxphxm",
            "message_embed": [],
            "mentions": []
        },
        {
            "id": 2,
            "content": "Hey @everyone \nIm happy to announce the Server is going to be released at <t:1647201600:f> (This is set in your Timezone)\nThe Links for the Website and Store page will be announced on release day\nand once again **THANK YOU!** FOR SUPPORTING US ALL THE WAY THROUGH <3\n- <@&946935404601434132> \n\nIP\n**Java:** play.banishedmc.net\n**Bedrock:** play.banishedmc.net port:25573\n\nThe Official Trailer for BanishedMC\nhttps://youtu.be/xybF9btMujg",
            "message_id": "952190250514513920",
            "author": "Stxyl",
            "message_embed": [
                {
                    "title": "BanishedMC Trailer",
                    "type": "rich",
                    "description": "IP\nJava: play.banishedmc.net\nBedrock: play.banishedmc.net port:25573",
                    "url": "https://www.youtube.com/watch?v=xybF9btMujg",
                    "timestamp": null,
                    "color": 16711680,
                    "fields": [],
                    "thumbnail": {
                        "url": "https://i.ytimg.com/vi/xybF9btMujg/maxresdefault.jpg",
                        "proxyURL": "https://images-ext-2.discordapp.net/external/oihxuPW8-1dXjMZ5EVrMtfToCd5xTHYOiaQOrzcmtjg/https/i.ytimg.com/vi/xybF9btMujg/maxresdefault.jpg",
                        "height": 720,
                        "width": 1280
                    },
                    "image": null,
                    "author": {
                        "name": "Banished MC",
                        "url": "https://www.youtube.com/channel/UCq9B6LahK9-iHvldQzbAPUg"
                    },
                    "footer": null
                }
            ],
            "mentions": []
        },
        {
            "id": 3,
            "content": "if you are an og highlands player the og crates are back!!! \n\n@everyone",
            "message_id": "952155359181668382",
            "author": "proxy",
            "message_embed": [],
            "mentions": []
        },
        {
            "id": 4,
            "content": "it requires 3 or more words guys 😩",
            "message_id": "952039763056164904",
            "author": "Itsthatdude",
            "message_embed": [],
            "mentions": []
        },
        {
            "id": 5,
            "content": "@everyone \n\nI’m happy to say that the server is almost ready to drop there Is only a couple more things that need to be done we should be able to drop the server tomorrow if everything works out good also I’ll be making a staff application for the server today so y’all can apply for staff \n\n\nwe can’t wait to see you on and enjoying the server ~ <@&946935404601434132>",
            "message_id": "952039532621103104",
            "author": "proxy",
            "message_embed": [],
            "mentions": []
        },
        {
            "id": 6,
            "content": "pro announcement right there 👆",
            "message_id": "951849565454209045",
            "author": "Itsthatdude",
            "message_embed": [],
            "mentions": []
        },
        {
            "id": 7,
            "content": "Also do ?suggest <suggestion> to make a suggestion and it has a 1 hour cooldown",
            "message_id": "951849490892066816",
            "author": "Itsthatdude",
            "message_embed": [],
            "mentions": []
        },
        {
            "id": 8,
            "content": "Everyone say thank you too <@!273992912029745152> for kindly making our server icon for us \n\n@everyone",
            "message_id": "951724640437403679",
            "author": "proxy",
            "message_embed": [],
            "mentions": [
                {
                    "id": "273992912029745152",
                    "bot": false,
                    "system": false,
                    "flags": 64,
                    "username": "Bunni",
                    "discriminator": "1085",
                    "avatar": "d896c9258e9811ba24bc046ffc02dcf5",
                    "createdTimestamp": 1485395400770,
                    "defaultAvatarURL": "https://cdn.discordapp.com/embed/avatars/0.png",
                    "tag": "Bunni#1085",
                    "avatarURL": "https://cdn.discordapp.com/avatars/273992912029745152/d896c9258e9811ba24bc046ffc02dcf5.webp",
                    "displayAvatarURL": "https://cdn.discordapp.com/avatars/273992912029745152/d896c9258e9811ba24bc046ffc02dcf5.webp"
                }
            ]
        },
        {
            "id": 9,
            "content": "__Hey just a question for everyone do y’all wanna\nKeep the old highlands rank names such as__\n\nOverlord\nKing \nHero \nKnight \nAssassin\n\nOr are y’all wanting to get new names \n\nReact with this emoji for new (<a:d_no:698655565999505470>) \n\nOr react with this emoji for old (<a:yes:657823874003763201>)\n\n@here",
            "message_id": "951271694230781962",
            "author": "proxy",
            "message_embed": [],
            "mentions": []
        },
        {
            "id": 10,
            "content": "So as you guys know we have now partnered with <@!396491828901445642> an his server mythos craft like I said yesterday since I don’t own the rights to the the highlands we are going to need to change the name and we have came up with the name __BanishedMC__ for the time being that’s all I’m going to say but it’s not going to be a normal server the name actually means something you can take a guess what type of server this is gonna be (: \n\n\n**ps world will not be reset so don’t worry about losing stuff and the server will be down while we re brand**\n\n@everyone",
            "message_id": "951128275923652688",
            "author": "proxy",
            "message_embed": [],
            "mentions": [
                {
                    "id": "396491828901445642",
                    "bot": false,
                    "system": false,
                    "flags": 64,
                    "username": "TobbleCobble",
                    "discriminator": "3326",
                    "avatar": "438350f91dc689847c98bb2842c07689",
                    "createdTimestamp": 1514601418472,
                    "defaultAvatarURL": "https://cdn.discordapp.com/embed/avatars/1.png",
                    "tag": "TobbleCobble#3326",
                    "avatarURL": "https://cdn.discordapp.com/avatars/396491828901445642/438350f91dc689847c98bb2842c07689.webp",
                    "displayAvatarURL": "https://cdn.discordapp.com/avatars/396491828901445642/438350f91dc689847c98bb2842c07689.webp"
                }
            ]
        },
        {
            "id": 11,
            "content": "yo, whats up fools, I'm here now and there are gonna be some changes as the server works towards being more awesome! Really excited to work with this server 👍 \n\n@everyone",
            "message_id": "951088248673943642",
            "author": "TobbleCobble",
            "message_embed": [],
            "mentions": []
        },
        {
            "id": 12,
            "content": "in about 27ish more days this server will be switching hosts (maybe even sooner) and that will mean I’ll be making this server open for the public but In saying that I will need to __unfortunately change the name since I don’t have the written rights to the name (thehighlandsmc) that is still under Sonny’s name__\n\nI am going to try grow this server out the most that I can because I really want to see this server grow and I wanna take you all with me \n\n@everyone",
            "message_id": "950975034783068210",
            "author": "proxy",
            "message_embed": [],
            "mentions": []
        },
        {
            "id": 13,
            "content": "Since it’s 1.8 pvp and people are using constant auto clickers it’s sending a lot of packets to the server so sorry guys",
            "message_id": "950656946015440897",
            "author": "proxy",
            "message_embed": [],
            "mentions": []
        },
        {
            "id": 14,
            "content": "Hey because we are very limited on ram I’m sorry but I need to lift the rule on being able to use auto clickers it’s overloading the ram and cpu sorry guys <:yellow_sad:944743849518063626> @everyone",
            "message_id": "950656373241315328",
            "author": "proxy",
            "message_embed": [],
            "mentions": []
        },
        {
            "id": 15,
            "content": "@everyone server is back online",
            "message_id": "950166662030721054",
            "author": "proxy",
            "message_embed": [],
            "mentions": []
        },
        {
            "id": 16,
            "content": "@everyone \n\nSo from 30d from today we will be switching hosts but that doesn’t mean you will lose any progress",
            "message_id": "950166234073276426",
            "author": "proxy",
            "message_embed": [],
            "mentions": []
        },
        {
            "id": 17,
            "content": "just made it so you can buy an sell ender pearls @everyone",
            "message_id": "949879744827117629",
            "author": "proxy",
            "message_embed": [],
            "mentions": []
        },
        {
            "id": 18,
            "content": "I’ve made it so you can now get 1k free claimblocks every hour you play and I’ll also look into why people can’t build on the nether roof since some of y’all want to make gold farms @everyone",
            "message_id": "949834156572020836",
            "author": "proxy",
            "message_embed": [],
            "mentions": []
        },
        {
            "id": 19,
            "content": "**Old style**",
            "message_id": "949506494989234196",
            "author": "proxy",
            "message_embed": [],
            "mentions": []
        },
        {
            "id": 20,
            "content": "**new style**",
            "message_id": "949506440509411410",
            "author": "proxy",
            "message_embed": [],
            "mentions": []
        },
        {
            "id": 21,
            "content": "@everyone \n\nLet’s take a vote on if y’all want /warps pvp  ( new style pvp ) or ( old style pvp )",
            "message_id": "949506417398808616",
            "author": "proxy",
            "message_embed": [],
            "mentions": []
        },
        {
            "id": 22,
            "content": "<:yay:585696613507399692> **GIVEAWAY ENDED** <:yay:585696613507399692>",
            "message_id": "949458880532987934",
            "author": "GiveawayBot",
            "message_embed": [
                {
                    "title": null,
                    "type": "rich",
                    "description": "Winner: <@438654200742805526>\nHosted by: <@700168240780935259>",
                    "url": null,
                    "timestamp": "2022-03-06T00:10:37.000Z",
                    "color": 3553599,
                    "fields": [],
                    "thumbnail": null,
                    "image": null,
                    "author": {
                        "name": "Nitro"
                    },
                    "footer": {
                        "text": "Ended at"
                    }
                }
            ],
            "mentions": []
        },
        {
            "id": 23,
            "content": "Heya @everyone\nSo <@!516119448998903836> and I have been doing some work in the server config files and should make the servers performance better now\n\n**Server changes so far:**\n- Server Icon changed\n- motd Changed too TheHighlandsMC\n- Config files have been changed\n\n**Server changes planned right now:**\n- Nothing atm lmao\n\n**Website Changes so far:**\n- Live player count on the homepage\n- Added the Announcements page __**(Still in the works)**__\n- The Discord link is active on the Site\n\nIf you have any suggestions feel free to <@!405503697032839179> or DM me\n\nThanks\nStxyl",
            "message_id": "949188431542648852",
            "author": "Stxyl",
            "message_embed": [],
            "mentions": [
                {
                    "id": "405503697032839179",
                    "bot": false,
                    "system": false,
                    "flags": 64,
                    "username": "Stxyl",
                    "discriminator": "0001",
                    "avatar": "a_097a10b9271aa8b29ff7eb4a3807f9d9",
                    "createdTimestamp": 1516750015267,
                    "defaultAvatarURL": "https://cdn.discordapp.com/embed/avatars/1.png",
                    "tag": "Stxyl#0001",
                    "avatarURL": "https://cdn.discordapp.com/avatars/405503697032839179/a_097a10b9271aa8b29ff7eb4a3807f9d9.webp",
                    "displayAvatarURL": "https://cdn.discordapp.com/avatars/405503697032839179/a_097a10b9271aa8b29ff7eb4a3807f9d9.webp"
                },
                {
                    "id": "516119448998903836",
                    "bot": false,
                    "system": false,
                    "flags": 128,
                    "username": "proxy",
                    "discriminator": "9320",
                    "avatar": "889e75e81126677219c3acad35d7b9cd",
                    "createdTimestamp": 1543122865677,
                    "defaultAvatarURL": "https://cdn.discordapp.com/embed/avatars/0.png",
                    "tag": "proxy#9320",
                    "avatarURL": "https://cdn.discordapp.com/avatars/516119448998903836/889e75e81126677219c3acad35d7b9cd.webp",
                    "displayAvatarURL": "https://cdn.discordapp.com/avatars/516119448998903836/889e75e81126677219c3acad35d7b9cd.webp"
                }
            ]
        },
        {
            "id": 24,
            "content": "Special Thanks to <@!516119448998903836> <@!700168240780935259> <@!641325944950358036> <@!709383682011693187> <@!766518904998068284> <@!882722549069406258> <@!534921223013007361> for boosting the server <a:Lightsaber:781271900885745695>",
            "message_id": "949076225052262400",
            "author": "Stxyl",
            "message_embed": [],
            "mentions": [
                {
                    "id": "534921223013007361",
                    "bot": false,
                    "system": false,
                    "flags": 0,
                    "username": "kaliferisck12321",
                    "discriminator": "6683",
                    "avatar": "4b281f613d2ff0e4a056eb1086324c73",
                    "createdTimestamp": 1547605557922,
                    "defaultAvatarURL": "https://cdn.discordapp.com/embed/avatars/3.png",
                    "tag": "kaliferisck12321#6683",
                    "avatarURL": "https://cdn.discordapp.com/avatars/534921223013007361/4b281f613d2ff0e4a056eb1086324c73.webp",
                    "displayAvatarURL": "https://cdn.discordapp.com/avatars/534921223013007361/4b281f613d2ff0e4a056eb1086324c73.webp"
                },
                {
                    "id": "709383682011693187",
                    "bot": false,
                    "system": false,
                    "flags": 64,
                    "username": "Midnight",
                    "discriminator": "3450",
                    "avatar": "a_e067f6ea5eced9debe71a6c787dbed6b",
                    "createdTimestamp": 1589200649503,
                    "defaultAvatarURL": "https://cdn.discordapp.com/embed/avatars/0.png",
                    "tag": "Midnight#3450",
                    "avatarURL": "https://cdn.discordapp.com/avatars/709383682011693187/a_e067f6ea5eced9debe71a6c787dbed6b.webp",
                    "displayAvatarURL": "https://cdn.discordapp.com/avatars/709383682011693187/a_e067f6ea5eced9debe71a6c787dbed6b.webp"
                },
                {
                    "id": "766518904998068284",
                    "bot": false,
                    "system": false,
                    "flags": 256,
                    "username": "ItsCharmie",
                    "discriminator": "6969",
                    "avatar": "a4e97318fe0c82c45fd6a812c629f7d8",
                    "createdTimestamp": 1602822748184,
                    "defaultAvatarURL": "https://cdn.discordapp.com/embed/avatars/4.png",
                    "tag": "ItsCharmie#6969",
                    "avatarURL": "https://cdn.discordapp.com/avatars/766518904998068284/a4e97318fe0c82c45fd6a812c629f7d8.webp",
                    "displayAvatarURL": "https://cdn.discordapp.com/avatars/766518904998068284/a4e97318fe0c82c45fd6a812c629f7d8.webp"
                },
                {
                    "id": "882722549069406258",
                    "bot": false,
                    "system": false,
                    "flags": 0,
                    "username": "mademoiselleouf",
                    "discriminator": "0805",
                    "avatar": "a0dde1adbbcf018ea6c0396b5271da89",
                    "createdTimestamp": 1630527855890,
                    "defaultAvatarURL": "https://cdn.discordapp.com/embed/avatars/0.png",
                    "tag": "mademoiselleouf#0805",
                    "avatarURL": "https://cdn.discordapp.com/avatars/882722549069406258/a0dde1adbbcf018ea6c0396b5271da89.webp",
                    "displayAvatarURL": "https://cdn.discordapp.com/avatars/882722549069406258/a0dde1adbbcf018ea6c0396b5271da89.webp"
                },
                {
                    "id": "641325944950358036",
                    "bot": false,
                    "system": false,
                    "flags": 64,
                    "username": "benji",
                    "discriminator": "3483",
                    "avatar": "760671aa869884797f2a138b4aaf9af0",
                    "createdTimestamp": 1572974420536,
                    "defaultAvatarURL": "https://cdn.discordapp.com/embed/avatars/3.png",
                    "tag": "benji#3483",
                    "avatarURL": "https://cdn.discordapp.com/avatars/641325944950358036/760671aa869884797f2a138b4aaf9af0.webp",
                    "displayAvatarURL": "https://cdn.discordapp.com/avatars/641325944950358036/760671aa869884797f2a138b4aaf9af0.webp"
                },
                {
                    "id": "700168240780935259",
                    "bot": false,
                    "system": false,
                    "flags": 128,
                    "username": "Hippy",
                    "discriminator": "8436",
                    "avatar": "426e1779f38ba2d013a03d27d5da3b2b",
                    "createdTimestamp": 1587003517099,
                    "defaultAvatarURL": "https://cdn.discordapp.com/embed/avatars/1.png",
                    "tag": "Hippy#8436",
                    "avatarURL": "https://cdn.discordapp.com/avatars/700168240780935259/426e1779f38ba2d013a03d27d5da3b2b.webp",
                    "displayAvatarURL": "https://cdn.discordapp.com/avatars/700168240780935259/426e1779f38ba2d013a03d27d5da3b2b.webp"
                },
                {
                    "id": "516119448998903836",
                    "bot": false,
                    "system": false,
                    "flags": 128,
                    "username": "proxy",
                    "discriminator": "9320",
                    "avatar": "889e75e81126677219c3acad35d7b9cd",
                    "createdTimestamp": 1543122865677,
                    "defaultAvatarURL": "https://cdn.discordapp.com/embed/avatars/0.png",
                    "tag": "proxy#9320",
                    "avatarURL": "https://cdn.discordapp.com/avatars/516119448998903836/889e75e81126677219c3acad35d7b9cd.webp",
                    "displayAvatarURL": "https://cdn.discordapp.com/avatars/516119448998903836/889e75e81126677219c3acad35d7b9cd.webp"
                }
            ]
        },
        {
            "id": 25,
            "content": "Hey @everyone!\nWe have a Website for the TheHighlandsMC here!\nill be posting updates and changes here.\nThank you!\nhttps://stxyl.github.io/TheHighlandsMC/",
            "message_id": "948893543408214016",
            "author": "Stxyl",
            "message_embed": [
                {
                    "title": "TheHighlandsMC - Official Website Portal",
                    "type": "rich",
                    "description": "Welcome to the TheHighlandsMC, we will keep updates and everything here on this site.",
                    "url": "https://stxyl.github.io/TheHighlandsMC/",
                    "timestamp": null,
                    "color": null,
                    "fields": [],
                    "thumbnail": {
                        "url": "https://bybilly.uk/portal/img/minecraft.jpg",
                        "proxyURL": "https://images-ext-2.discordapp.net/external/7WfbA5V20FoN3kvDImt9YCcui_a9XAWO8lwvneibstI/https/bybilly.uk/portal/img/minecraft.jpg",
                        "height": 692,
                        "width": 1594
                    },
                    "image": null,
                    "author": null,
                    "footer": null
                }
            ],
            "mentions": []
        },
        {
            "id": 26,
            "content": "Once again id like to thank everyone of y’all that worked with me on the highlands every single one of you did such an amazing job that’s why I’ll try keep the original community active i deeply appreciate everyone of you guys and y’all have all been deeply put into my life for a year now an I don’t regret meeting any of you at all I consider most of the people in this server my friends @everyone <:HeartBlack:878545672448651267>",
            "message_id": "948596669199560724",
            "author": "proxy",
            "message_embed": [],
            "mentions": []
        },
        {
            "id": 27,
            "content": "New people are free to join but pending and won't be able to see any of the text channels Until one of the upper staff approves them and gives them appropriate role. If any of u notice they can see/type in chats without an associate role let one of us know",
            "message_id": "948445692702109716",
            "author": "Lindxphxm",
            "message_embed": [],
            "mentions": []
        },
        {
            "id": 28,
            "content": "Or lemme know",
            "message_id": "947320655731376168",
            "author": "Stxyl",
            "message_embed": [],
            "mentions": []
        },
        {
            "id": 29,
            "content": "na.node1.conaxgames.com:23513",
            "message_id": "947318972984991744",
            "author": "Lindxphxm",
            "message_embed": [],
            "mentions": []
        },
        {
            "id": 30,
            "content": "here is the server ip for when you want to come play. Just let Proxy know and wait to be whitelisted",
            "message_id": "947318964994854972",
            "author": "Lindxphxm",
            "message_embed": [],
            "mentions": []
        }
    ];



// console.log(data);
let discordNewsTitles = [];
let authors = [];
let content0 = [];
let id = [];
for (let i = 0; i < data.length; i++) {
    discordNewsTitles.push({
        "author": data[i].author,
        "content": data[i].content
    })
    authors.push(data[i].author);
    content0.push(data[i].content);
    id.push(data[i].id);
}
// console.log(discordNewsTitles);

// const discordNewsTitles = [
//     "Lorem ipsum",
//     "dolor sit amet,",
//     "consectetur adipiscing",
//     "elit, sed",
//     "do eiusmod",
//     "tempor incididunt",
//     "ut labore et",
//     "dolore magna",
//     "aliqua. Ut",
//     "enim ad",
//     "minim veniam,",
//     "quis nostrud",
//     "exercitation ullamco",
//     "laboris nisi",
//     "ut aliquip",
//     "ex ea commodo",
//     "consequat. Duis"
// ];
const webNewsTitles = [
    "aute irure",
    "dolor in",
    "reprehenderit in",
    "aliqua. Ut",
    "enim ad",
    "minim veniam,",
    "quis nostrud",
    "exercitation ullamco",
    "laboris nisi",
    "ut aliquip",
    "ex ea commodo"
];
const allNewsTitles = [
    "consequat. Duis",
    "aute irure",
    "dolor in",
    "reprehenderit in",
    "voluptate velit",
    "esse cillum",
    "dolore eu",
    "fugiat nulla",
    "pariatur. Excepteur",
    "sint occaecat",
    "cupidatat non",
    "proident, sunt",
    "in culpa",
    "qui officia",
    "deserunt mollit",
    "anim id est laborum",
    "consequat. Duis",
    "aute irure",
    "dolor in",
    "reprehenderit in",
    "voluptate velit",
    "esse cillum",
    "dolore eu",
    "fugiat nulla",
    "pariatur. Excepteur",
    "sint occaecat",
    "cupidatat non",
    "proident, sunt",
    "in culpa",
    "qui officia",
    "deserunt mollit",
    "anim id est laborum",
    "consequat. Duis",
    "aute irure",
    "dolor in",
    "reprehenderit in",
    "voluptate velit",
    "esse cillum",
    "dolore eu",
    "fugiat nulla",
    "pariatur. Excepteur",
    "sint occaecat",
    "cupidatat non",
    "proident, sunt",
    "in culpa",
    "qui officia",
    "deserunt mollit",
    "anim id est laborum"
];


// function to fill modals based on which card was clicked
const fillModal = () => {
    modalContent = document.querySelector('.modal-body');
    trigger = document.querySelectorAll("a.modalbtn");
// console.log(trigger.length)
for (let k = 0; k < trigger.length; k++) {
    // console.log(trigger[k].getAttribute('data-id'))
    let i = trigger[k].getAttribute('data-id');
    trigger[k].addEventListener('click', function () {
        // console.log(trigger[k])
        modalContent.textContent = content0[i-1];
        modalContent.classList.add('font-text')
        let title = document.querySelector('.modal-title');
        title.classList.add('font-title');
        title.textContent = authors[i-1];
    })
}
}


//Function to add a single card with summary and title and add links to the modal for it
const addCard = (content, i) => {
    let column = document.createElement("div");
    column.classList.add("col-lg-4");
    column.classList.add("col-md-6");
    column.classList.add("col-sm-12");
    let card1 = document.createElement("div");
    card1.classList.add("card1");
    let aTag = document.createElement("a");
    aTag.classList.add("modalbtn");
    aTag.setAttribute('data-bs-toggle', 'modal');
    aTag.setAttribute('data-bs-target', '#newsModal');
    aTag.setAttribute('data-id', `${id[i]}`);

    // console.log(content0[i])
    let summary = content0[i].split(' ');
    // console.log(summary.slice(0,5));
    summary = summary.slice(0,5);
    let c = '';
    summary.forEach(element => {
        c += `${element} `
    });
    // console.log(content0)

    let card1Title = document.createElement('p');
    card1Title.classList.add("card-text");
    card1Title.classList.add("summary");
    card1Title.textContent = c;
    

    let card1Body = document.createElement("div");
    card1Body.classList.add("card1-body");
    card1Body.classList.add("author");
    card1Body.textContent = content;


    card1.append(card1Body);
    card1.append(card1Title)
    aTag.append(card1);
    column.append(aTag);
    row.append(column);
}
let modalContent = document.querySelector('.modal-body');
let trigger = document.querySelectorAll("a.modalbtn");


//function to addCards and modals and set thier data-id with link to content
let loadNews = (list, i, j) => {
    let storage = document.querySelector('.storage');
    deleteChild(row);
    deleteChild(storage)
    for (i; i < j; i++) {
        if (list[i]) {
            addCard(list[i], i);
        }
        let tempModal = document.createElement('div');
        tempModal.classList.add('modal-body');
        tempModal.setAttribute('data-id', `${id[i]}`);

        storage.append(tempModal);
    }

}


//function to delete all inner html elements
function deleteChild(target) {
    var child = target.lastElementChild;
    while (child) {
        target.removeChild(child);
        child = target.lastElementChild;
    }
}

//Make news buttons have event listeners and have a function to load specific content
discordNews.addEventListener("click", function () {
    event.preventDefault();
    pageNum.textContent = `Page ${num = 1}`; //display initial page number of 1
    loadNews(authors, i = 0, j = 9); //set values of i and j for reusability as well as values in function
    clicked = 'discordNews';
    discordLink.classList.add("activePage"); //add class to differentiate current page from others
    webLink.classList.remove("activePage"); //remove other instances of class
    allLink.classList.remove("activePage");
    fillModal();
});

// TODO find what news to add here
webNews.addEventListener("click", function () {
    event.preventDefault();
    pageNum.textContent = `Page ${num = 1}`;
    loadNews(webNewsTitles, i = 0, j = 9);
    clicked = 'webNews';
    webLink.classList.add("activePage");
    discordLink.classList.remove("activePage");
    allLink.classList.remove("activePage");
})

// TODO find what news to add here
allNews.addEventListener("click", function () {
    event.preventDefault();
    pageNum.textContent = `Page ${num = 1}`;
    loadNews(allNewsTitles, i = 0, j = 9);
    clicked = 'allNews';
    allLink.classList.add("activePage");
    discordLink.classList.remove("activePage");
    webLink.classList.remove("activePage");
})


//initiate variables for pagination and load first page view
let clicked = 'discordNews';
loadNews(authors, 0, 9); //on page load display news
allLink.classList.add("activePage");

//pagenumber text content change on clicks
num = 1;
pageNumContent = `Page ${num}`;

//pagination event listeners
// page right
pageRight.addEventListener("click", function () {
    event.preventDefault(); //stop page reload
    //Control flow to check which page is active and display results accordingly
    if (clicked === 'discordNews') {
        if (authors.length > j) {
            loadNews(authors, i += 9, j += 9) //move iterable right by 9 and display the row
            pageNumContent = `Page ${num += 1}`;
            pageNum.textContent = pageNumContent; //set the page number and display to page
            fillModal()
        }
    } else if (clicked === 'webNews') {
        if (webNewsTitles.length > j) {
            loadNews(webNewsTitles, i += 9, j += 9);
            pageNumContent = `Page ${num += 1}`;
            pageNum.textContent = pageNumContent;
        }
    } else if (clicked === 'allNews') {
        if (allNewsTitles.length > j) {
            loadNews(allNewsTitles, i += 9, j += 9);
            pageNumContent = `Page ${num += 1}`;
            pageNum.textContent = pageNumContent;
        }
    }
})

//page left reversed above version
pageLeft.addEventListener("click", function () {
    event.preventDefault();
    if (clicked === 'discordNews') {
        if (i > 0) {
            loadNews(authors, i -= 9, j -= 9); //move iterable left by 9 and display the row
            pageNumContent = `Page ${num -= 1}`;
            pageNum.textContent = pageNumContent;
            fillModal();
        }
    } else if (clicked === 'webNews') {
        if (i > 0) {
            loadNews(webNewsTitles, i -= 9, j -= 9);
            pageNumContent = `Page ${num -= 1}`;
            pageNum.textContent = pageNumContent;
        }
    } else if (clicked === 'allNews') {
        if (i > 0) {
            loadNews(allNewsTitles, i -= 9, j -= 9);
            pageNumContent = `Page ${num -= 1}`;
            pageNum.textContent = pageNumContent;
        }
    }
})





fillModal();