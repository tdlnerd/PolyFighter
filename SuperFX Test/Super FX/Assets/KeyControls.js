var movespeed = 15;
var rotatespeed = 15;
function Start () {

}

function Update () {
	if (Input.GetKey("left")) {
		transform.Translate(Vector2.left * (Time.deltaTime * rotatespeed));
		}
	if (Input.GetKey("right")) {
	transform.Translate(Vector2.right * (Time.deltaTime * rotatespeed));
	}
	if (Input.GetKey("up")) {
	transform.Translate(Vector2.up * (Time.deltaTime * rotatespeed));
	}
	if (Input.GetKey("down")) {
	transform.Translate(Vector2.down * (Time.deltaTime * rotatespeed));
	}
	if (Input.GetKey("x") && movespeed < 60) {
	movespeed += 5; 
	}
	if (Input.GetKey("z") && movespeed > 10) {
	movespeed -= 5; 
	}

}