
var skills=
["Problem solving", "JavaScript", "Python"];

var bio= {
	"name": "Phillip J. Fry",
	"age": 25,
	"role" : "Delivery Manager",
	"contacts":{
		"email" : "Pjfry@gmail.com",
		"mobile": "857-555-555",
		"github": "Phillip Fry",
		"twitter": "pjry",
		"location": "Earth"
	},
	"picture": "images/fry.jpg",
	"welcome": "Welcome to my resume!",
	"skills": skills
};


var work= {
	"experience" : [
		{
			"title": "Delivery Assistant",
			"description": "Assisted with package deliveries",
			"employer" : "Planet Express",
			"datesWorked" : "3/19/1999 to 4/19/2000",
			"location" : "Los Angeles"
		},
		{
			"title": "Delivery Specialist",
			"description": "Specialized in deliveries of all kinds",
			"employer" : "Planet Express Specialties",
			"datesWorked":"4/20/2000 to 4/25/2009",
			"location": "Los Angeles"
		}
	]
};

var projects = {
	"projects":[
		{
			"title": "Responsive resume",
			"dates": "3/25/17 to present",
			"description": "An interactive web resume",
			"images":"images/WIP.gif"
		}
	]
};

var education = {
	"schools": [
		{
			"name": "Planet Express University",
			"location": "Los Angeles",
			"date": 2001,
			"url" : "http://samplesample.com",
			"major": "Package Delivery"
		},
		{
			"name": "Pizza Delivery University",
			"location": "Los Angeles",
			"date": 1997,
			"url" : "http://samplesample.com",
			"major": "Pizza Delivery"
		}
	]
,
	"onlineCourses": [
		{
			"title" : "JacaScript Syntax",
			"school" : "Udacity",
			"date": 2017,
			"url": "htttp://www.udacity.com"

		}
	]
}

var formattedName=HTMLheaderName.replace("%data%", bio.name);
var role= "Delivery Driver";
formattedRole=HTMLheaderRole.replace("%data%", bio.role);
formattedPic=HTMLbioPic.replace("%data%", bio.picture);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedPic);



formattedMobile=HTMLmobile.replace("%data%", bio.contacts.mobile);
formattedTwitter=HTMLtwitter.replace("%data%", bio.contacts.twitter);
formattedGithub=HTMLgithub.replace("%data%", bio.contacts.github);
formattedWelcome=HTMLwelcomeMsg.replace("%data%",bio.welcome);
formattedEmail=HTMLemail.replace("%data%",bio.contacts.email);
formattedContactLocation=HTMLlocation.replace("%data%",bio.contacts.location);


$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedContactLocation);
$("#topContacts").append(formattedWelcome);





if(bio.skills.length >0){
	$("#header").append(HTMLskillsStart);

	for (var i=0; i<bio.skills.length; i++) {
		var formattedSkill=HTMLskills.replace("%data%",bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
}


function displayWork(){
	
			for (var i=0; i<work.experience.length;i++){
				$("#workExperience").append(HTMLworkStart);

				var formattedEmployer=HTMLworkEmployer.replace("%data%",work.experience[i].employer);
				var formattedTitle=HTMLworkTitle.replace("%data%",work.experience[i].title);
				var formattedEmployerTitle=formattedEmployer + formattedTitle;	
				var formattedDatesWorked=HTMLworkDates.replace("%data%",work.experience[i].datesWorked);
				var formattedLocation=HTMLworkLocation.replace("%data%",work.experience[i].location);
				var formattedDescription=HTMLworkDescription.replace("%data%",work.experience[i].description)

				$(".work-entry:last").append(formattedEmployerTitle);
				$(".work-entry:last").append(formattedDatesWorked);
				$(".work-entry:last").append(formattedLocation);
				$(".work-entry:last").append(formattedDescription);

}
}


