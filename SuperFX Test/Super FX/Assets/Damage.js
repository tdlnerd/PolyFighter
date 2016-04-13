var Meter : UI.Slider;
var Normal : Color;
function OnCollisionEnter (hit : Collision) {
	Meter.value -= (hit.transform.localScale.z / 10);
	GetComponent.<MeshRenderer>().material.color = Color.red;
}

function OnCollisionExit (hit : Collision) {
	GetComponent.<MeshRenderer>().material.color = Normal;
}

function Start () {
Normal = GetComponent.<MeshRenderer>().material.color;
}