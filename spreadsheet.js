const GoogleSpreadsheet = require('google-spreadsheet')
const credentials = require('./credentials.json')
const { promisify } = require('util')

const docId = '1L-ywhumD0TnbJVxhMK_zZ9hnPsSKA86xPen1XCqNuG8'

const accessSheet = async() => {
    const doc = new GoogleSpreadsheet(docId)
    await promisify(doc.useServiceAccountAuth)(credentials)
    const info = await promisify(doc.getInfo)()
    console.log(info)
}
accessSheet()

$(document).ready(
    () => {
        var grana = document.getElementById('grana');
        var dinheiro = 100.00;

        grana.innerHTML = dinheiro;

        // Quando mudar o valor, reinserir altera localmente apenas o span
        dinheiro = 150.00;

        grana.innerHTML = dinheiro;
})