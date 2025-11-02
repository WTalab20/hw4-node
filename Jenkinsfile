pipeline {
  agent any
  tools { nodejs 'node18' }   // We'll configure this tool in Jenkins
  stages {
    stage('Checkout') {
      steps { checkout scm }
    }
    stage('Install') {
      steps { sh 'npm ci || npm install' }
    }
    stage('Test') {
      steps { sh 'npm test' }
    }
    stage('Build') {
      steps { sh 'zip -r app.zip *' }
    }
  }
  post {
    success {
      archiveArtifacts artifacts: 'app.zip', fingerprint: true
    }
  }
}
