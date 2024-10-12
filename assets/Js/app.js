function changetolighttheme() {
    var element = document.getElementById("htmltheme");
    element.dataset.bsTheme = "light";
    localStorage.setItem('theme', 'light');
}

function changetodarktheme() {
    var element = document.getElementById("htmltheme");
    element.dataset.bsTheme = "dark";
    localStorage.setItem('theme', 'dark');
}

// loader script
window.addEventListener('load', function() {
    setTimeout(() => {
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        }, 500);
});

