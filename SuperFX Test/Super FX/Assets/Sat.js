var Ship : GameObject;
var Enemies : GameObject;
var Reload = true;
function Start () {

}

function Update () {
	if (Ship == null) {
	Ship = GameObject.Find("Ship");
	}
var dist = Vector3.Distance(Ship.transform.position, transform.position);
if (dist < 200 && Reload == true) {
		LaunchEnemy();
		}
}

function LaunchEnemy() {
Reload = false;
Instantiate(Enemies, transform.position, transform.rotation);
yield WaitForSeconds (Random.Range(2,10));
Reload = true;
}