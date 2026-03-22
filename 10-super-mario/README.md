# Super Mario Mimic

A fully functional Super Mario Bros game built with TypeScript, HTML5 Canvas, and modern web technologies. This game runs entirely in the browser.

Application source code is originally from [Abhishek Veeramalla's github](https://github.com/iam-veeramalla/super-mario-mimic) and has been slightly modified for this example.

---

### Folder Structure

```
├── src/
│   ├── game/
│   │   ├── entities/
│   │   │   ├── Player.ts          # Player character with physics and controls
│   │   │   ├── Enemy.ts           # Enemy AI and behavior
│   │   │   ├── Coin.ts            # Collectible coins with animations
│   │   │   └── Platform.ts        # Platform/ground collision objects
│   │   ├── Game.ts                # Main game controller and state management
│   │   ├── GameRenderer.ts        # Rendering engine for all game objects
│   │   ├── InputHandler.ts        # Keyboard input management
│   │   ├── SoundManager.ts        # Audio effects using Web Audio API
│   │   └── CollisionDetector.ts   # Physics collision detection system
│   ├── styles/
│   │   └── game.css               # Game UI and canvas styling
│   └── main.ts                    # Application entry point and game loop
├── index.html                     # Main HTML file
├── Dockerfile                     # Container configuration
├──.dockerignore                   # Files and directories to ignore when building the Docker image
├── package.json                   # Dependencies and scripts
└── README.md
```

---

### Docker Commands Used

```bash
docker build -t tharix46/super-mario-mimic:V1 .

docker images

docker run -d --name super-mario-mimic -p 80:80 tharix46/super-mario-mimic:V1

docker ps
```

---

### Accessing the Application

Using browser:
go to http://localhost:80

---
