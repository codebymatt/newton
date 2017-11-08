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
                sh 'scp -r ./dist matt@178.62.114.84:/home/matt/www/newton/temp_deploy'

                echo 'Moving package from temp to live...'
                sh 'ssh matt@178.62.114.84 ls /home/newton'
                sh 'ssh matt@178.62.114.84 cd /home/newton/www/newton && rm -rf dist'
                sh 'ssh matt@178.62.114.84 ls /home/newton/www/newton/temp_deploy'
                sh 'ssh matt@178.62.114.84 mv /home/newton/www/newton/temp_deploy/dist /home/newton/www/newton/'
            }
        }
    }
}
