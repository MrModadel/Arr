
let arr = ['Muhammad', 'Azamat', 'Azim', 'Malika'];
let idx = prompt('name of student').trim();
let nameIdx = arr.indexOf(idx);
if (nameIdx === -1){
   alert("Такого ученика нету!")
} else {
   arr.splice(nameIdx,1);
   alert(arr);
};
