var indicatorArrow = document.getElementById('indicator_arrow');

var checkboxList = document.querySelectorAll('[data-skills-checkbox]');

var skillList = [];

const setCSSVar = (element, key, value) => element.style.setProperty(`--${key}`, value);

var i = 0;
while(!(checkboxList.item(i) === null)){
  skillList.push(new SkillCheckbox(checkboxList.item(i)));
  i++;
}

var rotate = initCorner(skillList);

function rotateArrow(value){
  rotate += (180 / 12) * (value ? +1 : -1);
  setCSSVar(indicatorArrow, "rotate", rotate + 'deg');
}

function SkillCheckbox(element){
  this.block = element;
  this.id =  element.id;
  this.checked = element.checked;

  var self = this;
  element.addEventListener('change', function (){
    rotateArrow(this.checked);
    self.checked = element.checked;
  })
}

function initCorner(skillList){
  var rotate = -90;

  var i = 0;
  while(!(checkboxList.item(i) === null)){
    rotate += (180 / 12) * (skillList[i].checked ? +1 : 0);
    i++;
  }
  setCSSVar(indicatorArrow, "rotate", rotate + 'deg');

  return rotate;
}
