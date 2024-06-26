score = 0;
cross = true;
audio = new Audio('theme.mp3');
audiogo = new Audio('game.mp3');

setTimeout(() => {
    audio.play()
}, 1000);

document.onkeydown = function (e) {
    console.log("Key is: ", e.keyCode)


    if (e.keyCode == 32) {
        dino = document.querySelector('.dino')
        dino.classList.add('animatedino')
        setTimeout(() => {
            dino.classList.remove('animatedino')
        }, 700);


    }

    if (e.keyCode == 39) {
        dino = document.querySelector('.dino')
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX + 112) + "px"


    }
    if (e.keyCode == 37) {
        dino = document.querySelector('.dino')
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px"


    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    // for dino property.
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    // for obstacle that mean Ironman property.
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));


    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);


    //console.log(offsetX,offsetY);

    if (offsetX < 93 && offsetY < 52) {
        gameOver.innerHTML = "Reload to play again";
        //gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
        audiogo.play()

        // setTimeout(() => {
        //     audio.pause()
        // }, 500);

        setTimeout(() => {
            audio.pause()
            audiogo.pause()
        }, 1500);
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1; //jaise jaise score increase hoga waise waise ki ironman speed increase hoga
            obstacle.style.animationDuration = newDur + 's'
        }, 500);
    }


}, 10);

function updateScore(score) {
    scoreCount.innerHTML = "Your Score: " + score
}