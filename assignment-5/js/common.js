function playerSelectFunction(xyz) {
    const player = xyz.previousElementSibling.previousElementSibling.textContent;
    const liQ = document.querySelector('ol').childElementCount;

    if(liQ < 5) {
        const ol = document.querySelector('ol');
        const li = document.createElement('li');
        li.textContent = player;
        ol.appendChild(li);
        xyz.setAttribute('disabled', 'true');
    } else {
        alert('Sorry, You can select only five players.');
    }
}