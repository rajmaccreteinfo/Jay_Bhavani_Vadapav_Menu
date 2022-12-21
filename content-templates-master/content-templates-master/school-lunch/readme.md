# School Lunch ![Build Status](http://devtools1.risevision.com:8080/job/Storage-Client-BranchPush/badge/icon)

## Introduction

The School Lunch Template was created to showcase a series of menu items, descriptions and supporting images that would be typical of an school environment. A preview of the template can be seen here: http://commondatastorage.googleapis.com/risemedialibrary-395c64e5-2930-460b-881e-009aabb157df/content-templates/school-lunch/school-lunch.html

##Steps to run the school lunch template:##

1. Fork or download the entire content-templates repository.
![alt tag](images/readme-step1.jpg)

2. Modify the files within the school-lunch folder directory to fit your needs (see below on how to modify specific elements).
![alt tag](images/readme-step2.jpg)

3. Host the entire “school-lunch” folder directory in rise vision storage or your web hosting service.
![alt tag](images/readme-step3.jpg)

4. Copy the link to the school-lunch.html file where you have it hosted and insert the url into a schedule. (you can also add this link to the url gadget within a presentation)
![alt tag](images/readme-step4.jpg)


##Directions to modify the School Lunch Template:##

####Changing the background image
Open school-lunch.html, locate the following code and modify the src url of the img tag to the path of your new background:

```<!-- background -->
<div id="background">
    <img src="images/background.svg" width="auto" height="100%">
</div>```

The hue rotation is created using css keyframes and can be changed in school-lunch.css style sheet by modifying the keyframes associated with the body.
 
####Changing the lunch menu text
Open school-lunch.html, the lunch items are orgainzed within 3 div tags one for each line. To change the menu items modify the text within ```<div class="bottom"></div>```.

The style is controlled within school-lunch.css. There are 3 different media queries within the css used to control the font sizes. One for 1360x768, 1920x1080 and 3840x2160 which are the common display resolutions we see in digital sigange.

####Changing the images
Open school-lunch.html, locate the following code and modify the src url of the img tags to the path of your new images.

```<div class="middle">
        <img src="images/coney.svg">
    </div>```

```<div class="middle">
        <img src="images/chicken.svg">
    </div>```
    
    ```<div class="middle">
        <img src="images/burger.svg">
    </div>```
 
## Built With
actual tools used
- HTML
- CSS

School Lunch Template works in conjunction with [Rise Vision](http://www.risevision.com), the [digital signage management application](http://rva.risevision.com/) that runs on [Google Cloud](https://cloud.google.com).

At this time Chrome is the only browser that this project and Rise Vision supports.

## Submitting Issues
If you encounter problems or find defects we really want to hear about them. If you could take the time to add them as issues to this Repository it would be most appreciated. Please Identify the specific template that has the issue and follow the following format where applicable:

**Reproduction Steps**

1. did this
2. then that
3. followed by this (screenshots / video captures always help)

**Expected Results**

What you expected to happen.

**Actual Results**

What actually happened. (screenshots / video captures always help)

## Contributing
All contributions are greatly appreciated and welcome! If you would first like to sound out your contribution ideas please post your thoughts to our [community](http://community.risevision.com), otherwise submit a pull request and we will do our best to incorporate it.

### Suggested Contributions
- Alternative ways to animate background
- Alternative ways to animate text transitions
- Dynamically update menu from custom data source
- i18n Language Support

## Resources
If you have any questions or problems please don't hesitate to join our lively and responsive community at http://community.risevision.com.

If you are looking for user documentation on Rise Vision please see http://www.risevision.com/help/users/

If you would like more information on developing applications for Rise Vision please visit http://www.risevision.com/help/developers/.

 If you have any questions or problems please don't hesitate to join our lively and responsive community at http://community.risevision.com.
 
**Additional Content Templates can be found here: https://github.com/Rise-Vision/content-templates**

**Facilitator**

[Mathew Meiers](https://github.com/mmeiers "Mathew Meiers")
