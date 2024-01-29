const fontConfig = {
    fontTypes: [
        {
            name: 'heading',
            family: 'albertSans',
            unit: 'rem',
            sizes: [
                {
                    size: 9 / 16,
                    lineHeight: 12 / 16,
                },
                {
                    size: 0.75,
                    lineHeight: 1,
                },
                {
                    size: 14 / 16,
                    lineHeight: 18 / 16,
                },
                {
                    size: 1,
                    lineHeight: 20 / 16,
                },
                {
                    size: 20 / 16,
                    lineHeight: 30 / 16,
                },
                {
                    size: 24 / 16,
                    lineHeight: 36 / 16,
                },
                {
                    size: 36 / 16,
                    lineHeight: 48 / 16,
                },
                {
                    size: 48 / 16,
                    lineHeight: 54 / 16,
                },
                {
                    size: 72 / 16,
                    lineHeight: 84 / 16,
                },
            ],
        },
        {
            name: 'caption',
            family: 'nunito',
            unit: 'rem',
            sizes: [
                {
                    size: 9 / 16,
                    lineHeight: 12 / 16,
                },
                {
                    size: 0.75,
                    lineHeight: 1,
                },
                {
                    size: 14 / 16,
                    lineHeight: 18 / 16,
                },
                {
                    size: 1,
                    lineHeight: 22 / 16,
                },
                {
                    size: 20 / 16,
                    lineHeight: 26 / 16,
                },
                {
                    size: 24 / 16,
                    lineHeight: 32 / 16,
                },
                {
                  size: 36 / 16,
                  lineHeight: 48 / 16
                },
            ],
        },
        {
            name: 'body',
            family: 'nunito',
            unit: 'rem',
            sizes: [
                {
                    size: 9 / 16,
                    lineHeight: 12 / 16,
                },
                {
                    size: 0.75,
                    lineHeight: 18 / 16,
                },
                {
                    size: 14 / 16,
                    lineHeight: 22 / 16,
                },
                {
                    size: 1,
                    lineHeight: 24 / 16,
                },
                {
                    size: 20 / 16,
                    lineHeight: 30 / 16,
                },
                {
                    size: 24 / 16,
                    lineHeight: 36 / 16,
                },
                {
                    size: 36 / 16,
                    lineHeight: 54 / 16,
                },
            ],
        },
    ],
    fontWeights: [
        {
            name: 'regular',
            weight: 400,
        },
        {
            name: 'medium',
            weight: 500,
        },
        {
            name: 'semibold',
            weight: 600,
        },
        {
            name: 'bold',
            weight: 700,
        },
    ],
} as const

export default fontConfig
