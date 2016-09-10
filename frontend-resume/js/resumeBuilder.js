var bio = {
    "name": "Leah Barlow",
    "role": "Web Developer",
    "contacts": {
      "mobile": "555-555-5555",
      "email": "lebarlow@mailme.org",
      "github": "lealulu",
      "location": "Red Bank, NJ"
    },
    "welcomeMessage": "Hello! Welcome to my resume.",
    "skills": [
      "Counseling", "Design", "Conceptualization"],
    "biopic": "images/me.jpg"
};

var work = {
	"jobs": [{
		"employer": "Barnabas Health",
		"location": "Toms River, NJ",
		"title": "Art Therapist",
		"dates": "Aug 2014 - current",
    "description": "Responsible for running therapy groups, contributing to treatment team, assessing new admissions, and documenting progress of adult and geriatric patients in an acute inpatient psychiatric setting."
    },
    {
    "employer": "Declarations, Inc.",
    "location": "Freehold, NJ",
    "title": "Life Coach",
    "dates": "Sept 2013 - June 2014",
    "description": "Assisted and motivated adults with chronic mental illness with life skills, goal setting, and treatment compliance in supportive housing environment."
    }
  ]
};

var projects = {
  "projects": [{
    "title": "The Lived Experience of Adults with Persistent Lyme Disease Symptoms",
    "dates": "10/2011 - 09/2013",
    "description": "An arts-based phenomenological research study that looked at what adults with persistent Lyme Disease symptoms experience in everyday life.",
    "images": ["images/project1.jpg"],
  }]
};

var education = {
  "schools": [
    {
      "name": "Drexel University",
      "location": "Philadelphia, PA",
      "degree": "MA",
      "majors": ["Art Therapy"],
      "dates": "2013",
      "url": "http://www.drexel.edu"
    },
    {
      "name": "Monmouth University",
      "location": "West Long Branch, NJ",
      "degree": "BA",
      "majors": ["Art"],
      "dates": "2010",
      "url": "http://www.monmouth.edu"
    }],
  "onlineCourses": [
    {
      "school": "Udacity",
      "title": "Intro to Programming",
      "dates": "2016",
      "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }
  ]
};

// Displays Bio Array
bio.display = function() {
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcome);

  var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formattedPic);

  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

  for (i=0; i<3; i++) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
    }
  }

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);
  $("#footerContacts").append(formattedMobile);

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedEmail);
  $("#footerContacts").append(formattedEmail);

  var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedGit);
  $("#footerContacts").append(formattedGit);

  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedLocation);
  $("#footerContacts").append(formattedLocation);

};
bio.display();


// Displays work history
work.display = function() {
  for(i=0; i<2; i++) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
  var formattedWorkLoc = HTMLworkLocation.replace("%data%", work.jobs[i].location);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(formattedEmployerTitle + formattedDates + formattedDescription + formattedWorkLoc);
  }
};
work.display();


// Displays education
education.display = function() {
for (i=0; i<2; i++) {
    $("#education").append(HTMLschoolStart);

    var formattedSchool = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
    $(".education-entry:last").append(formattedSchool);

    var formattedSchoolLoc = HTMLschoolLocation.replace("%data%", education.schools[i].location);
    $(".education-entry:last").append(formattedSchoolLoc);

    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
    $(".education-entry:last").append(formattedMajor);

    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    $(".education-entry:last").append(formattedDegree);

    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
    $(".education-entry:last").append(formattedSchoolDates);

  }
    $(".education-entry:last").append(HTMLonlineClasses);
    for (i=0; i<1; i++) {
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
      $(".education-entry:last").append(formattedOnlineTitle);

      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
      $(".education-entry:last").append(formattedOnlineSchool);

      var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
      $(".education-entry:last").append(formattedOnlineDates);

      var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);
      $(".education-entry:last").append(formattedOnlineURL);
    }
};
education.display();


// Displays projects
projects.display = function() {
  for (i=0; i<1; i++) {
    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    $(".project-entry:last").append(formattedProjectTitle);

    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    $(".project-entry:last").append(formattedProjectDates);

    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    $(".project-entry:last").append(formattedProjectDescription);

    if (projects.projects[i].images.length > 0) {
      for (x=0; x<1; x++) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[x]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
};
projects.display();

// Appends Google Map
$("#mapDiv").append(googleMap);

// Logs click location
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});
