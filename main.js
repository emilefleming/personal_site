function updateSize() {
    var hArrowList = document.getElementsByClassName('hdimension'),
        vArrowList = document.getElementsByClassName('vdimension');
    for (var i = 0; i < hArrowList.length; i++) {
        var dimParent = hArrowList[i].parentNode,
            thisWidth = dimParent.offsetWidth;
        hArrowList[i].innerHTML = thisWidth;
    }
    for (var i = 0; i < vArrowList.length; i++) {
        var dimParent = vArrowList[i].parentNode,
            thisHeight = dimParent.offsetHeight;
        vArrowList[i].innerHTML = thisHeight;
    }
}

function toggleActive() {
    var maybeActive = document.getElementsByClassName('active');
    for (var i = 0; i < maybeActive.length; i++) {
        maybeActive[i].classList.toggle('active');
    }
    event.target.classList.toggle('active');
}
