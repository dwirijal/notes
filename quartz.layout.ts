import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.PageTitle(),
    Component.Spacer(),
    Component.Search(),
    Component.Darkmode(),
  ],
  afterBody: [], // Dock removed
  footer: Component.Footer({
    links: {
      "Instagram": "https://instagram.com/dwirijal_",
      "GitHub": "https://github.com/dwirijal",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    // Hero Banner ONLY on Home Page
    Component.ConditionalRender({
      component: Component.Hero(),
      condition: (page) => page.fileData.slug === "index",
    }),
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    // Hide standard title on Home Page (Hero takes over)
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ContentMeta(),
    Component.TagList(),
    
    // --- SECTIONS PER VAULT (Home Page Only) ---
    
    // 1. Latest Updates (All)
    Component.ConditionalRender({
      component: Component.RecentNotes({ 
        title: "Latest Updates", 
        limit: 3,
        linkToMore: "tags" as any // Just a generic link or removing it
      }),
      condition: (page) => page.fileData.slug === "index",
    }),

    // 2. Finance Vault
    Component.ConditionalRender({
      component: Component.RecentNotes({ 
        title: "Finance", 
        limit: 3,
        filter: (f) => f.slug!.startsWith("Finance/"),
        linkToMore: "Finance" as any
      }),
      condition: (page) => page.fileData.slug === "index",
    }),

    // 3. Regular Notes (TestVault)
    Component.ConditionalRender({
      component: Component.RecentNotes({ 
        title: "Regular Notes", 
        limit: 3,
        filter: (f) => f.slug!.startsWith("TestVault/"),
        linkToMore: "TestVault" as any
      }),
      condition: (page) => page.fileData.slug === "index",
    }),
    
    // 4. Popular Tags
    Component.ConditionalRender({
      component: Component.TopTags(),
      condition: (page) => page.fileData.slug === "index",
    }),
  ],
  left: [
    Component.MobileOnly(Component.Spacer()),
    Component.Explorer(),
  ],
  right: [
    Component.ConditionalRender({
      component: Component.Graph(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    // Hide 'RecentNotes' in sidebar on index page to avoid redundancy with main content cards
    Component.ConditionalRender({
      component: Component.RecentNotes({ title: "Latest Stories", limit: 5 }),
      condition: (page) => page.fileData.slug !== "index",
    }),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.MobileOnly(Component.Spacer()),
    Component.Explorer(),
  ],
  right: [],
}