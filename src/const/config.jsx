import StepOneContent from '../components/StepOne'
import StepThree from '../components/StepThree'
import StepTwo from '../components/StepTwo'

export const steps = [
  { label: 'Cargar partipantes', content: <StepOneContent /> },
  { label: 'Configurar y sortear', content: <StepTwo /> },
  { label: 'Hay un ganador!', content: <StepThree /> }
]
