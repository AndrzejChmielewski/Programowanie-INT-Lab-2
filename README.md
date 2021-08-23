## Jak uruchomić stronę z przepsiami 
## Andrzej Chmielewski - 8862

1. Trzeba utworzyć folder uploads - potrzebny do zapisywania zdjęć potraw - NP wpisać 
```
mkdir uploads
```

2. Następnie trzeba stworzyć plik .env według wzoru 
```
PORT = 3001
JWT_SECRET = "dowolny"
MONGO_URI = "mongodb://127.0.0.1:27017/"
```
3. Następnie wprowadzić ->
```
npm install
npm run install
npm run dev
```
4. Ostatecznie trzeba wpisać w głownym katalogu, oraz client
```
npm start
```

5. Aplikacja powinna się uruchomić w przeglądarce

JWT_SECRET - przypadkowy/dowolny string
MONGO_URI - dane do mongo db (baza danych)

6. Obsługa
###  Adminin
Żeby mieć konto z uprawnieniami usuwania i edycji przepisów,Tworzymy konto na mail `admin@admin.pl`