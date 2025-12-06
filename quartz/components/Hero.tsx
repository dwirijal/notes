import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const Hero: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "hero-banner")}>
      <div class="hero-content">
        <h1 class="hero-title">
          Hello, World! 🌍
          <br />
          <span class="hero-subtitle">Welcome to Dwi Rijal's Blog.</span>
        </h1>
        <p class="hero-caption">
          Exploring ideas, code, and everything in between.
          <br />
          <i>"A digital garden of thoughts."</i>
        </p>
      </div>
    </div>
  )
}

export default (() => Hero) satisfies QuartzComponentConstructor
