# Filmoteka

Prywatny postęp oglądania w publicznej aplikacji. 233 pozycje, wyszukiwanie, priorytety, lista na wieczór, oceny, notatki i eksport/import kopii JSON.

## GitHub Pages
Wgraj zawartość tego folderu do głównego katalogu publicznego repozytorium. W Settings → Pages wybierz Deploy from a branch, gałąź main i katalog / (root), następnie Save.

## iPhone
Otwórz adres opublikowanej strony w Safari. Wybierz Udostępnij → Dodaj do ekranu początkowego i otwieraj filmotekę z utworzonej ikony. Po pierwszym pełnym załadowaniu i zapisaniu strony w pamięci podręcznej może działać offline.

Wybierz „Włącz wspólny zapis” i zaloguj się linkiem z e-maila na każdym urządzeniu. Użyj tego samego adresu konta Supabase (darmowa usługa e-mail obsługuje tylko członków projektu). Link otwieraj na urządzeniu, na którym chcesz się zalogować. Na iPhonie korzystaj z Safari; ikona na ekranie początkowym może mieć osobną sesję logowania.

Po zalogowaniu statusy, oceny, notatki i lista na wieczór zapisują się na koncie Supabase. Każde konto ma własne dane chronione RLS. Zmiany bez internetu czekają lokalnie na ponowne połączenie. Aplikacja odświeża zapis po powrocie do okna i co 15 sekund. Przed logowaniem działa zapis lokalny. Wyjściowa lista, w tym 21 oznaczonych pozycji, jest częścią publicznej strony; późniejsze prywatne zmiany nie trafiają do repozytorium GitHub.

Aby zachować wcześniejszy postęp, po pierwszym zalogowaniu na urządzeniu z aktualną listą wybierz „Przenieś zapis z urządzenia”. Operacja zastępuje dane na koncie po potwierdzeniu. Na pozostałych urządzeniach wystarczy logowanie. Eksport JSON pozostaje dodatkową kopią zapasową.

Aby przenieść postęp z komputera: użyj Eksport listy, przenieś plik JSON na iPhone, a w filmotece otwartej z ikony wybierz Wczytaj kopię. Starsze kopie z 228 pozycjami są automatycznie rozszerzane.
