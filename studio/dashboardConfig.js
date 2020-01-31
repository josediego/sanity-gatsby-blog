export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e3488e80d7d3b40f94a2cae',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-n5gq4ibf',
                  apiId: '4e83638d-9c73-4bf0-bd90-aebcb5416844'
                },
                {
                  buildHookId: '5e3488e8d149446eb21f0e14',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-z7fyx3ou',
                  apiId: '8f1c3784-a30a-40dd-affc-214b9d8eb519'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/josediego/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-z7fyx3ou.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
