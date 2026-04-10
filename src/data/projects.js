import starlingLabThumbnail from "../assets/projects/StarlingLabThumbnail.png"
import TicTacToeThumbnail from "../assets/projects/TicTacToeThumbnail.png"
import SnakeThumbnail from "../assets/projects/SnakeThumbnail.png"
import SquirrelThumbnail from "../assets/projects/Squirrel++Thumbnail.png"
import BitBlastThumbnail from "../assets/projects/BitBlastThumbnail.svg"

export const projects = [
    {
        "id": "bitblast",
        "thumbnail": BitBlastThumbnail,
        "title": "Bit Blast",
        "Focus": "As computer architecture students, we wanted to take a dry but essential CS topic — boolean logic — and turn it into something genuinely fun. Inspired by falling-block puzzle games, the goal was to build a pick-up-and-play experience where players internalize XOR, AND, and NAND operations through gameplay rather than a textbook.",
        "Background": "Bit Blast is a falling-block puzzle game built entirely in Unity 2D using C# in under 24 hours. An 8-bit register sits at the bottom of the screen while blocks of 1–4 bits fall from the top, each labeled with a gate operation. When a block lands, it applies its operation to the register bits it touches. A live truth table updates on the side panel so players always have a reference — until they don't need it anymore. A single GameManager.cs script owns all register state, gate logic, win detection, scoring, and level progression.",
        "Description": "A falling-block puzzle game where bit-blocks drop onto an 8-bit register and perform logic gate operations on impact. Match the goal state to clear the register.",
        "Bullets": [
            "Built a fully playable Unity 2D game in C# in under 24 hours with no prior Unity shipping experience",
            "Engineered gate-dependent win conditions: XOR and NAND target all 1s, AND targets all 0s, with scoring and detection branching per gate type",
            "Implemented variable block widths (1–4 bits) with dynamic spawn, movement clamping, landing detection, and gate alignment from a single size value",
            "Solved coordinate mapping between Unity's local canvas space and register array indices for pixel-accurate block landing",
            "Used a lock delay coroutine to prevent double-trigger race conditions on block landing",
            "Integrated a live truth table sidebar that teaches gate behavior passively through play"
        ],
        "Conclusion": "The moment a playtester started thinking two drops ahead to avoid flipping the wrong bits — that's when we knew the design worked. This project taught us that the best educational tools don't explain concepts, they make the wrong answer feel wrong. We're looking to expand Bit Blast with more number bases, two-player mode, and mobile support.",
        "Language": "C#",
        "Technology": ["Unity", "Canva"],
        "PreviewType": "iFrame",
        "PreviewSRC": "https://block-blast-but-i-need-to.study/",
        "GitHub": "https://github.com/ivanna-utexas/BitBlast"
    },
    {
        "id": "squirrel++",
        "thumbnail": SquirrelThumbnail,
        "title": "Squirrel++",
        "Focus": "I wanted to create an educational Learn-To-Code style game that teaches programming concepts through a fun, squirrel-themed interface. My goal was to make it an experience that any age could enjoy and learn from. I was inspired by block-based programming platforms like Scratch and platform based games. I merged these two ideas to create an education game that introduced fundamental programming concepts.",
        "Background": "I developed an interactive, block-based programming game using Java and Java Swing that allows players to visually construct logic-driven programs to control a character in a 2D environment. The project features a custom command system with modular components such as movement commands, conditional logic (IF / ELSE), and game-state conditions (e.g., path detection), all executed through a runtime program interpreter. I designed a drag-and-drop UI using Swing components, layered panels, and custom rendering, including dynamically editable conditional blocks that update their behavior at runtime. The game integrates collision detection, state-based player movement, and level data evaluation to support real-time decision making. This project demonstrates my experience with object-oriented design, event-driven programming, UI/UX prototyping, and building educational tools that connect visual interfaces with underlying program logic.",
        "Description": "An interactive block-based programming game where players help Otis the Squirrel navigate the 2D world.",
        "Bullets": [
                "Developed a drag-and-drop visual programming interface using Java Swing with custom rendering and layered panels",
                "Engineered a modular command system supporting movement commands, conditional logic (IF/ELSE), and game-state conditions",
                "Built a runtime program interpreter that executes player-constructed programs in real-time",
                "Implemented collision detection, state-based movement, and level evaluation for responsive gameplay",
                "Designed dynamically editable conditional blocks that update behavior during execution"
        ],
        "Conclusion": "This project deepened my understanding of object-oriented design, event-driven programming, and UI/UX development while teaching me how to build complete educational tools that bridge visual interfaces with underlying program logic. I want to keep developing the game so that it can be used in beginner coding classes!",
        "Language": "Java and Java Swing",
        "Technology": ["VSCode"],
        "PreviewType": "iFrame",
        "PreviewSRC": "https://www.youtube.com/embed/WBTOki01dh0?si=LGdZmuJEVkCgOmYZ",
        "GitHub": "https://github.com/ivanna-utexas/Learn-to-Code-Squirrel/tree/main"
    },
    {
        "id": "starlingLab",
        "thumbnail": starlingLabThumbnail,
        "title": "StARLinG Lab unsupervised Learning algorithms", 
        "Focus": "We researched machine-learning-based anomaly detection for DDos attacks, comparing it to traditional signature-based intrusion detection systems (IDS). Our goal was to evaluate how well unsupervised ML Models can detect unknown (Zero-day) attacks that signature based systems might miss.",
        "Background": "Signature-based detection matches network packets to know attack signatures which is fast and accurate for known attacks but it cannot detect unknown threats. Our anomaly-based detection used machine learning to identify deviations from the normal traffic which means it can detect those unknown attacks.",
        "Description": "We built and tested three unsupervised anomaly-detection models on DDos traffic.",
        "Bullets": ["1. K-means Clustering: preprocessed and scaled training data which it used for later predictions.", "2. Gaussian Mixture Model: based on a probabilistic clustering model which evaluated how likely each flow belonged to a cluster.", "3. One-Class Classification: Designed to learn normal traffic only and flag anomalies."],
        "Conclusion": "Our models reached up to 99.9% accuracy and 100% precision in detecting network attacks. We concluded that Anomaly-based detection is effective for identifying zero-day threats, but performs best when combined with signature-based systems. This gives the strongest real world protection by balancing accuracy, speed, and adaptability.",
        "Language": "Python",
        "Technology": ["PyCharm"],
        "PreviewType": "iFrame",
        "PreviewSRC": "https://docs.google.com/presentation/d/e/2PACX-1vSmj38O8gx9gPLR03Ql1E4td99reOfXpR4FQGydNXiHpmI6E5fqfLUEE-Zrhf0yofpKgwfWgYQuEulv/pubembed?start=true&loop=true&delayms=3000",
        "src": "starlingLab",
        "GitHub": "https://docs.google.com/presentation/d/e/2PACX-1vSmj38O8gx9gPLR03Ql1E4td99reOfXpR4FQGydNXiHpmI6E5fqfLUEE-Zrhf0yofpKgwfWgYQuEulv/pub?start=true&loop=true&delayms=3000&slide=id.g279d83b97fc_2_2638"
    },
    {
        "id": "snake",
        "thumbnail": SnakeThumbnail,
        "title": "Interactive Snake Game",
        "Focus": "I wanted to experiment with creating an interactive Object oriented design Java project with a UI through JavaFX. My goal was to learn how to connect both back-end design with an interface",
        "Background": "The back-end is done through java in object oriented programming with the Cell class extending the Locatable interface giving it the direction property and the piece class extending Namable giving it a naming property. Cell objects are used in the Grid class to construct the board (a 2D matrix). This all comes together in the GameBoard class which adds the user interactive feature through creating piece objects.",
        "Description": "An interactive Java Snake game.",
        "Bullets": ["Cell", "Grid", "Piece", "GameBoard", "Locatable", "Namable", "TicTacToe"],
        "Conclusion": "This project taught me a lot of full-stack Java fundamentals which would assist me in the future to build more complex projects!",
        "Language": "Java",
        "Technology": ["Eclipse"],
        "PreviewType": "iFrame",
        "PreviewSRC": "https://www.youtube.com/embed/z9rHydf-WjI",
        "GitHub": "https://github.com/ivanna-utexas/Java-Snake.git"
    },
    {
        "id": "ticTacToe",
        "thumbnail": TicTacToeThumbnail,
        "title": "Interactive Tic-Tac-Toe",
        "Focus": "I wanted to experiment with creating an interactive Object oriented design Java project with a UI through JavaFX. My goal was to learn how to connect both back-end design with an interface",
        "Background": "The back-end is done through java in object oriented programming with the Cell class extending the Locatable interface giving it the direction property and the piece class extending Namable giving it a naming property. Cell objects are used in the Grid class to construct the board (a 2D matrix). This all comes together in the GameBoard class which adds the user interactive feature through creating piece objects.",
        "Description": "An interactive Java Tic-Tac-Toe game.",
        "Bullets": ["Cell", "Grid", "Piece", "GameBoard", "Locatable", "Namable", "TicTacToe"],
        "Conclusion": "This project taught me a lot of full-stack Java fundamentals which would assist me in the future to build more complex projects!",
        "Language": "Java",
        "Technology": ["Eclipse"],
        "PreviewType": "iFrame",
        "PreviewSRC": "https://www.youtube.com/embed/UwIOZSQX3PQ",
        "GitHub": "https://github.com/ivanna-utexas/Java-Tic-Tac-Toe"
    }
]