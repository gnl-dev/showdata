
/*********************************
 * Name : GnlCreateDataSheet
 * Version : 0.alpha1 05002019
 * About : Show table informations
 * Author :  GNL
 * Company : GNL Company
 * Comment : To do what you dont like it !
 * Dependences : gnl-show-data.js
 **************************************************/
console.log("<Gnl: Data Show Module is loading>");
"use strict";


let GnlMenu = null;
let GnlShowDataOpt = {
  el_table: null,
  el_head: null,
  el_body: null,
  el_menu: null,
  data_title: null,
  data_list: null,
  table: null,
  head: null,
  body: null,
  menu: null,
  el: null,
  page: 1,
  el_page: null,
  nb: 5,
  start: null,
  end: null,
  suivant:GnlSDSuivant,
  precedent: GnlSDPrecedent,
  ajouter: GnlSDAjouter
};
function GnlSDAjouter() {
  console.log(GnlShowDataOpt);
  GnlModal('Ajouter un element','');

}
function GnlSDPrecedent() {
  if(GnlShowDataOpt.page-1<1)
    return false;
  GnlShowDataOpt.page--;
  GnlUpdateData();
  GnlShowDataOpt.el_page.textContent = GnlShowDataOpt.page;
  return true;  
}

function GnlSDSuivant() {
  if((GnlShowDataOpt.page)*GnlShowDataOpt.nb>GnlShowDataOpt.data_list.length)
    return false;
  GnlShowDataOpt.page++;
  GnlUpdateData();
  GnlShowDataOpt.el_page.textContent = GnlShowDataOpt.page;
  return true;  
}

function GnlUpdateTitle() {
  let data_title= GnlShowDataOpt.data_title;
  let el = GnlShowDataOpt.el;
  if(GnlShowDataOpt.el_table == null)
    return false;
  if ( GnlShowDataOpt.el_head !== null) {
    GnlShowDataOpt.el_head.remove();
    GnlShowDataOpt.el_head = null;
  }

  GnlShowDataOpt.el_head = document.createElement("thead");
  let str = `<thead><tr>`;
  for(let i=0;i<data_title.length;i++) {
    str+=`<th>${data_title[i]}</th>`;
  }
  str+=`<th class='action-btn'>Action</th>`;
  str+=`</tr></thead>`;
  GnlShowDataOpt.el_head.innerHTML = str;
  if(GnlShowDataOpt.el_table.firstChild !== null) {
    GnlShowDataOpt.el_table.insertBefore(GnlShowDataOpt.el_head,GnlShowDataOpt.el_table.firstChild);
  }else GnlShowDataOpt.el_table.appendChild(GnlShowDataOpt.el_head);

  return true;
}

function GnlUpdateData() {
  let data_list = GnlShowDataOpt.data_list;
  let el = GnlShowDataOpt.el;
  if(GnlShowDataOpt.el_head == null ||GnlShowDataOpt.el_table == null)
    return false;
  if ( GnlShowDataOpt.el_body !== null) {
    GnlShowDataOpt.el_body.remove();
    GnlShowDataOpt.el_body = null;
  }

  GnlShowDataOpt.el_body = document.createElement("tbody");
  let str=``;
  GnlShowDataOpt.start = (GnlShowDataOpt.page-1)*GnlShowDataOpt.nb;
  GnlShowDataOpt.end = ((GnlShowDataOpt.page -1)* GnlShowDataOpt.nb)+GnlShowDataOpt.nb;
  GnlShowDataOpt.end > data_list.length?GnlShowDataOpt.end = data_list.length:GnlShowDataOpt.end;
  GnlShowDataOpt.start < 0?0:GnlShowDataOpt.start;

    for(let i=GnlShowDataOpt.start;i<GnlShowDataOpt.end;i++) {
    str+=`<tr>`;
    for(let j=0;j<data_list[i].length;j++) {
      str+=`<th>${data_list[i][j]}</th>`;
    }
    str+=`<th class='action-btn'><span class='editer'></span><span class='delete'></span></th>`;
    str+=`</tr>`;
  }
  str+=`</tbody>`;
  GnlShowDataOpt.el_body.innerHTML += str;
  GnlShowDataOpt.el_table.appendChild(GnlShowDataOpt.el_body);
}

function GnlUpdateMenu() {
  if(GnlShowDataOpt.el_table == null)
    return false;
  if(GnlMenu != null) {
    GnlMenu.remove();
    GnlMenu = null;
  }
  let label;
  GnlMenu = document.createElement("div");
  GnlMenu.className = "gnl-data-show-menu";
  label = document.createElement("label");
  label.className = "menu-suivant";
  label.addEventListener("click",GnlShowDataOpt.suivant);
  GnlMenu.appendChild(label);

  label = document.createElement("label");
  label.textContent = GnlShowDataOpt.page;
  label.className = "static";
  GnlShowDataOpt.el_page = label;
  GnlMenu.appendChild(label);

  label = document.createElement("label");
  label.className = "menu-precedent";
  label.addEventListener("click",GnlShowDataOpt.precedent);
  GnlMenu.appendChild(label);

  label = document.createElement("label");
  label.className ="primary menu-ajouter";
  label.addEventListener("click",GnlShowDataOpt.ajouter);
  GnlMenu.appendChild(label);

  label = document.createElement("label");
  label.className = "primary menu-save";
  label.addEventListener("click",function(e){});
  GnlMenu.appendChild(label);

  GnlShowDataOpt.el.appendChild(GnlMenu);
//  el.insertAdjacentElement('beforeend',GnlMenu);
}


function GnlCreateShowData(data_title,data_list,el=null) {
  if(typeof(el) !== "string" || Array.isArray(data_title) == false || Array.isArray(data_list)==false) {
    console.log("<Gnl: ShowData> Declaration is not correct");
    return -1;
  }

  if((el = document.getElementById(el) || null) == null) {
    console.log("<Gnl: ShowData> Opt.el is missing or not defined");
    return -1;
  }
  GnlShowDataOpt.el = el;

  if(GnlShowDataOpt.el_table != null) GnlShowDataOpt.el_table.remove();
  GnlShowDataOpt.el_table = document.createElement("table");
  GnlShowDataOpt.el_table.className="gnl-data-show";
  GnlShowDataOpt.data_list = data_list;
  GnlShowDataOpt.data_title = data_title;
  GnlUpdateTitle(data_title,el);
  GnlUpdateData(data_list,el);
  el.appendChild(GnlShowDataOpt.el_table);
  GnlUpdateMenu(el);

}
