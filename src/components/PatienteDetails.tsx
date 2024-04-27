import { toast } from "react-toastify";
import { usePatientStore } from "../store";
import { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";

type PatienteDetailsProp = {
  patient: Patient;
};

export default function PatienteDetails({ patient }: PatienteDetailsProp) {

    const deletePatient = usePatientStore((state) => state.deletePatient)  
    const getPatientById = usePatientStore((state) => state.getPatientById) 
    
    const handleClick = () => {
        deletePatient(patient.id)
        toast("Paciente Eliminado", {
            type: "error",
        })
    }

    /*const {deletePatient, getPatientById} = usePatientStore() OTRA FORMA*/
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="ID" data={patient.id} />
      <PatientDetailItem label="Nombre" data={patient.name} />
      <PatientDetailItem label="Dueño" data={patient.caretaker} />
      <PatientDetailItem label="Email" data={patient.email} />
      <PatientDetailItem label="Fecha Alta" data={patient.date.toString()} />
      <PatientDetailItem label="Sintomas" data={patient.symptoms} />
      <div className="flex flex-col lg:flex-row justify-between gap-3 mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-purple-600 hover:bg-purple-700 text-white font-bold uppercase rounded-lg"
          onClick={() => getPatientById(patient.id)}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleClick}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
