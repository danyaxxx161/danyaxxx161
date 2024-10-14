function showDetails(service) {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const description = document.getElementById('modal-description');

    if (service === 'group') {
        title.innerText = 'Групповые тренировки';
        description.innerText = 'Тренируйтесь в команде и достигайте результатов вместе!';
    } else if (service === 'individual') {
        title.innerText = 'Индивидуальные занятия';
        description.innerText = 'Персональные тренировки под ваше расписание и уровень.';
    } else if (service === 'kids') {
        title.innerText = 'Тренировки для детей';
        description.innerText = 'Научите своих детей основам бокса в безопасной обстановке.';
    }

    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
