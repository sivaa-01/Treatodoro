const { ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
    const minimizeButton = document.getElementById('min-btn');
    const closeButton = document.getElementById('close-btn');

    const windowButtons = document.querySelectorAll('.window-buttons');

    windowButtons.forEach(button => {
        // --- Hover Control ---
        button.addEventListener('mouseenter', () => {
            button.classList.add('manual-hover');
        });

        button.addEventListener('mouseleave', () => {
            button.classList.remove('manual-hover');
        });

        // --- Active Control (For the click/press effect) ---
        button.addEventListener('mousedown', () => {
            button.classList.add('manual-active');
        });
        button.addEventListener('mouseup', () => {
            button.classList.remove('manual-active');
        });
    });

    window.addEventListener('focus', () => {
        windowButtons.forEach(button => {
            button.classList.remove('manual-hover');
            button.classList.remove('manual-active'); 
            
            button.blur();
        });
        
        document.body.classList.remove('window-inactive');
    });

    if (minimizeButton) {
        minimizeButton.addEventListener('click', () => {
            ipcRenderer.send('minimize-app');
        });
    }
    
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            ipcRenderer.send('close-app');
        });
    }
});