# Angular Technical Test
<img width="1644" alt="image" src="https://user-images.githubusercontent.com/54248349/208759802-4c8d0df5-7dd4-4d6f-9a53-c878a7a1484a.png">

Some words from my side: 

Taking in consideration that I had a freedom in architecture of the app :D , I implemented filter inside the same input as per inserting new toDoItem (so before adding new one app will help you to check maybe it was already implemented).
Also, only after implemntation of the current version I checked the documentation of the json-server and found that it actually has own filter param https://www.npmjs.com/package/json-server#filter 

But I was thinking from the beggining that I am limited only with these 5 routes which were discribed below. So, normally filtering should be done on a BE part. But for now, it is filtered only locally and only by Label property. (I could change it if you wish).


Also, I did not play to much with the unit tests, it actually will requires more time, but at least some test were writtten.

If you have any questions or need more implementation, don't hesitate to ask me :)

###  What is implemented:
* Build a todo list single page application.
* Add/Edit/Delete todo items
* Mark todo item as done
* Ability to filter items in the todo list
                          
###  These points are presented

* JS code unit tests
* Modular Angular code 
* Dependency injection 

###  Some gloabal variables for colors are used:                 

* Some basic styling with SASS. It would be nice if you can demonstrate how to write modular SCSS code


### Quick start
#### clone the repo
Go to your developer folder
Clone this project repository to your local machine

#### change into the repo directory
`cd tech-test`

#### install --> use node v14
`npm install`

#### serve
`npm run server`                   
`npm run start`

#### Running unit tests
`npm run test`

