import {store} from './store'

let texts = {};
 function getTexts() {

    const state =  store.getState();

    if(Object.keys(texts).length){
        return texts;
    }
    if(Object.keys(state.strings).length) {
        texts = state.strings;
        return texts;
    }else {
        return {
            "backToHome": "Zur Startseite",
            "changeName": "Namen \u00e4ndern",
            "favoriten": "Meine Favoriten",
            "fodmap": "FODMAP",
            "fodmapint": "Reizdarm",
            "fructose": "Fructose",
            "fructoseintDE": "Fructose Dauerern\u00e4hrung",
            "fructoseintKP": "Fructose Karenzphase",
            "gluten": "Gluten",
            "glutenint": "Z\u00f6liakie \/ Glutenverzicht",
            "greetings_afternoon": "Guten Tag",
            "greetings_evening": "Guten Abend",
            "greetings_midday": "Mahlzeit",
            "greetings_morning": "Guten Morgen",
            "hallo": "Hallo",
            "histamin": "Histamin",
            "histaminintDE": "Histamin Dauerern\u00e4hrung",
            "histaminintKP": "Histamin Karenzphase",
            "imprint": "Impressum",
            "intoleranzentext": "Je nach Angabe deiner Intoleranzen zeige ich dir in der Vertr\u00e4glichkeitsliste f\u00fcr dich geeignete Nahrungsmittel an.",
            "intro_placeholder4": "Dein (Spitz)name",
            "intro_text1": "Ich helfe dir dabei, deine Nahrungsmittel-Intoleranzen zu bew\u00e4ltigen.",
            "intro_text2": "Histamin, Laktose, Fructose, Gluten und Sorbit oder FODMAP-Werte. Ich kann hunderte Nahrungsmittel bewerten.",
            "intro_text3": "Meine Ergebnisse basieren auf wissenschaftlich gepr\u00fcften Ergebnissen & auf der Erfahrung hunderttausender Betroffener.",
            "intro_text4": "Wie darf ich dich nennen?",
            "intro_textHasName4": "Darf ich dich so nennen?",
            "intro_title1": "Hi, ich bin Ingrid.",
            "intro_title2": "Schnelle Suche!",
            "intro_title3": "Experten & Betroffene",
            "intro_title4": "Hallo Unbekannte\/r!",
            "labels_news": "News",
            "labels_suchliste": "Suchlisten",
            "lactose": "Laktose",
            "lactoseint": "Laktoseintoleranz",
            "more": "Mehr",
            "nahrungsmittel": "Alle Nahrungsmittel",
            "notices": "FAQ zur App",
            "repeatIntro": "Intro nochmal ansehen",
            "saveAndBack": "Speichern & Zur\u00fcck",
            "saveAndContinue": "Speichern & Weiter",
            "save": "Speichern",
            "setIntoleranzen": "Intoleranzen festlegen",
            "settings": "Settings & More",
            "skip": "\u00dcberspringen",
            "sorbit": "Sorbit",
            "sorbitint": "Sorbitintoleranz",
            "supportIngrid": "Ingrid werbefrei machen",
            "vertraeglichkeiten": "Nur vertr\u00e4gliche",
            "suchbegriff": "Suchbegriff",
            "period_of_rest": "Karenzphase",
            "duration": "Dauerern\u00e4hrung",
            "amount_of_sorbit": "Sorbit gesamt:",
            "amount_of_fructose": "Fruktose gesamt:",
            "amount_of_glucose": "Glukose gesamt:",
            "fructose_overall_factor": "Verh\u00e4ltnis F\/G:",
            "rating": "Deine Bewertung",
            "ratingInfo": "Deine pers\u00f6nliche Bewertung wird anonymisiert gespeichert. Zusammen mit der Bewertung anderer Betroffener, die dieselben Intoleranzen haben, wird das Ergebnis der Community zur Verf\u00fcgung gestellt.",
            "categories": "Kategorien",
            "list": "Liste",
            "nothingfound": "Ich konnte zu deinem Suchbegriff leider nichts finden",
            "intol": "Intoleranzen",
            "amount_of_lactose": "Laktose gesamt:",
            "community": "Community",
            "ingrid": "Ingrid",
            "communityRatingInfo": "Die Community-Bewertung basiert nicht auf wissenschaftlichen Werten.",
            "communityRatingGreen": "Vertrage ich gut",
            "communityRatingOrange": "Vertrage ich manchmal",
            "communityRatingRed": "Vertrage ich nicht",
            "communityNoDataText": "Leider habe ich noch zu wenige Bewertungen von der Community. Hilf mit, um Ingrid immer weiter zu verbessern!",
            "communityRatingTitle": "Andere Ingrid-UserInnen bewerten wie folgt:",
            "noIngRating": "keine Angabe",
            "noFavorites": "Noch keine Favoriten hinzugef\u00fcgt",
            "noConnection": "Hmm... Es sieht aus, als ob du keine Internetverbindung hast.",
            "back": "Zur\u00fcck",
            "restorePurchase": "Kauf wiederherstellen",
            "restorePurchaseSuccess": "Dein Kauf wurde erfolgreich wiederhergestellt. Danke, dass du mich unterst\u00fctzt.",
            "restorePurchaseError": "Ich konnte leider kein Abo mit deinem Account finden. Bitte gehe zu \"Ingrid werbefrei machen\" und schalte diese Funktion frei. Danke!",
            "ingList": "Zutatenliste beachten",
            "privacy": "Datenschutz",
            "updating": "Ich hole mir die neuesten Daten. Das kann einen Augenblick dauern.",
            "restoreAbo": "Dein Abo wurde erfolgreich wiederhergestellt!",
            "alreadySupporter": "Du unterst\u00fctzt Ingrid bereits. Vielen Dank daf\u00fcr!",
            "noAboFound": "Zu deinem Benutzer konnte kein Abo gefunden werden :-(",
            "adFreeTitle": "Abo Informationen",
            "adFreeText": "Wenn du dich f\u00fcr den Kauf von \u201eFrag Ingrid\u201c entscheidest, um die Werbung nicht mehr sehen zu m\u00fcssen, wird dir eine j\u00e4hrliche Zahlung von 5,99 EUR inkl. MWSt nach der Testperiode der App (falls vorhanden) vom App-Store verrechnet. Hierf\u00fcr ist dann deine Zustimmung erforderlich.\r\n\r\nDas Abo wird automatisch verl\u00e4ngert, so es nicht innerhalb von 24 Stunden vor Verl\u00e4ngerung von dir gek\u00fcndigt wird. Du kannst jederzeit \u00fcber deine iTunes-Einstellungen das Abo k\u00fcndigen. Jede ungenutzte Zeit der Testperiode verf\u00e4llt beim Kauf des Abos. F\u00fcr mehr Informationen lies dir bitte unsere Datenschutzbestimmungen und Benutzungsbedingungen durch.",
            "adFreeLink": "AGB & Datenschutzbedingungen "
        }
    }
}


module.exports = getTexts;