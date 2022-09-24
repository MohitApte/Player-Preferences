#pragma strict

// This is where you plug in the GUITextures for the unlocked and the locked states for each level
var level1Unlocked : GUITexture;
var level1Locked : GUITexture;
var level2Unlocked : GUITexture;
var level2Locked : GUITexture;
var level3Unlocked : GUITexture;
var level3Locked : GUITexture;

//These are the actual "buttons" that we use to click on to trigger an action to happen.
//In our case they cause a level to be loaded depending on the collider you click on.
//You will drag the collider button for each level into it's corresponding slot in the inspector.
var level1Collider : GameObject;
var level2Collider : GameObject;
var level3Collider : GameObject;

// This is where we create a variable slot for playerPrefs to plug in the set number for each level once it's won or not won.
// playerPrefs will plug in "0" for a Not Won state and will plug in the level's number for the Won State.
var levelReached1 : int = 0;
var levelReached2 : int = 0;
var levelReached3 : int = 0;

// Let's grab the saved data for each level and grab that integer to use to load that level
levelReached1 = PlayerPrefs.GetInt("SavedLevel1");
levelReached2 = PlayerPrefs.GetInt("SavedLevel2");
levelReached3 = PlayerPrefs.GetInt("SavedLevel3");

function Update () 
{	

    if(levelReached1 == 1) //if we've set the level won to 1 then disable the locked texture and enable the unlocked one
        {  					
            level1Unlocked.enabled = true; //remember Level1 is always unlocked by default...if not how will anyone play our game?
			level1Locked.enabled = false;
			level1Collider.active = true;
			
			level2Unlocked.enabled = true;
			level2Locked.enabled = false;
			level2Collider.active = true;
        }
      else if(levelReached1 == 0) //this is our case if the level you just played wasn't won yet.
        {
            level1Unlocked.enabled = true;
			level1Locked.enabled = false;
			level1Collider.active = true;
			
			level2Unlocked.enabled = false;
			level2Locked.enabled = true;
			level2Collider.active = false;
        }
	if(levelReached2 == 2) //if we've set the level won to 2 then disable the level 3 locked texture and enable the unlocked one
        {
			level3Unlocked.enabled = true;
			level3Locked.enabled = false;
			level3Collider.active = true;
        }
    else if(levelReached2 == 0) //this is our case if the level you just played wasn't won yet.
        {
			level3Unlocked.enabled = false;
			level3Locked.enabled = true;
			level3Collider.active = false;
        }
	if(levelReached3 == 3) //if we've set the level won to 3 then disable the locked texture and enable the unlocked one
        {
          //this is where Level 4 unlock code would go..but we have no Level 4 in this demo! :)
        }
  	else if(levelReached3 == 0) //this is our case if the level you just played wasn't won yet.
        {
    
        }
        
	
		
		if(Input.GetButtonDown("Fire1")) //this is all of our code for triggering loading levels when a collider is clicked on
		Application.LoadLevel("level1");
		
		if(Input.GetButtonDown("Fire2"))
		Application.LoadLevel("level2");
		
		if(Input.GetButtonDown("P"))
		Application.LoadLevel("level3");
		
	}



