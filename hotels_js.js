function showTab(tabName) {
    var tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    document.getElementById(tabName + "Tab").style.display = "block";
}