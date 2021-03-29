const withImages = require('next-images')
module.exports =
    module.exports = withImages({}), {

        async redirects() {
            return [

                {
                    source: '/members/:slug/twitter',
                    destination: 'https://twitter.com/:slug',
                    permanent: true,
                },
                {
                    source: '/members/:slug/instagram',

                    destination: 'https://instagram.com/:slug',
                    permanent: true,
                },
                {
                    source: '/members/:slug/github',

                    destination: 'https://github.com/:slug',
                    permanent: true,
                },
                {
                    source: '/members/:slug/twitch',

                    destination: 'https://twitch.tv/:slug',
                    permanent: true,
                },
                {
                    source: '/discord',
                    destination: 'https://discord.gg/naHDBvYdYv',
                    permanent: true,
                },
                {
                    source: '/members/:slug/youtube',

                    destination: 'https://youtube.com/channel/:slug',
                    permanent: true,
                },
            ]
        },
    }