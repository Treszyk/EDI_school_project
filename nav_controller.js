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
        element.classList.remove('selected');
    });
}

const nav_btn_clicked = (element_to_show, clicked_button) => {
    hide_sections();
    unselect_buttons();
    element_to_show.style.setProperty('display', 'flex');
    clicked_button.classList.add('selected');
}

btn_img_home.addEventListener('click', () => {
    nav_btn_clicked(data_section, btn_data)
})
btn_data.addEventListener('click', (event) => {
    console.log(data_section);
    nav_btn_clicked(data_section, event.target);
});
btn_author.addEventListener('click', (event) => {
    nav_btn_clicked(author_section, event.target);
});
btn_internet.addEventListener('click', (event) => {
    nav_btn_clicked(internet_section, event.target);
});
