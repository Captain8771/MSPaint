function set_key(key, bool=true) {
    switch (key.toString().toLowerCase()) {
        case "a": this.keyboard.a = bool; break;
        case "b": this.keyboard.b = bool; break;
        case "c": this.keyboard.c = bool; break;
        case "d": this.keyboard.d = bool; break;
        case "e": this.keyboard.e = bool; break;
        case "f": this.keyboard.f = bool; break;
        case "g": this.keyboard.g = bool; break;
        case "h": this.keyboard.h = bool; break;
        case "i": this.keyboard.i = bool; break;
        case "j": this.keyboard.j = bool; break;
        case "k": this.keyboard.k = bool; break;
        case "l": this.keyboard.l = bool; break;
        case "m": this.keyboard.m = bool; break;
        case "n": this.keyboard.n = bool; break;
        case "o": this.keyboard.o = bool; break;
        case "p": this.keyboard.p = bool; break;
        case "q": this.keyboard.q = bool; break;
        case "r": this.keyboard.r = bool; break;
        case "s": this.keyboard.s = bool; break;
        case "t": this.keyboard.t = bool; break;
        case "u": this.keyboard.u = bool; break;
        case "v": this.keyboard.v = bool; break;
        case "w": this.keyboard.w = bool; break;
        case "x": this.keyboard.x = bool; break;
        case "y": this.keyboard.y = bool; break;
        case "z": this.keyboard.z = bool; break;
        case " ": this.keyboard.space = bool; break;
        default: break;
    }
}
function load_api() {
    this.Game = undefined
    this.helper = document.getElementsByClassName("dot-resizing")[0]
    this.c = document.getElementById("can")
    this.cp = document.getElementById("cp")
    this.cur = document.getElementsByClassName("dot")[0]
    this.c.width = innerWidth
    this.c.height = innerHeight - 69
    this.mouse = {
        x: undefined,
        y: undefined,
        left: false,
        right: false
    }
    this.keyboard = {
        a: false,
        b: false,
        c: false,
        d: false,
        e: false,
        f: false,
        g: false,
        h: false,
        i: false,
        j: false,
        k: false,
        l: false,
        m: false,
        n: false,
        o: false,
        p: false,
        q: false,
        r: false,
        s: false,
        t: false,
        u: false,
        v: false,
        w: false,
        x: false,
        y: false,
        z: false
    }
    document.addEventListener("keydown", ev => {
        set_key(ev.key, true)
    })
    document.addEventListener("keyup", ev => {
        set_key(ev.key, false)
    })
    document.addEventListener("mousedown", ev => {
        switch(ev.button.toString()) {
            case "0": this.mouse.left = true; break;
            case "2": this.mouse.right = true; break;
        }
    })
    document.addEventListener("mousedown", ev => {
        this.oldX = this.mouse.x
        this.oldY = this.mouse.y
    })
    document.addEventListener("mouseup", ev => {
        switch(ev.button.toString()) {
            case "0": this.mouse.left = false; break;
            case "2": this.mouse.right = false; break;
        }
    })
    document.addEventListener("mousemove", ev => {
        this.mouse.x = ev.pageX;
        this.mouse.y = ev.pageY;
    })
    setInterval(() => {
        if (this.Game === undefined) return
        this.Game.update()
    }, 0)
}

function refreshcanvas() {
    this.c.width += 1
    this.c.width = innerWidth
    this.c.height = innerHeight - 69
}

function line(x, y, r, c) {
    let ctx = this.c.getContext("2d")
    ctx.beginPath()
    ctx.lineWidth = r
    ctx.lineCap = "round"
    ctx.strokeStyle = c
    ctx.moveTo(this.oldX, this.oldY)
    ctx.lineTo(x, y)
    ctx.stroke()
    this.oldX = x
    this.oldY = y
}

function circle(x, y, r, c) {
    let ctx = this.c.getContext('2d')
    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2 * Math.PI, false)
    ctx.fillStyle = "#" + c.replace("#", "")
    ctx.fill()
}

function hollowcircle(x, y, r, c) {
    let ctx = this.c.getContext('2d')
    ctx.beginPath()
    ctx.arc(x, y, r, Math.PI * -2, Math.PI * 2)
    ctx.strokeStyle = "#" + c.replace("#", "")
    ctx.stroke()
}