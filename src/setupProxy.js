const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
	app.use(
		"/api",
		createProxyMiddleware({
			target: "http://dev.api.mcgi.io",
			changeOrigin: true,
			onProxyReq: function onProxyReq(proxyReq, req, res) {
				// add custom header to request
				proxyReq.setHeader(
					"Authorization",
					"akxzUk94VHJrckpUOE9temZyTzZBTWtzNjh2SnRHMTYwMzQxNjQ5NXd3d0BtY2dpLmlv"
				);
			},
			pathRewrite: { "^/api": "" },
		})
	);
};
