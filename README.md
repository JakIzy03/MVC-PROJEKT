Projekt:System zarządzania cyfrową biblioteką
Jest to aplikacja webowa umożliwiająca użytkownikom przeglądanie, dodawanie, usuwanie i edytowanie książek w swojej kolekcji. Aplikacja oparta jest na architekturze MVC (Model-View-Controller), co pozwala na klarowne podzielenie kodu na warstwy odpowiedzialne za logikę biznesową, prezentację danych oraz obsługę żądań HTTP.

Spis treści:
-Funkcjonalności:
-Instrukcja obsługi:
	a)Uruchamianie aplikacji
	b)Dodatkowe paczki

Funkcjonalności:

1.Przeglądanie katalogu książek: Użytkownicy mogą przeglądać listę dostępnych książek w swojej kolekcji. Każda książka jest przedstawiana z jej tytułem, autorem i rokiem wydania.
2.Dodawanie nowych książek: Użytkownicy mogą dodawać nowe książki do swojej kolekcji, podając tytuł, autora i rok wydania.
3.Edycja informacji o książkach: Użytkownicy mogą edytować informacje o istniejących książkach, w tym ich tytuł, autora i rok wydania.
4.Usuwanie książek: Użytkownicy mogą usuwać książki ze swojej kolekcji.

Instrukcje obsługi:

a)Uruchomienie aplikacji:

1.Upewnij się, że na Twoim systemie jest zainstalowany Node.js.
2.Sklonuj repozytorium projektu z GitHuba.
3.W terminalu przejdź do katalogu projektu.
4.Uruchom terminal i wpisz npm install, npm install express i npm install ejs, aby zainstalować wszystkie wymagane paczki.
5.Po zainstalowaniu paczek wpisz node app.js, aby uruchomić serwer.
6.Aplikacja będzie dostępna pod adresem http://localhost:3000 w przeglądarce.
b)Dodatkowe paczki:

Aplikacja wykorzystuje silnik szablonów EJS do generowania widoków oraz framework Express.js do obsługi żądań HTTP. Są to jedyne wymagane paczki.
