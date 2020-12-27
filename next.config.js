module.exports = {
    async redirects() {
        return [
            {
                source: '/best',
                destination: '/',
                permanent: true,
            }
        ]
    },
}
