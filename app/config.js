// Sets the MongoDB Database options

module.exports = {


    local:
    {
        name: "scotch-user-map-local",
        url: "mongodb://localhost/FanFindrApp",
        port: 27017
    },

    localtest:
    {
        name: "scotch-user-map-local",
        url: "mongodb://localhost/FanFindrAppTest",
        port: 27017
    }

};
