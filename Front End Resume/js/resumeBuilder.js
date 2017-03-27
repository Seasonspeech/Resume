

var bio= {
	"name": "Phillip Fry",
	"age": 100,
	"role" : "Delivery Manager",
	"contacts":{
		"email" : "Pjfry@gmail.com",
		"mobile": "857-555-555",
		"github": "PhillipFry",
		"twitter": "pfry",
		"location": "Chicago, IL"
	},
	"picture": "images/fry.jpg",
	"welcome": "Welcome to my resume!",
	"skills": ["Problem solving", "JavaScript", "Python"],
	"display": function() {
		//This function formats and displays all information from bio JSON
		var formattedName=HTMLheaderName.replace("%data%", bio.name);
		var role = "Delivery Driver";
		formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		formattedPic = HTMLbioPic.replace("%data%", bio.picture);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").append(formattedPic);
 
		formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcome);
		formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
		formattedContactLocation = HTMLlocation.replace("%data%",bio.contacts.location);

		$("#header").append(formattedWelcome);

		$("#topContacts").append(formattedMobile, formattedTwitter, formattedGithub,
			formattedEmail, formattedContactLocation);

		$("#footerContacts").append(formattedMobile, formattedTwitter, formattedGithub, 
			formattedEmail, formattedContactLocation);


		if(bio.skills.length >0){
	$("#header").append(HTMLskillsStart);

	for (var i=0; i<bio.skills.length; i++) {
		var formattedSkill=HTMLskills.replace("%data%",bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
	}
	}
};



var work= {
	"jobs" : [
		{
			"title": "Delivery Assistant",
			"description": "Assisted with package deliveries",
			"employer": "Planet Express",
			"dates" : "3/19/1999 to 4/19/2000",
			"location": "Brooklyn, NY"
		},
		{
			"title": "Delivery Specialist",
			"description": "Specialized in deliveries of all kinds",
			"employer" : "Planet Express Specialties",
			"dates": "4/20/2000 to 4/25/2009",
			"location": "Chicago, IL"
		}],
	"display" : function() {
		//This function formats and displays information from jobs JSON
		for (var i=0; i<work.jobs.length;i++){
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;	
			var formattedDatesWorked = HTMLworkDates.replace("%data%",work.jobs[i].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);

			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

var projects = {
	"projects":[
		{
			"title": "Responsive resume",
			"dates": "3/25/17 to present",
			"description": "An interactive web resume",
			"images":["images/WIP.gif"]
		}],
	"display": function() {
		//This function formats and displays info from projects JSON
		for (var i=0; i<projects.projects.length; i++){
			$("#projects").append(HTMLprojectStart);

			var formattedProjTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
			var formattedProjDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
			var formattedProjDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);

			var formattedProjImages="";
			for(var j=0; j<projects.projects[i].images.length; j++){

				formattedProjImages = formattedProjImages + HTMLprojectImage.replace("%data%",projects.projects[i].images[j]);
			}

			$(".project-entry:last").append(formattedProjTitle);
			$(".project-entry:last").append(formattedProjDates);
			$(".project-entry:last").append(formattedProjDescription);
			$(".project-entry:last").append(formattedProjImages);
		}
	}
};

var education = {
	"schools": [
		{
			"name": "Planet Express University",
			"location": "Chicago, IL",
			"dates": "2001 to 2004",
			"url" : "http://samplesample.com",
			"degree": "Bachelors of Science",
			"majors": ["Package Delivery"]
		},
		{
			"name": "Pizza Delivery University",
			"location": "Chicago, IL",
			"dates": "1997 to 1998",
			"url" : "http://samplesample.com",
			"degree": "Bachelors of Science",
			"majors": ["Pizza Delivery", "Pizza Cooking"]
		}]
,
	"onlineCourses": [
		{
			"title" : "JacaScript Syntax",
			"school" : "Udacity",
			"dates": "2017 to present",
			"url": "htttp://www.udacity.com"
		}],
	"display": function() {
		//This function formats and displays info from education JSON
		for (var i = 0; i<education.schools.length;i++){
			$("#education").append(HTMLschoolStart);

			var formattedSchool = HTMLschoolName.replace("%data%",education.schools[i].name);
			var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);

			var formattedMajor="";
			for(var j=0; j<education.schools[i].majors.length; j++){

				formattedMajor = formattedMajor + HTMLschoolMajor.replace("%data%",education.schools[i].majors[j]);
			}

			var formattedURL = HTMLonlineURL.replace("%data%",education.schools[i].url);
			var formattedSchoolDegree = formattedSchool + formattedDegree;

			$(".education-entry:last").append(formattedSchoolDegree);
			$(".education-entry:last").append(formattedLocation);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedMajor);
			$(".education-entry:last").append(formattedURL);
		}

		for (var i = 0; i<education.onlineCourses.length; i++){
			$("#education").append(HTMLonlineClasses);
			$("#education").append(HTMLonlineStart);

			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[i].url);
			var formattedOnlineTitleSchool = formattedOnlineTitle+formattedOnlineSchool;

			$(".online-entry:last").append(formattedOnlineTitleSchool);
			$(".online-entry:last").append(formattedOnlineDates);
			$(".online-entry:last").append(formattedOnlineURL);
		}
	}
}


$("#mapDiv").append(googleMap);

bio.display();
work.display();
projects.display();
education.display();