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
        stage('Deploy') {
            sh 'ssh matt@178.62.114.84 rm -rf /www/newton/temp_deploy/dist/'
            sh 'ssh matt@178.62.114.84 mkdir -p /www/newton/temp_deploy'
            sh 'scp -r /dist matt@178.62.114.84:/www/temp_deploy/'
            sh 'ssh matt@178.62.114.84 “rm -rf /www/newton/dist/ && mv /www/newton/temp_deploy/dist/ /www/newton/”'
        }
    }
}
