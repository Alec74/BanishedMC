let send = document.querySelector(".send");
let txtArea = document.querySelector('#textArea');
txtArea.contentEditable = 'true';
let ul = document.getElementById("myUL");

let usernames = [];
let discordIds = [];
let data = [];

const refreshMembers = async () => {
    const response = await fetch('/api/members/discord', {
        method: "POST"
    });
}

let getDiscordMembers = async () => {
    await fetch('/api/members/discord')
        .then(res => {
            return res.json();
        })
        .then(data2 => {
            if (data2.length != usernames.length){
                // console.log(data2);
                console.log('diff', data2.length, usernames.length);
                // getMembers();
                refreshMembers();
                setTimeout(function(){
                    location.reload();
                }, 4000)
            }else{
                console.log('no new members');
            }
        })
}


let getMembers = () => {
    fetch('/api/members/')
        .then(function (res) {
            // console.log(res.json());
            return res.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                let name = data[i].username;
                let listEl = document.createElement("li");
                let aEl = document.createElement("a");
                aEl.textContent = name;
                listEl.append(aEl);
                ul.append(listEl);
                usernames.push(name.toLowerCase().replace(/\s+/g, ''));
                discordIds.push(data[i].userId);
            }
        })
}
getMembers();

// getDiscordMembers();




// Set cursor position in text area
function setCaretPosition(elemId, caretPos) {
    var elem = document.querySelector(elemId);

    if (elem != null) {
        if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.move('character', caretPos);
            range.select();
        }
        else {
            if (elem.selectionStart) {
                elem.focus();
                elem.setSelectionRange(caretPos, caretPos);
            }
            else
                elem.focus();
        }
    }
}

// usernames = getMembers();
// console.log(usernames)

setTimeout(function () {
    // console.log('wait a second');
    let a = 0;
    let b = 0;
    for (let i = 0; i < usernames.length; i++) {
        // console.log(usernames[i].length);
        a = usernames[i].length;
        if (a > b) {
            b = a;
        }
    }
    // console.log(discordIds);
    getDiscordMembers();
    capture();
    // console.log(data);
}, 2000)


let array = [];
const capture = () => {
    txtArea.addEventListener('keyup', function(e){
        let txt = e.target.textContent;
        array = txt.split(' ');
        // console.log(array);
        for (let i = 0; i < array.length; i++){
            // console.log(array[i][0]);
            if (array[i][0] === '@'){
                
                // console.log(e.target.innerHTML[array[i].length]);
            }
        }
    })
}

// console.log(usernames);


send.addEventListener('click', async function () {
    if(confirm("You are about to make a new post in \"|news\" channel, would you like to continue?")){
        // let text = txtArea.textContent;
        for (let i = 0; i < array.length; i++){
            // console.log(array[i]);
            if (array[i][0] === '@' && array[i] != '@everyone' && array[i] != '@here'){
                // console.log(array[i]);
                // let re = new RegExp(`<@!${id}>`, 'g');
                let check = array[i].toLowerCase().slice(1, array[i].length);
                // console.log(check);
                // console.log(usernames[i], i);
                for (let j = 0; j < usernames.length; j++){
                    if (check === usernames[j]){
                        // console.log('equal at: ', j);
                        let swap = `<@!${discordIds[j]}>`;
                        // console.log(swap);
                        array[i] = swap;
                        
                    }
                    // console.log(usernames[j])
                }
            }
        }
        // console.log(newSend);
        txtArea.textContent = '';
        const response = await fetch('/api/message/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(array)
        });
        const update = await fetch('/api/message/discord', {
            method: 'PUT'
        })
    }

})

