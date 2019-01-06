
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

let GnlTable = null;
let GnlThead = null;
let GnlTbody = null; 
let GnlMenu = null;

function GnlUpdateTitle(data_title,el) {
  if(GnlTable == null)
    return false;
  if ( GnlThead !== null) {
    GnlThead.remove();
    GnlThead = null;
  }

  GnlThead = document.createElement("thead");
  let str = `<thead><tr>`;
  for(let i=0;i<data_title.length;i++) {
    str+=`<th>${data_title[i]}</th>`;
  }
  str+=`<th class='action-btn'>Action</th>`;
  str+=`</tr></thead>`;
  GnlThead.innerHTML = str;
  if(GnlTable.firstChild !== null) {
    GnlTable.insertBefore(GnlThead,GnlTable.firstChild);
  }else GnlTable.appendChild(GnlThead);

  return true;
}

function GnlUpdateData(data_list,el,page,size) {
  if(GnlThead == null ||GnlTable == null)
    return false;
  if ( GnlTbody !== null) {
    GnlTbody.remove();
    GnlTbody = null;
  }

  GnlTbody = document.createElement("tbody");
  let str=``;
  for(let i=0;i<data_list.length;i++) {
    str+=`<tr>`;
    for(let j=0;j<data_list[i].length;j++) {
      str+=`<th>${data_list[i][j]}</th>`;
    }
    str+=`<th class='action-btn'><span></span></th>`;
    str+=`</tr>`;
  }
  str+=`</tbody>`;
  GnlTbody.innerHTML += str;
  GnlTable.appendChild(GnlTbody);
}

function GnlUpdateMenu(el) {
  if(GnlTable == null)
    return false;
  if(GnlMenu != null) {
    GnlMenu.remove();
    GnlMenu = null;
  }
  GnlMenu = document.createElement("div");
  GnlMenu.className = "gnl-data-show-menu";
  let str = `<ul>`;
  str+=`<li><a href='#'>Precedent</a></li><li><a href='#' class='page'>1</a></li><li><a href='#'>Suivant</a></li>`;
  str+=`</ul>`;
  GnlMenu.innerHTML = str;
  el.appendChild(GnlMenu);
//  el.insertAdjacentElement('beforeend',GnlMenu);
}


function GnlShowData(data_title,data_list,el=null,page,nb) {
  page = page || 1;
  nb = nb || 10;

  if(typeof(el) !== "string" || Array.isArray(data_title) == false || Array.isArray(data_list)==false) {
    console.log("<Gnl: ShowData> Declaration is not correct");
    return -1;
  }

  if((el = document.getElementById(el) || null) == null) {
    console.log("<Gnl: ShowData> Opt.el is missing or not defined");
    return -1;
  }
  if(GnlTable != null) GnlTable.remove();
  GnlTable = document.createElement("table");
  GnlTable.className="gnl-data-show";
  GnlUpdateTitle(data_title,el);
  GnlUpdateData(data_list,el,page,nb);
  el.appendChild(GnlTable);
  GnlUpdateMenu(el);

}
