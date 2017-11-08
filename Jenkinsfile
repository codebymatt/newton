#!usr/bin/env groovy

pipeline {
    agent any
        /*docker {
            image 'node'
            args  '-u jenkins'
        }*/
    stages {
        stage('Build') {
            steps {
                sh 'whoami'
                echo 'Installing dependencies...'
                sh 'yarn install'

                echo 'Building package...'
                sh 'yarn run build'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Removing old temp package...'
                //sh 'ssh matt@178.62.114.84 rm -rf ~/www/newton/temp_deploy/dist/'
                sh 'ssh matt@178.62.114.84 mkdir /home/matt/www/test'

                /*echo 'Create temp folder if not there...'
                sh 'ssh matt@178.62.114.84 mkdir -p ~/www/newton/temp_deploy'

                echo 'Copying package to temp dist...'
                sh 'scp -r /dist matt@178.62.114.84:~/www/newton/temp_deploy/'

                echo 'Moving package from temp to live...'
                sh 'ssh matt@178.62.114.84 “rm -rf ~/www/newton/dist/ && mv ~/www/newton/temp_deploy/dist/ ~/www/newton/”'*/
            }
        }
    }
}
