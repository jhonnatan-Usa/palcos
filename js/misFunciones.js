function getDoctors(){
    $.ajax({
        url: "http://127.0.0.1:8080/api/doctor/all",
        type: "GET",
        datatype: "JSON",
        success: function(response){
            printListAllDoctors(response);
        }
    })
}