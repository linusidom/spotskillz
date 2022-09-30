import { BackEnd } from "./BackEnd"
import { FrontEnd } from "./FrontEnd"
import { CurriculumHero } from "./CurriculumHero"
import { FullStack } from "./FullStack"

export const Curriculum = () => {
    return (
        <div>
            <CurriculumHero/>
            <FrontEnd/>
            <BackEnd/>
            <FullStack/>
            
        </div>
    )
}