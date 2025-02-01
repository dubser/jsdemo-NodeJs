const fs = require('fs').promises;
const { log } = require('console');
const {google} = require('googleapis');
//============================================
const spreadshId = '1bPJvBFk6cj9jKfxIOB3RuCZOoHFy3vZAjTGBgAx6jFE'; 
const rangeR = 'Feuille 1!A1:C10'; // Indique les cellules a lire
// Écriture
const rangeW = 'Feuille 1!C4'; // Indique la cellule où écrire
const valueW= ""; // Valeur à écrire ""..Empty

//============================================
async function readCred() {
  const filePath = 'credentials.json';
  try {
    // Lire le fichier en utilisant fs.readFile
    const content = await fs.readFile(filePath, 'utf8');
    dataJson = JSON.parse(content);
    //console.log("Json data =====>",dataJson);
    return dataJson;
  } catch (error) {
    console.error('Erreur lors de la lecture du fichier :', error.message);
  }
}
//============================================
// Préparer l'objet auth pour authentifier la lecture.
function setAuth(dataJson) {
const auth = new google.auth.GoogleAuth({
  credentials: {
      private_key:dataJson.private_key ,
      client_email: dataJson.client_email,
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'], // Add the required scopes for your use case
});


return auth;
}

//============================================
// Ecrire les données du fichier spreadsheetId
async function writeToSheet(auth,spreadshId,rangeW,valueW) {
  const client = await auth.getClient();

  const sheets = google.sheets({ version: "v4", auth});
  console.log('Write to sheet');
  const spreadsheetId = spreadshId; // ID de ta Google Sheet
  const range =  rangeW;
  const value =  valueW;

  //console.log("rangeW ", rangeW);

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range,
    valueInputOption: "RAW",
    resource: { values: [[value]] },
  });
  console.log('Relire après écriture');
  await getData(auth,spreadshId,rangeR,rangeW);
}
//============================================
// Lire les données du fichier spreadsheetId
async function getData(auth,spreadshId,rangeR) {
  //console.log("GetData running ");
  //Créer une instance du service Sheets
  const sheets = google.sheets({ version: 'v4', auth});
  
  //Example de SDU dubser123@gmail.com
      //const spreadsheetId ='1bPJvBFk6cj9jKfxIOB3RuCZOoHFy3vZAjTGBgAx6jFE';
      //const range = 'Feuille 1!A1:C10';
  
      const range = rangeR;
      const spreadsheetId = spreadshId;

  //console.log("Dans GetData range  W et R ", rangeW,rangeR);
  
        try {
          const res = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range,
          });
  
          const rows = res.data.values;
  
          if (rows.length) {
            console.log('Données lues avec succès :');
            rows.forEach((row) => {
              console.log(row);
            });
          } else {
            console.log('Aucune donnée trouvée.');
          }
        } catch (err) {
          console.error('Erreur lors de la lecture des données :', err);
        }
  
  }

//============================================
// Exécute chaque fonction et attendant qu'elle se termine ;
async function executeAll() {
  try {
    const dataJson = await readCred();
    const auth1=await setAuth(dataJson);
    await getData(auth1,spreadshId,rangeR,rangeW);
    await writeToSheet(auth1,spreadshId,rangeW,valueW);



    console.log('Toutes les opérations sont terminées.');
    console.log('===========================================================');
  } catch (error) {
    console.error('Erreur lors de l’exécution séquentielle :', error.message);
  }
}

// Appel de la fonction principale
executeAll();
