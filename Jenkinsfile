pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Récupérer le code source depuis le dépôt Git
                checkout scm
            }
        }

        stage('Build and Execute JS') {
            steps {
                // Exécuter le script JS
                script {
                    def output = sh(script: 'node votre_script.js', returnStatus: true)
                    if (output == 0) {
                        currentBuild.result = 'SUCCESS'
                    } else {
                        currentBuild.result = 'FAILURE'
                        error("Échec de l'exécution du script JS")
                    }
                }
            }
        }
    }

    post {
        always {
            // Archiver les résultats, par exemple, les fichiers de sortie du script
            archiveArtifacts artifacts: '**/votre_script.js'
        }
    }
}
