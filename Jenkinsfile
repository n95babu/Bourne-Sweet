pipeline {
    agent any 
    stages {
        stage('Build') { 
            steps {
                echo 'excuting npm'
                nodejs('NodeJS'){
                    sh 'npm install'
                }
            }   
        }  
    }
}
