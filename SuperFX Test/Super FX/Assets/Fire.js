var RPrefab : Rigidbody;

function Update () {
	if (Input.GetKeyDown("x")) {
	var rocket : Rigidbody;
        rocket = Instantiate(RPrefab, transform.position, transform.rotation);
	}
}