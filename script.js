
function simulateDislexia() {
    const paragraphs = document.querySelectorAll('p');

    paragraphs.forEach((paragraph) => {
        const text = paragraph.textContent;
        let newText = '';
        for (let i = 0; i < text.length; i++) {
            
            if (Math.random() < 0.4) {
                newText += text[i + 1] + text[i];
                i++;
            } else {
                newText += text[i];
            }
        }
        paragraph.textContent = newText;
    });
}


window.onload = simulateDislexia;


function toggleTextVersion() {
    const originalText = document.querySelectorAll('#originalText, #originalText2');
    const dislexicText = document.querySelectorAll('#dislexicText, #dislexicText2');
    
    originalText.forEach((element) => {
        element.classList.toggle('hidden');
    });
    
    dislexicText.forEach((element) => {
        element.classList.toggle('hidden');
    });
}


const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', toggleTextVersion);
