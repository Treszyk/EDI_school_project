const author_section = document.querySelector('div#section_author');
const data_section = document.querySelector('div#section_data');
const internet_section = document.querySelector('div#section_internet');

const btn_data = document.querySelector('button#btn_data');
const btn_author = document.querySelector('button#btn_author');
const btn_internet = document.querySelector('button#btn_internet');
const btn_img_home = document.querySelector('img#btn_home');

const section_list = [author_section, data_section, internet_section];
const buttons = [btn_author, btn_data, btn_internet];

const hide_sections = () => {
    section_list.forEach(element => {
        element.style.setProperty('display', 'none');
    });
}

const unselect_buttons = () => {
    buttons.forEach(element => {
        element.style.setProperty('color', 'rgba(255, 255, 255, 0.55)');
    });
}
const nav_btn_clicked = (element_to_show, event) => {
    hide_sections();
    unselect_buttons();
    element_to_show.style.setProperty('display', 'flex');
    event.target.style.setProperty('color', 'white');
}

btn_img_home.addEventListener('click', (event) => {
    nav_btn_clicked(data_section, event)
})
btn_data.addEventListener('click', (event) => {
    console.log(data_section);
    //console.log('color: ', window.getComputedStyle(btn_author).getPropertyValue('color'));
    nav_btn_clicked(data_section, event);
    
});
btn_author.addEventListener('click', (event) => {
    nav_btn_clicked(author_section, event);
});
btn_internet.addEventListener('click', (event) => {
    nav_btn_clicked(internet_section, event);
});


//data_section.style.setProperty('display', 'none');

console.log(author_section);
console.log(data_section);
console.log(internet_section);