# Quick Start Guide for Your Obsidian Note-Taking Environment

## Installation Summary
- Obsidian has been installed via Flatpak
- Note-taking environment created at: `~/Documents/Notes/`
- Useful scripts and templates have been set up

## Next Steps

### 1. Launch Obsidian
You can launch Obsidian by:
- Using the application menu in your desktop environment
- Running command: `flatpak run md.obsidian.Obsidian`
- Using the desktop icon if your system supports it

### 2. Create Your First Vault
Use the included script to create a new vault:
```bash
cd ~/Documents/Notes
./create_vault.sh "My Personal Notes"
```

### 3. Configure Obsidian
After launching Obsidian:
1. Go to Settings → Core Plugins
2. Enable useful plugins like:
   - Daily Notes
   - Calendar
   - Templates
   - Backlinks
   - Graph view

### 4. Using Templates
The templates directory contains:
- `note-template.md` - General note template
- `daily-note-template.md` - Template for daily notes
- Add more templates as needed in `~/Documents/Notes/Templates/`

### 5. Backup Strategy
Run the backup script periodically:
```bash
cd ~/Documents/Notes
./backup_vaults.sh
```

## Directory Structure
```
~/Documents/Notes/
├── Vaults/          # Your Obsidian vaults
├── Templates/       # Note templates
├── Backups/         # Vault backups
├── README.md        # General information
├── create_vault.sh  # Create new vaults
└── backup_vaults.sh # Backup your vaults
```

## Useful Commands
- Launch Obsidian: `flatpak run md.obsidian.Obsidian`
- Create new vault: `~/Documents/Notes/create_vault.sh "Vault Name"`
- Backup vaults: `~/Documents/Notes/backup_vaults.sh`

Happy note-taking!