fetch('./data/items.json')
    .then(response => {
        return response.json()
    })
    .then(items => {
        var app = new Vue({
            el: '#app',
            data: {
                e2j: '',
                tileSelected: 0,
                tileOptions: items.tiles,
                tileBoard: [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ],
                obstacleSelected: 0,
                obstacleOptions: items.obstacles,
                obstacleBoardBase: [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ],
                obstacleBoards: [
                    [
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    ]
                ]
            },
            methods: {
                addObstacleBoard: function () {
                    this.obstacleBoards.push(JSON.parse(JSON.stringify(app.obstacleBoardBase)))
                },
                removeObstacleBoard: function () {
                    this.obstacleBoards.splice(app.obstacleBoards.length - 1, 1)
                },
                exportToJson: function () {
                    var e2j = {
                        "T": this.tileBoard,
                        "P": this.obstacleBoards
                    }
                    this.e2j = JSON.stringify(e2j)
                },
                copyToClipboard: function () {

                    var copyText = document.getElementById("mapJsonData");
                    copyText.select();
                    document.execCommand("copy");
                    alert("Copied the Map JSON Data");

                }
            },
            delimiters: ['[[', ']]']
        })
    })
    .catch(err => {
        console.log("An Error has Ocurred")
    })



// COMMENTS BELOW

// new Vue({ el: '#app', data: { message }, delimiters: ['[[', ']]'] });
// Vue.set(app.obstacleBoards, app.obstacleBoards.length, JSON.parse(JSON.stringify(app.obstacleBoardBase)))
// app.obstacleBoards.push(JSON.parse(JSON.stringify(app.obstacleBoardBase)))
// app.obstacleBoards.splice(app.obstacleBoards.length - 1, 1)