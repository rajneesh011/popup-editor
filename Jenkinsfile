pipeline { 
    agent { label 'ec2' } // Here I'm using a Node with label "ec2" where I'm deploying the application. 

    stages {
        stage('git') { // cloning GitHub repository 
            steps {
                git branch: 'main', url: 'https://github.com/rajneesh011/popup-editor.git'
            }
        }
        stage('build') { // installing the packages and building 
            steps {
                sh '''
                    npm install
                    npm run build
                '''
            }
        }
        stage('deploy') { // using pm2 service manager to run the application
            steps {
                sh '''
                    pm2 start -x "npm start" --name "task-app"
                    pm2 save
                '''
            }
        }
        
    }
}
