# Recipe Tutorial

Create a recipe website using CRA, Netlify and Airtable.


In this episode we setup a Netlify Lambda function to fetch recipes from an Airtable Base. Then we create a `useRecipes` hook to fetch recipes from our newly created Lambda function and we wire up the `Navigation` component to display our recipes.

## Development

### Frontend

Install dependencies

```
yarn 
```

Run Create React App

```
yarn start
```

### Backend

Run Netlify Lambda dev server

Run in a seprate terminal the Lambda local dev server which is found in the `server` folder.

```
cd server
```

Install dependencies

```
yarn
```

Run dev server

```
AIRTABLE_KEY=<your api key> yarn lambda:serve
```
