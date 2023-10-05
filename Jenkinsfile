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
        }*
        /*affichach sans resultat
  stage('Hello World') {
            steps {
                script {
                    // Le texte "Bonjour" à afficher dans la description
                    def message = "<h1>Bonjour</h1>"

                    // Écrire le message dans un fichier HTML
                    writeFile file: 'output.html', text: message

                    // Publier le fichier HTML en utilisant le HTML Publisher Plugin
                    publishHTML(target: [
                        allowMissing: false,
                        alwaysLinkToLastBuild: false,
                        keepAll: true,
                        reportDir: '',
                        reportFiles: 'output.html',
                        reportName: 'My HTML Report'
                    ])
                }
            }
        }*/
   
        stage('Afficher un message HTML') {
            steps {
                script {
                    sh '''
                        npm install puppeteer
                        node -e "const puppeteer = require('puppeteer'); 
                        (async () => {
                            const browser = await puppeteer.launch();
                            const page = await browser.newPage(); 
                            await page.setContent('<h1>Hello from HTML</h1>'); 
                            await page.screenshot({ path: 'screenshot.png' }); 
                            await browser.close();
                        })();"
                    '''
                }
            }
        
          //fink
    }
}
