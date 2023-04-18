//что делать при переходе в процедурную 
function FilterLoadFILE(idProcedur){
 let FileFormat;
FileFormat = idProcedur.split('.');//разделим на название и формат файла ([test, pdf])
FileFormat = FileFormat[1].toLowerCase();//выбирем расширение и делаем все буквы маленькими
FileFormat = FileFormat.replace(/\s/g, "");//уберем все пробелы
 l('Определен формат - '+FileFormat)
if (FileFormat == 'pdf'){
    l("включается функция загрузки PDF")
    loadPDFFile(idProcedur);
}
 else {a('я не умею работать с форматом - '+FileFormat+'. Пожалуйста, обратитесь к Ткачуку Денису (создателю программы)')}

}


//ФУНКЦИИ СТРАНИЦЫ ПРОЦЕДУРНОЙ\

//загрузить инструкцию в текст бокс
function loadPDFFile(idProcedur){
let UrlFileProcedure ='src/'+idProcedur;
 modulLoadPDF(UrlFileProcedure);
}

function loadingHTML(url){//d текст боксе будет показаны действия из HTML

}
function loadingJS(url){//d текст боксе будет показаны действия из js

}
function loadingVIDEO(url){

}



//убрать_зависшего_пользователя_в_Кардтрее.docx