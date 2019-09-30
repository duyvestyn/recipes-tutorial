# Recipe Tutorial

Create a recipe website using CRA, Netlify and Airtable.


In this episode we setup a Netlify Lambda fetch recipes from an Airtable Base. Then we create a `useRecipes` hook to fetch recipes from our newly created Lambda function and we wire up the `Navigation` component to display our recipes.

## Development

Install dependencies

```
yarn 
```

Run Create React App

```
yarn start
```

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
yarn lambda:serve
```
