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
                echo 'Le script js a ete execute avec succes'
            } else {
                currentBuild.result = 'FAILURE'
                error('Echec de l\'execution du script JS')
            }
        }
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
