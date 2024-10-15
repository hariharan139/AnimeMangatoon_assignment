import React,{useEffect} from 'react';
import FileUpload from './FileUpload'; // Import FileUpload if needed
import CharacterSection from './CharacterSection'; // Import CharacterSection if needed

const Home = () => {
  // src/Home.js



    useEffect(() => {
        // Any initialization or cleanup logic can go here
        return () => {
            // Cleanup if necessary
        };
    }, []);

   




    return (
        <div>
            <h1>Welcome to the Webtoon</h1>
            <FileUpload /> {/* You can include the FileUpload component here if needed */}
            <CharacterSection /> {/* Include character section if needed */}
        </div>
    );
};

export default Home;
