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
