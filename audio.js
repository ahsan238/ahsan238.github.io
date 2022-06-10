// More refined implementation
// https://github.com/fingerprintjs/fingerprintjs/blob/3201a7d61bb4df2816c226d8364cc98bb4235e59/src/sources/audio.ts

function calculateHash(samples) {
    let hash = 0
    for (let i = 0; i < samples.length; ++i) {
        hash += Math.abs(samples[i])
    }
    return hash
}

function audioFp() {
    const AudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContex // Safari doesnt support OfflineAudioContext

    const context = new AudioContext(1, 5000, 44100)

    const oscillator = context.createOscillator()
    oscillator.type = "triangle"
    oscillator.frequency.value = 1000


    const compressor = context.createDynamicsCompressor()
    compressor.threshold.value = -50
    compressor.knee.value = 40
    compressor.ratio.value = 12
    compressor.reduction.value = 20
    compressor.attack.value = 0
    compressor.release.value = 0.2

    oscillator.connect(compressor)
    compressor.connect(context.destination);

    oscillator.start()

    const resumeTriesMaxCount = 3
    const runningTimeout = 1000
    context.oncomplete = event => {
        // We have only one channel, so we get it by index
        const samples = event.renderedBuffer.getChannelData(0)
        const hash = calculateHash(samples)
        document.getElementById("audioFP").innerText = "Audio FP: " + hash
      };
      context.startRendering()

}

function makeInnerError(name) {
    const error = new Error(name)
    error.name = name
    return error
}