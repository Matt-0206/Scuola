# Inizializzare la cartella locale come git repo

cd/Desktop/test-site

```
git init
```

### Creare una repo per il mio codice su github

si accede al proprio account github e si crea una nuova repository

Una volta creato il repo ci interessa la prima riga: 'or push an exsisting repository...'

![](C:\Users\m.alliu.50671\AppData\Roaming\marktext\images\2024-03-21-11-25-51-image.png)

Inserire la seguente riga di codice all'interno del promt di powershell:

(sostituire le informazioni tra parentesi)

```
git remote add origin https://github.com/[username]/[repository name]
```

In seguito inserire il seguente codice:

```
git add --all
```

ed

```
git commit -m 'Inserire il nome del commit'
```

Infine eseguire il comando push:

```
git push -u origin main
```

Se vogliamo aggiornare il Repo su GitHub (online) con nuove modifiche apportate alla cartella locale: 

```
git add --all 
git commit -m 'Inserire il nome del commit o eventuali modifiche'
git push -u origin main
```

# Creazione repo su GitHub

Passaggio 1) Come si crea una repository su GitHub?

Dopo aver creato il nostro account GitHub ci troveremo nella "Dashboard", dove vedremo le nostre repository create. Ma come si crea una Repository? Ci sono due opzioni possibili per questa azione:

* In altro a sinistra della pagine ( alla destra della voce "Top Repositories" ) si troverà la voce New;

* Il secondo metodo consiste nell'utilizzo del piccolo menu che si trova alla destra della pagina dove troveremo una icona "+". Dalle voci che appariranno nel menù selezionare la voce "New Repository".

![](C:\Users\m.alliu.50671\AppData\Roaming\marktext\images\2024-03-21-11-44-04-image.png)

------------------------------------------------------------------------------------------------------------------------------

Passaggio 2) Creare la Repository

Una volta eseguito il Passaggio 1, saremo presentati alla seguente videata:

![](C:\Users\m.alliu.50671\AppData\Roaming\marktext\images\2024-03-21-11-49-39-image.png)

Dovremo semplicemente inserire il nome della nostra repository (in questo caso "test_"), e dovremo decidere se la nostra repository sarà pubblica o privata.

Qual'è la differenza?

- Repository pubblica: tutti su internet potranno accedere e modificare la repository;

- Repository privata: Il proprietariio devide chi può visualizzare e modificare la repository.

------------------------------------------------------------------------------------------------------------------------------

# Inizializzare la cartella locale come Repository su GitHub

Dopo aver creato la nostra repository (Creazione repo su GitHub) necessiteremo di una cartella locale, e di Windows PowerShell

Passaggio 1) Creare la cartella locale

Per prima cosa dovremo creare una cartella nella destinazione desiderata:

 ![](C:\Users\m.alliu.50671\AppData\Roaming\marktext\images\2024-03-21-12-01-41-image.png)

In questo caso chiameremo la cartella "test"

------------------------------------------------------------------------------------------------------------------------------

Passaggio 2) Inizializzare la cartella

Una volta creata la nostra cartella dovremo inizializzarla. Come si fa?

Per Prima cosa bisogna aprire Windows PowerShell

![](C:\Users\m.alliu.50671\AppData\Roaming\marktext\images\2024-03-21-12-04-15-image.png)

Questo è quello che vedremo una volta aperto il pannello.

Tramite PowerShell dovremo "entrare" nella nostra cartella con l'utilizzo del comando "cd" seguito dal percorso della cartella

In questo caso:

![](C:\Users\m.alliu.50671\AppData\Roaming\marktext\images\2024-03-21-12-06-44-image.png)

Ricapidolando il  comando è: 

```
cd [percorso della cartella]
```

![](C:\Users\m.alliu.50671\AppData\Roaming\marktext\images\2024-03-22-10-48-19-image.png)

Questo sarà il risultato.

Una volta svolti questi passaggi bisognerà utilizzare il comando:

```
git init
```
