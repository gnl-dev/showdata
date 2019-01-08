"use strict";

let data_title = ['Column 1','Column 2','Column 3','Column 4'];
let data = [
  ['1 reps', '4 reps','1 reps', '4 reps'],
  ['2 reps', '5 reps','1 reps', '4 reps'],
  ['3 reps', '6 reps','1 reps', '4 reps'],
  ['4 reps', '6 reps','1 reps', '4 reps'],
  ['5 reps', '6 reps','1 reps', '4 reps'],
  ['6 reps', '6 reps','1 reps', '4 reps'],
  ['7 reps', '6 reps','1 reps', '4 reps'],
  ['8 reps', '4 reps','1 reps', '4 reps'],
  ['9 reps', '5 reps','1 reps', '4 reps'],
  ['10 reps', '6 reps','1 reps', '4 reps'],
  ['11 reps', '6 reps','1 reps', '4 reps'],
  ['12 reps', '6 reps','1 reps', '4 reps'],
  ['13 reps', '6 reps','1 reps', '4 reps'],
  ['14 reps', '6 reps','1 reps', '4 reps']
];

let app = new GnlCreateShowData(data_title,data,"data");


function log(str) {
  console.log(str);
}