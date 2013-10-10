# Major Workflow

Major monitors git repos and performs a series of actions on every commit.

### Setting up a Major Server

    npm install -g major-server
    major-server start

By default major will run on port 53862 and put it's database in ~/.major/db

### CLI Usage

#### Installation

    npm install -g major

By default major will look to connect to http://localhost:53862

### Setting the default major-server location

    major set config url http://major.company.com:53862

### Listing existing projects

    major list

### Initialize a new project

    major init

Create a new major.json project config file in the current directory.

### Setting up a new project

Looks for a major.json in the current directory and attempt to setup on server.

    major setup <PATH>

### Project status

    major status <PROJECT NAME>

Will return a list of branches and the current states.

### Branch status

    major status <PROJECT NAME>/<BRANCH>

Will return a list of the builds and the current states.

### Build status

    major status <PROJECT NAME>/<BRANCH>#<BUILD ID>

Will return the status of the build and the build output.

### Manually run a step

    major step <PROJECT NAME>/<BRANCH>#<BUILD ID> <STEP>

### Manually run a script on a build

    major run <PROJECT NAME>/<BRANCH>#<BUILD ID> <SCRIPT> <ARGS>

## Build States

Branches can been in any of the following states:

### New

Initial state for all branches.

### Succeed

All build steps built successfully

### Failed

One of the build steps has failed

## License

New BSD
