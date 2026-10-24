
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
    }
}
