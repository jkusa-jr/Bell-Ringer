# Tone Generator

A versatile web-based audio tone generator that allows real-time manipulation of sound properties using the Web Audio API.

See it in action [here](https://barbowza.github.io/tone-generator/)

## Features

- **Frequency Control**: Generate tones from 20Hz to 2000Hz
  - Click on frequency display for direct numerical input
  - Slider control for smooth frequency adjustment
  
- **Waveform Selection**:
  - Sine wave
  - Square wave
  - Sawtooth wave
  - Triangle wave

- **Sound Shaping**:
  - Volume control (0-100%)
  - Stereo panning (Left to Right)
  - Double-click pan slider to reset to center

- **Playback Controls**:
  - Play/Pause toggle
  - Stop button
  - Save functionality (coming soon)

## Usage

1. Click the "Play" button to start generating sound
2. Adjust frequency using the slider or click the Hz display for precise input
3. Select different waveforms using the radio buttons
4. Control volume and stereo positioning with respective sliders
5. Use Stop button to halt sound generation

## Technical Details

Built using:
- HTML5
- CSS3
- JavaScript
- Web Audio API
  - OscillatorNode
  - GainNode
  - StereoPannerNode

## Browser Compatibility

Works in modern browsers that support the Web Audio API:
- Chrome
- Firefox
- Safari
- Edge

## Local Development

1. Clone the repository
2. Open `index.html` in a modern web browser
3. No build process required - pure vanilla JavaScript

## License

MIT License

## Contributing

Feel free to open issues and submit pull requests to improve the application.
