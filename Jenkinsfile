pipeline {
    agent any

    tools {
        // Configure le chemin vers Node.js en utilisant le nom de l'outil défini dans Jenkins
        nodejs '16.13.0'
    }

    stages {
        stage('Checkout') {
            steps {
                // Récupérer le code source depuis le dépôt Git
                checkout scm
            }
        }
  stage('Build and Execute JS') {
            steps {
                script {
                    // Exécutez le script JS
                    def scriptResult = bat(script: "custom.js", returnStatus: true)

                    if (scriptResult == 0) {
                        currentBuild.result = 'SUCCESS'
                    } else {
                        currentBuild.result = 'FAILURE'
                        error("Échec de l'exécution du script JS")
                    }
                }
            }
        }
    }

  
}
