
pipeline {
    agent any

    tools {
        nodejs 'NodeJS 22'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Jenkins is checking out the repository.'
            }
        }

        stage('Check Node.js') {
            steps {
                sh 'node --version'
                sh 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Test Application') {
            steps {
                sh 'node --check app.js'
                echo 'Node.js syntax check passed!'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t nodejs-cicd-practice:jenkins .'
            }
        }

        stage('Deploy Locally') {
            steps {
                sh '''
                    docker rm -f nodejs-app-jenkins || true
                    docker run -d \
                        --name nodejs-app-jenkins \
                        --restart unless-stopped \
                        -p 8082:8080 \
                        nodejs-cicd-practice:jenkins
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh 'sleep 3'
                sh 'curl --fail http://host.docker.internal:8082/'
            }
        }
    }
}
