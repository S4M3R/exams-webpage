# Proyecto de examenes

## Que es?

El proyecto trata de un sitio web que permitira a los usuarios leer y publicar preguntas sobre distintas materias, ademas de compartir soluciones y material

## Que usa?

El proyecto va a ser desrollado en node.js, express, pug y sql. Esto no significa que pueda cambiar en el futuro.

## Rutas:
### pagina:

/ - Es el landing de la pagina

/login - Registrarse y iniciar sesion con perfiles sociales

/q - Lista de preguntas  

/q/:idPreg - Pregunta

/q/:idPreg/a/Respuesta - Respuesta a pregunta

### API en api/:

/q

/a

## Base de Datos:

### MER:

### Tablas en 3FN:

users(id, username, name, surname, country, profile_img, description, github_name, twitter_handle, linkedin_user, website, creation, rank_id)

ranks(id,name,color)

medals(id, name, img_icon, description)

users_medals(id_user, id_medal, date)

post(id,id_user,date,category,title,content)

comment_post(id_post,id_user,id_comment,date,content)

exercices(id,id_user,subject,title)

exams(id,id_user,title,description)

list_exercices(id_user,id_exercices)

institutes(id,name,website,description,create,dir_street,dir_num,dir_city,dir_state,dir_country)

institutes_programs(id_institute, id_program)

programs(id,name)

programs_subjects(id_program, id_subject)

subjects(id,name)

lists(name,num)
