fetch('./data/items.json')
    .then(response => {
        return response.json()
    })
    .then(items => {
        var app = new Vue({
            el: '#app',
            data: {
                mapDataJSON: '',
                tileSelected: 0,
                tileOptions: items.tiles,
                tileBoard: [
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
                ],
                obstacleSelected: 1,
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
                    ],[
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    ],[
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    ],[
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
                    this.mapDataJSON = JSON.stringify({
                        "T": this.tileBoard,
                        "P": this.obstacleBoards
                    })
                },
                copyToClipboard: function () {
                    var copyText = document.getElementById("mapJsonData");
                    copyText.select();
                    document.execCommand("copy");
                    alert("Copied Map Data");
                },
                loadMap: function () {
                    var mapDataJSON = JSON.parse(this.mapDataJSON)
        
                    this.tileBoard = mapDataJSON["T"]
                    this.obstacleBoards = mapDataJSON["P"]
        
                    alert('Map Loaded')
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