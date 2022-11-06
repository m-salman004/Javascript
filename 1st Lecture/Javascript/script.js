function textOne () {
    document.getElementById ('textOne'). innerHTML = 'Hello JavaScript !' ;
}
function bulbOn () {
    document.getElementById('bulbOn').src='images/pic_bulbon.gif';
}
function bulbOff () {
    document.getElementById('bulbOn').src='images/pic_bulboff.gif';
}
function printDocument () {
    document.getElementById('bulbOn').style.display = 'none';

    print();
}