module.exports = inspectAnswer;

function inspectAnswer(answer, number) {
    if (answer != number) {
        console.log('Вы не угадали! В следующий раз повезет.');
        return false;
    } else {
        console.log(' Правильно! Поздравлем! ');
        return true;
    }
}
