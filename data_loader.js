const data_table = document.querySelector('table#data');
const data_holder_controls = document.querySelector('div#data_holder div#control_buttons')

const json_data = ''
const csv_data = ''
const xml_data = ''
const display_data = (json) => {//thank god I didnt delete this and btw seperate thes einto seperate files ffs the nav should be in another file
    const json_keys = Object.keys(json[0]);
    for(let i=0; i<900; i++) {
        let row_element = document.createElement('tr');
        for(let j=0; j<10; j++) {
            let row_cell = document.createElement('td');
            row_cell.innerHTML = json[i][json_keys[j]];
            //console.log(row_cell);
            //console.log(row_cell);
            row_element.appendChild(row_cell);
        }
        data_table.appendChild(row_element);
        //console.log(row_element);
        //add the remaining columns after you generate proper data
        data_table.appendChild(row_element);
    }
    json.forEach(row => {
        //console.log(row);
    });
}

const load_json = () => {
    //loads only ten first rows for now, probably should change it later
    fetch('./MOCK_DATA.json').then(res => {
        res.json().then(res => {
            console.log();
            display_data(res);
            //console.log(res);
        });
    })
    console.log('finished');
}

const load_csv = () => {
    fetch('./MOCK_DATA.csv').then(res => {
        console.log(res.text());
    })
}
//there's a problem with CORS policy

load_json();
load_csv();
