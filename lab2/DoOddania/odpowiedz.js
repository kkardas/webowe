var pytania = [
    {
        pytanie: "P1",
        odpA: "1a",
        odpB: "1b",
        odpC: "1c",
        odpD: "1d",
        prawidlowaOdp: "1b"
    },
    {
        pytanie: "P2",
        odpA: "2a",
        odpB: "2b",
        odpC: "2c",
        odpD: "2d",
        prawidlowaOdp: "2c"
    },
    {
        pytanie: "P3",
        odpA: "3a",
        odpB: "3b",
        odpC: "3c",
        odpD: "3d",
        prawidlowaOdp: "3b"
    },
    {
        pytanie: "P4",
        odpA: "4a",
        odpB: "4b",
        odpC: "4c",
        odpD: "4d",
        prawidlowaOdp: "4a"
    },
    {
        pytanie: "P5",
        odpA: "5a",
        odpB: "5b",
        odpC: "5c",
        odpD: "5d",
        prawidlowaOdp: "5d"
    },
    {
        pytanie: "P6",
        odpA: "6a",
        odpB: "6b",
        odpC: "6c",
        odpD: "6d",
        prawidlowaOdp: "6c"
    },
    {
        pytanie: "P7",
        odpA: "7a",
        odpB: "7b",
        odpC: "7c",
        odpD: "7d",
        prawidlowaOdp: "7a"
    },
    {
        pytanie: "P8",
        odpA: "8a",
        odpB: "8b",
        odpC: "8c",
        odpD: "8d",
        prawidlowaOdp: "8b"
    },
    {
        pytanie: "P9",
        odpA: "9a",
        odpB: "9b",
        odpC: "9c",
        odpD: "9d",
        prawidlowaOdp: "9c"
    },
    {
        pytanie: "P10",
        odpA: "10a",
        odpB: "10b",
        odpC: "10c",
        odpD: "10d",
        prawidlowaOdp: "10d"
    }];

var udzieloneOdp = [];

var pytanieIdx = 0;

function przeladujPytanie() {
    $("#nrPytania").text((pytanieIdx + 1).toString() + ": " + pytania[pytanieIdx].pytanie);
    $("#p1").text(pytania[pytanieIdx].odpA);
    $("#p2").text(pytania[pytanieIdx].odpB);
    $("#p3").text(pytania[pytanieIdx].odpC);
    $("#p4").text(pytania[pytanieIdx].odpD);
    pytanieIdx += 1;
}

function przeladujPasek() {
    if(pytania[pytanieIdx-1].prawidlowaOdp === udzieloneOdp[pytanieIdx-1])
    {
        $("#progress").append("<div class=\"progress-bar progress-bar-success\" role=\"progressbar\" style=\"width:" + 100/pytania.length + "%\">" + pytanieIdx + "</div>");
    }
    else if(udzieloneOdp[pytanieIdx-1] === "Brak")
    {
        $("#progress").append("<div class=\"progress-bar progress-bar-warning\" role=\"progressbar\" style=\"width:" + 100/pytania.length + "%; background-color: grey; border-style: solid; color: black;\">" + pytanieIdx + "</div>");
    }
    else
    {
        $("#progress").append("<div class=\"progress-bar progress-bar-danger\" role=\"progressbar\" style=\"width:" + 100/pytania.length + "%\">" + pytanieIdx + "</div>");
    }
}

function przeladujFormularz() {
    przeladujPasek();
    wyswietlPodsumowanie();
    przeladujPytanie();
    resetujZegar();
}

$(document).ready(function () {
    mieszaj(pytania);
    przeladujPytanie();
    countDown(czas, czasMax);
    $(".odp").click(function () {
        udzieloneOdp[pytanieIdx - 1] = $(this).find('button').text();
        przeladujFormularz();
    })
})

function mieszaj(array) {
    let counter = array.length;

    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);

        counter--;

        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
}