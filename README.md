A command line tool to split up sprite-sheets into their constituent images.

I couldn't get any of those online sprite-sheet decomposers to work so here's a quick NodeJS take on the problem.

How to use it:

install it:

`npm i -g @tomgp/decompose-sprites`

run it:

```
node index.js -i ./test-images/badges-50-sprite.png -w 50 -h 50 -o ./test-images/output
./test-images/badges-50-sprite.png 50 50
```

Options
```
-V, --version          output the version number
-i, --image [path]     input image [path]
-w, --width [pixels]   sprite width [pixels]
-h, --height [pixels]  sprite height [pixels]
-o, --outdir [path]    output directory [path]
-h, --help             output usage information
```

