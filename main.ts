const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");

class FontChar {

    x: number;
    y: number;
    width: number;
    height: number;
    baseline: number;
    offset: number;

    constructor(x: number, y: number, width: number, height: number, baseline: number, offset: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.baseline = baseline;
        this.offset = offset;
    }
}

class Font {

    public image: HTMLImageElement;
    public charset: Record<string, FontChar>;
    public size: number;

    constructor(src: string, size: number) {
        this.image = new Image();
        this.image.src = src;
        this.size = size;
    }
}

const font_normal = new Font("font_normal.png", 9);
font_normal.charset = {
    ' ': new FontChar(0, 0, 0, 0, 0, 4),
    ':': new FontChar(0, 48, 1, 6, 3, 2),
    ';': new FontChar(3, 48, 2, 7, 3, 3),
    '<': new FontChar(6, 47, 4, 7, 2, 5),
    '=': new FontChar(12, 49, 5, 3, 4, 6),
    '>': new FontChar(18, 47, 4, 7, 2, 5),
    '?': new FontChar(24, 45, 5, 9, 0, 6),
    '@': new FontChar(30, 45, 10, 10, 0, 11),
    '[': new FontChar(41, 45, 2, 11, 0, 3),
    '\\': new FontChar(44, 45, 4, 9, 0, 5),
    ']': new FontChar(49, 45, 2, 11, 0, 3),
    '^': new FontChar(52, 44, 5, 3, -1, 6),
    '_': new FontChar(57, 55, 6, 1, 10, 7),
    '`': new FontChar(64, 45, 2, 2, 1, 3),
    '{': new FontChar(67, 44, 3, 11, 0, 4),
    '|': new FontChar(71, 45, 1, 10, 0, 2),
    '}': new FontChar(73, 44, 3, 11, 0, 4),
    '~': new FontChar(77, 46, 6, 2, 2, 7),
    '!': new FontChar(0, 32, 1, 9, 0, 2),
    '"': new FontChar(3, 32, 4, 3, 0, 5),
    '#': new FontChar(8, 32, 6, 9, 0, 7),
    '$': new FontChar(15, 32, 5, 10, 0, 6),
    '%': new FontChar(21, 32, 7, 9, 0, 8),
    '&': new FontChar(29, 32, 5, 9, 0, 6),
    '\'': new FontChar(35, 32, 1, 3, 0, 2),
    '(': new FontChar(37, 32, 2, 11, 0, 3),
    ')': new FontChar(40, 32, 2, 11, 0, 3),
    '*': new FontChar(43, 33, 3, 3, 1, 4),
    '+': new FontChar(47, 35, 5, 5, 3, 6),
    ',': new FontChar(53, 40, 2, 2, 8, 3),
    '-': new FontChar(56, 37, 2, 1, 5, 3),
    '.': new FontChar(59, 40, 1, 1, 8, 2),
    '/': new FontChar(62, 32, 4, 9, 0, 5),
    '0': new FontChar(0, 0, 5, 9, 0, 6),
    '1': new FontChar(6, 0, 3, 9, 0, 4),
    '2': new FontChar(12, 0, 5, 9, 0, 6),
    '3': new FontChar(18, 0, 5, 9, 0, 6),
    '4': new FontChar(24, 0, 5, 9, 0, 6),
    '5': new FontChar(30, 0, 5, 9, 0, 6),
    '6': new FontChar(36, 0, 5, 9, 0, 6),
    '7': new FontChar(42, 0, 5, 9, 0, 6),
    '8': new FontChar(48, 0, 5, 9, 0, 6),
    '9': new FontChar(54, 0, 5, 9, 0, 6),
    'a': new FontChar(0, 13, 5, 6, 3, 6),
    'b': new FontChar(6, 10, 5, 9, 0, 6),
    'c': new FontChar(12, 13, 5, 6, 3, 6),
    'd': new FontChar(18, 10, 5, 9, 0, 6),
    'e': new FontChar(24, 13, 5, 6, 3, 6),
    'f': new FontChar(30, 10, 2, 9, 0, 3),
    'g': new FontChar(33, 13, 5, 8, 3, 6),
    'h': new FontChar(39, 10, 5, 9, 0, 6),
    'i': new FontChar(45, 10, 1, 9, 0, 2),
    'j': new FontChar(47, 10, 1, 11, 0, 2),
    'k': new FontChar(49, 10, 5, 9, 0, 6),
    'l': new FontChar(55, 10, 1, 9, 0, 2),
    'm': new FontChar(63, 13, 7, 6, 3, 8),
    'n': new FontChar(57, 13, 5, 6, 3, 6),
    'o': new FontChar(71, 13, 5, 6, 3, 6),
    'p': new FontChar(77, 13, 5, 8, 3, 6),
    'q': new FontChar(83, 13, 5, 8, 3, 6),
    'r': new FontChar(89, 13, 2, 6, 3, 3),
    's': new FontChar(92, 13, 4, 6, 3, 5),
    't': new FontChar(97, 11, 2, 8, 1, 3),
    'u': new FontChar(100, 13, 5, 6, 3, 6),
    'v': new FontChar(106, 13, 5, 6, 3, 6),
    'w': new FontChar(112, 13, 7, 6, 3, 8),
    'x': new FontChar(120, 13, 4, 6, 3, 5),
    'y': new FontChar(124, 13, 5, 8, 3, 6),
    'z': new FontChar(130, 13, 4, 6, 3, 5),
    'A': new FontChar(0, 22, 7, 9, 0, 8),
    'B': new FontChar(8, 22, 5, 9, 0, 6),
    'C': new FontChar(15, 22, 6, 9, 0, 7),
    'D': new FontChar(22, 22, 6, 9, 0, 7),
    'E': new FontChar(30, 22, 5, 9, 0, 6),
    'F': new FontChar(37, 22, 5, 9, 0, 6),
    'G': new FontChar(43, 22, 6, 9, 0, 7),
    'H': new FontChar(51, 22, 6, 9, 0, 7),
    'I': new FontChar(59, 22, 1, 9, 0, 2),
    'J': new FontChar(61, 22, 4, 9, 0, 5),
    'K': new FontChar(67, 22, 6, 9, 0, 7),
    'L': new FontChar(74, 22, 5, 9, 0, 6),
    'M': new FontChar(88, 22, 7, 9, 0, 8),
    'N': new FontChar(80, 22, 6, 9, 0, 7),
    'O': new FontChar(97, 22, 6, 9, 0, 7),
    'P': new FontChar(105, 22, 6, 9, 0, 7),
    'Q': new FontChar(112, 22, 6, 10, 0, 7),
    'R': new FontChar(120, 22, 6, 9, 0, 7),
    'S': new FontChar(128, 22, 5, 9, 0, 6),
    'T': new FontChar(135, 22, 5, 9, 0, 6),
    'U': new FontChar(141, 22, 6, 9, 0, 7),
    'V': new FontChar(148, 22, 7, 9, 0, 8),
    'W': new FontChar(155, 22, 11, 9, 0, 12),
    'X': new FontChar(166, 22, 7, 9, 0, 8),
    'Y': new FontChar(173, 22, 7, 9, 0, 8),
    'Z': new FontChar(180, 22, 7, 9, 0, 8),
    '\x80': new FontChar(0, 57, 8, 7, 1, 8)
};

const font_bold = new Font("font_bold.png", 9);
font_bold.charset = {
    ' ': new FontChar(0, 0, 0, 0, 0, 4),
    ':': new FontChar(0, 0, 0, 0, 0, 4),
    ';': new FontChar(0, 0, 0, 0, 0, 4),
    '<': new FontChar(0, 0, 0, 0, 0, 4),
    '=': new FontChar(0, 0, 0, 0, 0, 4),
    '>': new FontChar(0, 0, 0, 0, 0, 4),
    '?': new FontChar(0, 0, 0, 0, 0, 4),
    '@': new FontChar(0, 0, 0, 0, 0, 4),
    '[': new FontChar(0, 0, 0, 0, 0, 4),
    '\\': new FontChar(0, 0, 0, 0, 0, 4),
    ']': new FontChar(0, 0, 0, 0, 0, 4),
    '^': new FontChar(0, 0, 0, 0, 0, 4),
    '_': new FontChar(0, 0, 0, 0, 0, 4),
    '`': new FontChar(0, 0, 0, 0, 0, 4),
    '{': new FontChar(0, 0, 0, 0, 0, 4),
    '|': new FontChar(0, 0, 0, 0, 0, 4),
    '}': new FontChar(0, 0, 0, 0, 0, 4),
    '~': new FontChar(0, 0, 0, 0, 0, 4),
    '!': new FontChar(0, 0, 0, 0, 0, 4),
    '"': new FontChar(0, 0, 0, 0, 0, 4),
    '#': new FontChar(0, 0, 0, 0, 0, 4),
    '$': new FontChar(0, 0, 0, 0, 0, 4),
    '%': new FontChar(0, 0, 0, 0, 0, 4),
    '&': new FontChar(0, 0, 0, 0, 0, 4),
    '\'': new FontChar(0, 0, 0, 0, 0, 4),
    '(': new FontChar(0, 0, 0, 0, 0, 4),
    ')': new FontChar(0, 0, 0, 0, 0, 4),
    '*': new FontChar(0, 0, 0, 0, 0, 4),
    '+': new FontChar(0, 0, 0, 0, 0, 4),
    ',': new FontChar(0, 0, 0, 0, 0, 4),
    '-': new FontChar(0, 0, 0, 0, 0, 4),
    '.': new FontChar(0, 0, 0, 0, 0, 4),
    '/': new FontChar(0, 0, 0, 0, 0, 4),
    '0': new FontChar(367, 0, 6, 9, 0, 7),
    '1': new FontChar(374, 0, 4, 9, 0, 5),
    '2': new FontChar(379, 0, 6, 9, 0, 7),
    '3': new FontChar(386, 0, 6, 9, 0, 7),
    '4': new FontChar(393, 0, 6, 9, 0, 7),
    '5': new FontChar(400, 0, 6, 9, 0, 7),
    '6': new FontChar(407, 0, 6, 9, 0, 7),
    '7': new FontChar(414, 0, 6, 9, 0, 7),
    '8': new FontChar(421, 0, 6, 9, 0, 7),
    '9': new FontChar(428, 0, 6, 9, 0, 7),
    'a': new FontChar(206, 3, 6, 6, 3, 7),
    'b': new FontChar(213, 0, 6, 9, 0, 7),
    'c': new FontChar(220, 3, 6, 6, 3, 7),
    'd': new FontChar(227, 0, 6, 9, 0, 7),
    'e': new FontChar(234, 3, 6, 6, 3, 7),
    'f': new FontChar(241, 0, 3, 9, 0, 4),
    'g': new FontChar(245, 3, 6, 8, 3, 7),
    'h': new FontChar(252, 0, 6, 9, 0, 7),
    'i': new FontChar(259, 0, 2, 9, 0, 3),
    'j': new FontChar(262, 0, 2, 11, 0, 3),
    'k': new FontChar(265, 0, 6, 9, 0, 7),
    'l': new FontChar(272, 0, 2, 9, 0, 3),
    'm': new FontChar(275, 3, 8, 6, 3, 9),
    'n': new FontChar(284, 3, 6, 6, 3, 7),
    'o': new FontChar(291, 3, 6, 6, 3, 7),
    'p': new FontChar(298, 3, 6, 8, 3, 7),
    'q': new FontChar(305, 3, 6, 8, 3, 7),
    'r': new FontChar(312, 0, 3, 9, 0, 4),
    's': new FontChar(316, 3, 5, 6, 3, 6),
    't': new FontChar(322, 1, 3, 8, 1, 4),
    'u': new FontChar(326, 3, 6, 6, 3, 7),
    'v': new FontChar(333, 3, 6, 6, 3, 7),
    'w': new FontChar(340, 3, 8, 6, 3, 9),
    'x': new FontChar(349, 3, 5, 6, 3, 6),
    'y': new FontChar(354, 3, 6, 8, 3, 7),
    'z': new FontChar(361, 3, 5, 6, 3, 6),
    'A': new FontChar(0, 0, 8, 9, 0, 9),
    'B': new FontChar(9, 0, 6, 9, 0, 8),
    'C': new FontChar(16, 0, 7, 9, 0, 8),
    'D': new FontChar(24, 0, 7, 9, 0, 8),
    'E': new FontChar(32, 0, 6, 9, 0, 7),
    'F': new FontChar(39, 0, 6, 9, 0, 7),
    'G': new FontChar(46, 0, 7, 9, 0, 8),
    'H': new FontChar(54, 0, 7, 9, 0, 8),
    'I': new FontChar(62, 0, 2, 9, 0, 3),
    'J': new FontChar(65, 0, 5, 9, 0, 6),
    'K': new FontChar(71, 0, 7, 9, 0, 8),
    'L': new FontChar(79, 0, 6, 9, 0, 7),
    'M': new FontChar(86, 0, 8, 9, 0, 9),
    'N': new FontChar(95, 0, 7, 9, 0, 8),
    'O': new FontChar(103, 0, 7, 9, 0, 8),
    'P': new FontChar(111, 0, 7, 9, 0, 8),
    'Q': new FontChar(119, 0, 7, 10, 0, 8),
    'R': new FontChar(127, 0, 7, 9, 0, 8),
    'S': new FontChar(135, 0, 6, 9, 0, 7),
    'T': new FontChar(142, 0, 6, 9, 0, 7),
    'U': new FontChar(149, 0, 7, 9, 0, 8),
    'V': new FontChar(157, 0, 8, 9, 0, 9),
    'W': new FontChar(166, 0, 12, 9, 0, 13),
    'X': new FontChar(179, 0, 8, 9, 0, 10),
    'Y': new FontChar(188, 0, 8, 9, 0, 10),
    'Z': new FontChar(197, 0, 8, 9, 0, 10)
};

function isPointInsideRect(x: number, y: number, x1: number, y1: number, x2: number, y2: number): boolean {
    return x >= x1 && y >= y1 && x < x2 && y < y2;
}

function drawText(ctx: CanvasRenderingContext2D, font: Font, text: string, x: number, y: number) {

    const initial_x = x;

    for (let i = 0; i < text.length; i++) {
        const char = text.charAt(i);
        if (char === '\n') {
            y += font.size + 3;
            x = initial_x;
            continue;
        }
        const font_char = font.charset[char];
        if (!font_char) {
            continue;
        }

        ctx.drawImage(font.image, font_char.x, font_char.y, font_char.width, font_char.height, x, y + font_char.baseline, font_char.width, font_char.height);
        x += font_char.offset;
    }
}

function measureText(text: string, font: Font) {

    let width = 0;

    for (let i = 0; i < text.length; i++) {
        const char = font.charset[text.charAt(i)];
        if (!char) {
            continue;
        }

        width += char.offset;
    }

    return width;
}

function drawPanelWithBevelBorderType1(ctx: CanvasRenderingContext2D, width: number, height: number, background: string = "#C2C6CA", color1: string = "#FFFFFF", color2: string = "#85898D", color3: string = "#000000") {

    // base background
    ctx.fillStyle = background;
    ctx.fillRect(1, 1, width - 3, height - 3);

    // top-left border
    ctx.fillStyle = color1;
    ctx.fillRect(0, 0, 1, height - 1);
    ctx.fillRect(0, 0, width - 1, 1);

    // bottom-right border
    ctx.fillStyle = color2;
    ctx.fillRect(width - 2, 1, 1, height - 2);
    ctx.fillRect(1, height - 2, width - 2, 1);

    // bottom-right border
    ctx.fillStyle = color3;
    ctx.fillRect(width - 1, 0, 1, height);
    ctx.fillRect(0, height - 1, width, 1);
}

function drawPanelWithBevelBorderType2(ctx: CanvasRenderingContext2D, width: number, height: number, background: string = "#C2C6CA", color1: string = "#FFFFFF", color2: string = "#85898D", color3: string = "#000000") {

    // base background
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, width - 1, height - 1);

    // top-left border
    ctx.fillStyle = color1;
    ctx.fillRect(1, 1, 1, height - 3);
    ctx.fillRect(1, 1, width - 3, 1);

    // bottom-right border
    ctx.fillStyle = color2;
    ctx.fillRect(width - 2, 1, 1, height - 2);
    ctx.fillRect(1, height - 2, width - 2, 1);

    // bottom-right border
    ctx.fillStyle = color3;
    ctx.fillRect(width - 1, 0, 1, height);
    ctx.fillRect(0, height - 1, width, 1);
}

function drawPanelWithBevelBorderType3(ctx: CanvasRenderingContext2D, width: number, height: number, background: string = "#C2C6CA", color1: string = "#FFFFFF", color2: string = "#85898D", color3: string = "#000000") {

    // base background
    ctx.fillStyle = background;
    ctx.fillRect(2, 2, width - 4, height - 4);

    // bottom-right border
    ctx.strokeStyle = color2;
    ctx.strokeRect(1.5, 1.5, width - 3, height - 3);

    // bottom-right border
    ctx.strokeStyle = color3;
    ctx.strokeRect(0.5, 0.5, width - 1, height - 1);
}

class Widget {

    parent: Widget = null;
    childs: Widget[] = [];

    x: number;
    y: number;
    width: number;
    height: number;

    hovered: boolean = false;
    pressed: boolean = false;

    constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw(ctx: CanvasRenderingContext2D) {
        for (const child of this.childs) {
            ctx.translate(child.x, child.y);
            child.draw(ctx);
            ctx.translate(-child.x, -child.y); // translate back to component origin
        }
    }

    addChild(child: Widget) {
        child.parent = this;
        this.childs.push(child);
    }

    onMouseMove(x: number, y: number) {
    }

    onMouseDown(x: number, y: number) {
        for (const child of this.childs) {
            const x1 = this.x + child.x;
            const y1 = this.x + child.y;
            const x2 = x1 + child.width;
            const y2 = y1 + child.height;
            if (isPointInsideRect(x, y, x1, y1, x2, y2)) {
                child.pressed = true;
                child.onMouseDown(x, y);
            }
        }

        this.pressed = true;
    }

    onMouseUp(x: number, y: number) {
        for (const child of this.childs) {
            const x1 = this.x + child.x;
            const y1 = this.x + child.y;
            const x2 = x1 + child.width;
            const y2 = y1 + child.height;
            if (isPointInsideRect(x, y, x1, y1, x2, y2)) {
                child.pressed = false;
                child.onMouseUp(x, y);
            }
        }
    }
}

class Panel extends Widget {

    draw(ctx: CanvasRenderingContext2D) {
        drawPanelWithBevelBorderType2(ctx, this.width, this.height);

        super.draw(ctx);
    }
}

class Button extends Widget {

    public text: string;

    constructor(text: string, x: number, y: number, width: number = -1, height: number = 20) {
        if (width === -1) {
            width = Math.ceil(measureText(text, font_normal) + 8);
        }
        super(x, y, width, height);

        this.text = text;
    }

    draw(ctx: CanvasRenderingContext2D) {
        if (this.pressed) {
            drawPanelWithBevelBorderType3(ctx, this.width, this.height);
        } else {
            drawPanelWithBevelBorderType1(ctx, this.width, this.height);
        }

        const text_width = measureText(this.text, font_normal);
        const text_height = font_normal.size;
        let text_x = Math.floor((this.width - text_width) / 2);
        let text_y = Math.floor((this.height - text_height) / 2);
        if (this.pressed) {
            text_x += 1;
            text_y += 1;
        }
        drawText(ctx, font_normal, this.text, text_x, text_y);

        super.draw(ctx);
    }
}

class Frame extends Widget {

    public title: string;

    constructor(title: string, x: number, y: number, width: number, height: number) {
        super(x, y, width, height);
        this.title = title;

        this.addChild(new Button("\x80", this.width - 16 - 3 - 2, 3 + 2, 16, 14))
    }

    draw(ctx: CanvasRenderingContext2D) {
        drawPanelWithBevelBorderType2(ctx, this.width, this.height);

        // draw title
        ctx.fillStyle = "#0000AA";
        ctx.fillRect(3, 3, this.width - 6, 18);
        drawText(ctx, font_bold, this.title, 5, 3 + Math.floor((18 - font_normal.size) / 2));

        drawText(ctx, font_normal, "!\"#$%&'()*+,-./\n0123456789\n:;<=>?@[\\]^_`{|}~\nabcdefghijklmnopqrstuvwxyz\nABCDEFGHIJKLMNPQRSTUVWXYZ", 5, 50);
        // drawText(ctx, font_bold, "!\"#$%&'()*+,-./\n0123456789\n:;<=>?@[\\]^_`{|}~\nabcdefghijklmnopqrstuvwxyz\nABCDEFGHIJKLMNPQRSTUVWXYZ", 5, 80);

        super.draw(ctx);
    }
}

const root = new Widget(0, 0, 0, 0);
const frame = new Frame("Win95 Canvas Rendering", 8, 8, 220, 150);
const button1 = new Button("automatic button width", 4, 23);
const button2 = new Button("test", button1.x + button1.width + 2, 23);
frame.addChild(button1);
frame.addChild(button2);
root.addChild(frame);

Promise.all([
    new Promise(resolve => {
        font_normal.image.onload = resolve;
    })
]).then(() => {

    function draw() {
        root.draw(ctx);
        requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);

    canvas.addEventListener("mousemove", function(event) {
        root.onMouseMove(event.offsetX, event.offsetY);
    });

    canvas.addEventListener("mousedown", function(event) {
        root.onMouseDown(event.offsetX, event.offsetY);
    });

    canvas.addEventListener("mouseup", function(event) {
        root.onMouseUp(event.offsetX, event.offsetY);
    });
});
