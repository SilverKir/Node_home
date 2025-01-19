module.exports = log;

const fs = require('fs');

/**
 * 
 * @param {*} message  принимаемое сообщение;
 * 
 * @param {*} fileName имя файла
 */


function log(message, fileName) {

    const content = {
        date: new Date(),
        result: message
    }
    const data = JSON.stringify(content) + '\n';
    return new Promise((resolve) => {

        fs.statfs(fileName, (err) => {
            if (err) {
                //Файл не найден. Создаем файл;
                fs.writeFileSync(fileName, data, (err) => {
                    if (err) throw Error(err);
                }, resolve());
            } else {
                //Файл найден. Добавляем данные в файл;
                fs.appendFileSync(fileName, data, (err) => {
                    if (err) throw Error(err);
                }, resolve());
            }
        });
    })

}   
