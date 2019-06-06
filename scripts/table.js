function Table(divId, tableId, list) {
    let table = {
        div: divId,
        table: tableId,
        list: list,
        draw: function() {
            let t = document.createElement('table');
            t.setAttribute('id', this.table);
            t.setAttribute('class', 'table table-striped thead-dark');
            let div = document.getElementById(this.div);
            if(div.childNodes.length > 0) {
                document.getElementById(divId).removeChild(div.childNodes[0]);
            }
            document.getElementById(divId).appendChild(t);
            let table = document.getElementById(tableId);
            let thead = document.createElement('thead');
            table.appendChild(thead);
            let row = document.createElement('tr');
            let cell = document.createElement('th');
            let text = document.createTextNode('ID')
            cell.appendChild(text)
            row.appendChild(cell);
            cell = document.createElement('th');
            text = document.createTextNode('DENSITY')
            cell.appendChild(text)
            row.appendChild(cell);
            thead.appendChild(row)
            let tbody = document.createElement('tbody');
            list.forEach(element => {
                row = document.createElement('tr');
                cell = document.createElement('td');
                text = document.createTextNode(element.id)
                cell.appendChild(text)
                row.appendChild(cell);
                tbody.appendChild(row);
                cell = document.createElement('td');
                text = document.createTextNode(element.density)
                cell.appendChild(text)
                row.appendChild(cell);
                tbody.appendChild(row);
            });
            table.appendChild(tbody)
        }
    }
    return table;
}