import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Dwi Rijal Notes",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "dwirijal.github.io/notes",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Space Grotesk", // Geometric, "Cool" Minimalist
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#fefefe",      // Requested White
          lightgray: "#e5e7eb",
          gray: "#6b7280",
          darkgray: "#374151",
          dark: "#1f2937",
          secondary: "#4d7c0f",  // Lime-700
          tertiary: "#84cc16",   // Lime-500
          highlight: "rgba(77, 124, 15, 0.15)", // Lime tint
          textHighlight: "rgba(77, 124, 15, 0.15)",
        },
        darkMode: {
          light: "#212121",      // Requested Dark
          lightgray: "#2e2e2e",
          gray: "#9ca3af",
          darkgray: "#d1d5db",
          dark: "#f3f4f6",
          secondary: "#bef264",  // Lime-300 (Better contrast for dark mode than 700)
          tertiary: "#a3e635",   // Lime-400
          highlight: "rgba(190, 242, 100, 0.15)", // Lime tint
          textHighlight: "rgba(190, 242, 100, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
