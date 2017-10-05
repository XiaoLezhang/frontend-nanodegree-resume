/*
This is empty on purpose! Your code to build the resume will go here.
 */
// var awesomeThoughts = "I am XLZ and I am AWESOME!";
// console.log(awesomeThoughts);
// var funThought = awesomeThoughts.replace("AWESOME","FUN");
// $("#main").append(funThought);



var work = {
    "jobs" : [
        {
    "employer" : "conpamy",
    "title" : "designer",
    "location" : "中国广东省越秀区连新路",
    "dates" : "1 years",
    "description" : "design web sites"
    },
        {
            "employer" : "conpamy2",
            "title" : "designer2",
            "location" : "中国广东省越秀区逢源路",
            "dates" : "1 years2",
            "description" : "design web sites2"
        }
]
};

var projects = {
    "projects" : [
        {
            "title": "big data",
            "dates": "1 month",
            "description": "homepage",
            "images": [
                "http://lorempixel.com/197/148",
                "http://lorempixel.com/40/10"
            ]
        },
        {
            "title": "big data2",
            "dates": "1 month2",
            "description": "homepage2",
            "images": [
                "http://lorempixel.com/197/148",
                "http://lorempixel.com/40/10"
            ]
        }
    ]
    }


var bio = {
    "name" : "Xiao Lezhang",
    "role" : "UI designer",
    "welcomeMessage" : "Welcome to view my resume",
    "contacts" : {
        "mobile" : "135-xxxx-xxxx",
        "email" : "idname@163.com",
        "twitter" : "None",
        "github" : "XiaoLezhang",
        "location" : "广东省广州市荔湾区周门西街",
        "blog" : "None"
    },
    "skills" : [
        "PS","CSS","AI","AE"
    ],
    "biopic" : "images/fry.jpg"
}

var education =  {
    "schools" : [{
        "name" : "广东技术师范学院",
        "location" : "广州市天河区中山大道",
        "degree" : "Bachelor",
        "dates" : "2012-2016",
        "url" : "http://www.gpnu.edu.cn/",
        "majors" : [
            "三大构成","速写","产品设计","创意设计学"
        ]
        }
    ],
    "onlineCourses" : [
        {
            "title" : "UI designer",
            "school" :"Netease cloud Class",
            "dates" :"2016.8-2017.2",
            "url" :"https://study.163.com"
        },
        {
            "title" : "front-end engineers",
            "school" :"Udacity",
            "dates" :"2017.4-2017.9",
            "url" :"https://classroom.udacity.com"
        }
    ]
}

bio.display =function ( ) {
    var formattedbioPic = HTMLbioPic.replace("%data%",bio.biopic);
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#header").append(formattedbioPic,formattedwelcomeMsg);
    $("#header").prepend(formattedName,formattedRole);
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedBlog = HTMLblog.replace("%data%",bio.contacts.blog);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts").append(formattedMobile,formattedEmail,formattedTwitter,formattedGithub,formattedBlog,formattedLocation);
    $("#footerContacts").append(formattedMobile,formattedEmail,formattedTwitter,formattedGithub,formattedBlog,formattedLocation);
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(a,skill) {
        var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
        $("#header").append(formattedSkills);
    });
}
bio.display();

work.display =function ( ) {
    work.jobs.forEach(function(a,job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTItle = formattedEmployer + formattedTitle;
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedEmployerTItle, formattedLocation, formattedDates, formattedDescription);
    });
};

work.display();

$("#main").append(internationalizeButton);

function inName(name) {
    newName = name.split(" ");
    var twoName = newName[1].toUpperCase();
    var oneName = newName[0].slice(0,1).toUpperCase() + newName[0].slice(1).toLowerCase();
    return oneName + " " + twoName;
}
inName(bio.name);

projects.display=function () {
    projects.projects.forEach(function(a,project){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[0]);
        $(".project-entry:last").append(formattedImage);
    })
}

projects.display();

education.display = function () {
        education.schools.forEach(function (a,school) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
            $(".education-entry:last").append(formattedName);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            $(".education-entry:last").append(formattedLocation);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            $(".education-entry:last").append(formattedDegree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            $(".education-entry:last").append(formattedDates);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            $(".education-entry:last").append(formattedMajor);
        })
    $(".education-entry:last").append(HTMLonlineClasses);
     education.onlineCourses.forEach(function(a,school) {
                var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
                $(".education-entry:last").append(formattedonlineTitle);
                var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school);
                $(".education-entry:last").append(formattedonlineSchool);
                var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[school].dates);
                $(".education-entry:last").append(formattedonlineDates);
                var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[school].url);
                formattedonlineURL = formattedonlineURL.replace("#", education.onlineCourses[school].url);
                $(".education-entry:last").append(formattedonlineURL);
            })
    };

education.display();

$("#mapDiv").append(googleMap);