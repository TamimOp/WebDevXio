#!/bin/bash

#Make executable with: chmod +x update-and-deploy.sh
#Run with: ./update-and-deploy.sh
echo "🔄 Pulling latest changes from GitHub..."
git pull origin main  { echo "❌ Git pull failed"; exit 1; }

#######################
#Frontend Deployment
#######################

echo "📦 Installing frontend dependencies..."
npm install  { echo "❌ npm install failed"; exit 1; }

echo "⚙️ Building frontend..."
npm run build  { echo "❌ npm run build failed"; exit 1; }

echo "🚀 Restarting frontend service with PM2..."
pm2 restart WebDevXio || { echo "❌ PM2 frontend restart failed"; exit 1; }


echo "✅ Deployment complete!"