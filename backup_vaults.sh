#!/bin/bash

# Backup script for Obsidian vaults
# Creates timestamped backups of all vaults

BACKUP_DIR="$HOME/Documents/Notes/Backups"
VAULTS_DIR="$HOME/Documents/Notes/Vaults"
DATE=$(date +"%Y%m%d_%H%M%S")

echo "Starting backup of Obsidian vaults..."
echo "Date: $DATE"

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

# Create a backup for each vault
for vault_dir in "$VAULTS_DIR"/*/; do
    if [ -d "$vault_dir" ]; then
        vault_name=$(basename "$vault_dir")
        backup_file="$BACKUP_DIR/${vault_name}_backup_$DATE.zip"
        
        echo "Backing up vault: $vault_name"
        zip -r "$backup_file" "$vault_dir" -x "*.git*" "*/.git/*" "*/Thumbs.db" "*/.DS_Store"
        
        if [ $? -eq 0 ]; then
            echo "  ✓ Successfully backed up to: $backup_file"
        else
            echo "  ✗ Failed to backup: $vault_name"
        fi
    fi
done

echo ""
echo "Backup completed!"
echo "Backups stored in: $BACKUP_DIR"