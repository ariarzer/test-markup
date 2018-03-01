const setCSSVar = (element, key, value) => element.style.setProperty(`--${key}`, value);
const isChecked = (name) => document.getElementById(name).checked;

var indicatorArrow = document.getElementById('indicator_arrow');

var checkboxList = document.querySelectorAll('[data-skills-checkbox]');

for(var i = 0; i < 12; i++){
  checkboxList.item(i).addEventListener('change', function (){
    rotateArrow(this.checked);})
}

var rotate = -90;

for(var i = 1; i <= 12; i++){
  rotate += (180 / 12) * (isChecked('skills_' + i.toString().padStart(3, '0')) ? +1 : 0);
}
setCSSVar(indicatorArrow, "rotate", rotate + 'deg');

function rotateArrow(value){
  rotate += (180 / 12) * (value ? +1 : -1);
  setCSSVar(indicatorArrow, "rotate", rotate + 'deg');
}
