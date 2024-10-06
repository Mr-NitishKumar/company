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

document.getElementById('theme-toggle').addEventListener('click', () => {
    const currentTheme = document.getElementById('htmltheme').dataset.bsTheme;
    if (currentTheme === 'light') {
        changetodarktheme();
    } else {
        changetolighttheme();
    }
});
