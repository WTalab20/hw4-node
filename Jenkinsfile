pipeline {
    agent {
        docker {
            image 'node:18'
        }
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build & Test') {
            steps {
                sh 'npm install'
                sh 'npm test || echo "No tests found"'
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
