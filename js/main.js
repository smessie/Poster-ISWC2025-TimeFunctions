import '../css/style.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';

const updateScale = () => {
    const poster = document.getElementById('app');
    const body = document.body;

    const { innerWidth, innerHeight } = window;
    const { offsetWidth, offsetHeight } = poster;

    const fullScale = 1 / Math.max(offsetWidth / innerWidth, offsetHeight / innerHeight);

    body.style.setProperty('transform', `scale(${fullScale})`);
};

window.addEventListener('resize', updateScale);
window.addEventListener('load', updateScale);
