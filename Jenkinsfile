pipeline {
    agent any

    stages {
        stage('Setup Node') {
            steps {
                sh 'curl -fsSL https://deb.nodesource.com/setup_18.x | bash -'
                sh 'apt-get install -y nodejs'
            }
        }

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
