module.exports = {
    runtimeCompiler: true,
    devServer: {
        proxy: {
          "/api/": {
            target: "http://localhost:3000/api/"
          },
          '/socket.io': {
              target: 'http://localhost:3000',
              changeOrigin: true
          }
        }
      }
}