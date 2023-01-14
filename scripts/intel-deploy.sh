#!/bin/sh

echo "Pre-Build Steps:"
echo "authenticating with AWS ECR..."
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 509441168068.dkr.ecr.us-east-1.amazonaws.com

echo "Build Steps:"
echo "building image..."
docker build -t 509441168068.dkr.ecr.us-east-1.amazonaws.com/react-docker-aws:latest .

echo "Post-Build Steps:"
echo "pushing image to AWS ECR..."
docker push 509441168068.dkr.ecr.us-east-1.amazonaws.com/react-docker-aws:latest

echo "updating AWS ECS service..."
aws ecs update-service --cluster <CLUSTER_NAME> --service <SERVICE_NAME> --force-new-deployment

echo "Done!"
