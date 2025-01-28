const fs = require('fs').promises;
const {google} = require('googleapis');
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
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'], // Add the required scopes for your use case
});
return auth;
}
//============================================
// Lire les données du fichier spreadsheetId
async function getData(auth) {
console.log("GetData running ");
//Créer une instance du service Sheets
const sheets = google.sheets({ version: 'v4', auth });
//Example de Google
    //const spreadsheetId = '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms';
    //const range = 'Class Data!A2:E'; 
//Example de SDU dubser123@gmail.com
    const spreadsheetId ='1bPJvBFk6cj9jKfxIOB3RuCZOoHFy3vZAjTGBgAx6jFE';
    const range = 'Feuille 1!A1:C10';

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
    const dataJson = await readCred()
    const auth1=setAuth(dataJson)
    await getData(auth1);

    console.log('Toutes les opérations sont terminées.');
    console.log('===========================================================');
  } catch (error) {
    console.error('Erreur lors de l’exécution séquentielle :', error.message);
  }
}

// Appel de la fonction principale
executeAll();
