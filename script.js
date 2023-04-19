window.onload = function() {
clearBODY();//чистка страницы, все что выше - будет стерто
//теперь все остальное
createFindtxtbox('search_engine','pageMenu', '1')
//CreateNewButton('createKASSA', 'Как сделать Кассу', 'test.pdf') //для теста 
EnterFunction();
CreateButtonsFromArrayBase();

}
//БАЗА 
let baseArray = ["как сделать кассу/test.pdf", "собрать скуд/test.pdf", "сломался принтер/test.pdf", "переустановка windows/test.pdf", "убрать браунзер/test.pdf"];     
//глобальные переменные
let searchValue;
let pageMenu = '<input id="clearButton" type="button" value="В начало" onclick="restartPage();" />'+
'<div id="alltxtbox"></div> '+
'<div id="pageMenu"></div>'+
'<div id="Loaderbuttons"></div>'+
'<p>'+
'<div id="buttons"></div>'+
' <div id="adminpanel"></div> </div>';
//ФУНКЦИИ ДВИЖКА basebaseArray
function clearLoaderButtons(){
    document.getElementById('Loaderbuttons').innerHTML='';
}
function Find(txt){
    function notTogether(str) {
      let lowcase = str.toLowerCase();
        return lowcase.split``.join(".*");
    }
    let arrFindtxt = baseArray;
    arrFindtxt.filter(word => word.match(new RegExp(notTogether(txt), "s"))).forEach(e => { console.log('найден запрос -'+e);
    let ValueForButtons = e.split('/');
    l(ValueForButtons);
    CreateLoaderButton('loaderButton', ValueForButtons[0],ValueForButtons[1])
}); //создание кнопок поика
//CreateNewButton('loaderButton', ValueForButtons[0],ValueForButtons[1])
  
}
function CreateButtonsFromArrayBase(){
let Arr = baseArray;
for (let i = 0; i < Arr.length; i++){//цикл позваолиющий повторять одно и тоже действие, пока не закончатся строки
    //функция при прочтении строки
let ReadedLineArr = Arr[i].split('/');//добавим в переменную инфу из строки массива
l('название базы '+ReadedLineArr[0]+', создаю кнопку - '+ReadedLineArr[1])
    CreateNewButton('standartButton', ReadedLineArr[0],ReadedLineArr[1])
  }

//CreateNewButton('button', 'Как сделать Кассу arrLine[0]', 'test.pdf - arrLine[1]')
}

function EnterFunction(){
let searchTXTBOX = document.getElementById('search_engine')
searchTXTBOX.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {FindingNow();}  //cфункции при нажатии Ентер
    else {FindingNow();
    }
                                                     });
                        }
function FindingNow(){//что происходит при поиске
clearLoaderButtons();//очистить загрузочное меню(меню с загружаемыми кнопками)
searchValue = document.getElementById('search_engine').value;
l('в текстбоксе вижу - '+searchValue)
Find(searchValue);
}

function restartPage(){location.reload ();}
//создаем кнопку сброс
function clearbut() {
const clearbut = document.createElement('button');
clearbut.innerText = 'В начало';
clearbut.id = 'clearbutton';
      //какая функция при нажатии
      clearbut.addEventListener('click', () => {
        restartPage();
    })
    document.querySelector('#buttons').appendChild(clearbut)
  }
  //CreateNewButton('createKASSA', 'Как сделать сделать Кассу', 'test.pdf')
function CreateNewButton(id,namebutt,url){//создать новую кнопку с новой логикой функций - НЕДОДЕЛАН!!!
  let new_button = document.createElement('button')
   // добавляем название кнопки
   new_button.innerText = namebutt
    // добавляем айди кнопки
    new_button.id = id;
    new_button.addEventListener('click', () => {
    //какие фукнкции исполняет кнопка при нажатии 
    clearBODY();//чистка страницы
    FilterLoadFILE(url);//загрузка страницы инструкций
  })
  document.querySelector('#buttons').appendChild(new_button)//создать кнопку в определенном месте (в айди баттон)
  l('кнопка создана '+namebutt)
                                         }

function CreateLoaderButton(id,namebutt,url){//создать новую кнопку с новой логикой функций - НЕДОДЕЛАН!!!
  let new_button = document.createElement('button')
   // добавляем название кнопки
   new_button.innerText = namebutt
    // добавляем айди кнопки
    new_button.id = id;
    new_button.addEventListener('click', () => {
    //какие фукнкции исполняет кнопка при нажатии 
    FilterLoadFILE(url);//загрузка страницы инструкций
  })
  document.querySelector('#Loaderbuttons').appendChild(new_button)//создать кнопку в определенном месте (в айди баттон)
  l('кнопка создана '+namebutt)
                                         }


function clearBODY(){// очистить страницу
document.body.innerHTML = pageMenu; }
//create_new_object('id создаваемого объекта','id куда добавить элемент', 'ширина', 'длина вниз', 'какой элемент - div или canvas')
function create_new_object(newid,id, width, height, element )//создать новый 
{
let new_object = document.createElement(''+element);
new_object.width=width;
new_object.height= height;
new_object.id=newid; 
//document.body.appendChild(canvas) 
document.getElementById(id).appendChild(new_object) 
}


//create_new_txtbox('id создаваемого объекта','id куда добавить текстбокс', 'длина текстбокса - 5')
function create_new_txtbox(txt,id, rows)//создать новый текстбокс
{
let txtbox = document.createElement('textarea');
txtbox.cols=150;//ширина
txtbox.rows=rows; //вниз сколько - длмна
txtbox.id=txt; //подключили айди
//document.body.appendChild(txtbox) 
document.getElementById(id).appendChild(txtbox) 
}

function createFindtxtbox(txt,id, rows)//создать новый текстбокс
{
let txtbox = document.createElement('textarea');
txtbox.cols=150;//ширина
txtbox.rows=rows; //вниз сколько - длмна
txtbox.id=txt; //подключили айди
//document.body.appendChild(txtbox)
document.getElementById(id).appendChild(txtbox)
}

// edit_object('id изменяемого объекта', 'txt' или название переменной)
function edit_object(id, txt){//изменить элемент по его id, например текстбокс
    let idd='#'+id
    document.querySelector(idd).innerHTML = txt;
}

function a(txt){
    alert(''+txt)
}

function l(txt){
    console.log(''+txt)
}