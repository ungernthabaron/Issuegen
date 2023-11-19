document.addEventListener('DOMContentLoaded', function () {
    const line1 = document.getElementById('line1');
    const changeConditionButton = document.getElementById('changeCondition');
    const changeSubjectButton = document.getElementById('changeSubject');

    window.fictionalCountries = ["Гондор", /* ... (ваш список стран) */];
    window.fictionalSubjects = [
        "правоприменительная практика",
        "общественное мнение",
        "законодательство",
        "культурные традиции",
        "международные нормы",
        // ... (другие вымышленные факторы)
    ];

    let currentCountryIndex = 0;

    function changeCondition() {
        if (currentCountryIndex < window.fictionalCountries.length) {
            line1.textContent = `В ${window.fictionalCountries[currentCountryIndex]} неудовлетворительная ${getCurrentSubject()} в отношении домашнего насилия.`;
            currentCountryIndex++;
        }
    }

    function getCurrentSubject() {
        return window.fictionalSubjects[Math.floor(Math.random() * window.fictionalSubjects.length)];
    }

    // Привязка функции к событию click кнопки изменения условия
    changeConditionButton.addEventListener('click', function () {
        line1.textContent = line1.textContent.replace(/Казахстане/, getCurrentSubject());
    });

    // Привязка функции к событию click кнопки изменения субъекта
    changeSubjectButton.addEventListener('click', function () {
        line1.textContent = line1.textContent.replace(/правоприменительная практика/, getCurrentSubject());
    });
});
