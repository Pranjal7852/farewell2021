var path = document.querySelectorAll("#pixo_svg path");
for (i = 0; i < path.length; i++) {
    var pathLength = path[i].getTotalLength();
    console.log(pathLength);
    
}