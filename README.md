# JS Code Challenge

### Install

```sh
npm install
# or
yarn
```

### Run the app

```sh
npm start
# or
yarn start
```

Then application is available on `http://localhost:8080`.

## Tasks

Here is a simple todo list, written with minimal use of libraries.

In the tasks below, it is proposed to extend and improve the application. Each task covers some part of
frontend engineering. 

Please read tasks carefully and give us your time estimation. If you have any questions, please do not hesitate
to contact us.

After solving of all tasks please make a pull request. Please for each task create separate commit with
same name as title of task.

### JS-101: Add item on press Enter

Our users are complaining, that they are used to submit value on pressing Enter, but it doesn't work
in our application.

Please provide ability to add item with pressing `enter` key.

### JS-102: Add filters

Please provide such filters: 
- "Show all" (default)
- "Show open" (display all items with `done: false`)
- "Show closed" (display all items with `done: true`)

Filters should be implemented with radio buttons.

### JS-201: Replace the store

When our developers finished building the store, 
they realized that there was already a well-known library with very similar functionality.

Please replace our self-written solution with redux.

### JS-202: Optimize rendering

Current vanilla-js solution makes quite a lot unnecessary rerenders. Also it's hard to extend. 

1. Please replace `innerHTML`-solution by `react` and make sure it doesn't make unnecessary rerenders.
2. Update event listeners
3. Feel free to update structure of project

### JS-203: Update styling

Our designers recommended to update design of the application since current design is too ascetic. 

Feel free to choose any existing design or to build your own.  

By the way, other teams in our company use css-in-js approach ([JSS](https://github.com/cssinjs/jss)),
and it would be more consistent if we have it in our project too. 

### JS-301: Update bundling

1. Please make production build for this app on `npm run build`. Both css and js bundles should be minified and uglyfied
2. `react` and `react-dom` in production build should be taken from CDN
3. Optional: please implement server side rendering

### JS-302: Real API

Please use some open source API (e.g. https://jsonplaceholder.typicode.com) to get, update, toggle and delete
the todo item.

Optional: if you did server side rendering in JS-204, please find a way to make universal GET call for the list:

1. If user opens the page without query parameters, make client-side request
2. If user opens the page with `/?server=true`, make server-side request
