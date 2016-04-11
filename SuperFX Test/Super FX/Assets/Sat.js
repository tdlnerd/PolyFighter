var Ship : GameObject;
var Enemies : GameObject;

function Start () {

}

function Update () {
	if (Ship == null) {
	Ship = GameObject.Find("Ship");
	}
var dist = Vector3.Distance(Ship.transform.position, transform.position);
if (dist < 200) {
		Instantiate(Enemies, transform.position, transform.rotation);
		}
}