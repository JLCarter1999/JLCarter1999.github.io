let yesButtonSize = 100; // Initial size in percentage

function handleYesClick() {
    document.getElementById('valentine-gif').src = 'https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif';
    document.querySelector('h1').innerText = 'Yay! I Love You!';
    
    // Hide the buttons
    document.querySelector('.buttons').style.display = 'none';
}

function handleNoClick() {
    if (yesButtonSize < 10000) {
        yesButtonSize += 100;
        document.getElementById('yes-btn').style.fontSize = `${yesButtonSize}%`;
    }

    const titles = ['Nope', 'Not Interested', 'Try Again', 'Really?'];
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    document.getElementById('no-btn').innerText = randomTitle;
}




