function libit()
{
	var story = getElementById('story');
	var noun = getElementById('noun');
	var adjective = getElementById('adjective');
	var name = getElementById('name');
	 storyDiv.innerHTML = name + " married a " + adjective + " " + noun + "... So weird!";
    }

    var generatelib = getElementById('lib-button');
    generatelib.addEventListener('click',libit)

}
