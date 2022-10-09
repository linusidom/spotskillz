import { APINotes } from "./APINotes"
import { DjangoNotes } from "./DjangoNotes"
import { PythonNotes } from "./PythonNotes"

export const PythonPage = () => {
    return(
        <div>
            <PythonNotes/>
            <DjangoNotes/>
            <APINotes/>
        </div>
    )
}