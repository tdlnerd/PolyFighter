#pragma strict
 
 var noTurn = 0.1; // Extent of the no-turn zone as a fraction of Screen.height;
 var factor = 150.0;
 var Speed = 15;
 private var center : Vector3;
 
  function Start() {
      center = new Vector3(Screen.width / 2, Screen.height / 2, 0);
  } 
  
 function Update () {
     var delta = (Input.mousePosition - center) / Screen.height;
     Debug.Log(delta);
     if (delta.y > noTurn) 
         transform.Rotate(-(delta.y - noTurn) * (Time.deltaTime/10) * factor, 0, 0);
     if (delta.y < -noTurn)
         transform.Rotate(-(delta.y + noTurn) * (Time.deltaTime/10) * factor, 0, 0);
     if (delta.x > noTurn)
         transform.Rotate(0, (delta.x - noTurn) * Time.deltaTime * factor, 0);
     if (delta.x < -noTurn)
         transform.Rotate(0, (delta.x + noTurn) * Time.deltaTime * factor, 0); 
     
 }
 
 