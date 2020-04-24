import React from "react";
import Project from "../../components/Project";

function Projects() {
  return (
    <div>
      <div className="container content mt-4">
        <div className="row">
          <div className="col-md-12">
            <div id="contentHeader">
              <h2>Portfolio</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <Project 
            imgSrc="./images/vacation-icon.png"
            imgTitle="Virtual Vacation"
            description="Tired of sitting at home? Dreaming of jetting off to a far away place? Try our Virtual Vacation app! Answer a few simple questions and get matched with your IDEAL vacation destination. You can view a webcam of your perfect vacation spot. Then once we can all travel again, you can actually GO there."
            authors="Jeff Bell, Val Young, Vandana Sivadasan, Audra Kosinski"
            repoLink="https://github.com/CodeMaster-jab/VirtualVacation"
            appLink="https://immense-wildwood-98172.herokuapp.com/"
          />
          <Project
            imgSrc="./images/jobsearch-icon.png"
            imgTitle="Interactive Job Search"
            description="This applicaiton was built using the Foundations CSS3 Framework, and consumes two API calls to Job Services from USAJOBS and THEMUSE.

            The user can enter a Location (City or Zip Code), and either select a Job Category, or enter a Search Keyword. Then the Jobs found for the given Search criteria will be displayed to the user."
            authors="Alek Seawright, Avery Rouser, Jeffrey Bell"
            repoLink="https://github.com/CodeMaster-jab/JobSearch"
            appLink="https://codemaster-jab.github.io/JobSearch/"
          />
          <Project
            imgSrc="./images/burger-icon.png"
            imgTitle="Eat Da Burger"
            description="Node Express Handlebars application with MySQL to Log Burgers to eat."
            authors="Jeffrey Bell"
            repoLink="https://github.com/CodeMaster-jab/EatDaBurger"
            appLink="https://agile-forest-13655.herokuapp.com/"
          />
        </div>  
        <div className="row">
          <Project
            imgSrc="./images/Weather.jpg"
            imgTitle="Weather Dashboard"
            description="This applicaiton will use an API to OpenWeatherMap.org to get and display Weather information for the City entered or chosen by the user."
            authors="Jeffrey Bell"
            repoLink="https://WeatherDashboard.com/CodeMaster-jab/EatDaBurger"
            appLink="https://jab-forest-13655.herokuapp.com/"
          />
          <Project
            imgSrc="./images/notetaker.png"
            imgTitle="Note Taker"
            description="This application allows the user to Create, Save, Display, and Delete Notes."
            authors="Jeffrey Bell"
            repoLink="https://github.com/CodeMaster-jab/NoteTaker"
            appLink="https://damp-escarpment-55688.herokuapp.com/"
          />
          <Project
            imgSrc="./images/trivia.jpeg"
            imgTitle="JavaScript Code Quiz"
            description="Timed Code Quiz (game) that stores the users scores."
            authors="Jeffrey Bell"
            repoLink="https://github.com/CodeMaster-jab/CodeQuiz"
            appLink="https://codemaster-jab.github.io/CodeQuiz/"
          />
        </div>
        <div className="row">
          <Project
            imgSrc="./images/passgen.jpg"
            imgTitle="Password Generator"
            description="An application that generates a random password based on user-selected criteria."
            authors="Jeffrey Bell"
            repoLink="https://github.com/CodeMaster-jab/PasswordGenerator"
            appLink="https://codemaster-jab.github.io/PasswordGenerator/"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;