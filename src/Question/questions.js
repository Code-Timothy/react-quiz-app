export const questions = [
    {
        id: 0,
        content: "Jaką komendą stworzymy create-react-app:",
        answers: [
            { id: 1, text: "npm create-react-app nazwa-aplikacji", isCorrect: false, isSelected: false, },
            { id: 2, text: "npx create-react-app nazwa-aplikacji", isCorrect: true, isSelected: false, },
            { id: 3, text: "npx install create-react-app nazwa-aplikacji", isCorrect: false, isSelected: false, },
            { id: 4, text: "żadne z powyższych", isCorrect: false, isSelected: false, },
        ],
    },
    {
        id: 1,
        content: "Do czego służy hook useState:",
        answers: [
            { id: 1, text: "Do zarządzania stanem komponentów", isCorrect: true, isSelected: false, },
            { id: 2, text: "Do kontrolowania efektów ubocznych", isCorrect: false, isSelected: false, },
            { id: 3, text: "Do przechowywania stałych referencji", isCorrect: false, isSelected: false, },
            { id: 4, text: "Jest używane wyłącznie w komponentach klasowych", isCorrect: false, isSelected: false, },
        ],
    },
    {
        id: 2,
        content: "Do czego służy hook useEffect:",
        answers: [
            { id: 1, text: "Służy wyłącznie do manipulacji stylem CSS w komponentach", isCorrect: false, isSelected: false, },
            { id: 2, text: "Służy tylko do zmiany stanu komponentu", isCorrect: false, isSelected: false, },
            { id: 3, text: "Służy do zmiany komponentów klasowych", isCorrect: false, isSelected: false, },
            { id: 4, text: "Służy do zarządzania efektami ubocznymi w komponentach React", isCorrect: true, isSelected: false, },
        ],
    },
    {
        id: 3,
        content: "Co to jest 'props' w React:",
        answers: [
            { id: 1, text: "Skrót od 'properties', służy do stylizacji komponentów", isCorrect: false, isSelected: false, },
            { id: 2, text: "Skrót od 'proponents', używane do definiowania funkcji komponentów", isCorrect: false, isSelected: false, },
            { id: 3, text: "Obiekt zawierający dane, które są przekazywane do komponentu i pozwalają na dostęp do tych danych wewnątrz komponentu", isCorrect: true, isSelected: false, },
            { id: 4, text: "Kolekcja zainstalowanych bibliotek w projekcie React", isCorrect: false, isSelected: false, },
        ],
    },
    {
        id: 4,
        content: "Dlaczego niemutowalność (immutability) jest ważna w programowaniu w React:",
        answers: [
            { id: 1, text: "Niemutowalność pomaga w unikaniu niezamierzonych efektów ubocznych i ułatwia debugowanie", isCorrect: true, isSelected: false, },
            { id: 2, text: "Niemutowalność poprawia wydajność komponentów React", isCorrect: false, isSelected: false, },
            { id: 3, text: "Niemutowalność pozwala na bezpośrednie modyfikacje stanu komponentu", isCorrect: false, isSelected: false, },
            { id: 4, text: "Niemutowalność jest zbędna w programowaniu w React", isCorrect: false, isSelected: false, },
        ],
    },
    {
        id: 5,
        content: "Do czego służy metoda map() w JavaScript:",
        answers: [
            { id: 1, text: "Do zmiany rozmiaru tablicy", isCorrect: false, isSelected: false, },
            { id: 2, text: "Do iteracji po elementach tablicy i tworzenia nowej tablicy na podstawie wyników funkcji wywoływanej dla każdego elementu", isCorrect: true, isSelected: false, },
            { id: 3, text: "Do sortowania elementów tablicy", isCorrect: false, isSelected: false, },
            { id: 4, text: "Do usuwania elementów z tablicy", isCorrect: false, isSelected: false, },
        ],
    },
];