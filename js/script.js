var qoute = {
    qoute: "",
    author: "",
    showed: 0
}

var qoutes = [];
qoutes.push({ qoute: `"Be yourself; everyone else is already taken."`, author: "--Oscar Wilde", showed: 0 });
qoutes.push({ qoute: `"Be the change that you wish to see in the world."`, author: "--Mahatma Gandhi", showed: 0 });
qoutes.push({ qoute: `"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals."`, author: "--J.K. Rowling", showed: 0 });
qoutes.push({
    qoute: `"Don't walk in front of me… I may not follow
Don't walk behind me… I may not lead
Walk beside me… just be my friend"`, author: `--Albert Camus`, showed: 0
});

var prevIndex = -1;

function getqoute() {
    checkAllShowed();
    var index = Math.floor(Math.random() * qoutes.length);
    while (qoutes[index].showed == 1 || index == prevIndex) {
        index = Math.floor(Math.random() * qoutes.length);
    }
    qoutes[index].showed = 1;
    document.getElementById("qoute").innerHTML = qoutes[index].qoute;
    document.getElementById("author").innerHTML = qoutes[index].author;
    prevIndex = index;
}


function checkAllShowed() {
    var allShowed = true;
    for (var i = 0; i < qoutes.length; i++) {
        if (qoutes[i].showed == 0) {
            allShowed = false;
            break;
        }
    }
    if (allShowed) {
        for (var i = 0; i < qoutes.length; i++) {
            qoutes[i].showed = 0;
        }
    }
}