/**
 * Created by AlgoPro on 17/02/16.
 */
var requestData = JSON.stringify({"username": "algopro", "password": "algopro"});

$(document).ready(function () {
    console.log(" -- sending authorisation -- ");
    $.ajax({
            url: "http://localhost:8080/api/login",
            type: "POST",
            dataType: 'json',
            contentType: "application/json;charset=utf-8",
            data: requestData
        })
        .done(function (json) {
            $("#key").append(json.access_token);
            document.cookie = "bearer=" + json.access_token;
        })
        .error(function (json) {
            console.log("Error when requesting JWT Token");
            console.log(json);
        });
});

$(document).ready(function () {
    $("#request_car").click(function () {
        console.log(" -- Loading cars description --")
        var bearer = getCookie("bearer");
        $.ajax({
                url: 'http://localhost:8080/car/list.json',
                headers: {"Authorization": "Bearer " + bearer},
                type: 'GET',
                dataType: 'json'
            })
            .done(function (json) {
                $("#cars").empty()
                for (i = 0; i < json.cars.length; i++) {
                    $("#cars").append("<br>")
                    $("#cars").append(json.cars[i].brand + " " + json.cars[i].name)
                }
            })
    });
});

$(document).ready(function () {

    $("#add_car_form").submit(function (event) {
        var bearer = getCookie("bearer");
        var name = $(this).find("#name").val();
        var brand = $(this).find("#brand").val();
        console.log("name : " + name);
        console.log("brand : " + brand);

        $.ajax({
                url: "http://localhost:8080/car/save.json",
                headers: {"Authorization": "Bearer " + bearer},
                data: {name: name, brand: brand},
                type: 'POST',
                dataType: 'json'
            })
            .done(function (json) {
                console.log(json);
                $("#car_created").show()
                $("#car_created").empty()
                $("#car_created").append(json.brand + " " + json.name)
            });

        event.preventDefault()
    });


});

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}