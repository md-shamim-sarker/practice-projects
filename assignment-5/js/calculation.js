document.getElementById('cal-btn').addEventListener('click', function() {
    const perPlayer = parseInt(document.getElementById('per-player').value);
    const liQ = document.querySelector('ol').childElementCount;
    const playerExpenses = perPlayer * liQ;
    document.getElementById('player-expenses').innerText = playerExpenses;
});

document.getElementById('cal-total-btn').addEventListener('click', function() {
    const manager = parseInt(document.getElementById('manager').value);
    const coach = parseInt(document.getElementById('coach').value);
    const playerExpenses = parseInt(document.getElementById('player-expenses').innerText);
    document.getElementById('total').innerText = manager + coach + playerExpenses;
});