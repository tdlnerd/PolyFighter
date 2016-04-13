var Fire : GameObject;
function Update () {
transform.Translate(Vector3.forward * (Time.deltaTime * 100));
}
function OnCollisionEnter (hit: Collision) {
Instantiate(Fire, transform.position, transform.rotation);
Destroy(gameObject);
}