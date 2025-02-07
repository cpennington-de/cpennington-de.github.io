window.addEventListener('load', () => {
    const transitionScene = document.getElementById('transition-scene');
    setTimeout(() => {
      transitionScene.classList.add('hidden');
    }, 2000); // Scene lasts for 2 seconds
  });
  