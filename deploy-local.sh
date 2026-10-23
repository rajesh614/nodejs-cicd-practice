
#!/bin/bash
set -e

IMAGE="rajesh13071996/nodejs-cicd-practice:latest"
CONTAINER="nodejs-app-remote-test"
PORT="8081"

echo "Pulling latest Docker image..."
docker pull "$IMAGE"

echo "Removing old deployment if it exists..."
docker rm -f "$CONTAINER" 2>/dev/null || true

echo "Starting updated container..."
docker run -d \
  --name "$CONTAINER" \
  -p "$PORT:8080" \
  --restart unless-stopped \
  "$IMAGE"

echo "Waiting for application to start..."
sleep 3

echo "Checking application..."
curl --fail "http://localhost:$PORT/"

echo
echo "Deployment successful!"
