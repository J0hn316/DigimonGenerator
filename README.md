## Digimon-Generator/ Project 2:

Link to this project can be found here https://j0hn316.github.io/DigimonGenerator/.

For information on Digimon please check out Digimon Wiki here - https://digimon.fandom.com/wiki/Digimon_Wiki

## The Functions of Digimon-Generator:

- This project using a API from Shadow Smith called Digimon API.
- Once you enter a digimon's name the digimon API fetch's the Digimon's name, image and level and display it on screen.

## Built using the following Technologies:

- React, HTML5, CSS and JavaScript

## How I built this Project:

First, after creating project using React/vite. I started with working in my main file "App.jsx" to set up UseState, UseEffect and fetch. UseState to keep track of the state in my components. Then UseEffect for each time my app renders. I used Fetch to contact my selected API to get information and pass it to my component. Then I created four components that I knew I needed to make this app. First component was for the background. It was pretty quick and simple, I just found the image I wanted as a background. Then linked it with a image tag and styled it a little so it can fit on the page. Then next was the Search Bar component. After passing down props from main file, I used similar code from assignment/homework previously to create the search bar. Then finally I created a component called DisplayMon "short for Display Digimon". For this component I needed to create what will display on the screen. I passed down props from my main file to DisplayMon. In the DisplayMon file I used the props and use "Optional chaining" to pass with props to get the name, image and level from my API. I was having issues trying to get this to work before learning about Optional chaining.

# List of Digimon

It turns out this API can not find All the Digimon from the Digital Universe.
Here is the link to a List of Digimon that can be found using this API
https://digimon-api.vercel.app/api/digimon

## Acknowledgements

[Background-image] - https://www.pngegg.com/
[API from Shadow Smith ] - https://digimon-api.vercel.app/
Instructor Manara - help me learn Optional chaining.
