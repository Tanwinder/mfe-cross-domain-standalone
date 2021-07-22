const moduleFileName = "remoteEntry.js";

// Remote module
const searchModule = {
  fileName: moduleFileName,
  name: "Search",
  port: 4001,
  get url() {
    return `//localhost:${this.port}`;
  },
  urlGlobalVariable: "searchUrl",
  get federationConfig() {
    // app2@[window.app2Url]/remoteEntry.js
    return `${this.name}@[window.${this.urlGlobalVariable}]/${this.fileName}`;
  },
};

module.exports = {
    searchModule
};