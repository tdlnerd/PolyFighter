var movespeed = 15;
var rotatespeed = 15;
function Start () {

}

function Update () {
	if (Input.GetKey("left")) {
		transform.Rotate(Vector2.down * (Time.deltaTime * rotatespeed));
		}
	if (Input.GetKey("right")) {
	transform.Rotate(Vector2.up * (Time.deltaTime * rotatespeed));
	}
	if (Input.GetKey("up")) {
	transform.Rotate(Vector2.left * (Time.deltaTime * rotatespeed));
	}
	if (Input.GetKey("down")) {
	transform.Rotate(Vector2.right * (Time.deltaTime * rotatespeed));
	}
	if (Input.GetKey("x") && movespeed < 60) {
	movespeed += 5; 
	}
	if (Input.GetKey("z") && movespeed > 10) {
	movespeed -= 5; 
	}
	if (Input.GetKey("space")) {
	transform.Translate(Vector3.forward * (Time.deltaTime * movespeed));
	}
}