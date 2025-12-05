import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const Hero: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "hero-banner")}>
      <div class="hero-content">
        <h1 class="hero-title">
          HI 👋,
          <br />
          <span class="hero-subtitle">welcome to Dwi Rijal Notes.</span>
        </h1>
        <p class="hero-caption">Sebuah Catatan tentang apapun yang dipikirin Rijal ada disini</p>
      </div>
    </div>
  )
}

export default (() => Hero) satisfies QuartzComponentConstructor
