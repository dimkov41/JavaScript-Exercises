function jsonTable(arr) {
    let html = "<table>\n";

    for (let row of arr){
        let obj = JSON.parse(row);

        html += "  <tr>\n"
        for (let key in obj){
            html += `        <td>${obj[key]}</td>\n`;
        }
        html += "  <tr>\n";
    }

    html += "</table>";

    console.log(html);
}

jsonTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']);