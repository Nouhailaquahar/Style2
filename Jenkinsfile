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
                        echo 'Le script js a ete  execute avec succes'
                    } else {
                        currentBuild.result = 'FAILURE'
                        error('Échec de l\'exécution du script JS')
                    }
                }
            }
        }/*
           stage('Hello World') {
            steps {
                script {
                    // Affiche un message "Bonjour" dans la description
                    currentBuild.description = "<h1>Bonjour</h1>".getBytes("UTF-8").toString("UTF-8")
                }
            }
        }*/
          stage('Hello World') {
            steps {
                script {
                    // Le texte "Bonjour" à afficher dans la description
                    def message = "<h1>Bonjour</h1>"

                    // Encodage en UTF-8 pour garantir un affichage correct
                    def encodedMessage = message.bytes.encodeAsBase64().toString()

                    // Définir la description de la construction avec le message
                    currentBuild.description = encodedMessage
                }
            }
        }
    }
}
