import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { FileTrieNode } from "./quartz/util/fileTrie"

export const NicsExplorer = {
  // title: "Look Around My Mind",  
  folderClickBehavior: "collapse", 
  folderDefaultState: "collapsed", 
  useSavedState: true, 
  sortFn: (a : FileTrieNode, b : FileTrieNode) => {
    console.log('- ${a.displayName} vs b.displayName');
     if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
      let flag = 0; 
      if (a.data?.date !== undefined && b.data?.date == undefined){
        flag = Math.sign(a.data?.date - b.data?.date);
      }
      return flag + a.displayName.localeCompare(b.displayName, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    }
 
    if (!a.isFolder && b.isFolder) {
      return 1
    } else {
      return -1
    }
    // let flag = 0; 
    // if (a.data?.date !== undefined && b.data?.date == undefined){
    //   console.log('--  ${a.data?.date}');
    //   console.log('--  ${b.data?.date}');
    //   console.log(a.data?.date)
    //   flag = Math.sign(a.data?.date - b.data?.date);
    //   console.log('-- comparing dates');
    // } 
    // console.log('-- comparing display names');
    // flag = flag + a.displayName.localeCompare(b.displayName);
    // console.log('-- ${flag} ');
    return flag
  },
  filterFn: (node : FileTrieNode) => {
  // set containing names of everything you want to filter out
  const omit = new Set(["scrape", "finance", "hidden"])

  // can also use node.slug or by anything on node.data
  // note that node.data is only present for files that exist on disk
  // (e.g. implicit folder nodes that have no associated index.md)
  // console.log(node.displayName)
  let flag = true; 
  if ( !node.isFolder ){
    // console.log(node.file);
    // for (const tag of node.file?.tags) {
    // console.log('--  ${index}');
    // }
    flag = !node.data?.tags?.includes("hidden") 
  }

  if (omit.has(node.displayName.toLowerCase())){
    flag = false
  }

  return flag
},
mapFn: (node : FileTrieNode) => {
  if (node.isFolder) {
    node.displayName = "📁 " + node.displayName
  } else {
    node.displayName =  node.displayName
  }
},
// what order to apply functions in
order: ["filter", "map", "sort"],
}



// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Comments({
    provider: 'giscus',
    options: {
      // from data-repo
      repo: 'jackyzha0/quartz',
      // from data-repo-id
      repoId: 'MDEwOlJlcG9zaXRvcnkzODcyMTMyMDg',
      // from data-category
      category: 'Announcements',
      // from data-category-id
      categoryId: 'DIC_kwDOFxRnmM4B-Xg6',
    }
  }), 
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(NicsExplorer)
  ],
  right: [
    // Component.Graph({
    //   localGraph: {
    //     drag: true, // whether to allow panning the view around
    //     zoom: true, // whether to allow zooming in and out
    //     depth: 1, // how many hops of notes to display
    //     scale: 1.1, // default view scale
    //     repelForce: 0.5, // how much nodes should repel each other
    //     centerForce: 0.3, // how much force to use when trying to center the nodes
    //     linkDistance: 30, // how long should the links be by default?
    //     fontSize: 0.6, // what size should the node labels be?
    //     opacityScale: 1, // how quickly do we fade out the labels when zooming out?
    //     removeTags: ["hidden"], // what tags to remove from the graph
    //     showTags: true, // whether to show tags in the graph
    //     // enableRadial: false, // whether to constrain the graph, similar to Obsidian
    //   },
    //   globalGraph: {
    //     drag: true,
    //     zoom: true,
    //     depth: -1,
    //     scale: 0.9,
    //     repelForce: 0.5,
    //     centerForce: 0.3,
    //     linkDistance: 30,
    //     fontSize: 0.6,
    //     opacityScale: 1,
    //     removeTags: ["hidden"], // what tags to remove from the graph
    //     showTags: true, // whether to show tags in the graph
    //     // enableRadial: true, // whether to constrain the graph, similar to Obsidian
    //   },
    // }),
    Component.DesktopOnly(Component.TableOfContents()),
    // Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(NicsExplorer),
  ],
  right: [],
}
