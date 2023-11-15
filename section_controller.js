const author_section = document.querySelector('div#section_author');
const data_section = document.querySelector('div#section_data');
const internet_section = document.querySelector('div#section_internet');

const btn_data = document.querySelector('button#btn_data');
const btn_author = document.querySelector('button#btn_author');
const btn_internet = document.querySelector('button#btn_internet');
const btn_img_home = document.querySelector('img#btn_home');

const section_list = [author_section, data_section, internet_section];
const buttons = [btn_author, btn_data, btn_internet];
const ten_json_table = document.querySelector('table#first_ten tbody');

//const display_json = (json) => {
//    const json_keys = Object.keys(json[0]);
//    for(let i=0; i<10; i++) {
//        let row_element = document.createElement('tr');
//        row_element.innerHTML=`<td>${i}`;
//        for(let j=0; j<10; j++) {
//            let row_cell = document.createElement('td');
//            row_cell.innerHTML = json[i][json_keys[j]];
            //console.log(row_cell);
            //console.log(row_cell);
//            row_element.appendChild(row_cell);
//        }
//        ten_json_table.appendChild(row_element);
//        console.log(row_element);
        //add the remaining columns after you generate proper data
//        ten_json_table.appendChild(row_element);
//    }
//    json.forEach(row => {
        //console.log(row);
//    });
//}

const load_json = () => {
    //loads only ten first rows for now, probably should change it later
    fetch('./MOCK_DATA.json').then(res => {
        res.json().then(res => {
            console.log();
            display_json(res);
            //console.log(res);
        });
    })
    console.log('finished');
}


load_json();
const hide_sections = () => {
    section_list.forEach(element => {
        element.style.setProperty('display', 'none');
    });
}

const unselect_buttons = () => {
    buttons.forEach(element => {
        //element.style.setProperty('color', 'rgba(255, 255, 255, 0.55)');
        element.classList.remove('selected');
    });
}
const nav_btn_clicked = (element_to_show, clicked_button) => {
    hide_sections();
    unselect_buttons();
    element_to_show.style.setProperty('display', 'flex');
    //event.target.style.setProperty('color', '#9645ff');
    clicked_button.classList.add('selected');
}

btn_img_home.addEventListener('click', () => {
    nav_btn_clicked(data_section, btn_data)
})
btn_data.addEventListener('click', (event) => {
    console.log(data_section);
    //console.log('color: ', window.getComputedStyle(btn_author).getPropertyValue('color'));
    nav_btn_clicked(data_section, event.target);
});
btn_author.addEventListener('click', (event) => {
    nav_btn_clicked(author_section, event.target);
});
btn_internet.addEventListener('click', (event) => {
    nav_btn_clicked(internet_section, event.target);
});



//data_section.style.setProperty('display', 'none');

console.log(author_section);
console.log(data_section);
console.log(internet_section);