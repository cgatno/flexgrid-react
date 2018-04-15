# Wijmo FlexGrid — Bootstrapped with [create-react-app](https://github.com/facebook/create-react-app)

This is a quick and _very_ simple demo of a data grid-containing React app. As you can see, the app contains just a few lines of code thanks to [create-react-app](https://github.com/facebook/create-react-app) and the [Wijmo FlexGrid](https://www.grapecity.com/en/wijmo-flexgrid).

You can view an online demo at [Glitch]() or you can keep reading to get the demo up and running on your own machine!

## Getting Started

First, clone this repo to your machine:

    git clone https://github.com/cgatno/flexgrid-react.git

Next, install dependencies. I used [Yarn](https://yarnpkg.com/en/) for this project, but you can use [NPM](https://www.npmjs.com/) without any issues! Either way, you'll definitely need [Node](https://nodejs.org/en/).

    cd flexgrid-react
    yarn
    # OR, if you don't have Yarn
    npm install

You're all set! Now just run the project using

    yarn start

or

    npm start

## How Does it Work?

Fortunately, Wijmo provides complete interoperability with React out of the box. This means you can hook into the React component lifecycle for all Wijmo controls and implement easy state-based data binding.

Since create-react-app takes care of all the React set up for you, and Wijmo is [now available on NPM](https://www.grapecity.com/en/blogs/wijmo-2018v1-landed), it just takes a few minutes to set up an app like this one.

To learn more about the technical and implementation details of Wijmo's React component wrapper, take a look at this sample's [companion blog post](https://www.grapecity.com/en/blogs/wijmo-flexgrid-best-react-data-grid).