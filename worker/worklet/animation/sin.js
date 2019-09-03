registerAnimator('sin', class {
    animate(currentTime, effect) {
        effect.localTime = Math.abs( Math.sin(currentTime/1000)*1000 );
    }
});