var express = require('express');
var router = express.Router();

/* Главная */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Континенты',
    text: 'Континент — это крупный массив земной коры, большая часть которого не покрыта водой, а окраины находятся ниже уровня океана. Иногда можно услышать также слово «материик», которое обозначает ровно тоже самое, так это синоним слова «континент». Всего существует 6 континентов: Евразия, Африка, Северная Америка, Южная Америка, Антарктида, Австралия. Каждый из них отличается размером, животным и этническим разнообразием, климатом и так далее. <br> <br> По положению относительно экватора и истории образования материки могут находиться на северном или южном земном полушарии. К северным материкам относятся Евразия и Северная Америка, к южным - Южная Америка, Африка, Австралия и Антарктида. Как можно заметить, названия полушария, в котором находиться материк, практически ничего общего не имеет с его климатом. <br> <br> Все материки, кроме Антарктиды и Австралии, имеют форму, сужающуюся к югу. Это оказывает большое влияние на климат в разных частях материка. Южная Америка, Африка и Австралия лежат в основном в жарком тепловом пояcе, Северная Америка и Евразия широкими северными частями расположены в умереном и холодном тепловых поясах.'
  });
});

/* Евразия */
router.get('/eurasia', function(req, res, next){
  res.render('continent', {
    title: "Евразия", 
    picture: "./images/eurasia.png",
    desc: "Евразия – крупнейший материк на Земле, состоящий из двух частей света: Европы и Азии – он занимает 1/3 всей суши на планете, и со всех сторон омывается водами Мирового океана. Благодаря своей внушительной площади, материк Евразия обладает самыми значимыми природными объектами и высокой численностью населения."
  })
});

/* Африка */
router.get('/africa', function(req, res, next){
  res.render('continent', {
    title: "Африка", 
    picture: "./images/africa.png",
    desc: "Африка является самым крупным материком после Евразии: экватор пересекает эту часть света почти посередине. На территории материка Африка находится 55 государств.  Как и любой другой материк Африка имеет свое географическое положение, крайние точки, климатические пояса, на территории которых она расположена."
  })
});

/* Северная Америка */
router.get('/north_america', function(req, res, next){
  res.render('continent', {
    title: "Северная Америка", 
    picture: "./images/north_america.png",
    desc: "Северная Америка – третий по площади материк после Африки и Евразии. Чтобы дать полную информацию о континенте, необходимо составить план описания Северной Америки. Прежде всего необходимо выяснить географическое положение, климатические условия, сведения о рельефе и его размеры."
  })
});

/* Южная Америка */
router.get('/south_america', function(req, res, next){
  res.render('continent', {
    title: "Южная Америка", 
    picture: "./images/south_america.png",
    desc: "Южная Америка — южный континент в Америке, расположенный в основном в Западном и Южном полушариях Земли, частично — в Северном полушарии. Омывается водами двух океанов: Тихого и Атлантического, а также Карибским морем, которое является естественным рубежом между двумя Америками."
  })
});

/* Австралия */
router.get('/australia', function(req, res, next){
  res.render('continent', {
    title: "Австралия", 
    picture: "./images/australia.png",
    desc: "Наименьшая из известных частей света, которая находится в южном полушарии. Площадь территории включая острова составляет около 7,7 млн. км. кв. Восточные рубежи материка омываются водами  Тихого океана. Наивысшей точкой Австралии является пик Косцюшко – 2228 м.,  а самая низшая точка это озеро Эйр -16 м. ниже уровня моря. На основной территории Австралии и Океании климатические условия напоминают тропический сухой и континентальный, климат. Восточные же рубежи уже характеризуются влажным климатом. Северная оконечность находится во власти экваториального климата. В юго-западной и юго-восточной прибрежных зонах, включая остров Тасмания, – климат преимущественно субтропический морской."
  })
});

/* Антарктида */
router.get('/antarctica', function(req, res, next){
  res.render('continent', {
    title: "Антарктида", 
    picture: "./images/antarctica.png",
    desc: "Антарктида — континент, расположенный на самом юге Земли, центр Антарктиды примерно совпадает с южным географическим полюсом. Материк Антарктида омывается водами  Атлантического, Индийского и Тихого океанов, иногда неофициально выделяемых в отдельный Южный океан. В самой южной части нашей планеты находится огромный материк, покрытый вечными льдами. Антарктида на юге является не только самым холодным, но и самым безлюдным континентом. Его омывают воды 13 морей."
  })
});

module.exports = router;
