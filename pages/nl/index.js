import Head from "next/head";
import About from "@components/About";
import Contact from "@components/Contact";
import Main from "@components/Main";
import Projects from "@components/Projects";
import Skills from "@components/Skills";

const AboutContentHtml = `
  In 2018 behaalde ik mijn bachelordiploma in IT. Vervolgens begon ik met het ontwikkelen van websites op CMS-platforms zoals WordPress/WooCommerce, Drupal, Lightspeed en Shopify.
  <br />
  <br />
  Ik heb ervaring in het werken met klanten en breng ontwerpen volledig tot uitgevoerde applicaties met de hulp van een team van ontwikkelaars, ontwerpers en projectmanagers.
  <br />
  Ik bouw graag webshops met een focus op product, gebruikerservaring en SEO.
  <br />
  In mijn vrije tijd help ik bij het opbouwen en ontwikkelen van een ecosysteem voor een startup opgericht in 2022, Finvictum.`

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Jordy Leysen | Front-End Developer | Website bouwer</title>
        <meta name="description" content="Ik ben een front-end webontwikkelaar die zich specialiseert in het creëren van digitale ervaringen, webshops en websites voor KMO's en bedrijven." />
        <link rel="icon" href="/fav.jpeg" />
        <link rel="alternate" hreflang="en" href="https://www.leytech.be"/>
      </Head>
      <Main upper={"LATEN WE SAMEN IETS BOUWEN"} title={"Hallo, ik ben "} title2={" een webontwikkelaar"} name={"Jordy"} subTitle={"Ik richt me op het bouwen van responsieve front-end webapplicaties met integratie van back-end technologieën, professionele website, kmo's en bedrijven. Beschikbaar voor freelance werk en consultancy."} />
      <About title='Over mij' subtitle={'Wie ben ik'} content={AboutContentHtml} urlLabel={"Bekijk mijn laatste projecten"}/>
      <Skills title={"Services"} subTitle={"Wat ik voor jou kan doen"} />
      <Projects lang={"nl"} />
      <Contact />
    </div>
  );
}
