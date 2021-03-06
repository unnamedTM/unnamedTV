const withImages = require('next-images')
    module.exports = withImages() ,{
        distDir: 'build',
        async redirects() {
            return [
                {
                    source: '/kappa/spotify',
                    destination: 'https://open.spotify.com/user/jackeboy50?si=95890773d97d4303',
                    permanent: true,
                },
                {
                    source: '/kappa/twitter',
                    destination: 'https://twitter.com/kappac0dex',
                    permanent: true,
                }, {
                    source: '/kappa/instagram',
                    destination: 'https://instagram.com/kappac0dex',
                    permanent: true,
                }, {
                    source: '/kappa/github',
                    destination: 'https://github.com/kappac0dex',
                    permanent: true,
                }, {
                    source: '/kappa/twitch',
                    destination: 'https://twitch.tv/kappac0dex',
                    permanent: true,
                }, {
                    source: '/kappa/youtube',
                    destination: 'https://youtube.com/channel/UCOkj83ZLAGRakoJV3gQPqew',
                    permanent: true,
                },
                {
                    source: '/discord',
                    destination: 'https://discord.gg/naHDBvYdYv',
                    permanent: true,
                },
                {
                    source: '/alex/twitter',
                    destination: 'https://twitter.com/xunderal',
                    permanent: true,
                }, {
                    source: '/alex/instagram',
                    destination: 'https://instagram.com/xunderal',
                    permanent: true,
                }, {
                    source: '/alex/github',
                    destination: 'https://github.com/bobsolomos',
                    permanent: true,
                }, {
                    source: '/alex/twitch',
                    destination: 'https://twitch.tv/itsxunderal',
                    permanent: true,
                }, {
                    source: '/alex/youtube',
                    destination: 'https://youtube.com/c/xunderal',
                    permanent: true,
                },
                {
                    source: '/lingduck/twitter',
                    destination: 'https://twitter.com/dimory1',
                    permanent: true,
                }, {
                    source: '/lingduck/instagram',
                    destination: 'https://instagram.com/lingduck',
                    permanent: true,
                }, {
                    source: '/lingduck/github',
                    destination: 'https://github.com/lingduck',
                    permanent: true,
                }, {
                    source: '/lingduck/twitch',
                    destination: 'https://twitch.tv/lingduck',
                    permanent: true,
                }, {
                    source: '/lingduck/youtube',
                    destination: 'https://youtube.com/channel/UC7RTYzr08Nw-0_YS3VTizpQ',
                    permanent: true,
                },
            ]
        },
    }