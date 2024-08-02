var cont = document.querySelector('.right')
var intro = document.getElementById('intro')
var opp = document.getElementById('opp')
var fac = document.getElementById('fac')
var out = document.getElementById('out')

intro.addEventListener("click" , function(){
    cont.innerHTML = `<p class="content">Rajalakshmi Engineering College, an autonomous institution affiliated to Anna University, Chennai, was established in the year 1997 under the aegis of Rajalakshmi Educational Trust whose members have had consummate experience in the fields of education and industry. The College has grown from strength to strength in the last 25 years and progressing towards Excellence in Engineering Education, Research and Development.
    </p>
    <h1>VISION</h1><p class="content">
To be an institution of excellence in Engineering, Technology and Management Education & Research. To provide competent and ethical professionals with a concern for society.
</p>
<h1>MISSION</h1>
<p class="content">
To impart quality technical education imbibed with proficiency and humane values.
To provide right ambience and opportunities for the students to develop into creative, talented and globally competent professionals.
To promote research and development in technology and management for the benefit of the society.
</p>`
})

opp.addEventListener("click",function(){
    cont.innerHTML = `<h1>OPPORTUNITIES</h1>
    <p class="content">Computer science and engineering graduates are the pillars of the current and emerging information era. Opportunities include pursuing Master of Science Programs in reputed Universities of U.S and Europe. and taking up research assignments in Hardware, System Software, Computer Engineering, Multimedia, Networking and Communication areas.

Computer science is a broad field with many different job paths to choose from. With so many options, it can be difficult to decide on a certain route to study and focus on. Even if mastering only one specific subject of interest in Computer Science is possible, it is necessary to acquire all of the fundamentals connected to other areas in order to implement and use that subject of interest. For example, when writing Server-side scripts, we must know how to obtain data from databases and/or perform HTTP requests to retrieve information/outputs from APIs, in addition to dealing with the Frontend elements and delivering accordingly. So, in order to use databases and retrieve data via APIs, we must first understand the fundamental ideas and applications.
Job opportunities are ever increasing and are varied in nature. System study, analysis, Design and Programming are the inherent phases in Application Development and each one of them provides enormous potential to the Computer Science and engineering graduates to shape their careers. Hi-end profiles include Machine Learning, Data Science, Artificial Intelligence, Robotics, Graphic Solutions and Simulations, Mobile Application Development, Automation etc., The doors of companies are always open for Software Developer, Full Stack Software Developer, Data Analyst ,Data Scientist, Database Administrator, Cyber Security Specialist, Data Engineer, Machine Learning Engineer etc., with a huge package.

This degree program prepares students for Advanced Technical Computer Systems Design and Development Work. It includes the study of basics with Data Science, Database Design, Data Communications, Procedural and Object Oriented Programming, Operating Systems Design, Algorithm Development and Applications of Artificial Intelligence. The curriculum includes basic course work in Electronics Technology and the Theory of Programming Languages. Students focus on developing computer-based solutions involving hardware and software components and integration. Graduates are qualified to work in a range of positions, from entry-level computer scientists and system engineers to project managers leading advanced applications of computer science to real-world problems. The department has since broadened its research strengths.</p>`
})


fac.addEventListener("click", function(){
    cont.innerHTML = `<table>
  <tr>
    <th>S.No</th>
    <th>Name of the Faculty</th>
    <th>Designation</th>
  </tr>

  <tr>
    <td>1</td>
    <td>Dr.P.Kumar</td>
    <td>Director and HOD - CSE</td>
  </tr>

  <tr>
    <td>2</td>
    <td>Dr.V.Murali Bhaskaran</td>
    <td>Dean Academics and Professor</td>
  </tr>

  <tr>
    <td>3</td>
    <td>Dr. S. Vinod Kumar</td>
    <td>Professor</td>
  </tr>
</table>`
})

out.addEventListener("click" , function(){
    cont.innerHTML = `<h1>Engineering knowledge:</h1>
    <p class="content">Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.
    </p>
    
    <h1>Problem analysis:</h1>
    <p class="content">Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.
    </p>

    <h1>Design/development of solutions:</h1>
    <p class="content">Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.
    </p>

    <h1>Conduct investigations of complex problems:</h1>
    <p class="content">Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.
    </p>
    `
    
})