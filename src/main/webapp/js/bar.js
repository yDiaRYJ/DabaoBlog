// JavaScript 示例
document.addEventListener("DOMContentLoaded", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/page/template/navbar.html", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("navbar-placeholder").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});

document.addEventListener("DOMContentLoaded", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/page/template/footerbar.html", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("footerbar-placeholder").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});