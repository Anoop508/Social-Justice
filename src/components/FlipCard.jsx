import { useState } from "react";
import './FlipCard.css';

export default function FlipCard({front, back}) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        // <div className="container">
            <div className="card-wrapper" onClick={handleFlip}>
                <div className={`card ${isFlipped ? 'flipped' : ''}`}>
                    <div className="card-front">
                       <h1>{front}</h1>
                    </div>
                    <div className="card-back">
                        <h2>{back}</h2>
                    </div>
                </div>
             </div>
        // </div>
    );
}
