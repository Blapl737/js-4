document.getElementById('cardForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const cardNumber = document.getElementById('cardNumber').value;
    const cardHolder = document.getElementById('cardHolder').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    const resultHTML = `
        <h3>Данные о карточке:</h3>
        <p><strong>Номер карточки:</strong> ${cardNumber}</p>
        <p><strong>Владелец карточки:</strong> ${cardHolder}</p>
        <p><strong>Срок действия:</strong> ${expiryDate}</p>
        <p><strong>CVV:</strong> ${cvv}</p>
    `;
    document.getElementById('result').innerHTML = resultHTML;
    document.getElementById('cardForm').reset();
});
