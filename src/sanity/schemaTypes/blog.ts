const blogSchema = {
    name: "blog",
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title Of Blog'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug Of Blog',
            options: {
                source: 'title',
                maxLength: 100,
                // slugify: input => input.toLowerCase().replace(/\s+/g, '-')
            }
        },
        {
            name: 'titleImage',
            type: 'image',
            title: 'Title Image',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
        },
        {
            name: "content",
            type: 'array',
            title: 'Content',
            of: [{ type: 'block' }],
            // description: 'Write your blog content here.'
        }
    ]
};

export default blogSchema;
