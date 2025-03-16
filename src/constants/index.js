import { Trophy, 
  Rocket, 
  Brain, 
  Code,
  Star,
  Users,
  Globe,
  Award,
  Medal,
  Laptop,
  Coffee,
  Lightbulb } from 'lucide-react';
import {
    
    bny,
    ivlabs,
    riderover,
    
  } from "../assets";

  const services = [
    {
      title: "C",
      
    },
    {
      title: "C++",
      
    },
    {
      title: "Java",
       
    },
    {
      title: "Python",
       
    },
    {
      title: "SQL",
     
    },
    {
      title: "HTML",
       
    },
    {
      title: "Tailwind CSS",
       
    },
    {
      title: "Javascript",
      
    },
    {
      title: "React Js",
       
    },
    {
      title: "Node Js",
      
    },
    {
      title: "ExtJs"
    },
    {
      title: "Springboot",
       
    },
    {
      title: "gRPC",
       
    },
    {
      title: "Oracle DB"
    },
    {
      title: "MongoDB"
    },
    {
      title: "Flutter",
       
    },
    {
      title: "Dart",
       
    },
    {
      title: "AWS"
    },
    {
      title: "Redis",
      
    },
    {
      title: "Kafka",
    
    },
    {
      title: "Docker"
    },
    {
      title: "OpenCV",
    },
    {
      title: "Mediapipe",
    },
    {
      title: "Fusion 360",
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "BNY",
      icon: bny,
      iconBg: "#383E56",
      date: "July 2024 - Present",
      points: [
        "Working on ExtJs and Java"
      ],
    },
    {
      title: "SDE Intern",
      company_name: "BNY",
      icon: bny,
      iconBg: "#E6DEDD",
      date: "May 2023 - July 2023",
      points: [
        "Developed APIs with Google Remote Procedure Call (gRPC), achieving 2-4 times faster communication. Utilized protocol buffers and HTTP2 for efficient data transmission. Integrated APIs with an Oracle database",
        "Implemented RESTful Services using Spring Boot, integrated them with an Oracle database",
        "Implemented JUnit test cases with 100% Class and Method coverage"
      ],
    },
    {
      title: "SDE Intern",
      company_name: "Ride Rover",
      icon: riderover,
      iconBg: "#383E56",
      date: "Jan 2024 - May 2024",
      points: [
        "Developed a streamlined mobile app for easy bike and car parking reservations, accessible on Android and iOS with a web admin panel, utilizing React, Tailwind CSS, and Shadcn",
        "Empowered users to easily find and navigate to available parking spots, offering subscription-based advance reservations for weekly and monthly convenience at discounted rates"
      ],
    },
    {
      title: "Summer Intern",
      company_name: "IvLabs",
      icon: ivlabs,
      iconBg: "#E6DEDD",
      date: "Jul 2021 - Feb 2022",
      points: [
        "Transforming a pair of Stereo Images into a Three-Dimensional view is made possible through computer vision algorithms, employs Python libraries OpenCV, NumPy, and Matplotlib. By calculating a disparity map and generating a point cloud using MeshLab,this algorithm can effectively extract comprehensive 3D information.",
        "Created a Dynamic Stylus Game Controller that tracks the direction of the moving object by using HSV values and assigning the appropriate direction to the main Agent of the Game."
      ],
    },
  ];
  
  const projects = [
    {
      title: "Glide Game Controller",
      link: "https://www.youtube.com/watch?v=Po408KwbK0w",
      description: "Play beyond the controller—immerse yourself in a game powered by your own body movements!"
    },
    {
      title: "Stereo Reconstruction",
      link: "https://www.youtube.com/watch?v=QJsXeMzD9Mk",
      description: "Bring your photos to life—turn any 2D image into a stunning 3D masterpiece!"
    },
    {
      title: "Air Cursor",
      link: "https://www.youtube.com/watch?v=yku03k24dVg",
      description: "Control your laptop with just a wave of your fingers—no touch needed!"
    },
    {
      title: "Center Stage",
      link: "https://www.youtube.com/watch?v=nUB4Y1XOm0c",
      description: "Bring Apple's smart camera tracking to Windows—stay perfectly framed in video calls, no matter how much you move!"
    },
    {
      title: "Air Doodle",
      link: "https://www.youtube.com/watch?v=HS0uuw5u1Xc",
      description: "Paint in the air with your fingers—watch your artwork come to life on screen!"
    },
    {
      title: "Harry's cloak",
      link: "https://www.youtube.com/watch?v=dPxPZpY7Xsw",
      description: "Step into the wizarding world—experience the magic of Harry Potter’s invisibility cloak, brought to life!"
    },
    {
      title: "Dynamic Stylus Snake Game",
      link: "https://www.youtube.com/watch?v=DQsVVHZf7to",
      description: "Reimagine the classic Snake game—turn any object into a stylus, let your computer track it, and glide your snake to victory in a whole new way!"
    }, 
    {
      title: "Image Stitcher",
      link: "https://www.youtube.com/watch?v=DhkmTGUUFmo",
      description: "Piece it together seamlessly—our smart algorithm stitches scattered image fragments into one perfect masterpiece!"
    },
    {
      title: "Image Finder",
      link: "https://www.youtube.com/watch?v=WJLgMevwS34",
      description: "Effortlessly find visually similar images—our smart algorithm scans and matches the perfect lookalikes for any image you choose!"
    },
    {
      title: "Smart Speaker",
      link: "https://www.linkedin.com/posts/pranav-mailarpawar-529ab9203_project-activity-6763122737281155072-Xy1O?utm_source=share&utm_medium=member_desktop",
      description: "Turned old electronic scraps into a smart speaker—powered by Arduino, built with creativity"
    },
    {
      title: "Video Live Streaming platform",
      link: "https://www.linkedin.com/posts/pranav-mailarpawar-529ab9203_i-built-a-streaming-platform-utilizing-nodejs-activity-7180824368699117568-_X0Z?utm_source=share&utm_medium=member_desktop",
      description: "Seamless live streaming—customize your endpoint and go live anywhere, effortlessly!"
    },
    {
      title: "Photo Editor",
      link: "https://youtube.com/shorts/lNQYnCKMiYw?feature=shared",
      description: "Unleash your creativity—edit, enhance, and transform your photos like a pro!"
    },
    {
      title: "Atoms: Surge",
      link: "https://atoms-surge.vercel.app",
      description: "A browser-based chain reaction Multiplayer strategy game featuring mathematically-optimized AI that runs entirely client-side with zero server calls."
    },
    {
      title: " SpaceTrek",
      link: "https://www.spacetrekk.com",
      description: "Void Voyager: An immersive 3D solar system explorer that brings the cosmos to life in your browser with stunning visuals and intuitive controls."
    },
    {
      title: "Pixel Lens: Capture. Showcase. Inspire.",
      link: "https://pixel-lens.netlify.app",
      description: "A dedicated space for photographers—share the moments you poured your heart into capturing!"
    },
    {
      title: "Tetris",
      link: "https://youtube.com/shorts/ti445FOaXG8?feature=shared",
      description: "Relive the childhood magic—classic Tetris, just like on those tiny black handheld consoles"
    },
    {
      title: "Connect 4",
      link: "https://youtube.com/shorts/uXUiXsiXdS8?feature=shared",
      description: "Bringing back the classroom nostalgia—play Connect 4 just like the good old days, when notebooks were game boards and every class was a battle of wits!"
    }, 
    {
      title: "Pacman",
      link: "https://youtu.be/Nu1oC0VuzEI?feature=shared",
      description: "Bringing back the arcade magic—classic Pac-Man fun, just like you remember!"
    },
    {
      title: "Fruit Ninja",
      link: "https://youtu.be/_WjZiyHExck?feature=shared",
      description: "Slice, dice, and relive the thrill—classic Fruit Ninja fun, reimagined!"
    }, 
    {
      title: "Snake Game",
      link: "https://www.linkedin.com/posts/pranav-mailarpawar-529ab9203_built-the-snake-game-using-fluttera-remarkably-activity-7139238803285671936-uJva?utm_source=share&utm_medium=member_desktop",
      description: "Relive the 90s nostalgia—classic Snake game, just like your old Nokia!"
    },
    {
      title: "Flappy Bird",
      link: "https://www.linkedin.com/posts/pranav-mailarpawar-529ab9203_using-flutter-and-the-flame-game-engine-activity-7139828629806489600-TId8?utm_source=share&utm_medium=member_desktop",
      description: "Bringing back the nostalgia—classic Flappy Bird fun, reborn!"
    },
    {
      title: "Dino Game",
      link: "https://www.linkedin.com/posts/pranav-mailarpawar-529ab9203_i-built-the-clone-of-dino-game-using-the-activity-7143633608623206400-n5st?utm_source=share&utm_medium=member_desktop",
      description: "Play the Chrome Dino game anytime—no need to wait for the internet to go down!"
    },
  ];

  const achievements = [
    {
      icon: Laptop,
      description: "Successfully delivered over 20+ freelance projects worldwide, managing the entire development process from ideation to production, including websites, apps, and computer vision solutions",
      color: "from-teal-500 to-emerald-500"
    },
    {
      icon: Medal,
      description: "5x Hackathon Winner",
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: Trophy,
      description: "Chosen for prestigious Oxford Machine Learning Summer School (OxML 2024), 1 among few candidates",
      color: "from-violet-600 to-indigo-600"
    },
    {
      icon: Rocket,
      description: "Selected for prestigious Linux Foundation Scholarship, one of only 1000 recipients worldwide",
      color: "from-rose-500 to-orange-500"
    },
    {
      icon: Brain,
      description: "Qualified for semifinals of Flipkart Grid 5.0, ranking within the top 10 teams out of 400,000 participants",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Code,
      description: "1400+ Rating (Specialist) on Codeforces, 4 Stars on Codechef",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Users,
      description: "Led Team of 10+ Developers on Enterprise Project",
      color: "from-purple-500 to-pink-500"
    },
  ];

  const name = "Pranav Mailarpawar"
  const subText = "App Developer | Fullstack Web developer"
  
  export { services, experiences,  projects, name, subText, achievements };