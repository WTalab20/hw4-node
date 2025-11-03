pipeline {
  agent any
  options { timeout(time: 10, unit: 'MINUTES') }
  stages {
    stage('Setup Node tool only') {
      steps {
        script {
          // we'll recreate this tool in step 2
          def nodeHome = tool name: 'node20', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
          withEnv(["PATH=${nodeHome}/bin:${env.PATH}"]) {
            sh 'node -v'
            sh 'npm -v'
          }
        }
      }
    }
  }
}
