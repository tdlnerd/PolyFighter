var Ship : GameObject;

function Start () {

}

function Update () {

	if (Ship == null) {
	Ship = GameObject.Find("Ship");
	}
var dist = Vector3.Distance(Ship.transform.position, transform.position);
if (dist < 600) {
transform.LookAt(Ship.transform);
}
	}