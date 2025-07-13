# Introduction

In this project, we’ll be building a simple library that collects basic information about books and displays it in the web browser. It will gather information based on a form that is accessed via a clickable button.

Okay, so this project didn't start with a plan, as the first steps of the project brief were pretty self-explanatory.

# Planning

## Step 1

Step 1 is actually more like Step 3, but we’re going to be planning a little differently this time. Instead of creating a full plan, we’ll tackle each section piece by piece. The reason for this is that every step is going to feel like a mountain, and planning the whole trek would be a daunting task. It’s best to focus on scaling each mountain individually.

Okay, with the hiking metaphors out of the way, let’s focus on the current task.

### The Form

At this point, we’ve built the mechanism that displays our books the way we want in the web browser. Now it’s time to create the form that will add the books.

For this, we’ll use something called a `<dialog>`. This will contain a form that is triggered when a button is pressed.

I’ve never made one of these personally, so it’s best to just dive in and get moving.

Although I haven’t used `<dialog>` before, I have made forms, so my first job will be to create the form and get it working smoothly before turning it into a pop-up feature.

The form needs the following inputs:

* Title (textbox)
* Author (textbox)
* Page count (number)
* Description (textarea)
* Read (checkbox)
* Image (file upload)

For now, I’ll get to work on this. When I hit a hurdle, I’ll come back and plan some more.

### Display User Submissions

The form is up and running with the dialog and modal, and everything is working as expected. Next, we have to figure out how to take that information and add it to our library.

## Step 2

Now that the form works exactly as the spec requires, our next challenge is getting the delete button to remove the correct book — the one it's a sibling of.

### Identifying Which Book to Delete

I’m going to be straight on this: I have no idea how to tackle this one. All I have is that we can use a `data-attribute` on the unique ID to correctly identify the book — but how to make use of this is a different story.

### Learn More About Data Attributes

Since this is the first time I’ve heard of data attributes, it might be worth watching some videos and reading some articles about them. So let’s do that first.

### Job Done!

Okay, I figured out the data attribute problem and made it possible to delete any book. I also added the toggle switch. On paper, this project is finished — but I’m not happy with that idea.

## Step 3

Now that the assignment is complete, it’s time to start my own work: beginning with code cleanup and developing a better understanding of what I’ve created.

## Step 4

The code is all cleaned up. I’m a little sad that the `data-id` attribute I was using in the delete function does absolutely nothing. The good news is the delete function still works.

Anyhoo, the next step will involve logging tasks on [pomofocus.io](https://pomofocus.io).

### Commit, Commit, Commit

Experience has taught me that when I’m checking off tasks in Pomofocus, it’s very easy to forget to commit. You can quickly end up with a lot of changes to explain. So from now on, every time a task is ticked off in Pomofocus, a commit must be made. This is non-negotiable.

### Bounty Hunter

This is always my favorite part of the project. The mission: click, scroll, drop, and roll — try to think of all the little improvements that need to be made.

#### Important:

These improvements should be **functional only**. Don’t worry about colors and styles just yet — fix functional issues first.

# Conclusion

So I hit this one like a cowboy. In the end, I didn’t really plan out my steps. I found an issue and worked on fixing it. Although that’s fine, I’d like to see myself committing more often in the future.

Also, I haven’t added any comments to the scripts. Sure, I *could* go through and add them now that I’m done, but that kind of defeats the point. I want to add comments while coding to make debugging easier — not after the bugs are already fixed.

