pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Étape pour vérifier le code depuis le référentiel Git
                checkout scm
            }
        }
        stage('Build and Test') {
            steps {
                // Éventuelles étapes de construction et de test de votre application
            }
        }
        stage('Run JavaScript') {
            steps {
                script {
                    /*
                    // Étape pour exécuter le fichier JavaScript
                    def nodejsHome = tool name: 'NodeJS', type: 'ToolInstallation'
                  sh "${nodejsHome}/bin/node custom.js"
                  */
                    alert(1)
                }
            }
        }
    }
}
