// Object to map keys to their corresponding sound files
const sounds = {
    A: 'kick.wav',
    S: 'snare.wav',
    D: 'hihat.wav',
    F: 'crash.wav',
    G: 'tom.wav',
    H: 'tom2.wav',
    J: 'ride.wav'
  };
  
  // Function to play sound
  function playSound(key) {
    const audio = new Audio(sounds[key]);
    if (audio) {
      audio.currentTime = 0; // Reset audio for fast replay
      audio.play();
    }
  }
  
  // Function to add animation
  function addAnimation(key) {
    const button = document.querySelector(`button[data-key="${key}"]`);
    if (button) {
      button.classList.add('animate');
      setTimeout(() => button.classList.remove('animate'), 150);
    }
  }
  
  // Event listener for button clicks
  document.querySelectorAll('.drum').forEach(button => {
    button.addEventListener('click', () => {
      const key = button.getAttribute('data-key');
      playSound(key);
      addAnimation(key);
    });
  });
  
  // Event listener for key presses
  document.addEventListener('keydown', event => {
    const key = event.key.toUpperCase();
    if (sounds[key]) {
      playSound(key);
      addAnimation(key);
    }
  });
  