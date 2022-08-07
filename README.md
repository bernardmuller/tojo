# ToJo

This is the repository for the ToJo app.

Tojo is a task journaling app that enables you to give feedback on your completed tasks on your todo lists.

## Getting started

To get started and run the project, please follow the instructions below:

1. Install backend dependencies

```sh
    cd backend
    npm install
```

2.  Install frontend dependencies

```sh
    cd frontend
    npm install
```

3. Insall dev dependencies

```sh
    npm install
```

4. Run the project

```sh
    npm start
```

# Project Background

## Approach

The aim of the app is to allow a user to create a todo task and on completion, give feedback on the outcome of the task.
The design of the project was to keep it as simple as possible. It is build with technologies that allow for rapid development, but are easily refactored to what is needed as the project scales.

Thus a basic NodeJs backend is build that that uses the Jsonplaceholder api to generate and manipulate the "todo" resource they provide.
It is written in TypeScript fro both the frontend and backend, useing Nextjs and Express as the primary frameworks.
For the frontend, react-query is used for data querying and mutations, as this package allows for data caching that provides a smoother user experience with data persistence between pages. React-hook for is used to extract, compile and validate user input on forms. Material UI is used as the primary UI library, because it allows for rapid frontend development and the ability to easily manipulate the styling of the components.

A image file of the initial wireframes can be found in the top most folder of the project under the name "wireframes.png".

## Future scope and considerations

For future improvements and planning, I found the following features can bring the most value.

-   While developing the project I found that the Jsonplaceholder API does not have data persistence and thus does not allow you to see your changes in real time. A Database like Postgress or MongoDB, along with Prisma, can be used for data persistence. If the time limit for this asignment would be extended or I would continue to work on this project, this would be my first priority feature to implement.

-   At this current stage, only the backend as a set of few test, so setting up unit/end-to-end tests can be done to make sure that components and functions are working properly on the frontend.

-   Implementing pagination to the todo list view with ensure good performance and best user experience for dealing with a large number of todo items.

-   Authentication and user management to implement the ability for users to create their own profiles on the app and save their tasks to their user profile. Another method of authentication I would implement, is authentication with just a session token. This would allow a user to anonymously use the app without needing a profile.

-   Refactoring the current frontend from using Material UI to a custom library using TailwindCSS, Styled Component or SaSS.

-   Using a manifext.js file to enable the app to be installed as a Progressive Web App that can be used on the web and on mobile seamlessly.
