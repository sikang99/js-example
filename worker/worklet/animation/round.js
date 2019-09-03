registerAnimator('round', class {
    animate(currentTime, effect) {
        effect.localTime = Math.floor( currentTime / 100 ) * 100;
    }
});