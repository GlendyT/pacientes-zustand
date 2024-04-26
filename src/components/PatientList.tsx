import { usePatientStore } from "../store";
import PatienteDetails from "./PatienteDetails";

export default function PatientList() {
  const patients = usePatientStore((state) => state.patients);

  console.log(patients);
  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <> 
        <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
        <p className="text-xl mt-5 mb-10 text-center">
          Administra tus {""}
          <span className="text-purple-600 font-bold">Pacientes y Citas</span>
        </p>
        {patients.map( patient => (
          <PatienteDetails
           key={patient.id}
           patient={patient}
          />
        ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center"> No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center"> Comienza agregando pacientes {""}
            <span className="text-purple-600 font-bold">y apareceran aqui</span>
          </p>
        </>
      )}
    </div>
  );
}
