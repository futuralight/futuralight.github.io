








function doalert(checkboxElem) 
{

  var card = checkboxElem.parentNode;
var child = null;

for (var i = 0; i < card.childNodes.length; i++) {
    if (card.childNodes[i].className == "c2"||card.childNodes[i].className == "c1") {
      child = card.childNodes[i];
      break;
    }    }

if(child.className=="c2")
{
  child.className="c1";
}
else{

    child.className="c2";
}




}

function doalertb(buttn) 
{

  var card = buttn.parentNode;
var child = null;

for (var i = 0; i < card.childNodes.length; i++) {
    if (card.childNodes[i].className == "c2"||card.childNodes[i].className == "c1") {
      child = card.childNodes[i];
      break;
    }    }

if(child.className=="c2")
{
  child.className="c1";
}
else{

    child.className="c2";
}




}
