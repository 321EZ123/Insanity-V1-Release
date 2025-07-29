self.__uv$config = {
    prefix: '/static/insanity/',
    bare:'https://76-76-21-21.ip.addr.tools/', //dont steal my bare instead deploy one yorself on vercel via https://github.com/321EZ123/focus-bare
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/static/uv/uv.handler.js',
    bundle: '/static/uv/uv.bundle.js',
    config: '/static/uv/uv.config.js',
    sw: '/static/uv/uv.sw.js',
};
