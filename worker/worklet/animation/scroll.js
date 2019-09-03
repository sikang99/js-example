registerAnimator('scroll', class {
    animate(currentTime, effect) {
        effect.localTime = currentTime;
    }
});