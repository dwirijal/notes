#!/bin/bash

# Script to create a new Obsidian vault
# Usage: ./create_vault.sh "Vault Name"

if [ $# -eq 0 ]; then
    echo "Usage: $0 \"Vault Name\""
    echo "This will create a new Obsidian vault in ~/Documents/Notes/Vaults/"
    exit 1
fi

VAULT_NAME="$1"
VAULT_PATH="$HOME/Documents/Notes/Vaults/$VAULT_NAME"

# Create the vault directory
mkdir -p "$VAULT_PATH"

# Create standard note-taking folders
mkdir -p "$VAULT_PATH"/{Areas,Projects,Resources,Templates,Archive}

# Create initial notes
cat > "$VAULT_PATH/Welcome.md" << EOF
# Welcome to $VAULT_NAME Vault

This is your new Obsidian vault for: $VAULT_NAME

## Getting Started
- Explore the folders created for you
- Start taking notes!
- Use the templates in the Templates folder

## Standard Folders
- **Areas**: Ongoing areas of responsibility or interest
- **Projects**: Specific projects with defined start/end
- **Resources**: Reference materials and information
- **Templates**: Reusable note templates
- **Archive**: Completed or inactive notes

Happy note-taking!
EOF

echo "Successfully created new vault: $VAULT_NAME"
echo "Location: $VAULT_PATH"
echo ""
echo "To open this vault in Obsidian:"
echo "1. Launch Obsidian"
echo "2. Select 'Open folder as vault'"
echo "3. Navigate to: $VAULT_PATH"