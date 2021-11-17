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
        stage('react-scripts start'){
            steps {
                 nodejs('NodeJS'){
                    sh 'react-scripts start'
                }
            }
        }
        
    }
}
