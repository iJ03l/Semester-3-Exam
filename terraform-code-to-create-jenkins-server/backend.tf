terraform {
  backend "s3" {
    bucket = "ij03l-app"
    region = "us-east-1"
    key = "jenkins-server/terraform.tfstate"
    profile = "terraform"
  }
}