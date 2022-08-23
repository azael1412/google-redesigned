const body = document.body;
const footer = document.getElementById('footer');
const btnTheme = document.getElementById('btn-theme');
const iconApp = document.getElementById('icon-app');
const whereYouAre = document.getElementById('where-you-are');
/**
 * If the flag is true, add the moon icon and remove the sun icon, otherwise add the sun icon and
 * remove the moon icon.
 * @param [flag=true] - true or false
 */
const darkThemeButton = (flag = true) => {
    if (flag) {
        btnTheme.classList.add('fa-moon');
        btnTheme.classList.remove('fa-sun');
        iconApp.src='./img/apps-light.png';
        whereYouAre.src='./img/where-you-are.png';
    }else {
        btnTheme.classList.add('fa-sun');
        btnTheme.classList.remove('fa-moon');
        iconApp.src='./img/apps-dark.png';
        whereYouAre.src='./img/where-you-are-dark.png';
    }
}

/* Checking if the user has dark mode enabled on their device. If they do, it will add the dark-mode
class to the body and remove the footer class and add the dark-mode class to the footer. If they
don't have dark mode enabled, it will remove the dark-mode class from the body and add the footer
class and remove the dark-mode class from the footer. */
window.addEventListener('load',() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const loader = document.getElementById('loader');
    const pageWrapper = document.getElementById('page-wrapper');
    setTimeout(() => {
        loader.style.display = 'none';
        pageWrapper.style.display = 'block';
    }, 600);
    if(isDarkMode){
        darkThemeButton(false);
        body.classList.add('dark-mode');
        footer.classList.remove('footer');
        footer.classList.add('dark-mode');
    } else {
        darkThemeButton();
        body.classList.remove('dark-mode');
        footer.classList.add('footer');
        footer.classList.remove('dark-mode');
    }
});

/**
 * If the body has the class "dark-mode", then run the darkThemeButton function. Otherwise, run the
 * darkThemeButton function with the argument false.
 */
function changeTheme() {
    if (body.classList.contains("dark-mode")){
        darkThemeButton();
    } else {
        darkThemeButton(false);
    }
    body.classList.toggle("dark-mode");
    footer.classList.toggle("footer");
    footer.classList.toggle("dark-mode");
}