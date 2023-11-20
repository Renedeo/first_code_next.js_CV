"use client";  // Ajout de cette ligne pour activer le mode strict
import * as React from "react";
import Stack from "@mui/material/Stack";
import { Link, Image } from "@chakra-ui/react";
import { StyledEngineProvider } from "@mui/material/styles";
import TimelineContentItems from "./component/timelineContent";
import Divider from "@mui/material/Divider";
import ContentItem from "./component/contentItem";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ContactMail, LinkedIn, LocalPhone } from "@mui/icons-material";
import { Avatar, Typography} from "@mui/material";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import LinguisticSkills from "./component/linguistic";

const content_comp: ContentItem[] = [
  {
    date: "présent - Sept. 2023",
    title: "Master 2 Web/Data Analyse",
    subtitle: "Université de Lille, (Lille, France)",
    items: {
      description: "",
      item: [
        "Création et gestion de base de données",
        "Gestion de projet",
        "Carte Géomarketing avec R",
        "Développement Web et Application"
      ]
    }
  },
  {
    date: "Juin 2023 - Sept. 2022",
    title: "Master 1 Web/Data Analyse",
    subtitle: "Université de Lille, (Lille, France)",
    items: {
      description: "",
      item: [
        "Digital Analytics, Marketing et Business Intelligence",
        "Méthode d’analyse de données",
        "Data Mining, Machine Learning",
        "Introduction aux Réseaux de Neurones",
        "Méthode de prévisions de données temporelles",
        "Création et gestion de bases de données"
      ]
    }
  },
  {
    date: "Août 2022 - Sept. 2019",
    title: "Licence Mathématique et Informatique",
    subtitle: "Université de Grenoble Alpes, (Grenoble, France)",
    items: {
      description: "",
      item: [
        "Conception, optimisation et implémentation d’algorithmes en C, C++, Python",
        "Probabilités et Statistiques",
        "Conception Assistée par Ordinateur"
      ]
    }
  }
];

const content_exp: ContentItem[] = [
  {
    date: "Juin 2023 - Avril 2023",
    title: "Référencement Naturel",
    subtitle: "Interieurdeco, (Lille, France)",
    items: {
      description: "Stage - Apporter des solutions pour améliorer la visibilité du site web de l’entreprise",
      item: [
        "Créer une base de données des Backlinks vers le site",
        "Réaliser du référencement naturel sur le site",
        "Suggérer des mots-clés pour améliorer notre classement"
      ]
    }
  },
  {
    date: "Juin 2022 - Août 2022",
    title: "Développement Web et Data Analyse",
    subtitle: "Polygon Consulting, (Lille, France)",
    items: {
      description: "Stage - Créer un site web vitrine, Analyse et prévision des données biaisées par le règlement de la RGPD sur la collecte de données hors union européenne",
      item: []
    }
  },
  {
    date: "Avril 2022",
    title: "Gestion de Projet",
    subtitle: "ENLAPS, (Grenoble, France)",
    items: {
      description: "Projet en entreprise - Géolocalisation du lieu de prise d’un timelapse en exploitant les métadonnées des photos avec Python",
      item: [
        "Rythme de travail Agile",
        "Traitement des données",
        "Recherche de solutions adaptées",
        "Mise en place d’algorithmes et Implémentation",
        "Rédaction d’une documentation",
        "Rédaction d’un cahier de charge"
      ]
    }
  },
];

const img_comp = [
  {
    path_name: "./image/css.png",
    cv_name: "CSS",
  },
  {
    path_name: "./image/html.png",
    cv_name: "HTML",
  },
  {
    path_name: "./image/js.png",
    cv_name: "JavaScript",
  },
  {
    path_name: "/image/php.png",
    cv_name: "PHP",
  },
  {
    path_name: "./image/Py.png",
    cv_name: "Python",
  },
];

const soft_skills = [
  "Autonomie",
  "Sens de l'organisation"
];

const linguisticSkills = [
  {
    language: "French",
    level: "Native speaker",
    proficiency: 80
  },
  {
    language: "English",
    level: "Fluent",
    proficiency: 60
  },
  // Add more languages and proficiency levels as needed
];


export default function Home() {
  const list_comp = img_comp.map((element, index) => {
    return (
      <ListItem key={index}>
        <ListItemIcon>
          <Avatar alt={element.cv_name} src={element.path_name} sx={{ width: 24, height: 24 }} />
        </ListItemIcon>
        {element.cv_name}
      </ListItem>
    );
  });

  const softSkills = soft_skills.map((element, index) => {
    return (
      <ListItem key={index}>
        {element}
      </ListItem>
    );
  });

  return (
    <Stack direction="column">
        <Stack direction="row" spacing={3}>

          <Stack direction="row" alignItems="center" width="700px" spacing={2}>
            <Image
              borderRadius="full"
              boxSize="200px"
              src="./image/Photo_identité.JPG"
              alt="Photo d'identité"
            />
            <Divider orientation="vertical" />
            <Typography variant="h4" gutterBottom>
              René OKE CODJO
            </Typography>
            <Typography variant="h5" gutterBottom>
              Recherche stage 6 mois
            </Typography>
            <Typography variant="h6" gutterBottom>
              Début janv. 2024
            </Typography>
          </Stack>

          <Box
            sx={{
              py: "10px",
              width: "100%",
              maxWidth: 200,
              alignSelf: "center"
              // bgcolor: "background.paper",
            }}
          >
            <nav aria-label="main mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <LocalPhone />
                  </ListItemIcon>
                  <ListItemText primary="+336 65 26 91 46" />
                </ListItem>

                <ListItem disablePadding>
                  <ListItemIcon>
                    <ContactMail />
                  </ListItemIcon>
                  <ListItemText primary="orene.alerte@gmail.com" />
                </ListItem>

                <ListItem disablePadding>
                  <ListItemIcon>
                    <LinkedIn />
                  </ListItemIcon>
                  <Typography>

                    <Link href='https://www.linkedin.com/in/rene-oke-codjo' isExternal>
                      rene-oke-codjo <ExternalLinkIcon mx='2px' />
                    </Link>
                  </Typography>
                </ListItem>
              </List>
            </nav>
          </Box>
        </Stack>

        <Stack direction="row">
          <Stack
            width="700px"
            minWidth="700px"
          >
            <Divider
              textAlign="left"
              sx={{
                marginTop: "20px"
              }}
            >
              <Typography
              fontSize="20px"
              >
                Formation
              </Typography>
              {/* <Chip label="Formation" /> */}
            </Divider>

            <Stack direction="row">
              <React.StrictMode>
                <StyledEngineProvider injectFirst>
                  <TimelineContentItems content={content_comp} />
                </StyledEngineProvider>
              </React.StrictMode>
            </Stack>

            <Divider
              textAlign="left"
            >
              {/* <Chip label="Expérience" /> */}
              <Typography
              fontSize="20px"
              >
                Expérience
              </Typography>
            </Divider>

            <Stack direction="row">
              <React.StrictMode>
                <StyledEngineProvider injectFirst>
                  <TimelineContentItems content={content_exp} />
                </StyledEngineProvider>
              </React.StrictMode>
            </Stack>
          </Stack>

          <Stack
            pl="20px"
          >
            <List component="nav" aria-label="mailbox folders">

              <ListItem>
                <List>
                  <ListItemText primary="Compétence technique" />
                  {list_comp}
                </List>
              </ListItem>

              <ListItem>
                <List>
                  <ListItemText primary="Soft Skills" />
                  {softSkills}
                </List>
              </ListItem>

              <ListItem>
                <List>
                  <ListItemText primary="Compétence Linguistique" />
                  <LinguisticSkills />
                </List>
              </ListItem>

            </List>

          </Stack>
        </Stack>
      </Stack>
    )
}