
const gamification = () => {
    const STORAGE_KEY = "quartz-gamification-stats"
    const TODAY = new Date().toISOString().split("T")[0]

    interface Stats {
        readPages: string[]
        lastVisit: string
        streak: number
    }

    // Initial Data
    let stats: Stats = {
        readPages: [],
        lastVisit: "",
        streak: 0,
    }

    // Load from Storage
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) {
            stats = JSON.parse(stored)
        }
    } catch (e) {
        console.error("Failed to load stats", e)
    }

    // Update Logic
    const currentPath = window.location.pathname
    if (!stats.readPages.includes(currentPath)) {
        stats.readPages.push(currentPath)
    }

    if (stats.lastVisit !== TODAY) {
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        const yesterdayString = yesterday.toISOString().split("T")[0]

        if (stats.lastVisit === yesterdayString) {
            stats.streak += 1
        } else {
            stats.streak = 1
        }
        stats.lastVisit = TODAY
    }

    // Save to Storage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats))

    // Render UI
    const element = document.getElementById("quartz-stats-display")
    if (element) {
        const readCount = stats.readPages.length
        let level = "Novice"
        if (readCount > 5) level = "Explorer"
        if (readCount > 20) level = "Scholar"
        if (readCount > 50) level = "Sage"

        element.innerHTML = `
      <div style="font-size: 0.9em; font-weight: bold;">${level}</div>
      <div style="font-size: 0.8em; opacity: 0.8;">${readCount} Read &bull; ${stats.streak} Day Streak 🔥</div>
    `
    }
}

document.addEventListener("nav", gamification)
window.addEventListener("load", gamification)
