# blog-post-web-app

This app allows users to view and create blog posts. It provides a GraphQL API for managing blog content and a React-based frontend for displaying the posts. Users can browse a list of blog entries, click to read full details, and add new posts via the API.

## About the Project
### Backend – GraphQL API
Built using Express, Apollo Server, and GraphQL

Exposes a /graphql endpoint with the following features:

Query to fetch all blog posts

Query to fetch a blog post by ID

Mutation to create a new blog post

Data is stored in memory (no database)

#### To run the API:
```
cd graphql
npm install
node index.js
```
##### Server runs at: http://localhost:4000/graphql


### Frontend – React App
Built using React, TypeScript, Material UI, and Apollo Client

Displays a list of blog posts

Allows users to click on a post to view full details

### To run the frontend:
```
cd react-app
npm install
npm start
```
##### App runs at: http://localhost:3000
