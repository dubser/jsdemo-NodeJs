Voir prenierspas.js plus de documentation. 
Cette démo utilise prenierspas et en fait une version pour production
avec vite.js. https://vite.dev/guide/

++ Cette commande crée un dossier vite_premPas
    npm create vite@latest vite_premPas 
++Choisir un template vanilla
++ Retirer les modules par défaut et placer les modules 
désirés dans les bonnes sections créées. Le fichier index.html 
doit se trouves a l'origine .
++ Ouvrir une fenetre de commande dans le dossier  vite_premPas
++ Faire installe pour mettre a jour package.json puis run dev 
   pour essayer la projet.
    grelot:vite_premPas $ npm install
    npm run dev
++ Essayer et tester le projet dans le navigateur web. Voir 
   aussi la console web avec f12. 
++ Faire .... npm run build ..L'exécutable du projet va etre 
   construit et placé dans le dossier "dist". Il est possible 
   de prévisualiser l'exécution en faisant ...npm run preview
++ On peut déplacer le contenu du dossier "dist" sur le serveur 
   Web de production.
++ ATTENTION.. Dans mon cas comme le serveur Web de production 
   pour faire les essais était un serveur local, supportant déjà
   Wordpress dans son host par défaut, il a été nécessaire de 
   créer un Vhost Apache. Le root file n'a pas pu etre placé
   sous /var/www/html, a cause de l'influence de .htaccess 
   placé dans ce dossier par Wp et inflencant les enfants du dossier.
   Le root file "test" a donc été placé dans /var/www/ tel qu'indiqé
   dans /etc/apache2/sites-available/test.conf .... ci bas Il est aussi
   utile de pointer le Vhost local dans /etc/hosts
   =============================================
   <VirtualHost *:80>
    ServerAdmin webmaster@localhost
    ServerName test
    DocumentRoot /var/www/test

    <Directory /var/www/test>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/test_error.log
    CustomLog ${APACHE_LOG_DIR}/test_access.log combined
   </VirtualHost>
   =============================================

   La méthode de configuration d'un vhost peut etre obtenue 
   en demandant a ChatGpt:
   Comment creer un vhost apache2 nommé test sur localhost en 
   supplément du defaut.
   
