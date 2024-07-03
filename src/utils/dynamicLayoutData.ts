export const dynamicLayoutData = [
    {
        type: 'layoutSection',
        props: { className: 'hero-section' },
        components: [
            {
                type: 'componentHero',
                props: {
                    title: 'Welcome to Our Site',
                    image: './media/hero.png',
                },
            },
        ],
    },
    {
        type: 'layoutSection',
        props: { className: 'items-showcase-section' },
        components: [
            {
                type: 'componentItemsShowcase',
                props: {
                    items: [
                        {
                            title: 'Item 1',
                            description: 'Item Description 1',
                        },
                        {
                            title: 'Item 2',
                            description: 'Item Description 2',
                        },
                        {
                            title: 'Item 3',
                            description: 'Item Description 3',
                        },
                        {
                            title: 'Item 4',
                            description: 'Item Description 4',
                        },
                    ],
                },
            },
        ],
    },
    {
        type: 'layoutSection',
        props: { className: 'trust-bar-section' },
        components: [
            {
                type: 'componentTrustBar',
                props: {
                    images: [
                        'media/cats/cat_1.png',
                        'media/cats/cat_2.png',
                        'media/cats/cat_3.png',
                        'media/cats/cat_4.png',
                        'media/cats/cat_5.png',
                        'media/cats/cat_6.png',
                        'media/cats/cat_7.png',
                        'media/cats/cat_8.png',
                        'media/cats/cat_9.png',
                        'media/cats/cat_10.png',
                    ],
                },
            },
        ],
    },
    {
        type: 'layoutSection',
        props: { className: 'cards-section' },
        components: [
            {
                type: 'componentCards',
                props: {
                    cards: [
                        {
                            title: 'Card 1',
                            image: 'media/cards/shape1.svg',
                            description: 'Card 1 - description',
                            background: 'blue',
                            onClick: () => {},
                            buttonText: 'Click me!',
                        },
                        {
                            title: 'Card 1',
                            image: 'media/cards/shape2.svg',
                            description: 'Card 2 - description',
                            background: 'blue',
                            onClick: () => {},
                            buttonText: 'Click me!',
                        },
                        {
                            title: 'Card 1',
                            image: 'media/cards/shape3.svg',
                            description: 'Card 3 - description',
                            background: 'red',
                            onClick: () => {},
                            buttonText: 'Click me!',
                        },
                        {
                            title: 'Card 1',
                            image: 'media/cards/shape4.svg',
                            description: 'Card 4 - description',
                            background: 'rose',
                            onClick: () => {},
                            buttonText: 'Click me!',
                        },
                    ],
                },
            },
        ],
    },
];
