import { RouteParams } from "../assets/components/interfaces"
import { Link } from "../Link"

const i18n = {
  es:{
    title: "Sobre nosotros",
    button: "Ir a la home",
    description: "¡Hola! Me llamo David Martí y estoy creando un clon de React Request"
  },
  en:{
    title: "About us",
    button: "Go home",
    description: "¡Hi! My name is David Martí and I am creating a clone of React Request"
  }
}

const useI18n =(lang: 'es' | 'en') => {
  return i18n[lang] || i18n.en
}

export default function AboutPage({routeParams}: {routeParams: RouteParams}){
  const i18n = useI18n(routeParams.lang ?? 'es')

    return(
      <>
        <h1>{i18n.title}</h1>
        <div>
          <img src="https://media.licdn.com/dms/image/v2/C5603AQEJ5G7WW5cuOA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1571760459100?e=1734566400&v=beta&t=QbcU2ibmBuDSz2-dBEVvmKFeihleZgbenoAyZwzZB54" alt="David" />
          <p>{i18n.description}</p>
        </div>
        <Link to="/">{i18n.button}</Link>
      </>
    )
}
