

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '';
    for (var i = 0; i <6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return '#' + color;
}

var currObjs = 0;
var familyName = 'Ettedgui';
var colors = {};
function addImage() {
    currObjs += 1;

    var div = document.createElement('div');
    div.className = "image";
    div.style.backgroundColor = getRandomColor();
    div.id = "div" + currObjs;
    var mainimage = document.createElement('div');
    mainimage.className = "mainImage";
    if (currObjs == 1) {
        mainimage.style.backgroundImage = 'url(images/add.png)';
        mainimage.classList.add('canClick');
        mainimage.onclick = addImage;
    }
    else
    {
        mainimage.style.backgroundImage = 'url(images/apple.png)';
        mainimage.style.display = 'none';
        mainimage.id = 'img' + currObjs;
        div.setAttribute("onClick", 'showimage(\'' + currObjs + '\')');
        colors[currObjs] = div.style.backgroundColor;
    }
    if (currObjs % 3 == 0)
    {
    var star = document.createElement('div');
    star.className = "star";
        div.appendChild(star);
    }
    div.appendChild(mainimage);
    document.getElementsByClassName('wrapper')[0].appendChild(div);
    
}

function showimage(image) {
    var id = image;
    var div = "div" + image;
    console.log(image);
    image = 'img' + image;
    console.log(image);
    if (document.getElementById(image).style.display == 'block') {
        document.getElementById(image).style.display = 'none';
        document.getElementById(div).style.backgroundColor = colors[id];
       
    }
    else {
        document.getElementById(image).style.display = 'block';
        document.getElementById(div).style.backgroundColor = "#fff";
    }
}

function addImages() {
    for (var i = 0; i < familyName.length * 2; i++) {
        addImage();
      
    }
}
