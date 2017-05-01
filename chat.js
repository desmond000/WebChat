var video_out = document.getElementById("vid-box");

function login(form) {
	var phone = window.phone = PHONE({
	    number        : form.username.value || "Anonymous", // listen on username line else Anonymous
	    publish_key   : 'pub-c-cffc994f-cb9b-47d4-acc5-97fc6ea2da9d',
	    subscribe_key : 'sub-c-56efe1d8-2dfc-11e7-9488-0619f8945a4f',
	});	
	phone.ready(function(){ form.username.style.background="#55ff5b"; });
	phone.receive(function(session){
	    session.connected(function(session) { video_out.appendChild(session.video); });
	    session.ended(function(session) { video_out.innerHTML='&nbsp;'; });
		$('#display-div').append(session.video);
	});
	return false; 	// stop form from submitting XD
}


function makeCall(form){
	if (!window.phone) alert("Login First!");
	else phone.dial(form.number.value);
	return false;
}