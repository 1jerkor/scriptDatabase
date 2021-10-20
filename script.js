

window.onload = loadFiles;

function loadFiles(){
    let fileList = getFileContent('list.json');
    let lst = JSON.parse(fileList);
    let i = 0;
    let att = '';
    console.log(lst)
    for (key in lst)
        {
            let txt = getFileContent(lst[key]);
            console.log(key)
            i = i  + 1;
            let att1 = 'header_' + i;
            let att2 = 'content_' + i;
            var x = document.createElement('p');
            x.setAttribute('class', 'file-name')
            x.setAttribute('id',att1);
            x.setAttribute('onclick','XD("' + att2 + '")');
            //x.innerText = i + ': ' + lst[key];
            x.innerText = lst[key];
            document.getElementById('p1').appendChild(x);
            var y = document.createElement('p');
            y.setAttribute('class', 'file-content')
            y.setAttribute('id', att2);
            y.innerText = txt;
            //y.innerHTML = txt;
            document.getElementById('p1').appendChild(y);
        }
    hideAll();
}


function getFileContent(myurl){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', myurl, false);
    xhr.send();
    return xhr.response;
}


function XD(h){
    console.log(h);
    hideAll();
    document.getElementById(h).style.display = 'inline';
}

function hideAll(){
    for (obj of document.getElementsByClassName('file-content')){
        obj.style.display = 'none';
    }
}
