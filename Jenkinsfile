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
        stage('Deploy'){
            steps {
                 nodejs('NodeJS'){
                    sh 'Node --version'
                }
            }
        }
        
    }
}
