/* © 2011 by Markus Kwaśnicki */

/**
 * Clear the value of the given element if default value is present.
 * @param element
 * @param value
 */
function clearInput(element, value)
{
    if(element.value == value)
    {
        element.value = "";
    }
}

/**
 * Set the value of the given element value is empty.
 * @param element
 * @param value
 */
function setInput(element, value)
{
    if(element.value == "")
    {
        element.value = value;
    }
}

/** 
 * Adds zeros with or without a sign to the front of an integer number. 
 * @param Boolean signed
 * @param Integer nZeros
 * @param Integer intValue
 * @return String 
 */
function addSignedLeadingZero(signed, nZeros, intValue)
{
	var sign = new String();
	var sValue = new String(Math.abs(intValue));
	
	(intValue < 0) ? (sign = '-') : (sign = '+');
	
	while(nZeros > sValue.length)
	{
		sValue = '0' + sValue;
	}
	
	if(signed)
	{
		sValue = sign + sValue;
	}
	
	return sValue;
}

/**
 * Search the DOM for elements with specified class.
 * @param String The name of the class to search for.
 * @return Array Returns an array containig DOM elements with the specified class or an empty array if nothing was found.
 */
function getElementsByClassName(node, className) 
{
	var allTagsBelow = node.getElementsByTagName("*");
	var classifiedTags = new Array();
	var regexp = new RegExp("(^|\\s)" + className + "(\\s|$)");
	
	for(var i = 0; i < allTagsBelow.length; i++)
	{
		if(regexp.test(allTagsBelow[i].className))
		{
			classifiedTags.push(allTagsBelow[i]);
		}
	}
	
	return classifiedTags;
}

/**
 * Wrapper function for addEventListener or attachEvent respectively. 
 * @param Object object The object to add the event.
 * @param String event The event without the "on" prefix.
 * @param Function callback The function reference to call when the event fires.
 * @param Boolean model The model: false for Event-Bubbling, true for Event-Capturing
 */
function addEvent(object, event, callback, model)
{
	if(window.attachEvent)	// IE
	{
        /* Missing call for Internet Explorer to capture an event if it is wanted! */
        
		object.attachEvent("on" + event, callback);
	}
	else	// W3C
	{
		object.addEventListener(event, callback, model);
	}
}

/**
 * Return the DOM element which fired an event.
 * @param Object event The event object.
 * @return Object The DOM element.
 */
function getEventSourceElement(event) {
    var element = null;
    
    if(event.currentTarget)     // W3C primary, more precise
    {
        element = event.currentTarget;
    }
    else if(event.target)       // W3C secondary, less precise
    {
        element = event.target
    }
    else if(event.srcElement)   // IE
    {
        element = event.srcElement;
    }
    else
    {
        // Not yet supported 
    }
    
    return element;
}

/**
 * Stop any event from bubbling and/or capturing furthermore.
 * @param Object event The event object.
 */
function stopEvent(event)
{
	if(event.stopPropagation)	// W3C
	{
		event.stopPropagation();
	}
	else	// IE
	{
		event.cancelBubble = true;
	}

	/* Also stop any standard action of the browser */
	if(event.preventDefault)	// W3C
	{
		event.preventDefault();
	}
	else	// IE
	{
		event.returnValue = false;
	}
}
