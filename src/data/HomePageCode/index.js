export const codeContent = [
    {
        indent: 0,
        content: [
            { text: 'class ', color: 'text-purple-400' },
            { text: 'Person', color: 'text-yellow-300' },
            { text: ' {', color: 'text-white' },
        ],
    },
    {
        indent: 0,
        content: [
            { text: '    ', color: '' },
            { text: '// Κατασκευαστής', color: 'text-[#586691]' },
        ],
    },
    {
        indent: 1,
        content: [
            { text: 'constructor ', color: 'text-purple-400' },
            { text: '(', color: 'text-white' },
            { text: 'name, age', color: 'text-orange-300' },
            { text: ') {', color: 'text-white' },
        ],
    },
    {
        indent: 2,
        content: [
            { text: 'this', color: 'text-orange-300' },
            { text: '.', color: 'text-white' },
            { text: 'name', color: 'text-blue-300' },
            { text: ' = ', color: 'text-white' },
            { text: 'name', color: 'text-blue-300' },
        ],
    },
    {
        indent: 2,
        content: [
            { text: 'this', color: 'text-orange-300' },
            { text: '.', color: 'text-white' },
            { text: 'age', color: 'text-blue-300' },
            { text: ' = ', color: 'text-white' },
            { text: 'age', color: 'text-blue-300' },
        ],
    },
    {
        indent: 1,
        content: [{ text: '}', color: 'text-white' }],
    },
    {
        indent: 0,
        content: [
            { text: '    ', color: '' },
            { text: '// Μέθοδος', color: 'text-[#586691]' },
        ],
    },
    {
        indent: 1,
        content: [
            { text: 'sayHello', color: 'text-purple-400' },
            { text: '(', color: 'text-white' },
            { text: ') {', color: 'text-white' },
        ],
    },
    {
        indent: 2,
        content: [
            { text: 'console', color: 'text-blue-300' },
            { text: '.', color: 'text-white' },
            { text: 'log', color: 'text-purple-400' },
            { text: '(', color: 'text-white' },
            { text: "`Hello, I'm ", color: 'text-green-400' },
            { text: '${', color: 'text-white' },
            { text: 'this', color: 'text-orange-300' },
            { text: '.', color: 'text-white' },
            { text: 'name', color: 'text-blue-300' },
            { text: '}', color: 'text-white' },
            { text: '!`', color: 'text-green-400' },
            { text: ')', color: 'text-white' },
        ],
    },
    {
        indent: 1,
        content: [{ text: '}', color: 'text-white' }],
    },
    {
        indent: 0,
        content: [{ text: '}', color: 'text-white' }],
    },
    {
        indent: 0,
        content: [
            { text: '// Δημιουργία αντικειμένου', color: 'text-[#586691]' },
        ],
    },
    {
        indent: 0,
        content: [
            { text: 'const ', color: 'text-purple-400' },
            { text: 'person', color: 'text-yellow-300' },
            { text: ' = ', color: 'text-white' },
            { text: 'new ', color: 'text-purple-400' },
            { text: 'Person', color: 'text-yellow-300' },
            { text: '(', color: 'text-white' },
            { text: "'Andreas'", color: 'text-green-400' },
            { text: ', ', color: 'text-white' },
            { text: '25', color: 'text-green-400' },
            { text: ')', color: 'text-white' },
        ],
    },
    {
        indent: 0,
        content: [
            { text: 'person', color: 'text-yellow-300' },
            { text: '.', color: 'text-white' },
            { text: 'sayHello', color: 'text-purple-400' },
            { text: '()', color: 'text-white' },
            { text: '    ', color: '' },
        ],
    },
    {
        indent: 0,
        content: [{ text: '', color: '' }],
    },
    {
        indent: 0,
        content: [
            {
                text: "// Εκτύπωση: Hello, I'm Andreas!",
                color: 'text-[#586691]',
            },
        ],
    },
];
