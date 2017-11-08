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
                sh 'ssh matt@178.62.114.84 rm -rf /home/matt/www/newton/temp_deploy/dist'

                echo 'Create temp folder if not there...'
                sh 'ssh matt@178.62.114.84 mkdir -p /home/matt/www/newton/temp_deploy'
                sh 'pwd'
                echo 'Copying package to temp dist...'
                sh 'scp -r ./dist matt@178.62.114.84:/home/matt/www/newton/temp_deploy/'

                echo 'Moving package from temp to live...'
                sh 'ssh matt@178.62.114.84 rm -rf /home/matt/www/newton/dist'
                sh 'mv /home/matt/www/newton/temp_deploy/dist /home/matt/www/newton/'
            }
        }
    }
}
