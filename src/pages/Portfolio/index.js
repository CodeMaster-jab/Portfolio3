import React from "react";

function Portfolio() {
  return (
    <div>
      <div className="container content mt-4">
        <div className="row mt-2">
          <div className="col-md-12">
            <div id="contentHeader">
              <h2>About Me</h2>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12 col-md-4">
            <img className='myPicture img-fluid' src="./images/MeBenji.jpg"/>
          </div>
          <div className="col-12 col-md-8 pt-2 pt-md-0">
            <p>I currently live and work in Overland Park Kansas.  I graduated from DeVry University in October 1989, and took a Job with Sprint in Janurary 1990.  I have been developing software for various platforms using many different technologies and languages for over thirty years.</p>
            <p>Some (not all) of the  technologies and languages I have experience with are listed below.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <ul id="skills">
              <li>C/C++/C#</li>
              <li>Java</li>
              <li>.NET</li>
              <li>Apache</li>
              <li>Microsoft Internet Information Server (IIS)</li>
              <li>HTML/CSS</li>
              <li>Javascript/jQuery</li>
              <li>Perl/PHP/Python</li>
              <li>Microsoft Access/MySQL/SQL Server/Oracle/Postges</li>
              <li>Visual Basic</li>
              <li>Visual Studio</li>
            </ul>
          </div>
          <div className="col-md-6">
            <p>Links:</p>
            <ul id="Links">
              <li><a href="https://drive.google.com/file/d/1zu9NM_kB6YrpX1rEqLtzEz8f4rvMbg2S/view?usp=sharing" target="_blank">Resume</a></li>
              <li><a href="https://github.com/CodeMaster-jab" target="_blank">GitHub Profile</a></li>
              <li><a href="https://www.linkedin.com/in/jeff-bell-573a4711/" target="_blank">LinkedIn Profile</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;