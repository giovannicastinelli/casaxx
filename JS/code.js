var tBody = $("#myTable tbody"),
    myButton = $("#myButton"),
    inputCantidad = $("#cantidadInput");

myButton.on("click", function(event) {
    var TC = inputCantidad.val();
    event.preventDefault();
    generateTable(TC);
});

function generateTable(count) {
    tBody.empty();
    for (var i = 1; i <= count; i++) {
        tBody.append("<tr><td>" + i + "</td><td>" + "Elemento " + i + "</td></tr>");
    }
}