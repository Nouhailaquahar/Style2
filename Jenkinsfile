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
                        def customDescription = '<div id="side-panel">Le script JS a été exécuté avec succès</div>'
                        currentBuild.description = customDescription
                    } else {
                        currentBuild.result = 'FAILURE'
                        def customDescription = '<div id="side-panel">Échec de l\'exécution du script JS</div>'
                        currentBuild.description = customDescription
                    }
                }
            }
        }
    }
}
