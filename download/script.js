function show_alert()
{
    alert('1번째 별을 클릭했습니다.');
}

var count = 0;

function hide_star()
{
    const x = document.getElementsByClassName("star");
    x[count].style.display = "none";
    count++;
    if (count > 4) {
        count = 0;
    }
}

function show_star()
{
    const y = document.getElementsByClassName("star");
    y[count].style.display = "block";
    count++;
    if (count > 4) {
        count = 0;
    }
}