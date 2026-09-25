/**
 * Placeholder photography from Unsplash, taken from the design.
 * Replace each entry with the project's own photos before launch; while they
 * are hotlinked from Unsplash, the credit overlay must stay visible.
 */
export interface Photo {
  unsplashId: string;
  author: string;
  username: string;
  alt: string;
}

const photo = (unsplashId: string, author: string, username: string, alt: string): Photo => ({
  unsplashId,
  author,
  username,
  alt,
});

export const photos = {
  heroCoast: photo('1618064541372-289bdb6f5b7b', 'Hugh Whyte', 'opixels', 'Costa caribeña al atardecer'),
  aerialView: photo('1541417904950-b855846fe074', 'Nattu Adnan', 'reallynattu', 'Vista aérea de la costa'),
  caribbeanHorizon: photo('1720043792249-ce6ad74dda23', 'Ricky Beron', 'nacio1966', 'Horizonte del mar Caribe'),
  nearbyBeach: photo('1514480605825-a4804160b313', 'Rajvinder singh', 'singhwithanh', 'Playa cercana'),
  coastline: photo('1616555846456-6d53b92669a8', 'Hugh Whyte', 'opixels', 'Línea de costa'),
  aerialDevelopment: photo('1663513628041-1ca7257e853d', 'Hugh Whyte', 'opixels', 'Vista aérea del litoral'),
  falconBeach: photo('1672841828271-54340a6fbcd3', 'Simon Spring', 'springsimon', 'Playa de arena y mar'),
  seaside: photo('1506953823976-52e1fdc0149a', 'Maarten van den Heuvel', 'mvdheuvel', 'Orilla del mar'),
  accessRoad: photo('1564490292125-2e3c78a0ef44', 'Harshil Gudka', 'hgudka97', 'Camino de acceso'),
  shore: photo('1509233725247-49e657c54213', 'Matthew Brodeur', 'mrbrodeur', 'Playa con palmeras'),
  falconLandscape: photo('1666837147745-1c9dea9908a4', 'Joshua Kettle', 'joshuakettle', 'Paisaje costero'),
  naturalArea: photo('1693418617590-e3dce76b6c0b', 'Fiona Murray-deGraaff', 'fionamurrayphoto', 'Entorno natural'),
  terrain: photo('1649552898570-05e543b012c7', 'Annie Spratt', 'anniespratt', 'Terreno con vegetación'),
  familyBeach: photo('1709216461598-018ae6307dc0', 'Chris Hardy', 'chrishardyphotography', 'Familia en la playa'),
  advisorCall: photo('1616587226960-4a03badbe8bf', 'LinkedIn Sales Solutions', 'linkedinsalesnavigator', 'Asesor en videollamada con un cliente'),
  works1: photo('1613928270169-4e4462c75a79', 'Caspar Rae', 'raecaspar', 'Trabajos en el terreno'),
  works2: photo('1765972280045-7d0e47b376e3', 'Siborey Sean', 'siborey', 'Trabajos en el terreno'),
  works3: photo('1788058539956-306a09fdceef', 'Troy Mortier', 'troyscanon', 'Trabajos en el terreno'),
  works4: photo('1783030672834-c4468c118bfc', 'Roger Starnes Sr', 'rstar50', 'Trabajos en el terreno'),
  works5: photo('1614366324821-cfa7713a5163', 'Caspar Rae', 'raecaspar', 'Trabajos en el terreno'),
  works6: photo('1763515186653-2df0fba44697', 'Chandler Cruttenden', 'chanphoto', 'Trabajos en el terreno'),
  islaView1: photo('1730005523015-422bd53dda0b', 'Raphael', 'white_attire', 'Vista de la zona'),
  islaView2: photo('1766696458220-46a56a9fecfb', 'Maik Winnecke', 'maik_wi', 'Vista de la zona'),
  islaView3: photo('1787537381870-dee3a265a803', 'Kellen Riggin', 'kalaniparker', 'Vista de la zona'),
  islaView4: photo('1631645033513-15144f920557', 'Jack Barton', 'jack_barton', 'Vista de la zona'),
} satisfies Record<string, Photo>;
