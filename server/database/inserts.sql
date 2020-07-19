
INSERT INTO filieres (name, description,pictureUrl)
VALUES (
    'Génie Informatique',
    'Une Genie tres tres dangereuse',
    'https://www.exclusif.net/photo/art/default/30001102-28803812.jpg?v=1548184072'
  );

INSERT INTO programmes (name, description, filiere_id)
  VALUES (
      '4eme annee',
      'Le programme de la 4eme annee genie informatique est tres dangereux',
1    );

INSERT INTO modules (
    name,
    description,
    charge_horaire,
    programme_id
  )
VALUES (
    'Spring Framework',
    'An amazing framework for backend devlopment',
    '40H',
1  );
INSERT INTO supports (name, description,type, url, urlContentType, module_id)
VALUES (
    'Cours Spring',
    'Description cours spring',
    'cours',
    'https://github.com/elyaakoubi/supportGenieLogiciel2020',
    'link',
    1
  );

INSERT INTO admins (username,password) VALUES ("JAWAD",PASSWORD('JAWAD'));