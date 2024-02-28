import { Injectable } from '@angular/core';
import { Tag } from '../_models/Tag';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  [x: string]: any;

  project: Project[] = [
    {id: 1,
    name: "WizeWay.AI",
    summary: "An AI-powered travel itinerary maker that uses real-time data to create personalized travel plans.",
    description: "WizeWay.AI, integrates Taipy's advanced database management capabilities with OpenAI's GPT-4 using Python. The outcome is an application that specializes in personalized travel itinerary creation using AI. We take a list of inputs from our clients, including their place of destination, the number of individuals traveling (separated by Adults and Kids), the time period traveling, and special interests. Using real-time data supported by GPT-4, our itinerary maker allows us to understand how to implement AI for specialized applications, and hopefully with more time we could've built a stronger project that implemented more itinerary-aligned interests such as built-in budget restrictions and mapping destinations.",
    projectLink: "https://devpost.com/software/wizeway-ai", 
    tags: [Tag.Python, Tag.Powerpoint, Tag.CSS, Tag.Taipy],
    pictures: ["../../assets/wizeway.jpg", "../../assets/wizeway2.jpg"]},

    {id: 2, 
    name: "Ivey Case Competition",
    summary: "A Case Competition for all first-year students enrolled in a business course. My team advanced to the semi-finals!",
    description: "I had the opportunity to compete in the Ivey Case Competition for all first-year students enrolled in a business course. I take immense pride in announcing that my team, consisting solely of engineering majors, was able to advance to the semi-finals of this competition! Although we did not place as highly as anticipated, there are a lot of positives to take away from this. Together, we learned a lot about each other and what it takes to perform under pressure. It was a privilege to compete alongside such talented and diligent individuals.",
    projectLink: "",
    tags: [Tag.Powerpoint], 
    pictures: ["../../assets/business competition.jpg", "../../assets/YOU.png"]},
    
    {id: 3,
    name: "iPayRoll", 
    summary: "Still in progress - Using JavaFX to create a system to facilitate the payroll process for small businesses ",
    description: "The system will allow for the input of employee hours, and will calculate the pay for each employee. The system will also allow for the input of employee information, and will generate paystubs for each employee. The system will also allow for the input of employer information, and will generate a payroll summary for the employer. As well as tax-payment information and authentication.",
    projectLink: "",
    tags: [Tag.Java, Tag.JavaFX, Tag.CSS],
    pictures: ["../../assets/comingsoon.jpg"]}, 

    {id: 4,
    name: "Health App",
    summary: "Still in progress - Using React Native to create an overall wellness App that can be used cross-platform",
    description: "Currently in the process of building a Health and Wellness app on React Native that uses a database to track calories using Machine Learning Algorithms to count calories based on pictures taken by the user. The app also aims to generate Meal Plans and Workout using the Open-AI wrapper. Using this wrapper, we will also create a chatbot that gives tips and tricks to workout plans is also included. Aiming to encourage new gym-users to use the app to get exposed to a new environment and to promote a more health conscious lifestyle.", 
    projectLink: "",
    tags: [Tag.ReactNative, Tag.JavaScript, Tag.CSS],
    pictures: ["../../assets/comingsoon.jpg"]},

  ];

  constructor() { }

  GetProjects(){
    return this.project;
  }
  GetProjectById(id: number){
    let project = this.project.find(project => project.id === id);
  
    if(project === undefined){
      throw new TypeError("There is no project that matches the id: " + id);
    }
  
    return project;
  }

}
