import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { resolveRelative } from "../util/path"
import { i18n } from "../i18n"

interface Options {
  limit: number
}

const defaultOptions: Options = {
  limit: 3,
}

const TopTags: QuartzComponent = ({ allFiles, fileData, displayClass }: QuartzComponentProps) => {
  // 1. Collect all tags and count frequencies
  const tagCounts = new Map<string, number>()
  
  allFiles.forEach((file) => {
    const tags = file.frontmatter?.tags || []
    tags.forEach((tag) => {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1)
    })
  })

  // 2. Sort by count (descending) and take top N
  const sortedTags = [...tagCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, defaultOptions.limit)

  if (sortedTags.length === 0) return null

  return (
    <div class={classNames(displayClass, "recent-notes")}>
      <h3>Popular Topics</h3>
      <ul class="recent-ul grid-tags">
        {sortedTags.map(([tag, count]) => (
          <li class="recent-li card-tag">
            <div class="section">
              <div class="desc">
                <h3>
                  <a href={resolveRelative(fileData.slug!, `tags/${tag}`)} class="internal tag-link">
                    #{tag}
                  </a>
                </h3>
              </div>
              <p class="meta">{count} notes</p>
            </div>
          </li>
        ))}
      </ul>
      <p>
        <a href={resolveRelative(fileData.slug!, "tags/")}>View All Tags →</a>
      </p>
    </div>
  )
}

TopTags.css = `
.grid-tags {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.card-tag {
  text-align: center;
  background: var(--lightgray);
  border-radius: 12px;
  padding: 1.5rem !important;
}

.card-tag h3 {
  margin: 0 0 0.5rem 0;
}

.card-tag .meta {
  margin: 0;
  font-size: 0.8rem;
  opacity: 0.7;
}
`

export default (() => TopTags) satisfies QuartzComponentConstructor
