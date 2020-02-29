import "./styles.css";

var purpose = document.getElementById("mlA1"),
  teacher = document.getElementById("mlA2"),
  studentAs = document.getElementById("mlA3"),
  studentRole = document.getElementById("mlA4"),
  quote1 = document.getElementById("quote1"),
  pic1 = document.getElementById("q1Pic"),
  quote2 = document.getElementById("quote2"),
  pic2 = document.getElementById("q2Pic"),
  inMyExp = document.getElementById("myExp"),
  sources = document.getElementById("sources");

function changeTo(mode) {
  purpose.innerHTML = mode.c1;
  teacher.innerHTML = mode.c2;
  studentAs.innerHTML = mode.c3;
  studentRole.innerHTML = mode.c4;
  quote1.innerHTML = mode.q1;
  pic1.innerHTML = mode.q1P;
  quote2.innerHTML = mode.q2;
  pic2.innerHTML = mode.q2P;
  inMyExp.innerHTML = mode.c6;
  sources.innerHTML = mode.c7;
}

//FROM w3SCHOOLS
// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("flexNav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

var toTest = humanist;

var flexNav = document.getElementById("flexNav");
flexNav.addEventListener("click", function(e) {
  var navs = document.getElementsByClassName("flexItem");
  for (var i = 0; i < 3; i++) {
    navs[i].classList = "flexItem";
  }
  var which;
  if (e.toElement.tagName !== "I") {
    //If it's not the icon, select it.
    e.toElement.classList = "flexItem navSelected";
    which = String(e.toElement.id);
  } else if (e.toElement.tagName === "I") {
    e.toElement.parentNode.parentNode.classList = "flexItem navSelected"; //If it is the icon, select its parents' parent.
    which = String(e.toElement.parentNode.parentNode.id);
  }
  console.log("Changing to: " + which);
  var contentsBG = document.getElementById("contents");
  switch (which) {
    case "humNav":
      contentsBG.style.background = "#FCEBF6";
      changeTo(humanist);
      break;
    case "devNav":
      contentsBG.style.background = "#E3F7FC";
      changeTo(develop);
      break;
    case "socEff":
      contentsBG.style.background = "#FFFAEB";
      changeTo(social);
      break;
    default:
      console.log("Welp, something went wrong.");
  }
});

//CONTENT
var humanist = {
  c1:
    "develop students into citizens by teaching them the culture and values dominant in society",
  c2:
    "communicate information to students and provide them with a common &  standard level of education",
  c3:
    "future democratic leaders who need a strong understanding of the society they’re meant to perpetuate",
  c4:
    "learn about the society they come from base their actions on the values they’re taught",
  q1:
    '"Any half-truth or slogan, no matter how dearly held,  that stands in the way of that aim [higher literacy and greater social justice] should be ruthlessly cast aside. Our children are more important than our theories." <br> - E.D. Hirsch Jr.',
  q1P: "<i class='fas fa-flag pic'></i>",
  q2:
    '"...their [School’s] most fundamental mission: the induction of the young into society’s norms and traditions" <br> - Chester Finn',
  q2P: "<i class='fas fa-bullseye pic'></i>",
  c6:
    "&emsp; In my understanding of the humanist perspective in education, my elementary school education aligned most closely with those values. There, every day began with the pledge of allegiance and we learned a common set of curriculum. Though it was a while ago, I don’t remember discussing much controversy in history lessons or reading any books that even bordered on controversial. We got a playful look at how the government works through the help of “Schoolhouse Rock” episodes. <br> &emsp; During the standardized test season there was always some talk about their practical value but we took them anyway. When I was in elementary school, students were required to take the CSAP (Colorado Standardized Assessment Program). When scores came back, everyone got a certificate based on how well they did and averages were published for all the local schools in the newspaper. The publication of those scores is, in part, why my Mom kept my brother and me in that particular elementary school since it consistently scored well. <br> &emsp; In middle school, I went to Union Colony Preparatory school, a public charter school that had high test scores but was tight on funding. I stayed there through high school, only saying the pledge of allegiance in a couple particularly patriotic teachers’ classrooms. Being a charter, they had their own ideas on the common curriculum. They substituted traditional math subjects (Geometry, Trigonometry, etc) for the Integrated Mathematics Program (IMP). Though a Math teacher got the school to adopt that curriculum in the first place, I still believe that system was detrimental to my mathematics abilities. I’d gone into Middle school advanced in Math and left with it still consistently being one of my lowest subjects. The year after I graduated, they abandoned IMP and reverted back to a more traditional Math curriculum. Though I’ve since tried to supplement that deficit with resources like Khan Academy, I’ve felt like I needed to catch up to students who experienced a more common curriculum.",
  c7:
    "Finn, C. E. (1996). Can the Schools Be Saved? InCommentary. Retrieved from https://canvas.colorado.edu/courses/60238/files/12707866/download?download_frd=1 <br><br> Hirsch, E. D. (1987). Restoring Cultural Literacy in the Early Grades. Educational Leadership, 45(4), 63–70. Retrieved from http://www.ascd.org/ASCD/pdf/journals/ed_lead/el_198712_hirsch.pdf"
};

var develop = {
  c1:
    "provide a series of shared experiences to students, as well as encourage and adapt to students’ individuality",
  c2:
    "be students’ partners in learning; serve as advisors as opposed to authoritative enforcers; seek to encourage individual expression and exploration",
  c3:
    "individuals transitioning between different levels of intellectual, social, physical and emotional development",
  c4:
    "participate actively in the classroom, discover and pursue interests with a curious passion",
  q1:
    '"True generosity lies in striving so that these hands - whether of individuals or entire peoples - need be extended less and less in supplication, so that more and more they become human hands which work and , working, transform the world." <br> - Paulo Freire',
  q1P: "<i class='fas fa-hands-helping pic'></i>",
  q2:
    '"When we give kids A’s for doing homework and reading or, worse, pay them for reading which is a reward for a reward, these kids become demonstrably less interested in the learning itself" <br> - Alfie Kohn',
  q2P: "<i class='fas fa-award pic'></i>",
  c6:
    "&emsp; I’ve experienced the diminishing rewards of even a grade system. As I’ve progressed further, my motivation to pursue A grades has dropped off significantly. They feel like a meaningless marker to reach for, and I’ve found myself seeking meaning more in the work than the grade. I resonate with Kohn’s perspectives on the consequences of artificial rewards systems and their effects on motivation long-term. That being said, I’ve been extremely fortunate to have teachers who’ve encouraged and empowered my interests in various subjects. The best of which made me feel autonomously capable. <br> &emsp; In 5th grade, I remember feeling lucky that I was a part of Mrs. Mueller’s class, a teacher with a reputation for expecting a lot from students. While other students were less excited, anticipating a teacher who’d be unnecessarily difficult, I was worried about the subsequent transition to middle school and thought she’d prepare my classmates and I for that transition. Besides doing that, she encouraged students to pursue their own interests. At the time, I was particularly interested in LEGO bricks and intent on becoming a LEGO Master Builder. As far-fetched of an idea as it was, she regularly gave me time to build with the LEGO bricks she kept in the back of the classroom. Pursuing that interest, I turned in various school projects made in LEGO thrilled to have the opportunity to complete work in my favorite medium. The next time I had an experience like that was in my freshman year of college, with a class called Meaning of Information Technology. There, for any assignment students were allowed to submit their work in any medium, so long as it conveyed understanding of the material",
  c7:
    "Alfie Kohn on Oprah. (2013, September 5). Retrieved February 15, 2020, from https://www.youtube.com/watch?v=_6wwReKUYmw <br> <br> Freire, P. (2018). Pedagogy of the oppressed. New York: Bloomsbury Academic. "
};

var social = {
  c1:
    "enable a functional economy and society by capitalizing on the capabilities of students and expanding their abilities ",
  c2:
    "teach students practical & job-applicable information and assess their success, then, direct students to programs of study by ability ",
  c3: "future workers and professionals ",
  c4: "work hard within the system to improve employable skills ",
  q1:
    '"While substantial inequality in economic privilege and social status are believed by most liberals to be inevitable, giving each individual a chance to compete openly for these privileges is both efficient and desirable." <br> - Samuel Bowles & Herbert Gintis',
  q1P: "<i class='fas fa-equals pic'></i>",
  q2:
    '"For my purpose, a more adequate model of American education, or any education for that matter, can be developed by studying its actual function in society - its function for individuals, for segments of the society, and for the society as a whole." <br> - John U. Ogbu',
  q2P: "<i class='fas fa-home pic'></i>",
  c6:
    "&emsp; Most of my experience in the Social Efficiency category comes from late-highschool onward. While until that point my education was mostly general, during the last few years my classes and the attitudes in classrooms have become much more about practical learning. In high school, as an elective, I had the opportunity to take a class in personal finances. I remember taking that class explicitly so that I could better prepare for my future and life after school. Overall, the class didn’t have exceptionally relevant information. Information on job interviews and resumes was general and didn’t directly apply to students’ interests or passions. I mean, as someone who’s interested in creative technology, my portfolio and job application process is going to look different from a healthcare professional, or businessperson. That being said there were some valuable pieces of information on the importance of saving and budgeting. Unfortunately, one of the most memorable things about the class is how little application there was. <br> &emsp; In college, most courses have some tie to job skills, and reasonably so. Personally, that’s a big part of why I was so excited to eventually attend college: practical and applicable skills. I understand having a general base of knowledge, but so much of it was learned without application and even when we were given “real” applications they were through unreasonable scenarios. In my Math class, an entire semester was focused on the problem of how to time a jump off of a Ferris wheel into a moving cart. There are real, valuable skills in there, but they were hidden to most students by the multiple abstract layers on top of it. ",
  c7:
    "Bowles, S., & Gintis, H. (1976). Broken Promises: School Reform in Retrospect. Retrieved February 14, 2020, from https://canvas.colorado.edu/courses/60238/files/12707869/download?download_frd=1 <br> <br> Ogbu, J. U. (n.d.). Minority Education and Caste: The American System in Cross-Cultural Perspective. In Social Contexts of Education: An Introduction (pp. 342–358). "
};

changeTo(humanist);
