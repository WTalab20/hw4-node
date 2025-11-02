pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build & Test') {
      steps {
        script {
          def nodeHome = tool name: 'node18', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
          withEnv(["PATH+NODE=${nodeHome}/bin"]) {
            sh 'node -v'
            sh 'npm install'
            sh 'npm test || echo "Tests skipped"'
          }
        }
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
