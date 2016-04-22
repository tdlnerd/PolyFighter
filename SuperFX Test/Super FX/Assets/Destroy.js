var Bar : UI.Slider;
function Start () {

}

function Update () {
if (Bar.value <= 0) {
Destroy(gameObject);
}
}