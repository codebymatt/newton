#!usr/bin/env groovy

pipeline {
    agent {
        docker {
            image 'node'
            args  '-u root'
        }
    }
    stages {
        stage('Build') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'

                echo 'Building package...'
                sh 'npm run-script build'
            }
        }
    }
}
