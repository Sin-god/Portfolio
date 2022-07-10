function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }
  function kickImg() {
    var w = document.getElementById("targetDiv").offsetWidth;
    var h = document.getElementById("targetDiv").offsetHeight;
    var dx = randomInteger(0, w - 100);
    var dy = randomInteger(0, h - 100);
    document.getElementById('targetImg').style.position = 'relative';
    document.getElementById('targetImg').style.display = 'block';
    document.getElementById('targetImg').style.top = dy + 'px';
    document.getElementById('targetImg').style.left = dx + 'px';
    document.querySelector('#targetImg p').innerHTML = "dx = " + dx + ",<br> dy = " + dy;
    console.log("dx = " + dx + ", dy = " + dy);
  }
  document.getElementById('moveImg').addEventListener('click', kickImg);