pipeline {
    agent any
    
    environment {
        DIRECTORY_PATH = "https://github.com/SaumiPatel/sit725-2023-t1-prac2"
        TESTING_ENVIRONMENT = "testing_environment"
        PRODUCTION_ENVIRONMENT = "Saumil" 
    }
    
    stages {
        stage('Build') {
            steps {
                echo "Fetching the source code from the directory path specified by the environment variable"
                echo "Compiling the code and generating any necessary artifacts"
            }
        }
        stage('Test') {
            steps {
                echo "Running unit tests"
                echo "Running integration tests"
            }
        }
        stage('Code Quality Check') {
            steps {
                echo "Checking the quality of the code"
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploying the application to a testing environment specified by the environment variable"
            }
        }
        stage('Approval') {
            steps {
                echo "Waiting for manual approval..."
                script {
                    // Simulate manual approval by pausing for 10 seconds
                    sleep(time: 10, unit: 'SECONDS')
                }
            }
        }
        stage('Deploy to Production') {
            steps {
                echo "Deploying the code to the production environment ${env.PRODUCTION_ENVIRONMENT}"
            }
        }
    }
}
