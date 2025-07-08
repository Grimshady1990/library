# Introduction

In this project we will be building a simple library that collects basic information about books and displays it in the web browser. It will gather information based on a form that is accessed via a clickable button 

Okay so this project didn't start with a plan as the first steps of the project brief were pretty self explanatory.

# Planning

## Step 1

Step 1 is actually more like step 3, but we are going to be planning a little bit differently this time. Instead of creating a whole plan we are going to be tackling each section piece by piece. The reason for this is because every step iks going to feel like a mountain and planning the whole trek is going to be a daunting task, its best to focus on scaling each mountain individually.

Okay with the hiking metaphors out of the way lets focus on the current task.

### The Form

At this point we have built the mechanism which displays our books how we want in the web browser now its time to create the form that will add the books.

for this we will use something called a <dialog> this will contain a form that will be triggered when the button is pressed.

I have never made one of these personally so it will be best just to dive in a get moving.

Although I haven't use <dialog> I have made forms so my first job will be to create the form and get that working smoothly before making it a pop up feature.

The form needs the following inputs

- Title (textbox)
- Author (textbox)
- page count (numbers)
- description (textarea)
- read (checkbox)
- image (file upload)

For now i will get to work on this and when I reach a hurdle I will be back to plan some more.

### Display User Submissions

We have the form up and running with dialog and modal and everything is working as expected. Next we have to figure out how to get that information and add it to our library

# Step 2

now we have the form working exactly as the spec requires our next challenge is to get the delete button to delete the entire book it is a sibling off 

## Identifying which book to delete

I'm gonna be straight on this I have no idea how to tackle this one. All I have is we can use data-attribute on the unique id to correctly identify the book but how to make use of this is a different story.

### Learn more about data-attributes

Since this is the first time I have heard of data-attributes it might be worth watching some videos and reading some articles about it, so lets do that first. 


### Job Done!

Okay i worked out the data-attribute problem and made it possible to delete any book I also added the toggle switch. On paper this project is finish but Im not happy with that idea.

# Step 3

now the assignment is complete its time to start my own work starting with a code clean up and a better understanding of what I have created.

# Step 4 

Code is all cleaned Im a little sad that my data-id attribute that I was using on the delete function does absolutely nothing. The good news is my delete function works.

Anyhoo, the next step will consist of tasks being logged to pomofocus.io

## Commit Commit Commit

Experience has taught me that when I am checking off tasks using pomofocus its very easy to forget to commit and you can quickly end up with a lot of changes to explain. So now every time a task is ticked off in pomofocus a commit must be made. This is non-negotiable.

## Bounty Hunter

This is always my favorite part of the project. The mission is to click scroll drop and roll and try to think of all the little improvements that need to be made. 

### Important 

These improvements should only be functional don't worry about color and style just yet, first fix functional issues

