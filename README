# Introduction
This is a sample project used to demonstrate automating Docker deployments. The accompanying tutorial is at [https://maximorlov.com/automate-your-docker-deployments/](https://maximorlov.com/automate-your-docker-deployments/).

Files of interest are `.circleci/config.yml` and `deploy.sh`.

# Getting started
1. Clone the repo
`git clone git@github.com:Maximization/autodeploy-docker.git && cd autodeploy-docker`

2. Start the server
`npm start`

3. Visit `localhost:3000` in your browser

# CircleCI Environment Variables
The following environment variables are used in the deployment pipeline:

`DOCKER_USERNAME` - Docker Hub username
`DOCKER_PASSWORD` - Docker Hub password
`SSH_KEY` - Base64 encoded private SSH key that has access to the deployment server
`SERVER_PUBLIC_KEY` - Base64 encoded public SSH key of the deployment server
`SERVER_IP` - Deployment server IP address

# Docker commands
## Build image
`docker build --rm -t autodeploy-docker .`

## Run container
`docker run --rm --init -d --name autodeploy-docker -p 3000:3000 autodeploy-docker`

## Clean up after Docker
`docker system prune -af`