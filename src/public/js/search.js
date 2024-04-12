$(document).ready(function(){
    $('.tim_kiem').keyup(function(){
        var txt = $('.tim_kiem').val();
        $.get('ajax' , {data:txt} , function(data){
            $('.danhsach').html(data);
        })
    })
})