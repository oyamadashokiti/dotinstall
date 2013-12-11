
function getOmikuji() {
  var omikuji = ["大吉", "中吉", "凶", "大凶", "末吉", "吉"];
  var num = Math.floor(Math.random() * omikuji.length);
  return omikuji[num];
}

function displayOmikuji() {
  var omikuji = '';
  omikuji = getOmikuji();
  if (omikuji = "大吉") {
    omikuji += "！！！！";
  }
  document.getElementbyId('result').innerHTML = omikuji;
}
