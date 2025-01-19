module.exports = logAnaliserView;

function logAnaliserView(data) {
    console.log(`\n ============ СТАТИСТИКА ===============`);
    console.log(`Количество попыток: ${data.count}`);
    console.log(`Количество побед: ${data.win}`);
    console.log(`Количество поражений: ${data.loose}`);
    console.log(`Процент побед: ${Math.round(data.winPercent)}%`);
}