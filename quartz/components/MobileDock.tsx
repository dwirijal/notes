import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import style from "../styles/custom.scss" // We will add styles here

const MobileDock: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "mobile-dock")}>
      <nav class="dock-container">
        <a href="/" class="dock-item" aria-label="Home">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          <span>Home</span>
        </a>
        
        <a href="/tags" class="dock-item" aria-label="Tags">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/></svg>
          <span>Tags</span>
        </a>

        {/* Search Trigger - This relies on the global search shortcut or overlay usually. 
            For now, we link to a search page or rely on the top navbar search for functionality.
            However, if we want a dock button to open search, we need to target the search input.
            Let's keep it simple: Just Home, Tags, and maybe Graph or TOC.
        */}
        
        <a href="#" class="dock-item search-trigger-mobile" onclick="document.querySelector('.search-button').click(); return false;" aria-label="Search">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
           <span>Search</span>
        </a>

      </nav>
    </div>
  )
}

export default (() => MobileDock) satisfies QuartzComponentConstructor
