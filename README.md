
# Manager

## Technologies used

Firebase is used for authentication, allowing users to create accounts and log in using e-mail and password and database is used to store each logged user's employees and details as a JSON. It also provides security as users are only allowed to read and write content in the database under their user ids (Firebase issues an unique id to each user).

Redux is used to handle the app state. Each reducer handles one piece of state and decides what to do with the data it receives based on the action type received. Then it processes the action and returns a new piece of state.

## How to use it
On the Login screen enter your e-mail and password. If you don't have an account it will create one for you. If you used that e-mail before with a different password, it will show an authentication failed error.
On the Employees screen you can see the Employees you added. Click the add button to add a new employee. Choose their name, phone and work shift day. When you hit 'create' it will be added to the database. 
You can Text an employee with their next shift and you can select Fire to remove them from the database.

### Android APK
This app is available for Android.

[Download](https://github.com/she-dev/Manager/files/643973/manager-latest.apk.zip) * **Updated** *

### Demo
![](http://i.imgur.com/exKbvcs.gif)

## Known issues
After clicking on an employee and not making any modification, their info will remain on the form when you add the next employee.
