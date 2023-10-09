/*
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
                        def customDescription = 'Le script JS a ete execute avec succes'
                        currentBuild.description = customDescription
                    } else {
                        currentBuild.result = 'FAILURE'
                        def customDescription = 'Echec de l\'execution du script JS'
                        currentBuild.description = customDescription
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
                            <h1>Bonjour</h1>
                        </div>
                    """

                    currentBuild.description = htmlContent
                }
            }
        }
    }
}
*/

pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://github.com/Nouhailaquahar/Style2.git']]])
            }
        }
        stage('Copy HTML') {
            steps {
                bat 'copy index.html %WORKSPACE%'
            }
        }
    }

    post {
        success {
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: false,
                keepAll: true,
                reportDir: '',
                reportFiles: 'index.html',
                reportName: 'HTML Report'
            ])
        }
    }
}
