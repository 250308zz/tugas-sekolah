function processData() {
    let inputData = document.getElementById ('inputDollar').value.trim();
    let dataArray = inputData.split(',').map(Number);

    let konversiDollar = dataArray.map(function (num) {
        return num * 16000
    })
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Kurs IDR:</h2><p>" + konversiDollar.join(', ') + '</p>';

}