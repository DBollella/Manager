# Manager

## Technologies used

Firebase is used for authentication, allowing users to create accounts and log in using e-mail and password and database is used to store each logged user's employees and details as a JSON. It also provides security as users are only allowed to read and write content in the database under their user ids (Firebase issues an unique id to each user).

Redux is used to handle the app state. Each reducer handles one piece of state and decides what to do with the data it receives based on the action type received. Then it processes the action and returns a new piece of state.

## How to use it
On the Login screen enter your e-mail and password. If you don't have an account it will create one for you. If you used that e-mail before with a different password, it will show an authentication failed error.
On the Employees screen you can see the Employees you added. Click the add button to add a new employee. Choose their name, phone and work shift day.

## How to test it on your phone

### iPhone
Download Exponent in the App Store.
Use this link to run the app.

### Android
Download the app on your phone with this link.
If you get the message "Can't open this file", open it with a third-party file manager like ES File Explorer. Click install and open the app from the shortcut created on your phone screen.
