# Nakaapp Registration HR Tokopedia

Tokopedia Registration Project has separate into two folder: 
`Clvin using golang` and `Hris using reactjs`

## Getting started
A step by step how to get a development env running:
```
1. Clone this repo using `git clone git@github.com:tokopedia/nakaapp.git <your-project-name>`.

2. cd to <your-project-name> and delete the existing git repository by running `rm -rf .git`.

3. Initialize a new git repository with `git init`, `git add .` and `git commit -m "Initial commit"`.
```
### For Clvin
in Folder Clvin:
```
1. Run [dep ensure] to install the dependencies. If you don't have [dep](https://github.com/golang/dep), install using homebrew etc.

2. Run [go build] and then ./<your-project-name> to start the local web server.

3. Run [go run app.go] to start clvin

4. Server will run in `http://0.0.0.0:8080` and you should see the app running!
```

### For Hris
```
1. Run [npm install] to install the dependencies in Hris folder. If you don't have [npm]
install npm first optional you can install yarn

2. Run [npm run-script start-webpack] || [yarn start-webpack] to start Hris

3. Go to [localhost:3000] and you should see the app running in development!
```
