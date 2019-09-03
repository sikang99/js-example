registerAnimator('state', class {
    constructor(options, state) {
        this.prevTime = 0;
    }

    animate(currentTime, effect) {
        if (this.prevTime > currentTime) {
            effect.localTime = 1;
        } else if (this.prevTime < currentTime) {
            effect.localTime = 1000;
        }
        this.prevTime = currentTime;
    }
});