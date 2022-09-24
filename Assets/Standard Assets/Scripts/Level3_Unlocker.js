
function OnTriggerEnter(other : Collider) 
{
    //
    if(other.gameObject.tag =="Player")
        {
            PlayerPrefs.SetInt("SavedLevel3", 3);
            Debug.Log("SavedLevel = 3");
            //
			yield WaitForSeconds(2.0); // wait for 5 seconds
            Application.LoadLevel("MainMenu");
        }
}