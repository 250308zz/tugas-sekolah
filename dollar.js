function dataDollar(){
    let dollar = document.getElementById("inputDollar").value;
    
    let rupiah = inputDollar + (dollar * 15.000);
   
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = '<h2>Hasil:</h2><p>' + rupiah.join + '</p>'


}