import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
// @ts-ignore
import script from "./scripts/stats.inline"

const Stats: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
        <div class={classNames(displayClass, "stats-widget")} style="margin-bottom: 1rem; padding: 0.5rem; background: var(--lightgray); border-radius: 8px; text-align: center;">
            <div id="quartz-stats-display">
                Loading Stats...
            </div>
        </div>
    )
}

Stats.afterDOMLoaded = script

export default (() => Stats) satisfies QuartzComponentConstructor
