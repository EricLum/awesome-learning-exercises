# Awesome Learning Exercises 
This repo contains the source code for the Awesome Learning platform. These sub-folders are picked up by the codesandbox.io github wizard and turned in to on-the-fly codesandbox instances. 

## Git Wizard Process
The codesandbox wizard works by pulling the source code from the specified link and bootstrapping a new codesandbox instance with it. Check out the docs [here](https://codesandbox.io/docs/importing#import-from-github)

In the Awesome Learning platform repo, we link to the codesandbox git endpoint. When a user clicks the link within the session, codesanbox stands up an on the fly instance for them. 

The codesandbox endpoint works by pre-pending your username and repo link with `https://codesandbox.io/s/github/`. If your lesson is nested within the awesome learning exercises repo, it would look something like this.    

```
endpoint link: `https://codesandbox.io/s/github/`    

lesson deeplink: `/wayfair/awesome-learning-exercises/tree/master/data-types/types-and-equality`   

combined link in the repo: `https://codesandbox.io/s/github/wayfair/awesome-learning-exercises/tree/master/data-types/types-and-equality`
```

Clicking on the above combined link will open the codesandbox with the bootstrapped code from that part of the exercises repo. 

## Repo Structure
You don't have to npm install anything. This isn't meant to be used as a standalone entity. 

Because this repo is meant only to be a source for codesandboxes, it must follow a few guidelines though -

### Guiding Principles 
When adding a new lesson, it should:
1. Include a `package.json` at the top level of each lesson folder. 
    - The codesandbox git wizard requires an accessible `package.json` when open a nested link, which all lesson links will be.
2. Include all required dependencies for your particular repo in each lesson `package.json`
3. Specify the file you wish the user to begin with under the "main" keyword in the `package.json`. For example `"main": "./src/exercises/1-types.test.js",` will open the codesandbox to the `1-types.test.js` file. 
4. Include suggested solutions to all exercises

### Repo Structure 
We follow the rough structure of 
```
├── course-name
│   ├── lesson-name-1
│   ├── lesson-name-2
│   ├── etc....
```
This manifests as something like this: 
```
├── array-methods
│   ├── advanced-reduce
│   ├── filter-and-map
│   ├── forEach
│   ├── reduce
│   └── sort
├── async-patterns
│   ├── advanced-promises
│   └── intro-to-promises
├── data-types
│   ├── objects
│   └── types-and-equality
├── functions-and-scope
│   ├── closures
│   ├── context-and-arrows
│   └── scope
├── testing
|   ├── components-and-enzyme
|   └── intro-to-unit-testing
├── readme.md
└── package.json
```

### Example Lesson Structure With Jest Tests
Within each lesson directory should be all the files required to build a working codesanbox instance. 

**NOTE:** For the codesandbox github wizard to work, you will need a package.json file at the top level of your lesson folder. 

Example "types and equality" lesson under the "data-types" course directory
```
├── data-types
│   └── types-and-equality
│       ├── package.json
│       └── src
│           ├── exercises
│           │   └── __tests__
│           │       ├── 1-types.test.js
│           │       ├── 2-equality.test.js
│           │       └── 3-practical-types-and-equality.test.js
│           └── solutions
│               ├── 1-solution.js
│               ├── 2-solution.js
│               └── 3-solution.js
```

#### A quick word about Jest
If you are relying on jest tests, test files must be contained within a `__tests__` folder nested underneath a `src` directory or codesandbox will not transpile the files correctly, and global Jest variables will not be in scope. This is a known issue for codesandbox and will hopefully be resolved soon. 

#### Example package.json for a lesson
```
{
  "name": "data-types-types-all-exercises",
  "version": "1.0.0",
  "description": "Group and pair exercises.",
  "main": "./src/exercises/1-types.test.js",
  "scripts": {},
  "dependencies": {
    "jest": "24.1.0"
  },
  "devDependencies": {
    "@types/jest": "23.3.13",
    "jest": "23.6.0"
  },
  "keywords": [],
  "eslintConfig": {
    "env": {
      "jest": true
    }
  }
}
```


