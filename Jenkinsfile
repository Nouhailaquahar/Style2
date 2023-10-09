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
                    bat(script: "node test.js", returnStatus: true)
                    
                   
                }
            }
        }
         stage('Afficher un message HTML') {
            steps {
                script {
                    def message = '****Ce message vient de Jenkinsfile****'

                    // Utiliser un script Groovy pour générer un fichier HTML avec le message
                    def htmlContent = """
                        <div id="side-panel">
                            $message
                            <h1>Bonjour</h1>
                        </div>
                    """

                    currentBuild.description = htmlContent
                }
            }
        }
        stage('Publish HTML Report') {
    steps {
        publishHTML([
            allowMissing: false,
            alwaysLinkToLastBuild: false,
            keepAll: true,
            reportDir: 'C:\ProgramData\Jenkins\.jenkins\workspace\aaaaaaaaaaaaaaaaaaaal', // Le chemin où se trouvent vos fichiers HTML générés localement
            reportFiles: 'index.html', // Pattern pour sélectionner tous les fichiers HTML dans le répertoire
            reportName: 'HTML Report' // Nom de votre rapport
        ])
    }
}

    }
}
