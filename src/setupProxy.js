const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
	app.use(
		"/api",
		createProxyMiddleware({
			target: "http://dev.api.mcgi.io",
			changeOrigin: true,
			pathRewrite: { "^/api": "" },
		})
	);
};
