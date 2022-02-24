## Readme GoalSetter App
--
![GoalSetter](https://img001.prntscr.com/file/img001/E7R8w7UsRJexRrN1vRgGog.png)

This was originally sourced from Brad Traversy's MERN 2022 Course

[Link to Video](https://www.youtube.com/watch?v=UXjMo25Nnvc)
[Live Site](https://goalsetter-redux-dashboard.herokuapp.com/login)

1. npm run dev to run both client and server locally. (Using Concurrently)
2. DB connection information can be found in backend/config/db.js


###About
--
- Hosts
  - MongoDB Cloud Atlas
  - Heroku 

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

- Frontend
