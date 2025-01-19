module.exports = logAnalizer;

const fs = require('fs')

/**
 * 
 * @param {*} fileName  имя Log файла
 * @returns объект с данными по логу (count: количество попыток, win: количество побед, loose: поражений, winPercent:процент побед)
 */

function logAnalizer(fileName) {

    try {
        const result = fs.readFileSync(fileName, 'utf-8').split("\n")
        result.pop();
        const items = result.map(item => {
            return JSON.parse(item).result
        })

        return {
            count: items.length,
            win: items.filter(item => item === true).length,
            loose: items.filter(item => item === false).length,
            winPercent: (items.filter(item => item === true).length / items.length) * 100,
        }

    } catch {
        throw Error('Файл лога не найден')
    }
}