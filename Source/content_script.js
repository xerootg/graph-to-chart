walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
            if(node.parentElement.tagName.toLowerCase() != "script") {
                handleText(node);
            }
			break;
	}
}

function handleText(textNode) {
	var v = textNode.nodeValue;
	var f = ()=>{var c = "chart"; var r = ""; for(var y=0; y<c.length; y++){let z = c.at(y); let q = Math.random() < 0.5 ? z : z.toUpperCase();  r = r + q}; return r;}
	v = v.replace(/\b\b[Gg]raph/g, f);
	textNode.nodeValue = v;
}


