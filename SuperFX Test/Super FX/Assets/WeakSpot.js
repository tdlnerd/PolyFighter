var Dam = 0.1;
var Bar : UI.Slider;
function Start () {

}

function OnCollisionEnter (hit : Collision) {
	if (hit.gameObject.tag == "Spark") {
	Bar.value -= Dam;
	}
}