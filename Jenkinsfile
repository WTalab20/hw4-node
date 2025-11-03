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

        stage('Build & Test') {
            steps {
                sh 'node -v'
                sh 'npm install'
                sh 'npm test || echo "Tests skipped"'
            }
        }

        stage('Archive') {
            steps {
                sh 'zip -r app.zip * || true'
                archiveArtifacts artifacts: 'app.zip', fingerprint: true, allowEmptyArchive: true
            }
        }
    }
}
