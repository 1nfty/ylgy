var body = $response.body
var url = $request.url

if (body) {
  var obj = JSON.parse($response.body)
  obj.data = '{"widthNum":8,"blockTypeData":{},"levelKey":80001,"heightNum":10,"levelData":{"1":[{"rolNum":16,"blockNode":null,"rowNum":16,"id":"1-16-16","moldType":1,"layerNum":1,"type":0},{"rolNum":28,"blockNode":null,"rowNum":16,"id":"1-28-16","moldType":1,"layerNum":1,"type":0},{"rolNum":40,"blockNode":null,"rowNum":16,"id":"1-40-16","moldType":1,"layerNum":1,"type":0},{"rolNum":16,"blockNode":null,"rowNum":32,"id":"1-16-32","moldType":1,"layerNum":1,"type":0},{"rolNum":28,"blockNode":null,"rowNum":32,"id":"1-28-32","moldType":1,"layerNum":1,"type":0},{"rolNum":40,"blockNode":null,"rowNum":32,"id":"1-40-32","moldType":1,"layerNum":1,"type":0},{"rolNum":16,"blockNode":null,"rowNum":48,"id":"1-16-48","moldType":2,"layerNum":1,"type":0},{"rolNum":28,"blockNode":null,"rowNum":48,"id":"1-28-48","moldType":2,"layerNum":1,"type":0},{"rolNum":40,"blockNode":null,"rowNum":48,"id":"1-40-48","moldType":2,"layerNum":1,"type":0}],"2":[{"rolNum":16,"blockNode":null,"rowNum":36,"id":"2-16-36","moldType":1,"layerNum":2,"type":0},{"rolNum":28,"blockNode":null,"rowNum":36,"id":"2-28-36","moldType":1,"layerNum":2,"type":0},{"rolNum":40,"blockNode":null,"rowNum":36,"id":"2-40-36","moldType":1,"layerNum":2,"type":0},{"rolNum":16,"blockNode":null,"rowNum":20,"id":"2-16-20","moldType":1,"layerNum":2,"type":1},{"rolNum":28,"blockNode":null,"rowNum":20,"id":"2-28-20","moldType":1,"layerNum":2,"type":1},{"rolNum":40,"blockNode":null,"rowNum":20,"id":"2-40-20","moldType":1,"layerNum":2,"type":1},{"rolNum":16,"blockNode":null,"rowNum":49,"id":"2-16-49","moldType":2,"layerNum":2,"type":0},{"rolNum":28,"blockNode":null,"rowNum":49,"id":"2-28-49","moldType":2,"layerNum":2,"type":0},{"rolNum":40,"blockNode":null,"rowNum":49,"id":"2-40-49","moldType":2,"layerNum":2,"type":0}],"3":[]}}'

  $done({ body: JSON.stringify(obj) })
} else {
  $done({})
}
