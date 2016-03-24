
var Ship : GameObject;

function Start () {

}

function Update () {
	if (Ship == null) {
	Ship = GameObject.Find("Ship");
	}
	var dist = Vector3.Distance(Ship.transform.position, transform.position);
		if (dist > 200) {
		GetComponent.<MeshRenderer>().enabled = false;
		}
		if (dist < 200) {
		GetComponent.<MeshRenderer>().enabled = true;
		}
}