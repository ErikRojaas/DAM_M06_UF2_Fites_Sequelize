const express = require('express');
const { crearUsuari, obtenirComentarisPerUsuari } = require('../controllers/UsuariController');

const router = express.Router();

/**
 * @swagger
 * /api/usuaris:
 *   post:
 *     summary: Crea un nou usuari
 *     description: Crea un nou usuari amb les dades proporcionades
 *     tags: [Usuari]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 description: Nom d'usuari únic
 *               email:
 *                 type: string
 *                 description: Correu electrònic de l'usuari
 *               password:
 *                 type: string
 *                 description: Contrasenya de l'usuari
 *               nom:
 *                 type: string
 *                 description: Nom complet de l'usuari
 *               idioma:
 *                 type: string
 *                 description: Idioma preferit de l'usuari
 *     responses:
 *       201:
 *         description: Usuari creat amb èxit
 *       400:
 *         description: Les dades proporcionades no compleixen els requisits
 *       409:
 *         description: Ja existeix un usuari amb aquest nom d'usuari o email
 */
router.post('/', crearUsuari);

/**
 * @swagger
 * /api/usuaris/comentaris/{id_usuari}:
 *   get:
 *     summary: Obté els comentaris d'un usuari
 *     description: Retorna la llista de comentaris d'un usuari junt amb informació del vídeo
 *     tags: [Usuari]
 *     parameters:
 *       - name: id_usuari
 *         in: path
 *         description: ID de l'usuari per obtenir els seus comentaris
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Comentaris de l'usuari obtinguts amb èxit
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                   example: true
 *                 missatge:
 *                   type: string
 *                   example: "Comentaris de l'usuari obtinguts amb èxit"
 *                 resultat:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: ID del comentari
 *                       text:
 *                         type: string
 *                         description: Text del comentari
 *                       data_creacio:
 *                         type: string
 *                         format: date-time
 *                         description: Data de creació del comentari
 *                       video:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                             description: ID del vídeo
 *                           titol:
 *                             type: string
 *                             description: Títol del vídeo
 *                           url_video:
 *                             type: string
 *                             description: URL del vídeo
 *                           youtuber:
 *                             type: object
 *                             properties:
 *                               nom_canal:
 *                                 type: string
 *                                 description: Nom del canal de YouTube
 *       404:
 *         description: Usuari no trobat
 *       500:
 *         description: Error intern del servidor
 */
router.get('/comentaris/:id_usuari', obtenirComentarisPerUsuari);

module.exports = router;
