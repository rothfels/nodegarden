
import NodeGarden from './nodegarden'

var pixelRatio = window.devicePixelRatio
var $container = document.getElementById('container')

var nodeGarden = new NodeGarden($container)

// start simulation
nodeGarden.start()

var resetNode = 0

$container.addEventListener('click', function (e) {
  resetNode++
  if (resetNode > nodeGarden.nodes.length - 1) {
    resetNode = 1
  }
  nodeGarden.nodes[resetNode].reset({x: e.pageX * pixelRatio, y: e.pageY * pixelRatio, vx: 0, vy: 0})
})

window.addEventListener('resize', () => { nodeGarden.resize() })
