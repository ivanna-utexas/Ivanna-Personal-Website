import thumbnail from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/assets/projects/Thumbnail.jpg";

export const projects = [
    {
        "id": "starlingLab",
        "thumbnail": thumbnail,
        "title": "StARLinG Lab unsupervised Learning algorithms", 
        "Focus": "We researched machine-learning-based anomaly detection for DDos attacks, comparing it to traditional signature-based intrusion detection systems (IDS). Our goal was to evaluate how well unsupervised ML Models can detect unknown (Zero-day) attacks that signature based systems might miss.",
        "Background": "Signature-based detection matches network packets to know attack signatures which is fast and accurate for known attacks but it cannot detect unknown threats. Our anomaly-based detection used machine learning to identify deviations from the normal traffic which means it can detect those unknown attacks.",
        "Description": "We built and tested three unsupervised anomaly-detection models on DDos traffic.",
        "Bullets": ["1. K-means Clustering: preprocessed and scaled training data which it used for later predictions.", "2. Gaussian Mixture Model: based on a probabilistic clustering model which evaluated how likely each flow belonged to a cluster.", "3. One-Class Classification: Designed to learn normal traffic only and flag anomalies."],
        "Conclusion": "Our models reached up to 99.9% accuracy and 100% precision in detecting network attacks. We concluded that Anomaly-based detection is effective for identifying zero-day threats, but performs best when combined with signature-based systems. This gives the strongest real world protection by balancing accuracy, speed, and adaptability.",
        "Language": "Python",
        "Technology": ["PyCharm", "GitHub"],
        "PreviewType": "image",
        "PreviewSRC": thumbnail,
        "src": "starlingLab",
        "GitHub": "https://github.com/alex-xie-3/CS-314_Assignments/tree/main/A04"
    },
    {
        "id": "ticTacToe",
        "thumbnail": thumbnail,
        "title": "Interactive Tic-Tac-Toe",
        "Focus": "I wanted to experiment with creating an interactive Object oriented design Java project with a UI through JavaFX. My goal was to learn how to connect both back-end design with an interface",
        "Background": "The back-end is done through java in object oriented programming with the Cell class extending the Locatable interface giving it the direction property and the piece class extending Namable giving it a naming property. Cell objects are used in the Grid class to construct the board (a 2D matrix). This all comes together in the GameBoard class which adds the user interactive feature through creating piece objects.",
        "Description": "An interactive Java Tic-Tac-Toe game.",
        "Bullets": ["Cell", "Grid", "Piece", "GameBoard", "Locatable", "Namable", "TicTacToe"],
        "Conclusion": "This project taught me a lot of full-stack Java fundamentals which would assist me in the future to build more complex projects!",
        "Language": "Java and JavaFX",
        "Technology": ["Eclipse", "Scene Builder"],
        "PreviewType": "iFrame",
        "PreviewSRC": "https://example.com/demo",
        "GitHub": "link.com"
    },
    {
        "id": "squirrel++",
        "thumbnail": thumbnail,
        "title": "Squirrel++",
        "Focus": "I wanted to create an educational Learn-To-Code style game that implements the features of c++ but in a fun Squirrel themed interface! My goal was to make it an experience that any age could enjoy and learn from.",
        "Background": "background for when you finish :/",
        "Description": "An interactive Learn to Code game where you help Otis the Squirrel find the acorn!",
        "Bullets": ["classes go here"],
        "Conclusion": "This project taught me advanced JavaFX development with an added bonus on the process of building game style programs.",
        "Language": "Java and JavaFX",
        "Technology": ["Eclipse", "Scene Builder"],
        "PreviewType": "iFrame",
        "PreviewSRC": "https://example.com/demo",
        "GitHub": "link.com"
    }
]