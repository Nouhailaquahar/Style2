pipeline {
    agent any

    stages {
        stage('Exécution du script JavaScript') {
            steps {
                script {
                    // Chemin du fichier JavaScript dans le même répertoire que le Jenkinsfile
                    def scriptPath = './custom.js'

                    // Vérification de l'existence du fichier
                    if (fileExists(scriptPath)) {
                        // Exécution du script JavaScript avec Node.js
                       echo'le fichier existe'
                    } else {
                        echo'le fichier n existe pas'
                    }
                }
            }
        }
    }
}
