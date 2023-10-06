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
                        def customDescription = '<div id="side-panel">Le script JS a ete execute avec succes</div>'
                        currentBuild.description = customDescription
                    } else {
                        currentBuild.result = 'FAILURE'
                        def customDescription = '<div id="side-panel">Echec de l\'execution du script JS</div>'
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
                        </div>
                    """

                    currentBuild.description = htmlContent
                }
            }
        }
    }
}

  post {
    always {
        script {
            def customScript = """
                <script>
                    // Créer un bouton personnalisé
                    var customButton = document.createElement('button');
                    customButton.textContent = 'Cliquez-moi';
                    customButton.onclick = function() {
                        alert('Le bouton a ete clique !');
                    };

                    // Ajouter le bouton à la description
                    document.getElementById('description').appendChild(customButton);
                </script>
            """
            currentBuild.description = customScript
        }
    }
}
