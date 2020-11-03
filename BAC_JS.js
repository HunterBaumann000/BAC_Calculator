    $(document).ready(function() {

    $("#submitButton").click(CalculateBAC);

    function CalculateBAC() {

    var beerAC = 0.54;
    var wineAC = 0.60;
    var shotsAC = 0.60;

    var beerAmount = $("#beersConsumedTxt").val();
    beerAmount = parseFloat(beerAmount);

    var wineAmount = $("#wineConsumedTxt").val();
    wineAmount = parseFloat(wineAmount);

    var shotAmount = $("#shotsConsumedTxt").val();
    shotAmount = parseFloat(shotAmount);

    var weightAmount = $("#weightTxt").val();
    weightAmount = parseFloat(weightAmount);

    var firstDrinkTime = $("#FirstDrinkTxt").val();
    firstDrinkTime = parseFloat(firstDrinkTime);

    //--------------

    var beerBAC = (((beerAmount * beerAC) * 7.5) / weightAmount) - (firstDrinkTime * 0.015);
    beerBAC = parseFloat(beerBAC);

    var wineBAC = (((wineAmount * wineAC) * 7.5 ) / weightAmount) - (firstDrinkTime * 0.015);
    wineBAC = parseFloat(wineBAC);

    var shotBAC = (((shotAmount * shotsAC) * 7.5 ) / weightAmount) - (firstDrinkTime * 0.015);
    shotBAC = parseFloat(shotBAC);

    var totalBAC = shotBAC + wineBAC + beerBAC;

    //---------------

    $("#totalBACText").text("Your total BAC is: " + totalBAC.toFixed(3));

}});
