export function addTouchEndPreventionOnce() {
    document.addEventListener('touchend', (e) => {
        e.preventDefault();
    }, {once: true});
}