function showText(show,hide)
{
    document.getElementById(show).className = "show";
    document.getElementById(hide).className = "hide";
    document.getElementById(active).className = "inactive";
    document.getElementById(inactive).className = "active";
}
