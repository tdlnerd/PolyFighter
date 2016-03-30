var movespeed = 15;
var rotatespeed = 15;
function Start () {

}

function Update () {
	if (Input.GetKey("left") && transform.localPosition.x > -5) {
		transform.Translate(Vector2.left * (Time.deltaTime * rotatespeed));
		}
	if (Input.GetKey("right") && transform.localPosition.x < 5) {
	transform.Translate(Vector2.right * (Time.deltaTime * rotatespeed));
	}
	if (Input.GetKey("up") && transform.localPosition.y < 5) {
	transform.Translate(Vector2.up * (Time.deltaTime * rotatespeed));
	}
	if (Input.GetKey("down") && transform.localPosition.y > -5) {
	transform.Translate(Vector2.down * (Time.deltaTime * rotatespeed));
	}
	if (transform.localPosition.x > 7 || transform.localPosition.x < -7 || transform.localPosition.y > 7 || transform.localPosition.y < -7 || transform.localPosition.z > 1 || transform.localPosition.z < -1) {
	transform.localPosition = Vector3(0,0,0);
	}

}