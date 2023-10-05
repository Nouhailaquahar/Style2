pipeline {
    agent any

    tools {
        nodejs '16.13.0'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
stage('Build and Execute JS') {
    steps {
        script {
            def scriptResult = bat(script: "node test.js", returnStatus: true)

            if (scriptResult == 0) {
                currentBuild.result = 'SUCCESS'
            } else {
                currentBuild.result = 'FAILURE'
                error('Échec de l\'exécution du script JS')
            }
        }
    }
}


    }

  
}
