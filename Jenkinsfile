pipeline {
    agent { label 'ec2' }

    stages {
        stage('git') {
            steps {
                git branch: 'main', url: 'https://github.com/rajneesh011/popup-editor.git'
            }
        }
        stage('build') {
            steps {
                sh '''
                    npm install
                    npm run build
                '''
            }
        }
        stage('deploy') {
            steps {
                sh '''
                    pm2 start -x "npm start" --name "react-app"
                    pm2 save
                '''
            }
        }
        
    }
}
