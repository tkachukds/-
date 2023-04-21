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
loadingJsonFile();//загрузка файла JSON в dataJSON
let DataKey=[];
let DataBASEKey;
let loaddata = [];
function LOADarrKEY(txt){
    l(''+txt)
loaddata = dataJSON[txt];
baseArray = loaddata;
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
