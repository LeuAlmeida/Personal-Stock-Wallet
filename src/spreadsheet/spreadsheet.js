const GoogleSpreadsheet = require('google-spreadsheet')
const credentials = require('./credentials.json')
const { promisify } = require('util')

const docId = '1L-ywhumD0TnbJVxhMK_zZ9hnPsSKA86xPen1XCqNuG8'


const accessSpreadsheet = async() => {
    const doc = new GoogleSpreadsheet(docId)
    await promisify(doc.useServiceAccountAuth)(credentials)
    const info = await promisify(doc.getInfo)()
    const sheet = info.worksheets[0]
    
    // Pega determinada célula da planilha
    const LCAM3 = await promisify(sheet.getCells)({
        'min-row': 3,
        'max-row': 3,
        'min-col': 2,
        'max-col': 2
    })

    for(const cell of LCAM3) {
        console.log(`${cell.row},${cell.col}: ${cell.value}`)
    }

    // // Exibe Título da aba e número de linhas
    // console.log(`Title: ${sheet.title}, Rows: ${sheet.rowCount}`)

    // // Mostra as linhas dos Stocks
    // function printStock(stock) {
    //     console.log(`Ticker: ${stock.ticker}`)
    //     console.log(`Preço: ${stock.preço}`)
    //     console.log(`Posição: ${stock.posição}`)
    //     console.log('-----------------------------')
    // }

    // const rows = await promisify(sheet.getRows)({
    //     // offset: 0,
    //     // limit: 10,
    //     orderby: 'posição'
    // })

    // rows.forEach(row => {
    //     printStock(row);
    // })
    
    // // Exibe todas as linhas
    // console.log(rows);
}
accessSpreadsheet()

// export default props => (
//     <div>
//         {}
//     </div>
// )