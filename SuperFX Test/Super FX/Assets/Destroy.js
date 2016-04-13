var Bar : UI.Slider;
function Start () {

}

function Update () {
if (Bar.value < 1) {
Destroy(gameObject);
}
}