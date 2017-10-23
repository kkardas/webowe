var czasMax = 20;
var czas = czasMax;

function countDown(timeleft, timetotal) {
    czas = timeleft;
    var barWidth = czas * $("#timer").width() / timetotal;
    $(".tim").animate({width: barWidth}).html(czas);
    if(czas > 0)
        setTimeout(function () {
            czas -= 1;
            countDown(czas, timetotal);
        }, 1000)
    else {
        udzieloneOdp[pytanieIdx-1] = "Brak";
        przeladujFormularz();
        countDown(czas, timetotal);
    }
}

function resetujZegar() {
    czas = czasMax;
}