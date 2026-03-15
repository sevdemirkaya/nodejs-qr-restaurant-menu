const QRCode = require("qrcode")

const tables = 10

for(let i=1;i<=tables;i++){

const url = `http://localhost:3000/menu.html?table=${i}`

QRCode.toFile(`qr/table-${i}.png`, url)

}