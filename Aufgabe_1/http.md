# Aufgabe 1 #
## a) ##

Um eine HTTP anfrage an einen Server zu stellen habe ich mich für das Tool Postman entschieden. 

![PostmanStartpage](Postman_Startpage.png) <br>
*Postman Startseite*

Um in Postman eine HTTP "GET" anfrage zu erstellen, klicken wir auf "New", oben links

![PostmanNewRequest](Postman_new_request.png) <br>
*Postman New Button*

Im sich nun geöffneten auswahl Dialog wählen wir "Http Request" aus.

![PostmanSelectHttpRequest](Postman_Http_Request.png) <br>
*Postman Http Request auswählen*

Nun können wir Http Anfragen formulieren. Dafür wählen wir zuerst die Art der Anfrage aus ('GET', 'POST' 'PUT', etc.) <br>
Ich werde eine Get Anfrage formulieren. dazu wähle ich in aus dem Drop-down menü den Punkt 'GET' aus.

![PostmanGetRequestTypeSelection](Postman_Select_Get.png)<br>
*Postman Get Anfragetypen auswählen*

Daraufhin geben wir die Adresse an, an welche wir die GET anfrage senden wollen. 
Dafür gebe ich im Eingabefeld neben der Typauswahl die URL 'www.google.de' ein. 

![PostmanURL](Postman_URL.png)<br>
*Postman Anfrage URL eingeben*

Durch klicken des 'Send' Knopfes, rechts des eingabefeldes können wir die HTTP anfrage senden und sehen im unteren Bereich des Fensters die antwort des Servers.

![PostmanGetRequestAnswer](Postman_Get_Request_Response.png)<br>
*Postman Antwort auf die GET anfrage an Google*

Dabei werden uns einige Status informationen (1) angezeigt und der "Body" der Antwort welcher in diesem Fall aus einer HTML Datei besteht. (2)

***

Wir können der GET Anfrage auch einige Parameter mitgeben welche in der anfrage URL "codiert" werden.

Dafür verändern wir die URL von 'www.google.de' zu 'www.google.de/search' um eine spezifische suchanfrage auszuführen. Nun können wir im Tab 'Params', unterhalb des URL Inupt feldes, ein 'Key-Value Paar' definieren um Google einen Suchparameter zu übergeben. 

![PostmanSearchParams](Postman_Search_Params.png)
*Postman Suchparameter für eine Google Suche*

Wir haben den 'Key' 'q' und den 'Value' 'Postman' gewählt (1) und könne sehen, das Postman unsere URL entsprechend erweitert hat (2).

Nach klick des 'Send' Knopfes sehen wir wieder eine HTML daten und den Status Code '200 OK' wodruch wir wissen, dass unsere Anfrage korrekt verarbeitet wurde. 
<br><br>

***

## b) ##

Das HyperText Transfer Protokol (HTTP) definiert, dass eine HTTP anfrage immer aus einem Kopf (Head) und einem Körper (Body) bestehen muss.

### Head ###

Der Kopf einer HTTP anfrage binhaltet 