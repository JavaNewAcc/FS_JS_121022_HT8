window.onload = () => {
    let ulElem = document.querySelector('ul');
    let count = 0;

    function addElement(text) {
        let newLiElem = document.createElement(`li`);
        newLiElem.innerText = text + ', ' + new Date().toUTCString();
        newLiElem.setAttribute('class', 'elementAdd')
        if (document.querySelector(`li:first-child`) != null) {
            document.querySelector(`li:first-child`).before(newLiElem);
            count++
        }
        else {
            ulElem.appendChild(newLiElem);
            count++
        }
    }

    function delLastElement() {
        let lastElem = ulElem.lastElementChild;
        ulElem.removeChild(lastElem);
        count--;
    }

    function btnAction(value) {
        if (count < 5) {
            addElement(value);
        }
        else {
            delLastElement();
            addElement(value);
        }
    }

    document.getElementById(`addItemBtn`).onclick = function () {
        if (document.querySelector('#inputText').value != "") {
            btnAction(document.querySelector('#inputText').value);

            document.querySelector('#inputText').value = "";
        }
    };

}