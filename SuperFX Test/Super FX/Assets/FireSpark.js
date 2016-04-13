var Ship : GameObject;

function Start () {
Ship = GameObject.Find("Ship");
}

function Update () {
transform.Translate(Vector3.forward * (Time.deltaTime * 10));
}