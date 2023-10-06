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
        
         stage('Afficher un message HTML') {
            steps {
                script {
                    def message = 'Ce message vient de Jenkinsfile'

                    // Utiliser un script Groovy pour générer un fichier HTML avec le message
                    def htmlContent = """
                        <div id="side-panel">
                            $message
                        </div>
                    """

                    currentBuild.description = htmlContent
                }
            }
        }
    }
}
