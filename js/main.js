mport { Haptics } from 'https://cdn.jsdelivr.net/npm/@capacitor/haptics@latest/dist/esm/index.js';

const btn = document.getElementById('btn-haptics');

btn.addEventListener('click', async () => {
  try {
    await Haptics.impact({ style: 'Medium' });
    console.log('Haptics ok');
  } catch (e) {
    console.warn('Haptics not available here:', e);
  }
});
