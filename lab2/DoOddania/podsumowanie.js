function wyswietlPodsumowanie() {
    if(udzieloneOdp.length === pytania.length)
    {
        $("#pytania").css("display", "none");
        $("#podsumowanie").css("display", "inline");
        for(var i = 0; i < pytania.length; i++)
        {
            $("#podsumowanie").append("<p> Pytanie " + (i+1) + ": " + pytania[i].pytanie + "<br>Poprawna odpowiedź: " + pytania[i].prawidlowaOdp + "<br>Udzielona odpowiedź: " + udzieloneOdp[i] + "<br></p>");
        }
    }
}
