window.onload = () => {
    let [...parentElem] = document.getElementsByClassName(`startingPoint`);
    let headerNamesArr = [];
    let table = "";
    let thCreated = false;

    function createTHead(headerNames) {
        [...headerNamesArr] = headerNames.split(',');
        table = document.createElement('table');
        table.setAttribute('class', 'table');
        table.classList.add('table-striped', 'text-center');
        let tableHead = document.createElement('tr');
        headerNamesArr.forEach(element => {
            let th = document.createElement('th');
            th.append(element);
            tableHead.appendChild(th);
        });
        table.append(tableHead);
        parentElem[0].append(table);
        thCreated = true;
    }

    function deleteTable() {
        parentElem[0].removeChild(table);
    }

    function createTElement(elementData) {
        let [...elementDataArr] = elementData.split(',');
        let tableRow = document.createElement('tr');
        elementDataArr.forEach(element => {
            let td = document.createElement('td');
            td.append(element);
            tableRow.appendChild(td);
        });
        table.append(tableRow);
        parentElem[0].append(table);
    }

    function removeElement() {
        let [...lastElement] = document.getElementsByTagName('tr');
        table.removeChild(lastElement[lastElement.length - 1]);
    }

    document.getElementById('AddTableHead').onclick = function () {
        if (!thCreated) { createTHead(prompt('Будь ласка, введіть заголовки стовбців через кому')) }
        else { alert(`Заголовок таблиці вже створено`); return }
    };

    document.getElementById('AddTableRow').onclick = function () {
        if ([...document.getElementsByTagName('th')][0] != null) {
            createTElement(prompt(`Будь ласка, введіть данны стовбців через кому (у форматі: ${headerNamesArr})`));
        }
        else { alert("Спочатку додайте заголовок таблиці"); return }
    }

    document.getElementById('DeleteTale').onclick = function () {
        deleteTable();
        thCreated = false;
    }

    document.getElementById('DelLastTableRow').onclick = function () {
        if ([...document.getElementsByTagName('td')][0] != null) { removeElement(); }
        else { alert(`Таблиця не заповнена`) }
    }

}