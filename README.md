# CV Builder
## Description
This application is a CV builder where users can construct and preview their resume. Users can enter their personal information, contact information, work experience, skills, references, and other relevant information that is typically found in a resume. Users can also customize the font properties of their resume and pick between two layout styles.

This application was developed using React and is intended to demonstrate the state, prop, and component nature of the library. With that said, information that is entered in the application will return a side-by-side live page preview as the user is building their resume.

## Features
Users can enter the following information in CV Builder:
1. Personal Information
2. Summary
3. Work Experience
4. Volunteer Experience
5. Education
6. Certifications
7. Skills (soft and technical)
8. Awards
9. References

Users can customize the appearance of their resume using the following options:
- Layout
- Layout Color
- Font Style
- Font Colors

Other features:
- Clear Resume Information
- Restore [Resume] To Default Styles


### Important Notes:
CV Builder is currently optimized for Desktop. A mobile version does not exist yet, but will come out in the next release. This current version of CV Builder is also meant to be used as a demonstration of the state capabilities of React and does not have a "Print" feature yet, but will be implemented in the next release.


## Technologies Used
### Languages
- React
- Javascript
- CSS
- HTML

## Tools
- Webpack

## Programming Concepts
- React
	- State
	- Props
	- Components

## Challenges Faced In This Project
This project is my first React-based application. All projects that I've done before this have been implemented in pure Javascript, so when it came to this project, I faced some challenges in terms of knowing how to work with React:

**1. Understanding React's state nature.**

The concept of state changes was a little difficult for me to get used to since I've been working mostly with vanilla Javascript and I'm accustomed to its imperative nature. In other words, I was used to "instructing" my program on how to perform a specific task by implementing multiple steps/functions. By doing this project, I eventually understood the advantage behind the declarative nature of React and realized I did not have to "instruct" my program on how to display a component or program specific steps to update the DOM. I also learned that updating the DOM with React is much easier, efficient, and modular compared to vanilla Javascript.

**2. Knowing how components will update when changes are made**

After understanding the advantage behind the declarative nature of React, my next challenge was figuring out how to exactly update the DOM when changes are made by the end user. Specifically, if the user wanted to add a new entry to their work experience, I had to figure out how to update the DOM to show a form component that will collect information for this entry.

Due to being accustomed to the imperative nature of vanilla Javascript, my initial approach was to declare a state variable to be used as a flag variable in conjunction with additional helper functions to toggle this form component. However, this approach did not make sense because not only did it require unnecessary steps, but it did not properly utilize the declarative nature of React where you can directly tell the program the type of change you wish to see on screen. In short, I could set/update my state variables to directly display a component.

What helped me fully understand how React makes updates was by looking at an existing project, examine its DOM structure in Chrome's developer tools, and seeing the DOM change in real time as the program was being updated. From this examination, I realized that I can declare my state variables, place them in the sections of my app where the changes are expected to be made, and directly implement the components in my setState variables. This approach end up being significantly easier and syntactically better overall.

**3. Ensuring state updates can reach the components that are expected to change**

This challenge was particularly tricky since this CV Builder is very modular and most components are located in separate files. For example, if a state change was initiated in one component and required a state change in another, I needed to make sure that the anticipated state changes are reachable by the target component, especially since state variables are declared within their respective components and can only be changed in that scope. Another factor that made this challenge tricky was that depending on where the state change occurred, it could affect the size of the change in relation to the DOM, resulting in performance issues (eg. a change to a nested component in the DOM should not trigger a change to the parent DOM, which could utilize more computing resources than necessary).

What I ended up doing was group those interconnected components together in their own files so that state changes and updates could be reachable. A good example of this approach can be see in the App.jsx file where new entry submission components and functions (eg. addWorkExperience function and the respective component) and their state variables are nested within the Main component.

**4. Adjusting to a declarative mindset with React**

Again, because I have been developing applications with vanilla Javascript for quite a while, it has taken some time to get used to the syntax and declarative nature of React. This was challenging at the beginning of this project, but after seeing how state changes work in the DOM in real time, the process of developing this application has gotten easier over time. By keeping in mind that I do not have to "instruct" React on how to update the state since it does the work under the hood, it made the techniqus of keeping my components modular and passing components to state variables sufficient for this project.

## How To Run This Application
This application is hosted on GitHub pages. Simply go to https://vbelmonte.github.io/cv-application to view the live demo.