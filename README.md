bootcamp-angular-firebase-demo
==============================

A demo to present the technologies, Angular.js and Firebase combining into a sample voting application.

### Prerequisites

Node Package Manager (npm) - use npm to install project dependencies including bower and http-server. You can get npm [here](http://nodejs.org/)

### Install Dependencies

After cloning the repository, you firstly need install Node Package Manager:

```
sudo apt-get install npm
```

Then the next step is installing the packages:

```
npm install -g
```

We have two kinds of dependencies in this project: tools and angular framework code.

* We get the tools we depend upon via `npm`, the [node package manager](http://nodejs.org/).
* We get the angular code via `bower`, a [client-side code package manager](http://bower.io/).

```
npm install bower -g
cd app
bower install
```

Bower will install all client dependencies into  the following folder in your project.

* `app/libs` - contains the angular framework files
