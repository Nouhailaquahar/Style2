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
                // Exécuter le script JS
                sh 'nodecustom.js'
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
