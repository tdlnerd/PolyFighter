var Dam = 0.1;
var Bar : UI.Slider;
var Explosion : GameObject;
function Update () {
if (Bar.value <= 0) {
Boom();
}
}

function OnCollisionEnter (hit : Collision) {
	if (hit.gameObject.tag == "Spark") {
	Bar.value -= Dam;
	}
}

function Boom () {
Instantiate(Explosion, transform.position, transform.rotation);
Destroy(gameObject);
}