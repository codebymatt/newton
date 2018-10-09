#!usr/bin/env groovy

// <SERVER_LOCATION_VARIABLE> and <USER> should
// be set as an environment variables IRL

pipeline {
    agent any
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
                sh 'ssh <USER>@<SERVER_LOCATION_VARIABLE> rm -rf /home/<USER>/www/newton/temp_deploy/dist'

                echo 'Create temp folder if not there...'
                sh 'ssh <USER>@<SERVER_LOCATION_VARIABLE> mkdir -p /home/<USER>/www/newton/temp_deploy'

                echo 'Copying package to temp dist...'
                sh 'scp -r ./dist <USER>@<SERVER_LOCATION_VARIABLE>:/home/<USER>/www/newton/temp_deploy/'

                echo 'Cleaning package destination...'
                sh 'ssh <USER>@<SERVER_LOCATION_VARIABLE> rm -rf /home/<USER>/www/newton/dist'

                echo 'Moving package from temp to live...'
                sh 'ssh <USER>@<SERVER_LOCATION_VARIABLE> mv /home/<USER>/www/newton/temp_deploy/dist /home/<USER>/www/newton/'
            }
        }
    }
}
