function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

let dataJSON;

function loadingJsonFile(){
readTextFile("BaseData.json", function(text){
dataJSON = JSON.parse(text);//закинули в переменную data данные из файла
//console.log(dataJSON);//вывели данные в консоль
});
}

let DataKey=[];
let DataBASEKey;
let loaddata = [];


function LOADarrKEY(txt){
    loadingJsonFile();//загрузка файла JSON в dataJSON
    setTimeout(() => loadGOOD(txt), 2000);
}

function loadGOOD(txt){
    editTXTAREAholder('загрузка базы данных')
    if (dataJSON === undefined){
        l('не успевает загрузиться json, или с ним что-то не так') 
        loadingJsonFile();//загрузка файла JSON в dataJSON
        setTimeout(() => inputDATAinbasearr(txt), 4000);
        if (dataJSON === undefined){
            editTXTAREAholder('Что-то не так с базой данных...не могу ее загрузить')
            return a('Сорь, но с Json что-то не так')}
    } else {
        editTXTAREAholder('Что найти? Я знаю - '+txt)
        l('c json все ок. начинаю запуск импорта базы') 
        setTimeout(() => inputDATAinbasearr(txt), 1000);
    }
}
function inputDATAinbasearr(txt){
loaddata = dataJSON[txt];
baseArray = loaddata;
}

function editTXTAREAholder(txt){ 
    let search = document.getElementById('search_engine')
    search.placeholder = txt;
}

function loadADMINbasedata(){
    LOADarrKEY("Инструкции Админов");
    
}

function loadCASHIERbasedata(){
    LOADarrKEY("Инструкции Кассиров");
}

function loadITbasedata(){
    LOADarrKEY("Инструкции IT-шников");
}
//начинаем загрузку БАЗ ДАННЫХ
