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
            /*  script {
            def scriptResult = bat(script: "node test.js", returnStatus: true)
        
            if (scriptResult == 0) {
                currentBuild.result = 'SUCCESS'
                echo 'Le script js a ete execute avec succes'
            } else {
                currentBuild.result = 'FAILURE'
                error('Échec de l\'exécution du script JS')
            }
        }*/
                // Remplacez la ligne suivante pour exécuter votre fichier batch
              script {
                    // Placez vos commandes bat à l'intérieur du bloc script
                    bat 'test.js'
                }            
    }
}
        stage('Afficher un message HTML') {
            steps {
                script {
                    currentBuild.description = '<h1>Hello</h1>'
                }
            }
        }


    }

  
}
