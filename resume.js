const data = {
  "name": "Prabhu Raj S",
  "contact": {
    "email": "ssprabhuraj@gmail.com",
    "phone": "7639002723",
    "address": "2/69, D C Periyasamy colony , Pidamaneri ,Dharmapuri - 636701"
  },
  "summary": "Experienced software developer with a passion for creating innovative solutions.",
  "education": [
    {
      "degree": "BE MECH",
      "College": "The Kavery Engineering college,Mecheri, Mettur(tk),Salem",
      "graduationYear": 2015
    }
  ],
  "experience": [
    {
      "position": "Software Engineer",
      "company": "DNC Chits Pvt Ltd.",
      "startDate": "01-03-2021",
      "endDate": "till date",
      "responsibilities": [
        "Developed and maintained web applications.",
        "Collaborated with cross-functional teams to deliver high-quality software solutions."
        
      ]
    },
    {
      "position": " Tech support Engineer + QA Engineer",
      "company": "DNC Chits Pvt Ltd.",
      "startDate": "01-08*2015",
      "endDate": "28-02*2021",
      "responsibilities": [
        "Assisted in the development of new features for existing software products.",
        "Participated in team meetings and contributed to project planning."
      ]
    }
  ],
  "skills": [
    "Laravel (PHP Frame work)",
    "Manual Testing",
    "SQL",
    "Git",
    "Problem Solving",
    "Team Collaboration"
  ],
  "languages": ["English", "Tamil","Telugu(speak)"]
  
 

}

console.log("Using for loop:");
for (let i = 0; i < data.skills.length; i++) {
  console.log(data.skills[i]);
}

console.log("Using for...in loop:");
for (const key in data) {
  if (data.hasOwnProperty(key)) {
    console.log(key, ":", data[key]);
  }
}


console.log("Using for...of loop:");
for (const education of data.education) {
  console.log(education);
}


console.log("Using forEach loop:");
data.experience.forEach((job) => {
  console.log(job);
});
