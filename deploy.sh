#!/bin/bash

# 1. Build Quartz
echo "🔨 Building Quartz..."
npx quartz build

# 2. Deploy to Server
# Ganti path tujuan di server jika ingin berbeda
SERVER_USER="dwizzy"
SERVER_IP="192.168.100.6"
DEST_PATH="~/notes-public/"

echo "🚀 Deploying to $SERVER_USER@$SERVER_IP:$DEST_PATH..."

# rsync options:
# -a: archive mode (preserve permissions, times, etc.)
# -v: verbose
# -z: compress during transfer
# --delete: delete files in destination that are no longer in source (clean sync)
rsync -avz --delete public/ $SERVER_USER@$SERVER_IP:$DEST_PATH

echo "✅ Deployment Complete!"
echo "   If you haven't set up a web server yet, you can test it on the server by running:"
echo "   ssh $SERVER_USER@$SERVER_IP 'cd $DEST_PATH && python3 -m http.server 8080'"
