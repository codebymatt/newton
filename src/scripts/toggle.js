toggle(id) {
    var oldHighlighted = document.getElementsByClassName(highlighted);
    var newHighlighted = document.getElementById(id)
    oldHighlighted.classList.remove('highlighted');
    oldHighlighted.classList.add('card');
    newHighlighted.classList.remove('card');
    newHighlighted.classList.add('highlighted');
}
