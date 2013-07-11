// When the page is ready
$(document).ready(function() {
    $("input").click(function(event) {
        updateTotal();
    });
});

function updateTotal() {
    var total = 0;
    $("#cost input:checked").each(function() {
        total += parseFloat(this.value);
    });
    $('#TotalCost').val("$" + total.toFixed(2));
}