let infoIsHide = true;

function openorclose() {
    switch (infoIsHide) {
        case true:
            document.getElementById("InfoPanel").style.display = "flex";
            infoIsHide = false;
            break;
        case false:
            document.getElementById("InfoPanel").style.display = "none";
            infoIsHide = true;
            
            break;
        default:
            alert("Ошибка");
            break;
    }
}

function Scroll(whoblock) {
    switch (whoblock) {
        case 'block1':
            document.getElementById('n1').scrollIntoView({block: "end"});
            break;
        case 'block2':
            document.getElementById('n2').scrollIntoView({block: "end"});
            break;
        case 'block3':
            document.getElementById('n3').scrollIntoView({block: "end"});
            break;
        case 'block4':
            document.getElementById('n4').scrollIntoView({block: "end"});
            break;
        case 'block5':
            document.getElementById('n5').scrollIntoView({block: "end"});
            break;
    
        default:
            break;
    }
}