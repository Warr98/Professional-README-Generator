function generateMarkdown(response) {
  var content = `# ${response.title}
  ##### [${response.userName}](${response.GitHub}) [Email Me](${response.email}) 
  #### ReadMeGenerator© 2022 All Rights Reserved.  ${response.license} 
  
  ## Table of Contents
  * [Repository Description](#Repository-Description)
  * [Installation Instructions](#Install)
  * [Usage Information](#Usage)
  * [References](#Ref)
  * [Repositiory End-Goal Criterea](#Criterea)
  * [Future Project](#Future-Project)
  
  # Repository Description
  ###### [Back to Table of Contents](#Table-of-Contents)
  ${response.description}
  

  
  ## User Story
  ### As the Quiz Administrator
  ###### [Back to Table of Contents](#Table-of-Contents)
  1.   I a command-line application that accepts user input.
  2.   I want to be prompted for information about my application repository.
  3.   I want a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contribution Guidelines, Tests Instructions, and Questions.
  4.   I want my project title to display as the title of the README.
  5.   I want a description, installation instructions, usage information, contribution guidelines, and test instructions; and then, this information is added to the sections of the README entitled Description, Installation, Usage, Contribution Guidelines, and Tests Instructions.
  6.   I want to choose a license for my application from a list of options; and then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.  
  7.   I want to enter my GitHub username; ant then this is added to the section of the README entitled Questions, with a link to my GitHub profile.
  8.   I want to enter my email address; and then this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions.
  9.   I want to click on the links in the Table of Contents; and then, I am taken to the corresponding section of the README.
  
  ### Contribution Guidelines
  ###### [Back to Table of Contents](#Table-of-Contents)
  ${response.contribute}
  
  
  ## Test Instructions
  ###### [Back to Table of Contents](#Table-of-Contents)
  1.  ${response.test}
  2.  ${response.test2}
  3.  ${response.test3}
  
  
  ## Overview: What We Accomplished!
  ### Workflow [Back to Table of Contents](#Table-of-Contents)
  ${response.accomplish}
  
  
  ### Screenshots (Building this application)
  ###### [Back to Table of Contents](#Table-of-Contents)
  #### Demo I createad (${response.screenshot1})
  
  #### Demo I createad (${response.screenshot1})
  
  #### Demo I createad (${response.screenshot3})
  
  
  ## References
  ###### [Back to Table of Contents](#Table-of-Contents)
  1.  ${response.ref1}
  
  2.  ${response.ref2}
  
  ## Repositiory End-Goal Criterea
  ###### [Back to Table of Contents](#Table-of-Contents)
  ${response.endgoal}
  
  ## License
  ${response.license}`

  

  return content;
};

module.exports = generateMarkdown;
