var anchors = document.getElementsByTagName('a');
anchors = Array.prototype.slice.call(anchors);

var paras = document.getElementsByTagName('p');
paras = Array.prototype.slice.call(paras);

anchors.forEach(function (anchor) {
/*    if (isBlack) {
        anchor.style.textDecoration = textDec;
        anchor.style.color = color;
        anchor.style.border_bottom = border_bottom;
    }
    else {
        textDec = anchor.style.textDecoration;
        color = anchor.style.color;
        border_bottom = anchor.style.border_bottom;
        */
        anchor.style.textDecoration = 'none';
        //anchor.style.border-bottom = 'none';
        anchor.style.color = 'black';
        //anchor.style.appearance = 'none';
    //}
});

paras.forEach(function (para) {
    para.style.maxWidth = '40em';
});

var lists = document.getElementsByTagName('ul');
lists = Array.prototype.slice.call(lists);
lists.forEach(function (list) {
    list.style.maxWidth = '40em';
});

