module.exports = {
  open: true,
  server: {
    baseDir: "./",
    serveStaticOptions: {
      extensions: ["html", "js", "css"],
    },
  },
  files: "./",
  ignore: ["./node_modules/*"],
};
