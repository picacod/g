import React, { useState } from 'react';

function Purchase() {
    const [selectedCard, setSelectedCard] = useState(null);

    // Example card data
    const cards = [
        { id: 1, title: 'Card 1', content: 'This is the content of Card 1.' },
        { id: 2, title: 'Card 2', content: 'This is the content of Card 2.' },
        { id: 3, title: 'Card 3', content: 'This is the content of Card 3.' },
        { id: 4, title: 'Card 1', content: 'This is the content of Card 1.' },
        { id: 4, title: 'Card 2', content: 'This is the content of Card 2.' },
        { id: 5, title: 'Card 3', content: 'This is the content of Card 3.' },
        { id: 6, title: 'Card 2', content: 'This is the content of Card 2.' },
        { id: 7, title: 'Card 3', content: 'This is the content of Card 3.' },
        { id: 8, title: 'Card 2', content: 'This is the content of Card 2.' },
        { id: 9, title: 'Card 3', content: 'This is the content of Card 3.' },
    ];

    const handleCardClick = (card) => {
        setSelectedCard(card);
    };

    return (
        <div className='bg-secondary vh-100 d-flex align-items-center justify-content-center'>
            <div className='container' style={{height:'80vh'}}>
                <div className='row h-100'>
                    {/* Left Side: Vertical Scrollable Card List */}
                    <div className='col-4 bg-light overflow-auto' style={{ maxHeight: '100%' }}>
                        {cards.map((card) => (
                            <div
                                key={card.id}
                                className='card mb-3 p-3'
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleCardClick(card)}
                            >
                                <h5>{card.title}</h5>
                            </div>
                        ))}
                    </div>
                    
                    {/* Right Side: Display Selected Card Content */}
                    <div className='col-8 d-flex align-items-center justify-content-center'>
                        <div className='card h-100 w-75 p-4'>
                            {selectedCard ? (
                                <>
                                    <h4>{selectedCard.title}</h4>
                                    <p>{selectedCard.content}</p>
                                </>
                            ) : (
                                <p>Select a card to see the content</p>
                            )}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Purchase;
