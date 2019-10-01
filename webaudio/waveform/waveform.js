window.onload = function() {
    class Sound {
        constructor(context) {
            this.context = context;
        }
        
        init() {
            this.oscillator = this.context.createOscillator();
            this.gainNode = this.context.createGain();
            this.oscillator.connect(this.gainNode);
            this.gainNode.connect(this.context.destination);
        }
      
        play(value) {
            this.init();
            this.gainNode.gain.setValueAtTime(0.5, this.context.currentTime);
            this.oscillator.start();
        }
        
        stop() {
            this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 1);
            this.oscillator.stop(this.context.currentTime + 1);
        }
    }  
      
    var context = new AudioContext();
    var sound = new Sound(context);
    
    sound.init();
    var wave = 'sine';
    var state = 'paused';
    
    var buttons = document.querySelectorAll('.waveform');
    var playBtn = document.querySelector('#play');
    //var container = document.querySelector('.container');
    var container = document.getElementsByClassName('container')[0]; // CAUTION: class is array
    
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {           
            cleanClass('active');
            wave = button.dataset.wave;
            sound.oscillator.type = wave;
            button.classList.add('active');
        });
    });
    
    playBtn.addEventListener('click', function() {
        container.classList.toggle('playing');
    
        if (playBtn.text == 'Play') {
            sound.play();
            sound.oscillator.type = wave;
            playBtn.text = 'Pause';
        } else {
            sound.stop();
            playBtn.text = 'Play';
        }
    });
    
    function cleanClass(rclass) {
        buttons.forEach(function(button) {
            button.classList.remove(rclass);
        });
    }
};