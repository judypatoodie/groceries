# Groceries Application
Problem: Presented with the need to manage items collaboratively with other users.

Solution:
Build a grocery application from Node.js, Express, CSS, and HTML that users can sign up for an account and sign in. Once authenticated, users can add grocery items to a list that will update on everyones list. Besides creating, users will be able to edit, and delete their grocery items from the list as well.

## Getting Started

### Set up
1. In your terminal, clone the git repo into a directory of your choice
2. `cd` into the newly cloned repo
3. Run `npm install` to install all the node modules
4. Run `npm start` to start the application
5. In your browser, navigate to `localhost:3000`to view the live App!

OR you can simple navigate to the deployed app at - [link to deployed app](https://groceries4u.herokuapp.com/).

### Testing
To run Jasmine TDD tests, do the following:
1. In your terminal, clone the git repo into a directory of your choice
2. `cd` into the newly cloned repo
3. Run `npm install` to install all the node modules
4. Run `npm test` to run Jasmine tests

### How to
**Sign Up for an account**: Click `Sign up` in the navigation pane.

**Sign-in**: Sign in with the credentials you have inputted when you **Signed-up** for an account.

**Add/Create new grocery items**: Sign-in with your account you have created with the **Sign-up** feature (if you haven't already please sign-up).
Click `+New Item` to add a new grocery item to the list.

**Edit**: You can only do this if you are signed-in. To edit, click on the `pencil` icon button next to the grocery item you wish to edit.

**Delete**: You can only do this if you are signed-in. To delete, click on the  red `X` icon you wish to delete.

## Built With

- Node.js
- Bootstrap
- Jasmine TDD
- HTML5
- CSS
- JavaScript


## Future Enhancements

- Allow users to create, load, and switch between multiple lists by date within a group.
- Allow lists to be private to a single user.
- Allow items to be prioritized.
- Add socket.io to load updates to the grocery list in real-time 

