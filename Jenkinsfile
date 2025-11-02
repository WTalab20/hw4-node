pipeline {
  agent { docker { image 'node:18' } }   // Jenkins will run steps in a Node 18 container
  triggers { pollSCM('H/2 * * * *') }    // fine for local Jenkins; webhook optional
  stages {
    stage('Checkout'){ steps { checkout scm } }
    stage('Install'){ steps { sh 'npm ci || npm install' } }
    stage('Test'){ steps { sh 'npm test' } }
    stage('Build'){ steps { sh 'zip -r app.zip *' } }
  }
  post {
    success {
      archiveArtifacts artifacts: 'app.zip', fingerprint: true
    }
  }
}
