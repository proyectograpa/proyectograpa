/* Ading custom field to an existing content type:
 * https://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization/#creating-custom-extensions
*/

exports.createSchemaCustomization = ({ actions }) => {
  const { createFieldExtension, createTypes } = actions

  /* esto es para manipular la salida de los fields
  createFieldExtension({
    name: "lang",
    //extend(options, prevFieldConfig) {
    //  return {
    //    resolve(source, args) {
    //      //return `${source.slug}`
    //      return `${source.lang}`
    //    },
    //  }
    //},
    args: {
      //caffeine: 'Int'
      lang: 'String'
    },
    extend(options, prevFieldConfig) {
      return {
        type: 'String',
        //args: {
        //  sunshine: {
        //    type: 'Int',
        //    defaultValue: -10,
        //  },
        //},
        //resolve(source, args, context, info) {
        //  const motivation = (options.caffeine || 0) - args.sunshine
        //  if (motivation > 5) return 'Work! Work! Work!'
        //  return 'Maybe tomorrow.'
        //},
        resolve(source, args, context, info) {
          const lang = options.lang 
          //const lang = `${options.slug}`
          return lang
        },
      }
    },
  })
  */
  createTypes(`
    interface Page implements Node {
      lang: String
    }
    type MdxPage implements Node & Page{
      lang: String
    }
  `)
}

/*
 * Then and yout data field here: 
 * src/\@lekoarts/gatsby-theme-jodie/components/page.tsx
*/

/* rescribir esto aca:

const withDefaults = require(`./utils/default-options`)

exports.onCreateNode = ({ node, actions, getNode, createNodeId, createContentDigest }, themeOptions) => {
  const { createNode, createParentChildLink } = actions

  const { projectsPath, pagesPath, basePath } = withDefaults(themeOptions)

  // Make sure that it's an MDX node
  if (node.internal.type !== `Mdx`) {
    return
  }

  // Create a source field
  // And grab the sourceInstanceName to differentiate the different sources
  // In this case "projectsPath" and "pagesPath"
  const fileNode = getNode(node.parent)
  const source = fileNode.sourceInstanceName

  // Check for "projects" and create the "Project" type
  if (node.internal.type === `Mdx` && source === projectsPath) {
    const fieldData = {
      slug: node.frontmatter.slug ? node.frontmatter.slug : undefined,
      title: node.frontmatter.title,
      shortTitle: node.frontmatter.shortTitle,
      cover: node.frontmatter.cover,
      date: node.frontmatter.date,
      category: node.frontmatter.category,
      color: node.frontmatter.color ? node.frontmatter.color : undefined,
      lang: node.frontmatter.lang ? node.frontmatter.lang: undefined,
      defer: node.frontmatter.defer,
    }

    const mdxProjectId = createNodeId(`${node.id} >>> MdxProject`)

    createNode({
      ...fieldData,
      // Required fields
      id: mdxProjectId,
      parent: node.id,
      children: [],
      internal: {
        type: `MdxProject`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Mdx implementation of the Project interface`,
      },
    })

    createParentChildLink({ parent: node, child: getNode(mdxProjectId) })
  }

  // Check for "pages" and create the "Page" type
  if (node.internal.type === `Mdx` && source === pagesPath) {
    const fieldData = {
      title: node.frontmatter.title,
      slug: `/${basePath}/${node.frontmatter.slug}`.replace(/\/\/+/g, `/`),
      color: node.frontmatter.color ? node.frontmatter.color : undefined,
      lang: node.frontmatter.lang ? node.frontmatter.lang: undefined,
      custom: node.frontmatter.custom,
      cover: node.frontmatter.cover,
      defer: node.frontmatter.defer,
    }

    const mdxPageId = createNodeId(`${node.id} >>> MdxPage`)

    createNode({
      ...fieldData,
      // Required fields
      id: mdxPageId,
      parent: node.id,
      children: [],
      internal: {
        type: `MdxPage`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Mdx implementation of the Page interface`,
      },
    })

    createParentChildLink({ parent: node, child: getNode(mdxPageId) })
  }
}
*/
