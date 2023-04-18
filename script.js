window.onload = function() {
clearBODY();//чистка страницы, все что выше - будет стерто
//теперь все остальное
create_new_txtbox('search_engine','pageMenu', '1')
CreateNewButton('createKASSA', 'Как сделать Кассу', 'test.pdf')
}
//глобальные переменные
let pageMenu = '<input id="clearButton" type="button" value="В начало" onclick="restartPage();" />'+
'<div id="alltxtbox"></div> '+
'<div id="pageMenu"></div>'+
'<div id="buttons"></div>'+
' <div id="adminpanel"></div> </div>';
//ФУНКЦИИ ДВИЖКА
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

function clearBODY(){// очистить страницу
document.body.innerHTML = pageMenu; }
//create_new_object('id создаваемого объекта','id куда добавить элемент', 'ширина', 'длина вниз', 'какой элемент - div или canvas')
function create_new_object(newid,id, width, height, element )//создать новый текстбокс
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