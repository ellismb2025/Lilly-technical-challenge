# Lilly Technical Challenge Documentation Template

*This documentation template serves as a place for you to discuss how you approached this challenge, any issues you faced & how you overcame them, or any other points that you feel would be relevant for the interviewers to know. The text in italics is here to guide you - feel free to remove it once you fill out each section!*

***Not every section in this document is required. This is just a template to help get you started. Feel free to add or remove sections as you feel necessary.***

## Approach
*How did you approach this challenge? Did you work through the objectives in any particular order? If so, why? Did you utilize any external resources, such as tutorials, guides, or other materials?

How I first approched this was just to set up the environment correctly and make sure that it ran the way that I expected it to. I then went to do the calculate average function in main.py and figured out the error that was causing the error 500 which was that there was a null price in the data so I told the program to ignore it. After I did the backend of the code I then focused on the frontend.

For the frontend architecture I just used normal JS with the fetch API.*

## Objectives - Innovative Solutions
*For the challenge objectives, did you do anything in a particular way that you want to discuss? Is there anything you're particularly proud of that you want to highlight? Did you attempt some objectives multiple times, or go back and re-write particular sections of code? If so, why? Use this space to document any key points you'd like to tell us about.*

I implimented the GET average price function that also fixes an error as it checks that if there is any null values then it will just skip over them. I took me a couple tries this part because originally it did not do that which made the program not run correctly when I checked it in the program and in the terminal I also saw errors.

## Problems Faced
*I initially faced a couple of problems setting up the project as when i followed the instuctions on the git to set up the environment it was missing a part on how to make sure that the project would update my git repo instead of the original one that it was cloned on and this was the error it gave "fatal: The current branch has no upstream branch". The solution to this was to "git push -u origin main" which pushed all the curerent files to my project but also enmsured that all the new code I wrote would also go there.

 I also faced another problem where the interpreter was not working correctly even after installing the depndencies correctly. The way I fixed this was select new interpreter, go to the files of the project and find python.exe in the Scripts folder. Another problem I faced was when I did the average price function in main.py this is because when it tries and add up all the prices it still adds up even when it says null which causes it to not work as expected, to fix this I made a list of all the prices and when it finds one that says null it just ignores it. 

Another issue faced was on the frontend where it also couldn't read null. i found this out using the browser console where it said "TypeError: Cannot read properties of null" which told me that the document was returning null to the frontend and it was trying to populate a list container that did not yet exsist in the html. I fixed this by updating the index.html file to include a medicine list whihc allowes the JavaScript to put the medicine list items in the necessary place.
 *

## Evaluation
*How did you feel about the challenge overall? Did some parts go better than others? Did you run out of time? If you were to do this again, and were given more time, what would you do differently?*