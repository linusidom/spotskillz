import { SelfPacedHero } from "./Hero"
import { SelfPacedMachineLearning } from "./SelfPacedMachineLearning"
import { SelfPacedNode } from "./SelfPacedNode"
import { SelfPacedPython } from "./SelfPacedPython"

export const SelfPaced = () => {
    return(
        <div className="selfPaced">
            <SelfPacedHero/>

            <SelfPacedNode/>

            <SelfPacedPython/>

            <SelfPacedMachineLearning/>


        </div>
    )
}