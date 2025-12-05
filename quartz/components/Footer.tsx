import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          Created by <a href="https://github.com/dwirijal">Dwirijal</a> © {year}
        </p>
        <ul>
          <li>
            <a href="https://instagram.com/dwirijal_">Instagram</a>
          </li>
          <li>
            <a href="https://github.com/dwirijal">GitHub</a>
          </li>
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
