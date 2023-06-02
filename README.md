
# Jeffrey Bohac's Portfolio App

This is a portfolio app for Jeffrey Bohac. 

The welcome page is a modal set to display first,
all pages are modal and use a function that takes an element id
as an argument and displays the appropriate page.

The layout for the page utilizes several flexboxes. A main flexbox contains the whole page,
in desktop view the page is displayed in columns 
while the mobile view is displayed as a reverse row with the 
nav bar wrapping to the right for easier mobile navigation.

The body box is used to display modal pages  

While I find myslef able to use flexbox somewhat effectively the logic still 
gives me trouble sometimes especially if I'm 4 boxes deep trying 
to understand which is my current 'main axis'.

The about me section uses a function that takes an element
id as an argument and outputs paragraph text from about.html to the 
appropriate section onn click using the ajax load() method. It may be better practice to 
have it insert on page load, will need to run that by a few people but from what 
I've researched we probably won't be using ajax methods for long.

The Works page displays a carousel of images taken from my time as a 
steel fabricator. This carousel is functionally similar to the corgi carousel we made in class. 
In mobile view, buttons are placed directly above the images and on desktop view, they are displayed beside the header text.

The projects page displays links to various coding
projects I have completed and uploaded. The carousel on this page is 
on a 6 second interval to progress automatically.

The hamburger menu in the nav bar drops down a list of links when clicked.
linkedin, twitter, and github will direct you to my personal account pages 
in a new tab. 

The 'colors' link in the dropdown displays another modal page that 
contains several color options. These will change the background color and some text color
for the entire page as well as influencing the colors of the img borders and buttons due to them having a
semi-transparent background.


