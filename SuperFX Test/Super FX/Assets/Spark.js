var Fire : GameObject;
function OnCollisionEnter (hit: Collision) {
Instantiate(Fire, transform.position, transform.rotation);
Destroy(gameObject);
}