document.addEventListener('DOMContentLoaded', function () {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    let oscillator;
    let gainNode;
    let panNode;
    let isPlaying = false;

    const playButton = document.getElementById('play');
    const stopButton = document.getElementById('stop');
    const saveButton = document.getElementById('save');
    const volumeControl = document.getElementById('volume');
    const panControl = document.getElementById('pan');
    const frequencyControl = document.getElementById('frequency');
    const frequencyDisplay = document.getElementById('frequencyDisplay');
    const waveformControls = document.querySelectorAll('input[name="waveform"]');

    playButton.addEventListener('click', function () {
        if (!isPlaying) {
            oscillator = audioContext.createOscillator();
            gainNode = audioContext.createGain();
            panNode = audioContext.createStereoPanner();

            oscillator.type = document.querySelector('input[name="waveform"]:checked').value;
            oscillator.frequency.setValueAtTime(frequencyControl.value, audioContext.currentTime);
            gainNode.gain.setValueAtTime(volumeControl.value, audioContext.currentTime);
            panNode.pan.setValueAtTime(panControl.value, audioContext.currentTime);

            oscillator.connect(gainNode);
            gainNode.connect(panNode);
            panNode.connect(audioContext.destination);

            oscillator.start();
            isPlaying = true;
            playButton.textContent = 'Pause';
        } else {
            oscillator.stop();
            isPlaying = false;
            playButton.textContent = 'Play';
        }
    });

    stopButton.addEventListener('click', function () {
        if (oscillator) {
            oscillator.stop();
            isPlaying = false;
            playButton.textContent = 'Play';
        }
    });

    volumeControl.addEventListener('input', function () {
        if (oscillator && gainNode) {
            gainNode.gain.setValueAtTime(volumeControl.value, audioContext.currentTime);
        }
    });
    
    panControl.addEventListener('input', function () {
        if (oscillator && panNode) {
            panNode.pan.setValueAtTime(panControl.value, audioContext.currentTime);
        }
    });

    panControl.addEventListener('dblclick', () => {
        const panSlider = document.getElementById('pan');
        panSlider.value = 0;
        panSlider.dispatchEvent(new Event('input'));
    });

    frequencyControl.addEventListener('input', function () {
        const frequency = frequencyControl.value;
        frequencyDisplay.textContent = `${frequency} Hertz`;
        if (oscillator) {
            oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
        }
    });

    waveformControls.forEach(control => {
        control.addEventListener('change', function () {
            if (oscillator) {
                oscillator.type = this.value;
            }
        });
    });

    saveButton.addEventListener('click', function () {
        // Implement save functionality if needed
        console.log('Save functionality not implemented yet.');
    });
});
