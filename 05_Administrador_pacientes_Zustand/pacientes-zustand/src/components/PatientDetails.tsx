import { toast } from "react-toastify"
import { usePatientStore } from "../store/store"
import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"

type PatientDetailsProps = {
    patient: Patient
}

export default function PatientDetails({patient}:PatientDetailsProps) {

    const deletePatient = usePatientStore(state=> state.deletePatient)
    const getPatientId = usePatientStore(state=> state.getPatientId)

    const handleClick = ()=>{
        deletePatient(patient.id)
        toast("Paciente eliminado", {
            type:"error"
        })
    }

  return (
    <div className=" mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
        <PatientDetailItem label = "id" data = {patient.id}/>
        <PatientDetailItem label = "Nombre" data = {patient.name}/>
        <PatientDetailItem label = "Dueño" data = {patient.caretaker}/>
        <PatientDetailItem label = "Email" data = {patient.email}/>
        <PatientDetailItem label = "Fecha ingreso" data = {patient.date.toString()}/>
        <PatientDetailItem label = "Sintomas" data = {patient.symptoms}/>

        <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
            <button
                type="button"
                className=" bg-indigo-600 hover:bg-indigo-700 rounded-lg px-10 py-2 uppercase text-white font-bold"
                onClick={()=>getPatientId(patient.id)}
            >
                Editar
            </button>
            <button
                type="button"
                className=" bg-red-600 hover:bg-red-700 rounded-lg px-10 py-2 uppercase text-white font-bold"
                onClick={handleClick}
            >
                Eliminar
            </button>

        </div>
    </div>
  )
}
