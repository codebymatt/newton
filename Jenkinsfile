#!usr/bin/env groovy

pipeline {
    agent {
        docker {
            image 'node'
            //args  '-u root'
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
            steps {
                echo 'Removing old temp package...'
                sh 'ssh matt@178.62.114.84 rm -rf /www/newton/temp_deploy/dist/'

                echo 'Removing old temp directory...'
                sh 'ssh matt@178.62.114.84 mkdir -p /www/newton/temp_deploy'

                echo 'Copying package to temp dist...'
                sh 'scp -r /dist matt@178.62.114.84:/www/temp_deploy/'

                echo 'Moving package from temp to live...'
                sh 'ssh matt@178.62.114.84 “rm -rf /www/newton/dist/ && mv /www/newton/temp_deploy/dist/ /www/newton/”'
            }
        }
    }
}
