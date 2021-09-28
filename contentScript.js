/// Find the button ///
let alb = undefined;

function clickButton() {
    /// close the button ///
    let x = alb[0];
    x.click();
}

function checkForButton() {
    alb = document.querySelectorAll('[aria-label^="Close"]');
    if (alb[0] !== undefined) {
        clickButton();
    } else {
        return;
    }
}
window.setInterval(checkForButton, 3000);
