# Tech-Blog-MVC

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](https://mit-license.org/)

## Table of Content
- [Tech-Blog-MVC](#tech-blog-mvc)
  - [Table of Content](#table-of-content)
  - [Deployment](#deployment)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)


## Deployment
link will go here!!!


## Description
*Build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This application will will follow the **MVC paradigm** in its architectural structure, using ***Handlebars.js*** as the templating language, ***Sequelize*** as the ORM, and the ***express-session npm package*** for authentication.* 

>GIVEN a CMS-style blog site
>
>WHEN I visit the site for the first time
>
>THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
>
>WHEN I click on the homepage option
>
>THEN I am taken to the homepage
>
>WHEN I click on any other links in the navigation
>
>THEN I am prompted to either sign up or sign in
>
>WHEN I choose to sign up
>
>THEN I am prompted to create a username and password
>
>WHEN I click on the sign-up button
>
>THEN my user credentials are saved and I am logged into the site
>
>WHEN I revisit the site at a later time and choose to sign in
>
>THEN I am prompted to enter my username and password
>
>WHEN I am signed in to the site
>
>THEN I see navigation links for the homepage, the dashboard, and the option to log out
>
>WHEN I click on the homepage option in the navigation
>
>THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
>
>WHEN I click on an existing blog post
>
>THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
>
>WHEN I enter a comment and click on the submit button while signed in
>
>THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
>
>WHEN I click on the dashboard option in the navigation
>
>THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
>
>WHEN I click on the button to add a new blog post
>
>THEN I am prompted to enter both a title and contents for my blog post
>
>WHEN I click on the button to create a new blog post
>
>THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
>
>WHEN I click on one of my existing posts in the dashboard
>
>THEN I am able to delete or update my post and taken back to an updated dashboard
>
>WHEN I click on the logout option in the navigation
>
>THEN I am signed out of the site
>
>WHEN I am idle on the site for more than a set time
>
>THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

## Installation
***Please install the package locally to your working project directory.*** 
- On your preferred code editor, use the command line to run `npm i`
- The latest version of the required packages will be installed.
  

## Usage
***Please ensure you have followed above steps to install packages first!***
- Access your working directory project folder and create your **.env** file. Copy and paste the code below to connect to your schema from the MySQL shell

`mysql -u root -p` 
`source db/schema.sql` 
- Once done enter quit or exit to terminate the sql session. Keyboard shortcut CTRL+C will bring you back to your Terminal/Shell/Bash and run the following code. 

`npm run start`
- Once you are connected to your local ran server, navigate to http://localhost:3001/ in your browser. You can interact with the blog site from the homepage.

***See the images and video below for demo.***
*In these screenshots, you will see how the page is rendered and how the functionality is demonstrated.*

ADD IMAGES HERE


## Contributing

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
<br>*Contributor Covenant encourages contributions of all kinds from people around the world. This makes the practice of open source as much social as it is technical.*

## Tests
*The application can be tested locally or via the Heroku Deployment.*

## License
    This application is licensed under the MIT license.

## Questions
*Please contact me below!*
- Github: [JulienneJulien](https://github.com/JulienneJulien)
- Email: JulienneJulien15@gmail.com 

