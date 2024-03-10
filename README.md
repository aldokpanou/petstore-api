Structure du projet de gestion des animaux 
--------------------------------------------------------

I. Authentification

-   `/auth/login` (POST): Authentification et obtention d'un token JWT.

II. Gestion des animaux (CRUD)

-   `/pets`

    -   `GET`: Liste des animaux.
    -   `POST`: Création d'un animal.
-   `/pets/:id`

    -   `GET`: Obtention d'un animal par son ID.
    -   `PUT`: Modification d'un animal.
    -   `DELETE`: Suppression d'un animal.


III. Documentation

-   Documentation Swagger disponible à l'URL `/api`.

IV. Technologies utilisées

-   NestJS
-   Swagger
-   TypeScript
-   Prisma ORM
-   PostgreSQL 
-   class-validator
-   JWT 

VI. Installation

1.  Cloner le dépôt GitHub.
2.  Installer les dépendances.
3.  Configurer la base de données.
4.  Créer la base de données.
5.  Appliquer les migrations.
6.  Lancer l'application.

VII. Utilisation

1.  Authentifiez-vous pour obtenir un token JWT.
2.  Accédez à l'API en incluant le token JWT dans l'en-tête `Authorization` .
3.  Consultez la documentation Swagger pour découvrir les endpoints disponibles.

VIII. Contributions

Les contributions sont les bienvenues ! Veuillez ouvrir une issue pour discuter des changements que vous souhaitez apporter.

IX. Améliorations possibles

-   Ajout de la gestion des photos des animaux.
-   Ajout d'un système de notification pour les nouveaux animaux ou les modifications.

