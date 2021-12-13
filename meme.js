let gambar = [
//     change this array to your image link
    "https://cdn.discordapp.com/attachments/859783442757713930/918479616430211082/hololive.addict_248671788_1215848452245896_1564195524595778005_n.jpg",
    "https://cdn.discordapp.com/attachments/859783442757713930/918472409407950848/FGKJTcaVIAIUHYC.png",
    "https://cdn.discordapp.com/attachments/859783442757713930/918412905672749086/264571953_132324912536056_661026059026379439_n.png"
// 
]

const thumbnail = document.getElementsByTagName("img")

for (image of thumbnail){
    const index = Math.floor(Math.random() * gambar.length)
    image.src = gambar[index]
}
