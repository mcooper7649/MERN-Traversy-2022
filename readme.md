## Readme GoalSetter App
![GoalSetter](https://img001.prntscr.com/file/img001/E7R8w7UsRJexRrN1vRgGog.png)

This was originally sourced from Brad Traversy's MERN 2022 Course

[Link to Tutorial](https://www.youtube.com/watch?v=UXjMo25Nnvc)

[Live Site](https://goalsetter-redux-dashboard.herokuapp.com/login)

1. npm run dev to run both client and server locally. (Using Concurrently)
2. DB connection information can be found in backend/config/db.js


### About
- Hosts
  - MongoDB Cloud Atlas
  - Heroku 

![DB](https://img001.prntscr.com/file/img001/GbPw8YnBTLmbjaeTz_cJ-w.png)

- Backend
  - Uses express with a MongoDB connection (cloud atlas)
    - Express
      - Has User Routes and Goal Routes
  - MongoDB
    - UserDB Collection stores username, email and password
    - Has userModel and Goal Model for the DB object
  - Middleware
    - Authorization middleware uses Bcrypt and JWT for encyrption of user
    - Error Middleware is a reusable status/error code responder
  - Controllers
    - CRUD operations and logic for goal management (interacts with API)
    - CRUD operations and logic for user management (interacts with API)

![Login-with-Toastify](https://i.gyazo.com/ac779df92d5ab7f7af293b0d43a2d00b.gif)

- Frontend
  - React
    - Pages
      - Dashboard
      - Login
      - Register
  - Alerting
    - Toastify for prompting of errors from backend
  - Redux for handling the auth/goal slices
  - Axios is for handling the auth/goal api service requests
  - Components
    - Goalform, GoalItem, Header, Spinner