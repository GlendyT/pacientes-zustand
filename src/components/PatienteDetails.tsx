import { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";

type PatienteDetailsProp = {
  patient: Patient;
};

export default function PatienteDetails({ patient }: PatienteDetailsProp) {
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="ID" data={patient.id} />
      <PatientDetailItem label="Nombre" data={patient.name} />
      <PatientDetailItem label="Dueño" data={patient.caretaker} />
      <PatientDetailItem label="Email" data={patient.email} />
      <PatientDetailItem label="Fecha Alta" data={patient.date.toString()} />
      <PatientDetailItem label="Sintomas" data={patient.symptoms} />
      <div className="flex justify-between gap-3 mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-purple-600 hover:bg-purple-700 text-white font-bold uppercase rounded-lg"
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
