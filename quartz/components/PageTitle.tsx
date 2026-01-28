// @ts-ignore
import darkmodeScript from "./scripts/darkmode.inline"
import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { joinSegments } from "../util/path"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const lightIconPath = joinSegments(baseDir, "static/thiqueThoughtsLogo_best.png")
  const darkIconPath = joinSegments(baseDir, "static/thiqueThoughtsLogo_square_white.png")
  // console.log('filedata')
  // console.log(fileData)
  // console.log('displayClass')
  // console.log(displayClass)
  // console.log('cfg')
  // console.log(cfg)
  // console.log('theme')
  let darkModeStr = i18n(cfg.locale).components.themeToggle.darkMode;
  // console.log(darkModeStr)
  // console.log('displayClass')
  // console.log(displayClass)
  let iconPath = lightIconPath
  if (darkModeStr.includes('Dark')){
    iconPath = darkIconPath
  }

  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <img class="Logo" src={iconPath} alt={title}/>
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
}
.Logo {
  max-height: 195px;
  min-height: 50px;
  max-width: 212px;
  min-width: 50px;
  margin: 0;
}
`
PageTitle.beforeDOMLoaded = darkmodeScript
export default (() => PageTitle) satisfies QuartzComponentConstructor