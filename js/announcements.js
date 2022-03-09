//unordered list tag with id announcementsList
let ul = document.getElementById("announcementsList");

//Function to fill the unordered list with announcements and display to page
let fillAnnouncements = (list) => {
    for (let i = 0; i < list.length; i++) {
        let listEl = document.createElement("li");
        listEl.textContent = list[i];
        ul.append(listEl);
    };
};

// async function to fetch messages from a channelid and display them
async function retrieveMessages(channelid) {
    let announcements = [];
    let pingName = [];
    let pingIndex = [];
    let retrieve = await fetch(`https://discord.com/api/v9/channels/${channelid}/messages`, {
        method: 'GET',
        headers: {
            'authorization': 'NTg3MTEyNTcyOTY5NDE4Nzg3.YHBaAw.wHitDO_eIwHIHDfYPguw9nflhbA' //Authorization token for the specific channel
        }
    })
        .then((response) => response.json())
        // this promise adds the contents of messages to an array and replaces any @mentions with the username mentioned
        .then((responseJson) => {
            console.log(responseJson, 'res JSON');
            for (let i = 0; i < responseJson.length; i++) {
                if (responseJson[i].content) {
                    let content = responseJson[i].content;
                    if(responseJson[i].mentions){
                        var pass = responseJson[i].content;
                        for (let j = 0; j < responseJson[i].mentions.length; j++){
                            let re = new RegExp(`<@!${responseJson[i].mentions[j].id}>`, 'g')
                            pass = pass.replaceAll(re, `@${responseJson[i].mentions[j].username}`);
                        }
                    }
                    if (pass){
                        announcements.push(pass);
                        pass = 0;
                    }else{
                        announcements.push(responseJson[i].content);
                    }
                }
            }
        })
        .catch((error) => {
            console.error(error);
        })
        // Calling the fillAnnouncements function to display data fetched
    fillAnnouncements(announcements);
}

retrieveMessages('750114046887329885'); //Current channel id is from a test channel in a test server
//WIP: Add .env file to hold authorization and channel id to safeguard it