class game {
    drawings = [];
    color = "#FF0000"
    size = 15
    iter = 0
    update() {
        this.color = window.cp.value;
        if (this.iter === 0) {
            this.tmp = this.size
            if (window.keyboard.q) {
                if (this.size !== 5) {
                    this.size -= 5
                }
            }
            if (window.keyboard.e) {
                if (this.size !== 50) {
                    this.size += 5
                }
            }
            if (this.tmp !== this.size) this.iter = 5
        }
        refreshcanvas()
        if (window.keyboard.space) this.drawings = []
        for (const d of this.drawings) {
            circle(d.x, d.y, d.s, d.c)
        }
        if (window.mouse.x === undefined || window.mouse.y === undefined) return
        if (window.mouse.left) {
            circle(window.mouse.x, window.mouse.y, this.size, this.color)
            this.drawings.push({x: window.mouse.x, y: window.mouse.y, s: this.size, c: this.color})
        }
        if (window.mouse.right) {
            circle(window.mouse.x, window.mouse.y, this.size, "#FFFFFF")
            this.drawings.push({x: window.mouse.x, y: window.mouse.y, s: this.size, c: "#FFFFFF"})
        }

        hollowcircle(window.mouse.x, window.mouse.y, this.size, this.color)
        circle(window.mouse.x, window.mouse.y, 6, "#FFFFFF")
        circle(window.mouse.x, window.mouse.y, 5, "#000000")
        if (this.iter !== 0) this.iter--
    }
}
function load_paint() {
    document.body.style.cursor = 'none'
    window.cp.value = "#FF0000"
    this.Game = new game()
}