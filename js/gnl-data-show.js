
/*********************************
 * Name : GnlCreateDataSheet
 * Version : 0.alpha1 05002019
 * About : Show table informations
 * Author :  GNL
 * Company : GNL Company
 * Comment : To do what you dont like it !
 * Dependences : gnl-show-data.js
 **************************************************/
"use strict";

/******************************
 * Show Data :
 * data_title = <table: title list>
 * data_list = <table: datas>
 * el = id html for table
 *  */

function GnlShowData(data_title,data_list,el=null) {
  if(typeof(el) !== "string" || Array.isArray(data_title) == false || Array.isArray(data_list)==false) {
    console.log("<Gnl: ShowData> Declaration is not correct");
    return -1;
  }
  let str_el = el;
  if((el = document.getElementById(el) || null) == null) {
    console.log("<Gnl: ShowData> Opt.el is missing or not defined");
    return -1;
  }

  // Setting main div
  let table = document.createElement("table");
  table.id = str_el + "gnl-table-auto";
  if(document.getElementById(table.id)!== undefined) document.getElementById(table.id).remove();
  table.className = "gnl-data-show";
  let str = `<thead><tr>`;
  for(let i=0;i<data_title.length;i++) {
    str+=`<th>${data_title[i]}</th>`;
  }
  str+=`<th class='action-btn'>Action</th>`;
  str+=`</tr></thead>`;
  str += `<tbody>`
  for(let i=0;i<data_list.length;i++) {
    str+=`<tr>`;
    for(let j=0;j<data_list[i].length;j++) {
      str+=`<th>${data_list[i][j]}</th>`;
    }
    str+=`<th class='action-btn'><span></span></th>`;
    str+=`</tr>`;
  }
  str+=`</tbody>`;
  table.innerHTML += str;
  el.appendChild(table);

  // Draw Navigation buttons



}