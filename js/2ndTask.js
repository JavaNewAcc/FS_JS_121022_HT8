window.onload = () => {
    let [...imgArr] = document.getElementsByTagName(`img`);
    console.log(imgArr);
    let imgResultsDiv = document.querySelector(`.imgResults`);
    console.log(imgResultsDiv)
    let justAdded = ``;


    function imgSrcGet(arrElem) {
        return (arrElem.getAttribute('src'))
    }

    function imgAltGet(arrElem) {
        return (arrElem.getAttribute('alt'))
    }

    function onBtnClick(argument) {
        let activeLi = argument.parentElement;
        let infoSpan = document.createElement(`div`);
        infoSpan.innerHTML = `This is image with name ${argument.innerText} and it is stored at <a href="${argument.getAttribute(`href`)}">${argument.getAttribute(`href`)}</a>`;
        if (activeLi.getAttribute(`class`) != `added`) {
            activeLi.append(infoSpan);
            activeLi.setAttribute(`class`, `added`);
        }
        else return;
    }


    function imgInfoPrinter(imgArrElem) {
        let newLi = document.createElement(`li`);
        let newA = document.createElement('a');
        newLi.append(newA);
        newA.innerText = `${imgAltGet(imgArrElem)}`;
        newA.setAttribute(`href`, `${imgSrcGet(imgArrElem)}`);
        newA.setAttribute(`id`, `${parseInt(Math.random() * 100000000)}`);
        imgResultsDiv.appendChild(newLi);
        let infoBtn = document.createElement(`button`);
        infoBtn.innerText = `More info`;
        infoBtn.classList.add(`btn`, `btn-outline-secondary`, `m-2`);
        newLi.append(infoBtn);
        infoBtn.onclick = function () { onBtnClick(newA) }
    }

    imgArr.forEach(element => {
        imgInfoPrinter(element);
    }
    );


}