import ServiceBiogas from '../components/Servicios/Biogas/ServiceBiogas'
import ServicesLayout from '../components/Servicios/ServicesLayout'

const serviciosBiogas = () => {
  return (
    <>
    <ServicesLayout bgImage="/assets/serviceBiogasPortada.JPG" title="Biogás"/>
    <ServiceBiogas />
    </>
  )
}

export default serviciosBiogas