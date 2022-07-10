const computer = {
    model: "GT-3120" ,
    producer:"Asus",
    price:1900
}

const button = document.getElementById('button')
const tb = document.getElementById('tableId')

function createNewComputer(model, producer, prise) {
    const obj = {};
    obj.model = model;
    obj.producer = producer;
    obj.prise = prise;
    return obj;
}









button.addEventListener('click', function() {
    for (let i = 1; i < 5; i++) {
        var obg = createNewComputer("asus","GT",i*15)
        var newRow = tb.insertRow(i);
        for (let item in obg) {
            console.log(item)
            var newCell = newRow.insertCell(-1);
            var newText = document.createTextNode(obg[item]);
            newCell.appendChild(newText);
        }
    }
      
        })





