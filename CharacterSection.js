import React, { useState } from 'react';
import './CharacterSection.css';

const characters = [
    {
        name: 'Hades',
        image: './Manhaimg/Main1.jpg',
        description: 'In the Lore Olympus webtoon, Hades, the God of the underworld, takes center stage. Often depicted as a handsome blue man in a business suit, Hades runs the Underworld Corporation, serves as the older brother of Zeus and Poseidon, and plays a role in the Six Traitor Dynasty. His character takes on the burden of leadership and pursuing personal interests. '
    },
    {
        name: 'Persephone',
        image: './Manhaimg/Main2.jpg',
        description: ' Persephone is depicted with pink skin and a generous heart, a stark contrast to the harsh reality of Olympus. Her journey included discovering her strength, and she dealt with the trauma of being raped by Apollo, as well as her strong feelings about the underworld.'
    },
    {
        name: 'Zeus',
        image: './Manhaimg/Main3.jpg',
        description: 'Zeus, the king of the gods, is depicted as a yellow-skinned man with long, straight hair. Known for his promiscuity and egotism, Zeus’ actions often brought chaos to Olympus. A member of the Six Realms of Lies, he has intimate relationships with many characters, including his brothers Hades and Poseidon, and many lovers. His character provides a lens through which to examine issues of power and corruption.'
    },
    {
        name: 'Poseidon',
        image: './Manhaimg/Main4.jpg',
        description: 'Poseidon, the God of the sea, is Zeus’s brother from the underworld. He is usually characterized by a carefree and quick temperament, portrayed with green skin and long, wavy hair. Despite being slightly less witted, Poseidon is very loyal to his family. His relationship with his wife Amphitrite and their polygamous arrangement add an intriguing dynamic to his character.'
    },
    {
        name: 'Eros',
        image:'./Manhaimg/Main5.jpg',
        description: 'Eros, the God of love and the son of Aphrodite and Ares is a strong, maroon young man. He is one of Persephone’s best friends and knows the depression she is enduring. Eros is supportive and loving, often helping to nurture other romantic relationships as he deals with his challenges, including his relationship with Psyche.'
    },

    // Add more characters as needed
];

const CharacterSection = () => {
 

 

    

    return (
        <div className="character-section">
            {characters.map((char, index) => (
                <div className="character-card" key={index}>
                    <img src={char.image} alt={char.name} className="character-image" />
                    <h3 className="character-name">{char.name}</h3>
                    <p className="character-description">{char.description}</p>
                </div>
            ))}
        </div>
    );
};

export default CharacterSection;
