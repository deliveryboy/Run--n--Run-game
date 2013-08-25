function keyDowned(event)
{
	handledKeys[event.keyCode] = true;
}

function keyUpped(event)
{
	handledKeys[event.keyCode] = false;
}

function runLoop()
{
	// Evaluate user events
	var walkDirection = null;
	
	if(handledKeys[39])
		walkDirection = "right";
	else if(handledKeys[37])
		walkDirection = "left";
	else
		walkDirection = null;
	
	// Update game logic
	if(animationState < 7)
		animationState++;
	else
		animationState = 0;
	
	// Update game view
	var animation = document.getElementById("animation");
	
	if(walkDirection === "right")
	{
		animation.style.backgroundImage = "url(gfx/animation_right.png)";
		animation.style.backgroundPosition = "-" + (animationState * 6) + "px 0px";
	}
	else if(walkDirection === "left")
	{
		animation.style.backgroundImage = "url(gfx/animation_left.png)";
		animation.style.backgroundPosition = "+" + (animationState * 6) + "px 0px";
	}
}

// Global definitions
var handledKeys = new Array();
var animationState = -1;	// Current frame number out of eight frames

setInterval(runLoop, 100);	// Let the game begin

// Registering event hooks
addEvent(document, "keydown", keyDowned, true);
addEvent(document, "keyup", keyUpped, true);

