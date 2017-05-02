function calculate_age(birth_month,birth_day,birth_year)
{
    today_date = new Date();
    today_year = today_date.getFullYear();
    today_month = today_date.getMonth();
    today_day = today_date.getDate();
    age = today_year - birth_year;

    if ( today_month < (birth_month - 1))
    {
        age--;
    }
    if (((birth_month - 1) == today_month) && (today_day < birth_day))
    {
        age--;
    }
    return age;
}

$(document).ready(function(){
	$('#age').html(calculate_age(11,12,1976));
	$(".pics").delay(2000).animate({right:'262px'});
	
});

$('#dispStats').click(function() {
	$('#stats').toggle(1000);
	var dis = $('#dispStats').html();
	if (dis == "Click Here to Show Stats"){
		$('#dispStats').html("Click Here to Hide Stats");
	} else
		$('#dispStats').html("Click Here to Show Stats");
});

$('#myPic').click(function() {
    $(this).fadeOut(500, function(){
    	var src = ($(this).attr('src') === 'pics/ironman.jpg')
        ? 'pics/raulpic.jpg'
        : 'pics/ironman.jpg';
     $(this).attr('src', src);
    		});
    $(this).fadeIn(500);
});

$('#ironDiv').click(function() {
	$('#ironDiv').fadeOut(500);
});

