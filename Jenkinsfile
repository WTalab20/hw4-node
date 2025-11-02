pipeline {
    agent any

    tools {
        nodejs "node18"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install & Test') {
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }

        stage('Archive') {
            steps {
                sh 'zip -r app.zip *'
                archiveArtifacts artifacts: 'app.zip', fingerprint: true
            }
        }
    }
}
